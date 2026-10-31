import React, { useState } from "react";
import { FEATURED_DEVELOPERS, DeveloperProfile } from "@/data/content";
import { Marquee } from "../ui/marquee";
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  MapPin,
  Briefcase,
} from "lucide-react";

interface TalentVettingProps {
  onReserveDeveloper: (devName: string) => void;
}

interface DeveloperCardProps {
  dev: DeveloperProfile;
  index: number;
  onReserveDeveloper: (devName: string) => void;
}

const DeveloperFlipCard: React.FC<DeveloperCardProps> = ({ dev, index, onReserveDeveloper }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-[300px] sm:w-[330px] h-[450px] cursor-pointer select-none shrink-0 group/card rounded-none"
      style={{ perspective: "1200px" }}
      onClick={() => setIsFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped((prev) => !prev);
        }
      }}
      aria-label={`${dev.name}, ${dev.role}. Click to flip card.`}
    >
      <div
        className="relative w-full h-full rounded-none"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      >

        <div
          className="absolute inset-0 w-full h-full bg-white rounded-none border border-slate-300/90 group-hover/card:border-slate-300/30 shadow-xs transition-colors duration-300 flex flex-col overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Top: Crisp Portrait Photo */}
          <div className="relative w-full h-[300px] bg-slate-100 overflow-hidden shrink-0 border-b border-slate-200/80">
            <img
              src={dev.avatar}
              alt={dev.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/card:scale-105 rounded-none"
              loading="lazy"
            />
          </div>

          {/* Bottom: Typography Starts IMMEDIATELY Below Photo (No Blank Space) */}
          <div className="p-5 bg-white flex flex-col justify-start flex-1">
            {/* Developer Name - Keeps Solid Color on Hover (No Blue Text Change) */}
            <h3 className="text-lg sm:text-[19px] font-bold font-display text-slate-900 tracking-tight leading-tight mb-1">
              {dev.name}
            </h3>

            {/* Role / Designation */}
            <p className="text-xs  font-bold text-[#1d4ed8] uppercase tracking-wider mb-2">
              {dev.role}
            </p>

            {/* Specialization snippet */}
            <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-2">
              {dev.specialization}
            </p>
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full bg-white text-slate-900 rounded-none p-5 sm:p-6 flex flex-col justify-between border border-slate-200/90 shadow-md relative"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Subtle Top Blue Accent Hairline */}
          <div className="absolute top-0 inset-x-0 h-1 bg-[#1d4ed8]" />

          <div>
            {/* Header: Mini Profile & Flip Back Button */}
            <div className="flex items-start justify-between pb-3.5 border-b border-slate-100 mb-3 pt-1">
              <div className="flex items-center gap-3">
                <img
                  src={dev.avatar}
                  alt={dev.name}
                  className="h-10 w-10 rounded-none object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-[15px] font-bold text-slate-900 leading-snug">{dev.name}</h4>
                  <p className="text-xs  font-bold text-[#1d4ed8] truncate max-w-[170px]">
                    {dev.role}
                  </p>
                </div>
              </div>

            </div>

            {/* Clean Key Metadata Strip (Experience & Location) */}
            <div className="grid grid-cols-2 gap-2 mb-3 text-xs ">
              <div className="bg-slate-50 px-2.5 py-1.5 border border-slate-100">
                <span className="text-[10px] flex items-center gap-1 text-slate-400 block uppercase"> <Briefcase size={12} />Experience</span>
                <span className="font-bold text-slate-800 text-[11px] truncate block">
                  {dev.experience.split("·")[0].trim()}
                </span>
              </div>
              <div className="bg-slate-50 px-2.5 py-1.5 border border-slate-100">
                <span className="text-[10px] text-slate-400 flex items-center gap-1 block uppercase"><MapPin size={12} /> Location</span>
                <span className="font-bold text-slate-800 text-[11px] truncate block">
                  {dev.location.split("(")[0].trim()}
                </span>
              </div>
            </div>

            {/* Architecture Focus */}
            <div className="mb-3">
              <span className="text-[10px]  uppercase tracking-wider font-bold text-slate-400 block mb-1">
                Architecture Focus
              </span>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {dev.specialization}
              </p>
            </div>

            {/* Verified Production Milestone */}
            <div className="p-3 bg-blue-50/50 border-l-2 border-[#1d4ed8] mb-3">
              <span className="text-[10px]  font-bold text-[#1d4ed8] uppercase tracking-wider block mb-0.5">
                Production Milestone
              </span>
              <p className="text-xs text-slate-700 italic leading-snug">
                "{dev.recentWin}"
              </p>
            </div>

            {/* Verified Technologies */}
            <div>
              <span className="text-[10px]  uppercase tracking-wider font-bold text-slate-400 block mb-1.5">
                Verified Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {dev.stack.map((item) => (
                  <span
                    key={item}
                    className="text-[11px]  font-medium px-2 py-0.5 bg-slate-100 text-slate-800 border border-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export const TalentVetting: React.FC<TalentVettingProps> = ({ onReserveDeveloper }) => {
  return (
    <section id="talent" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative select-none overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 mb-12 sm:mb-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">


          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-gray-800 leading-[1.2] mb-4 font-display">
            World-Class Engineers.
            <span className="block mt-2 font-cursive font-normal text-[1.12em] text-[#2563eb] tracking-normal">
              Ready to Deploy to Your Sprint.
            </span>
          </h2>

          <p className="text-base text-gray-500 max-w-2xl leading-relaxed font-normal">
            Every engineer on our roster has a minimum 7+ years of verifiable production experience and
            has passed our deep system architecture and live coding evaluations.
          </p>
        </div>
      </div>

      {/* Infinite Marquee of 3D Flip Developer Cards */}
      <div className="relative w-full overflow-hidden py-2">
        <Marquee
          pauseOnHover
          className="[--duration:60s] [--gap:1.5rem] py-2"
          repeat={3}
        >
          {FEATURED_DEVELOPERS.map((dev, idx) => (
            <DeveloperFlipCard
              key={`${dev.name}-${idx}`}
              dev={dev}
              index={idx}
              onReserveDeveloper={onReserveDeveloper}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};