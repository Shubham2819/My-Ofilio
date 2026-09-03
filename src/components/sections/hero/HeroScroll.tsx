"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroScroll() {
  return (
    <motion.div
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="mt-16 flex justify-center b-10 lg:pb-10"
    >
      <a
        href="#about"
        className="rounded-full border border-white/10 bg-white/5 p-4 text-white backdrop-blur-xl"
      >
        <ChevronDown size={28} />
      </a>
    </motion.div>
  );
}