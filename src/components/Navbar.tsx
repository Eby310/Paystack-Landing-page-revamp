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
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0b0e11]/90 border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar: Exactly 3 zones (Brand - Nav Links - Primary CTA) */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2.5 text-white group" aria-label="Paystack Home">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00C3F8] to-[#30E36D] flex items-center justify-center shadow-lg shadow-[#30E36D]/20 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-black font-bold" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 4h18v3H3V4zm0 6h14v3H3v-3zm0 6h18v3H3v-3z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
                paystack
              </span>
            </a>
          </div>

          {/* Zone 2: Clean 4–5 single-line navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#solutions" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Solutions
            </a>
            <a href="#calculator" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Pricing & Fees
            </a>
            <a href="#leadership" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Leadership
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Customers
            </a>
            <a href="#developers" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
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
                className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white px-2.5 py-1.5 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
                aria-expanded={countryDropdownOpen}
                aria-label="Select country"
              >
                <Globe className="w-3.5 h-3.5 text-[#30E36D]" />
                <span>{selectedCountry}</span>
              </button>
              {countryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#161a1f] border border-neutral-700 rounded-xl shadow-2xl py-1 z-50">
                  {countries.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(c.name);
                        setCountryDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-800 hover:text-[#30E36D] transition-colors flex items-center justify-between"
                    >
                      <span>{c.name}</span>
                      {selectedCountry === c.name && <span className="text-[#30E36D]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={onOpenCheckoutDemo}
              className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors whitespace-nowrap px-3 py-2"
            >
              Test Checkout
            </button>

            <button
              type="button"
              onClick={onOpenSignUp}
              className="px-4 py-2 text-xs font-bold text-black bg-[#30E36D] hover:bg-[#28c55e] active:scale-95 transition-all rounded-full shadow-lg shadow-[#30E36D]/20 whitespace-nowrap shrink-0"
            >
              Create Free Account
            </button>
          </div>

          {/* Mobile Hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenCheckoutDemo}
              className="text-xs font-semibold text-[#30E36D] border border-[#30E36D]/30 px-2.5 py-1.5 rounded-full"
            >
              Demo
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#30E36D]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-[#101418] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-2xl">
          <nav className="flex flex-col gap-1 pb-4 border-b border-neutral-800">
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-neutral-200 hover:text-[#30E36D] rounded-lg hover:bg-neutral-800/60"
            >
              <span>Solutions & Products</span>
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-neutral-200 hover:text-[#30E36D] rounded-lg hover:bg-neutral-800/60"
            >
              <span>Pricing Calculator</span>
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#leadership"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-neutral-200 hover:text-[#30E36D] rounded-lg hover:bg-neutral-800/60"
            >
              <span>Leadership Team</span>
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-neutral-200 hover:text-[#30E36D] rounded-lg hover:bg-neutral-800/60"
            >
              <span>Customer Stories</span>
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#developers"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-neutral-200 hover:text-[#30E36D] rounded-lg hover:bg-neutral-800/60"
            >
              <span>Developer Documentation</span>
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            </a>
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#30E36D]" /> Active Market:
              </span>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-neutral-800 text-neutral-200 rounded px-2 py-1 text-xs border border-neutral-700 focus:outline-none"
                aria-label="Market selection"
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400 px-1">
              <ShieldCheck className="w-4 h-4 text-[#30E36D]" />
              <span>CBN Licensed · PCI-DSS Level 1 Certified</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckoutDemo();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded-xl transition-colors border border-neutral-700"
              >
                Test Checkout
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignUp();
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-black bg-[#30E36D] hover:bg-[#28c55e] rounded-xl transition-all shadow-md shadow-[#30E36D]/20 flex items-center justify-center gap-1"
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
