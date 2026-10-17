import { useState } from 'react';
import { Menu, X, ChevronRight, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenCheckoutDemo: () => void;
  onOpenSignUp: () => void;
}

export default function Navbar({ onOpenCheckoutDemo, onOpenSignUp }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Nigeria 🇳🇬');
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const countries = [
    { name: 'Nigeria 🇳🇬', code: 'NG' },
    { name: 'Ghana 🇬🇭', code: 'GH' },
    { name: 'Kenya 🇰🇪', code: 'KE' },
    { name: 'South Africa 🇿🇦', code: 'ZA' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 border-b border-slate-200/80 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar: Exactly 3 zones (Brand - Nav Links - Primary CTA) */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2.5 text-[#011B33] group" aria-label="Paystack Home">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00C3F8] to-[#0074E4] flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-white font-bold" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 4h18v3H3V4zm0 6h14v3H3v-3zm0 6h18v3H3v-3z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#011B33] whitespace-nowrap">
                paystack
              </span>
            </a>
          </div>

          {/* Zone 2: Clean 4–5 single-line navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#solutions" className="hover:text-[#0074E4] transition-colors whitespace-nowrap shrink-0">
              Solutions
            </a>
            <a href="#calculator" className="hover:text-[#0074E4] transition-colors whitespace-nowrap shrink-0">
              Pricing & Fees
            </a>
            <a href="#leadership" className="hover:text-[#0074E4] transition-colors whitespace-nowrap shrink-0">
              Leadership
            </a>
            <a href="#testimonials" className="hover:text-[#0074E4] transition-colors whitespace-nowrap shrink-0">
              Customers
            </a>
            <a href="#developers" className="hover:text-[#0074E4] transition-colors whitespace-nowrap shrink-0">
              Developers
            </a>
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {/* Country switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                className="flex items-center gap-1.5 text-xs text-slate-700 hover:text-[#0074E4] px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50 transition-colors"
                aria-expanded={countryDropdownOpen}
                aria-label="Select country"
              >
                <Globe className="w-3.5 h-3.5 text-[#0074E4]" />
                <span>{selectedCountry}</span>
              </button>
              {countryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-50">
                  {countries.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(c.name);
                        setCountryDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-[#0074E4] transition-colors flex items-center justify-between"
                    >
                      <span>{c.name}</span>
                      {selectedCountry === c.name && <span className="text-[#0074E4] font-bold">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={onOpenCheckoutDemo}
              className="text-xs font-semibold text-slate-700 hover:text-[#0074E4] transition-colors whitespace-nowrap px-3 py-2"
            >
              Test Checkout
            </button>

            <button
              type="button"
              onClick={onOpenSignUp}
              className="px-4 py-2 text-xs font-bold text-white bg-[#0074E4] hover:bg-[#0062c4] active:scale-95 transition-all rounded-full shadow-md shadow-blue-500/20 whitespace-nowrap shrink-0"
            >
              Create Free Account
            </button>
          </div>

          {/* Mobile Hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenCheckoutDemo}
              className="text-xs font-semibold text-[#0074E4] border border-[#0074E4]/40 bg-blue-50/50 px-2.5 py-1.5 rounded-full"
            >
              Demo
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#0074E4] hover:bg-slate-100 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0074E4]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col gap-1 pb-4 border-b border-slate-100">
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-800 hover:text-[#0074E4] rounded-lg hover:bg-blue-50/60"
            >
              <span>Solutions & Products</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-800 hover:text-[#0074E4] rounded-lg hover:bg-blue-50/60"
            >
              <span>Pricing Calculator</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#leadership"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-800 hover:text-[#0074E4] rounded-lg hover:bg-blue-50/60"
            >
              <span>Leadership Team</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-800 hover:text-[#0074E4] rounded-lg hover:bg-blue-50/60"
            >
              <span>Customer Stories</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#developers"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-800 hover:text-[#0074E4] rounded-lg hover:bg-blue-50/60"
            >
              <span>Developer Documentation</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#0074E4]" /> Active Market:
              </span>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-white text-slate-800 rounded px-2 py-1 text-xs border border-slate-300 focus:outline-none"
                aria-label="Market selection"
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 px-1">
              <ShieldCheck className="w-4 h-4 text-[#0074E4]" />
              <span>CBN Licensed · PCI-DSS Level 1 Certified</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckoutDemo();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors border border-slate-200"
              >
                Test Checkout
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignUp();
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-white bg-[#0074E4] hover:bg-[#0062c4] rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-1"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
