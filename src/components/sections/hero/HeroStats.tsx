"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 2,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 20,
    suffix: "+",
    label: "Projects",
  },
  {
    value: 10,
    suffix: "+",
    label: "Technologies",
  },
  {
    value: 100,
    suffix: "%",
    label: "Dedication",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-24 grid gap-6 md:grid-cols-4">

      {stats.map((item) => (

        <div
          key={item.label}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
        >
          <h2 className="text-4xl font-bold text-[#0A84FF]">

            <CountUp
              end={item.value}
              duration={3}
            />

            {item.suffix}

          </h2>

          <p className="mt-4 text-slate-400">
            {item.label}
          </p>

        </div>

      ))}

    </div>
  );
}