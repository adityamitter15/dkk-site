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

    // Phones start on the poster with only the desktop sources present, then
    // append the smaller mobile file once the page has settled - unless the
    // visitor has Save-Data on, in which case they stay on the poster.
    const isPhone = window.matchMedia("(max-width: 767px)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    let cancelled = false;
    let idleHandle: number | undefined;
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;
    let usedIdleCallback = false;
    const onLoad = () => {
      if (cancelled) return;
      if ("requestIdleCallback" in window) {
        usedIdleCallback = true;
        idleHandle = window.requestIdleCallback(addMobileSource);
      } else {
        timeoutHandle = setTimeout(addMobileSource, 200);
      }
    };
    const addMobileSource = () => {
      if (cancelled) return;
      if (video.querySelector("source[data-mobile]")) return;
      const mobileSource = document.createElement("source");
      mobileSource.src = "/videos/dkk_hero_mobile.mp4";
      mobileSource.type = "video/mp4";
      mobileSource.dataset.mobile = "";
      video.appendChild(mobileSource);
      video.load();
      tryPlay();
    };
    if (isPhone && !saveData) {
      if (document.readyState === "complete") onLoad();
      else window.addEventListener("load", onLoad, { once: true });
    }

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
      cancelled = true;
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadeddata", onLoadedData);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("touchstart", onFirstGesture);
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("load", onLoad);
      if (usedIdleCallback && idleHandle !== undefined) {
        window.cancelIdleCallback(idleHandle);
      } else if (timeoutHandle !== undefined) {
        clearTimeout(timeoutHandle);
      }
    };
  }, []);

  // preload stays "auto". Setting it to "none" to defer the 4.4MB mobile file
  // was tried and reverted on 2026-09-06: it is a no-op at best, because the
  // autoplay flag starts loading regardless of the preload hint, and in any
  // browser that did honour it the hero would sit on the poster until a
  // gesture - the autoplay attribute cannot be dropped either, per the
  // Safari/iOS note above. The effect above is a different approach: it
  // withholds the mobile source itself (not just a preload hint) until the
  // page has loaded and gone idle, so there is nothing for the browser to
  // start fetching early in the first place.
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
      {/* Tablets+ get the 720p original, WebM first for the browsers that prefer it.
          Phones have no source here at all - they sit on the poster until the
          effect above appends the smaller mobile file once the page has settled. */}
      <source src="/videos/dkk_hero.webm" type="video/webm" media="(min-width: 768px)" />
      <source src="/videos/dkk_hero.mp4"  type="video/mp4"  media="(min-width: 768px)" />
    </video>
  );
}
