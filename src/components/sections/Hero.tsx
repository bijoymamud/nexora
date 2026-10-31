import React from "react";
import { ShieldCheck, Sparkles, Zap } from "lucide-react";
import { NetworkGlobeDome } from "../ui/NetworkGlobeDome";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-32 sm:pt-40 overflow-hidden ">
      {/* Decorative Dotted Grids (Left & Right) */}
      <div className="hidden lg:block absolute top-[70px] left-[3%] pointer-events-none z-0">
        <svg
          aria-hidden="true"
          viewBox="0 0 75 73"
          height="73"
          width="75"
        >
          <defs>
            <pattern patternUnits="userSpaceOnUse" height="8" width="8" id="hdp-l">
              <circle fill="#2563eb" r="1.2" cy="1.5" cx="1.5"></circle>
            </pattern>
            <mask id="hdm-l">
              <rect fill="url(#hdp-l)" height="73" width="75"></rect>
            </mask>
            <linearGradient y2="0" x2="1" y1="0" x1="0" id="hdg-l">
              <stop stopOpacity="0.12" stopColor="#2563eb" offset="0"></stop>
              <stop stopOpacity="0.32" stopColor="#3b82f6" offset="1"></stop>
            </linearGradient>
          </defs>
          <rect mask="url(#hdm-l)" fill="url(#hdg-l)" height="73" width="75"></rect>
        </svg>
      </div>

      <div className="hidden lg:block absolute top-[40px] right-[3%] pointer-events-none z-0">
        <svg
          aria-hidden="true"
          viewBox="0 0 75 73"
          height="73"
          width="75"
        >
          <defs>
            <pattern patternUnits="userSpaceOnUse" height="8" width="8" id="hdp-r">
              <circle fill="#2563eb" r="1.2" cy="1.5" cx="1.5"></circle>
            </pattern>
            <mask id="hdm-r">
              <rect fill="url(#hdp-r)" height="73" width="75"></rect>
            </mask>
            <linearGradient y2="0" x2="0" y1="0" x1="1" id="hdg-r">
              <stop stopOpacity="0.12" stopColor="#2563eb" offset="0"></stop>
              <stop stopOpacity="0.32" stopColor="#3b82f6" offset="1"></stop>
            </linearGradient>
          </defs>
          <rect mask="url(#hdm-r)" fill="url(#hdg-r)" height="73" width="75"></rect>
        </svg>
      </div>

      <div className="max-w-[1248px] mx-auto px-6 text-center relative z-10">
     

        {/* Display Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-[4.1rem] font-bold text-gray-800 tracking-tight leading-[1.18] mb-6 max-w-5xl mx-auto font-display">
          Hire Next Generation AI-Driven
          <span className="block mt-2 font-cursive font-normal text-[1.12em] text-[#2563eb] tracking-normal">
            Software Developers
          </span>
        </h2>

        {/* Subhead Description */}
        <p className="text-[#475569] text-base sm:text-lg max-w-[840px] mx-auto leading-relaxed mb-9 font-normal">
          As a trusted software development company, NeXora combines engineering expertise,
          scalable software solutions, and AI development to turn complex ideas into reliable
          digital products.
        </p>

        {/* Primary CTA Button (Positioned at Zenith of Network Dome) */}
        <div className="!mb-24 sm:mb-10 relative z-20">
          <button
            onClick={onOpenBooking}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-base px-8 py-3.5 rounded-full transition-colors duration-200 shadow-md active:scale-95 inline-flex items-center justify-center cursor-pointer"
          >
            Book a Meeting
          </button>
        </div>

        {/* Floating Avatars & Feature Badges Stage on top of Network Globe Dome */}
        <div className="hidden lg:block relative w-full h-[510px] max-w-[1140px] mx-auto mb-6 select-none">
          {/* The Geodesic Network Dome Background (Low Opacity, Vector Only) */}
          <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-full max-w-[1140px] pointer-events-none z-0">
            <NetworkGlobeDome theme="light" />
          </div>

          {/* Left Avatar: Marcus Vance */}
          <div className="absolute top-[20px] left-[7%] z-10 cursor-default">
            <div className="w-[155px] h-[155px] rounded-full border-[5px] border-[#e7c6a5] overflow-hidden relative shadow-xl bg-[#e7c6a5]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80"
                alt="Marcus Vance"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Marcus Vance Card */}
            <div className="absolute top-[108px] left-[20px] bg-white rounded-md px-4 py-2.5 shadow-md border border-slate-200/80 text-left whitespace-nowrap z-20">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[13px] font-extrabold text-[#0f172a]">Marcus Vance</span>
                <span className="text-[10px]  font-bold bg-[#dff0b6] text-[#1b340c] px-1.5 py-0.2 rounded border border-[#c5e67e]">
                  ex-Stripe
                </span>
              </div>
              <p className="text-[11px] font-semibold text-[#64748b] leading-tight">
                Staff Systems Architect
              </p>
              <p className="text-[10px]  text-[#059669] font-bold mt-0.5 leading-tight">
                12.4k tx/s ledger throughput
              </p>
            </div>
          </div>

          {/* Center Avatar: Dr. Elena Rostova (Main & Largest) */}
          <div className="absolute top-[120px] left-[45%] -translate-x-1/2 z-10 cursor-default">
            <div className="w-[230px] h-[230px] rounded-full border-[6px] border-[#e3b995] overflow-hidden relative shadow-xl bg-[#e3b995]">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80"
                alt="Dr. Elena Rostova"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Dr. Elena Rostova Card */}
            <div className="absolute top-[180px] left-[60px] bg-white rounded-xl px-5 py-3 shadow-md border border-slate-200/90 text-left whitespace-nowrap z-20">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[15px] font-extrabold text-[#0f172a]">Dr. Elena Rostova</span>
                <span className="text-[10px]  font-bold bg-[#dbeafe] text-[#1d4ed8] px-1.5 py-0.2 rounded border border-blue-200">
                  Ph.D. ETH
                </span>
              </div>
              <p className="text-xs font-semibold text-[#64748b] leading-tight">
                Principal AI & Vision Researcher
              </p>
              <p className="text-[11px]  text-[#059669] font-bold mt-0.5 leading-tight">
                Sub-110ms Private VPC RAG Inference
              </p>
            </div>
          </div>

          {/* Right Avatar: Tariq Al-Mansoor */}
          <div className="absolute top-[105px] right-[5%] z-10 cursor-default">
            <div className="w-[180px] h-[180px] rounded-full border-[5px] border-[#d8a98c] overflow-hidden relative shadow-xl bg-[#d8a98c]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=350&h=350&q=80"
                alt="Tariq Al-Mansoor"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Tariq Al-Mansoor Card */}
            <div className="absolute top-[125px] left-[40px] bg-white rounded-xl px-4 py-2.5 shadow-md border border-slate-200/80 text-left whitespace-nowrap z-20">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[13px] font-extrabold text-[#0f172a]">Tariq Al-Mansoor</span>
                <span className="text-[10px] font-bold bg-[#dff0b6] text-[#1b340c] px-1.5 py-0.2 rounded border border-[#c5e67e]">
                  AWS Pro
                </span>
              </div>
              <p className="text-[11px] font-semibold text-[#64748b] leading-tight">
                Lead Cloud & Kubernetes SRE
              </p>
              <p className="text-[10px]  text-[#059669] font-bold mt-0.5 leading-tight">
                99.999% Multi-Region SLA
              </p>
            </div>
          </div>

          {/* Top-Right Badge: 14-Day Guarantee / Risk-Free Sprint Trial */}
          <div className="absolute top-[15px] right-[27%] bg-white rounded-xl px-5 py-3 shadow-md border border-slate-200/90 text-left z-30 min-w-[185px]">
            <div className="flex items-center gap-1.5 mb-0.5">
              <ShieldCheck className="h-4 w-4 text-[#2563eb]" />
              <span className="text-[11px] font-bold text-[#0f172a] uppercase">
                14-Day Guarantee
              </span>
            </div>
            <p className="text-base font-extrabold text-[#0f172a] tracking-tight">
              Risk-Free Sprint Trial
            </p>
          </div>
        </div>

        {/* Mobile / Tablet Fluid Stage Layout */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-lg mx-auto">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Marcus Vance"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#e7c6a5]"
            />
            <div>
              <p className="text-xs font-bold text-[#0f172a]">Marcus Vance</p>
              <p className="text-[11px] text-[#059669] ">Staff Architect (Go/Rust)</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Dr. Elena Rostova"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#e3b995]"
            />
            <div>
              <p className="text-xs font-bold text-[#0f172a]">Dr. Elena Rostova</p>
              <p className="text-[11px] text-[#059669] ">Principal AI Researcher</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Tariq Al-Mansoor"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#d8a98c]"
            />
            <div>
              <p className="text-xs font-bold text-[#0f172a]">Tariq Al-Mansoor</p>
              <p className="text-[11px] text-[#059669] ">Cloud & SRE Lead</p>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-3 flex flex-wrap justify-center gap-2 pt-2">
            <span className="bg-white text-[#0f172a] font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm">
              ✓ 14-Day Risk-Free Trial
            </span>
            <span className="bg-[#dff0b6] text-[#1b340c] font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm">
              ✓ Top 1.5% Pre-Vetted Engineers
            </span>
            <span className="bg-[#dff0b6] text-[#1b340c] font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm">
              ✓ Deploy in 3-5 Business Days
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
