"use client";

import { useState, useRef } from "react";
import SafeImage from "@/components/SafeImage";
import { Lightbox, morphTransition, type GalleryImage } from "@/components/GalleryLightbox";
import type { MemberPhoto } from "@/data/yudansha";

/**
 * The optional extra-photos strip on a member page, for the members who have
 * sent in more than a portrait and an action shot.
 *
 * A fixed grid rather than the gallery's masonry columns: this is a short row
 * (typically four), and multi-column flow would stack two in the first column
 * and leave the row ragged. Everything else - the lightbox, its focus trap,
 * swipe handling and the View Transitions morph - is the gallery's, imported
 * rather than reimplemented so both surfaces behave identically.
 */
export default function MemberPhotos({ photos, name }: { photos: MemberPhoto[]; name: string }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  // The lightbox reads the gallery's shape; `tall` only drives the masonry
  // tile it is never rendered in here, so the strip pins it to a flat value.
  const images: GalleryImage[] = photos.map((p) => ({ ...p, tall: false }));

  const openAt = (i: number) => morphTransition(thumbRefs.current[i], () => setLightboxIndex(i));
  const closeFrom = (i: number) => morphTransition(thumbRefs.current[i], () => setLightboxIndex(null));

  return (
    <div className="max-w-4xl mt-14 pt-10 border-t border-white/5">
      <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-6">More Photos</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            type="button"
            key={img.src}
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
                sizes="(min-width: 640px) 22vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Zero-alpha stop, never `to-transparent`: Tailwind v4 interpolates
                  gradients in oklab and a transparent stop blackens the image. */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-[11px] sm:text-xs font-medium leading-tight">{img.caption}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <p className="sr-only">Extra photographs of {name} sent in by the club.</p>

      {lightboxIndex !== null && (
        <Lightbox images={images} index={lightboxIndex} onClose={closeFrom} />
      )}
    </div>
  );
}
