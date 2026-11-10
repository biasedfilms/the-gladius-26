export const origins = {
  chapter: "Bab II",
  label: "Asal-usul",
  /** The sheet reference on the chapter's dimension line. */
  annotation: "02 / ORIGIN",
  headline: ["KAMI TIDAK LAHIR", "TANPA ASAL-USUL."],
  headlineNarrow: ["KAMI TIDAK", "LAHIR TANPA", "ASAL-USUL."],
  lead: "Kami lahir dari The Gladiators.",
  paragraphs: [
    "The Gladius 26 lahir dari The Gladiators 23.",
    "The Gladiators 23 merupakan orang tua dari The Gladius 26 dalam sebuah hubungan generasi yang menjadi dasar asal-usul dan identitas kami.",
    "Sebagai generasi penerus, The Gladius membawa warisan dan genetika dari generasi yang melahirkannya.",
    "Hubungan tersebut menjadi bagian penting dari identitas kami. Nama yang kami bawa bukan sekadar sebuah sebutan, melainkan representasi dari generasi yang menjadi asal-usul kami.",
  ],
  closingLine: "Kami adalah The Gladius, anak dari The Gladiators.",
  lineage: {
    parent: { article: "THE", name: "GLADIATORS", edition: "23" },
    child: { article: "THE", name: "GLADIUS", edition: "26" },
    /** Letters both names share, in order. A typographic fact, not a claim. */
    sharedStem: "GLADI",
  },
} as const;
