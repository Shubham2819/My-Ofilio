"use client";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* Grid */}
      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[size:50px_50px]
        [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]
        "
      />

      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Purple Glow */}
      <div className="absolute left-0 top-1/2 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[120px]" />
    </div>
  );
}