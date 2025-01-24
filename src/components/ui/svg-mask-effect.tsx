"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  className,
  revealSize = 200,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  className?: string;
  revealSize?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const updateMousePosition = (e: MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  useEffect(() => {
    containerRef.current?.addEventListener("mousemove", updateMousePosition);
    return () => {
      containerRef.current?.removeEventListener(
        "mousemove",
        updateMousePosition
      );
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={cn("h-full relative", className)}
      animate={{
        backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute bg-black bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={{
          WebkitMaskPosition: `${mousePosition.x - revealSize / 2}px ${
            mousePosition.y - revealSize / 2
          }px`,
          WebkitMaskSize: isHovered ? `${revealSize}px` : "0px",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />
        <div className="relative z-10">{revealText}</div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-6xl absolute">
        {children}
      </div>
    </motion.div>
  );
};

