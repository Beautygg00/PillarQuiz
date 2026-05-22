type Props = {
  text: string;
  borderClass: string;
};

export function BenchmarkBox({ text, borderClass }: Props) {
  return (
    <div
      className={`rounded-card border-l-4 bg-white/5 p-5 text-sm leading-relaxed text-white/90 sm:text-base ${borderClass}`}
    >
      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-pillar-gray-text">
        Benchmark di settore
      </div>
      {text}
    </div>
  );
}
