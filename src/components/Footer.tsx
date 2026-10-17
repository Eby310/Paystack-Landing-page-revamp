import { ArrowRight, ShieldCheck, Heart, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onOpenCheckoutDemo: () => void;
  onOpenSignUp: () => void;
}

export default function Footer({ onOpenCheckoutDemo, onOpenSignUp }: FooterProps) {
  return (
    <footer className="w-full pt-8 pb-12 px-3 sm:px-6 lg:px-8 bg-[#0b0e11]">
      <div className="max-w-7xl mx-auto">
        
        {/* Standout Vibrant Lime / Green Card matching the reference footer visual */}
        <div className="rounded-3xl md:rounded-[48px] bg-gradient-to-br from-[#30E36D] to-[#25b855] text-slate-950 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Top Row: Brand & Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-black/15 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-[#30E36D] font-bold" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 4h18v3H3V4zm0 6h14v3H3v-3zm0 6h18v3H3v-3z" />
                  </svg>
                </div>
                <span className="text-2xl font-black tracking-tight text-slate-950">
                  paystack
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-900 font-medium max-w-sm leading-relaxed">
                Modern, secure payments infrastructure powering ambitious African businesses and global commerce. A Stripe company.
              </p>

              <div className="flex items-center gap-2 pt-2 text-xs font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-slate-950" />
                <span>Central Bank of Nigeria (CBN) Licensed PSSP</span>
              </div>
            </div>

            {/* Newsletter input inside the footer card */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <input
                type="email"
                placeholder="Enter work email for product updates..."
                className="px-5 py-3.5 rounded-full bg-white/90 border border-black/20 text-slate-900 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all sm:w-80"
              />
              <button
                type="button"
                onClick={onOpenSignUp}
                className="px-6 py-3.5 rounded-full bg-black text-white hover:bg-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 flex items-center justify-center gap-1.5"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-[#30E36D]" />
              </button>
            </div>

          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-xs text-slate-900 font-semibold border-b border-black/15">
            
            <div className="space-y-3">
              <span className="uppercase text-[11px] font-black tracking-wider text-black block">
                Products
              </span>
              <ul className="space-y-2">
                <li><button type="button" onClick={onOpenCheckoutDemo} className="hover:underline">Inline Checkout</button></li>
                <li><a href="#solutions" className="hover:underline">Recurring Billing</a></li>
                <li><a href="#solutions" className="hover:underline">Commerce & Storefronts</a></li>
                <li><a href="#solutions" className="hover:underline">Transfers & Payouts API</a></li>
                <li><a href="#solutions" className="hover:underline">Virtual Accounts</a></li>
                <li><a href="#solutions" className="hover:underline">POS Terminals</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="uppercase text-[11px] font-black tracking-wider text-black block">
                Developers
              </span>
              <ul className="space-y-2">
                <li><a href="#developers" className="hover:underline">API Documentation</a></li>
                <li><a href="#developers" className="hover:underline">Official SDK Libraries</a></li>
                <li><a href="#developers" className="hover:underline">Webhooks & Events</a></li>
                <li><a href="#developers" className="hover:underline">Shopify & WooCommerce</a></li>
                <li><button type="button" onClick={onOpenCheckoutDemo} className="hover:underline">API Sandbox</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="uppercase text-[11px] font-black tracking-wider text-black block">
                Company & People
              </span>
              <ul className="space-y-2">
                <li><a href="#leadership" className="hover:underline">Leadership Team</a></li>
                <li><a href="#testimonials" className="hover:underline">Customer Stories</a></li>
                <li><a href="#calculator" className="hover:underline">Pricing & Calculator</a></li>
                <li><a href="#" className="hover:underline">Careers in Lagos & Remote</a></li>
                <li><a href="#" className="hover:underline">Press & Media Kit</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="uppercase text-[11px] font-black tracking-wider text-black block">
                Pan-African Offices
              </span>
              <div className="space-y-2 text-[11px] font-medium leading-relaxed">
                <p>
                  <strong>Nigeria HQ:</strong> 126 Joel Ogunnaike Street, Ikeja GRA, Lagos
                </p>
                <p>
                  <strong>Ghana:</strong> 33 Senchi St, Airport Residential Area, Accra
                </p>
                <p>
                  <strong>Kenya:</strong> The Pavilion, Lower Kabete Rd, Nairobi
                </p>
                <p>
                  <strong>South Africa:</strong> 19 Maynard St, Gardens, Cape Town
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-800">
            <p>
              © {new Date().getFullYear()} Paystack Payments Limited. PCI-DSS Level 1 Certified.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Security</a>
              <button type="button" onClick={onOpenCheckoutDemo} className="hover:underline font-bold text-black">
                Demo Simulator
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
