"use client";

import SafeImage from "@/components/SafeImage";

const lineage = [
  { name: "Chojun Miyagi", desc: "Founder of Goju Ryu" },
  { name: "Ei\u2019ichi Miyazato", desc: "Jundokan \u00b7 Okinawa" },
  { name: "Kim Roberts", desc: "Kyoshi \u00b7 OMAA" },
  { name: "Gavin Mulholland", desc: "Shihan \u00b7 7th Dan \u00b7 DKK London" },
];

function Arrow({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex justify-center py-2">
        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" className="text-[#a8201a]">
          <line x1="8" y1="0" x2="8" y2="22" stroke="currentColor" strokeWidth="2" />
          <path d="M3 18 L8 26 L13 18" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex items-center px-1">
      <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="text-[#a8201a]">
        <line x1="0" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="2" />
        <path d="M20 3 L28 8 L20 13" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}

export default function LineageChain() {
  return (
    <div>
      {/* Desktop: horizontal */}
      <div className="hidden lg:flex items-stretch justify-center">
        {lineage.map((person, i) => {
          const isLast = i === lineage.length - 1;
          return (
            <div key={person.name} className="flex items-center">
              <div
                className={`px-5 py-4 bg-[#141311] border rounded-sm text-center min-w-[150px] ${
                  isLast
                    ? "border-[#a8201a] shadow-[0_0_20px_-4px_rgba(168,32,26,0.4)]"
                    : "border-white/10"
                }`}
              >
                <p className="font-['Bebas_Neue'] text-lg tracking-wide text-white leading-tight">
                  {person.name}
                </p>
                <p className="text-gray-500 text-[11px] mt-1 leading-snug">{person.desc}</p>
              </div>
              {!isLast && <Arrow />}
            </div>
          );
        })}
      </div>

      {/* Mobile / Tablet: vertical */}
      <div className="flex lg:hidden flex-col items-center">
        {lineage.map((person, i) => {
          const isLast = i === lineage.length - 1;
          return (
            <div key={person.name} className="flex flex-col items-center">
              <div
                className={`px-6 py-4 bg-[#141311] border rounded-sm text-center w-64 ${
                  isLast
                    ? "border-[#a8201a] shadow-[0_0_20px_-4px_rgba(168,32,26,0.4)]"
                    : "border-white/10"
                }`}
              >
                <p className="font-['Bebas_Neue'] text-xl tracking-wide text-white leading-tight">
                  {person.name}
                </p>
                <p className="text-gray-500 text-xs mt-1 leading-snug">{person.desc}</p>
              </div>
              {!isLast && <Arrow vertical />}
            </div>
          );
        })}
      </div>

      {/* DKK Branches - Mulholland & Lewis */}
      <div className="mt-10 max-w-3xl mx-auto">
        <p className="text-center text-[#c9a96e] text-[10px] font-bold uppercase tracking-[0.3em] mb-5">DKK Branches</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              name: "Shihan Gavin Mulholland",
              desc: "DKK London \u00b7 7th Dan",
              src: "/images/GavPortrait.jpg",
            },
            {
              name: "Shihan Dan Lewis",
              desc: "DKK Bristol \u00b7 Combat Goju Ryu",
              src: "/images/dan_lewis.jpg",
            },
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-4 p-3 bg-[#141311] border border-white/10 rounded-sm">
              <div className="relative w-14 h-14 rounded-sm overflow-hidden bg-[#0f0e0c] flex-shrink-0">
                <SafeImage src={p.src} alt={p.name} fill className="object-cover object-top" />
              </div>
              <div>
                <p className="text-white font-['Bebas_Neue'] text-lg tracking-wide leading-tight">{p.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
