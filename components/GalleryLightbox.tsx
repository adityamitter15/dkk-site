"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  tall: boolean;
  category?: string;
};

function Lightbox({
  images,
  index,
  onClose,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  // Focus management + body scroll lock + key handling
  useEffect(() => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
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
  }, [onClose, prev, next]);

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
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Close */}
      <button
        ref={closeBtnRef}
        onClick={onClose}
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
          }}
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

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {images.map((img, i) => (
          <button
            type="button"
            key={i}
            className="break-inside-avoid relative overflow-hidden rounded-sm bg-[#141311] border border-white/5 hover:border-[#a8201a]/40 transition-all duration-300 group cursor-pointer w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0c]"
            onClick={() => setLightboxIndex(i)}
            aria-label={`Open ${img.caption || img.alt} in lightbox`}
          >
            <div className={`relative w-full ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
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
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
