"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  FileCheck2,
  GitBranch,
  Layers3,
  MapPin,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const responsibilities = [
  {
    icon: <Code2 size={18} />,
    title: "Full Stack Development",
    description:
      "Developing responsive frontend applications and backend services using React, Next.js, ASP.NET Core and C#.",
  },
  {
    icon: <Network size={18} />,
    title: "API Engineering & Integration",
    description:
      "Designing and integrating REST APIs to connect internal applications with external insurance and business systems.",
  },
  {
    icon: <Workflow size={18} />,
    title: "Workflow Automation",
    description:
      "Building business workflows, background processing and automated processes for insurance operations.",
  },
  {
    icon: <Database size={18} />,
    title: "Data & Backend Systems",
    description:
      "Working with PostgreSQL, MySQL and SQL-based systems for transactional data and application workflows.",
  },
  {
    icon: <FileCheck2 size={18} />,
    title: "Document Processing",
    description:
      "Working on document validation, OCR-based processing and document-driven business workflows.",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Security & Access Control",
    description:
      "Implementing authentication, JWT-based security and role-based access control across application workflows.",
  },
];

const domainAreas = [
  "Quotation Generation",
  "Premium Calculation",
  "Policy Issuance",
  "Client Onboarding",
  "Employee Enrollment",
  "Endorsement Workflows",
  "Document Management",
  "Payment Processing",
  "Ticketing & Claims",
];

const technologies = [
  "C#",
  "ASP.NET Core",
  ".NET",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "PostgreSQL",
  "MySQL",
  "SQL",
  "REST APIs",
  "JWT",
  "RBAC",
  "Hangfire",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#FF9933]/10 blur-[160px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-[10%] h-[420px] w-[420px] rounded-full bg-[#0A84FF]/10 blur-[170px]" />

      <Container className="relative z-10">
        <SectionHeading
          subtitle="Professional Experience"
          title="Building systems that solve real problems."
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-7 max-w-3xl text-center text-base leading-7 text-slate-400 sm:text-lg"
        >
          3+ years of professional experience developing full stack
          applications, insurance technology platforms, API integrations,
          workflow automation and data-driven business systems.
        </motion.p>

        {/* ========================================================= */}
        {/* MAIN EXPERIENCE */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-sm">
            {/* Top Accent */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-[#FF9933] via-[#0A84FF] to-transparent" />

            <div className="grid lg:grid-cols-[280px_1fr]">
              {/* ================================================= */}
              {/* EXPERIENCE META */}
              {/* ================================================= */}

              <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0A84FF]/20 bg-[#0A84FF]/10 text-[#0A84FF]">
                    <BriefcaseBusiness size={20} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-600">
                      Role
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="mt-8 space-y-5">
                  <InfoItem
                    icon={<CalendarDays size={16} />}
                    label="Experience"
                    value="3+ Years"
                  />

                  <InfoItem
                    icon={<Activity size={16} />}
                    label="Started"
                    value="10 May 2023"
                  />

                  <InfoItem
                    icon={<MapPin size={16} />}
                    label="Location"
                    value="India"
                  />

                  <InfoItem
                    icon={<GitBranch size={16} />}
                    label="Focus"
                    value="Full Stack Engineering"
                  />
                </div>

                {/* Status */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />

                    Professional Experience
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Focused on business applications, APIs, automation and
                    insurance technology.
                  </p>
                </div>
              </div>

              {/* ================================================= */}
              {/* EXPERIENCE CONTENT */}
              {/* ================================================= */}

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#FF9933]">
                      05.2023 — Present
                    </p>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Full Stack Developer
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Insurance Technology & Business Applications
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/[0.06] px-3 py-1.5 text-xs font-medium text-[#0A84FF]">
                    3+ Years
                  </span>
                </div>

                {/* Overview */}
                <p className="mt-7 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                  Designing and developing scalable business applications
                  across frontend, backend, database and integration layers.
                  My experience includes building insurance workflows from
                  quotation and premium calculation through onboarding,
                  enrollment, document processing, payment and policy
                  issuance.
                </p>

                {/* Responsibilities */}
                <div className="mt-10">
                  <div className="mb-5 flex items-center gap-3">
                    <Layers3 size={17} className="text-[#0A84FF]" />

                    <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">
                      Engineering Responsibilities
                    </h4>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {responsibilities.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.05,
                        }}
                        className="group border-l border-white/10 pl-4 transition-colors duration-300 hover:border-[#0A84FF]/50"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[#0A84FF]">
                            {item.icon}
                          </span>

                          <h5 className="text-sm font-semibold text-slate-200">
                            {item.title}
                          </h5>
                        </div>

                        <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Domain */}
                <div className="mt-10 border-t border-white/10 pt-8">
                  <div className="mb-5 flex items-center gap-3">
                    <ShieldCheck
                      size={17}
                      className="text-[#FF9933]"
                    />

                    <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">
                      Insurance Domain Experience
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {domainAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-slate-400 transition-all duration-300 hover:border-[#FF9933]/30 hover:bg-[#FF9933]/[0.04] hover:text-[#FF9933]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-10 border-t border-white/10 pt-8">
                  <div className="mb-5 flex items-center gap-3">
                    <Code2 size={17} className="text-[#0A84FF]" />

                    <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">
                      Technologies
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((technology, index) => (
                      <span
                        key={technology}
                        className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                          index < 4
                            ? "border-[#0A84FF]/20 bg-[#0A84FF]/[0.05] text-[#0A84FF]"
                            : "border-white/10 bg-white/[0.025] text-slate-500"
                        }`}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* ENGINEERING IMPACT */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-10 max-w-6xl"
        >
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            <ImpactItem
              number="01"
              title="Build"
              text="Business applications and insurance workflows from frontend to backend."
              accent="blue"
            />

            <ImpactItem
              number="02"
              title="Integrate"
              text="Connect internal systems with external APIs and insurance platforms."
              accent="orange"
            />

            <ImpactItem
              number="03"
              title="Automate"
              text="Reduce manual processes through workflows, background jobs and document processing."
              accent="blue"
            />
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#FF9933]" />

            <CheckCircle2
              size={16}
              className="text-[#FF9933]"
            />

            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#0A84FF]" />
          </div>

          <p className="text-base leading-7 text-slate-400 sm:text-lg">
            I enjoy working across the full development lifecycle—from
            understanding business requirements and designing APIs to
            building interfaces, integrating systems and delivering reliable
            solutions.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

/* =============================================================== */
/* INFO ITEM */
/* =============================================================== */

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-[#0A84FF]">{icon}</span>

      <div>
        <p className="text-[11px] uppercase tracking-[0.12em] text-slate-600">
          {label}
        </p>

        <p className="mt-1 text-sm text-slate-300">{value}</p>
      </div>
    </div>
  );
}

/* =============================================================== */
/* IMPACT ITEM */
/* =============================================================== */

function ImpactItem({
  number,
  title,
  text,
  accent,
}: {
  number: string;
  title: string;
  text: string;
  accent: "blue" | "orange";
}) {
  const isOrange = accent === "orange";

  return (
    <div className="bg-[#050816] p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <span
          className={`font-mono text-[10px] ${
            isOrange ? "text-[#FF9933]" : "text-[#0A84FF]"
          }`}
        >
          {number}
        </span>

        <span className="text-sm font-semibold text-white">
          {title}
        </span>
      </div>

      <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm">
        {text}
      </p>
    </div>
  );
}