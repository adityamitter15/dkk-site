"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

export default function SafeImage({ src, alt, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);
  // GIFs must be unoptimized to render correctly (Next.js strips animation otherwise)
  const isGif = typeof src === "string" && src.toLowerCase().endsWith(".gif");

  if (failed) {
    // Quiet placeholder instead of a collapsed gap - keeps layout intact
    return (
      <div
        role="img"
        aria-label={typeof alt === "string" ? alt : undefined}
        className={`bg-card border border-white/5 flex items-center justify-center ${
          props.fill ? "absolute inset-0" : ""
        } ${props.className ?? ""}`}
      >
        <span className="text-white/20 text-xs uppercase tracking-widest px-4 text-center">
          {typeof alt === "string" && alt ? alt : "Image unavailable"}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      unoptimized={isGif ? true : (props.unoptimized ?? false)}
      onError={() => {
        if (process.env.NODE_ENV !== "production") {
          console.warn("[SafeImage] failed to load:", typeof src === "string" ? src : "(non-string src)");
        }
        setFailed(true);
      }}
    />
  );
}
