// ─── Sinar Prima Sukses Farm — Single Source of Truth ───
// All business information lives here. Update once, reflects everywhere.

export const SITE_INFO = {
  company: {
    name: "Sinar Prima Sukses Farm",
    nameShort: "Sinar Prima Sukses",
    tagline: "Melayani kebutuhan anda selalu",
    foundedYear: 2020,
  },

  contact: {
    phone: "+6282147440520",
    phoneFormatted: "+62 821-4744-0520",
    whatsapp: "6282147440520", // wa.me format — no "+"
    email: "info@sinarprimasukses.com",
  },

  location: {
    street: "Kabupaten Banyumas",
    city: "Purwokerto",
    province: "Jawa Tengah",
    postalCode: "53114",
    country: "Indonesia",
    countryCode: "ID",
    full: "Kabupaten Banyumas, Purwokerto, Jawa Tengah 53114",
    short: "Banyumas, Jawa Tengah",
    coordinates: {
      latitude: -7.4214,
      longitude: 109.2342,
    },
  },

  serviceArea: [
    "Banyumas",
    "Purwokerto",
    "Cilacap",
    "Purbalingga",
    "Banjarnegara",
    "Kebumen",
  ],

  hours: {
    weekday: { days: "Senin - Jumat", open: "08:00", close: "17:00" },
    weekend: { days: "Sabtu - Minggu", open: "09:00", close: "15:00" },
  },

  web: {
    domain: "sinarprimasukses.com",
    url: "https://sinarprimasukses.com",
    ogImage: "https://sinarprimasukses.com/og-image.jpg",
  },

  social: {
    instagram: "", // add URL when available
  },

  stats: {
    customers: "10k+",
    freshProduct: "100%",
    partners: "50+",
  },
} as const;
