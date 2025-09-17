"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

export const TextGenerateEffect = ({ words, className }: TextGenerateEffectProps) => {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-2 sm:my-4">
        <div
          className="leading-snug tracking-wide text-xl sm:text-3xl md:text-5xl lg:text-6xl"
        >
          {wordsArray.map((word, idx) => (
            <span
              key={idx}
              className={cn(
                "inline opacity-0",
                idx > 3
                  ? "text-purple"
                  : "dark:text-white text-black"
              )}
              style={{
                animation: `var(--animate-fadeBlur)`,
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {word}{" "} {/* Keeps spacing between words */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
