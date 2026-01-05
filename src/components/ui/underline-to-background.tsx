"use client";

import { ValueAnimationTransition, motion } from "motion/react";
import { ElementType, useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface UnderlineProps {
  /**
   * The content to be displayed and animated
   */
  children: React.ReactNode;

  /**
   * HTML Tag to render the component as
   * @default span
   */
  as?: ElementType;

  /**
   * Optional class name for styling
   */
  className?: string;

  /**
   * onClick handler
   */
  onClick?: () => void;

  /**
   * Animation transition configuration
   * @default { type: "spring", damping: 30, stiffness: 300 }
   */
  transition?: ValueAnimationTransition;

  /**
   * The color that the text will animate to on hover
   */
  targetTextColor: string;

  /**
   * Height of the underline as a ratio of font size
   * @default 0.1
   */
  underlineHeightRatio?: number;

  /**
   * Padding of the underline as a ratio of font size
   * @default 0.01
   */
  underlinePaddingRatio?: number;
}

const UnderlineToBackground = ({
  children,
  as,
  onClick,
  className,
  transition = { type: "spring", damping: 30, stiffness: 300 },
  underlineHeightRatio = 0.1,
  underlinePaddingRatio = 0.01,
  targetTextColor = "#fef",
  ...props
}: UnderlineProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [underlineHeight, setUnderlineHeight] = useState(2);
  const [underlinePadding, setUnderlinePadding] = useState(0);
  const [bgColor, setBgColor] = useState("currentColor");

  const MotionComponent = useMemo(() => motion.create(as ?? "span"), [as]);

  useEffect(() => {
    const updateStyles = () => {
      if (textRef.current) {
        const computed = getComputedStyle(textRef.current);
        const fontSize = parseFloat(computed.fontSize);
        setUnderlineHeight(fontSize * underlineHeightRatio);
        setUnderlinePadding(fontSize * underlinePaddingRatio);

        setBgColor(computed.color);
      }
    };

    updateStyles();
    window.addEventListener("resize", updateStyles);
    return () => window.removeEventListener("resize", updateStyles);
  }, [underlineHeightRatio, underlinePaddingRatio]);

  return (
    <MotionComponent
      className={cn("cursor-pointer", className)}
      initial="initial"
      whileHover="target"
      onClick={onClick}
      ref={textRef}
      {...props}
    >
      <motion.span
        style={{
          backgroundImage: `linear-gradient(${bgColor}, ${bgColor})`,
          backgroundPosition: "0 100%",
          backgroundRepeat: "no-repeat",
          padding: `${underlinePadding + 2}px ${underlinePadding + 1}px`,
          margin: `${-(underlinePadding + 2)}px ${underlinePadding + 1}px`,
          boxDecorationBreak: "clone",
          WebkitBoxDecorationBreak: "clone",
        }}
        variants={{
          initial: {
            backgroundSize: `100% ${underlineHeight}px`,
          },
          target: {
            backgroundSize: "100% 100%",
            color: targetTextColor,
            transition: transition,
            borderRadius: "3px",
          },
        }}
      >
        {children}
      </motion.span>
    </MotionComponent>
  );
};

UnderlineToBackground.displayName = "UnderlineToBackground";

export default UnderlineToBackground;
