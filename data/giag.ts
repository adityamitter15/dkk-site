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
 * TO RETIRE: clear `termNotice` in data/site.ts back to null, delete the
 * /university block, and either delete this page or replace the sessions with
 * the next intake's dates. The notice bar stands itself down after `endsAt`
 * without a rebuild (see lib/eventDates.ts), but the page does not.
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
