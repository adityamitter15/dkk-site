"use client";

import { useState, useEffect, useCallback } from "react";
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

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const img = images[current];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-gray-400 text-sm font-medium z-10">
        {current + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-3 sm:left-6 z-10 p-2 text-white/60 hover:text-white transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={36} />
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
        className="absolute right-3 sm:right-6 z-10 p-2 text-white/60 hover:text-white transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={36} />
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
          <div
            key={i}
            className="break-inside-avoid relative overflow-hidden rounded-sm bg-[#141311] border border-white/5 hover:border-[#a8201a]/40 transition-all duration-300 group cursor-pointer"
            onClick={() => setLightboxIndex(i)}
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
          </div>
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
