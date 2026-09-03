"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiDotnet } from "react-icons/si";

function FloatingIcon({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -18, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
      }}
      className={`absolute flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl text-white backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">

      <FloatingIcon className="left-0 top-10" delay={0}>
        <FaReact className="text-sky-400" />
      </FloatingIcon>

      <FloatingIcon className="right-0 top-10" delay={0.4}>
        <SiNextdotjs />
      </FloatingIcon>

      <FloatingIcon className="left-10 bottom-0" delay={0.8}>
        <SiDotnet className="text-violet-400" />
      </FloatingIcon>

      <FloatingIcon className="right-10 bottom-0" delay={1.2}>
        <FaDatabase className="text-green-400" />
      </FloatingIcon>

      <FloatingIcon className="top-1/2 -right-12" delay={1.5}>
        <FaNodeJs className="text-green-500" />
      </FloatingIcon>

      <motion.div
        whileHover={{
          scale: 1.03,
        }}
        className="relative h-[430px] w-[430px] overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/20 via-transparent to-cyan-400/20" />

        <div className="flex h-full items-center justify-center">

          <div className="text-center">

            <div className="text-[150px]">
              👨‍💻
            </div>

            <h2 className="text-3xl font-bold text-white">
              Shubham Pandey
            </h2>

            <p className="mt-3 text-slate-400">
              Full Stack Developer
            </p>

          </div>

        </div>

      </motion.div>

    </div>
  );
}