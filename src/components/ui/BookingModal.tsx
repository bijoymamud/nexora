import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ShieldCheck,
  Send,
} from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialModel?: string;
  initialDeveloper?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  open,
  onOpenChange,
  initialModel = "dedicated-squads",
  initialDeveloper,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    engagementModel: initialModel,
    techStack: "Go / Cloud Infrastructure",
    timeline: "Immediate (3-5 days)",
    message: initialDeveloper ? `Interested in reserving ${initialDeveloper} for upcoming sprint.` : "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl">
        {!submitted ? (
          <>
            <DialogHeader className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="emerald" className="text-[10px]">
                  Sprint Readiness: Available
                </Badge>
                {initialDeveloper && (
                  <Badge variant="default" className="text-[10px]">
                    Reserved for: {initialDeveloper}
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-2xl font-bold text-slate-950">
                Schedule Technical Architecture Session
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Meet with a Principal Architect to review system specs, define sprint roadmaps, and
                confirm developer availability.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-900 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors font-medium"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-900 mb-1.5">
                    Company Name / Project *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Stripe, Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors font-medium"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1.5">
                    Collaboration Framework
                  </label>
                  <select
                    value={formData.engagementModel}
                    onChange={(e) =>
                      setFormData({ ...formData, engagementModel: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors font-medium"
                  >
                    <option value="dedicated-squads">Dedicated Agile Squad</option>
                    <option value="team-augmentation">Staff Augmentation (Individual Seniors)</option>
                    <option value="end-to-end">End-to-End Product Engineering</option>
                    <option value="mvp-launchpad">Rapid MVP Launchpad (60 Days)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-900 mb-1.5">
                    Primary Tech Domain
                  </label>
                  <select
                    value={formData.techStack}
                    onChange={(e) =>
                      setFormData({ ...formData, techStack: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors font-medium"
                  >
                    <option value="Go / Cloud Infrastructure">Go / Distributed Systems</option>
                    <option value="Python / Applied AI & RAG">Python / Applied AI & RAG</option>
                    <option value="Next.js / Fullstack TypeScript">Next.js / Fullstack TypeScript</option>
                    <option value="Kubernetes / AWS DevOps">Kubernetes / AWS Cloud SRE</option>
                    <option value="React Native / Mobile">React Native / Mobile Apps</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1.5">
                    Desired Ramp-Up Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors font-medium"
                  >
                    <option value="Immediate (3-5 days)">Immediate (Next Sprint / 3-5 days)</option>
                    <option value="Within 2-3 weeks">Within 2 to 3 weeks</option>
                    <option value="Next Quarter">Next Quarter Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-900 mb-1.5">
                  Project Scope or Technical Context (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a brief overview of your technical bottleneck, target architecture, or stack requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors resize-none font-medium"
                />
              </div>

              {/* Guarantees Assurance */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                <ShieldCheck className="h-4 w-4 text-emerald-700 shrink-0" />
                <span>Strict mutual NDA enforced before architecture discussions.</span>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="lime"
                  className="w-full flex items-center justify-center gap-2 font-bold py-3 text-sm shadow-sm"
                >
                  <Send className="h-4 w-4" />
                  <span>Confirm & Request Strategy Slot</span>
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="h-14 w-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-emerald-700">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="text-xl font-bold text-slate-950 mb-2">
              Strategy Session Request Confirmed
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. A calendar invite
              and preliminary architecture intake form have been dispatched to{" "}
              <strong className="text-slate-900">{formData.email}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 mb-6 max-w-sm mx-auto font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Assigned Lead:</span>
                <span className="text-emerald-700 font-bold">Marcus Vance (Staff Architect)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Squad Framework:</span>
                <span className="text-slate-900 font-bold">{formData.engagementModel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Ramp-up Window:</span>
                <span className="text-emerald-700 font-bold">{formData.timeline}</span>
              </div>
            </div>

            <Button variant="lime" onClick={handleReset} className="font-bold px-8">
              Return to Platform Overview
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
