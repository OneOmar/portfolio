import { cn } from "@/lib/utils";
import React from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

export function GridBackground() {
  return (
    <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 overflow-hidden">

      {/* Grid lines */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Centered content */}
      <div className="relative flex flex-col items-center justify-center text-center px-5 sm:px-10 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
        <p className="uppercase tracking-widest text-blue-100 text-sm sm:text-base md:text-lg mb-4">
          Full-Stack Developer | React & Next.js | Java & Spring Boot
        </p>

        <TextGenerateEffect
          words="Building Clean, Performant Web Apps with Smooth UX"
          className="text-[40px] md:text-4xl lg:text-6xl mb-4"
        />

        <p className="text-sm md:text-lg lg:text-2xl">
          Hi! I&apos;m Omar, a Full-Stack Developer based in Morocco.
        </p>
        <a href="#about" className="mt-4">
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

      </div>
    </div>
  );
}
