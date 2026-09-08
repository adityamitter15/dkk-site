/**
 * Dated one-off events (a taster week, a beginners' intake) have the same
 * problem as the year strings in lib/clubYears.ts: the site is a static export
 * (`output: "export"`), so a `Date.now()` read in a server component is
 * evaluated once at build time and frozen into the shipped HTML. A deployed
 * page never notices an event finishing on its own, which is how a notice bar
 * ends up advertising last month's dates.
 *
 * `NEXT_PUBLIC_BUILD_TIME` bakes the build instant in as a seed so the server
 * HTML and the first client render agree - no hydration mismatch, and crawlers
 * still see the live notice - and lib/useIsPast.ts then corrects from the
 * visitor's own clock during hydration.
 */

// Referenced as a full literal so Next can inline it at build time.
export const BUILD_TIME = Number(process.env.NEXT_PUBLIC_BUILD_TIME) || 0;

/**
 * True once `isoDate` is behind `nowMs`. An unparseable date counts as passed,
 * so a typo quietly hides the notice rather than pinning a wrong one up
 * forever.
 *
 * Write the offset into the date string (`+01:00` for BST) rather than relying
 * on the parser's local-time guess - the build machine and the visitor are not
 * necessarily in the same zone.
 */
export function hasPassed(isoDate: string, nowMs: number): boolean {
  const time = new Date(isoDate).getTime();
  return Number.isNaN(time) || time < nowMs;
}
