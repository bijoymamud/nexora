import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Case Study", href: "#case-studies", hasDropdown: false },
    { label: "AI Services", href: "#capabilities", hasDropdown: false },
    { label: "Our Services", href: "#engagement-models", hasDropdown: true },
    { label: "Hire Offshore Developers", href: "#talent", hasDropdown: true },
    { label: "Industries", href: "#case-studies", hasDropdown: true },
    { label: "Company", href: "#process", hasDropdown: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#eff6ff]/95 backdrop-blur-md border-b border-blue-100/80 py-4 shadow-sm"
          : " py-5"
      }`}
    >
      <div className="max-w-[1248px] mx-auto flex items-center justify-between">
        {/* Brand Logo - NeXora */}
        <a href="/" className="flex items-center gap-2.5">
          <span className="font-display font-extrabold text-xl text-[#0f172a] tracking-tight">
            NeXora
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-semibold text-[#334155] hover:text-[#2563eb] transition-colors flex items-center gap-1.5"
            >
              <span>{link.label}</span>
              {link.hasDropdown && (
                <ChevronDown className="h-3.5 w-3.5 text-[#64748b] opacity-80" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Contact Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenBooking}
            className="text-[#0f172a] text-sm font-semibold border-[1.5px] border-slate-300 hover:bg-[#1d4ed8] hover:bg-[#0f172a] hover:text-white px-6 py-2.5 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="text-[#0f172a] text-xs font-semibold border border-slate-300 px-3.5 py-1.5 rounded-full"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#0f172a] p-1.5 rounded-lg focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1e293b] hover:text-[#2563eb] flex items-center justify-between py-1.5 border-b border-slate-100"
              >
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDown className="h-4 w-4 text-[#64748b]" />}
              </a>
            ))}

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#2563eb] text-white font-bold text-center py-3 rounded-full shadow-md"
              >
                Book a Meeting
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
