"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .6,
      }}
      className={`${center ? "text-center" : ""}`}
    >
      <p className="mb-4 font-semibold uppercase tracking-[6px] text-[#0A84FF]">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#0A84FF] via-cyan-400 to-purple-500" />
    </motion.div>
  );
}