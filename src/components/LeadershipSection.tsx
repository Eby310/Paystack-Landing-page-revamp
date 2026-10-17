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
      avatarColor: 'bg-blue-50 text-[#0074E4] border-blue-200',
      initials: 'SA',
    },
    {
      name: 'Ezra Olubi',
      role: 'Co-founder & CTO',
      department: 'founders',
      bio: 'Architected the core high-availability payment routing engines and developer-first APIs trusted by hundreds of thousands of African developers.',
      avatarColor: 'bg-blue-50 text-[#0074E4] border-blue-200',
      initials: 'EO',
    },
    {
      name: 'Amaka Okafor',
      role: 'VP of Product',
      department: 'engineering',
      bio: 'Spearheaded Paystack Commerce, Storefronts, and multi-channel terminal solutions across Nigeria, Ghana, Kenya, and South Africa.',
      avatarColor: 'bg-blue-50 text-[#0074E4] border-blue-200',
      initials: 'AO',
    },
    {
      name: 'Tunde Balogun',
      role: 'Head of Core Infrastructure',
      department: 'engineering',
      bio: 'Manages distributed banking switches, sub-second failover protocols, and 99.9% uptime across 40+ commercial bank connections.',
      avatarColor: 'bg-blue-50 text-[#0074E4] border-blue-200',
      initials: 'TB',
    },
    {
      name: 'Kemi Adeleke',
      role: 'VP of Growth & Partnerships',
      department: 'operations',
      bio: 'Drives strategic banking partnerships with the Central Bank of Nigeria (CBN), Visa, Mastercard, and commercial banking rails.',
      avatarColor: 'bg-blue-50 text-[#0074E4] border-blue-200',
      initials: 'KA',
    },
    {
      name: 'Chidi Nnamdi',
      role: 'Director of Compliance & Risk',
      department: 'operations',
      bio: 'Leads PCI-DSS Level 1 certification, anti-fraud algorithms, and regulatory compliance across all pan-African operating jurisdictions.',
      avatarColor: 'bg-blue-50 text-[#0074E4] border-blue-200',
      initials: 'CN',
    },
  ];

  const filteredLeaders = filter === 'all' ? leaders : leaders.filter((l) => l.department === filter);

  return (
    <section id="leadership" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header with Blue pill highlight & interactive category tabs matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#0074E4] uppercase tracking-wider">
                PEOPLE BEHIND THE RAILS
              </span>
              <span className="text-slate-300">·</span>
              <div className="px-3.5 py-1 rounded-full bg-[#0074E4] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                Leadership
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011B33] tracking-tight">
              Built by Builders for Builders
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Meet the experienced technologists and operators advancing the financial frontier across the continent.
            </p>
          </div>

          {/* Interactive filter segmented control matching reference button pill */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-full self-start md:self-auto shadow-xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-[#0074E4] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilter('founders')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                filter === 'founders'
                  ? 'bg-[#0074E4] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Founders
            </button>
            <button
              type="button"
              onClick={() => setFilter('engineering')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                filter === 'engineering'
                  ? 'bg-[#0074E4] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Engineering
            </button>
            <button
              type="button"
              onClick={() => setFilter('operations')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                filter === 'operations'
                  ? 'bg-[#0074E4] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
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
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0074E4] transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Avatar badge matching blue icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold font-mono text-base border ${leader.avatarColor}`}>
                    {leader.initials}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-semibold">
                    {leader.department}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#011B33] group-hover:text-[#0074E4] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0074E4] mt-0.5">
                    {leader.role}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Paystack Lagos</span>
                <span className="text-[#0074E4] font-mono text-[11px] font-bold">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
