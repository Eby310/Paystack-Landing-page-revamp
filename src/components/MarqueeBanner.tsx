export default function MarqueeBanner() {
  const words = ['TRANSACT', 'SCALE', 'AUTOMATE', 'EXPAND', 'SETTLE', 'INNOVATE'];

  return (
    <div className="w-full py-8 bg-[#0b0e11] border-y border-neutral-900 overflow-hidden relative select-none">
      <div className="flex whitespace-nowrap animate-marquee items-center gap-10">
        {[...words, ...words, ...words].map((word, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-white/90 tracking-tighter hover:text-[#30E36D] transition-colors">
              {word}
            </span>
            <span className="text-[#30E36D] text-lg sm:text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
