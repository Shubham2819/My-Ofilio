"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import {
  SiSharp,
  SiDotnet,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type Technology = {
  name: string;
  icon: React.ReactNode;
  accent?: "blue" | "orange";
};

type SkillGroupProps = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: Technology[];
};

const coreTechnologies: Technology[] = [
  {
    name: "C#",
    icon: <SiSharp />,
    accent: "blue",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    accent: "orange",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    accent: "blue",
  },
  {
    name: "SQL",
    icon: <Database size={17} />,
    accent: "orange",
  },
];

const frontendTechnologies: Technology[] = [
  {
    name: "React.js",
    icon: <SiReact />,
    accent: "blue",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    accent: "blue",
  },
  {
    name: "HTML",
    icon: <Globe size={17} />,
    accent: "orange",
  },
  {
    name: "CSS",
    icon: <Globe size={17} />,
    accent: "blue",
  },
  {
    name: "Bootstrap",
    icon: <Layers3 size={17} />,
    accent: "orange",
  },
];

const backendTechnologies: Technology[] = [
  {
    name: "ASP.NET Core",
    icon: <SiDotnet />,
    accent: "blue",
  },
  {
    name: "REST APIs",
    icon: <Server size={17} />,
    accent: "blue",
  },
  {
    name: "JWT",
    icon: <ShieldCheck size={17} />,
    accent: "orange",
  },
  {
    name: "RBAC",
    icon: <ShieldCheck size={17} />,
    accent: "orange",
  },
];

const databaseTechnologies: Technology[] = [
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    accent: "blue",
  },
  {
    name: "MySQL",
    icon: <Database size={17} />,
    accent: "orange",
  },
  {
    name: "SQL Server",
    icon: <Database size={17} />,
    accent: "blue",
  },
];

const architectureTechnologies: Technology[] = [
  {
    name: "API Design",
    icon: <Globe size={17} />,
    accent: "blue",
  },
  {
    name: "API Integration",
    icon: <Workflow size={17} />,
    accent: "orange",
  },
  {
    name: "ETL Pipelines",
    icon: <Workflow size={17} />,
    accent: "orange",
  },
  {
    name: "Background Jobs",
    icon: <Server size={17} />,
    accent: "blue",
  },
  {
    name: "Hangfire",
    icon: <Workflow size={17} />,
    accent: "orange",
  },
];

const aiTechnologies: Technology[] = [
  {
    name: "OCR",
    icon: <BrainCircuit size={17} />,
    accent: "orange",
  },
  {
    name: "Document Processing",
    icon: <BrainCircuit size={17} />,
    accent: "blue",
  },
  {
    name: "Claude",
    icon: <BrainCircuit size={17} />,
    accent: "orange",
  },
  {
    name: "Codex",
    icon: <BrainCircuit size={17} />,
    accent: "blue",
  },
  {
    name: "GitHub Copilot",
    icon: <SiGithub />,
    accent: "blue",
  },
];

const developmentTools: Technology[] = [
  {
    name: "Git",
    icon: <SiGit />,
    accent: "orange",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    accent: "blue",
  },
];

function TechnologyItem({ technology }: { technology: Technology }) {
  const isOrange = technology.accent === "orange";

  return (
    <div className="group flex items-center gap-3">
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
          isOrange
            ? "border-[#FF9933]/15 bg-[#FF9933]/[0.06] text-[#FF9933] group-hover:border-[#FF9933]/30 group-hover:bg-[#FF9933]/10"
            : "border-[#0A84FF]/15 bg-[#0A84FF]/[0.06] text-[#0A84FF] group-hover:border-[#0A84FF]/30 group-hover:bg-[#0A84FF]/10"
        }`}
      >
        {technology.icon}
      </span>

      <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
        {technology.name}
      </span>
    </div>
  );
}

function SkillGroup({
  number,
  title,
  description,
  icon,
  technologies,
}: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-b border-white/10 py-10 last:border-b-0 sm:py-12"
    >
      <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
        {/* Category */}
        <div>
          <div className="flex items-start gap-4">
            <span className="pt-1 font-mono text-xs text-[#0A84FF]">
              {number}
            </span>

            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#0A84FF]">
                  {icon}
                </span>

                <h3 className="text-lg font-semibold text-white">
                  {title}
                </h3>
              </div>

              <p className="max-w-xs text-sm leading-6 text-slate-500">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          {technologies.map((technology) => (
            <TechnologyItem
              key={technology.name}
              technology={technology}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[360px] w-[360px] rounded-full bg-[#FF9933]/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-[10%] h-[420px] w-[420px] rounded-full bg-[#0A84FF]/10 blur-[150px]" />

      <Container className="relative z-10">
        <SectionHeading
          subtitle="Engineering Stack"
          title="Technologies I Work With"
        />

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-7 max-w-2xl text-center text-base leading-7 text-slate-400"
        >
          A practical technology stack spanning frontend development,
          backend engineering, databases, API integration, workflow
          automation, and document processing.
        </motion.p>

        {/* Skill Groups */}
        <div className="mx-auto mt-14 max-w-6xl">
          <SkillGroup
            number="01"
            title="Core Languages"
            description="Programming and query languages used across application development and data-driven systems."
            icon={<Layers3 size={19} />}
            technologies={coreTechnologies}
          />

          <SkillGroup
            number="02"
            title="Frontend"
            description="Modern technologies for building responsive, maintainable and interactive web applications."
            icon={<Globe size={19} />}
            technologies={frontendTechnologies}
          />

          <SkillGroup
            number="03"
            title="Backend & APIs"
            description="Backend services, API development, authentication and access-control systems."
            icon={<Server size={19} />}
            technologies={backendTechnologies}
          />

          <SkillGroup
            number="04"
            title="Databases"
            description="Relational databases used for application data, business logic and transactional workflows."
            icon={<Database size={19} />}
            technologies={databaseTechnologies}
          />

          <SkillGroup
            number="05"
            title="Architecture & Automation"
            description="API integration, data processing and background execution for business workflows."
            icon={<Workflow size={19} />}
            technologies={architectureTechnologies}
          />

          <SkillGroup
            number="06"
            title="AI & Document Processing"
            description="OCR, document intelligence and AI-assisted development workflows used to improve automation and productivity."
            icon={<BrainCircuit size={19} />}
            technologies={aiTechnologies}
          />

          <SkillGroup
            number="07"
            title="Development Tools"
            description="Version control and collaboration tools used throughout the development lifecycle."
            icon={<GitBranch size={19} />}
            technologies={developmentTools}
          />
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-3xl border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm leading-7 text-slate-500">
            I focus on using the right technology for the problem rather than
            simply adding more tools to the stack.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#0A84FF]/40" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#FF9933]" />

            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#0A84FF]/40" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}