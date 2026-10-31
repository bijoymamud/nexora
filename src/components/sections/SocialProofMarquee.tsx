import React from "react";
import { Marquee } from "../ui/marquee";
import { Users, Code2, Repeat, Clock } from "lucide-react";

export const SocialProofMarquee: React.FC = () => {
  // Row 1 Brands (Matching Reference Image)
  const row1Brands = [
    {
      name: "Airtasker",
      node: (
        <div className="flex items-center gap-2 group/brand cursor-default">
          <svg className="h-5 w-auto fill-current text-slate-500 group-hover/brand:text-slate-900 transition-colors" viewBox="0 0 24 24">
            <path d="M4 14.5L12 6.5L20 14.5L17.5 17L12 11.5L6.5 17L4 14.5Z" />
          </svg>
          <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-slate-600 group-hover/brand:text-slate-900 transition-colors">
            Airtasker
          </span>
        </div>
      ),
    },
    {
      name: "Airwallex",
      node: (
        <div className="flex items-center gap-2 group/brand cursor-default">
          <svg className="h-5 w-auto fill-current text-slate-500 group-hover/brand:text-slate-900 transition-colors" viewBox="0 0 24 24">
            <path d="M12 2L2 22H7.5L12 13L16.5 22H22L12 2ZM12 7.5L15 13.5H9L12 7.5Z" />
          </svg>
          <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-slate-600 group-hover/brand:text-slate-900 transition-colors">
            Airwallex
          </span>
        </div>
      ),
    },
    {
      name: "Amazon",
      node: (
        <div className="flex items-center gap-1 group/brand cursor-default">
          <span className="font-sans font-bold text-xl sm:text-2xl tracking-tighter text-slate-600 group-hover/brand:text-slate-900 transition-colors relative">
            amazon
            <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-slate-500 group-hover/brand:text-amber-500 transition-colors" viewBox="0 0 80 12" fill="none">
              <path d="M2 3C22 10 58 10 78 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M72 1L78 3L73 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" />
            </svg>
          </span>
        </div>
      ),
    },
    {
      name: "Amplitude",
      node: (
        <div className="flex items-center gap-2 group/brand cursor-default">
          <div className="h-5 w-5 rounded-full border-2 border-slate-500 group-hover/brand:border-slate-900 flex items-center justify-center transition-colors">
            <span className="text-[10px] font-extrabold text-slate-600 group-hover/brand:text-slate-900">A</span>
          </div>
          <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-slate-600 group-hover/brand:text-slate-900 transition-colors">
            Amplitude
          </span>
        </div>
      ),
    },
    {
      name: "Asana",
      node: (
        <div className="flex items-center gap-2 group/brand cursor-default">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-slate-500 group-hover/brand:bg-rose-500 transition-colors" />
            <div className="flex flex-col gap-0.5">
              <span className="h-2 w-2 rounded-full bg-slate-500 group-hover/brand:bg-rose-500 transition-colors" />
              <span className="h-2 w-2 rounded-full bg-slate-500 group-hover/brand:bg-rose-500 transition-colors" />
            </div>
          </div>
          <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-slate-600 group-hover/brand:text-slate-900 transition-colors lowercase">
            asana
          </span>
        </div>
      ),
    },
    {
      name: "Atlassian",
      node: (
        <div className="flex items-center gap-2 group/brand cursor-default">
          <svg className="h-5 w-auto fill-current text-slate-500 group-hover/brand:text-blue-600 transition-colors" viewBox="0 0 24 24">
            <path d="M11.5 2.5C7.2 6.8 5 11.2 5 15.5C5 18 6.5 20.5 9 21.5C9.8 17.5 11 13.5 13 9.5L11.5 2.5ZM13 10C11.5 13.5 10.5 17 10 21.5C12.5 21.5 15 20 16.5 17.5C17.5 15 17 12 15.5 8L13 10Z" />
          </svg>
          <span className="font-sans font-black text-sm sm:text-base tracking-widest text-slate-600 group-hover/brand:text-slate-900 transition-colors uppercase">
            ATLASSIAN
          </span>
        </div>
      ),
    },
    {
      name: "Linear",
      node: (
        <div className="flex items-center gap-2 group/brand cursor-default">
          <svg className="h-4.5 w-auto fill-current text-slate-500 group-hover/brand:text-slate-900 transition-colors" viewBox="0 0 24 24">
            <path d="M3 12L12 3L21 12L12 21L3 12ZM7 12L12 17L17 12L12 7L7 12Z" />
          </svg>
          <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-slate-600 group-hover/brand:text-slate-900 transition-colors">
            Linear
          </span>
        </div>
      ),
    },
  ];

  // Row 2 Brands (Matching Reference Image)
  const row2Brands = [
    {
      name: "Automattic",
      node: (
        <div className="flex items-center group/brand cursor-default">
          <span className="font-mono font-bold text-sm sm:text-base tracking-[0.22em] text-slate-500 group-hover/brand:text-slate-900 transition-colors uppercase">
            AUTOMATTIC
          </span>
        </div>
      ),
    },
    {
      name: "Attentive",
      node: (
        <div className="flex items-center group/brand cursor-default">
          <span className="font-sans font-medium text-lg sm:text-xl tracking-normal text-slate-600 group-hover/brand:text-slate-900 transition-colors lowercase">
            attentive<span className="text-xs align-super opacity-70">®</span>
          </span>
        </div>
      ),
    },
    {
      name: "Basecamp",
      node: (
        <div className="flex items-center gap-2 group/brand cursor-default">
          <div className="h-5 w-5 rounded-full border border-slate-400 group-hover/brand:border-slate-800 flex items-center justify-center transition-colors">
            <svg className="h-3 w-3 fill-none stroke-current text-slate-600 group-hover/brand:text-slate-900" viewBox="0 0 24 24" strokeWidth="2.5">
              <path d="M4 16C7 9 10 6 12 12C14 18 17 15 20 8" />
            </svg>
          </div>
          <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-slate-600 group-hover/brand:text-slate-900 transition-colors">
            Basecamp
          </span>
        </div>
      ),
    },
    {
      name: "Booking.com",
      node: (
        <div className="flex items-center group/brand cursor-default">
          <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-slate-600 group-hover/brand:text-blue-700 transition-colors">
            Booking<span className="font-normal text-slate-500 group-hover/brand:text-blue-600">.com</span>
          </span>
        </div>
      ),
    },
    {
      name: "Braze",
      node: (
        <div className="flex items-center group/brand cursor-default">
          <span className="font-serif italic font-bold text-xl sm:text-2xl text-slate-600 group-hover/brand:text-rose-600 transition-colors lowercase tracking-normal">
            braze
          </span>
        </div>
      ),
    },
    {
      name: "Stripe",
      node: (
        <div className="flex items-center group/brand cursor-default">
          <span className="font-sans font-extrabold text-xl sm:text-2xl tracking-tight text-slate-600 group-hover/brand:text-indigo-600 transition-colors">
            stripe
          </span>
        </div>
      ),
    },
    {
      name: "Shopify",
      node: (
        <div className="flex items-center gap-1.5 group/brand cursor-default">
          <svg className="h-5 w-auto fill-current text-slate-500 group-hover/brand:text-emerald-600 transition-colors" viewBox="0 0 24 24">
            <path d="M19.5 6L16.5 2H7.5L4.5 6H2V22H22V6H19.5ZM9 4H15L16.5 6H7.5L9 4Z" />
          </svg>
          <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-slate-600 group-hover/brand:text-slate-900 transition-colors lowercase">
            shopify
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden select-none">
      <div className="max-w-[1248px] mx-auto px-6 mb-10 text-center">
        {/* Title from User's Reference Image */}
        <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold font-display text-[#0f172a] tracking-tight mb-2">
          Hundreds of companies
        </h2>
        {/* Subtitle from User's Reference Image */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Have been powered by our dedicated engineering squads
        </p>
      </div>

      {/* Dual Row Moveable Marquee with Side Fade Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left Edge Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />

        {/* Right Edge Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* Row 1 - Moves Left */}
        <Marquee pauseOnHover={true} className="[--duration:38s] mb-4">
          {row1Brands.map((brand, idx) => (
            <div
              key={`row1-${brand.name}-${idx}`}
              className="flex items-center px-6 py-2 transition-transform duration-200 hover:scale-105"
            >
              {brand.node}
            </div>
          ))}
        </Marquee>

        {/* Row 2 - Moves Right (Reverse) */}
        <Marquee reverse={true} pauseOnHover={true} className="[--duration:42s]">
          {row2Brands.map((brand, idx) => (
            <div
              key={`row2-${brand.name}-${idx}`}
              className="flex items-center px-6 py-2 transition-transform duration-200 hover:scale-105"
            >
              {brand.node}
            </div>
          ))}
        </Marquee>
      </div>

      
    </section>
  );
};
