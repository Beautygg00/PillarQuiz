import type { Question } from "../data/questions";
import { OptionCard } from "./OptionCard";
import { ProgressBar } from "./ProgressBar";

type Props = {
  question: Question;
  index: number;
  total: number;
  onAnswer: (points: number) => void;
  onBack: () => void;
  canGoBack: boolean;
};

export function QuestionScreen({
  question,
  index,
  total,
  onAnswer,
  onBack,
  canGoBack,
}: Props) {
  return (
    <div className="flex flex-1 flex-col">
      <header className="px-6 pt-6">
        <div className="mx-auto max-w-xl">
          <ProgressBar current={index + 1} total={total} />
        </div>
      </header>

      <main
        key={question.id}
        className="mx-auto flex w-full max-w-xl flex-1 animate-[fadeIn_280ms_ease-out] flex-col px-6 pt-8 sm:pt-12"
      >
        <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          {question.text}
        </h2>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8">
          {question.options.map((opt) => (
            <OptionCard key={opt.label} option={opt} onSelect={onAnswer} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between pb-8">
          <button
            onClick={onBack}
            disabled={!canGoBack}
            className="text-sm text-pillar-gray-text transition hover:text-white disabled:invisible"
          >
            ← Indietro
          </button>
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
