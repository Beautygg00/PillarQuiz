import { Footer } from "./Footer";

type Props = {
  onStart: () => void;
};

export function LandingScreen({ onStart }: Props) {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Che Impresario Edile Sei?
        </h1>
        <p className="mt-5 max-w-md text-base text-pillar-gray-text sm:text-lg">
          Scoprilo in 6 domande. Meno di 2 minuti.
        </p>
        <button
          onClick={onStart}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-pillar-green px-8 py-4 text-base font-semibold text-pillar-dark transition hover:scale-[1.02] hover:bg-emerald-400 active:scale-100"
        >
          Inizia il test →
        </button>
      </main>
      <Footer />
    </div>
  );
}
