/**
 * Everything the site says about Give It A Go that can be worked out from
 * data/giag.ts, so the next intake edits that one file and nothing else.
 */
import { giag } from "@/data/giag";
import { toWords } from "@/lib/clubYears";
import { BUILD_TIME, hasPassed } from "@/lib/eventDates";

/**
 * True when this build was made after the last session. BUILD-TIME only: use it
 * for what the static HTML leads with (metadata, JSON-LD, sitemap, which copy
 * the page ships). A build made before the date is corrected in the browser by
 * the pre-paint script in app/layout.tsx and by useIsPast.
 */
export const giagOverAtBuild: boolean = hasPassed(giag.endsAt, BUILD_TIME);

// Widened to number: `giag` is `as const`, so its length is the literal 2 and
// comparing it with 1 would not type-check.
const n: number = giag.sessions.length;

export const giagCount = n;
/** "Two open sessions" (or "One open session"). */
export const giagCountPhrase = n === 1 ? "One open session" : `${toWords(n)} open sessions`;
/** Heading form, "Two Sessions". */
export const giagCountTitle = n === 1 ? "One Session" : `${toWords(n)} Sessions`;
/** "either date" when there are two sessions. */
export const giagAnyDate = n === 1 ? "the day" : n === 2 ? "either date" : "any of the dates";
export const giagSessionsSubtitle =
  n === 1
    ? "It runs the club's normal class hours in the main hall at 309 Regent Street."
    : n === 2
      ? "Both run the club's normal class hours in the main hall at 309 Regent Street. Come to one or come to both."
      : "All of them run the club's normal class hours in the main hall at 309 Regent Street. Come to one or come to all of them.";

/** "A", "A and B", "A, B and C". */
export function formatList(items: readonly string[], conjunction: "and" | "or" = "and"): string {
  if (items.length <= 1) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")} ${conjunction} ${items[items.length - 1]}`;
}

/** "Monday 21 September and Wednesday 23 September". */
export function giagSessionList(conjunction: "and" | "or" = "and"): string {
  return formatList(giag.sessions.map((s) => `${s.day} ${s.date}`), conjunction);
}

// Encoded exactly as the hand-written links were (apostrophe as %27).
const whatsApp = (text: string) =>
  `https://wa.me/447976411901?text=${encodeURIComponent(text).replace(/'/g, "%27")}`;

export const giagWhatsAppHref = whatsApp(`Hi, I'd like to come to Give It A Go in ${giag.month}.`);
export const classWhatsAppHref = whatsApp("Hi, I'd like to come and try a class at DKK London.");
