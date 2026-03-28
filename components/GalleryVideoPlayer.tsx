"use client";
import { useRef, useState, useCallback } from "react";
import { Play, Film } from "lucide-react";

export default function GalleryVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const handlePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play()
      .then(() => setStarted(true))
      .catch(() => {});
  }, []);

  return (
    <section className="py-16 bg-[#0f0e0c] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="inline-flex items-center gap-2 text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-2">
              <Film size={12} className="text-[#a8201a]" />
              Featured Video
            </p>
            <h2 className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide leading-none">
              DKK London Training Session
            </h2>
          </div>
        </div>

        {/* Player - full width, cinematic */}
        <div
          className={`relative rounded-sm overflow-hidden transition-shadow duration-500 ${
            started
              ? "ring-1 ring-[#a8201a]/40 shadow-[0_0_50px_rgba(168,32,26,0.15)]"
              : "ring-1 ring-white/8 hover:ring-[#a8201a]/35 hover:shadow-[0_0_50px_rgba(168,32,26,0.18)]"
          }`}
        >
          <div className="aspect-video bg-[#060606]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/videos/dkk_training.mp4"
              poster="/images/video-poster.jpg"
              controls={started}
              playsInline
              preload="metadata"
            />

            {!started && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center w-full h-full cursor-pointer group/play"
                aria-label="Play DKK London training session"
              >
                <div className="absolute inset-0 bg-black/50 group-hover/play:bg-black/25 transition-colors duration-300" />

                {/* Overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-[#a8201a] text-[10px] uppercase tracking-[0.25em] mb-0.5">DKK London</p>
                  <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide">Okinawan Goju-Ryu · Training Session</p>
                </div>

                <div className="relative flex flex-col items-center gap-4">
                  <div
                    className="rounded-full bg-[#a8201a] flex items-center justify-center shadow-[0_0_50px_rgba(168,32,26,0.6)] group-hover/play:scale-110 group-hover/play:shadow-[0_0_90px_rgba(168,32,26,0.9)] transition-all duration-300"
                    style={{ width: "4.5rem", height: "4.5rem" }}
                  >
                    <Play fill="white" className="text-white ml-1" size={28} />
                  </div>
                  <span className="text-white/70 text-[10px] uppercase tracking-[0.3em] font-semibold">
                    Play
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>

        <p className="mt-3 text-gray-700 text-xs uppercase tracking-widest text-right">
          Pad Work · Sparring · Grappling · Kata · Defence Drills · Weapons · Conditioning
        </p>
      </div>
    </section>
  );
}
