import React from "react";
import { CORE_CAPABILITIES } from "@/data/content";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

interface CoreCapabilitiesProps {
  onOpenBooking: () => void;
}

export const CoreCapabilities: React.FC<CoreCapabilitiesProps> = ({ onOpenBooking }) => {
  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative select-none">
      <div className="max-w-[1340px] mx-auto px-6">
        {/* Section Header - Left Aligned, Authoritative & Clean */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-mono text-[#1d4ed8] font-bold mb-4 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-[#1d4ed8]" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-gray-800 leading-[1.18] font-display">
              Engineering Built for Extreme Load, Reliability &amp; Security
            </h2>
          </div>

          <p className="text-base text-gray-500 max-w-md leading-relaxed font-normal">
            From distributed consensus backends to private VPC retrieval-augmented AI systems, our
            capabilities are rooted in battle-tested enterprise architectures.
          </p>
        </div>

        {/* 4-Row Architectural Strip Matrix (Unboxed, Hairline Dividers) */}
        <div className="border-t border-slate-200/90">
          {CORE_CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.id}
              className="group py-8 sm:py-10 border-b border-slate-200/80 transition-all duration-300 hover:bg-slate-50/50 -mx-4 sm:-mx-6 px-4 sm:px-6 cursor-default"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Column 1: Number, Category, Title & Tech Stack */}
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    {/* Index & Category */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#1d4ed8] transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="text-slate-300 font-mono">·</span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                        {cap.category}
                      </span>
                    </div>

                    {/* Title in gray-800 */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-800 group-hover:text-[#1d4ed8] transition-colors leading-snug mb-3">
                      {cap.title}
                    </h3>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-3">
                    {cap.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-gray-600 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Column 2: Description in gray-500 & Deliverables */}
                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-[15px] text-gray-500 leading-relaxed font-normal mb-5">
                    {cap.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {cap.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#1d4ed8] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3: Engineered Benchmark & Scope Action */}
                <div className="lg:col-span-3 lg:border-l lg:border-slate-200/70 lg:pl-8 flex flex-col justify-between h-full pt-1 lg:pt-0">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Engineered Benchmark
                    </span>
                    <p className="text-sm sm:text-base font-bold font-display text-gray-800 group-hover:text-[#1d4ed8] transition-colors leading-snug">
                      {cap.metrics}
                    </p>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider text-[#1d4ed8] hover:text-blue-800 transition-colors mt-6 lg:mt-8 cursor-pointer group/cta"
                  >
                    <span>Scope Architecture</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
