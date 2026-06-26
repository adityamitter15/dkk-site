"use client";

import Image, { ImageProps } from "next/image";

export default function SafeImage({ src, ...props }: ImageProps) {
  // GIFs must be unoptimized to render correctly (Next.js strips animation otherwise)
  const isGif = typeof src === "string" && src.toLowerCase().endsWith(".gif");

  return (
    <Image
      src={src}
      {...props}
      unoptimized={isGif ? true : (props.unoptimized ?? false)}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (process.env.NODE_ENV !== "production") {
          console.warn("[SafeImage] failed to load:", typeof src === "string" ? src : target.currentSrc);
        }
        target.style.display = "none";
      }}
    />
  );
}
