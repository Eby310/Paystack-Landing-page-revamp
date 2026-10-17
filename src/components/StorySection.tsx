import { Sparkles, Terminal, Code2, Users2 } from 'lucide-react';

export default function StorySection() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header with Title and Subtitle split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0074E4] tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-[#00C3F8]" />
              <span>Built in Lagos for the World</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#011B33] tracking-tight leading-tight text-balance">
              Turning Ideas Into African Market Leaders
            </h2>
          </div>

          <div className="lg:col-span-5 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              We started with a simple belief: African merchants deserve payments infrastructure that is as seamless and reliable as anywhere on Earth. Today, whether you are a solo entrepreneur selling fashion on Instagram or a multinational airline, Paystack powers your revenue engine.
            </p>
          </div>
        </div>

        {/* 2-Column Photo & Story Grid matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Engineering Team Hub */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md relative group flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/src/assets/images/lagos_engineers_team_1792251544882.jpg"
                alt="Paystack Nigerian Engineering Team"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#011B33]/90 via-transparent to-transparent"></div>
              
              {/* Highlight label banner in Paystack Blue matching reference layout */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="bg-[#0074E4] text-white font-extrabold text-xs sm:text-sm px-4 py-2 rounded-xl uppercase tracking-wider flex items-center gap-2 shadow-lg">
                  <Terminal className="w-4 h-4" />
                  <span>LAGOS ENGINEERING & PRODUCT LABS</span>
                </div>
                <span className="hidden sm:inline-block text-xs text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                  Ikeja, Lagos, Nigeria
                </span>
              </div>
            </div>

            <div className="p-6 text-sm text-slate-700 flex items-center justify-between border-t border-slate-100 bg-slate-50/60">
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-[#0074E4]" />
                <span>Zero downtime deployments & 99.9% uptime architecture</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#0074E4] bg-blue-50 px-2.5 py-1 rounded">v3.2 API</span>
            </div>
          </div>

          {/* Right: Thoughtful Innovator Portrait with Editorial Card */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md relative flex flex-col justify-between">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/src/assets/images/lagos_innovator_portrait_1792251544415.jpg"
                alt="Paystack Executive and Innovator"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#011B33] via-[#011B33]/40 to-transparent"></div>

              {/* Hand-drawn style lightbulb spark icon badge matching reference */}
              <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex items-center justify-center text-[#0074E4]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18h6m-4 4h2m-5-8a7 7 0 1 1 8 0c0 2-2 3-2 4H9c0-1-2-2-2-4z" />
                </svg>
              </div>

              {/* Quote overlay at bottom */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#011B33]/90 backdrop-blur-md border border-blue-900 shadow-xl">
                <p className="text-xs sm:text-sm text-white italic leading-relaxed">
                  "Commerce in Africa should have no borders. We build tools so a developer in Lagos or Accra can accept payments from anyone in London or New York in seconds."
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Shola & Ezra</span>
                  <span className="text-[#00C3F8] font-mono font-bold">Founders' Vision</span>
                </div>
              </div>
            </div>

            <div className="p-4 px-6 bg-slate-50 flex items-center justify-between text-xs text-slate-600 border-t border-slate-200">
              <span className="flex items-center gap-1.5 font-medium">
                <Users2 className="w-3.5 h-3.5 text-[#0074E4]" /> 400+ African Team Members
              </span>
              <span>Lagos · Accra · Nairobi · Cape Town</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
