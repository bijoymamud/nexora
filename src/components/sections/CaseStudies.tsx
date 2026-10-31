import React, { useState, useEffect } from "react";
import { CASE_STUDIES } from "@/data/content";
import {
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Hash,
} from "lucide-react";

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBooking }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Smooth auto-progression every 7 seconds, pauses when user hovers
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % CASE_STUDIES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const currentStudy = CASE_STUDIES[activeIdx];

  // Refined clean titles for left-side navigation list (prevents awkward truncated text)
  const navShortTitles = [
    "Global Payments & Clearing Gateway",
    "Diagnostic Imaging Edge Inference",
    "Autonomous Fleet Routing System",
  ];

  return (
    <section
      id="case-studies"
      className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1340px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-gray-800 leading-[1.2] mb-4 font-display">
              Real Architecture.
              <span className="block mt-2 font-cursive font-normal text-[1.12em] text-[#2563eb] tracking-normal">
                Quantifiable Outcomes.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal mb-8">
              Examine how our dedicated software squads solve high-concurrency bottlenecks and deploy
              mission-critical systems across regulated industries.
            </p>

            {/* Refined Project Selector (Clean Alignment, No Text Truncation) */}
            <div className="space-y-2 mb-6 border-y border-slate-100 py-3">
              {CASE_STUDIES.map((study, idx) => {
                const isSelected = activeIdx === idx;
                return (
                  <button
                    key={study.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full text-left p-3.5 transition-all cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? "bg-blue-50/60 border-l-2 border-l-[#1d4ed8] shadow-2xs"
                        : "hover:bg-slate-50/80 border-l-2 border-l-transparent"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={` text-xs font-bold mt-0.5 ${
                          isSelected ? "text-[#1d4ed8]" : "text-gray-400 group-hover:text-gray-600"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <div>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider block mb-0.5 ${
                            isSelected ? "text-[#1d4ed8]" : "text-gray-400"
                          }`}
                        >
                          {study.clientIndustry.split("&")[0].trim()}
                        </span>
                        <p
                          className={`text-sm tracking-tight leading-snug ${
                            isSelected
                              ? "font-bold text-gray-800"
                              : "font-medium text-gray-500 group-hover:text-gray-800"
                          }`}
                        >
                          {navShortTitles[idx] || study.title}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`h-4 w-4 shrink-0 transition-all ${
                        isSelected
                          ? "text-[#1d4ed8] translate-x-0 opacity-100"
                          : "text-gray-300 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Navigation Controls with Active Progress Line */}
            <div className="pt-1">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                  <span className="font-bold text-gray-800">0{activeIdx + 1}</span>
                  <span>/</span>
                  <span>0{CASE_STUDIES.length}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous case study"
                    className="h-8 w-8 rounded-full border border-slate-200/90 bg-white hover:border-[#1d4ed8] hover:text-[#1d4ed8] flex items-center justify-center text-gray-600 transition-all cursor-pointer shadow-2xs"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next case study"
                    className="h-8 w-8 rounded-full border border-slate-200/90 bg-white hover:border-[#1d4ed8] hover:text-[#1d4ed8] flex items-center justify-center text-gray-600 transition-all cursor-pointer shadow-2xs"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Smooth Progress Indicator Bar */}
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1d4ed8] transition-all duration-500 rounded-full"
                  style={{ width: `${((activeIdx + 1) / CASE_STUDIES.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Fixed Consistent Height Stage (Eliminates Height Shifts) */}
          <div className="lg:col-span-7 w-full overflow-hidden lg:border-l lg:border-slate-200/80 lg:pl-12 min-h-[480px] sm:min-h-[520px] lg:min-h-[550px] flex flex-col justify-between">
            <div
              key={currentStudy.id}
              className="animate-in fade-in slide-in-from-right-8 duration-500 pt-2 flex flex-col justify-between h-full flex-1"
            >
              <div>
                {/* Display Title - Comfortable line gap leading */}
                <h3 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-bold font-display text-gray-800 leading-[1.2] sm:leading-[1.32] lg:leading-[1.2] mb-8 tracking-tight min-h-[4rem] sm:min-h-[5.2rem] lg:min-h-[6.8rem] flex items-start">
                  {currentStudy.title}
                </h3>

                {/* Full-Width Stacked Descriptions - Consistent min-heights */}
                <div className="space-y-6">
                  {/* 1. The Engineering Challenge (Full Width with consistent height) */}
                  <div className="pb-6 border-b border-slate-100 min-h-[115px] sm:min-h-[125px] flex flex-col justify-start">
                    <div className="flex items-center gap-2 mb-2.5">
                     
                      <span className="text-xs  font-bold uppercase tracking-wider text-[#2563eb]">
                        The Engineering Challenge
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-normal">
                      {currentStudy.challenge}
                    </p>
                  </div>

                  {/* 2. Deployed Architectural Solution (Full Width with consistent height) */}
                  <div className="pb-6 border-b border-slate-100 min-h-[115px] sm:min-h-[125px] flex flex-col justify-start">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-xs  font-bold uppercase tracking-wider text-[#1d4ed8]">
                        Deployed Architectural Solution
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-normal">
                      {currentStudy.solution}
                    </p>
                  </div>
                </div>
              </div>

        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
