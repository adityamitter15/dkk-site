/**
 * Give It A Go, September 2026. A pair of dated taster sessions that happen to
 * fall on the club's normal Monday and Wednesday nights, so nothing about the
 * class itself changes - it is the regular session, promoted.
 *
 * Single source for the page, the site-wide notice bar, the /university block
 * and the Event structured data, so the two dates cannot drift apart across
 * four files.
 *
 * The UWSU booking links are for University of Westminster students only.
 * Everyone else just turns up, which is the whole point of promoting it here
 * rather than leaving it on the students' union site.
 *
 * WHEN IT ENDS nothing needs editing. `endsAt` drives all of it: a build made
 * after it drops the page from the sitemap, drops the Event structured data,
 * ships the page in its "these sessions have finished" state and ships no
 * notice bar or promo band (lib/giag.ts, data/site.ts). A build made before it
 * still ships the promo, so the pre-paint script in app/layout.tsx hides it
 * before first paint once the date has passed, and GiagBand, TermNotice and
 * the page swap themselves over.
 *
 * FOR THE NEXT INTAKE edit this file only: `month`, `year`, `sessions`,
 * `endsAt`, `shortDates`. Everything else comes back on its own.
 */

export type GiagSession = {
  /** Local start/end with the BST offset written out, so schema.org and JS agree. */
  start: string;
  end: string;
  /** Weekday on its own, for the card headings. */
  day: string;
  /** Human date, e.g. "21 September". */
  date: string;
  /** UWSU booking page. Students only. */
  uwsuUrl: string;
};

export const giag = {
  name: "Give It A Go",
  year: 2026,
  /** Month of the intake, for "this September" style copy. */
  month: "September",
  /** Both sessions run the club's normal class hours. */
  time: "6:00pm - 8:00pm",
  sessions: [
    {
      start: "2026-09-21T18:00:00+01:00",
      end: "2026-09-21T20:00:00+01:00",
      day: "Monday",
      date: "21 September",
      uwsuUrl: "https://uwsu.native.fm/event/give-it-a-go-karate-4/287433",
    },
    {
      start: "2026-09-23T18:00:00+01:00",
      end: "2026-09-23T20:00:00+01:00",
      day: "Wednesday",
      date: "23 September",
      uwsuUrl: "https://uwsu.native.fm/event/give-it-a-go-karate-5/287474",
    },
  ] as const satisfies readonly GiagSession[],
  /**
   * Midnight after the last session. Drives the notice bar standing down and
   * the page's "this has been and gone" state.
   */
  endsAt: "2026-09-24T00:00:00+01:00",
  /** Short form for prose and the notice bar: "21 & 23 September". */
  shortDates: "21 & 23 September",
} as const;
