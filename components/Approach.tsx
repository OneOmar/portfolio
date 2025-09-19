"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { phases } from "@/data";

const Approach = () => (
  <section className="w-full py-20">
    <h1 className="font-bold text-3xl md:text-5xl text-center">
      My <span className="text-purple">approach</span>
    </h1>

    <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-6">
      {phases.map(({ title, order, description, effectProps }) => (
        <Card
          key={order}
          title={title}
          icon={<AceternityIcon order={order} />}
          description={description}
          effectProps={effectProps}
        />
      ))}
    </div>
  </section>
);

export default Approach;

// ---------------- Card Component ----------------

type CardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  effectProps?: any;
};

const cornerPositions = [
  "-top-3 -left-3",
  "-bottom-3 -left-3",
  "-top-3 -right-3",
  "-bottom-3 -right-3",
];

const Card = ({ title, icon, description, effectProps }: CardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative mx-auto flex max-w-sm w-full items-center justify-center rounded-3xl border border-black/[0.2] p-4 lg:h-[35rem] dark:border-white/[0.2] group/canvas-card"
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Corner Icons */}
      {cornerPositions.map((pos) => (
        <Icon
          key={pos}
          className={`absolute h-10 w-10 ${pos} text-black dark:text-white opacity-30`}
        />
      ))}

      {/* Hover Canvas */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 h-full w-full"
          >
            <CanvasRevealEffect {...effectProps} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>

        <h2 className="mt-4 text-3xl font-bold text-white opacity-0 transition-all duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:opacity-100">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-300 opacity-0 transition-all duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

// ---------------- Helper Components ----------------

const AceternityIcon = ({ order }: { order: string }) => (
  <div className="relative inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple font-bold text-2xl">
    {order}
  </div>
);

export const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
