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
    <section id="developers" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#090c0f] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#30E36D]">
              <Terminal className="w-3.5 h-3.5" />
              <span>Developer-First Infrastructure</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Build with the Cleanest APIs in African Fintech
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Integrate in under 30 minutes with our battle-tested SDKs, transparent webhooks, comprehensive API references, and plug-and-play integrations for WooCommerce, Shopify, Magento, and React.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <Zap className="w-4 h-4 text-[#30E36D]" />
                <span>Zero configuration sandbox environment for instant testing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-[#30E36D]" />
                <span>Idempotent webhook delivery with automatic retry logic</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenCheckoutDemo}
                className="px-5 py-2.5 rounded-full bg-[#30E36D] hover:bg-[#28c55e] text-black font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#30E36D]/20 flex items-center gap-2"
              >
                <span>Test Interactive API Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenSignUp}
                className="px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 text-xs sm:text-sm font-semibold transition-all"
              >
                Get Test API Keys
              </button>
            </div>
          </div>

          {/* Right: Code Terminal Box */}
          <div className="lg:col-span-7 rounded-2xl bg-[#12161b] border border-neutral-800 shadow-2xl overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="bg-[#181d24] px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-xs font-mono text-neutral-400">
                  paystack-api-v3
                </span>
              </div>

              {/* Language Switcher Tabs */}
              <div className="flex items-center gap-1 bg-[#101418] p-1 rounded-lg border border-neutral-800">
                {(['node', 'python', 'curl', 'php'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setActiveLang(lang)}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded font-medium transition-colors ${
                      activeLang === lang
                        ? 'bg-[#30E36D] text-black font-bold'
                        : 'text-neutral-400 hover:text-white'
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
                className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors border border-neutral-700 flex items-center gap-1.5 text-xs font-mono"
                aria-label="Copy code snippet"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#30E36D]" />
                    <span className="text-[#30E36D]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <pre className="font-mono text-xs sm:text-sm text-neutral-200 overflow-x-auto leading-relaxed pt-2 pb-2">
                <code>{codeSnippets[activeLang]}</code>
              </pre>
            </div>

            {/* Bottom Status strip */}
            <div className="bg-[#101418] px-4 py-2.5 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
              <span className="text-emerald-400">POST https://api.paystack.co/transaction/initialize</span>
              <span>200 OK (114ms)</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
