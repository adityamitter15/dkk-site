/**
 * Single source of truth for club facts, contact details, and navigation.
 * Canon: founders met as Black Belts under Kyoshi Kim Roberts; DKK founded
 * in 1990; training at the University of Westminster since 1990.
 */
import { giag } from "@/data/giag";
import { BUILD_TIME, hasPassed } from "@/lib/eventDates";

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
  // Apps Script web app that appends a copy of every contact form enquiry to a
  // private club Google Sheet (backup for Formspree's 30-day retention and its
  // spam filter, which can silently drop a real enquiry). This URL is public
  // by design - a static site cannot hold a secret - so the script itself
  // validates and rate-limits every request it receives.
  enquirySheetEndpoint:
    "https://script.google.com/macros/s/AKfycbzdCu-SVRvx0q9vmse8MNJbobXYVrAZcVz0LMQhU3CcR43x3Vz5kfCXcmdQifMsGrOb4g/exec",
} as const;

/**
 * The two founders. Neither is on the dan register in data/yudansha.ts (that
 * lists the club's own black belts), so their grade lives here and every page,
 * caption, metadata description and JSON-LD node reads it. A promotion is one
 * edit here. The /shihan sentence about the June 2019 promotion to Nanadan is
 * history and deliberately does not read this.
 */
export const shihans = {
  mulholland: { name: "Gavin Mulholland", dan: "7th Dan" },
  lewis: { name: "Dan Lewis", dan: "7th Dan" },
} as const;

/**
 * DKK London's Thursday class. It is DKK London, not a branch like DKK
 * Oxfordshire, so it sits in the main schedule beside Shihan's Monday and
 * Wednesday at Regent Street, at Sensei Ragi's own venue in North London.
 * Read by /training, the homepage, /contact, the FAQ and Ragi's member page,
 * so a change of time or venue is one edit here. `site.schedule` and the
 * homepage JSON-LD stay Monday and Wednesday only: they describe 309 Regent
 * Street, the address on the club's Google listing.
 */
export const thursdayClass = {
  day: "Thursday",
  time: "6:15pm - 8:00pm",
  instructor: "Sensei Ragi Marmar",
  instructorSlug: "ragi-marmar",
  venue: "St Andrew's C of E School",
  address: "The Green, Totteridge, London N20 8NX",
  area: "Totteridge, North London",
  mapUrl: "https://maps.app.goo.gl/1Jw7TbaSNBR44MBt5",
  // Structured parts for the /karate-north-london JSON-LD. The coordinates are
  // the school's own Google Maps pin; the postcode centroid is a few metres off.
  street: "The Green",
  locality: "Totteridge",
  postcode: "N20 8NX",
  geo: { latitude: 51.6299077, longitude: -0.1964463 },
  opens: "18:15",
  closes: "20:00",
  page: "/karate-north-london",
} as const;

type Notice = { date: string; label: string; href: string };

// Slim bar under the nav for a real, time-bound event. `date` is the moment it
// stands DOWN. It currently advertises Give It A Go, so it reads its date and
// wording from data/giag.ts: the next intake edits that file only. Filtered at
// build time, so a build made after `date` ships no bar at all; a build made
// before it is hidden before first paint by the script in app/layout.tsx and
// removed after hydration by TermNotice. To advertise something else, replace
// `nextNotice` (the club supplies the real date; never invent one), or set it
// to null.
const nextNotice: Notice | null = {
  date: giag.endsAt,
  label: `${giag.name} · Try a karate class, ${giag.shortDates}`,
  href: "/give-it-a-go",
};

export const termNotice: Notice | null =
  nextNotice && !hasPassed(nextNotice.date, BUILD_TIME) ? nextNotice : null;

// Shared joining copy (age policy, door instructions) reused across contact,
// training, give-it-a-go and the FAQ so the wording never drifts between pages.
export const joining = {
  age: "Classes are for adults, 18 and over. If you are 16 or 17, message us first to check.",
  door: "Not a student? Sign in at reception, say you're here for karate, and they'll show you to the hall.",
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
