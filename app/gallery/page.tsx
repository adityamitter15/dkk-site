import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";
import GalleryFilter from "@/components/GalleryFilter";
import type { GalleryImage } from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from DKK London. Training, gradings, summer camps and members of Daigaku Karate Kai.",
};

const images: GalleryImage[] = [
  // ── Shihan ──────────────────────────────────────────────
  { src: "/images/GavPortrait.jpg",         alt: "Shihan Gavin Mulholland - portrait",      caption: "Shihan Gavin Mulholland · 7th Dan",   tall: true,  category: "Shihan" },
  { src: "/images/GavPunch.jpg",            alt: "Shihan Gavin Mulholland",                  caption: "Shihan Mulholland - technique",        tall: false, category: "Shihan" },
  { src: "/images/GavThrowDom.jpg",         alt: "Shihan Mulholland - throwing",             caption: "Nage Waza - throwing technique",       tall: false, category: "Shihan" },
  { src: "/images/Training/shihan-technique.JPG", alt: "Shihan demonstrating technique",     caption: "Shihan Mulholland - technique",        tall: false, category: "Shihan" },
  { src: "/images/Training/self-defence-demo.JPG", alt: "Self-defence demonstration",        caption: "Self-Defence - Real Application",      tall: false, category: "Shihan" },
  { src: "/images/Chishi2.jpg",             alt: "Chishi training",                          caption: "Hojo Undo - traditional conditioning", tall: false, category: "Shihan" },

  // ── Training ─────────────────────────────────────────────
  { src: "/images/Training/padwork-overhead.jpg",   alt: "Pad work training - overhead view", caption: "Pad Work - In the Dojo",           tall: false, category: "Training" },
  { src: "/images/Club/dojo-full-class.JPG",        alt: "Full dojo class in session",         caption: "Full Class - University of Westminster", tall: false, category: "Training" },
  { src: "/images/Training/class-kata-aerial.JPG",  alt: "Class kata from above",              caption: "Kata Training - Aerial View",      tall: false, category: "Training" },

  // ── Grading ──────────────────────────────────────────────
  { src: "/images/Grading/bo-staff-intense.JPG",   alt: "Bo staff kata performance",          caption: "Weapons Kata - Bo Staff",          tall: true,  category: "Grading" },
  { src: "/images/Grading/kata-trio.JPG",           alt: "Three students performing kata",     caption: "Team Kata - Grading",              tall: false, category: "Grading" },
  { src: "/images/Grading/woman-bo-staff.JPG",      alt: "Woman performing bo staff kata",     caption: "Weapons - Bo Staff Kata",          tall: true,  category: "Grading" },
  { src: "/images/Grading/womens-sparring.JPG",     alt: "Women's sparring",                   caption: "Women's Kumite",                   tall: false, category: "Grading" },
  { src: "/images/Grading/grappling-takedown.JPG",  alt: "Grappling takedown",                 caption: "Grappling - Takedown",             tall: false, category: "Grading" },
  { src: "/images/Grading/sparring-action.JPG",     alt: "Sparring at grading",                caption: "Black Belt Kumite",                tall: false, category: "Grading" },
  { src: "/images/Grading/kata-performance.JPG",    alt: "Kata performance at grading",        caption: "Kata Performance",                 tall: true,  category: "Grading" },
  { src: "/images/Grading/kata-punch.JPG",          alt: "Kata punch technique",               caption: "Kata - Power and Precision",       tall: true,  category: "Grading" },
  { src: "/images/Club/medal-montage.JPG",          alt: "Competition medal winners",          caption: "Medal Winners",                    tall: false, category: "Grading" },

  // ── Summer Camp ──────────────────────────────────────────
  { src: "/images/Camp/summer-camp-group.JPG",      alt: "Summer camp group photo",            caption: "Summer Camp - Group Photo",        tall: false, category: "Summer Camp" },
  { src: "/images/Camp/outdoor-kata-dynamic.JPG",   alt: "Outdoor kata at summer camp",        caption: "Summer Camp - Outdoor Kata",       tall: false, category: "Summer Camp" },
  { src: "/images/Camp/bo-staff-sunflare.JPG",      alt: "Bo staff training at sunrise",       caption: "Weapons Training - Sunrise",       tall: false, category: "Summer Camp" },
  { src: "/images/Camp/obstacle-crawl.JPG",         alt: "Obstacle course at camp",            caption: "Summer Camp - Obstacle Course",    tall: false, category: "Summer Camp" },
  { src: "/images/Camp/pushups-outdoors.JPG",       alt: "Outdoor conditioning",               caption: "Conditioning - Summer Camp",       tall: false, category: "Summer Camp" },
  { src: "/images/Camp/women-trees-lineup.JPG",     alt: "Women lined up at camp",             caption: "Summer Camp - Women's Session",    tall: false, category: "Summer Camp" },
  { src: "/images/Camp/grading-certificates.JPG",   alt: "Students with grading certificates", caption: "Summer Camp Grading",              tall: false, category: "Summer Camp" },
  { src: "/images/Camp/black-belts-fists.JPG",      alt: "Black belts at camp",                caption: "Black Belts - Summer Camp",        tall: false, category: "Summer Camp" },
  { src: "/images/Camp/summer-camp-panoramic.JPG",  alt: "Summer camp panoramic",              caption: "Summer Camp - Panoramic",          tall: false, category: "Summer Camp" },
  { src: "/images/Club/vintage-1980s.JPG",          alt: "DKK group photo",                    caption: "DKK London",                       tall: false, category: "Summer Camp" },

  // ── DKK Fighters ─────────────────────────────────────────
  { src: "/images/Fighters/dkk.jpg",                alt: "DKK Fighters",                       caption: "DKK Fighters",                     tall: false, category: "DKK Fighters" },

  // ── Yudansha ─────────────────────────────────────────────
  { src: "/images/Yudansha/Tundepot.gif",           alt: "Tunde Oladimeji portrait",           caption: "Tunde Oladimeji · 5th Dan",        tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/tundeact.gif",           alt: "Tunde Oladimeji",                    caption: "Tunde Oladimeji - 5th Dan",        tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/davepot.gif",            alt: "David Urquhart portrait",            caption: "David Urquhart · 4th Dan",         tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/daveact.gif",            alt: "David Urquhart",                     caption: "David Urquhart - 4th Dan",         tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/simon_clinch1.jpg",      alt: "Simon Clinch",                       caption: "Simon Clinch - 4th Dan",           tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/simon_clinch2.jpg",      alt: "Simon Clinch action",                caption: "Simon Clinch",                     tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/juha1.jpg",              alt: "Juha Makinen",                       caption: "Juha Makinen - 3rd Dan",           tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/juha2.jpg",              alt: "Juha Makinen action",                caption: "Juha Makinen - training",          tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/laila.jpeg",             alt: "Laila Al-Minyawi",                   caption: "Laila Al-Minyawi - 3rd Dan",       tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/ragi1.jpeg",             alt: "Ragi Marmar",                        caption: "Ragi Marmar - 4th Dan",            tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/ragi2.jpeg",             alt: "Ragi Marmar action",                 caption: "Ragi Marmar - training",           tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/mike_website1.jpg",      alt: "Mike Thornton",                      caption: "Mike Thornton - 3rd Dan",          tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/mike_website2.jpg",      alt: "Mike Thornton action",               caption: "Mike Thornton - kumite",           tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/sidney1.jpg",            alt: "Sidney Ushurhe",                     caption: "Sidney Ushurhe - 1st Dan",         tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/sidney2.jpg",            alt: "Sidney Ushurhe action",              caption: "Sidney Ushurhe - kumite",          tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/luke.jpg",               alt: "Luke Wilcox",                        caption: "Luke Wilcox - 2nd Dan",            tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/catherine1.jpg",         alt: "Catherine Sandwell",                 caption: "Catherine Sandwell - 2nd Dan",     tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/catherine2.jpg",         alt: "Catherine Sandwell action",          caption: "Catherine Sandwell - kumite",      tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/miki1.jpg",              alt: "Mizuki Murai",                       caption: "Mizuki Murai - 2nd Dan",           tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/miki2.jpg",              alt: "Mizuki Murai action",                caption: "Mizuki Murai - training",          tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/danny2.jpg",             alt: "Daniel Bard",                        caption: "Daniel Bard - 3rd Dan",            tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/rich.jpg",               alt: "Richard Gaillard",                   caption: "Richard Gaillard - 3rd Dan",       tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/ak_kata.jpeg",           alt: "Alexey Kryazhev - kata",             caption: "Kata Training",                    tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/ak_kata2.jpeg",          alt: "Alexey Kryazhev - kata 2",           caption: "Kata Training",                    tall: false, category: "Yudansha" },
  { src: "/images/Alumni/karen.jpg",                alt: "Karen Sheldon",                      caption: "Karen Sheldon - 3rd Dan",          tall: true,  category: "Yudansha" },
  { src: "/images/Alumni/mark.gif",                 alt: "Mark Salomone",                      caption: "Mark Salomone - 3rd Dan (DKK Torbay)", tall: true, category: "Yudansha" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0">
          <SafeImage src="/images/Camp/outdoor-kata-dynamic.JPG" alt="" fill className="object-cover object-center opacity-25" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#a8201a]" />
            Photos
          </p>
          <h1 className="font-['Bebas_Neue'] text-7xl sm:text-8xl lg:text-[9rem] text-white tracking-wide leading-none mb-4">Gallery</h1>
          <p className="text-gray-300 text-lg max-w-lg font-light leading-relaxed">Training, camps, gradings and members of DKK London.</p>
        </div>
      </section>

      <section className="py-16 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-3">
            <SectionHeading eyebrow="Photos" title="In the Dojo" />
          </div>
          <p className="text-gray-500 text-sm -mt-8 mb-8">Click any photo to view full size. Use the filters to browse by category.</p>
          <GalleryFilter images={images} />
          <p className="text-gray-600 text-sm text-center mt-10">
            If you have photos from DKK sessions to contribute, please get in touch.
          </p>
        </div>
      </section>
    </>
  );
}
