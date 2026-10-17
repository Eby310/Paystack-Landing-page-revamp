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
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F8FAFC] rounded-3xl md:rounded-[40px] border border-slate-200 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Lead Generation Form */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0074E4] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#00C3F8]" />
                  <span>START ACCEPTING PAYMENTS IN 10 MINUTES</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#011B33] tracking-tight leading-tight">
                  Ready to Build with Paystack?
                </h2>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Join over 200,000 businesses across Africa building their revenue engine on Paystack. Zero setup cost, instant test environment.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-left space-y-3 animate-in fade-in">
                  <div className="flex items-center gap-2 text-[#0074E4]">
                    <CheckCircle2 className="w-6 h-6" />
                    <span className="font-bold text-lg text-[#011B33]">Welcome to Paystack!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700">
                    We've provisioned your developer sandbox for <strong>{businessName}</strong>. Check <strong>{email}</strong> for your activation instructions and test API keys.
                  </p>
                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={onOpenCheckoutDemo}
                      className="px-4 py-2 bg-[#0074E4] text-white font-bold text-xs rounded-xl hover:bg-[#0062c4] transition-colors"
                    >
                      Try Interactive Checkout Demo
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl hover:bg-slate-300 transition-colors"
                    >
                      Register Another Business
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Business or Project Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lagos Luxury Goods / PayPilot Ltd"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0074E4] transition-colors shadow-xs"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.ng"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0074E4] transition-colors shadow-xs"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Operating Market
                      </label>
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0074E4] transition-colors shadow-xs"
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
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0074E4] hover:bg-[#0062c4] text-white font-extrabold text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Create Free Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-[#0074E4]" />
                    <span>No credit card required. Free sandbox for life.</span>
                  </div>
                </form>
              )}

            </div>

            {/* Right: Specialist Portrait matching reference layout */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="/src/assets/images/cta_fintech_specialist_1792251545299.jpg"
                  alt="Paystack Solutions Specialist"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011B33]/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <p className="text-xs font-bold text-[#011B33]">Direct Merchant Support</p>
                  <p className="text-[11px] text-slate-600 mt-0.5">
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
