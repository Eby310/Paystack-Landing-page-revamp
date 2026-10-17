import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Building, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  company: string;
  category: string;
  author: string;
  role: string;
  quote: string;
  metric: string;
  metricLabel: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      company: 'PiggyVest',
      category: 'Fintech & WealthTech',
      author: 'Odunayo Eweniyi',
      role: 'Co-founder & COO',
      quote:
        'Paystack gave us the automated recurring debit infrastructure that enabled over 4.5 million Nigerians to build savings and investment habits effortlessly. Their bank direct debit rails and uptime are unmatched.',
      metric: '4.5M+',
      metricLabel: 'Savers Automated',
    },
    {
      company: 'Bolt Nigeria',
      category: 'Mobility & Ride Hailing',
      author: 'Femi Akin-Laguda',
      role: 'Country Manager',
      quote:
        'When riders complete trips, payment authorization must happen in milliseconds without drops. Paystack handles millions of ride transactions across Nigeria with near-perfect reliability.',
      metric: '99.9%',
      metricLabel: 'Authorization Reliability',
    },
    {
      company: 'Bamboo',
      category: 'Global Investments',
      author: 'Richmond Bassey',
      role: 'CEO & Co-founder',
      quote:
        'Allowing Africans to invest in global stocks required instant local currency funding and flawless bank transfers. Paystack made our complex multi-channel payment experience intuitive and instant.',
      metric: 'Sub-second',
      metricLabel: 'Deposit Funding Speed',
    },
    {
      company: 'Eat`n`Go (Domino`s Pizza & Cold Stone)',
      category: 'Food Retail & Quick Service',
      author: 'Patrick McMullan',
      role: 'Chief Operations Officer',
      quote:
        'From online delivery checkout on our websites to physical in-store payments, Paystack streamlined our multi-brand reconciliation and significantly lowered customer drop-off.',
      metric: '+35%',
      metricLabel: 'Online Order Conversion',
    },
  ];

  const current = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0e11]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#30E36D] uppercase tracking-wider block">
              PROVEN AT SCALE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Powering Growth for Africa's Leading Brands
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#30E36D] transition-colors"
              aria-label="Previous customer story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#30E36D] transition-colors"
              aria-label="Next customer story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#12161b] border border-neutral-800 relative overflow-hidden shadow-2xl">
          <div className="absolute top-6 right-6 text-neutral-800 opacity-40">
            <Quote className="w-24 h-24" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-white tracking-tight px-3 py-1 rounded-lg bg-neutral-800 border border-neutral-700">
                  {current.company}
                </span>
                <span className="text-xs text-[#30E36D] font-mono">
                  {current.category}
                </span>
              </div>

              <p className="text-lg sm:text-2xl text-neutral-200 font-medium leading-relaxed">
                "{current.quote}"
              </p>

              <div>
                <p className="font-bold text-white text-base">{current.author}</p>
                <p className="text-xs text-neutral-400">{current.role}, {current.company}</p>
              </div>
            </div>

            {/* Metric Callout Card */}
            <div className="lg:col-span-4 bg-[#0b0e11] p-6 rounded-2xl border border-neutral-800 flex flex-col justify-center items-center text-center space-y-2">
              <div className="flex items-center gap-1 text-[#30E36D] mb-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight text-[#30E36D]">
                {current.metric}
              </p>
              <p className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
                {current.metricLabel}
              </p>
            </div>

          </div>

          {/* Quick Select Indicators */}
          <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === activeIndex ? 'w-8 bg-[#30E36D]' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                }`}
                aria-label={`View story from ${t.company}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
