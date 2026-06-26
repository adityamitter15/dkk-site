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
            className={`min-h-[44px] sm:min-h-0 px-4 py-2.5 sm:px-3.5 sm:py-2 text-xs font-medium uppercase tracking-wider rounded-sm border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0c] ${
              active === cat
                ? "bg-[#a8201a] border-[#a8201a] text-white"
                : "bg-[#141311] border-white/10 text-gray-300 hover:border-[#a8201a]/40 hover:text-white"
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
