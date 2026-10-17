import { ArrowRight, ShieldCheck, Heart, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onOpenCheckoutDemo: () => void;
  onOpenSignUp: () => void;
}

export default function Footer({ onOpenCheckoutDemo, onOpenSignUp }: FooterProps) {
  return (
    <footer className="w-full pt-8 pb-12 px-3 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Deep Paystack Navy Card matching the reference footer layout */}
        <div className="rounded-3xl md:rounded-[48px] bg-[#011B33] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-blue-950">
          
          {/* Top Row: Brand & Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-blue-900/60 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00C3F8] to-[#0074E4] flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white font-bold" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 4h18v3H3V4zm0 6h14v3H3v-3zm0 6h18v3H3v-3z" />
                  </svg>
                </div>
                <span className="text-2xl font-black tracking-tight text-white">
                  paystack
                </span>
              </div>

              <p className="text-xs sm:text-sm text-blue-100 font-medium max-w-sm leading-relaxed">
                Modern, secure payments infrastructure powering ambitious African businesses and global commerce. A Stripe company.
              </p>

              <div className="flex items-center gap-2 pt-2 text-xs font-bold text-cyan-300">
                <ShieldCheck className="w-4 h-4 text-[#00C3F8]" />
                <span>Central Bank of Nigeria (CBN) Licensed PSSP</span>
              </div>
            </div>

            {/* Newsletter input inside the footer card */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <input
                type="email"
                placeholder="Enter work email for product updates..."
                className="px-5 py-3.5 rounded-full bg-white/10 border border-blue-800 text-white placeholder-blue-300/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00C3F8] transition-all sm:w-80"
              />
              <button
                type="button"
                onClick={onOpenSignUp}
                className="px-6 py-3.5 rounded-full bg-[#0074E4] hover:bg-[#0062c4] text-white font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-[#00C3F8]" />
              </button>
            </div>

          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-xs text-blue-100 font-medium border-b border-blue-900/60">
            
            <div className="space-y-3">
              <span className="uppercase text-[11px] font-black tracking-wider text-white block">
                Products
              </span>
              <ul className="space-y-2">
                <li><button type="button" onClick={onOpenCheckoutDemo} className="hover:text-[#00C3F8] transition-colors">Inline Checkout</button></li>
                <li><a href="#solutions" className="hover:text-[#00C3F8] transition-colors">Recurring Billing</a></li>
                <li><a href="#solutions" className="hover:text-[#00C3F8] transition-colors">Commerce & Storefronts</a></li>
                <li><a href="#solutions" className="hover:text-[#00C3F8] transition-colors">Transfers & Payouts API</a></li>
                <li><a href="#solutions" className="hover:text-[#00C3F8] transition-colors">Virtual Accounts</a></li>
                <li><a href="#solutions" className="hover:text-[#00C3F8] transition-colors">POS Terminals</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="uppercase text-[11px] font-black tracking-wider text-white block">
                Developers
              </span>
              <ul className="space-y-2">
                <li><a href="#developers" className="hover:text-[#00C3F8] transition-colors">API Documentation</a></li>
                <li><a href="#developers" className="hover:text-[#00C3F8] transition-colors">Official SDK Libraries</a></li>
                <li><a href="#developers" className="hover:text-[#00C3F8] transition-colors">Webhooks & Events</a></li>
                <li><a href="#developers" className="hover:text-[#00C3F8] transition-colors">Shopify & WooCommerce</a></li>
                <li><button type="button" onClick={onOpenCheckoutDemo} className="hover:text-[#00C3F8] transition-colors">API Sandbox</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="uppercase text-[11px] font-black tracking-wider text-white block">
                Company & People
              </span>
              <ul className="space-y-2">
                <li><a href="#leadership" className="hover:text-[#00C3F8] transition-colors">Leadership Team</a></li>
                <li><a href="#testimonials" className="hover:text-[#00C3F8] transition-colors">Customer Stories</a></li>
                <li><a href="#calculator" className="hover:text-[#00C3F8] transition-colors">Pricing & Calculator</a></li>
                <li><a href="#" className="hover:text-[#00C3F8] transition-colors">Careers in Lagos & Remote</a></li>
                <li><a href="#" className="hover:text-[#00C3F8] transition-colors">Press & Media Kit</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="uppercase text-[11px] font-black tracking-wider text-white block">
                Pan-African Offices
              </span>
              <div className="space-y-2 text-[11px] text-blue-200/80 leading-relaxed">
                <p>
                  <strong className="text-white">Nigeria HQ:</strong> 126 Joel Ogunnaike Street, Ikeja GRA, Lagos
                </p>
                <p>
                  <strong className="text-white">Ghana:</strong> 33 Senchi St, Airport Residential Area, Accra
                </p>
                <p>
                  <strong className="text-white">Kenya:</strong> The Pavilion, Lower Kabete Rd, Nairobi
                </p>
                <p>
                  <strong className="text-white">South Africa:</strong> 19 Maynard St, Gardens, Cape Town
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-blue-200/80">
            <p>
              © {new Date().getFullYear()} Paystack Payments Limited. PCI-DSS Level 1 Certified.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
              <button type="button" onClick={onOpenCheckoutDemo} className="hover:text-[#00C3F8] font-bold text-white transition-colors">
                Demo Simulator
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
