"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import HeroScroll from "./HeroScroll";

import GridBackground from "@/components/ui/GridBackground";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import GradientBlur from "@/components/ui/GradientBlur";
import Container from "@/components/layout/Container";
// import MouseGlow from "@/components/ui/MouseGlow";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] t-24 lg:pt-28" >
      <GridBackground />
      {/* <MouseGlow /> */}
      <AnimatedBackground />
      <GradientBlur className="left-[-120px] top-[-120px] h-[420px] w-[420px]" />
      <GradientBlur className="bottom-[-150px] right-[-150px] h-[420px] w-[420px]" />
      <Container className="relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
        <HeroStats />
        <HeroScroll />
      </Container>
    </section>
  );
}