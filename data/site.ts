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
  // The listing itself, for schema hasMap/sameAs and the "find us" link.
  googleListing: "https://maps.google.com/?cid=13776758326457460286",
  // Straight into the review box. NOT the same as googleListing: the CID
  // maps URL only opens the listing and leaves the visitor to hunt for the
  // button, which is the difference between an ask that lands and one that
  // does not. The place id decodes to the same CID as googleListing.
  googleReview: "https://search.google.com/local/writereview?placeid=ChIJJWQhsSMbdkgRPubmnLTgML8",
} as const;

// Set to the real date of the next beginners' intake / term restart to show the
// notice bar, then clear it back to null once it has passed. `date` is the
// moment the bar stands DOWN, so for a multi-day event use the day after the
// last session. The club has to supply the real dates - do not invent them.
//
// Currently: Give It A Go, 21 and 23 September 2026. Sessions live in
// data/giag.ts; this is only the bar. Clear back to null once the page comes
// down.
export const termNotice: { date: string; label: string; href: string } | null = {
  date: "2026-09-24T00:00:00+01:00",
  label: "Give It A Go · Try a karate class, 21 & 23 September",
  href: "/give-it-a-go",
};

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
