"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Blue Orb */}
      <motion.div
        animate={{
          x: [0, 120, -40, 0],
          y: [0, -100, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#0A84FF]/20 blur-[120px]"
      />

      {/* Cyan Orb */}
      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 80, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 bottom-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* Purple Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [.3, .6, .3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[150px]"
      />

    </div>
  );
}