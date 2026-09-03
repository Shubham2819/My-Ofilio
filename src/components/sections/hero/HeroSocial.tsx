"use client";

import {
  FaGithub,
  FaLinkedin,
  // FaInstagram,
  FaPhone,
  
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function HeroSocial() {
  return (
    <div className="mt-12 flex gap-5">

      {/* <a
        href="#"
        className="text-2xl text-slate-400 transition hover:text-[#0A84FF]"
      >
        <FaGithub />
      </a> */}

      <a
        href="https://www.linkedin.com/in/shubham-pandey-8b59aa215/"
        target="blank"
        className="text-3xl text-slate-400 transition hover:text-[#0A84FF]"
      >
        <FaLinkedin />
      </a>

      {/* <a
        href="#"
        className="text-2xl text-slate-400 transition hover:text-[#0A84FF]"
      >
        <FaInstagram />
      </a> */}

      <a
        href="mailto:shubhampandey2819@gmail.com"
        target="blank"
        className="text-3xl text-slate-400 transition hover:text-[#0A84FF]"
      >
        <MdEmail />
      </a>
      {/* <a
        href="tel:+919569799872"
        target="blank"
        className=" rotate-[135deg] text-2xl  hover:text-[#0A84FF]"
      >
        <FaPhone />
      </a> */}

    </div>
  );
}