'use client';
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { phases } from "@/data";


const Approach = () => (
  <section className="w-full py-20">
    <h1 className="font-bold text-3xl md:text-5xl text-center">
      My <span className="text-purple">approach</span>
    </h1>
    <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
      {phases.map(({ title, order, description, effectProps }) => (
        <Card
          key={order}
          title={title}
          icon={<AceternityIcon order={order} />}
          description={description}
        >
          <CanvasRevealEffect {...effectProps} />
        </Card>
      ))}
    </div>
  </section>
);

export default Approach;

type CardProps = {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
};

const Card = ({ title, icon, children, description }: CardProps) => {
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
      {["-top-3 -left-3", "-bottom-3 -left-3", "-top-3 -right-3", "-bottom-3 -right-3"].map(pos => (
        <Icon
          key={pos}
          className={`absolute h-10 w-10 ${pos} text-black dark:text-white opacity-30`}
        />
      ))}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="absolute top-1/2 left-1/2 flex min-w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>
        <h2 className="relative z-10 mt-4 text-center text-3xl font-bold text-black opacity-0 transition duration-200 dark:text-white group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white">
          {title}
        </h2>
        <p
          className="relative z-10 mt-4 text-center text-sm transition duration-200 opacity-0 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white"
          style={{ color: "#E4ECFF" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => (
  <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex w-full h-full items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
      {order}
    </span>
  </button>
);

export const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
