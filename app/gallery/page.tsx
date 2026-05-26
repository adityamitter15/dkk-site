import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";
import GalleryFilter from "@/components/GalleryFilter";
import type { GalleryImage } from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from DKK London. Training, gradings, tournaments, summer camps and members of Daigaku Karate Kai.",
};

const images: GalleryImage[] = [
  // ── Shihan ──────────────────────────────────────────────
  { src: "/images/Shihan/shihan-portrait-black.jpg", alt: "Shihan Gavin Mulholland - studio portrait", caption: "Shihan Gavin Mulholland · 7th Dan",   tall: true,  category: "Shihan" },
  { src: "/images/Shihan/shihan-kuwa-black.jpg",     alt: "Shihan with kuwa",                         caption: "Kuwa - farming tool weapon",           tall: true,  category: "Shihan" },
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
  { src: "/images/Shihan/Archive/shihan-young-flying-kick.jpg", alt: "Young Shihan flying kick",      caption: "Shihan - Archive",                     tall: false, category: "Shihan" },
  { src: "/images/Shihan/Archive/shihan-young-headlock.jpg",    alt: "Young Shihan control technique", caption: "Shihan - Archive",                    tall: true,  category: "Shihan" },
  { src: "/images/Shihan/Archive/shihan-young-technique.jpg",   alt: "Young Shihan technique",        caption: "Shihan - Archive",                     tall: true,  category: "Shihan" },

  // ── Training ─────────────────────────────────────────────
  { src: "/images/Training/padwork-overhead.jpg",   alt: "Mass drill class in session",        caption: "Mass Drill - Kihon",                tall: false, category: "Training" },
  { src: "/images/Club/dojo-full-class.JPG",        alt: "Full dojo class in session",         caption: "Full Class - University of Westminster", tall: false, category: "Training" },
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
  { src: "/images/Grading/bo-kata-performance.jpg",              alt: "Bo kata at tournament",              caption: "Kata Tournament - Bo",              tall: true,  category: "Tournament" },
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
  { src: "/images/Camp/camp-shihan-student-fists.jpg", alt: "Shihan with student at camp",    caption: "Shihan & Student",                  tall: false, category: "Camps" },
  { src: "/images/Camp/camp-board-break-intense.png", alt: "Board break at camp",              caption: "Board Break - Summer Camp",         tall: false, category: "Camps" },

  // ── 30 Man Kumite - goes under Grading ───────────────────
  { src: "/images/Camp/women-trees-lineup.JPG",     alt: "30 Man Kumite lineup - woman's",     caption: "30 Man Kumite - Fight Lineup (Woman's)", tall: false, category: "Grading" },
  { src: "/images/Camp/camp-standing-group.jpg",    alt: "30 Man Kumite gathering",            caption: "30 Man Kumite",                    tall: false, category: "Grading" },

  // ── DKK Fighters ─────────────────────────────────────────
  { src: "/images/Fighters/dkk.jpg",                           alt: "DKK Fighters",                     caption: "DKK Fighters",                    tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/neil-grove-victory-cage.jpg",       alt: "Neil Grove victory in cage",       caption: "Neil Grove - Victory",            tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/neil-grove-title-portrait.jpg",     alt: "Neil Grove with world title belt", caption: "UCMMA World Heavyweight Title",    tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/neil-grove-belts-crew.jpg",         alt: "DKK crew with title belts",         caption: "The Belts Come Home",             tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/neil-grove-walkout.jpg",            alt: "Neil Grove walkout",                caption: "Walkout",                         tall: true,  category: "DKK Fighters" },
  { src: "/images/Fighters/neil-grove-portrait-mulholland.jpg", alt: "Neil Grove and Shihan Mulholland", caption: "Grove & Mulholland",              tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/edge-back-patch.jpg",               alt: "Edge walking out - DKK patch",      caption: "Edge - Walkout",                  tall: true,  category: "DKK Fighters" },
  { src: "/images/Fighters/edge-hand-raised.jpg",              alt: "Edge hand raised in victory",      caption: "Edge - Hand Raised",              tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/edge-cage-victory.jpg",             alt: "Edge cage victory",                 caption: "Edge - In the Cage",              tall: false, category: "DKK Fighters" },
  { src: "/images/Fighters/domagoj-wembley-2007.jpg",          alt: "Wembley September 2007",            caption: "Wembley - September 2007",        tall: false, category: "DKK Fighters" },

  // ── Tournament ───────────────────────────────────────────
  // Venue / Overview
  { src: "/images/Tournament/venue-overhead-wide.jpg",           alt: "Tournament venue overhead",              caption: "Tournament 2026 - Full Venue",           tall: false, category: "Tournament" },
  { src: "/images/Tournament/venue-dual-mats-elevated.jpg",      alt: "Dual mats from above",                   caption: "Tournament 2026 - Two Mats",             tall: false, category: "Tournament" },
  { src: "/images/Tournament/venue-bowing-elevated.jpg",         alt: "Competitor bowing on mat",               caption: "Tournament 2026 - Respect",              tall: false, category: "Tournament" },
  { src: "/images/Tournament/venue-sparring-overhead.jpg",       alt: "Tournament sparring overhead",           caption: "Tournament 2026 - Kumite",               tall: false, category: "Tournament" },
  { src: "/images/Tournament/overhead-referee-entering-mat.jpg", alt: "Referee entering mat overhead",          caption: "Tournament 2026 - The Stage",            tall: false, category: "Tournament" },
  // Action - Sparring
  { src: "/images/Tournament/kumite-black-white-action.jpg",     alt: "Kumite in black and white",              caption: "The Art of Combat",                      tall: false, category: "Tournament" },
  { src: "/images/Tournament/sparring-women-dynamic.jpg",        alt: "Women's sparring",                       caption: "Women's Kumite",                         tall: false, category: "Tournament" },
  { src: "/images/Tournament/kumite-intense-closeup.jpg",        alt: "Intense kumite close-up",                caption: "Kumite - Standing Exchange",             tall: false, category: "Tournament" },
  { src: "/images/Tournament/senior-kumite-faceoff.jpg",         alt: "Senior black belts squaring off",        caption: "Senior Kumite - Face Off",               tall: false, category: "Tournament" },
  { src: "/images/Tournament/kumite-sparring-medals.jpg",        alt: "Kumite with medals visible",             caption: "Competing for Medals",                   tall: false, category: "Tournament" },
  { src: "/images/Tournament/womens-sparring-exchange.jpg",      alt: "Women's sparring exchange",              caption: "Women's Kumite - Exchange",              tall: false, category: "Tournament" },
  { src: "/images/Tournament/youth-sparring-instructor.jpg",     alt: "Youth sparring with instructor",         caption: "Youth Kumite",                           tall: false, category: "Tournament" },
  { src: "/images/Tournament/sparring-thumbsup-action.jpg",      alt: "Sparring with thumbs up",                caption: "Friendly Competition",                   tall: false, category: "Tournament" },
  // Action - Grappling & Throws
  { src: "/images/Tournament/grappling-with-referee.jpg",        alt: "Grappling takedown with referee",        caption: "Grappling - Takedown",                   tall: false, category: "Tournament" },
  { src: "/images/Tournament/ground-grappling-closeup.jpg",      alt: "Ground grappling close-up",              caption: "Ground Work",                            tall: false, category: "Tournament" },
  { src: "/images/Tournament/ground-fight-wide-crowd.jpg",       alt: "Ground fight with crowd surrounding",    caption: "Ground Fight - Centre Stage",            tall: false, category: "Tournament" },
  { src: "/images/Tournament/dramatic-ground-reversal.jpg",      alt: "Dramatic ground reversal",               caption: "The Reversal",                           tall: false, category: "Tournament" },
  { src: "/images/Tournament/throw-takedown-mid-action.jpg",     alt: "Throw takedown mid-action",              caption: "Nage Waza - Mid-Throw",                  tall: false, category: "Tournament" },
  // Technique & Training
  { src: "/images/Tournament/technique-demonstration.jpg",       alt: "Technique demonstration",                caption: "Technique Demonstration",                tall: false, category: "Tournament" },
  { src: "/images/Tournament/sensei-mae-geri-pads.jpg",          alt: "Sensei front kick on pads",              caption: "Leading by Example - Mae Geri",          tall: true,  category: "Tournament" },
  { src: "/images/Tournament/kicking-demonstration-wide.jpg",    alt: "Kicking demonstration wide shot",        caption: "Technique Demonstration",                tall: false, category: "Tournament" },
  // Portraits & Focus
  { src: "/images/Tournament/fighter-portrait-ready.jpg",        alt: "Fighter ready to compete",               caption: "Ready to Compete",                       tall: true,  category: "Tournament" },
  { src: "/images/Tournament/fighter-intense-focus.jpg",         alt: "Fighter in intense focus",                caption: "Focus",                                  tall: true,  category: "Tournament" },
  { src: "/images/Tournament/young-fighter-staredown.jpg",       alt: "Young fighter focused staredown",        caption: "Determination",                          tall: true,  category: "Tournament" },
  { src: "/images/Tournament/sensei-addressing-group.jpg",       alt: "Sensei addressing the group",            caption: "Sensei Speaks",                          tall: true,  category: "Tournament" },
  // Community & Sportsmanship
  { src: "/images/Tournament/post-match-hug.jpg",               alt: "Post-match sportsmanship hug",           caption: "Sportsmanship",                          tall: false, category: "Tournament" },
  { src: "/images/Tournament/award-presentation-applause.jpg",  alt: "Award presentation with applause",       caption: "Award Presentation",                     tall: false, category: "Tournament" },
  { src: "/images/Tournament/ceremony-judges-laughter.jpg",     alt: "Ceremony judges laughing",               caption: "Celebrating Together",                   tall: false, category: "Tournament" },
  { src: "/images/Tournament/recognition-applause.jpg",          alt: "Student receiving recognition",           caption: "Recognition",                            tall: false, category: "Tournament" },
  { src: "/images/Tournament/peace-sign-portrait.jpg",           alt: "Smiling practitioner peace signs",       caption: "Tournament Spirit",                      tall: false, category: "Tournament" },
  { src: "/images/Tournament/group-laughing-candid.jpg",         alt: "Group laughing together",                caption: "Camaraderie",                            tall: false, category: "Tournament" },
  { src: "/images/Tournament/team-group-fun.jpg",               alt: "Team group fun photo",                    caption: "More Than a Dojo",                       tall: false, category: "Tournament" },
  { src: "/images/Tournament/group-selfie-friends.jpg",          alt: "Group selfie of friends",                caption: "Tournament Friends",                     tall: false, category: "Tournament" },
  { src: "/images/Tournament/student-lineup-belts.jpg",          alt: "Student lineup mixed belt colours",      caption: "Student Lineup",                         tall: false, category: "Tournament" },
  // Instructors
  { src: "/images/Tournament/head-instructor-portrait.jpg",      alt: "Head instructor portrait",               caption: "Head Instructor",                        tall: true,  category: "Tournament" },
  { src: "/images/Tournament/instructor-pair.jpg",               alt: "Two instructors",                        caption: "Instructors",                            tall: true,  category: "Tournament" },
  { src: "/images/Tournament/senior-blackbelts-modern-dojo.jpg", alt: "Senior black belts at modern dojo",     caption: "Senior Black Belts",                     tall: false, category: "Tournament" },

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
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0">
          <SafeImage src="/images/Camp/outdoor-kata-dynamic.JPG" alt="" fill className="object-cover object-center opacity-35" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#a8201a]" />
            Photos
          </p>
          <h1 className="font-['Bebas_Neue'] text-7xl sm:text-8xl lg:text-[9rem] text-white tracking-wide leading-none mb-4">Gallery</h1>
          <p className="text-gray-300 text-lg max-w-lg font-light leading-relaxed">Training, camps, gradings, tournaments and members of DKK London.</p>
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
