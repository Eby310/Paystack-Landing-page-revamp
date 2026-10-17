interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export default function StatsBar() {
  const stats: StatItem[] = [
    {
      value: '200,000+',
      label: 'Businesses',
      sublabel: 'From startups to multinationals',
    },
    {
      value: '99.9%',
      label: 'Platform Uptime',
      sublabel: 'Redundant bank gateways',
    },
    {
      value: '800M+',
      label: 'API Calls',
      sublabel: 'Monthly developer volume',
    },
    {
      value: '$15B+',
      label: 'Annual Volume',
      sublabel: 'Processed across Africa',
    },
  ];

  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-800/60">
          {stats.map((stat, idx) => (
            <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight tabular-nums font-mono">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#30E36D]">
                {stat.label}
              </p>
              <p className="text-xs text-neutral-400">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
