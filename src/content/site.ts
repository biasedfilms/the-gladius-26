export const site = {
  name: "The Gladius 26",
  wordmark: "THE GLADIUS",
  edition: "26",
  editionLabel: "Faculty of Engineering",
  archiveLabel: "Rise As One!",
  faculty: "Fakultas Teknik",
  university: "Universitas Katolik De La Salle Manado",
  tagline: "Forged in Diversity, United in Engineering.",
  description:
    "Arsip Digital dari Angkatan 2026 Fakultas Teknik, Universitas Katolik De La Salle Manado.",
} as const;

/**
 * The official destinations, exactly as The Gladius 26 supplied them. Nothing else is
 * linked, and `service` is read aloud: "The Gladius 26, Instagram, buka di tab baru".
 */
export const externalLinks = {
  gladius: {
    name: "The Gladius 26",
    href: "https://www.instagram.com/thegladius_26/",
    handle: "@thegladius_26",
    service: "Instagram",
  },
  gladiators: {
    name: "The Gladiators 23",
    href: "https://www.instagram.com/thegladiators_23/",
    handle: "@thegladiators_23",
    service: "Instagram",
  },
  university: {
    name: site.university,
    href: "https://unikadelasalle.ac.id/",
    service: "situs resmi",
  },
  faculty: {
    name: site.faculty,
    href: "https://www.instagram.com/fatek.ukdlsm/",
    service: "Instagram",
  },
} as const;

export type ExternalTarget = (typeof externalLinks)[keyof typeof externalLinks];

/** Two different roles: The Gladius holds the copyright, Mikael Kalesaran made the site. */
export const credits = {
  copyright: "© 2026 The Gladius. All rights reserved.",
  creator: "Made by Mikael Kalesaran.",
} as const;

export const navigation = [
  { id: "beranda", label: "Beranda" },
  { id: "identitas", label: "Identitas" },
  { id: "asal-usul", label: "Asal-usul" },
  { id: "makna", label: "Makna" },
  { id: "lambang", label: "Lambang" },
] as const;

export type SectionId = (typeof navigation)[number]["id"];

/** Intrinsic sizes come from `assets/brand/asset-manifest.json`. */
export const brandAssets = {
  emblem: {
    src: "/images/brand/the-gladius-logo.png",
    width: 2048,
    height: 2041,
    alt: "Lambang resmi The Gladius: roda gear biru bergerigi 26 mengelilingi rantai perak, helm dan pedang, serta empat perisai emas.",
  },
  university: {
    src: "/images/brand/university-logo.png",
    width: 220,
    height: 220,
    alt: "Logo Universitas Katolik De La Salle Manado",
  },
  faculty: {
    src: "/images/brand/faculty-logo.png",
    width: 1378,
    height: 1962,
    alt: "Logo Fakultas Teknik",
  },
} as const;
