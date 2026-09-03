"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import AnimatedButton from "@/components/ui/AnimatedButton";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Premium background glows */}
      <div className="absolute left-[-140px] top-[-120px] h-[360px] w-[360px] rounded-full bg-[#FF9933]/20 blur-[140px]" />
      <div className="absolute right-[-160px] top-[80px] h-[380px] w-[380px] rounded-full bg-[#0A84FF]/15 blur-[150px]" />
      <div className="absolute bottom-[-160px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[160px]" />

      <Container className="relative z-10">
        <SectionHeading subtitle="About Me" title="Who I Am" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-16 max-w-4xl text-center"
        >
          {/* <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF9933]">
            Bhagwa • Blue • Premium
          </p> */}

          <h3 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl text-[#FF9933]">
            Full Stack Developer
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            I am a Full Stack Developer with 2+ years of experience building modern,
            scalable and responsive web applications using <span className="text-[#0A84FF]">.NET</span>,
            <span className="text-[#0A84FF]"> React</span>,
            <span className="text-[#0A84FF]"> Next.js</span>,
            <span className="text-[#0A84FF]"> SQL Server</span>,
            <span className="text-[#FF9933]"> PHP</span>, JavaScript, HTML, CSS and Bootstrap.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
            I like building clean UI, smooth user experiences and practical business
            applications that feel fast, elegant and reliable. My focus is always on
            quality, performance and maintainable code.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-slate-300">
            <span className="rounded-full border border-[#FF9933]/25 bg-[#FF9933]/10 px-5 py-2">
              2+ Years Experience
            </span>
            <span className="rounded-full border border-[#0A84FF]/25 bg-[#0A84FF]/10 px-5 py-2">
              Full Stack Developer
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2">
              Open to Work
            </span>
          </div>

          <div className="mt-12 flex justify-center">
            <AnimatedButton>
              Download Resume
            </AnimatedButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}