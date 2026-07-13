"use client";

import { useState } from "react";
import GalleryGrid, { type GalleryImage } from "@/components/GalleryLightbox";

const ALL = "All";

export default function GalleryFilter({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState(ALL);

  const categories = [ALL, ...Array.from(new Set(images.map((i) => i.category).filter(Boolean)))];
  const filtered = active === ALL ? images : images.filter((i) => i.category === active);

  return (
    <>
      {/* Filter tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat!)}
            className={`min-h-[44px] sm:min-h-0 px-4 py-2.5 sm:px-3.5 sm:py-2 text-xs font-medium uppercase tracking-wider rounded-sm border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-night ${
              active === cat
                ? "bg-brand border-brand text-white"
                : "bg-card border-white/10 text-gray-300 hover:border-brand/40 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <GalleryGrid images={filtered} />
    </>
  );
}
