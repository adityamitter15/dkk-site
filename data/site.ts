/**
 * Single source of truth for club facts, contact details, and navigation.
 * Canon: founders met as Black Belts under Kyoshi Kim Roberts; DKK founded
 * in 1990; training at the University of Westminster since 1990.
 */
export const site = {
  name: "Daigaku Karate Kai London",
  shortName: "DKK London",
  // Canonical host: apex, no "www". Every other file (layout, sitemap, robots)
  // derives its host from this value, so never write the host separately again.
  url: "https://goju-karate.co.uk",
  foundedYear: 1990,
  atWestminsterSince: 1990,
  estLine: "Est. 1990 · At Westminster since 1990",
  phone: "+447976411901",
  email: "info@goju-karate.co.uk",
  address: {
    street: "309 Regent Street",
    locality: "London",
    postcode: "W1B 2HW",
    country: "GB",
  },
  schedule: [
    { day: "Monday", opens: "18:00", closes: "20:00" },
    { day: "Wednesday", opens: "18:00", closes: "20:00" },
  ],
  instagram: "https://www.instagram.com/dkk_karate_london",
  facebook: "https://www.facebook.com/groups/24449490051/",
} as const;

export type NavLink = { href: string; label: string };

// Primary nav. "Links" lives in the footer; "Books" is in the bar.
export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/training", label: "Training" },
  { href: "/shihan", label: "Shihan" },
  { href: "/goju-ryu", label: "Goju Ryu" },
  { href: "/history", label: "History" },
  { href: "/yudansha", label: "Yudansha" },
  { href: "/fighters", label: "Fighters" },
  { href: "/university", label: "University" },
  { href: "/books", label: "Books" },
  { href: "/gallery", label: "Gallery" },
];

// Full list including footer-only items, used for the mobile menu so nothing is hidden on phones.
export const mobileNavLinks: NavLink[] = [
  ...navLinks,
  { href: "/faq", label: "Questions" },
  { href: "/links", label: "Links" },
  { href: "/contact", label: "Contact" },
];

// Footer "Quick Links": no Home, adds Contact, and Fighters carries the full club-team name.
export const footerLinks: NavLink[] = [
  { href: "/training", label: "Training" },
  { href: "/shihan", label: "Shihan" },
  { href: "/goju-ryu", label: "Goju Ryu" },
  { href: "/history", label: "History" },
  { href: "/yudansha", label: "Yudansha" },
  { href: "/fighters", label: "DKK Fighters" },
  { href: "/university", label: "University" },
  { href: "/gallery", label: "Gallery" },
  { href: "/books", label: "Books" },
  { href: "/faq", label: "Questions" },
  { href: "/links", label: "Links" },
  { href: "/contact", label: "Contact" },
];
