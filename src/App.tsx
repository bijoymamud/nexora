import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProofMarquee } from "@/components/sections/SocialProofMarquee";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { CoreCapabilities } from "@/components/sections/CoreCapabilities";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { TechStackMatrix } from "@/components/sections/TechStackMatrix";
import { DeliveryFramework } from "@/components/sections/DeliveryFramework";
import { TalentVetting } from "@/components/sections/TalentVetting";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/ui/BookingModal";

export const App: React.FC = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>("dedicated-squads");
  const [selectedDeveloper, setSelectedDeveloper] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setSelectedDeveloper(undefined);
    setBookingOpen(true);
  };

  const handleSelectModel = (modelId: string) => {
    setSelectedModel(modelId);
    setSelectedDeveloper(undefined);
    setBookingOpen(true);
  };

  const handleReserveDeveloper = (devName: string) => {
    setSelectedDeveloper(devName);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Global Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main id="main-content" className="flex-1">
        {/* 1. Hero Section with Live Stage */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Quantitative Proof & Client Marquee */}
        <SocialProofMarquee />

        {/* 3. Four Core Collaboration / Engagement Models */}
        <EngagementModels onSelectModel={handleSelectModel} />

        {/* 4. Core Architecture & Engineering Capabilities */}
        {/* <CoreCapabilities onOpenBooking={handleOpenBooking} /> */}

        {/* 5. Production Case Studies with Measurable Impact */}
        <CaseStudies onOpenBooking={handleOpenBooking} />

        {/* 6. Technology Matrix across 4 Domains */}
        <TechStackMatrix />

        {/* 7. 4-Stage Agile Delivery Governance Framework */}
        <DeliveryFramework />

        {/* 8. Top 1.5% Vetted Senior Developer Profiles */}
        <TalentVetting onReserveDeveloper={handleReserveDeveloper} />

        {/* 9. Executive Testimonials & Verified Metrics */}
        <Testimonials />

        {/* 10. Frequently Asked Questions with Animated Accordion */}
        <FAQSection />

        {/* 11. High-Conversion Strategy Call Banner */}
        {/* <CtaBanner onOpenBooking={handleOpenBooking} /> */}
      </main>

      {/* Comprehensive Enterprise Footer */}
      <Footer />

      {/* Interactive Consultation & Squad Scoping Modal */}
      <BookingModal
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        initialModel={selectedModel}
        initialDeveloper={selectedDeveloper}
      />
    </div>
  );
};

export default App;
