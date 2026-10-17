import { useState, useId } from 'react';
import { calculatePaystackFee, formatCurrency } from '../utils/paystackCalculators';
import { Calculator, ArrowRight, ShieldCheck, Check, Sparkles, HelpCircle } from 'lucide-react';

interface FeeCalculatorProps {
  onOpenSignUp: () => void;
}

export default function FeeCalculator({ onOpenSignUp }: FeeCalculatorProps) {
  const [amount, setAmount] = useState<number>(25000);
  const [isInternational, setIsInternational] = useState<boolean>(false);
  const [currency, setCurrency] = useState<string>('NGN');
  const sliderId = useId();

  const presets = [2000, 15000, 50000, 150000, 500000];

  const breakdown = calculatePaystackFee(amount, isInternational);

  return (
    <section id="calculator" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0e11]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#30E36D]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Pricing Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simple, Predictable Pricing. No Hidden Charges.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Zero setup fees, zero maintenance charges. You only pay a tiny fee when you successfully receive money.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-4xl mx-auto bg-[#13181f] rounded-3xl border border-neutral-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Input & Controls */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Type Toggle: Local vs International */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                  Transaction Origin
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-neutral-900 rounded-xl border border-neutral-800">
                  <button
                    type="button"
                    onClick={() => setIsInternational(false)}
                    className={`py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                      !isInternational
                        ? 'bg-[#30E36D] text-black shadow-md'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Local (Nigeria) 1.5%
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsInternational(true)}
                    className={`py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                      isInternational
                        ? 'bg-[#30E36D] text-black shadow-md'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    International 3.9%
                  </button>
                </div>
              </div>

              {/* Amount slider & manual input */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={sliderId} className="text-xs font-semibold text-neutral-300">
                    Transaction Amount:
                  </label>
                  <div className="flex items-center gap-1 bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-700">
                    <span className="text-xs text-neutral-400 font-bold">₦</span>
                    <input
                      type="number"
                      min="100"
                      max="1000000"
                      step="500"
                      value={amount || ''}
                      onChange={(e) => setAmount(Number(e.target.value) || 0)}
                      className="bg-transparent text-white font-mono font-bold text-sm w-28 text-right focus:outline-none"
                      aria-label="Transaction Amount in Naira"
                    />
                  </div>
                </div>

                <input
                  id={sliderId}
                  type="range"
                  min="500"
                  max="500000"
                  step="500"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-[#30E36D] cursor-pointer h-2 bg-neutral-800 rounded-lg"
                  aria-label="Transaction Amount Slider"
                />

                {/* Preset Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {presets.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setAmount(val)}
                      className={`text-[11px] font-sans font-bold tabular-nums px-2.5 py-1 rounded-md border transition-colors ${
                        amount === val
                          ? 'border-[#30E36D] text-[#30E36D] bg-[#30E36D]/10'
                          : 'border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      {formatCurrency(val, currency)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Real-world Paystack rules clarification */}
              <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 text-xs text-neutral-300 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#30E36D] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Paystack Fair Pricing Guarantee:</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  • ₦100 flat fee is <strong>automatically waived</strong> for all transactions under ₦2,500.
                  <br />
                  • Total local transaction fee is <strong>strictly capped at ₦2,000</strong> max, no matter how millions you process.
                </p>
              </div>

            </div>

            {/* Right: Results Card */}
            <div className="md:col-span-5 bg-[#0e1216] p-6 rounded-2xl border border-neutral-800 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block font-mono">
                  Calculated Settlement
                </span>

                <div className="pb-4 border-b border-neutral-800">
                  <span className="text-xs text-neutral-400">You Receive (Net Payout):</span>
                  <p className="text-3xl sm:text-4xl font-black text-white tracking-tight text-[#30E36D] mt-1 tabular-nums font-sans">
                    {formatCurrency(breakdown.netPayout, currency)}
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-neutral-300">
                    <span>Paystack Fee:</span>
                    <span className="font-bold tabular-nums font-sans text-white">
                      {formatCurrency(breakdown.fee, currency)}
                    </span>
                  </div>

                  <div className="flex justify-between text-neutral-400 text-[11px]">
                    <span>Percentage (1.5%):</span>
                    <span className="tabular-nums font-sans">{formatCurrency(breakdown.percentageFee, currency)}</span>
                  </div>

                  <div className="flex justify-between text-neutral-400 text-[11px]">
                    <span>Flat Gateway Fee:</span>
                    <span className="tabular-nums font-sans">
                      {breakdown.flatFee === 0 ? '₦0 (Waived)' : `₦${breakdown.flatFee}`}
                    </span>
                  </div>

                  {breakdown.isCapped && (
                    <div className="p-2 bg-emerald-950/60 border border-emerald-800 rounded text-emerald-300 text-[11px] font-semibold">
                      ✓ Maximum cap applied (fee limited to ₦2,000 max)
                    </div>
                  )}

                  <div className="flex justify-between text-neutral-400 text-[11px] pt-1">
                    <span>Settlement Time:</span>
                    <span className="font-semibold text-neutral-200">Next Business Day (T+1)</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onOpenSignUp}
                  className="w-full py-3 rounded-xl bg-[#30E36D] hover:bg-[#28c55e] text-black font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-[#30E36D]/20 flex items-center justify-center gap-2"
                >
                  <span>Start Accepting Payments</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="mt-2 text-center text-[11px] text-neutral-500 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#30E36D]" />
                  <span>No setup fee · Instant onboarding</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
