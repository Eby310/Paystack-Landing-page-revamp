import { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Lock, Building2 } from 'lucide-react';
import { isValidEmail } from '../utils/paystackCalculators';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckoutDemo: () => void;
}

export default function SignUpModal({ isOpen, onClose, onOpenCheckoutDemo }: SignUpModalProps) {
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const [businessType, setBusinessType] = useState<'starter' | 'registered'>('starter');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) {
      setError('Please provide a business or brand name.');
      return;
    }
    if (!email.trim() || !isValidEmail(email)) {
      setError('Please enter a valid work email.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setBusinessName('');
    setEmail('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="signup-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="bg-white text-slate-900 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-slate-200 p-6 sm:p-8 relative">
        
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Close registration modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 bg-blue-50 text-[#0074E4] rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-[#011B33]">
                Account Created Successfully!
              </h3>
              <p className="text-xs text-slate-600">
                Sandbox provisioned for <strong className="text-slate-900">{businessName}</strong> ({country})
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left font-mono text-xs space-y-2">
              <div className="text-slate-500 flex justify-between">
                <span>Public Test Key:</span>
                <span className="text-[#0074E4] font-bold">pk_test_88291048b29910a</span>
              </div>
              <div className="text-slate-500 flex justify-between">
                <span>Merchant Status:</span>
                <span className="text-emerald-700 font-bold">Test Mode (Active)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCheckoutDemo();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0074E4] hover:bg-[#0062c4] text-white font-extrabold text-xs transition-colors shadow-md shadow-blue-500/20"
              >
                Launch Interactive Checkout Demo
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#00C3F8] to-[#0074E4] text-white font-extrabold flex items-center justify-center text-xs shadow-xs">
                  P
                </div>
                <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#0074E4]">
                  Quick Onboarding
                </span>
              </div>
              <h3 id="signup-modal-title" className="text-2xl font-bold text-[#011B33]">
                Create Your Free Paystack Account
              </h3>
              <p className="text-xs text-slate-600">
                Start collecting payments via Cards, USSD, Bank Transfers, and Apple Pay.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Country
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#0074E4] shadow-xs"
                >
                  <option value="Nigeria">Nigeria 🇳🇬</option>
                  <option value="Ghana">Ghana 🇬🇭</option>
                  <option value="Kenya">Kenya 🇰🇪</option>
                  <option value="South Africa">South Africa 🇿🇦</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Business or App Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lagos Craft Coffee"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#0074E4] shadow-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="founder@lagoscraft.ng"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#0074E4] shadow-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Business Classification
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setBusinessType('starter')}
                    className={`py-2 px-3 text-xs font-medium rounded-xl border text-left transition-colors ${
                      businessType === 'starter'
                        ? 'border-[#0074E4] bg-blue-50/70 text-[#011B33] font-bold shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:text-slate-900 bg-slate-50'
                    }`}
                  >
                    <span>Starter Business</span>
                    <span className="block text-[10px] text-slate-500 font-normal">For sole traders & MVPs</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBusinessType('registered')}
                    className={`py-2 px-3 text-xs font-medium rounded-xl border text-left transition-colors ${
                      businessType === 'registered'
                        ? 'border-[#0074E4] bg-blue-50/70 text-[#011B33] font-bold shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:text-slate-900 bg-slate-50'
                    }`}
                  >
                    <span>Registered Company</span>
                    <span className="block text-[10px] text-slate-500 font-normal">CAC Registered (Ltd/PLC)</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#0074E4] hover:bg-[#0062c4] text-white font-extrabold text-xs sm:text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Create My Free Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0074E4]" />
                <span>Zero setup fee · Instant test credentials</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
