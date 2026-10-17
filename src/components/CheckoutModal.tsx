import { useState, useEffect } from 'react';
import { X, CreditCard, Landmark, Smartphone, QrCode, CheckCircle2, Lock, ShieldCheck, Copy, Check, RefreshCw } from 'lucide-react';
import { formatCurrency, getUssdString } from '../utils/paystackCalculators';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [activeTab, setActiveTab] = useState<'card' | 'transfer' | 'ussd' | 'qr'>('card');
  const [amount, setAmount] = useState<number>(15000);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedBank, setSelectedBank] = useState('gtb');
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedUssd, setCopiedUssd] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setIsProcessing(false);
  };

  const ussdCode = getUssdString(selectedBank, amount, '9021');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="bg-white text-slate-900 w-full max-w-xl rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-[#011B33] text-white p-4 sm:p-5 px-5 sm:px-6 flex items-center justify-between border-b border-blue-950">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00C3F8] to-[#0074E4] text-white font-bold flex items-center justify-center shadow-md">
              <span className="text-sm font-black">P</span>
            </div>
            <div>
              <h3 id="checkout-modal-title" className="text-[10px] sm:text-xs uppercase font-bold text-blue-200 tracking-wider">
                Paystack Interactive Checkout
              </h3>
              <p className="text-xs sm:text-sm font-extrabold text-white">
                Lagos Ambitious Goods Ltd
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-[10px] text-blue-200/80 block">Total Amount</span>
              <span className="text-sm sm:text-base font-extrabold text-[#00C3F8]">
                ₦15,000.00
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-blue-900/60 text-blue-200 hover:text-white transition-colors"
              aria-label="Close checkout modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {isSuccess ? (
          <div className="p-6 sm:p-12 text-center space-y-5 my-auto animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-[#0074E4] rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl sm:text-2xl font-black text-[#011B33]">
                Payment Successful!
              </h4>
              <p className="text-xs text-slate-500">
                Transaction ref: <span className="font-mono font-bold text-slate-700">pstk_live_9a7x810k229</span>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between text-slate-600">
                <span>Amount Paid:</span>
                <span className="font-bold text-slate-900 font-sans tabular-nums">₦15,000.00</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Channel:</span>
                <span className="font-semibold text-slate-900 capitalize">{activeTab}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Settlement:</span>
                <span className="text-[#0074E4] font-bold">T+1 to merchant bank</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-2 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-800 transition-colors"
              >
                Simulate Another Payment
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-[#0074E4] hover:bg-[#0062c4] text-white font-extrabold text-xs transition-colors shadow-md"
              >
                Close Demo
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
            
            {/* Left Channel Tabs */}
            <div className="md:col-span-4 bg-slate-50 p-2 sm:p-4 border-b md:border-b-0 md:border-r border-slate-200 grid grid-cols-4 md:flex md:flex-col gap-1 sm:gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTab('card')}
                className={`text-center md:text-left p-2 sm:p-3 rounded-xl text-[11px] sm:text-xs font-bold transition-all flex flex-col md:flex-row items-center gap-1 md:gap-2.5 ${
                  activeTab === 'card'
                    ? 'bg-white text-[#0074E4] shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <CreditCard className="w-4 h-4 text-[#0074E4]" />
                <span>Card</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('transfer')}
                className={`text-center md:text-left p-2 sm:p-3 rounded-xl text-[11px] sm:text-xs font-bold transition-all flex flex-col md:flex-row items-center gap-1 md:gap-2.5 ${
                  activeTab === 'transfer'
                    ? 'bg-white text-[#0074E4] shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Landmark className="w-4 h-4 text-[#0074E4]" />
                <span>Transfer</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('ussd')}
                className={`text-center md:text-left p-2 sm:p-3 rounded-xl text-[11px] sm:text-xs font-bold transition-all flex flex-col md:flex-row items-center gap-1 md:gap-2.5 ${
                  activeTab === 'ussd'
                    ? 'bg-white text-[#0074E4] shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Smartphone className="w-4 h-4 text-[#0074E4]" />
                <span>USSD</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('qr')}
                className={`text-center md:text-left p-2 sm:p-3 rounded-xl text-[11px] sm:text-xs font-bold transition-all flex flex-col md:flex-row items-center gap-1 md:gap-2.5 ${
                  activeTab === 'qr'
                    ? 'bg-white text-[#0074E4] shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <QrCode className="w-4 h-4 text-[#0074E4]" />
                <span>QR / Pay</span>
              </button>
            </div>

            {/* Right Tab Content */}
            <div className="md:col-span-8 p-5 sm:p-6 space-y-4 sm:space-y-5 flex flex-col justify-between">
              
              {activeTab === 'card' && (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Enter test card details</span>
                    <span className="font-mono text-[#0074E4] bg-blue-50 px-2 py-0.5 rounded font-semibold text-[11px]">
                      Test Mode
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      readOnly
                      value="4084 ···· ···· 4081"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-sm bg-slate-50 text-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                        Expires
                      </label>
                      <input
                        type="text"
                        readOnly
                        value="12 / 28"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-sm bg-slate-50 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        readOnly
                        value="382"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-sm bg-slate-50 text-slate-900"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'transfer' && (
                <div className="space-y-3">
                  <p className="text-xs text-slate-600">
                    Transfer exactly <strong>₦15,000.00</strong> to the dynamic virtual account below:
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Bank:</span>
                      <span className="font-bold text-slate-900">Titan Trust Bank / Wema</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Account Number:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-base text-slate-900">9920194812</span>
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText('9920194812');
                            setCopiedAccount(true);
                            setTimeout(() => setCopiedAccount(false), 2000);
                          }}
                          className="p-1 hover:bg-slate-200 rounded text-slate-600"
                          aria-label="Copy account number"
                        >
                          {copiedAccount ? <Check className="w-4 h-4 text-[#0074E4]" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Expires:</span>
                      <span className="text-amber-700 font-mono font-semibold">29:45 mins</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ussd' && (
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-700">
                    Choose Your Bank:
                  </label>
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-300 bg-white"
                  >
                    <option value="gtb">Guaranty Trust Bank (GTBank)</option>
                    <option value="zenith">Zenith Bank</option>
                    <option value="access">Access Bank</option>
                    <option value="uba">United Bank for Africa (UBA)</option>
                    <option value="firstbank">First Bank of Nigeria</option>
                  </select>

                  <div className="p-4 rounded-xl bg-[#011B33] text-white space-y-2">
                    <span className="text-[11px] text-blue-200/80 block">Dial this code on your phone:</span>
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base font-mono font-bold text-[#00C3F8]">{ussdCode}</span>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(ussdCode);
                          setCopiedUssd(true);
                          setTimeout(() => setCopiedUssd(false), 2000);
                        }}
                        className="px-2.5 py-1 rounded bg-blue-900/80 hover:bg-blue-800 text-xs font-mono text-white flex items-center gap-1"
                      >
                        {copiedUssd ? <Check className="w-3.5 h-3.5 text-[#00C3F8]" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedUssd ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'qr' && (
                <div className="space-y-3 text-center">
                  <p className="text-xs text-slate-600">
                    Scan with any NIBSS QR supported banking app or tap Apple Pay below
                  </p>
                  <div className="w-28 h-28 mx-auto bg-slate-100 p-2 rounded-xl border border-slate-300 flex items-center justify-center">
                    <QrCode className="w-20 h-20 text-slate-800" />
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2.5">
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleSimulatePayment}
                  className="w-full py-3 sm:py-3.5 rounded-xl bg-[#0074E4] hover:bg-[#0062c4] text-white font-extrabold text-xs sm:text-sm transition-all shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Authorizing with Bank...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Authorize ₦15,000.00</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0074E4]" />
                  <span>Secured by 256-bit AES encryption & PCI-DSS Level 1</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
