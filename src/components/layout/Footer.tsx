import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1118] border-t border-slate-800 pt-16 pb-12 text-sm text-slate-400">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group inline-flex">
              <div className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                <span className="font-mono font-bold text-base text-emerald-400">&gt;_</span>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                NEXORA
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-normal">
              Premier software engineering and AI systems development firm. We design, build, and
              scale mission-critical digital products with dedicated senior engineering squads.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <Mail className="h-4 w-4 text-emerald-400" />
                <a href="mailto:contact@nexoratech.io" className="hover:text-emerald-400 transition-colors">
                  contact@nexoratech.io
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>+1 (415) 890-3421</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span>548 Market St, Suite 78200, San Francisco, CA 94104</span>
              </div>
            </div>

            {/* Certifications Badges */}
            <div className="pt-3 flex flex-wrap gap-2 text-[10px] font-mono">
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-bold">
                SOC 2 TYPE II COMPLIANT
              </span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-bold">
                ISO 27001 CERTIFIED
              </span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-bold">
                HIPAA READY
              </span>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Custom Distributed Backends
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Enterprise AI & LLM Systems
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Cloud Infrastructure & Kubernetes
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Next.js Modern Web Platforms
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Native iOS & Android Engineering
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Microservice Migration & Refactoring
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Engagement Models */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Engagement Models
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#engagement-models" className="hover:text-white transition-colors">
                  Staff Team Augmentation
                </a>
              </li>
              <li>
                <a href="#engagement-models" className="hover:text-white transition-colors">
                  Dedicated Agile Product Squads
                </a>
              </li>
              <li>
                <a href="#engagement-models" className="hover:text-white transition-colors">
                  End-to-End Product Engineering
                </a>
              </li>
              <li>
                <a href="#engagement-models" className="hover:text-white transition-colors">
                  Rapid MVP Launchpad (60 Days)
                </a>
              </li>
              <li>
                <a href="#talent" className="hover:text-white transition-colors">
                  Hire Senior Go Developers
                </a>
              </li>
              <li>
                <a href="#talent" className="hover:text-white transition-colors">
                  Hire Senior Python & AI Engineers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Hubs & Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Global Presence
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-1.5 text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                <span>San Francisco, USA (HQ)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                <span>London, United Kingdom</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                <span>Berlin, Germany</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                <span>Singapore</span>
              </li>
              <li className="pt-3">
                <a href="#case-studies" className="text-emerald-400 hover:underline font-mono font-bold">
                  View Verified Case Studies →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">© 2026 Nexora Technologies Inc. All rights reserved. Built with precision craftsmanship.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Engagement
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Security Overview
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
