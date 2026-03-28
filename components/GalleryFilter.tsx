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
            className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider rounded-sm border transition-all duration-200 ${
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
