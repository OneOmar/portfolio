"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const CanvasRevealEffect = ({
  containerClassName,
  showGradient = true,
}: {
  containerClassName?: string;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      {/* If you want to add a simple background animation, you can use CSS or a canvas here */}
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};
