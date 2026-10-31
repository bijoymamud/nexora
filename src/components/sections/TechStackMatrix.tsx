import React from "react";
import { Marquee } from "../ui/marquee";
import { ROW1_TECHS, ROW2_TECHS } from "@/data/techStackData";

export const TechStackMatrix: React.FC = () => {
  return (
    <section
      id="tech-stack"
      className="py-16 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden select-none"
    >
      <div className="max-w-[1248px] mx-auto px-6 mb-10 text-center">
        {/* Section Header with User's Cursive Accent */}
        <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-gray-800 leading-[1.2] mb-4 font-display">
          Stacks Selected for
          <span className="block mt-2 font-cursive font-normal text-[1.12em] text-[#2563eb] tracking-normal">
            High Scale &amp; Long-Term Health
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Our engineering squads deploy battle-tested frameworks, distributed runtimes, and
          immutable cloud infrastructure to eliminate technical debt and latency bottlenecks.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left Edge Fade Mask */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-20"
          aria-hidden="true"
        />

        {/* Right Edge Fade Mask */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-20"
          aria-hidden="true"
        />

        {/* Row 1 - Moves Left */}
        <Marquee pauseOnHover={true} className="[--duration:60s] mb-4">
          {ROW1_TECHS.map((tech, idx) => (
            <div
              key={`tech-row1-${tech.name}-${idx}`}
              className="flex items-center gap-3 px-6 py-2 transition-transform duration-200 hover:scale-105 group/item cursor-default"
            >
              <div className="shrink-0 flex items-center justify-center text-slate-600 group-hover/item:text-slate-900 transition-colors">
                {tech.icon}
              </div>
              <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-slate-700 group-hover/item:text-slate-950 transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Row 2 - Moves Right (Reverse) */}
        <Marquee reverse={true} pauseOnHover={true} className="[--duration:60s]">
          {ROW2_TECHS.map((tech, idx) => (
            <div
              key={`tech-row2-${tech.name}-${idx}`}
              className="flex items-center gap-3 px-6 py-2 transition-transform duration-200 hover:scale-105 group/item cursor-default"
            >
              <div className="shrink-0 flex items-center justify-center text-slate-600 group-hover/item:text-slate-900 transition-colors">
                {tech.icon}
              </div>
              <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-slate-700 group-hover/item:text-slate-950 transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
