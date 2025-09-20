"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current !== "number") return;
    const direction = current - scrollYProgress.getPrevious()!;
    if (current < 0.05 || direction < 0) setVisible(true);
    else setVisible(false);
  });

  // Smooth scroll handler
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "fixed top-6 inset-x-0 mx-auto z-[5000] flex justify-center items-center space-x-2 md:space-x-4 px-4 py-3 sm:px-6 sm:py-4 max-w-fit rounded-lg border border-neutral-200/20 dark:border-white/20 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-md",
            className
          )}
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              onClick={(e) => handleClick(e, item.link)}
              className="flex items-center space-x-1 sm:space-x-2 text-neutral-600 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 text-sm sm:text-base !cursor-pointer transition-colors duration-300"
            >
              {item.icon && <span className="h-4 w-4 sm:h-5 sm:w-5">{item.icon}</span>}
              <span>{item.name}</span>
            </Link>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
