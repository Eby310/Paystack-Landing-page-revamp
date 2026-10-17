export default function MarqueeBanner() {
  const words = ['TRANSACT', 'SCALE', 'AUTOMATE', 'EXPAND', 'SETTLE', 'INNOVATE'];

  return (
    <div className="w-full py-8 bg-[#011B33] border-y border-blue-950 overflow-hidden relative select-none">
      <div className="flex whitespace-nowrap animate-marquee items-center gap-10">
        {[...words, ...words, ...words].map((word, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter hover:text-[#00C3F8] transition-colors">
              {word}
            </span>
            <span className="text-[#00C3F8] text-lg sm:text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
