import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, CreditCard, RefreshCw, ShoppingBag, SendHorizontal, Code, Sparkles } from 'lucide-react';

interface ProductsShowcaseProps {
  onOpenCheckoutDemo: () => void;
  onOpenSignUp: () => void;
}

interface ProductItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  features: string[];
  channels: string[];
  codePreview: string;
}

export default function ProductsShowcase({ onOpenCheckoutDemo, onOpenSignUp }: ProductsShowcaseProps) {
  const [activeProductId, setActiveProductId] = useState('01');

  const products: ProductItem[] = [
    {
      id: '01',
      num: '01',
      title: 'Checkout & Multi-Channel Payments',
      shortDesc: 'Give your customers the smoothest checkout experience in Africa with Cards, USSD, Bank Transfer, Apple Pay, and QR.',
      features: [
        'Intelligent automatic bank failover routing',
        'Built-in fraud detection with Paystack Shield',
        'Zero-redirect inline checkout popup or custom UI',
        'Real-time webhook notifications',
      ],
      channels: ['Mastercard', 'Visa', 'Verve', 'Bank Transfer', 'USSD (*737#)', 'Apple Pay'],
      codePreview: `const handler = PaystackPop.setup({\n  key: 'pk_live_your_public_key',\n  email: 'customer@business.ng',\n  amount: 1500000, // ₦15,000.00\n  currency: 'NGN',\n  channels: ['card', 'bank', 'ussd', 'qr'],\n  callback: (response) => {\n    verifyTransaction(response.reference);\n  }\n});\nhandler.openIframe();`,
    },
    {
      id: '02',
      num: '02',
      title: 'Recurring Billing & Subscriptions',
      shortDesc: 'Collect automated recurring payments from debit cards and bank accounts without customer intervention.',
      features: [
        'Automated dunning & smart retry for failed charges',
        'Flexible intervals: hourly, daily, weekly, monthly, annual',
        'Tokenized customer authorization codes',
        'Self-service customer subscription portals',
      ],
      channels: ['Direct Debit (NIBSS)', 'Saved Cards', 'Tokenized Recurring'],
      codePreview: `await paystack.subscription.create({\n  customer: 'CUS_9x92jk1s90',\n  plan: 'PLN_monthly_tier_pro',\n  start_date: new Date().toISOString()\n});`,
    },
    {
      id: '03',
      num: '03',
      title: 'Paystack Commerce & Storefronts',
      shortDesc: 'Create a beautiful digital product page in under 5 minutes without writing a single line of code.',
      features: [
        'Custom brand domains and payment links',
        'Automatic stock tracking and inventory management',
        'Delivery fee calculation and automated WhatsApp receipts',
        'Works smoothly for physical goods, ebooks, and event tickets',
      ],
      channels: ['Payment Links', 'Product Pages', 'Storefronts', 'Invoicing'],
      codePreview: `// Storefronts require zero code!\n// Generate instant payment link:\nconst page = await paystack.page.create({\n  name: 'Lagos Tech Meetup 2026 Ticket',\n  amount: 2500000,\n  collect_phone: true\n});\nconsole.log(page.data.slug); // paystack.shop/lagos-tech`,
    },
    {
      id: '04',
      num: '04',
      title: 'Global Transfers & Payouts API',
      shortDesc: 'Automate disbursements to any Nigerian, Ghanaian, or Kenyan commercial bank or mobile money wallet in real-time.',
      features: [
        'Sub-second settlement to commercial bank accounts',
        'Bulk transfer API for payroll and partner payouts',
        'Automatic account name resolution prior to transfer',
        'Balance top-up alerts and role-based payout approvals',
      ],
      channels: ['All Nigerian Commercial Banks', 'OPay', 'PalmPay', 'M-Pesa', 'MTN MoMo'],
      codePreview: `await paystack.transfer.initiate({\n  source: 'balance',\n  amount: 5000000, // ₦50,000\n  recipient: 'RCP_gx28732hb2',\n  reason: 'Monthly Vendor Settlement'\n});`,
    },
  ];

  const currentProduct = products.find((p) => p.id === activeProductId) || products[0];

  return (
    <section id="solutions" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header with Blue Pill tag matching reference */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#0074E4] uppercase tracking-wider">
              WHAT WE BUILD
            </span>
            <span className="text-slate-300">·</span>
            <div className="px-3.5 py-1 rounded-full bg-[#0074E4] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              Our Solutions
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011B33] tracking-tight">
            Complete Financial Infrastructure for Africa
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We provide a robust suite of payment APIs and commerce tools designed to help ambitious businesses accelerate revenue.
          </p>
        </div>

        {/* 2-Column Product Layout matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 4 Selectable Product Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {products.map((item) => {
              const isActive = item.id === activeProductId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveProductId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all flex items-center justify-between border ${
                    isActive
                      ? 'bg-blue-50/90 border-[#0074E4] shadow-md shadow-blue-500/10 text-[#011B33]'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 shadow-xs'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg ${
                      isActive ? 'bg-[#0074E4] text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.num}
                    </span>
                    <span className="font-bold text-sm sm:text-base">{item.title}</span>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-transform ${
                    isActive ? 'text-[#0074E4] translate-x-1' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}

            {/* Quick action below items */}
            <div className="mt-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#011B33]">
                <Sparkles className="w-4 h-4 text-[#0074E4]" />
                <span>Need custom enterprise terms?</span>
              </div>
              <p className="text-xs text-slate-600">
                Custom volume discounts for businesses processing over ₦50M monthly.
              </p>
              <button
                type="button"
                onClick={onOpenSignUp}
                className="text-xs font-bold text-[#0074E4] hover:underline flex items-center gap-1"
              >
                <span>Talk to our Sales Engineering team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual and Interactive Details Card matching reference */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top Showcase Banner with Developer Image & Product Details */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Details */}
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 text-xs font-mono font-bold text-[#0074E4]">
                    Active Module: {currentProduct.title}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#011B33]">
                    {currentProduct.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentProduct.shortDesc}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-2">
                    {currentProduct.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#0074E4] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Channels tag strip */}
                  <div className="pt-3">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block mb-2 font-mono font-bold">
                      Supported Channels:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentProduct.channels.map((ch, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200 font-medium">
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Developer Image & visual thumbnail */}
                <div className="md:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3] shadow-lg">
                    <img
                      src="/src/assets/images/developer_lagos_studio_1792251545338.jpg"
                      alt="Developer reviewing Paystack code in Lagos"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#011B33]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-[11px] text-white font-medium flex items-center justify-between">
                      <span className="bg-[#0074E4] text-white px-2 py-0.5 rounded font-bold">API Status</span>
                      <span className="font-mono text-cyan-300 font-bold">99.99% OK</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom 2 Action/Info Cards matching reference layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Interactive Test Drive */}
              <div
                onClick={onOpenCheckoutDemo}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0074E4] cursor-pointer group transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Interactive Simulation</span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#0074E4] transition-colors">
                    See how checkout works in live preview
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#0074E4]">
                  <span>Launch Demo Simulator</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Card 2: Developer Documentation */}
              <div
                onClick={onOpenSignUp}
                className="p-5 rounded-2xl bg-[#0074E4] text-white cursor-pointer group transition-all flex flex-col justify-between shadow-md shadow-blue-500/20 hover:bg-[#0062c4]"
              >
                <div>
                  <span className="text-xs text-blue-100 font-semibold block mb-1">Developer Ready</span>
                  <p className="text-sm font-extrabold text-white">
                    Explore API documentation & SDKs
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-bold text-white">
                  <span>Create Account & Get API Keys</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
