"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Code2, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const footerLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030610]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-[#0A84FF]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-[#FF9933]/10 blur-[140px]" />

      {/* Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0A84FF]/25 bg-[#0A84FF]/10 text-[#0A84FF] transition-all duration-300 group-hover:border-[#0A84FF]/50 group-hover:bg-[#0A84FF]/15 group-hover:shadow-[0_0_25px_rgba(10,132,255,0.2)]">
                <Code2 size={21} />
              </span>

              <span className="text-xl font-bold tracking-tight text-white">
                Shubham
                <span className="text-[#0A84FF]">.</span>
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              Full Stack Developer focused on building modern, scalable and
              reliable web applications using .NET, React, Next.js, PostgreSQL
              and modern web technologies.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              {/* <a
                  href="tel:+919569799872"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FaPhone"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:text-[#25D366]"              >
                <FaPhone className="rotate-[95deg]" size={17} />
              </a> */}
              <a
                href="mailto:shubhampandey2819@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MdEmail"
                className=" flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-[#FF9933]/40 hover:bg-[#FF9933]/10 hover:text-[#FF9933]"
              >
                <MdEmail size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-pandey-8b59aa215/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-[#0a66c2]/40 hover:bg-[#0a66c2]/10 hover:text-[#0a66c2]"
              >
                <FaLinkedin size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FF9933]">
              Navigation
            </p>

            <nav className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-slate-500 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-[#0A84FF] transition-all duration-300 group-hover:w-3" />

                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Developer Terminal */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#0A84FF]">
              Developer
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#070b16]/80">
              {/* Terminal Header */}
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-green-400/70" />

                <span className="ml-2 font-mono text-[9px] text-slate-700">
                  developer.config
                </span>
              </div>

              {/* Terminal Content */}
              <div className="overflow-x-auto p-4 font-mono text-[10px] leading-6 sm:text-xs">
                <p>
                  <span className="text-[#FF9933]">const</span>{" "}
                  <span className="text-sky-300">role</span> ={" "}
                  <span className="text-green-400">"Full Stack Developer"</span>;
                </p>

                <p>
                  <span className="text-[#FF9933]">const</span>{" "}
                  <span className="text-sky-300">stack</span> ={" "}
                  <span className="text-green-400">".NET + React + Next.js"</span>;
                </p>

                <p>
                  <span className="text-[#FF9933]">const</span>{" "}
                  <span className="text-sky-300">database</span> ={" "}
                  <span className="text-green-400">"PostgreSQL"</span>;
                </p>

                <p>
                  <span className="text-[#FF9933]">const</span>{" "}
                  <span className="text-sky-300">status</span> ={" "}
                  <span className="text-green-400">
                    "open_to_opportunities"
                  </span>
                  ;
                </p>

                <p className="mt-2 text-slate-700">
                  // build → integrate → automate → scale
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          {/* Copyright */}
          <p className="text-center text-xs text-slate-600 sm:text-left">
            © {currentYear} Shubham Pandey. All rights reserved.
          </p>

          {/* Built With */}
          <p className="flex items-center gap-1.5 text-xs text-slate-600">
            Built with
            <Heart size={13} className="fill-[#FF9933] text-[#FF9933]" />
            using Next.js
          </p>

          {/* Back To Top */}
          {/* <motion.a
            href="#home"
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-500 transition-all duration-300 hover:border-[#0A84FF]/40 hover:bg-[#0A84FF]/10 hover:text-[#0A84FF] hover:shadow-[0_0_20px_rgba(10,132,255,0.15)]"
          >
            <ArrowUp size={17} />
          </motion.a> */}
          {showBackToTop && (
            <motion.a
              href="#home"
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                y: 20,
              }}
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              aria-label="Back to top"
              className="fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-[#0A84FF]/30 bg-[#07101f]/90 text-[#0A84FF] shadow-[0_0_25px_rgba(10,132,255,0.15)] backdrop-blur-xl transition-all duration-300 hover:border-[#FF9933]/50 hover:bg-[#0A84FF]/10 hover:text-[#FF9933] hover:shadow-[0_0_30px_rgba(255,153,51,0.2)] sm:bottom-8 sm:right-8"
            >
              <ArrowUp size={18} />
            </motion.a>
          )}
        </div>
      </div>
    </footer>
  );
}
