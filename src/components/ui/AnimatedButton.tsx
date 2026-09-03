"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type AnimatedButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function AnimatedButton({
  children,
  onClick,
  href,
  variant = "primary",
  className,
}: AnimatedButtonProps) {
  const baseStyle =
    "relative inline-flex items-center justify-center overflow-hidden rounded-xl px-7 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[#0A84FF] text-white shadow-[0_0_25px_rgba(10,132,255,.35)] hover:shadow-[0_0_45px_rgba(#FF9933)]",

    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:[bg-white/10]",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(baseStyle, variants[variant], className)}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition duration-700 hover:opacity-100" />

      <span className="relative z-10">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href}>
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
}