import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { isValidEmail } from '../utils/paystackCalculators';

interface ContactCtaProps {
  onOpenCheckoutDemo: () => void;
}

export default function ContactCta({ onOpenCheckoutDemo }: ContactCtaProps) {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) {
      setErrorMessage('Please enter your business or project name.');
      return;
    }
    if (!email.trim() || !isValidEmail(email)) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0e11]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#12161c] rounded-3xl md:rounded-[40px] border border-neutral-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Lead Generation Form */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#30E36D] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>START ACCEPTING PAYMENTS IN 10 MINUTES</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Ready to Build with Paystack?
                </h2>
                
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  Join over 200,000 businesses across Africa building their revenue engine on Paystack. Zero setup cost, instant test environment.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/70 border border-emerald-600 text-left space-y-3 animate-in fade-in">
                  <div className="flex items-center gap-2 text-[#30E36D]">
                    <CheckCircle2 className="w-6 h-6" />
                    <span className="font-bold text-lg text-white">Welcome to Paystack!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    We've provisioned your developer sandbox for <strong>{businessName}</strong>. Check <strong>{email}</strong> for your activation instructions and test API keys.
                  </p>
                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={onOpenCheckoutDemo}
                      className="px-4 py-2 bg-[#30E36D] text-black font-bold text-xs rounded-xl hover:bg-[#28c55e] transition-colors"
                    >
                      Try Interactive Checkout Demo
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 bg-neutral-800 text-white font-semibold text-xs rounded-xl hover:bg-neutral-700 transition-colors"
                    >
                      Register Another Business
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/70 border border-red-700 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Business or Project Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lagos Luxury Goods / PayPilot Ltd"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0e11] border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#30E36D] transition-colors"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.ng"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0e11] border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#30E36D] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Operating Market
                      </label>
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0e11] border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#30E36D] transition-colors"
                      >
                        <option value="Nigeria">Nigeria 🇳🇬</option>
                        <option value="Ghana">Ghana 🇬🇭</option>
                        <option value="Kenya">Kenya 🇰🇪</option>
                        <option value="South Africa">South Africa 🇿🇦</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#30E36D] hover:bg-[#28c55e] text-black font-extrabold text-sm transition-all shadow-xl shadow-[#30E36D]/20 flex items-center justify-center gap-2"
                  >
                    <span>Create Free Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400">
                    <ShieldCheck className="w-4 h-4 text-[#30E36D]" />
                    <span>No credit card required. Free sandbox for life.</span>
                  </div>
                </form>
              )}

            </div>

            {/* Right: Specialist Portrait matching reference layout */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border border-neutral-700 shadow-2xl">
                <img
                  src="/src/assets/images/cta_fintech_specialist_1792251545299.jpg"
                  alt="Paystack Solutions Specialist"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-neutral-700">
                  <p className="text-xs font-bold text-white">Direct Merchant Support</p>
                  <p className="text-[11px] text-neutral-300 mt-0.5">
                    "Our Lagos and pan-African engineering specialists respond in minutes to guide your live integration."
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
