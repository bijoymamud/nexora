import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface ActivityItem {
  title: string;
  desc: string;
}

interface StepItem {
  step: string;
  phase: string;
  summary: string;
  activities: ActivityItem[];
}

const FRAMEWORK_STEPS: StepItem[] = [
  {
    step: "01",
    phase: "Discovery & Architectural Blueprint",
    summary:
      "We unpack your business objectives, audit existing technical debt, model data contracts, and formalize an immutable architectural spec.",
    activities: [
      {
        title: "Technical Debt Audit",
        desc: "Comprehensive code review and vulnerability audit of existing repos.",
      },
      {
        title: "Domain Modeling (DDD)",
        desc: "Formal data boundary contracts & event schemas across microservices.",
      },
      {
        title: "Stack Selection",
        desc: "Production languages balancing execution velocity, scale & hiring.",
      },
      {
        title: "ADR Documentation",
        desc: "Architecture Decision Records & sprint milestone roadmap.",
      },
    ],
  },
  {
    step: "02",
    phase: "Squad Assembly & Environment Setup",
    summary:
      "We handpick senior engineers with domain expertise, provision automated staging environments, and calibrate sprint cadences.",
    activities: [
      {
        title: "Dedicated Senior Squad",
        desc: "Pre-vetted senior engineers matched to your exact technical profile.",
      },
      {
        title: "Automated CI/CD",
        desc: "Linting, security scanners & instant preview deployment environments.",
      },
      {
        title: "Sanitized Staging",
        desc: "Isolated staging clusters pre-loaded with realistic mock data.",
      },
      {
        title: "Workflow Integration",
        desc: "Native direct embedding into your Jira, Slack, and GitHub workflows.",
      },
    ],
  },
  {
    step: "03",
    phase: "Agile Sprint Cycles & Test Automation",
    summary:
      "Predictable two-week sprints featuring continuous integration, automated unit and integration tests, and live bi-weekly stakeholder demonstrations.",
    activities: [
      {
        title: "Async & Daily Sync",
        desc: "Structured 15-minute standups with daily asynchronous Slack updates.",
      },
      {
        title: "Automated Test Gates",
        desc: "85%+ automated code coverage gating every pull request merge.",
      },
      {
        title: "Live Demonstrations",
        desc: "End-of-sprint working software demonstrations in staging.",
      },
      {
        title: "Velocity Calibration",
        desc: "Continuous retrospective reviews to maximize team burn-down velocity.",
      },
    ],
  },
  {
    step: "04",
    phase: "Production Hardening & 24/7 Handover",
    summary:
      "Zero-downtime cutovers, security penetration testing, automated canary deployments, and ongoing 99.99% SLA monitoring.",
    activities: [
      {
        title: "Canary Cutovers",
        desc: "Blue/green zero-downtime releases with automated rollback hooks.",
      },
      {
        title: "Security Auditing",
        desc: "Third-party penetration testing and SOC 2 / HIPAA compliance audits.",
      },
      {
        title: "Synthetic Telemetry",
        desc: "24/7 synthetic APM alerting runbooks with sub-15min incident SLAs.",
      },
      {
        title: "Full IP Transfer",
        desc: "Clean intellectual property handover & complete repository ownership.",
      },
    ],
  },
];

export const DeliveryFramework: React.FC = () => {
  return (
    <section
      id="process"
      className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative select-none"
    >
      <div className="max-w-[1340px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-gray-800 leading-[1.2] mb-4 font-display">
            Predictable Velocity.
            <span className="block mt-2 font-cursive font-normal text-[1.12em] text-[#2563eb] tracking-normal">
              Total Transparency. Zero Guesswork.
            </span>
          </h2>

          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-normal">
            We adhere to a battle-tested delivery framework where every release is gated by automated
            test coverage, peer architecture reviews, and direct client Jira/Slack collaboration.
          </p>
        </div>

        {/* Unboxed Scrolling Timeline (No Cards, No Backgrounds, Pure Typography) */}
        <div className="relative space-y-16 sm:space-y-24 pb-12">
          {FRAMEWORK_STEPS.map((item, idx) => (
            <div
              key={item.step}
              style={{
                top: "100px",
                zIndex: (idx + 1) * 10,
              }}
              className="sticky bg-white pt-8 sm:pt-10 pb-12 sm:pb-16 border-t border-slate-200/80"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                {/* Left Column: Title & Description */}
                <div className="lg:col-span-5">
                  <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold font-display text-gray-800 leading-tight mb-4">
                    {item.phase}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </div>

                {/* Right Column: 4 Deliverables (Clean Text, No Cards, No Box) */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {item.activities.map((act, aIdx) => (
                      <div key={aIdx} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#1d4ed8] shrink-0" />
                          <h4 className="text-sm sm:text-[15px] font-bold text-gray-800 leading-snug">
                            {act.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed pl-6 font-normal">
                          {act.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
