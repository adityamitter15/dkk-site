"use client";
import { useRef, useEffect } from "react";

export default function VideoHeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Safari/iOS only honours the `autoplay` HTML attribute reliably for muted background videos.
    // The promise from .play() can also be silently rejected on first paint before the video buffers
    // enough data - so we retry once data arrives, when the tab becomes visible, and on first user gesture.
    const tryPlay = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Still blocked - wait for the next trigger.
        });
      }
    };

    tryPlay();

    const onCanPlay = () => tryPlay();
    const onLoadedData = () => tryPlay();
    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    const onFirstGesture = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirstGesture);
      window.removeEventListener("pointerdown", onFirstGesture);
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("loadeddata", onLoadedData);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("touchstart", onFirstGesture, { once: false, passive: true });
    window.addEventListener("pointerdown", onFirstGesture, { once: false, passive: true });

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadeddata", onLoadedData);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("touchstart", onFirstGesture);
      window.removeEventListener("pointerdown", onFirstGesture);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
      poster="/images/video-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disableRemotePlayback
    >
      {/* Phones get a 480p 3.7MB build, tablets+ get the 720p original. WebM first for the browsers that prefer it. */}
      <source src="/videos/dkk_hero.webm" type="video/webm" media="(min-width: 768px)" />
      <source src="/videos/dkk_hero.mp4"  type="video/mp4"  media="(min-width: 768px)" />
      <source src="/videos/dkk_hero_mobile.mp4" type="video/mp4" />
    </video>
  );
}
