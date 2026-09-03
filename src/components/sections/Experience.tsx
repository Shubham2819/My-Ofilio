"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ShieldCheck,
  Workflow,
  Database,
  FileCheck2,
  CreditCard,
} from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Individual Health Insurance Platform",
    location: "India",
    period: "2+ Years",
    description:
      "Led the design and development of the Individual Health Insurance line of business from the ground up, building end-to-end workflows for quotation, premium calculation, onboarding, enrollment, document management, payment processing and policy issuance.",
    technologies: [
      "ASP.NET Core",
      "React",
      "PostgreSQL",
      "REST APIs",
      "JWT",
      "RBAC",
    ],
  },
  {
    role: "Insurance Technology Development",
    company: "Insurance & Broker Integrations",
    location: "India",
    period: "Professional Experience",
    description:
      "Integrated REST APIs from multiple insurance companies and brokers for quotation generation, premium calculation, document validation, payment processing and policy issuance. Designed workflows that connect external insurance systems with internal application processes.",
    technologies: [
      "REST APIs",
      "API Integration",
      "API Designing",
      "C#",
      "SQL",
      "PostgreSQL",
    ],
  },
  {
    role: "Full Stack Application Development",
    company: "Insurance Workflow Automation",
    location: "India",
    period: "Professional Experience",
    description:
      "Built modules for client onboarding, policy enrollment, document management and digital e-card generation. Designed quotation and premium calculation engines to automate policy pricing and streamline insurance workflows.",
    technologies: [
      "React.js",
      "Next.js",
      ".NET Core",
      "PostgreSQL",
      "ETL Pipelines",
      "Background Jobs",
    ],
  },
];

const highlights = [
  {
    icon: <ShieldCheck size={18} />,
    text: "Individual Health Insurance",
  },
  {
    icon: <Workflow size={18} />,
    text: "Quotation & Premium Engines",
  },
  {
    icon: <FileCheck2 size={18} />,
    text: "Document Validation & Management",
  },
  {
    icon: <CreditCard size={18} />,
    text: "Payment & Policy Issuance",
  },
  {
    icon: <Database size={18} />,
    text: "PostgreSQL & MySQL",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Premium ambient glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[400px] w-[400px] rounded-full bg-[#FF9933]/10 blur-[160px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-10 h-[420px] w-[420px] rounded-full bg-[#0A84FF]/10 blur-[170px]" />

      <Container className="relative z-10">
        <SectionHeading subtitle="My Journey" title="Experience" />

        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-slate-400">
          2+ years of full stack development experience focused on insurance
          technology, API integrations, workflow automation, business
          applications and database-driven systems.
        </p>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3"
        >
          {highlights.map((item) => (
            <span
              key={item.text}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-400 backdrop-blur-sm"
            >
              <span className="text-[#FF9933]">{item.icon}</span>

              {item.text}
            </span>
          ))}
        </motion.div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Main timeline */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#FF9933] via-[#0A84FF] to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-20">
            {experiences.map((experience, index) => {
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={`${experience.role}-${index}`}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="relative grid md:grid-cols-2"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-2 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                    <span className="absolute h-7 w-7 rounded-full bg-[#0A84FF]/20 blur-md" />

                    <span className="relative h-3 w-3 rounded-full border-2 border-[#FF9933] bg-[#050816] shadow-[0_0_18px_rgba(255,153,51,0.8)]" />
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-10 md:pl-0 ${
                      isRight
                        ? "md:col-start-2 md:pl-16"
                        : "md:col-start-1 md:pr-16"
                    }`}
                  >
                    <div
                      className={`group ${
                        isRight ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <div
                        className={`mb-4 flex items-center gap-3 text-sm text-slate-500 ${
                          isRight ? "md:justify-start" : "md:justify-end"
                        }`}
                      >
                        <CalendarDays size={16} className="text-[#FF9933]" />

                        <span>{experience.period}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#0A84FF] md:text-3xl">
                        {experience.role}
                      </h3>

                      <div
                        className={`mt-3 flex items-center gap-2 text-[#FF9933] ${
                          isRight ? "md:justify-start" : "md:justify-end"
                        }`}
                      >
                        <BriefcaseBusiness size={17} />

                        <span className="font-medium">
                          {experience.company}
                        </span>
                      </div>

                      <div
                        className={`mt-2 flex items-center gap-2 text-sm text-slate-500 ${
                          isRight ? "md:justify-start" : "md:justify-end"
                        }`}
                      >
                        <MapPin size={15} />

                        <span>{experience.location}</span>
                      </div>

                      <p className="mt-6 text-sm leading-7 text-slate-400 md:text-base">
                        {experience.description}
                      </p>

                      <div
                        className={`mt-6 flex flex-wrap gap-2 ${
                          isRight ? "md:justify-start" : "md:justify-end"
                        }`}
                      >
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400 transition-colors duration-300 hover:border-[#0A84FF]/40 hover:text-[#0A84FF]"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#FF9933]" />

            <span className="h-2 w-2 rounded-full bg-[#FF9933] shadow-[0_0_15px_rgba(255,153,51,0.8)]" />

            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#0A84FF]" />
          </div>

          <p className="text-lg font-medium leading-8 text-slate-300">
            Building insurance technology solutions that connect people,
            processes and platforms through modern software.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}