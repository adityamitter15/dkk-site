/**
 * The site is a static export (`output: "export"`), so `new Date()` inside a
 * server component is evaluated once at build time and frozen into the
 * shipped HTML - a deployed page never notices a year roll over on its own.
 * `NEXT_PUBLIC_BUILD_YEAR` bakes the build year in as a seed so the server
 * HTML and the first client render agree (no hydration mismatch), and
 * client components then correct themselves from the visitor's own clock.
 */

// Reference the env var as a full literal so Next can inline it at build time.
export const BUILD_YEAR = Number(process.env.NEXT_PUBLIC_BUILD_YEAR) || 2026;

export function yearsSince(startYear: number, currentYear: number): number {
  return currentYear - startYear;
}

const ONES = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];

const TEENS = [
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

const TENS = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

/**
 * Title Case cardinal number words for 1 through 99, e.g. 36 -> "Thirty-Six",
 * 40 -> "Forty", 7 -> "Seven". Hyphenates compounds, no hyphen for round tens.
 * Falls back to the plain digits outside that range.
 */
export function toWords(n: number): string {
  if (!Number.isInteger(n) || n < 1 || n > 99) return String(n);
  if (n < 10) return ONES[n];
  if (n < 20) return TEENS[n - 10];
  const tens = Math.floor(n / 10);
  const ones = n % 10;
  return ones === 0 ? TENS[tens] : `${TENS[tens]}-${ONES[ones]}`;
}
