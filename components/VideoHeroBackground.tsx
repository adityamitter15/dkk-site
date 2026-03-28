"use client";
import { useRef, useEffect } from "react";

export default function VideoHeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      // Autoplay blocked by browser - poster image remains visible
    });
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
      src="/videos/dkk_hero.mp4"
      poster="/images/video-poster.jpg"
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
