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

type Rect = { top: number; left: number; width: number; height: number };
type Phase = "closed" | "open" | "closing";

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

function lockScroll() {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${scrollbarWidth}px`;
}

function unlockScroll() {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
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

  const sourceRect = useRef<DOMRect | null>(null);
  const expandedRect = useRef<Rect | null>(null);
  const resolvedSrc = useRef("");
  const pendingOpen = useRef(false);

  const imgTop = useMotionValue(0);
  const imgLeft = useMotionValue(0);
  const imgW = useMotionValue(0);
  const imgH = useMotionValue(0);
  const backdropOpacity = useMotionValue(0);

  const finishClose = useCallback(() => {
    phaseRef.current = "closed";
    setPhase("closed");
    unlockScroll();
  }, []);

  const animateClose = useCallback(() => {
    if (phaseRef.current === "closing") return;
    phaseRef.current = "closing";

    const el = imgRef.current;
    if (el) sourceRect.current = el.getBoundingClientRect();
    const sr = sourceRect.current!;

    Promise.all([
      animate(imgTop, sr.top, SPRING),
      animate(imgLeft, sr.left, SPRING),
      animate(imgW, sr.width, SPRING),
      animate(imgH, sr.height, SPRING),
      animate(backdropOpacity, 0, { duration: 0.2 }),
    ]).then(finishClose);
  }, [imgTop, imgLeft, imgW, imgH, backdropOpacity, finishClose]);

  const handleOpen = useCallback(() => {
    const el = imgRef.current;
    if (!el || phaseRef.current !== "closed") return;

    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    sourceRect.current = rect;
    resolvedSrc.current = el.currentSrc || el.src;
    expandedRect.current = computeExpandedRect(el, rect);

    imgTop.set(rect.top);
    imgLeft.set(rect.left);
    imgW.set(rect.width);
    imgH.set(rect.height);
    backdropOpacity.set(0);

    phaseRef.current = "open";
    pendingOpen.current = true;
    setPhase("open");
    lockScroll();
  }, [imgTop, imgLeft, imgW, imgH, backdropOpacity]);

  // Animate open after portal mounts
  useEffect(() => {
    if (!pendingOpen.current) return;
    pendingOpen.current = false;

    const er = expandedRect.current;
    if (!er) return;

    const raf = requestAnimationFrame(() => {
      animate(imgTop, er.top, SPRING);
      animate(imgLeft, er.left, SPRING);
      animate(imgW, er.width, SPRING);
      animate(imgH, er.height, SPRING);
      animate(backdropOpacity, 0.9, { duration: 0.25 });
    });

    return () => cancelAnimationFrame(raf);
  }, [phase, imgTop, imgLeft, imgW, imgH, backdropOpacity]);

  // Escape key
  useEffect(() => {
    if (phase !== "open") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") animateClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, animateClose]);

  // Wheel dismiss — intercept and close on any scroll
  useEffect(() => {
    if (phase !== "open") return;

    const onWheel = (e: WheelEvent) => {
      e.stopPropagation();
      if (phaseRef.current === "open") animateClose();
    };

    window.addEventListener("wheel", onWheel, { capture: true });
    return () =>
      window.removeEventListener("wheel", onWheel, { capture: true });
  }, [phase, animateClose]);

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

  // Cleanup on unmount
  useEffect(() => () => unlockScroll(), []);

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
