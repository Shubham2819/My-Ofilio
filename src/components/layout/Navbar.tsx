"use client";

import Container from "./Container";

const navLinks = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Shubham<span className="text-[#0A84FF]">.</span>
        </h1>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 transition hover:text-[#0A84FF]"
            >
              {item}
            </a>
          ))}
        </nav>

        <button 
        onClick={() => {
                window.location.href =
                  "mailto:shubhampandey2819@gmail.com?subject=Hire%20Me&body=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.";
              }}
        className="rounded-xl bg-[#0A84FF] px-5 py-2 font-semibold text-white transition hover:scale-105">
          Hire Me
        </button>
      </Container>
    </header>
  );
}