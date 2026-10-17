import { Sparkles, Terminal, Code2, Users2 } from 'lucide-react';

export default function StorySection() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header with Title and Subtitle split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#30E36D] tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Built in Lagos for the World</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
              Turning Ideas Into African Market Leaders
            </h2>
          </div>

          <div className="lg:col-span-5 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p>
              We started with a simple belief: African merchants deserve payments infrastructure that is as seamless and reliable as anywhere on Earth. Today, whether you are a solo entrepreneur selling fashion on Instagram or a multinational airline, Paystack powers your revenue engine.
            </p>
          </div>
        </div>

        {/* 2-Column Photo & Story Grid matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Engineering Team Hub */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-neutral-800 bg-[#12161b] relative group flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/src/assets/images/lagos_engineers_team_1792251544882.jpg"
                alt="Paystack Nigerian Engineering Team"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e11] via-transparent to-transparent opacity-90"></div>
              
              {/* Highlight label banner in vibrant lime green matching reference */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="bg-[#30E36D] text-black font-extrabold text-xs sm:text-sm px-4 py-2 rounded-xl uppercase tracking-wider flex items-center gap-2 shadow-lg">
                  <Terminal className="w-4 h-4" />
                  <span>LAGOS ENGINEERING & PRODUCT LABS</span>
                </div>
                <span className="hidden sm:inline-block text-xs text-neutral-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700">
                  Ikeja, Lagos, Nigeria
                </span>
              </div>
            </div>

            <div className="p-6 text-sm text-neutral-300 flex items-center justify-between border-t border-neutral-800/80">
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-[#30E36D]" />
                <span>Zero downtime deployments & 99.9% uptime architecture</span>
              </div>
              <span className="text-xs font-mono text-[#30E36D]">v3.2 API</span>
            </div>
          </div>

          {/* Right: Thoughtful Innovator Portrait with Editorial Card */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-neutral-800 bg-[#12161b] relative flex flex-col justify-between">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/src/assets/images/lagos_innovator_portrait_1792251544415.jpg"
                alt="Paystack Executive and Innovator"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e11] via-[#0b0e11]/30 to-transparent"></div>

              {/* Hand-drawn style lightbulb spark icon badge matching reference */}
              <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-[#30E36D]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18h6m-4 4h2m-5-8a7 7 0 1 1 8 0c0 2-2 3-2 4H9c0-1-2-2-2-4z" />
                </svg>
              </div>

              {/* Quote overlay at bottom */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0b0e11]/85 backdrop-blur-md border border-neutral-800">
                <p className="text-xs sm:text-sm text-neutral-200 italic leading-relaxed">
                  "Commerce in Africa should have no borders. We build tools so a developer in Lagos or Accra can accept payments from anyone in London or New York in seconds."
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Shola & Ezra</span>
                  <span className="text-[#30E36D] font-mono">Founders' Vision</span>
                </div>
              </div>
            </div>

            <div className="p-4 px-6 bg-neutral-900/60 flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-800">
              <span className="flex items-center gap-1.5">
                <Users2 className="w-3.5 h-3.5 text-[#30E36D]" /> 400+ African Team Members
              </span>
              <span>Lagos · Accra · Nairobi · Cape Town</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
