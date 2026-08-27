"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { flushSync } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  tall: boolean;
  category?: string;
};

/**
 * Runs a state update inside a View Transition so the tagged thumbnail morphs
 * into the lightbox image (and back). Plain update when the API is missing or
 * the user prefers reduced motion.
 */
function morphTransition(thumb: HTMLElement | null | undefined, update: () => void) {
  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => { finished: Promise<void> };
  };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!doc.startViewTransition || reduced) {
    update();
    return;
  }
  thumb?.style.setProperty("view-transition-name", "gallery-morph");
  const transition = doc.startViewTransition(() => {
    flushSync(update);
  });
  transition.finished.finally(() => {
    thumb?.style.removeProperty("view-transition-name");
  });
}

function Lightbox({
  images,
  index,
  onClose,
}: {
  images: GalleryImage[];
  index: number;
  /** Called with the index being viewed at close time, so the morph can land on the right thumbnail */
  onClose: (currentIndex: number) => void;
}) {
  const [current, setCurrent] = useState(index);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Latest-value ref so the key handler below can stay mounted once while still
  // closing on the image actually being viewed. Written in an effect, never
  // during render - a render-phase ref write is not safe under concurrent React.
  const currentRef = useRef(current);
  useEffect(() => {
    currentRef.current = current;
  }, [current]);
  const requestClose = useCallback(() => onClose(currentRef.current), [onClose]);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  // Focus management + body scroll lock + key handling
  useEffect(() => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        requestClose();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handler);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = prevOverflow;
      lastFocused.current?.focus();
    };
  }, [requestClose, prev, next]);

  // Swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) prev();
      else next();
    }
  };

  const img = images[current];

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={img.caption || img.alt || "Gallery image"}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={requestClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Close */}
      <button
        ref={closeBtnRef}
        onClick={requestClose}
        className="absolute top-3 right-3 z-10 p-3 text-white/70 hover:text-white transition-colors min-w-11 min-h-11 flex items-center justify-center"
        aria-label="Close"
      >
        <X size={28} aria-hidden="true" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-gray-400 text-sm font-medium z-10" aria-live="polite">
        {current + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-1 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white active:text-white transition-colors min-w-11 min-h-11 flex items-center justify-center"
        aria-label="Previous image"
      >
        <ChevronLeft size={36} aria-hidden="true" />
      </button>

      {/* Image */}
      <div
        className="relative max-h-[85vh] max-w-[90vw] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative"
          style={{
            width: img.tall ? "min(60vh, 70vw)" : "min(80vh * 4/3, 85vw)",
            height: img.tall ? "min(80vh, 100vw)" : "min(60vh, 70vw)",
            maxWidth: "85vw",
            maxHeight: "82vh",
            viewTransitionName: "gallery-morph",
          } as React.CSSProperties}
        >
          <SafeImage
            src={img.src}
            alt={img.alt}
            fill
            className="object-contain"
          />
        </div>
        {img.caption && (
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent text-center">
            <p className="text-white text-sm font-medium">{img.caption}</p>
          </div>
        )}
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-1 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white active:text-white transition-colors min-w-11 min-h-11 flex items-center justify-center"
        aria-label="Next image"
      >
        <ChevronRight size={36} aria-hidden="true" />
      </button>
    </div>
  );
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  const openAt = (i: number) => morphTransition(thumbRefs.current[i], () => setLightboxIndex(i));
  const closeFrom = (i: number) => morphTransition(thumbRefs.current[i], () => setLightboxIndex(null));

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {images.map((img, i) => (
          <button
            type="button"
            key={i}
            className="break-inside-avoid relative overflow-hidden rounded-sm bg-card border border-white/5 hover:border-brand/40 transition-all duration-300 group cursor-pointer w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            onClick={() => openAt(i)}
            aria-label={`Open ${img.caption || img.alt} in lightbox`}
          >
            <div ref={(el) => { thumbRefs.current[i] = el; }} className={`relative w-full ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
              <SafeImage
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium">{img.caption}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={closeFrom}
        />
      )}
    </>
  );
}
