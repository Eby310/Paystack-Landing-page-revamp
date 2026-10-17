import { useState } from 'react';
import { Linkedin, Twitter, Sparkles, Building2, Terminal, ShieldCheck } from 'lucide-react';

interface Leader {
  name: string;
  role: string;
  department: 'founders' | 'engineering' | 'operations';
  bio: string;
  avatarColor: string;
  initials: string;
}

export default function LeadershipSection() {
  const [filter, setFilter] = useState<'all' | 'founders' | 'engineering' | 'operations'>('all');

  const leaders: Leader[] = [
    {
      name: 'Shola Akinlade',
      role: 'Co-founder & CEO',
      department: 'founders',
      bio: 'Pioneered modern online payments in Nigeria. Led Paystack from Y Combinator W16 to African fintech powerhouse acquisition by Stripe.',
      avatarColor: 'bg-emerald-500/20 text-[#30E36D] border-[#30E36D]/40',
      initials: 'SA',
    },
    {
      name: 'Ezra Olubi',
      role: 'Co-founder & CTO',
      department: 'founders',
      bio: 'Architected the core high-availability payment routing engines and developer-first APIs trusted by hundreds of thousands of African developers.',
      avatarColor: 'bg-emerald-500/20 text-[#30E36D] border-[#30E36D]/40',
      initials: 'EO',
    },
    {
      name: 'Amaka Okafor',
      role: 'VP of Product',
      department: 'engineering',
      bio: 'Spearheaded Paystack Commerce, Storefronts, and multi-channel terminal solutions across Nigeria, Ghana, Kenya, and South Africa.',
      avatarColor: 'bg-emerald-500/20 text-[#30E36D] border-[#30E36D]/40',
      initials: 'AO',
    },
    {
      name: 'Tunde Balogun',
      role: 'Head of Core Infrastructure',
      department: 'engineering',
      bio: 'Manages distributed banking switches, sub-second failover protocols, and 99.9% uptime across 40+ commercial bank connections.',
      avatarColor: 'bg-emerald-500/20 text-[#30E36D] border-[#30E36D]/40',
      initials: 'TB',
    },
    {
      name: 'Kemi Adeleke',
      role: 'VP of Growth & Partnerships',
      department: 'operations',
      bio: 'Drives strategic banking partnerships with the Central Bank of Nigeria (CBN), Visa, Mastercard, and commercial banking rails.',
      avatarColor: 'bg-emerald-500/20 text-[#30E36D] border-[#30E36D]/40',
      initials: 'KA',
    },
    {
      name: 'Chidi Nnamdi',
      role: 'Director of Compliance & Risk',
      department: 'operations',
      bio: 'Leads PCI-DSS Level 1 certification, anti-fraud algorithms, and regulatory compliance across all pan-African operating jurisdictions.',
      avatarColor: 'bg-emerald-500/20 text-[#30E36D] border-[#30E36D]/40',
      initials: 'CN',
    },
  ];

  const filteredLeaders = filter === 'all' ? leaders : leaders.filter((l) => l.department === filter);

  return (
    <section id="leadership" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-[#0e1216]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header with Lime pill highlight & interactive category tabs matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono text-[#30E36D] uppercase tracking-wider">
                PEOPLE BEHIND THE RAILS
              </span>
              <span className="text-neutral-600">·</span>
              <div className="px-3 py-1 rounded-full bg-[#30E36D] text-black text-xs font-bold uppercase tracking-wider">
                Leadership
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Built by Builders for Builders
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl">
              Meet the experienced technologists and operators advancing the financial frontier across the continent.
            </p>
          </div>

          {/* Interactive filter segmented control matching reference button pill */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-full self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-[#30E36D] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilter('founders')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                filter === 'founders'
                  ? 'bg-[#30E36D] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Founders
            </button>
            <button
              type="button"
              onClick={() => setFilter('engineering')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                filter === 'engineering'
                  ? 'bg-[#30E36D] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Engineering
            </button>
            <button
              type="button"
              onClick={() => setFilter('operations')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                filter === 'operations'
                  ? 'bg-[#30E36D] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Operations
            </button>
          </div>
        </div>

        {/* 6-Card Grid matching reference team layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeaders.map((leader, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Avatar badge matching lime green icon in reference */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold font-mono text-base border ${leader.avatarColor}`}>
                    {leader.initials}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded">
                    {leader.department}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#30E36D] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#30E36D] mt-0.5">
                    {leader.role}
                  </p>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500">
                <span>Paystack Lagos</span>
                <span className="text-[#30E36D] font-mono text-[11px]">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
