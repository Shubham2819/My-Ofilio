"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-180px] top-[-120px] h-[360px] w-[360px] rounded-full bg-[#FF9933]/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#0A84FF]/10 blur-[150px]" />

      <Container className="relative z-10">
        <SectionHeading
          subtitle="About Me"
          title="Engineering with purpose."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-14 max-w-5xl"
        >
          {/* Intro */}
          <div className="max-w-4xl">
            <p className="text-xl leading-9 text-slate-300 sm:text-2xl sm:leading-10">
              I&apos;m a{" "}
              <span className="font-semibold text-white">
                Full Stack Developer
              </span>{" "}
              with{" "}
              <span className="font-semibold text-[#FF9933]">
                3+ years of professional experience
              </span>{" "}
              building business-critical web applications and{" "}
              <span className="font-semibold text-[#0A84FF]">
                insurance technology solutions
              </span>
              .
            </p>

            <p className="mt-7 text-base leading-8 text-slate-400 sm:text-lg">
              My work spans backend engineering, REST API development and
              integration, database-driven systems, workflow automation, and
              responsive frontend development. I primarily work with{" "}
              <span className="text-slate-200">ASP.NET Core</span>,{" "}
              <span className="text-slate-200">React</span>,{" "}
              <span className="text-slate-200">Next.js</span>,{" "}
              <span className="text-slate-200">PostgreSQL</span>, and{" "}
              <span className="text-slate-200">SQL</span>, along with
              supporting web technologies.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              I have worked on insurance workflows covering{" "}
              <span className="text-slate-300">
                quotation generation, premium calculation, API integrations,
                document validation, payment processing, policy issuance,
                employee benefits, enrollment, endorsements, ticketing, and
                claims workflows
              </span>
              .
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              I also work with{" "}
              <span className="text-[#0A84FF]">
                OCR and AI-assisted development workflows
              </span>{" "}
              to process document-heavy business data and improve automation
              and engineering productivity.
            </p>
          </div>

          {/* Professional Focus */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              {/* Left */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF9933]">
                  Professional Focus
                </p>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  Building reliable systems where frontend experience, backend
                  architecture, APIs, data, and business workflows work
                  together.
                </p>
              </div>

              {/* Right */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm sm:grid-cols-3">
                <FocusItem
                  number="01"
                  title="Full Stack"
                  description=".NET + React"
                />

                <FocusItem
                  number="02"
                  title="API Engineering"
                  description="REST + Integrations"
                />

                <FocusItem
                  number="03"
                  title="Automation"
                  description="Workflows + Jobs"
                />

                <FocusItem
                  number="04"
                  title="Data"
                  description="PostgreSQL + SQL"
                />

                <FocusItem
                  number="05"
                  title="Document AI"
                  description="OCR + Processing"
                />

                <FocusItem
                  number="06"
                  title="Insurance Tech"
                  description="Business Systems"
                />
              </div>
            </div>
          </div>

          {/* Bottom Information */}
          <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span>
                <span className="text-slate-300">Experience:</span> 3+ Years
              </span>

              <span>
                <span className="text-slate-300">Since:</span> May 2023
              </span>

              <span>
                <span className="text-slate-300">Location:</span> Mumbai, India
              </span>
            </div>

            <a
              href="/resume.pdf"
              download
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#0A84FF]"
            >
              Download Resume
              <Download
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function FocusItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="min-w-[120px]">
      <div className="flex items-center gap-2">
        <span className="font-mono text-[10px] text-[#0A84FF]">{number}</span>

        <span className="text-sm font-medium text-slate-300">
          {title}
        </span>
      </div>

      <p className="mt-1 pl-[21px] text-xs text-slate-600">
        {description}
      </p>
    </div>
  );
}