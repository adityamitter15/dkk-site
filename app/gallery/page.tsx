import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import GalleryFilter from "@/components/GalleryFilter";
import type { GalleryImage } from "@/components/GalleryLightbox";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CTABand from "@/components/ui/CTABand";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Karate Photos - Training, Camps and Gradings",
  description: "Photos from DKK London. Training, gradings, tournaments, summer camps and members of Daigaku Karate Kai.",
  alternates: { canonical: "/gallery" },
  openGraph: { images: ["/og/gallery.jpg"] },
  twitter: { images: ["/og/gallery.jpg"] },
};

const images: GalleryImage[] = [
  // ── Shihan ──────────────────────────────────────────────
  { src: "/images/Shihan/shihan-portrait-black.jpg", alt: "Shihan Gavin Mulholland - studio portrait", caption: "Shihan Gavin Mulholland · 7th Dan",   tall: true,  category: "Shihan" },
  { src: "/images/Shihan/shihan-kuwa-black.jpg",     alt: "Shihan with shillelagh",                   caption: "Shillelagh - Irish fighting stick",           tall: true,  category: "Shihan" },
  { src: "/images/Shihan/shihan-bo-black.jpg",       alt: "Shihan with bo staff",                     caption: "Bo - six-foot staff",                  tall: true,  category: "Shihan" },
  { src: "/images/Shihan/shihan-tanto-black.jpg",    alt: "Shihan with tanto",                        caption: "Tanto - short blade",                  tall: false, category: "Shihan" },
  { src: "/images/Shihan/shihan-forest-kick.jpg",    alt: "Shihan high kick outdoors",                caption: "Shihan - High Kick",                   tall: true,  category: "Shihan" },
  { src: "/images/Shihan/shihan-outdoor-instruction-bw.jpg", alt: "Shihan instructing outdoors",      caption: "Open-Air Instruction",                 tall: false, category: "Shihan" },
  { src: "/images/Shihan/shihan-bo-instruction-bw.jpg", alt: "Shihan teaching bo",                    caption: "Bo Instruction",                       tall: false, category: "Shihan" },
  { src: "/images/GavPortrait.jpg",         alt: "Shihan Gavin Mulholland - portrait",      caption: "Shihan Gavin Mulholland · 7th Dan",   tall: true,  category: "Shihan" },
  { src: "/images/GavPunch.jpg",            alt: "Shihan Gavin Mulholland",                  caption: "Shihan Mulholland - technique",        tall: false, category: "Shihan" },
  { src: "/images/GavThrowDom.jpg",         alt: "Shihan Mulholland - throwing",             caption: "Nage Waza - throwing technique",       tall: false, category: "Shihan" },
  { src: "/images/Training/shihan-technique.JPG", alt: "Shihan at black belt kata camp",     caption: "Shihan - Black Belt Kata Camp",        tall: false, category: "Shihan" },
  { src: "/images/Training/self-defence-demo.JPG", alt: "Self-defence demonstration",        caption: "Self-Defence - Real Application",      tall: false, category: "Shihan" },
  { src: "/images/Chishi2.jpg",             alt: "Chishi training",                          caption: "Hojo Undo - traditional conditioning", tall: false, category: "Shihan" },
  { src: "/images/Shihan/Archive/shihan-flying-kick-90s.jpg", alt: "Young Shihan flying kick",      caption: "Shihan - Archive",                     tall: false, category: "Shihan" },
  { src: "/images/Shihan/Archive/shihan-young-headlock.jpg",    alt: "Young Shihan control technique", caption: "Shihan - Archive",                    tall: true,  category: "Shihan" },
  { src: "/images/Shihan/Archive/shihan-young-technique.jpg",   alt: "Young Shihan technique",        caption: "Shihan - Archive",                     tall: true,  category: "Shihan" },

  // ── Training ─────────────────────────────────────────────
  { src: "/images/Training/padwork-overhead.jpg",   alt: "Mass drill class in session",        caption: "Mass Drill - Kihon",                tall: false, category: "Training" },
  { src: "/images/Club/dojo-full-class.JPG",        alt: "Full dojo class in session",         caption: "Full Class - University of Westminster", tall: false, category: "Training" },
  { src: "/images/Site/archive-class-group-bo-rack.jpg", alt: "Archive photograph of a full DKK class in the dojo, bo staffs racked on the wall behind", caption: "Archive - The Full Class", tall: false, category: "Training" },
  { src: "/images/Site/archive-pcl-karate-club.jpg", alt: "P.C.L. Karate Club group photograph from the club&apos;s earliest days at the Polytechnic of Central London", caption: "Archive - P.C.L. Karate Club", tall: false, category: "Training" },
  { src: "/images/Training/class-kata-aerial.JPG",  alt: "Class kata from above",              caption: "Kata Training - Aerial View",      tall: false, category: "Training" },
  { src: "/images/Training/course-kumite-dynamic.jpg", alt: "Dynamic kumite on course",         caption: "Kumite - High Kick",                tall: false, category: "Training" },
  { src: "/images/Training/course-kumite-orange-belts.jpg", alt: "Course kumite with orange belts", caption: "Course Kumite",                   tall: false, category: "Training" },
  { src: "/images/Training/course-womens-kumite.jpg", alt: "Women's kumite with mitts",         caption: "Women's Kumite - Mitts",           tall: false, category: "Training" },
  { src: "/images/Training/kneeling-defence-drill.jpg", alt: "Kneeling defence drill",          caption: "Self-Defence Drill",                tall: false, category: "Training" },
  { src: "/images/Training/kumite-high-kick.jpg",    alt: "Kumite with high kick",             caption: "Kumite - Dramatic Exchange",       tall: false, category: "Training" },
  { src: "/images/Training/grapple-top-control.jpg", alt: "Grappling top control",             caption: "Grappling - Top Control",           tall: false, category: "Training" },
  { src: "/images/Club/black-gi-candid.jpg",        alt: "Black gi candid in dojo",            caption: "Dojo Candid",                       tall: false, category: "Training" },
  { src: "/images/Club/outdoor-boxing-pair.jpg",    alt: "Outdoor training pair",              caption: "Outdoor Training Pair",             tall: false, category: "Training" },
  { src: "/images/Club/primrose-hill-skyline.jpg",  alt: "Primrose Hill skyline group",        caption: "Primrose Hill - Team",              tall: false, category: "Training" },
  { src: "/images/Club/weapons-group-black-gi.jpg", alt: "Weapons group in black gi",          caption: "Weapons - Group Pose",              tall: false, category: "Training" },

  // ── Grading ──────────────────────────────────────────────
  { src: "/images/Grading/bo-staff-intense.JPG",   alt: "Bo staff kata performance",          caption: "Weapons Kata - Bo Staff",          tall: true,  category: "Grading" },
  { src: "/images/Grading/kata-trio.JPG",           alt: "Three students performing kata",     caption: "Team Kata - Grading",              tall: false, category: "Grading" },
  { src: "/images/Grading/woman-bo-staff.JPG",      alt: "Woman performing bo staff kata",     caption: "Weapons - Bo Staff Kata",          tall: true,  category: "Grading" },
  { src: "/images/Grading/womens-sparring.JPG",     alt: "Women's sparring",                   caption: "Women's Kumite",                   tall: false, category: "Grading" },
  { src: "/images/Grading/grappling-takedown.JPG",  alt: "Grappling takedown",                 caption: "Grappling - Takedown",             tall: false, category: "Grading" },
  { src: "/images/Grading/sparring-action.JPG",     alt: "Sparring at grading",                caption: "Black Belt Kumite",                tall: false, category: "Grading" },
  { src: "/images/Grading/kata-punch.JPG",          alt: "Kata punch technique",               caption: "Kata - Power and Precision",       tall: true,  category: "Grading" },
  { src: "/images/Club/medal-montage.JPG",          alt: "Competition medal winners",          caption: "Medal Winners",                    tall: false, category: "Grading" },
  { src: "/images/Tournament/bo-kata-demonstration.jpg",         alt: "Bo kata demonstration",              caption: "Bo Kata - Precision and Power",    tall: false, category: "Grading" },
  { src: "/images/Tournament/yudansha-grading-certificates.jpg", alt: "Yudansha with grading certificates", caption: "Grading Achievements",             tall: false, category: "Grading" },
  { src: "/images/Training/grappling-side-control.jpg",         alt: "Grappling - side control",           caption: "Grappling - Side Control",          tall: false, category: "Grading" },
  { src: "/images/Training/grappling-ground-control.jpg",       alt: "Grappling - ground control",         caption: "Grappling - Ground Work",           tall: false, category: "Grading" },
  { src: "/images/Grading/throw-crowd-watching.jpg",             alt: "Throw with crowd watching",          caption: "Nage Waza - Centre Stage",          tall: false, category: "Grading" },
  { src: "/images/Grading/sanchin-kata-demo.jpg",                alt: "Sanchin kata demonstration",         caption: "Sanchin - Foundation Kata",         tall: true,  category: "Grading" },
  { src: "/images/Grading/ready-stance-kata.jpg",                alt: "Kata ready stance",                 caption: "Kata - Ready Stance",               tall: true,  category: "Grading" },
  { src: "/images/Grading/eku-kata-simon-kluth.jpg",             alt: "Simon Kluth performing an eku (Okinawan oar) kata at the tournament", caption: "Eku Kata - Simon Kluth",           tall: true,  category: "Tournament" },
  { src: "/images/Grading/grading-certificates-duo.jpg",         alt: "Two students with grading certificates", caption: "New Grades - Certificates",    tall: false, category: "Grading" },

  // ── Camps (Summer & Winter) ──────────────────────────────
  { src: "/images/Camp/summer-camp-group.JPG",      alt: "Winter camp group photo",            caption: "Winter Camp - Group Photo",        tall: false, category: "Camps" },
  { src: "/images/Camp/outdoor-kata-dynamic.JPG",   alt: "Outdoor kata at summer camp",        caption: "Summer Camp - Outdoor Kata",       tall: false, category: "Camps" },
  { src: "/images/Camp/bo-staff-sunflare.JPG",      alt: "Bo staff training at winter camp",   caption: "Winter Camp - Weapons Training",   tall: false, category: "Camps" },
  { src: "/images/Camp/obstacle-crawl.JPG",         alt: "Obstacle course at camp",            caption: "Summer Camp - Obstacle Course",    tall: false, category: "Camps" },
  { src: "/images/Camp/pushups-outdoors.JPG",       alt: "Outdoor conditioning",               caption: "Conditioning - Summer Camp",       tall: false, category: "Camps" },
  { src: "/images/Camp/grading-certificates.JPG",   alt: "Students with grading certificates", caption: "Summer Camp Grading",              tall: false, category: "Camps" },
  { src: "/images/Camp/black-belts-fists.JPG",      alt: "Black belts at camp",                caption: "Black Belts - Summer Camp",        tall: false, category: "Camps" },
  { src: "/images/Camp/summer-camp-panoramic.JPG",  alt: "Summer camp panoramic",              caption: "Summer Camp - Panoramic",          tall: false, category: "Camps" },
  { src: "/images/Club/vintage-1980s.JPG",          alt: "DKK group photo",                    caption: "DKK London",                       tall: false, category: "Camps" },
  { src: "/images/Camp/camp-padwork-outdoor.jpg",   alt: "Outdoor padwork",                    caption: "Padwork - Open Air",                tall: false, category: "Camps" },
  { src: "/images/Camp/camp-lineup-trees.jpg",      alt: "Camp lineup under trees",            caption: "Summer Camp - Under the Trees",    tall: false, category: "Camps" },
  { src: "/images/Camp/camp-post-training-pair.jpg", alt: "Post training pair at camp",        caption: "After Training",                    tall: false, category: "Camps" },
  { src: "/images/Camp/shihan-stick-training-unidentified.jpg", alt: "Shihan Gavin Mulholland with a stick, mid-technique at camp", caption: "Shihan - Stick Training", tall: true, category: "Camps" },
  { src: "/images/Camp/camp-board-break-intense.jpg", alt: "Board break at camp",              caption: "Board Break - Summer Camp",         tall: false, category: "Camps" },
  { src: "/images/Camp/archive-summer-school-stick-work.jpg",    alt: "Stick work at an early DKK summer school",          caption: "Early Summer School - Stick Work",    tall: false, category: "Camps" },
  { src: "/images/Camp/archive-summer-school-knife-defence.jpg", alt: "Knife defence drill at an early DKK summer school", caption: "Early Summer School - Knife Defence", tall: true,  category: "Camps" },
  { src: "/images/Camp/nidan-lineup-woods.jpg",                   alt: "Grading line-up in the woods at Summer Camp",       caption: "Grading Line-Up",                     tall: false, category: "Camps" },
  { src: "/images/Camp/camp-certificate-black-gi.jpg",            alt: "Grading certificate presented at Summer Camp",      caption: "Grading Certificate",                 tall: true,  category: "Camps" },
  { src: "/images/Camp/camp-dan-certificate-pair.jpg",            alt: "Two members at Summer Camp, one holding a newly awarded DKK dan grade certificate", caption: "Certificate Day - Summer Camp",       tall: true,  category: "Camps" },
  { src: "/images/Camp/camp-two-black-belts.jpg",                 alt: "Two black belts at Summer Camp",                    caption: "Black Belts at Camp",                 tall: true,  category: "Camps" },
  { src: "/images/Camp/camp-group-under-trees.jpg",               alt: "Members gathered under the trees at Summer Camp",   caption: "Under the Trees",                     tall: true,  category: "Camps" },
  { src: "/images/Camp/camp-women-black-belts.jpg",               alt: "Women black belts at Summer Camp",                  caption: "Women of DKK",                        tall: false, category: "Camps" },

  // ── 30 Man Kumite - goes under Grading ───────────────────
  { src: "/images/Camp/women-trees-lineup.JPG",     alt: "30 Man Kumite lineup - woman's",     caption: "30 Man Kumite - Fight Lineup (Woman's)", tall: false, category: "Grading" },
  { src: "/images/Camp/camp-standing-group.jpg",    alt: "30 Man Kumite gathering",            caption: "30 Man Kumite",                    tall: false, category: "Grading" },

  // ── DKK Fighters ─────────────────────────────────────────
  { src: "/images/Fighters/dkk.jpg",                           alt: "DKK Fighters",                     caption: "DKK Fighters",                    tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/neil-grove-victory-cage.jpg",       alt: "Neil Grove victory in cage",       caption: "Neil Grove - Victory",            tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/neil-grove-title-portrait.jpg",     alt: "Neil Grove with British title belt", caption: "UCMMA British Heavyweight Title",  tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/neil-grove-belts-crew.jpg",         alt: "DKK crew with title belts",         caption: "The Belts Come Home",             tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/neil-grove-walkout.jpg",            alt: "Neil Grove walkout",                caption: "Walkout",                         tall: true,  category: "DKK Fighters" },
  { src: "/images/Fighters/neil-grove-portrait-mulholland.jpg", alt: "Neil Grove and Shihan Mulholland", caption: "Grove & Mulholland",              tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/shola-adeniran-victory.jpg",        alt: "Shola Adeniran wins by TKO at UWC", caption: "Shola Adeniran - UWC Victory",    tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/edge-back-patch.jpg",               alt: "Edge walking out - DKK patch",      caption: "Edge - Walkout",                  tall: true,  category: "DKK Fighters" },
  { src: "/images/Fighters/edge-hand-raised.jpg",              alt: "Edge hand raised in victory",      caption: "Edge - Hand Raised",              tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/edge-cage-victory.jpg",             alt: "Edge cage victory",                 caption: "Edge - In the Cage",              tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/domagoj-wembley-2007.jpg",          alt: "Wembley September 2007",            caption: "Wembley - September 2007",        tall: false, category: "DKK Fighters" },

  // ── Tournament ───────────────────────────────────────────
  { src: "/images/Tournament/kumite-black-white-action.jpg",     alt: "Kumite in black and white",              caption: "The Art of Combat",                      tall: false, category: "Tournament" },
  { src: "/images/Tournament/sparring-women-dynamic.jpg",        alt: "Women's sparring",                       caption: "Women's Kumite",                         tall: false, category: "Tournament" },
  { src: "/images/Tournament/senior-kumite-faceoff.jpg",         alt: "Senior black belts squaring off",        caption: "Senior Kumite - Face Off",               tall: false, category: "Tournament" },
  { src: "/images/Tournament/kumite-sparring-medals.jpg",        alt: "Kumite with medals visible",             caption: "Competing for Medals",                   tall: false, category: "Tournament" },
  { src: "/images/Tournament/grappling-with-referee.jpg",        alt: "Grappling takedown with referee",        caption: "Grappling - Takedown",                   tall: false, category: "Tournament" },
  { src: "/images/Tournament/ground-fight-wide-crowd.jpg",       alt: "Ground fight with crowd surrounding",    caption: "Ground Fight - Centre Stage",            tall: false, category: "Tournament" },
  { src: "/images/Tournament/sensei-mae-geri-pads.jpg",          alt: "Sensei front kick on pads",              caption: "Leading by Example - Mae Geri",          tall: true,  category: "Tournament" },
  { src: "/images/Tournament/team-group-fun.jpg",                alt: "Team group fun photo",                   caption: "More Than a Dojo",                       tall: false, category: "Tournament" },
  { src: "/images/Tournament/senior-blackbelts-modern-dojo.jpg", alt: "Senior black belts at modern dojo",      caption: "Senior Black Belts",                     tall: false, category: "Tournament" },

  // ── Awards ───────────────────────────────────────────────
  { src: "/images/Awards/uwsu-award-111.jpg", alt: "DKK London at the UWSU Awards 25/26", caption: "UWSU Awards Night - DKK London", tall: false, category: "Awards" },
  { src: "/images/Awards/uwsu-award-90.jpg",  alt: "Group portrait at UWSU Awards",        caption: "UWSU Awards Night - Crew",        tall: false, category: "Awards" },
  { src: "/images/Awards/uwsu-award-290.jpg", alt: "On-stage at UWSU Awards",              caption: "UWSU Awards - On Stage",          tall: false, category: "Awards" },

  // ── Yudansha ─────────────────────────────────────────────
  { src: "/images/Yudansha/Tundepot.gif",           alt: "Tunde Oladimeji portrait",           caption: "Tunde Oladimeji · 5th Dan",        tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/tundeact.gif",           alt: "Tunde Oladimeji",                    caption: "Tunde Oladimeji - 5th Dan",        tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/davepot.gif",            alt: "David Urquhart portrait",            caption: "David Urquhart · 4th Dan",         tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/daveact.gif",            alt: "David Urquhart",                     caption: "David Urquhart - 4th Dan",         tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/simon_clinch_studio.jpg", alt: "Simon Clinch studio portrait",      caption: "Simon Clinch - 4th Dan",           tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/simon_clinch_weapons.jpg", alt: "Simon Clinch teaching weapons",     caption: "Simon Clinch - Weapons Instruction", tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/simon_clinch_kick.jpg",   alt: "Simon Clinch high kick",             caption: "Simon Clinch - Kick",              tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/tunde_sai.jpg",          alt: "Tunde Oladimeji with sai",            caption: "Tunde Oladimeji - Sai Kata",       tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/juha1.jpg",              alt: "Juha Makinen",                       caption: "Juha Makinen - 3rd Dan",           tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/juha2.jpg",              alt: "Juha Makinen action",                caption: "Juha Makinen - training",          tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/laila.jpeg",             alt: "Laila Al-Minyawi",                   caption: "Laila Al-Minyawi - 3rd Dan",       tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/ragi1.jpeg",             alt: "Ragi Marmar",                        caption: "Ragi Marmar - 4th Dan",            tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/ragi2.jpeg",             alt: "Ragi Marmar action",                 caption: "Ragi Marmar - training",           tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/mike_website1.jpg",      alt: "Mike Thornton",                      caption: "Mike Thornton - 3rd Dan",          tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/mike_website2.jpg",      alt: "Mike Thornton action",               caption: "Mike Thornton - kumite",           tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/sidney1.jpg",            alt: "Sidney Ushurhe",                     caption: "Sidney Ushurhe - 2nd Dan",         tall: false, category: "Yudansha" },
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
  { src: "/images/Alumni/karen_sheldon_portrait.jpg", alt: "Karen Sheldon",                    caption: "Karen Sheldon - 3rd Dan",          tall: true,  category: "Yudansha" },
  { src: "/images/Alumni/mark.gif",                 alt: "Mark Salomone",                      caption: "Mark Salomone - 3rd Dan (DKK Torbay)", tall: true, category: "Yudansha" },

  // ── New studio portraits & recent shoots ─────────────────
  { src: "/images/Yudansha/tunde_black_gi_studio.jpg",       alt: "Tunde Oladimeji - black dogi studio portrait", caption: "Tunde Oladimeji - 5th Dan",        tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/mizuki_kata_studio.jpg",          alt: "Mizuki Murai - kata studio portrait",          caption: "Mizuki Murai - Kata",              tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/laila_bo.jpg",                    alt: "Laila Al-Minyawi with bo - studio portrait",   caption: "Laila Al-Minyawi - Bo Staff",      tall: true,  category: "Yudansha" },

  // Training - recent
  { src: "/images/Training/kumite_high_kick_dramatic.jpg",   alt: "Dramatic high kick in kumite",                 caption: "Kumite - Dramatic High Kick",      tall: false, category: "Training" },
  { src: "/images/Training/outdoor_padwork_women.jpg",       alt: "Outdoor pad work",                             caption: "Outdoor Pad Work",                 tall: true,  category: "Training" },
  { src: "/images/Training/primrose_squats_evening.jpg",     alt: "Primrose Hill conditioning - squats",          caption: "Primrose Hill - Conditioning",     tall: true,  category: "Training" },
  { src: "/images/Yudansha/richard_gaillard_mitts.jpg",   alt: "Richard Gaillard in guard with MMA mitts",               caption: "Ready",                            tall: false, category: "Training" },
  { src: "/images/Club/club_big_group_indoor_dans.jpg",      alt: "Big club group photo - mixed dans",            caption: "DKK London - Full House",          tall: false, category: "Training" },

  // Grading - recent
  { src: "/images/Yudansha/glenn_sidney_nidan.jpg", alt: "Glenn Malpass & Sidney Ushurhe with Nidan certificates", caption: "Nidan - Glenn & Sidney",  tall: true, category: "Grading" },

  // Camps - recent
  { src: "/images/Camp/camp_partner_drill_shirtless.jpg",    alt: "Summer Camp - partner drill",                  caption: "Summer Camp - Partner Drill",      tall: false, category: "Camps" },
  { src: "/images/Camp/camp_morning_lineup_2025.jpg",        alt: "Summer Camp - morning lineup",                 caption: "Summer Camp - Morning Lineup",     tall: true,  category: "Camps" },
  { src: "/images/Camp/camp_big_group_kata_2024.jpg",        alt: "Summer Camp - big group kata",                 caption: "Summer Camp - Group Kata",         tall: true,  category: "Camps" },
  { src: "/images/Camp/camp_piggyback_carries.jpg",          alt: "Summer Camp - partner carries",                caption: "Conditioning - Carries",           tall: true,  category: "Camps" },
  { src: "/images/Camp/camp_weapons_lineup_2021.jpg",        alt: "Summer Camp 2021",                             caption: "Summer Camp 2021",                 tall: false, category: "Camps" },
  { src: "/images/Camp/camp_evening_circle.jpg",             alt: "Summer Camp - evening circle",                 caption: "Summer Camp - Evening Circle",     tall: false, category: "Camps" },
  { src: "/images/Camp/primrose_partner_carries.jpg",        alt: "Primrose Hill - partner carries",              caption: "Primrose Hill - Carries",          tall: true,  category: "Camps" },
  { src: "/images/Camp/summer_camp_recent.jpg",              alt: "Summer Camp group",                            caption: "Summer Camp",                       tall: false, category: "Camps" },

  // Newest additions
  { src: "/images/Shihan/shihan_uwsu_tshirt.jpg",            alt: "Shihan Mulholland in DKK x UWSU tshirt",       caption: "Shihan - DKK x UWSU",               tall: true,  category: "Shihan" },
  { src: "/images/Yudansha/lina_portrait.jpeg",              alt: "Lina Amir portrait",                           caption: "Lina Amir - 2nd Dan",               tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/lina_action.jpeg",                alt: "Lina Amir action",                             caption: "Lina Amir - Training",              tall: false, category: "Yudansha" },
  { src: "/images/Yudansha/dieter_liepsch.jpg",              alt: "Dieter Liepsch",                               caption: "Dieter Liepsch - 2nd Dan",          tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/carlotta_roveri.jpg",             alt: "Carlotta Roveri",                              caption: "Carlotta Roveri - 1st Dan",         tall: true,  category: "Yudansha" },
  { src: "/images/Yudansha/scarlett.jpg",                    alt: "Shihan with Scarlett at summer camp",          caption: "Shihan & Scarlett",                 tall: true,  category: "Yudansha" },
];

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Gallery", path: "/gallery" }]} />
      <PageHero
        variant="full"
        eyebrow="Photos"
        folio="09 / Gallery"
        kanji="記録"
        title="Gallery"
        lead="Training, camps, gradings, tournaments and members of DKK London."
        image={{ src: "/images/Camp/outdoor-kata-dynamic.JPG" }}
      />

      <section className="py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-3">
            <SectionHeading eyebrow="Photos" title="In the Dojo" />
          </div>
          <p className="text-gray-500 text-sm -mt-8 mb-8">Click any photo to view full size. Use the filters to browse by category.</p>
          <GalleryFilter images={images} />
          <p className="text-gray-400 text-sm text-center mt-10">
            If you have photos from DKK sessions to contribute, please{" "}
            <Link href="/contact" className="text-gold hover:text-white underline-offset-2 hover:underline transition-colors">
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABand
        title="Want to be in the next set of photos?"
        sub="Come and train with us. Monday & Wednesday, 6:00pm to 8:00pm."
      />
    </>
  );
}
