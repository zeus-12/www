"use client";

import { ValueAnimationTransition, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface UnderlineProps {
  className?: string;
  transition?: ValueAnimationTransition;
  onClick?: () => void;
  targetTextColor: string;
  underlineHeightRatio?: number;
  underlinePaddingRatio?: number;
  children: React.ReactNode;
}

const UnderlineToBackground = ({
  className,
  onClick,
  transition = { type: "spring", damping: 30, stiffness: 300 },
  underlineHeightRatio = 0.1, // Default to 10% of font size
  underlinePaddingRatio = 0.01, // Default to 1% of font size
  targetTextColor = "#fef",
  children,
  ...props
}: UnderlineProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateUnderlineStyles = () => {
      if (textRef.current) {
        const fontSize = parseFloat(getComputedStyle(textRef.current).fontSize);
        const underlineHeight = fontSize * underlineHeightRatio;
        const underlinePadding = fontSize * underlinePaddingRatio;
        textRef.current.style.setProperty(
          "--underline-height",
          `${underlineHeight}px`,
        );
        textRef.current.style.setProperty(
          "--underline-padding",
          `${underlinePadding}px`,
        );
      }
    };

    updateUnderlineStyles();
    window.addEventListener("resize", updateUnderlineStyles);

    return () => window.removeEventListener("resize", updateUnderlineStyles);
  }, [underlineHeightRatio, underlinePaddingRatio]);

  const underlineVariants = {
    initial: {
      height: "var(--underline-height)",
    },
    target: {
      height: "100%",
      transition: transition,
    },
  };

  const textVariants = {
    initial: {
      color: "currentColor",
    },
    target: {
      color: targetTextColor,
      transition: transition,
    },
  };

  return (
    <motion.span
      className={`relative inline-block cursor-pointer ${className}`}
      whileHover="target"
      onClick={onClick}
      ref={textRef}
      {...props}
    >
      <motion.div
        className="absolute bg-current w-full"
        style={{
          height: "var(--underline-height)",
          bottom: "calc(-1 * var(--underline-padding))",
        }}
        variants={underlineVariants}
        aria-hidden="true"
      />
      <motion.span variants={textVariants} className="text-current relative">
        {children}
      </motion.span>
    </motion.span>
  );
};

export default UnderlineToBackground;
