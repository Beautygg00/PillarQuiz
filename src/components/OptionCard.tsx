import type { Option } from "../data/questions";

type Props = {
  option: Option;
  onSelect: (points: number) => void;
};

export function OptionCard({ option, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect(option.points)}
      className="group flex w-full items-start gap-4 rounded-card border border-white/10 bg-white p-4 text-left text-pillar-dark transition hover:-translate-y-0.5 hover:border-pillar-green hover:shadow-[0_8px_24px_rgba(34,197,94,0.18)] active:translate-y-0 sm:p-5"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pillar-gray-light text-sm font-bold text-pillar-dark transition group-hover:bg-pillar-green group-hover:text-pillar-dark">
        {option.label}
      </span>
      <span className="pt-1.5 text-base font-medium leading-snug sm:text-lg">
        {option.text}
      </span>
    </button>
  );
}
