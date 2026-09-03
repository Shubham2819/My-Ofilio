"use client";

import { motion } from "framer-motion";
import {SiDotnet,SiReact,SiNextdotjs,SiTypescript,SiJavascript,SiPostgresql,SiMysql,SiGit,SiGithub,} from "react-icons/si";
import { FaServer } from "react-icons/fa6";
import {Database,Globe,Server,Workflow,BrainCircuit,} from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type Skill = {
  name: string;
  level: number;
  icon: React.ReactNode;
  accent?: "blue" | "orange";
};

const languageSkills: Skill[] = [
  {
    name: "C#",
    level: 90,
    icon: <SiDotnet />,
    accent: "blue",
  },
  {
    name: "SQL",
    level: 90,
    icon: <Database />,
    accent: "orange",
  },
  {
    name: "JavaScript",
    level: 90,
    icon: <SiJavascript />,
    accent: "orange",
  },
];

const frontendSkills: Skill[] = [
  {
    name: "React.js",
    level: 90,
    icon: <SiReact />,
    accent: "blue",
  },
  {
    name: "Next.js",
    level: 85,
    icon: <SiNextdotjs />,
    accent: "blue",
  },
  {
    name: "TypeScript",
    level: 78,
    icon: <SiTypescript />,
    accent: "blue",
  },
];

const backendSkills: Skill[] = [
  {
    name: ".NET Core",
    level: 90,
    icon: <SiDotnet />,
    accent: "blue",
  },
  {
    name: "REST APIs",
    level: 92,
    icon: <Server />,
    accent: "blue",
  },
  {
    name: "JWT",
    level: 85,
    icon: <Server />,
    accent: "orange",
  },
  {
    name: "RBAC",
    level: 85,
    icon: <Server />,
    accent: "orange",
  },
];

const databaseSkills: Skill[] = [
  {
    name: "PostgreSQL",
    level: 90,
    icon: <SiPostgresql />,
    accent: "blue",
  },
  {
    name: "MySQL",
    level: 82,
    icon: <SiMysql />,
    accent: "orange",
  },
];

const architectureSkills: Skill[] = [
  {
    name: "API Designing",
    level: 90,
    icon: <Globe />,
    accent: "blue",
  },
  {
    name: "ETL Pipelines",
    level: 80,
    icon: <Workflow />,
    accent: "orange",
  },
  {
    name: "Hangfire",
    level: 82,
    icon: <FaServer  />,
    accent: "orange",
  },
  {
    name: "Background Jobs",
    level: 85,
    icon: <Workflow />,
    accent: "blue",
  },
];

const aiSkills: Skill[] = [
  {
    name: "Claude",
    level: 85,
    icon: <BrainCircuit />,
    accent: "orange",
  },
  {
    name: "Codex",
    level: 85,
    icon: <BrainCircuit />,
    accent: "blue",
  },
  {
    name: "GitHub Copilot",
    level: 90,
    icon: <SiGithub />,
    accent: "blue",
  },
];

function SkillGroup({
  title,
  description,
  icon,
  skills,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: Skill[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="border-b border-white/10 py-12 first:pt-0 last:border-b-0"
    >
      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0A84FF]/20 bg-[#0A84FF]/10 text-[#0A84FF]">
              {icon}
            </span>

            <h3 className="text-xl font-bold text-white">
              {title}
            </h3>
          </div>

          <p className="max-w-xs text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xl ${
                      skill.accent === "orange"
                        ? "text-[#FF9933]"
                        : "text-[#0A84FF]"
                    }`}
                  >
                    {skill.icon}
                  </span>

                  <span className="font-medium text-slate-200">
                    {skill.name}
                  </span>
                </div>

                <span className="text-xs font-medium text-slate-500">
                  {skill.level}%
                </span>
              </div>

              <div className="h-[3px] overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  className={`relative h-full rounded-full ${
                    skill.accent === "orange"
                      ? "bg-gradient-to-r from-[#FF7A00] to-[#FFB347]"
                      : "bg-gradient-to-r from-[#0A84FF] to-[#38BDF8]"
                  }`}
                />
              </div>
            </div>
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
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#FF9933]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0A84FF]/10 blur-[150px]" />

      <Container className="relative z-10">
        <SectionHeading
          subtitle="My Expertise"
          title="Technologies I Work With"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-8 max-w-2xl text-center text-base leading-7 text-slate-400"
        >
          A combination of frontend, backend, database,
          architecture and OCR development tools
          that I use to build modern business applications.
        </motion.p>

        <div className="mx-auto mt-20 max-w-6xl">
          <SkillGroup
            title="Languages"
            description="Core programming and database languages used across application development."
            icon={<Globe size={21} />}
            skills={languageSkills}
          />

          <SkillGroup
            title="Frontend"
            description="Modern frontend technologies for responsive and interactive web applications."
            icon={<Globe size={21} />}
            skills={frontendSkills}
          />

          <SkillGroup
            title="Backend"
            description="Backend development, API integration, authentication and role-based access control."
            icon={<Server size={21} />}
            skills={backendSkills}
          />

          <SkillGroup
            title="Database"
            description="Relational databases used for application data and business workflows."
            icon={<Database size={21} />}
            skills={databaseSkills}
          />

          <SkillGroup
            title="Architecture"
            description="API design, data processing and background task execution."
            icon={<Workflow size={21} />}
            skills={architectureSkills}
          />

          <SkillGroup
            title="Document Intelligence"
            description="OCR development tools used to improve productivity and engineering workflows."
            icon={<BrainCircuit size={21} />}
            skills={aiSkills}
          />
        </div>

        <div className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#0A84FF]/40" />

          <span className="h-2 w-2 rounded-full bg-[#FF9933] shadow-[0_0_15px_rgba(255,153,51,0.8)]" />

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#0A84FF]/40" />
        </div>
      </Container>
    </section>
  );
}