import React from "react";
import { FAQ_DATA } from "@/data/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ShieldCheck, ArrowRight } from "lucide-react";

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#fbfcfd] border-b border-slate-200/80 relative select-none">
      <div className="max-w-[1340px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Heading & Governance Advisory */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-gray-800 leading-[1.2] mb-4 font-display">
              Clarity on Engagements.
              <span className="block mt-2 font-cursive font-normal text-[1.12em] text-[#2563eb] tracking-normal">
                Frequently Asked.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8 font-normal">
              Direct, transparent answers regarding commercial contracts, security clearance,
              time-zone overlap, intellectual property ownership, and trial sprint allocations.
            </p>

            {/* Specialized Requirement / Advisory Box */}
            <div className="p-6 sm:p-7 rounded-none bg-white border border-slate-200/90 border-l-[3px] border-l-[#1d4ed8] shadow-2xs">
              <div className="flex items-center gap-2 mb-2.5">
                <ShieldCheck className="w-4 h-4 text-[#1d4ed8]" />
                <h3 className="text-sm font-bold text-slate-900 font-display">
                  Specialized Compliance or Custom SLA?
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                Our principal engineering directors review mutual NDAs, complete enterprise vendor
                security questionnaires, and structure bespoke SLA commitments within 24 hours.
              </p>
              <a
                href="mailto:architecture@nexoratech.io"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1d4ed8] hover:text-[#1e40af] transition-colors group"
              >
                <span>architecture@nexoratech.io</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Accordion (rounded-none, theme aligned) */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-3">
              {FAQ_DATA.map((item, idx) => {
                const formattedIdx = String(idx + 1).padStart(2, "0");
                return (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="rounded-none border border-slate-200/90 bg-white px-5 sm:px-6 shadow-2xs data-[state=open]:border-[#1d4ed8] data-[state=open]:border-l-[3px] data-[state=open]:border-l-[#1d4ed8] hover:border-slate-300 transition-colors duration-150"
                  >
                    <AccordionTrigger className="text-left py-5 hover:no-underline group">
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4 pr-3 text-left">
                        <span className="font-mono text-xs font-bold text-[#1d4ed8] shrink-0 pt-0.5 sm:pt-0">
                          {formattedIdx}
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#1d4ed8] transition-colors leading-snug">
                          {item.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed pb-5 font-normal pl-7 sm:pl-8">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
