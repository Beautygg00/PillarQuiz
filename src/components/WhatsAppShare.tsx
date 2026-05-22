type Props = {
  profileTitle: string;
};

export function WhatsAppShare({ profileTitle }: Props) {
  const quizUrl =
    typeof window !== "undefined" ? window.location.href : "https://pillarquiz.it";
  const text = `Ho fatto il test "Che Impresario Edile Sei?" e sono: ${profileTitle}! 🏗️ Fai il test anche tu: ${quizUrl}`;
  const href = `https://wa.me/?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-whatsapp/40 bg-whatsapp/10 px-6 py-3.5 text-sm font-semibold text-whatsapp transition hover:bg-whatsapp hover:text-white sm:w-auto"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 2C6.58 2 2.146 6.434 2.144 11.892c0 1.748.458 3.455 1.327 4.957L2.06 22l5.272-1.382a9.94 9.94 0 004.708 1.2h.004c5.46 0 9.892-4.434 9.894-9.894 0-2.64-1.03-5.122-2.898-6.99A9.825 9.825 0 0012.04 2z" />
      </svg>
      Condividi su WhatsApp
    </a>
  );
}
