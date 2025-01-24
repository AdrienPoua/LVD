"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative group",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute -inset-px rounded-xl transition duration-300 group-hover:opacity-100 opacity-75 bg-gradient-to-r from-accent via-secondary to-primary blur-md",
          className
        )}
      />
      <div className="relative">{children}</div>
    </div>
  );
}; 