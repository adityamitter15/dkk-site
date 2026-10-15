/**
 * Technique breakdowns filmed at the Oxfordshire dojo and published on
 * Instagram by Sensei Simon Clinch (@dkkoxfordshire).
 *
 * The files are SELF-HOSTED rather than embedded from Instagram, deliberately:
 *   1. The site's own CSP `frame-src` does not allow instagram.com, so an
 *      official embed iframe would be blocked outright.
 *   2. An Instagram iframe sets Meta cookies, which would force a consent
 *      banner onto a site that is deliberately cookieless (see the analytics
 *      note in the SEO reference).
 *   3. Self-hosted files can carry VideoObject schema, so they are eligible
 *      for Google video results. An iframe hands that surface to Instagram.
 *
 * Each reel ships as .webm (VP9, remuxed from Instagram's original stream with
 * no re-encode) plus .mp4 (H.264) for Safari/iOS, matching the dual-source
 * convention already used by the hero videos. Poster is a real frame.
 *
 * `views` is the snapshot shown before live figures arrive (last taken
 * 2026-10-15) and is what crawlers read. Live counts come from the Apps Script
 * at `site.reelStatsEndpoint` (source in apps-script/reel-stats.gs), which
 * reads Instagram's official API daily; ReelShowcase swaps them in as plain
 * text and never shows a figure lower than this snapshot. A new reel is one
 * entry here plus its three files; its live count needs no further edit.
 */

export type Reel = {
  slug: string;
  /** Instagram shortcode - builds the canonical permalink. */
  shortcode: string;
  title: string;
  /** One line of on-page copy under the player. */
  blurb: string;
  /** Longer text for VideoObject schema description. */
  description: string;
  /** Poster alt text. Written after viewing each clip at full size. */
  alt: string;
  /** Seconds, from ffprobe. Used to emit ISO 8601 duration in schema. */
  duration: number;
  uploadDate: string;
  views: number;
  basePath: string;
};

export const reelsPermalinkBase = "https://www.instagram.com/dkkoxfordshire";
export const oxfordshireInstagram = "https://www.instagram.com/dkkoxfordshire";

export const simonClinchReels: Reel[] = [
  {
    slug: "rear-naked-choke",
    shortcode: "DeIHDXsOvzJ",
    title: "The Standing Rear Naked Choke",
    blurb: "Strictly a strangle, not a choke: it cuts the blood to the brain, not the air. Apply it slowly.",
    description:
      "Sensei Simon Clinch applies a rear naked choke from a standing position in three steps: turning the partner by the shoulders, setting the inside of the elbow across the throat, then a hand on the back of the head to constrict. As he explains, it is really a strangle, working on the blood flow to the brain rather than the airway, which is why it is always applied slowly. Filmed at the DKK Oxfordshire dojo.",
    alt: "Simon Clinch in a black gi applying a standing rear naked choke from behind a bald, bearded partner, his hand on the back of the partner's head, on the parquet floor of a village hall",
    duration: 17.76,
    uploadDate: "2026-10-05",
    views: 4931,
    basePath: "/videos/reels/rear-naked-choke",
  },
  {
    slug: "roundhouse-kick",
    shortcode: "Dcb5JbAOJv8",
    title: "How to Throw a Roundhouse Kick",
    blurb: "Drive up with the knee, then pivot. The two steps most people collapse into one.",
    description:
      "Sensei Simon Clinch breaks the Goju Ryu roundhouse kick (mawashi geri) into two steps - driving the knee up first, then pivoting the supporting foot - before putting it onto the pads with a student. Filmed at the DKK Oxfordshire dojo.",
    alt: "Simon Clinch in a black gi mid-roundhouse kick in a village hall dojo, supporting foot pivoted, with a student holding a kick shield behind him",
    duration: 19.46,
    uploadDate: "2026-08-24",
    views: 2721,
    basePath: "/videos/reels/roundhouse-kick",
  },
  {
    slug: "kick-to-the-ribs",
    shortcode: "Dc1w4BnO-6x",
    title: "Kicking to the Ribs",
    blurb: "Not flexibility or leg strength. Timing, and getting the hips to do the work.",
    description:
      "A partner drill on kicking to the ribs: slipping off the line of the punch first, then turning the hips over so the kick lands with body weight behind it rather than leg strength alone. Filmed at the DKK Oxfordshire dojo.",
    alt: "Simon Clinch in a black gi slipping to the outside of a partner's punch in a village hall dojo, the partner in a white gi with a brown belt",
    duration: 17.88,
    uploadDate: "2026-09-03",
    views: 2982,
    basePath: "/videos/reels/kick-to-the-ribs",
  },
  {
    slug: "knockout-power",
    shortcode: "DcjvS1rOhgX",
    title: "Where Knockout Power Comes From",
    blurb: "Move the body and the shoulder through first. Then let the fist follow.",
    description:
      "Sensei Simon Clinch on where punching power actually comes from in Goju Ryu - moving the body and shoulder through the target before the fist is released, rather than throwing the arm on its own. Demonstrated solo, then on the pads.",
    alt: "Simon Clinch in a black gi in a fighting stance in a sports hall with blue wall padding, his belt embroidered with his name and the Goju Ryu kanji",
    duration: 13.7,
    uploadDate: "2026-08-27",
    views: 684,
    basePath: "/videos/reels/knockout-power",
  },
];

/** ISO 8601 duration for schema.org, e.g. 19.46 -> "PT19S". */
export function isoDuration(seconds: number): string {
  const total = Math.round(seconds);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return m > 0 ? `PT${m}M${s}S` : `PT${s}S`;
}

/** Canonical Instagram permalink for a reel. */
export function reelPermalink(reel: Reel): string {
  return `${reelsPermalinkBase}/reel/${reel.shortcode}/`;
}

/** Reels are currently only attached to Simon Clinch's member page. */
export function getReelsForMember(slug: string): Reel[] {
  return slug === "simon-clinch" ? simonClinchReels : [];
}
