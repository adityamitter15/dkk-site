"use client";

import { useState, useRef } from "react";
import SafeImage from "@/components/SafeImage";
import { Lightbox, morphTransition, type GalleryImage } from "@/components/GalleryLightbox";
import { StaggerList, StaggerItem } from "@/components/ui/StaggerList";
import type { MemberPhoto } from "@/data/yudansha";

/**
 * The optional extra-photos strip on a member page, for the members who have
 * sent in more than a portrait and an action shot.
 *
 * A fixed grid rather than the gallery's masonry columns: this is a short row,
 * and multi-column flow would stack two in the first column and leave the row
 * ragged. Everything else - the lightbox, its focus trap, swipe handling and
 * the View Transitions morph - is the gallery's, imported rather than
 * reimplemented so both surfaces behave identically.
 *
 * Phone first. Two columns is the only honest fit at 390px, which leaves an
 * orphan tile whenever the count is odd, so the last tile of an odd set spans
 * both columns and reads as a deliberate closing frame instead of a gap. From
 * the small breakpoint up the strip opens out to one column per photo.
 */
export default function MemberPhotos({ photos, name }: { photos: MemberPhoto[]; name: string }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  // The lightbox reads the gallery's shape; `tall` only drives the masonry
  // tile it is never rendered in here, so the strip pins it to a flat value.
  const images: GalleryImage[] = photos.map((p) => ({ ...p, tall: false }));

  const openAt = (i: number) => morphTransition(thumbRefs.current[i], () => setLightboxIndex(i));
  const closeFrom = (i: number) => morphTransition(thumbRefs.current[i], () => setLightboxIndex(null));

  // One column per photo above phone width. Tailwind needs whole class names,
  // so these are written out rather than interpolated. A single photo is
  // sized as if it were sitting in a 3-up row rather than stretched to fill
  // the whole width, so the strip doesn't visually balloon whenever a member
  // only has one extra photo.
  const columns =
    images.length >= 6 ? "sm:grid-cols-3 lg:grid-cols-6"
    : images.length === 5 ? "sm:grid-cols-5"
    : images.length === 4 ? "sm:grid-cols-4"
    : images.length === 3 || images.length === 1 ? "sm:grid-cols-3"
    : "sm:grid-cols-2";

  // The last tile of an odd set (3+ photos) spans both mobile columns and
  // reads as a deliberate closing frame. A lone photo isn't "odd" in that
  // sense, it's just the only tile, so it gets no special treatment at all.
  const oddCount = images.length % 2 === 1 && images.length > 1;

  return (
    <div className="max-w-4xl mt-14 pt-10 border-t border-white/5">
      <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-6">More Photos</p>

      <StaggerList as="div" className={`grid grid-cols-2 ${columns} gap-2.5 sm:gap-3`}>
        {images.map((img, i) => {
          const isOrphan = oddCount && i === images.length - 1;
          return (
            <StaggerItem
              as="div"
              key={img.src}
              className={isOrphan ? "col-span-2 sm:col-span-1" : undefined}
            >
              <button
                type="button"
                onClick={() => openAt(i)}
                aria-label={`Open ${img.caption || img.alt} in lightbox`}
                className="relative overflow-hidden rounded-sm bg-card border border-white/5 hover:border-gold/40 transition-all duration-300 group cursor-pointer w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-night"
              >
                <div
                  ref={(el) => {
                    thumbRefs.current[i] = el;
                  }}
                  className="relative w-full aspect-[4/3]"
                >
                  <SafeImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={isOrphan ? "(min-width: 640px) 20vw, 92vw" : "(min-width: 640px) 20vw, 46vw"}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Zero-alpha stop, never `to-transparent`: Tailwind v4 interpolates
                      gradients in oklab and a transparent stop blackens the image. */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* On a phone there is no hover, so the caption sits visible on a
                      scrim at the foot of the tile and only slides on larger screens. */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/0 sm:bg-none p-2 sm:p-3 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-[11px] sm:text-xs font-medium leading-tight">{img.caption}</p>
                  </div>
                </div>
              </button>
            </StaggerItem>
          );
        })}
      </StaggerList>

      <p className="sr-only">Extra photographs of {name} sent in by the club.</p>

      {lightboxIndex !== null && (
        <Lightbox images={images} index={lightboxIndex} onClose={closeFrom} />
      )}
    </div>
  );
}
