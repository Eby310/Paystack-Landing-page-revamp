import { useState } from 'react';
import { Copy, Check, Terminal, ExternalLink, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface DeveloperApiSectionProps {
  onOpenCheckoutDemo: () => void;
  onOpenSignUp: () => void;
}

export default function DeveloperApiSection({ onOpenCheckoutDemo, onOpenSignUp }: DeveloperApiSectionProps) {
  const [activeLang, setActiveLang] = useState<'node' | 'python' | 'curl' | 'php'>('node');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    node: `import Paystack from 'paystack';
const paystack = Paystack(process.env.PAYSTACK_SECRET_KEY);

// Initialize a payment session in Nigeria
const transaction = await paystack.transaction.initialize({
  amount: 2500000, // ₦25,000.00 in kobo
  email: 'customer@lagos.ng',
  currency: 'NGN',
  channels: ['card', 'bank', 'ussd', 'apple_pay'],
  callback_url: 'https://your-store.ng/verify'
});

console.log('Authorization URL:', transaction.data.authorization_url);`,
    python: `import requests
import os

headers = {
    "Authorization": f"Bearer {os.getenv('PAYSTACK_SECRET_KEY')}",
    "Content-Type": "application/json"
}
payload = {
    "email": "customer@lagos.ng",
    "amount": "2500000", # ₦25,000 in kobo
    "currency": "NGN"
}

response = requests.post(
    "https://api.paystack.co/transaction/initialize",
    json=payload,
    headers=headers
)
data = response.json()
print("Access Code:", data['data']['access_code'])`,
    curl: `curl https://api.paystack.co/transaction/initialize \\
  -H "Authorization: Bearer sk_live_your_secret_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "customer@lagos.ng",
    "amount": "2500000",
    "currency": "NGN",
    "channels": ["card", "bank", "ussd", "qr"]
  }'`,
    php: `<?php
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.paystack.co/transaction/initialize",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode([
    'amount' => 2500000,
    'email' => 'customer@lagos.ng',
    'currency' => 'NGN'
  ]),
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer sk_live_your_secret_key",
    "Content-Type: application/json"
  ],
));
$response = curl_exec($curl);
echo $response;`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developers" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0074E4]">
              <Terminal className="w-3.5 h-3.5 text-[#00C3F8]" />
              <span>Developer-First Infrastructure</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011B33] tracking-tight leading-tight">
              Build with the Cleanest APIs in African Fintech
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Integrate in under 30 minutes with our battle-tested SDKs, transparent webhooks, comprehensive API references, and plug-and-play integrations for WooCommerce, Shopify, Magento, and React.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <Zap className="w-4 h-4 text-[#0074E4]" />
                <span>Zero configuration sandbox environment for instant testing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#0074E4]" />
                <span>Idempotent webhook delivery with automatic retry logic</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenCheckoutDemo}
                className="px-5 py-2.5 rounded-full bg-[#0074E4] hover:bg-[#0062c4] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-500/20 flex items-center gap-2"
              >
                <span>Test Interactive API Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenSignUp}
                className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:text-[#0074E4] hover:border-[#0074E4] text-xs sm:text-sm font-semibold transition-all bg-white"
              >
                Get Test API Keys
              </button>
            </div>
          </div>

          {/* Right: Code Terminal Box */}
          <div className="lg:col-span-7 rounded-2xl bg-[#01172B] border border-blue-900 shadow-2xl overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="bg-[#02203B] px-4 py-3 border-b border-blue-900/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                <span className="ml-2 text-xs font-mono text-blue-200/80 font-bold">
                  paystack-api-v3
                </span>
              </div>

              {/* Language Switcher Tabs */}
              <div className="flex items-center gap-1 bg-[#011426] p-1 rounded-lg border border-blue-900/60">
                {(['node', 'python', 'curl', 'php'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setActiveLang(lang)}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded font-semibold transition-colors ${
                      activeLang === lang
                        ? 'bg-[#0074E4] text-white font-bold shadow-xs'
                        : 'text-blue-200/70 hover:text-white'
                    }`}
                  >
                    {lang === 'node' ? 'Node.js' : lang === 'curl' ? 'cURL' : lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Content */}
            <div className="relative p-5">
              <button
                type="button"
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-blue-200 hover:text-white transition-colors border border-blue-700 flex items-center gap-1.5 text-xs font-mono"
                aria-label="Copy code snippet"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00C3F8]" />
                    <span className="text-[#00C3F8]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <pre className="font-mono text-xs sm:text-sm text-blue-100 overflow-x-auto leading-relaxed pt-2 pb-2">
                <code>{codeSnippets[activeLang]}</code>
              </pre>
            </div>

            {/* Bottom Status strip */}
            <div className="bg-[#011426] px-4 py-2.5 border-t border-blue-900/80 flex items-center justify-between text-[11px] text-blue-300 font-mono">
              <span className="text-[#00C3F8]">POST https://api.paystack.co/transaction/initialize</span>
              <span className="font-bold text-emerald-400">200 OK (114ms)</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
