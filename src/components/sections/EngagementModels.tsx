import React, { useState } from "react";
import {
  Code2,
  Cpu,
  Users,
  Smartphone,
  Cloud,
  Layers,
  Network,
  ShieldCheck,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface EngagementModelsProps {
  onSelectModel?: (serviceId: string) => void;
  onOpenBooking?: () => void;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "Engineered for high-throughput distributed backends, scalable microservices, and enterprise web platforms.",
    icon: <Code2 className="h-6 w-6 text-blue-600" />,
  },
  {
    id: "applied-ai",
    title: "Applied AI & Machine Learning",
    description:
      "Enterprise RAG retrieval pipelines, private VPC LLM inference, and autonomous workflow automation agents.",
    icon: <Cpu className="h-6 w-6 text-blue-600" />,
  },
  {
    id: "dedicated-teams",
    title: "Dedicated Engineering Teams",
    description:
      "Augment internal bandwidth with pre-vetted, top 1.5% senior software engineers deployed in 3 to 5 business days.",
    icon: <Users className="h-6 w-6 text-blue-600" />,
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description:
      "High-performance native iOS and Android apps alongside performant Flutter and React Native solutions.",
    icon: <Smartphone className="h-6 w-6 text-blue-600" />,
  },
  // Row 2: 4 Cards (Indices 4, 5, 6, 7)
  {
    id: "cloud-devops",
    title: "Cloud Engineering & DevOps",
    description:
      "Multi-cloud architectures, Kubernetes container orchestration, and automated CI/CD pipelines with 99.99% SLAs.",
    icon: <Cloud className="h-6 w-6 text-blue-600" />,
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design & Product Strategy",
    description:
      "User research, high-fidelity Figma design systems, interactive prototypes, and usability conversion audits.",
    icon: <Layers className="h-6 w-6 text-blue-600" />,
  },
  {
    id: "api-integration",
    title: "Enterprise System Integration",
    description:
      "Event-driven API ecosystems, transactional payment gateways, and resilient legacy software modernization.",
    icon: <Network className="h-6 w-6 text-blue-600" />,
  },
  {
    id: "qa-security",
    title: "QA Automation & Security Audits",
    description:
      "Automated end-to-end regression suites, continuous stress testing, SOC2 compliance, and vulnerability scanning.",
    icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
  },
];

export const EngagementModels: React.FC<EngagementModelsProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="engagement-models" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden select-none">
      <div
        className="pointer-events-none absolute right-0 top-0 w-1/3 h-full opacity-[0.035] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:28px_28px]"
        aria-hidden="true"
      />

      <div className="max-w-[1248px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-gray-800 leading-[1.2] mb-4 font-display">
            Software Development Services
            <span className="block mt-2 font-cursive font-normal text-[1.12em] text-[#2563eb] tracking-normal">
              Engineered for Scale
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From modern cloud architectures and applied AI systems to dedicated engineering squads,
            we deliver full-lifecycle software solutions tailored to ambitious enterprises.
          </p>
        </div>

        <div
          className="border-x border-slate-200/90 bg-white"
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES_DATA.map((service, index) => {
              const isActive = activeIndex === index;
              const isTopRow = index < 4;
              const borderClasses = `
                ${isTopRow ? "lg:border-b" : "lg:border-b-0"}
                ${index % 4 !== 3 ? "lg:border-r" : "lg:border-r-0"}
                ${index < 6 ? "md:border-b" : "md:border-b-0"}
                ${index % 2 === 0 ? "md:border-r" : "md:border-r-0"}
                ${index < 7 ? "border-b" : "border-b-0"}
                border-slate-200/90
              `;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative p-7 sm:p-8 bg-white transition-all duration-300 flex flex-col justify-start cursor-default rounded-none overflow-hidden ${borderClasses}`}
                >
                  {/* Directional Hover Gradient Overlay with user's specified color #1d4ed8 */}
                  <div
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-300 z-0 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    } ${
                      isTopRow
                        ? "bg-gradient-to-t from-[#1d4ed8]/20 via-[#1d4ed8]/5 to-transparent"
                        : "bg-gradient-to-b from-[#1d4ed8]/20 via-[#1d4ed8]/5 to-transparent"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Left Border Indicator Pill - Vertically Centered in Card Div */}
                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3.5px] h-8 rounded-r-full transition-all duration-300 z-20 ${
                      isActive
                        ? "bg-[#1d4ed8] shadow-sm shadow-[#1d4ed8]/40 opacity-100"
                        : "bg-slate-300/80 group-hover:bg-[#1d4ed8] group-hover:shadow-sm group-hover:shadow-[#1d4ed8]/40 opacity-80 group-hover:opacity-100"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Service Icon */}
                  <div className="relative z-10 mb-4  transition-transform duration-300 group-hover:scale-105">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="relative z-10 text-base sm:text-lg font-bold font-display text-[#0f172a] mb-2 tracking-tight group-hover:text-[#1d4ed8] transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description - Smaller and more refined */}
                  <p className="relative z-10 text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
