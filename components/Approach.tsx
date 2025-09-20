"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { phases } from "@/data";

const Approach = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="w-full py-20">
      <h1 className="font-bold text-3xl md:text-5xl text-center">
        My <span className="text-purple">approach</span>
      </h1>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-6">
        {phases.map(({ title, order, description, effectProps }) => (
          <Card
            key={order}
            order={String(order)}
            title={title}
            icon={<AceternityIcon order={String(order)} />}
            description={description}
            effectProps={effectProps}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        ))}
      </div>
    </section>
  );
};

export default Approach;

// ---------------- Card Component ----------------

type CardProps = {
  order: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  effectProps?: any;
  activeCard: string | null;
  setActiveCard: (id: string | null) => void;
};

const cornerPositions = [
  "-top-3 -left-3",
  "-bottom-3 -left-3",
  "-top-3 -right-3",
  "-bottom-3 -right-3",
];

const Card = ({
  order,
  title,
  icon,
  description,
  effectProps,
  activeCard,
  setActiveCard,
}: CardProps) => {
  const isActive = activeCard === order;
  const ref = useRef<HTMLDivElement | null>(null);

  // Close when clicking/tapping outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (isActive && !ref.current.contains(e.target as Node)) {
        setActiveCard(null);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [isActive, setActiveCard]);

  const handleToggle = () => setActiveCard(isActive ? null : order);

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      aria-label={`Phase ${order}: ${title}`}  // ✅ Accessible name for testing & screen readers
      onClick={handleToggle} // makes it work on touch
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
      onMouseEnter={() => setActiveCard(order)} // desktop hover
      onMouseLeave={() => setActiveCard(null)}
      className="relative mx-auto flex max-w-sm w-full items-center justify-center rounded-3xl border border-black/[0.2] p-4 lg:h-[35rem] dark:border-white/[0.2] group/canvas-card"
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
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
        {isActive && (
          <motion.div
            key="canvas"
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
        {/* Icon: when active -> move up & fade out */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ${isActive ? "-translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
        >
          {icon}
        </div>

        {/* Title */}
        <h2
          className={`mt-4 text-3xl font-bold text-white transition-all duration-200 ${isActive ? "-translate-y-2 opacity-100" : "opacity-0"
            }`}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className={`mt-2 text-sm text-gray-300 transition-all duration-200 ${isActive ? "-translate-y-2 opacity-100" : "opacity-0"
            }`}
        >
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
