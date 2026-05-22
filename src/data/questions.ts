export type Option = {
  label: string;
  text: string;
  points: 1 | 2 | 3 | 4;
};

export type Question = {
  id: number;
  text: string;
  options: Option[];
};

export const questions: Question[] = [
  {
    id: 1,
    text: "Come tieni traccia dei costi del cantiere?",
    options: [
      { label: "A", text: "A memoria o su foglietti", points: 1 },
      { label: "B", text: "Fogli Excel condivisi", points: 2 },
      { label: "C", text: "Il commercialista ci pensa a fine anno", points: 1 },
      { label: "D", text: "Software gestionale dedicato", points: 4 },
    ],
  },
  {
    id: 2,
    text: "Come gestisci fatture e pagamenti?",
    options: [
      { label: "A", text: "Carta, raccoglitore, scatolone", points: 1 },
      { label: "B", text: "Excel o tabelle manuali", points: 2 },
      { label: "C", text: "Il commercialista gestisce tutto", points: 2 },
      { label: "D", text: "Software di fatturazione integrato", points: 4 },
    ],
  },
  {
    id: 3,
    text: "Sai in tempo reale il margine di ogni cantiere?",
    options: [
      { label: "A", text: "Lo scopro a fine lavoro", points: 1 },
      { label: "B", text: "Ho un'idea approssimativa", points: 2 },
      { label: "C", text: "Lo calcolo ogni mese a mano", points: 3 },
      { label: "D", text: "Sì, ho una dashboard aggiornata", points: 4 },
    ],
  },
  {
    id: 4,
    text: "Come comunichi con il cantiere?",
    options: [
      { label: "A", text: "Telefonate e passaparola", points: 1 },
      { label: "B", text: "WhatsApp (il gruppo è un caos)", points: 2 },
      { label: "C", text: "WhatsApp + qualche foto organizzata", points: 3 },
      { label: "D", text: "Piattaforma dedicata con report", points: 4 },
    ],
  },
  {
    id: 5,
    text: "Quanto tempo perdi in burocrazia a settimana?",
    options: [
      { label: "A", text: "Più di 10 ore, è un incubo", points: 1 },
      { label: "B", text: "5-10 ore, potrebbe andare meglio", points: 2 },
      { label: "C", text: "2-5 ore, ho un mio sistema", points: 3 },
      { label: "D", text: "Meno di 2 ore, è tutto automatizzato", points: 4 },
    ],
  },
  {
    id: 6,
    text: "Quanti cantieri gestisci contemporaneamente?",
    options: [
      { label: "A", text: "1-2, e faccio già fatica", points: 1 },
      { label: "B", text: "3-5, ma perdo pezzi", points: 2 },
      { label: "C", text: "3-5, con buon controllo", points: 3 },
      { label: "D", text: "6+, tutto sotto controllo", points: 4 },
    ],
  },
];
