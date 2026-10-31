import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Lock, Calendar } from "lucide-react";

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-14 lg:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow inside dark card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none" />

          {/* Eyebrow */}
          <div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono text-emerald-400 mb-6 font-bold">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>INSTANT SPRINT ENGAGEMENT</span>
          </div>

          {/* Heading */}
          <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Ready to Accelerate Your Product Roadmap with an Elite Engineering Squad?
          </h2>

          <p className="relative z-10 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Book a 30-minute technical architecture consultation. We will analyze your system requirements,
            define sprint milestones, and deploy your pre-vetted team within 5 business days.
          </p>

          {/* Primary CTA */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              variant="default"
              size="lg"
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
            >
              <Calendar className="h-4 w-4" />
              <span>Schedule Technical Strategy Session</span>
              <ArrowRight className="h-4 w-4" />
            </Button>

            <a href="mailto:contact@nexoratech.io" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-700 bg-slate-900/80 text-white hover:bg-slate-800 hover:text-white"
              >
                <span>Direct Executive Inquiry</span>
              </Button>
            </a>
          </div>

          {/* Guarantee Badges */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-slate-800 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>14-Day Risk-Free Trial Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-emerald-400" />
              <span>100% IP & Source Code Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-400" />
              <span>Time-Zone Overlap Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
