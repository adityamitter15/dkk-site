"use client";
import { useRef, useState, useCallback } from "react";
import { Play } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function VideoShowcase() {
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
    <section className="relative py-28 bg-black overflow-hidden">
      {/* Subtle radial glow behind video */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,_#1a0000_0%,_transparent_70%)] opacity-70 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="inline-flex items-center gap-3 text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-5">
            <span className="w-6 h-px bg-[#a8201a]" />
            See For Yourself
          </p>
          <h2 className="font-['Bebas_Neue'] text-5xl sm:text-6xl lg:text-[5.5rem] text-white tracking-wide leading-none">
            Inside the<br />Dojo
          </h2>
          <p className="text-gray-400 mt-5 max-w-xl font-light leading-relaxed text-base sm:text-lg">
            Pad work. Sparring. Grappling. Kata. Defence drills. Weapons. Conditioning. Every session. No performance, no padding. Okinawan Goju Ryu as it was meant to be trained.
          </p>
        </div>

        {/* Video Container */}
        <div
          className={`relative rounded-sm overflow-hidden transition-shadow duration-500 ${
            started
              ? "ring-1 ring-[#a8201a]/40 shadow-[0_0_60px_rgba(168,32,26,0.2)]"
              : "ring-1 ring-[#a8201a]/20 shadow-[0_0_40px_rgba(168,32,26,0.08)] hover:ring-[#a8201a]/50 hover:shadow-[0_0_80px_rgba(168,32,26,0.3)]"
          }`}
        >
          <div className="aspect-video bg-[#080808]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/videos/dkk_training.mp4"
              poster="/images/video-poster.jpg"
              controls={started}
              playsInline
              preload="metadata"
            />

            {/* Pre-play overlay */}
            {!started && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center w-full h-full cursor-pointer group/play"
                aria-label="Play DKK London training video"
              >
                {/* Scrim */}
                <div className="absolute inset-0 bg-black/45 group-hover/play:bg-black/25 transition-colors duration-300" />

                {/* Play button + label */}
                <div className="relative flex flex-col items-center gap-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#a8201a] flex items-center justify-center shadow-[0_0_50px_rgba(168,32,26,0.55)] group-hover/play:scale-110 group-hover/play:shadow-[0_0_90px_rgba(168,32,26,0.9)] transition-all duration-300">
                    <Play fill="white" className="text-white ml-1.5" size={36} />
                  </div>
                  <span className="text-white/75 text-[10px] sm:text-xs uppercase tracking-[0.35em] font-semibold">
                    Watch the Class
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Below video strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-8 border-t border-white/10 gap-5">
          <p className="text-gray-600 text-[10px] sm:text-xs uppercase tracking-[0.25em]">
            DKK London · Okinawan Goju Ryu
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#a8201a] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#c62828] transition-colors duration-200 rounded-sm flex-shrink-0"
          >
            Start Training <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
