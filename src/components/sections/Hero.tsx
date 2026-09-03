"use client";

import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute left-[-150px] top-[-100px] h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-120px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
              👋 Welcome To My Portfolio
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
              Hi,
              <br />
              I'm
              <span className="text-[#0A84FF]"> Shubham </span>
              <span className="text-[#FF9933]">Pandey</span>
            </h2>

            <h3 className="mt-6 text-2xl font-semibold text-slate-300">
              Full Stack Developer
            </h3>

            <p className="mt-8 max-w-xl leading-8 text-slate-400">
              I have 2+ years of experience building modern web applications
              using .NET, React.js, Next.js, SQL Server, JavaScript, PHP,
              Bootstrap and other web technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button 
              onClick={() => {
                window.location.href =
                  "mailto:shubhampandey2819@gmail.com?subject=Hire%20Me&body=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.";
              }}
              className="rounded-xl bg-[#0A84FF] px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105">
                Hire Me
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
                Download Resume
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[70px]" />

              <div className="relative flex h-[350px] w-[350px] items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="text-center">
                  <div className="text-8xl">👨‍💻</div>

                  <h2 className="mt-6 text-2xl font-bold text-white">
                    Full Stack Developer
                  </h2>

                  <p className="mt-2 text-slate-400">
                    React • Next.js • .NET
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}