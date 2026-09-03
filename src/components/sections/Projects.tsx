"use client";

import { motion } from "framer-motion";
import {ArrowUpRight,BrainCircuit,CheckCircle2,FileCheck2,GitBranch,ShieldCheck,TicketCheck,} from "lucide-react";
import { SiDotnet, SiNextdotjs, SiPostgresql, SiReact } from "react-icons/si";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type Product = {
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: React.ReactNode;
  accent: "blue" | "orange";
};

const products: Product[] = [
  {
    title: "Insurance Operations Platform",
    category: "Insurance Technology",
    description:
      "End-to-end insurance workflow platform designed to manage employee benefits and insurance operations across enrollment, onboarding, endorsement, document processing and policy workflows.",
    features: [
      "Enrollment & onboarding workflows",
      "Endorsement management",
      "Document upload and verification",
      "Role-based access control",
      "Audit tracking",
    ],
    technologies: [".NET 8", "React", "Next.js", "PostgreSQL", "JWT", "RBAC"],
    icon: <ShieldCheck size={28} />,
    accent: "blue",
  },

  {
    title: "Quotation & Policy Automation",
    category: "Insurance Automation",
    description:
      "A quotation and policy workflow solution that connects insurance providers and brokers through REST APIs to automate quotation generation, premium calculation, validation, payments and policy issuance.",
    features: [
      "Quotation generation",
      "Premium calculation engine",
      "Multiple insurer & broker APIs",
      "Document validation",
      "Payment processing",
      "Policy issuance",
    ],
    technologies: [
      "ASP.NET Core",
      "React",
      "PostgreSQL",
      "REST APIs",
      "C#",
      "SQL",
    ],
    icon: <GitBranch size={28} />,
    accent: "orange",
  },

  {
    title: "OCR Document Intelligence",
    category: "OCR & Document Processing",
    description:
      "OCR processing pipelines designed to extract structured information from insurance documents and use the extracted data in downstream business workflows.",
    features: [
      "Tables of Benefits extraction",
      "Quotation data extraction",
      "E-card processing",
      "Customer document extraction",
      "Automated downstream workflows",
      "Document validation",
    ],
    technologies: ["OCR", "Claude", "Codex", "React", ".NET"],
    icon: <BrainCircuit size={28} />,
    accent: "blue",
  },

  {
    title: "Employee Benefits & Enrollment",
    category: "Benefits Management",
    description:
      "Employee benefits workflow solution covering enrollment, onboarding, policy data management and endorsement processes with structured ownership and verification workflows.",
    features: [
      "Employee enrollment",
      "Client onboarding",
      "Benefits management",
      "Multi-level endorsements",
      "Data ownership & reassignment",
      "Verification workflows",
    ],
    technologies: [".NET 8", "React", "Next.js", "PostgreSQL", "JWT", "RBAC"],
    icon: <FileCheck2 size={28} />,
    accent: "orange",
  },

  {
    title: "Ticketing & Claims Workflow",
    category: "Workflow Automation",
    description:
      "Structured ticketing and claims workflow designed to manage the complete ticket lifecycle with escalation, SLA monitoring, role-based routing, audit logging and claims intimation.",
    features: [
      "Ticket lifecycle management",
      "Escalation workflows",
      "SLA tracking",
      "Role-based routing",
      "Audit logging",
      "Claims intimation",
    ],
    technologies: [
      ".NET Core",
      "React",
      "PostgreSQL",
      "REST APIs",
      "RBAC",
      "Background Jobs",
    ],
    icon: <TicketCheck size={28} />,
    accent: "blue",
  },

  {
    title: "Insurance API Integration Layer",
    category: "API Engineering",
    description:
      "Integration layer connecting internal insurance workflows with multiple external insurance companies and broker systems for real-time business processing.",
    features: [
      "REST API integration",
      "Quotation APIs",
      "Premium calculation",
      "Document validation",
      "Payment integration",
      "Policy issuance integration",
    ],
    technologies: [
      "ASP.NET Core",
      "REST APIs",
      "C#",
      "JWT",
      "PostgreSQL",
      "ETL",
    ],
    icon: <CheckCircle2 size={28} />,
    accent: "orange",
  },
];

function ProductShowcase({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const isReversed = index % 2 !== 0;
  const accent = product.accent === "orange" ? "#FF9933" : "#0A84FF";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
      }}
      className="group"
    >
      <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] lg:grid-cols-2">
        {/* Visual */}
        <div className={`relative min-h-[340px] overflow-hidden ${
            isReversed ? "lg:order-2" : ""
          }`}
        >
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] transition-transform duration-700 group-hover:scale-150"
            style={{
              backgroundColor: `${accent}18`,
            }}
          />

          {/* Grid */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: "45px 45px",
              }}
            />
          </div>

          {/* Product visual */}
          <div className="relative flex h-full items-center justify-center p-8 sm:p-12">
            <motion.div
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              transition={{
                duration: 0.35,
              }}
              className="relative w-full max-w-md"
            >
              {/* Main visual */}
              <div className="rounded-3xl border border-white/10 bg-[#080d1d]/90 p-7 shadow-2xl backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: `${accent}15`,
                        color: accent,
                      }}
                    >
                      {product.icon}
                    </div>

                    <div>
                      <div className="h-2.5 w-28 rounded-full bg-white/10" />
                      <div className="mt-2 h-2 w-20 rounded-full bg-white/5" />
                    </div>
                  </div>

                  <div className="h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor: accent,
                      boxShadow: `0 0 15px ${accent}`,
                    }}
                  />
                </div>

                {/* Dashboard skeleton */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-2xl bg-white/[0.04]" />
                  <div className="h-20 rounded-2xl bg-white/[0.04]" />
                  <div className="h-20 rounded-2xl bg-white/[0.04]" />
                </div>

                <div className="mt-5 h-28 rounded-2xl bg-white/[0.035]">
                  <div className="flex h-full items-end gap-2 p-5">
                    <div className="h-[35%] flex-1 rounded-t-md"
                      style={{
                        backgroundColor: `${accent}40`,
                      }}
                    />

                    <div className="h-[60%] flex-1 rounded-t-md"
                      style={{
                        backgroundColor: `${accent}55`,
                      }}
                    />

                    <div
                      className="h-[45%] flex-1 rounded-t-md"
                      style={{
                        backgroundColor: `${accent}40`,
                      }}
                    />

                    <div className="h-[80%] flex-1 rounded-t-md"
                      style={{
                        backgroundColor: `${accent}75`,
                      }}
                    />

                    <div className="h-[65%] flex-1 rounded-t-md"
                      style={{
                        backgroundColor: `${accent}55`,
                      }}
                    />
                  </div>
                </div>

                {/* Technology indicators */}
                <div className="mt-5 flex items-center gap-3">
                  <SiDotnet className="text-xl text-slate-500" />
                  <SiReact className="text-xl text-slate-500" />
                  <SiNextdotjs className="text-xl text-slate-500" />
                  <SiPostgresql className="text-xl text-slate-500" />

                  <span className="ml-auto text-xs text-slate-600">
                    Product Workflow
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div
          className={`flex flex-col justify-center p-8 sm:p-10 lg:p-14 ${
            isReversed ? "lg:order-1" : ""
          }`}
        >
          {/* Category */}
          <div
            className="mb-5 flex items-center gap-3 text-sm font-medium"
            style={{
              color: accent,
            }}
          >
            <span
              className="h-px w-8"
              style={{
                backgroundColor: accent,
              }}
            ></span>

            <span>{product.category}</span>
          </div>

          {/* Title */}
          <h3 className="text-3xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#0A84FF] sm:text-4xl">
            {product.title}
          </h3>

          {/* Description */}
          <p className="mt-6 text-base leading-8 text-slate-400">
            {product.description}
          </p>

          {/* Features */}
          <div className="mt-7 space-y-3">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 text-sm text-slate-400"
              >
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-[#FF9933]"
                />

                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Tech */}
          <div className="mt-8 flex flex-wrap gap-2">
            {product.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400 transition-all duration-300 hover:border-[#0A84FF]/40 hover:text-[#0A84FF]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-[-180px] top-1/4 h-[400px] w-[400px] rounded-full bg-[#0A84FF]/10 blur-[160px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#FF9933]/10 blur-[160px]" />
      <Container className="relative z-10">
        <SectionHeading subtitle="Product Experience" title="What I've Built" />

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-slate-400"
        >
          Experience across insurance technology, workflow automation, API
          integrations, document intelligence and modern web application
          development.
        </motion.p>

        {/* Products */}
        <div className="mt-20 space-y-10">
          {products.map((product, index) => (
            <ProductShowcase
              key={product.title}
              product={product}
              index={index}
            />
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-20 text-center"
        >
          <div className="mx-auto flex max-w-xl items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#0A84FF]/40" />
            <span className="h-2 w-2 rounded-full bg-[#FF9933] shadow-[0_0_15px_rgba(255,153,51,0.8)]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#FF9933]/40" />
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Building scalable products, automating workflows and solving complex
            business problems through software.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}