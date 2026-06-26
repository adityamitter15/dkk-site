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
      poster="/images/video-poster.jpg"
      muted
      loop
      playsInline
      preload="metadata"
    >
      {/* Phones get a 480p 3.7MB build, tablets+ get the 720p original. WebM first for the browsers that prefer it. */}
      <source src="/videos/dkk_hero.webm" type="video/webm" media="(min-width: 768px)" />
      <source src="/videos/dkk_hero.mp4"  type="video/mp4"  media="(min-width: 768px)" />
      <source src="/videos/dkk_hero_mobile.mp4" type="video/mp4" />
    </video>
  );
}
