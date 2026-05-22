import type { Profile } from "../data/profiles";
import { BenchmarkBox } from "./BenchmarkBox";
import { Footer } from "./Footer";
import { WhatsAppShare } from "./WhatsAppShare";

type Props = {
  profile: Profile;
  total: number;
  onRestart: () => void;
};

export function ResultScreen({ profile, total, onRestart }: Props) {
  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 pt-10 sm:pt-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-pillar-gray-text">
          Il tuo profilo · {total}/24 punti
        </div>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-4xl sm:text-5xl" aria-hidden="true">
            {profile.emoji}
          </span>
          <h1
            className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${profile.accentClass}`}
          >
            {profile.title}
          </h1>
        </div>

        <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
          {profile.description}
        </p>

        <div className="mt-6">
          <BenchmarkBox text={profile.benchmark} borderClass={profile.borderClass} />
        </div>

        <a
          href="https://www.pillar.it/prenota-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-pillar-green px-7 py-4 text-base font-semibold text-pillar-dark transition hover:scale-[1.02] hover:bg-emerald-400 active:scale-100"
        >
          Scopri come Pillar può aiutarti →
        </a>

        <div className="mt-4">
          <WhatsAppShare profileTitle={profile.title} />
        </div>

        <button
          onClick={onRestart}
          className="mt-6 self-start text-sm text-pillar-gray-text underline-offset-2 hover:text-white hover:underline"
        >
          ↺ Rifai il test
        </button>

        <div className="flex-1" />
      </main>
      <Footer />
    </div>
  );
}
