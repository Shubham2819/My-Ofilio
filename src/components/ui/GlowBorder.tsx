"use client";

import { motion } from "framer-motion";

type GlowBorderProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlowBorder({
  children,
  className = "",
}: GlowBorderProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className={`relative rounded-3xl ${className}`}
    >
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#0A84FF] via-cyan-400 to-purple-500 opacity-70 blur-sm" />

      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
        {children}
      </div>
    </motion.div>
  );
}