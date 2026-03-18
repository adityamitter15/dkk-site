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
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
}
