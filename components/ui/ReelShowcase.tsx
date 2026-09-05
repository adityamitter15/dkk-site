"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX, ExternalLink } from "lucide-react";
import { usePrefersReducedMotion, useMediaQuery } from "@/lib/useMediaQuery";
import { reelPermalink, oxfordshireInstagram, type Reel } from "@/data/reels";

/** "2617" -> "2.6k views", "637" -> "637 views". Snapshot figures, not live. */
function formatViews(n: number): string {
  if (n < 1000) return `${n} views`;
  const thousands = Math.round((n / 1000) * 10) / 10;
  const label = Number.isInteger(thousands) ? `${thousands}` : thousands.toFixed(1);
  return `${label}k views`;
}

/**
 * One phone-format player. Ambient behaviour mirrors components/VideoShowcase.tsx:
 * a silent, looping preview runs while the card is the one in view, sitting out
 * entirely on prefers-reduced-motion and on phones (nobody asked to spend mobile
 * data on a decoration, those visitors get the poster and a tap-to-play
 * affordance instead). Once `started` flips true - the visitor clicked play -
 * the ambient logic guards every branch and never touches the video again;
 * sound comes on, playback restarts from the top, and native controls take over.
 *
 * `isActive` is decided by the PARENT, not per-card, and only one card is ever
 * active. Three simultaneous 1080x1920 VP9 decodes is enough to lock up a
 * renderer, and with preload="none" the inactive cards never fetch their file
 * at all, so the section costs one video rather than the full set.
 */
function ReelCard({ reel, isActive }: { reel: Reel; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(true);

  const handlePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.currentTime = 0;
    v.play()
      .then(() => {
        setStarted(true);
        setMuted(false);
      })
      .catch(() => {});
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || started) return;
    if (!isActive) {
      v.pause();
      return;
    }
    /* Only force silence if the visitor has not deliberately unmuted the
     * preview; overriding that every time the card re-activates would undo
     * their own choice. */
    if (muted) v.muted = true;
    v.play().catch(() => {});
  }, [isActive, started, muted]);

  return (
    /* Capped at roughly a real handset's CSS width. Left uncapped, a 9:16 card
     * in a two-column grid measured 943px tall against a 617px viewport, so a
     * single reel was taller than the screen and the section ran to thousands
     * of pixels. Capping keeps it reading as a phone rather than a billboard. */
    <div className="flex flex-col w-full max-w-[340px] mx-auto">
      {/* Phone frame: 9:16, rounded corners, a bezel over bg-coal so it reads
          as a device rather than a generic video box. */}
      <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-coal border border-white/10 shadow-lift">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          poster={`${reel.basePath}.jpg`}
          controls={started}
          muted={muted}
          playsInline
          loop
          preload="none"
          aria-label={reel.alt}
        >
          <source src={`${reel.basePath}.webm`} type="video/webm" />
          <source src={`${reel.basePath}.mp4`} type="video/mp4" />
        </video>

        {!started && (
          <>
            {/* Zero-alpha stop, never to-transparent - a transparent stop
                would blacken the poster under Tailwind v4's oklab gradients. */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 pointer-events-none" />
            <button
              type="button"
              onClick={handlePlay}
              aria-label={`Play ${reel.title}`}
              className="absolute inset-0 flex items-center justify-center w-full h-full cursor-pointer group/play focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            >
              <span className="w-14 h-14 rounded-full bg-brand flex items-center justify-center shadow-ember-pulse group-hover/play:scale-110 transition-transform duration-300">
                <Play fill="white" className="text-white ml-0.5" size={22} />
              </span>
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? `Unmute ${reel.title} preview` : `Mute ${reel.title} preview`}
              className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            >
              {muted ? <VolumeX size={16} aria-hidden="true" /> : <Volume2 size={16} aria-hidden="true" />}
            </button>
          </>
        )}
      </div>

      <div className="mt-4">
        <h3 className="font-display text-xl tracking-wide text-white leading-none">{reel.title}</h3>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">{reel.blurb}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
          <span className="text-gray-600 text-xs uppercase tracking-widest">{formatViews(reel.views)}</span>
          <a
            href={reelPermalink(reel)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-brand text-xs font-semibold uppercase tracking-wider hover:gap-2.5 transition-all"
          >
            Watch on Instagram <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ReelShowcase({ reels, heading, intro }: { reels: Reel[]; heading?: string; intro?: string }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const reducedMotion = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  /* Callers build this array inline (getReelsForMember returns a fresh one each
   * render), so depend on a stable key rather than the array identity. */
  const reelKey = reels.map((r) => r.slug).join("|");

  /* One observer for the whole grid picks the single most-visible card. A
   * per-card observer would happily start every video at once on a wide
   * desktop, which is exactly the thing worth avoiding here. */
  useEffect(() => {
    const root = gridRef.current;
    if (!root) return;
    /* No observer at all when ambient playback is off. The "nothing is active"
     * case is DERIVED at render (see ambientAllowed below) rather than pushed
     * back into state here, which would be a setState directly inside an
     * effect - the exact pattern this repo's lint config rejects. */
    if (reducedMotion || !isDesktop) return;

    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-reel-slug]"));
    if (cards.length === 0) return;

    const ratios = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const slug = (entry.target as HTMLElement).dataset.reelSlug;
          if (slug) ratios.set(slug, entry.intersectionRatio);
        }
        let best: string | null = null;
        let bestRatio = 0.5; // must be at least half on screen to earn playback
        for (const [slug, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = slug;
          }
        }
        setActiveSlug(best);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [reducedMotion, isDesktop, reelKey]);

  const ambientAllowed = !reducedMotion && isDesktop;

  if (reels.length === 0) return null;

  return (
    <div>
      {(heading || intro) && (
        <div className="mb-8 sm:mb-10 lg:mb-12">
          {heading && (
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-none text-white">
              {heading}
            </h2>
          )}
          {intro && (
            <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">{intro}</p>
          )}
          <a
            href={oxfordshireInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-gold text-sm font-semibold hover:underline"
          >
            Follow @dkkoxfordshire on Instagram
          </a>
        </div>
      )}

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {reels.map((reel) => (
          <div key={reel.slug} data-reel-slug={reel.slug}>
            <ReelCard reel={reel} isActive={ambientAllowed && activeSlug === reel.slug} />
          </div>
        ))}
      </div>
    </div>
  );
}
