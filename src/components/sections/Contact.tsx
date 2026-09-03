"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Target,
} from "lucide-react";

import { FaGithub,FaLinkedin,FaPhone} from "react-icons/fa";
import {MdEmail} from "react-icons/md";


import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const contactDetails = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "shubhampandey2819@gmail.com",
    href: "mailto:shubhampandey2819@gmail.com",
    target: "_blank",
    accent: "blue",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Mumbai, India",
    href: "https://maps.app.goo.gl/ZZRyi4ydRUy42gFE7",
    target: "_blank",
    accent: "orange",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Frontend only for now.
    // Backend/email integration will be added later.
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#0A84FF]/10 blur-[160px]" />

      <div className="pointer-events-none absolute -right-48 bottom-20 h-[420px] w-[420px] rounded-full bg-[#FF9933]/10 blur-[160px]" />

      <Container className="relative z-10">
        <SectionHeading
          subtitle="Let's Connect"
          title="Contact Me"
        />

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
          className="mx-auto mt-7 max-w-2xl text-center text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
        >
          Have a project, opportunity or idea you'd like to discuss?
          Feel free to get in touch. I'm always open to meaningful
          conversations and new opportunities.
        </motion.p>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9">
              {/* Code decoration */}
              <div className="pointer-events-none absolute right-0 top-0 font-mono text-[100px] font-bold leading-none text-white/[0.02]">
                {"</>"}
              </div>

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0A84FF]/20 bg-[#0A84FF]/10 text-[#0A84FF]">
                    <MessageSquare size={20} />
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
                      Communication
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-white">
                      Let's Talk
                    </h3>
                  </div>
                </div>

                <p className="max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                  Whether you're looking for a Full Stack Developer,
                  discussing a web application, API integration,
                  insurance technology solution or simply want to
                  connect, send me a message.
                </p>

                {/* Contact details */}
                <div className="mt-9 space-y-4">
                  {contactDetails.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-4 border-b border-white/10 pb-4"
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          item.accent === "orange"
                            ? "bg-[#FF9933]/10 text-[#FF9933]"
                            : "bg-[#0A84FF]/10 text-[#0A84FF]"
                        }`}
                      >
                        {item.icon}
                      </span>

                      <span>
                        <span className="block text-xs text-slate-600">
                          {item.label}
                        </span>

                        <span className="mt-1 block text-sm text-slate-300 transition-colors group-hover:text-[#0A84FF]">
                          {item.value}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="ml-auto text-slate-700 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF9933]"
                      />
                    </a>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-9">
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-600">
                    Find Me Online
                  </p>

                  <div className="flex gap-3">
                    {/* <a
                      href="tel:+919569799872"
                      aria-label="FaPhone"
                      target="blank"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:text-[#25D366]"
                    >
                      <FaPhone className=" rotate-[95deg]" size={19} />
                    </a> */}
                    <a
                      href="mailto:shubhampandey2819@gmail.com"
                      target="blank"
                      aria-label="MdEmail"
                      className=" flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-[#FF9933]/40 hover:bg-[#FF9933]/10 hover:text-[#FF9933]"
                    >
                      <MdEmail   size={19} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/shubham-pandey-8b59aa215/"
                      aria-label="LinkedIn"
                      target="blank"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-[#0a66c2]/40 hover:bg-[#0a66c2]/10 hover:text-[#0a66c2]"
                    >
                      <FaLinkedin size={19} />
                    </a>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-6">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                  </span>

                  <span className="text-sm text-slate-400">
                    Open to new opportunities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - FORM */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9">
              {/* Top accent */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0A84FF] to-[#FF9933]" />

              {/* Terminal heading */}
              <div className="mb-8 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>

                <span className="font-mono text-xs text-slate-600">
                  contact.ts
                </span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="flex min-h-[430px] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-400/10 text-green-400">
                    <CheckCircle2 size={32} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    Message Ready
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                    The form is working on the frontend. Email delivery
                    will be connected to a backend/API in the next step.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/10 bg-[#050816]/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-700 focus:border-[#0A84FF]/50 focus:ring-2 focus:ring-[#0A84FF]/10"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-[#050816]/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-700 focus:border-[#0A84FF]/50 focus:ring-2 focus:ring-[#0A84FF]/10"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Project / Job Opportunity / Collaboration"
                      className="w-full rounded-xl border border-white/10 bg-[#050816]/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-700 focus:border-[#0A84FF]/50 focus:ring-2 focus:ring-[#0A84FF]/10"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me a little about your project or opportunity..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#050816]/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-700 focus:border-[#0A84FF]/50 focus:ring-2 focus:ring-[#0A84FF]/10"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0A84FF] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-[#0878ea] hover:shadow-[0_0_35px_rgba(10,132,255,0.3)]"
                  >
                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Developer closing line */}
        <div className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#0A84FF]/40" />

          <span className="h-2 w-2 rounded-full bg-[#FF9933] shadow-[0_0_15px_rgba(255,153,51,0.8)]" />

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#FF9933]/40" />
        </div>
      </Container>
    </section>
  );
}