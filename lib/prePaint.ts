/**
 * Inline script for app/layout.tsx that runs while the HTML is parsed, before
 * first paint. Every key whose date has passed on the VISITOR's clock is added
 * to <html data-past="...">, and app/globals.css hides [data-expires="<key>"]
 * and swaps the [data-giag] copy from that. Why: a build made before an event
 * ships the promo in its static HTML, and useIsPast removing it after hydration
 * shifts the page. Hidden before paint, that removal moves nothing.
 *
 * Same rule as hasPassed in lib/eventDates.ts: an empty or unparseable date
 * counts as passed. Plain ES5 on purpose: it is a string, never transpiled.
 * No CSP change needed: firebase.json script-src already allows 'unsafe-inline'.
 */
export function pastDatesScript(dates: Record<string, string>): string {
  return `(function(d){try{var n=Date.now(),p=[];for(var k in d){var t=new Date(d[k]).getTime();if(isNaN(t)||t<n)p.push(k)}if(p.length)document.documentElement.setAttribute("data-past",p.join(" "))}catch(e){}})(${JSON.stringify(dates)});`;
}
