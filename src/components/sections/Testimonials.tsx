import React from "react";
import { Marquee } from "../ui/marquee";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewItem {
  name: string;
  username: string;
  body: string;
  avatar: string;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    name: "Alexander Lindqvist",
    username: "@nordicpay",
    body: "Nexora's dedicated squad integrated into our payments architecture in less than a week. Their senior Go engineers refactored our core ledger service, allowing us to process Black Friday volume without a single dropped transaction.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    name: "Dr. Rachel Sterling",
    username: "@omnihealth",
    body: "Most agencies try to sell you junior developers disguised with layers of project management. Nexora provided genuinely senior engineers who pushed back on flawed architectural decisions and saved us months of rework.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    name: "Julian Thorne",
    username: "@fleetpulse",
    body: "We needed an investor-ready MVP with complex geospatial optimization in 60 days. Nexora hit the deadline two weeks early, and the clean code architecture directly helped us close our 6.2M USD Series A.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    name: "Marcus Vance-Heller",
    username: "@datamesh",
    body: "Migrating our streaming ingestion pipeline to Apache Flink seemed like a 9-month ordeal. Nexora's platform engineers delivered the cluster cutover in 11 weeks with 0.00% event loss across 2.4PB of historical data.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    name: "Elena Rostova-Berg",
    username: "@verityvault",
    body: "Their automated CI/CD and SOC 2 Type II compliance controls gave our auditors zero room for findings. It's rare to find an external engineering partner that cares as much about code quality as our core founders.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    name: "Siddharth Nair",
    username: "@aetherscale",
    body: "Nexora didn't just write code; they transformed our engineering velocity. We went from deploying bi-monthly with high failure rates to deploying 6 times a day with automated canary verification.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    name: "Tariq Al-Sabah",
    username: "@qventures",
    body: "Rewriting our core matching algorithm in Rust reduced compute instance costs by 48% while cutting p99 response times from 340ms to 18ms. Outstanding engineering craftsmanship.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    name: "Claire Dupont",
    username: "@lumina",
    body: "The transparency and rigor of Nexora's delivery governance is unmatched. Every single pull request is backed by 85%+ test coverage, peer ADRs, and direct Jira/Slack alignment.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80",
  },
];

const ReviewCard: React.FC<{ item: ReviewItem }> = ({ item }) => {
  return (
    <figure
      className={cn(
        "relative w-[290px] sm:w-[330px] h-[180px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border p-4 sm:p-5 flex flex-col justify-start transition-colors duration-200",
        // Clean MagicUI review card styling matching reference
        "border-slate-200/90 bg-white hover:bg-slate-50/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
      )}
    >
      {/* Top Row: Photographic Avatar + Name & Username Handle */}
      <div className="flex flex-row items-center gap-3 shrink-0">
        <img
          src={item.avatar}
          alt={item.name}
          className="h-9 w-9 rounded-full object-cover shrink-0 border border-slate-200/90 shadow-2xs"
          loading="lazy"
        />
        <div className="flex flex-col min-w-0">
          <figcaption className="text-sm font-semibold text-slate-900 leading-tight truncate">
            {item.name}
          </figcaption>
          <p className="text-xs text-slate-500 font-normal leading-tight mt-0.5 truncate">
            {item.username}
          </p>
        </div>
      </div>

      {/* Quote Body (Clean, Directly Underneath) */}
      <blockquote className="mt-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
        {item.body}
      </blockquote>
    </figure>
  );
};

export const Testimonials: React.FC = () => {
  const firstRow = REVIEWS_DATA.slice(0, 4);
  const secondRow = REVIEWS_DATA.slice(4, 8);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative select-none overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 mb-12 sm:mb-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
    
    

          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-gray-800 leading-[1.2] mb-4 font-display">
            Global Trust.
            <span className="block mt-2 font-cursive font-normal text-[1.12em] text-[#2563eb] tracking-normal">
              Verifiable Executive Impact.
            </span>
          </h2>

          <p className="text-base text-gray-500 max-w-2xl leading-relaxed font-normal">
            Direct feedback and audited production metrics from technical leaders scaling mission-critical
            platforms with Nexora engineering squads across 4 continents.
          </p>
        </div>
      </div>

      {/* Dual Row MagicUI Marquee of Minimalist Testimonial Review Cards */}
      <div className="relative w-full overflow-hidden space-y-4">
        {/* Row 1: Forward Direction */}
        <Marquee
          pauseOnHover
          className="[--duration:45s] [--gap:1.25rem] py-1"
          repeat={3}
        >
          {firstRow.map((review) => (
            <ReviewCard key={review.username} item={review} />
          ))}
        </Marquee>

        {/* Row 2: Reverse Direction */}
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:45s] [--gap:1.25rem] py-1"
          repeat={3}
        >
          {secondRow.map((review) => (
            <ReviewCard key={review.username} item={review} />
          ))}
        </Marquee>

        {/* Seamless Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};
