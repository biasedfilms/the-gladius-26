export const emblemChapter = {
  chapter: "Bab IV",
  label: "Lambang",
  /** The sheet reference on the chapter's dimension line. */
  annotation: "04 / OFFICIAL EMBLEM",
  headline: ["SETIAP ELEMEN", "MEMILIKI MAKNA."],
  headlineNarrow: ["SETIAP", "ELEMEN", "MEMILIKI", "MAKNA."],
  introduction:
    "Logo dari The Gladius 26 bukan sekadar identitas visual. Setiap elemen yang terdapat di dalamnya merepresentasikan asal-usul, warisan, persaudaraan, kesatuan, dan identitas angkatan kami.",
} as const;

export type EmblemElementId = "pedang" | "helm" | "rantai" | "perisai" | "gear";

export type EmblemElement = {
  id: EmblemElementId;
  name: string;
  category: string;
  meaning: string;
  /** A count stated in the confirmed meaning, shown as a measured annotation. */
  count?: { value: number; unit: string };
};

/** The single source for all five explanations. */
export const emblemElements: readonly EmblemElement[] = [
  {
    id: "pedang",
    name: "Pedang",
    category: "Identitas",
    meaning:
      "Pedang melambangkan identitas dari The Gladius yang ditempa melalui pengalaman, tantangan, dan pembelajaran. Setiap proses menjadi bagian yang membentuk pribadi The Gladius sebagai Pedang yang tangguh dan satu.",
  },
  {
    id: "helm",
    name: "Helm",
    category: "Warisan",
    meaning:
      "Helm sebagai warisan dari orang tua kami, The Gladiators yang juga menjadi simbol kehormatan dan harga diri yang melekat pada kami The Gladius. Helm The Gladiators merepresentasikan tanggung jawab untuk menjaga nama baik angkatan, menghargai perjuangan pendahulu, dan menjunjung tinggi nilai-nilai persaudaraan.",
  },
  {
    id: "rantai",
    name: "Rantai",
    category: "Persaudaraan",
    meaning:
      "Sebagaimana rantai memperoleh kekuatannya dari mata rantai yang saling terhubung, The Gladius berdiri atas kepercayaan, solidaritas, dan tekad setiap anggotanya untuk tumbuh dan berjuang bersama.",
  },
  {
    id: "perisai",
    name: "Perisai",
    category: "Kesatuan",
    meaning:
      "Empat perisai melambangkan empat Program Studi di Fakultas Teknik yang memiliki identitas dan bidang keilmuan berbeda, namun berdiri dalam satu kesatuan. Perbedaan bukan menjadi pemisah, melainkan kekuatan untuk saling melengkapi, menjaga, dan mencapai tujuan bersama. Keempat perisai dibuat sedikit melengkung seperti melindungi pedang yang melambangkan bahwa keempat Program Studi dalam Fakultas Teknik saling menjaga satu sama lain.",
    count: { value: 4, unit: "perisai" },
  },
  {
    id: "gear",
    name: "Roda Gear",
    category: "Angkatan 26",
    meaning:
      "Sebanyak 26 gigi pada roda gear melambangkan identitas Angkatan 26, The Gladius. Setiap gigi merepresentasikan individu yang saling terhubung dan memiliki peran masing-masing. Sebagaimana roda gear yang tidak dapat menggerakkan suatu sistem secara utuh jika bekerja sendiri, The Gladius membutuhkan keterlibatan, koordinasi, dan keselarasan setiap anggotanya. Sebab, kekuatan sebuah angkatan tidak terletak pada individu yang berjalan sendiri-sendiri, melainkan pada kebersamaan dalam satu gerak dan satu tujuan.",
    count: { value: 26, unit: "mata gear" },
  },
];
