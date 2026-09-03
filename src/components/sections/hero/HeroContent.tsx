"use client";

import { TypeAnimation } from "react-type-animation";

import AnimatedButton from "@/components/ui/AnimatedButton";
import HeroSocial from "./HeroSocial";
import TechBadge from "./TechBadge";

export default function HeroContent() {
  return (
    <div>

      <span className="rounded-full border border-[#0A84FF]/30 bg-[#0A84FF]/10 px-5 py-2 text-sm text-[#0A84FF]">
        👋 Welcome To My Portfolio
      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl xl:text-8xl">
        Hi,
        <br />

        I'm

        <span className="text-[#0A84FF]">
          {" "}
          Shubham
        </span>

        <br />
        <p className="text-white" style={{ WebkitTextStroke: "3px #FF9933", }}>
          Pandey
        </p>
      </h1>

      <div className="mt-6 h-14 text-2xl font-semibold text-slate-300 md:text-3xl ">

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            ".NET Developer",
            2000,
            "React Developer",
            2000,
            "Next.js Developer",
            2000,
          ]}
          speed={45}
          repeat={Infinity}
        />

      </div>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

        Passionate Full Stack Developer with 2+ years of experience building scalable web applications using ASP.NET, React.js, Next.js, SQL Server, PHP, JavaScript and modern frontend technologies.

      </p>

      <div className="mt-10 flex flex-wrap gap-3">

        <TechBadge title=".NET" />

        <TechBadge title="SQL" />
        <TechBadge title="React" />

        <TechBadge title="Next.js" />


        <TechBadge title="PHP" />

      </div>

      <div className="mt-12 flex gap-5">

        {/* <AnimatedButton>  Hire Me </AnimatedButton> */}
        <AnimatedButton
              onClick={() => {
                window.location.href =
                  "mailto:shubhampandey2819@gmail.com?subject=Hire%20Me&body=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.";
              }}
            >
            Hire Me
          </AnimatedButton>

        <AnimatedButton variant="secondary">

          Download Resume

        </AnimatedButton>

      </div>

      <HeroSocial />

    </div>
  );
}