import { ArrowRight, Star, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenCheckoutDemo: () => void;
  onOpenSignUp: () => void;
}

export default function Hero({ onOpenCheckoutDemo, onOpenSignUp }: HeroProps) {
  return (
    <section className="relative w-full pt-4 pb-12 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent">
      {/* Light curved hero container following the reference mockup */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-white text-slate-900 rounded-3xl md:rounded-[52px] shadow-xl relative overflow-hidden pt-10 md:pt-14 pb-12 px-6 sm:px-10 lg:px-16 border border-slate-200/90">
          
          {/* Subtle decorative geometric sparkles in Paystack Blue & Cyan */}
          <div className="absolute top-8 left-8 sm:left-12 text-[#00C3F8] opacity-80 pointer-events-none">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L13.8 8.2L22 10L13.8 11.8L12 20L10.2 11.8L2 10L10.2 8.2L12 0Z" />
            </svg>
          </div>
          
          <div className="absolute top-12 right-8 sm:right-16 text-[#0074E4] opacity-75 pointer-events-none">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9L12 2Z" />
            </svg>
          </div>

          {/* Centered Main Headline */}
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0074E4]">
              <span className="w-2 h-2 rounded-full bg-[#00C3F8]"></span>
              <span>Modern Financial Rails For Africa</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#011B33] leading-[1.15] text-balance">
              Empowering African Brands Through Modern Payments
            </h1>
          </div>

          {/* 3-Column Layout: Left Copy & CTA - Center Smiling Professional - Right Proof Metric */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative">
            
            {/* Left Column */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-6 lg:pb-8 text-left">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0074E4] tracking-wider uppercase">
                  <span>✦</span>
                  <span>Trusted Nigerian Infrastructure</span>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  From multi-channel checkouts to frictionless local and global payouts, Paystack gives ambitious enterprises, fast-growing startups, and creators the modern financial tooling to expand without limits.
                </p>
              </div>

              <div>
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold hover:border-[#0074E4] hover:text-[#0074E4] hover:bg-blue-50/50 transition-all"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>

            {/* Center Column: Professional Portrait (matching reference composition) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-end relative">
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-square flex items-end justify-center">
                {/* Background aura circle in soft blue */}
                <div className="absolute inset-x-8 bottom-0 top-10 bg-gradient-to-t from-blue-100/70 to-transparent rounded-full -z-0"></div>
                
                <img
                  src="/src/assets/images/hero_fintech_leader_1792251543249.jpg"
                  alt="Confident Nigerian Fintech Leader"
                  className="w-full h-full object-cover object-top rounded-3xl relative z-10 shadow-lg border border-slate-200"
                  referrerPolicy="no-referrer"
                />

                {/* Interactive floating tag */}
                <div className="absolute -left-2 sm:left-2 bottom-12 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg border border-blue-100 text-[11px] font-semibold text-[#011B33] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0074E4]" />
                  <span>99.9% Card Success Rate</span>
                </div>
              </div>
            </div>

            {/* Right Column: Rating & Experience (matching reference layout) */}
            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-4 lg:pb-8 text-left lg:text-right">
              <div className="flex items-center gap-1 text-[#0074E4]">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>

              <div>
                <p className="text-3xl font-extrabold text-[#011B33] tracking-tight">10+ Years</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  Of Payment Innovation
                </p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 max-w-xs">
                <p className="text-xs text-slate-600 leading-normal">
                  Over 200,000 merchants process billions in monthly transactions securely with Paystack across Africa.
                </p>
              </div>
            </div>

          </div>

          {/* Floating Action Buttons at bottom center */}
          <div className="mt-8 pt-4 flex flex-wrap items-center justify-center gap-3 relative z-20">
            <button
              type="button"
              onClick={onOpenSignUp}
              className="px-6 py-3 rounded-full bg-[#0074E4] hover:bg-[#0062c4] active:scale-95 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
            >
              <span>Create Free Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenCheckoutDemo}
              className="px-6 py-3 rounded-full bg-[#011B33] hover:bg-[#092847] active:scale-95 text-white font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <span>Test Live Checkout Demo</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
