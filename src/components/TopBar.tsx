import { PillarLogo } from "./PillarLogo";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-1.5 sm:px-8 sm:py-2.5">
        <a
          href="https://www.pillar.it"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vai a pillar.it"
          className="inline-flex items-center"
        >
          <PillarLogo className="h-14 w-auto" />
        </a>

        <a
          href="https://www.pillar.it/prenota-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-pillar-dark px-4 py-2 text-xs font-semibold text-white transition hover:bg-black sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Prenota un appuntamento
        </a>
      </div>
    </header>
  );
}
