"use client";

import { motion } from "framer-motion";

type GradientBlurProps = {
  className?: string;
};

export default function GradientBlur({
  className = "",
}: GradientBlurProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.5, 0.9, 0.5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full bg-gradient-to-r from-[#0A84FF] via-cyan-500 to-purple-500 blur-[120px] ${className}`}
    />
  );
}