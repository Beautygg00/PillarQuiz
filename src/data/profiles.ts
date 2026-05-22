export type Profile = {
  id: "chaos" | "balancer" | "geometra" | "impresa40";
  emoji: string;
  title: string;
  range: [number, number];
  description: string;
  benchmark: string;
  accentClass: string;
  borderClass: string;
};

export const profiles: Profile[] = [
  {
    id: "chaos",
    emoji: "🔴",
    title: "Architetto del Caos",
    range: [6, 10],
    description:
      "La tua impresa gira, ma a che prezzo? Tra foglietti, telefonate e conti fatti a fine anno, i margini ti sfuggono senza che te ne accorga. Non sei solo: il 60% delle imprese edili italiane lavora esattamente così. Il primo passo? Sapere dove vanno i soldi, cantiere per cantiere.",
    benchmark:
      "Sei nel gruppo del 60% delle imprese edili che non ha ancora adottato soluzioni digitali. (Fonte: Censis)",
    accentClass: "text-profile-red",
    borderClass: "border-profile-red",
  },
  {
    id: "balancer",
    emoji: "🟠",
    title: "Equilibrista del Cantiere",
    range: [11, 15],
    description:
      "Excel, WhatsApp e buona volontà: il tuo kit di sopravvivenza. Funziona, finché non funziona più. Un cantiere in ritardo, una fattura dimenticata, e il castello di carte traballa. Hai le basi, ma ti manca il salto verso il controllo vero.",
    benchmark:
      "Sei tra quel 20% che usa strumenti base ma non ancora integrati. Il rischio? Perdere marginalità senza accorgertene. (Fonte: Censis/ANCE)",
    accentClass: "text-profile-orange",
    borderClass: "border-profile-orange",
  },
  {
    id: "geometra",
    emoji: "🟡",
    title: "Geometra Digitale",
    range: [16, 20],
    description:
      "Ci sei quasi. Hai capito che i dati contano, usi qualche strumento, e il controllo c'è — anche se non su tutto. Sei più avanti della maggior parte dei tuoi concorrenti. Il prossimo passo è integrare tutto in un unico posto e lasciare che l'automazione faccia il lavoro noioso.",
    benchmark:
      "Sei nel top 20% delle imprese edili per digitalizzazione. Ma c'è ancora margine da recuperare — letteralmente. (Fonte: Censis/ANCE)",
    accentClass: "text-profile-yellow",
    borderClass: "border-profile-yellow",
  },
  {
    id: "impresa40",
    emoji: "🟢",
    title: "Impresa 4.0",
    range: [21, 24],
    description:
      "Complimenti: hai il polso della tua azienda. Dashboard, software dedicati, comunicazione strutturata — gestisci i cantieri come un'azienda tech. Ora la sfida è scalare: più cantieri, stessi margini, zero stress in più.",
    benchmark:
      "Fai parte di una minoranza: solo il 20% delle imprese edili usa tecnologie avanzate per la gestione dei cantieri. Continua così. (Fonte: Censis)",
    accentClass: "text-profile-green",
    borderClass: "border-profile-green",
  },
];
