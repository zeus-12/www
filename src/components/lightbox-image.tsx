import { cn } from "@/lib/utils";
import { animate, motion, useMotionValue } from "motion/react";
import Image from "next/image";
import {
  type ImgHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const SPRING = { type: "spring" as const, stiffness: 300, damping: 30 };
const PADDING = 48;
const SCROLL_DISMISS_PX = 150;

type Rect = { top: number; left: number; width: number; height: number };
type Phase = "closed" | "open" | "closing";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function computeExpandedRect(el: HTMLImageElement, sourceRect: DOMRect): Rect {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxW = vw - PADDING * 2;
  const maxH = vh - PADDING * 2;
  const ratio =
    (el.naturalWidth || sourceRect.width) /
    (el.naturalHeight || sourceRect.height);

  let w: number, h: number;
  if (maxW / maxH > ratio) {
    h = maxH;
    w = h * ratio;
  } else {
    w = maxW;
    h = w / ratio;
  }

  return {
    top: (vh - h) / 2,
    left: (vw - w) / 2,
    width: w,
    height: h,
  };
}

type LightboxImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function LightboxImage({
  src,
  alt,
  width,
  height,
  className,
}: LightboxImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const phaseRef = useRef<Phase>("closed");
  const [phase, setPhase] = useState<Phase>("closed");

  const expandedRect = useRef<Rect | null>(null);
  const resolvedSrc = useRef("");
  const pendingOpen = useRef(false);
  const openScrollY = useRef(0);
  const openAnims = useRef<{ stop: () => void }[]>([]);
  const openAnimDone = useRef(false);

  const imgTop = useMotionValue(0);
  const imgLeft = useMotionValue(0);
  const imgW = useMotionValue(0);
  const imgH = useMotionValue(0);
  const backdropOpacity = useMotionValue(0);

  const finishClose = useCallback(() => {
    phaseRef.current = "closed";
    setPhase("closed");
  }, []);

  const animateClose = useCallback(() => {
    if (phaseRef.current === "closing") return;
    phaseRef.current = "closing";

    openAnims.current.forEach((a) => a.stop());
    openAnims.current = [];

    const el = imgRef.current;
    if (!el) {
      finishClose();
      return;
    }
    const sr = el.getBoundingClientRect();

    Promise.all([
      animate(imgTop, sr.top, SPRING),
      animate(imgLeft, sr.left, SPRING),
      animate(imgW, sr.width, SPRING),
      animate(imgH, sr.height, SPRING),
      animate(backdropOpacity, 0, { duration: 0.35 }),
    ]).then(finishClose);
  }, [imgTop, imgLeft, imgW, imgH, backdropOpacity, finishClose]);

  const handleOpen = useCallback(() => {
    const el = imgRef.current;
    if (!el || phaseRef.current !== "closed") return;

    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    resolvedSrc.current = el.currentSrc || el.src;
    expandedRect.current = computeExpandedRect(el, rect);
    openScrollY.current = window.scrollY;

    imgTop.set(rect.top);
    imgLeft.set(rect.left);
    imgW.set(rect.width);
    imgH.set(rect.height);
    backdropOpacity.set(0);

    phaseRef.current = "open";
    pendingOpen.current = true;
    openAnimDone.current = false;
    setPhase("open");
  }, [imgTop, imgLeft, imgW, imgH, backdropOpacity]);

  const startOpenAnimation = useCallback(() => {
    if (!pendingOpen.current) return;
    pendingOpen.current = false;

    const er = expandedRect.current;
    if (!er) return;

    requestAnimationFrame(() => {
      openAnims.current = [
        animate(imgTop, er.top, SPRING),
        animate(imgLeft, er.left, SPRING),
        animate(imgW, er.width, SPRING),
        animate(imgH, er.height, SPRING),
        animate(backdropOpacity, 0.9, { duration: 0.25 }),
      ];
      Promise.all(openAnims.current).then(() => {
        openAnimDone.current = true;
        openScrollY.current = window.scrollY;
      });
    });
  }, [imgTop, imgLeft, imgW, imgH, backdropOpacity]);

  // Escape key
  useEffect(() => {
    if (phase !== "open") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") animateClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, animateClose]);

  // Scroll-driven dismiss — page scrolls naturally, image tracks source
  useEffect(() => {
    if (phase !== "open") return;

    const onScroll = () => {
      if (phaseRef.current !== "open" || !openAnimDone.current) return;

      const el = imgRef.current;
      const er = expandedRect.current;
      if (!el || !er) return;

      const scrollDelta = Math.abs(window.scrollY - openScrollY.current);
      const progress = Math.min(scrollDelta / SCROLL_DISMISS_PX, 1);

      const sr = el.getBoundingClientRect();

      imgTop.set(lerp(er.top, sr.top, progress));
      imgLeft.set(lerp(er.left, sr.left, progress));
      imgW.set(lerp(er.width, sr.width, progress));
      imgH.set(lerp(er.height, sr.height, progress));
      backdropOpacity.set(0.9 * (1 - progress));

      if (progress >= 1) finishClose();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [phase, finishClose, imgTop, imgLeft, imgW, imgH, backdropOpacity]);

  // Touch dismiss
  useEffect(() => {
    if (phase !== "open") return;

    let startY = 0;

    const onTouchStart = (e: TouchEvent) => {
      e.stopPropagation();
      startY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      e.stopPropagation();
      if (phaseRef.current !== "open") return;
      if (Math.abs(startY - e.touches[0].clientY) > 10) animateClose();
    };

    const onTouchEnd = (e: TouchEvent) => {
      e.stopPropagation();
    };

    window.addEventListener("touchstart", onTouchStart, { capture: true });
    window.addEventListener("touchmove", onTouchMove, { capture: true });
    window.addEventListener("touchend", onTouchEnd, { capture: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart, {
        capture: true,
      });
      window.removeEventListener("touchmove", onTouchMove, { capture: true });
      window.removeEventListener("touchend", onTouchEnd, { capture: true });
    };
  }, [phase, animateClose]);

  const isVisible = phase !== "closed";

  return (
    <>
      <Image
        ref={imgRef}
        src={src ?? ""}
        alt={alt ?? ""}
        width={Number(width) || 600}
        height={Number(height) || 400}
        onClick={handleOpen}
        className={cn("cursor-zoom-in rounded-md", className)}
        style={{ visibility: isVisible ? "hidden" : "visible" }}
      />

      {typeof document !== "undefined" &&
        isVisible &&
        createPortal(
          <>
            <motion.div
              className="fixed inset-0 z-50 cursor-zoom-out bg-black"
              onClick={animateClose}
              style={{ opacity: backdropOpacity }}
            />
            <motion.img
              src={resolvedSrc.current}
              alt={alt ?? ""}
              className="fixed z-50 cursor-zoom-out"
              onLoad={startOpenAnimation}
              onClick={animateClose}
              style={{
                top: imgTop,
                left: imgLeft,
                width: imgW,
                height: imgH,
                borderRadius: 8,
              }}
            />
          </>,
          document.body,
        )}
    </>
  );
}
