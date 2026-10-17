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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="bg-[#12161c] text-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-neutral-800 p-6 sm:p-8 relative">
        
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close registration modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 bg-[#30E36D]/20 text-[#30E36D] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white">
                Account Created Successfully!
              </h3>
              <p className="text-xs text-neutral-400">
                Sandbox provisioned for <strong className="text-white">{businessName}</strong> ({country})
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-left font-mono text-xs space-y-2">
              <div className="text-neutral-400 flex justify-between">
                <span>Public Test Key:</span>
                <span className="text-[#30E36D]">pk_test_88291048b29910a</span>
              </div>
              <div className="text-neutral-400 flex justify-between">
                <span>Merchant Status:</span>
                <span className="text-emerald-400">Test Mode (Active)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCheckoutDemo();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#30E36D] hover:bg-[#28c55e] text-black font-extrabold text-xs transition-colors"
              >
                Launch Interactive Checkout Demo
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#30E36D] text-black font-extrabold flex items-center justify-center text-xs">
                  P
                </div>
                <span className="text-xs uppercase font-mono tracking-wider text-[#30E36D]">
                  Quick Onboarding
                </span>
              </div>
              <h3 id="signup-modal-title" className="text-2xl font-bold text-white">
                Create Your Free Paystack Account
              </h3>
              <p className="text-xs text-neutral-400">
                Start collecting payments via Cards, USSD, Bank Transfers, and Apple Pay.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-950/60 border border-red-800 text-red-200 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Country
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs focus:outline-none focus:border-[#30E36D]"
                >
                  <option value="Nigeria">Nigeria 🇳🇬</option>
                  <option value="Ghana">Ghana 🇬🇭</option>
                  <option value="Kenya">Kenya 🇰🇪</option>
                  <option value="South Africa">South Africa 🇿🇦</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Business or App Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lagos Craft Coffee"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#30E36D]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="founder@lagoscraft.ng"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#30E36D]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Business Classification
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setBusinessType('starter')}
                    className={`py-2 px-3 text-xs font-medium rounded-xl border text-left transition-colors ${
                      businessType === 'starter'
                        ? 'border-[#30E36D] bg-[#30E36D]/10 text-white font-bold'
                        : 'border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span>Starter Business</span>
                    <span className="block text-[10px] text-neutral-500 font-normal">For sole traders & MVPs</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBusinessType('registered')}
                    className={`py-2 px-3 text-xs font-medium rounded-xl border text-left transition-colors ${
                      businessType === 'registered'
                        ? 'border-[#30E36D] bg-[#30E36D]/10 text-white font-bold'
                        : 'border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span>Registered Company</span>
                    <span className="block text-[10px] text-neutral-500 font-normal">CAC Registered (Ltd/PLC)</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#30E36D] hover:bg-[#28c55e] text-black font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-[#30E36D]/20 flex items-center justify-center gap-2"
              >
                <span>Create My Free Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#30E36D]" />
                <span>Zero setup fee · Instant test credentials</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
