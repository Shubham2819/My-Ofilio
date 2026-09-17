"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Terminal,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[-140px] h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-160px] h-[420px] w-[420px] rounded-full bg-[#FF9933]/10 blur-[140px]" />

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <Container>
        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Role Label */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/[0.07] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-blue-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                FULL STACK DEVELOPER
              </span>

              <span className="text-xs tracking-wider text-slate-600">
                .NET • REACT • NEXT.JS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-[#0A84FF]">Shubham</span>{" "}
              <span className="text-[#FF9933]">Pandey</span>
              <span className="text-white">.</span>
            </h1>

            {/* Main Statement */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I build scalable business applications, insurance technology
              platforms, API-driven systems, and automation-focused web
              solutions.
            </p>

            {/* Experience */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">
                  3+ Years Experience
                </span>
              </div>

              <div className="hidden h-4 w-px bg-white/10 sm:block" />

              <div>May 2023 → Present</div>

              <div className="hidden h-4 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-2">
                <MapPin size={14} />
                Mumbai, India
              </div>
            </div>

            {/* Primary Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A84FF] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/20"
              >
                View My Work
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                <Download size={17} />
                Download Resume
              </a>
            </div>

            {/* Quick Contact */}
            <div className="mt-7">
              <a
                href="mailto:shubhampandey2819@gmail.com"
                className="group inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300"
              >
                <Mail
                  size={15}
                  className="text-[#0A84FF] transition-transform group-hover:-translate-y-0.5"
                />
                shubhampandey2819@gmail.com
              </a>
            </div>

            {/* Technology Stack */}
            <div className="mt-10">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                Engineering Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  ".NET",
                  "React",
                  "Next.js",
                  "PostgreSQL",
                  "REST APIs",
                  "AI / OCR",
                ].map((technology, index) => (
                  <span
                    key={technology}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                      index === 0
                        ? "border-blue-500/20 bg-blue-500/[0.06] text-blue-400"
                        : index === 5
                          ? "border-[#FF9933]/20 bg-[#FF9933]/[0.05] text-[#FF9933]"
                          : "border-white/8 bg-white/[0.025] text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[580px]">
              {/* Outer Glow */}
              <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-blue-500/[0.06] blur-3xl" />

              {/* Terminal */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080B14]/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="flex h-12 items-center justify-between border-b border-white/8 bg-white/[0.025] px-4 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <Terminal size={13} />
                    shubham@dev
                  </div>

                  <div className="w-12" />
                </div>

                {/* Terminal Body */}
                <div className="p-5 font-mono text-xs leading-7 sm:p-7 sm:text-sm sm:leading-8">
                  {/* whoami */}
                  <div>
                    <span className="text-[#FF9933]">$</span>{" "}
                    <span className="text-slate-300">whoami</span>
                  </div>

                  <div className="pl-4 text-blue-400">
                    full-stack-developer
                  </div>

                  <div className="mt-3">
                    <span className="text-[#FF9933]">$</span>{" "}
                    <span className="text-slate-300">stack</span>
                  </div>

                  <div className="mt-1 space-y-0.5 pl-4">
                    <div>
                      <span className="text-slate-600">01</span>{" "}
                      <span className="text-blue-400">.NET</span>
                      <span className="text-slate-600">
                        {" "}
                        → ASP.NET Core / REST APIs
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-600">02</span>{" "}
                      <span className="text-blue-400">React</span>
                      <span className="text-slate-600">
                        {" "}
                        → Frontend Applications
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-600">03</span>{" "}
                      <span className="text-blue-400">Next.js</span>
                      <span className="text-slate-600">
                        {" "}
                        → Modern Web Platforms
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-600">04</span>{" "}
                      <span className="text-blue-400">PostgreSQL</span>
                      <span className="text-slate-600">
                        {" "}
                        → Data &amp; Persistence
                      </span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="text-[#FF9933]">$</span>{" "}
                    <span className="text-slate-300">focus</span>
                  </div>

                  <div className="mt-1 space-y-0.5 pl-4">
                    <div>
                      <span className="text-[#FF9933]">→</span>{" "}
                      <span className="text-slate-300">
                        Insurance Technology
                      </span>
                    </div>

                    <div>
                      <span className="text-[#FF9933]">→</span>{" "}
                      <span className="text-slate-300">
                        API Integration &amp; Engineering
                      </span>
                    </div>

                    <div>
                      <span className="text-[#FF9933]">→</span>{" "}
                      <span className="text-slate-300">
                        Workflow Automation
                      </span>
                    </div>

                    <div>
                      <span className="text-[#FF9933]">→</span>{" "}
                      <span className="text-slate-300">
                        AI-Powered Document Processing
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-white/8 pt-4">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-[#FF9933]">status</span>
                      <span className="text-slate-600">|</span>

                      <span className="flex items-center gap-2 text-green-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                        building
                      </span>

                      <span className="text-slate-600">|</span>

                      <span className="text-slate-500">
                        3+ years experience
                      </span>
                    </div>
                  </div>

                  {/* Cursor */}
                  <div className="mt-3">
                    <span className="text-[#FF9933]">$</span>{" "}
                    <span className="inline-block h-4 w-2 animate-pulse bg-blue-400 align-middle" />
                  </div>
                </div>
              </div>

              {/* Small Architecture Label */}
              <div className="absolute -bottom-5 left-5 hidden rounded-xl border border-white/10 bg-[#0A0E18]/90 px-4 py-2 text-[11px] text-slate-500 shadow-xl backdrop-blur-xl sm:block">
                <span className="text-blue-400">client</span>
                <span className="mx-2 text-slate-700">→</span>
                <span className="text-slate-400">API</span>
                <span className="mx-2 text-slate-700">→</span>
                <span className="text-[#FF9933]">workflow</span>
                <span className="mx-2 text-slate-700">→</span>
                <span className="text-slate-400">data</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}