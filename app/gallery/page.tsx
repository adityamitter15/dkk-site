import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid, { type GalleryImage } from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from DKK London — training, events, and members of Daigaku Karate Kai.",
};

const albums = ["DKK Fighters","Four Shades of Black","Kyoshi Roberts","Outdoor Training","Practical Karate","Sonia Klug","Summer School","Winter Camp"];

const images: GalleryImage[] = [
  { src: "/images/GavPortrait.jpg", alt: "Shihan Gavin Mulholland — portrait", caption: "Shihan Gavin Mulholland · 7th Dan", tall: true },
  { src: "/images/GavPunch.jpg", alt: "Shihan Gavin Mulholland", caption: "Shihan Mulholland — technique", tall: false },
  { src: "/images/Gavheadlock4.jpg", alt: "Shihan Mulholland — grappling", caption: "Close-quarter grappling", tall: false },
  { src: "/images/GavThrowDom.jpg", alt: "Shihan Mulholland — throwing", caption: "Nage Waza — throwing technique", tall: false },
  { src: "/images/Chishi2.jpg", alt: "Chishi training", caption: "Hojo Undo — traditional conditioning", tall: false },
  { src: "/images/Fighters/dkk.jpg", alt: "DKK Fighters", caption: "DKK Fighters", tall: false },
  { src: "/images/Yudansha/tundeact.gif", alt: "Tunde Oladimeji", caption: "Tunde Oladimeji — 5th Dan", tall: false },
  { src: "/images/Yudansha/daveact.gif", alt: "David Urquhart", caption: "David Urquhart — 4th Dan", tall: false },
  { src: "/images/Yudansha/Tundepot.gif", alt: "Tunde Oladimeji portrait", caption: "Tunde Oladimeji", tall: true },
  { src: "/images/Yudansha/davepot.gif", alt: "David Urquhart portrait", caption: "David Urquhart", tall: true },
  { src: "/images/Yudansha/simon_clinch1.jpg", alt: "Simon Clinch", caption: "Simon Clinch — 4th Dan", tall: true },
  { src: "/images/Yudansha/simon_clinch2.jpg", alt: "Simon Clinch action", caption: "Simon Clinch", tall: false },
  { src: "/images/Yudansha/ak_kata.jpeg", alt: "Alexey Kryazhev — kata", caption: "Kata Training", tall: false },
  { src: "/images/Yudansha/ak_kata2.jpeg", alt: "Alexey Kryazhev — kata 2", caption: "Kata Training", tall: false },
  { src: "/images/Yudansha/juha1.jpg", alt: "Juha Makinen", caption: "Juha Makinen — 3rd Dan", tall: true },
  { src: "/images/Yudansha/laila.jpeg", alt: "Laila Al-Minyawi", caption: "Laila Al-Minyawi — 3rd Dan", tall: true },
  { src: "/images/Yudansha/ragi1.jpeg", alt: "Ragi Marmar", caption: "Ragi Marmar — 4th Dan", tall: false },
  { src: "/images/Yudansha/mike_website1.jpg", alt: "Mike Thornton", caption: "Mike Thornton — 3rd Dan", tall: true },
  { src: "/images/Yudansha/sidney1.jpg", alt: "Sidney Ushurhe", caption: "Sidney Ushurhe — 1st Dan", tall: false },
  { src: "/images/Yudansha/luke.jpg", alt: "Luke Wilcox", caption: "Luke Wilcox — 1st Dan", tall: true },
  { src: "/images/Yudansha/catherine1.jpg", alt: "Catherine Sandwell", caption: "Catherine Sandwell — 2nd Dan", tall: true },
  { src: "/images/Yudansha/miki1.jpg", alt: "Mizuki Murai", caption: "Mizuki Murai — 2nd Dan", tall: true },
  { src: "/images/Yudansha/danny2.jpg", alt: "Daniel Bard", caption: "Daniel Bard — 3rd Dan", tall: false },
  { src: "/images/Yudansha/rich.jpg", alt: "Richard Gaillard", caption: "Richard Gaillard — 3rd Dan", tall: true },
  { src: "/images/Yudansha/juha2.jpg", alt: "Juha Makinen action", caption: "Juha Makinen — training", tall: false },
  { src: "/images/Yudansha/catherine2.jpg", alt: "Catherine Sandwell action", caption: "Catherine Sandwell — kumite", tall: false },
  { src: "/images/Yudansha/miki2.jpg", alt: "Mizuki Murai action", caption: "Mizuki Murai — training", tall: false },
  { src: "/images/Yudansha/mike_website2.jpg", alt: "Mike Thornton action", caption: "Mike Thornton — kumite", tall: false },
  { src: "/images/Yudansha/ragi2.jpeg", alt: "Ragi Marmar action", caption: "Ragi Marmar — training", tall: false },
  { src: "/images/Yudansha/sidney2.jpg", alt: "Sidney Ushurhe action", caption: "Sidney Ushurhe — kumite", tall: false },
  { src: "/images/Alumni/karen.jpg", alt: "Karen Sheldon", caption: "Karen Sheldon — 3rd Dan", tall: true },
  { src: "/images/Alumni/mark.gif", alt: "Mark Salomone", caption: "Mark Salomone — 3rd Dan (DKK Torbay)", tall: true },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_50%,_#1a0000_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c0392b]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#c0392b] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#c0392b]" />
            Photos
          </p>
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-6">Gallery</h1>
          <div className="w-16 h-1 bg-[#c0392b]" />
        </div>
      </section>

      {/* Albums */}
      <section className="py-10 bg-[#0d0d0d] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c0392b] text-xs font-bold uppercase tracking-[0.2em] mb-4">Photo Albums</p>
          <div className="flex flex-wrap gap-2">
            {albums.map((album) => (
              <span key={album} className="px-3 py-1.5 bg-[#111] border border-white/10 text-gray-300 text-xs font-medium uppercase tracking-wider rounded-sm">
                {album}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Members & Training" title="In the Dojo" />
          <p className="text-gray-500 text-sm mb-8">Click any photo to view full size and browse the collection.</p>
          <GalleryGrid images={images} />
          <p className="text-gray-600 text-sm text-center mt-10">
            Full photo albums available on request. If you have photos from DKK sessions to contribute, please get in touch.
          </p>
        </div>
      </section>
    </>
  );
}
