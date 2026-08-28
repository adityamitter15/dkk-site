export type Milestone = {
  year: string;
  event: string;
};

export type ClassSchedule = {
  day: string;
  time: string;
  venue: string;
  address?: string;
  mapUrl?: string;
  format: "in-person" | "zoom";
};

/** An extra photo on a member page, beyond the portrait and action shot. */
export type MemberPhoto = {
  src: string;
  alt: string;
  /** Shown on hover and in the lightbox. Keep it short. */
  caption: string;
};

export type Member = {
  name: string;
  slug: string;
  portrait: string | null;
  action: string | null;
  bio?: string;
  quote?: string;
  milestones?: Milestone[];
  /** Optional extra photos, rendered as a strip under the timeline. Four reads best. */
  photos?: MemberPhoto[];
  instructor?: boolean;
  classes?: ClassSchedule[];
};

export type GradeTier = {
  grade: string;
  dan: string;
  members: Member[];
};

function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const grades: GradeTier[] = [
  {
    grade: "Godan",
    dan: "5th Dan",
    members: [
      {
        name: "Tunde Oladimeji",
        slug: toSlug("Tunde Oladimeji"),
        portrait: "/images/Yudansha/tunde_black_gi_studio.jpg",
        action: "/images/Yudansha/tundeact.gif",
        bio: "Tunde began karate training in 1998 during his final year as an undergraduate at the University of Westminster. While primarily trained in Goju Ryu, he has studied under multiple karate systems.",
        quote: "I believe one should train to the point where the whole combat process becomes natural and its application seemingly 'planned' and 'calculated'. I consider it a privilege to train with the calibre of people in the club.",
        instructor: true,
        milestones: [
          { year: "1998", event: "Began Training" },
          { year: "2004", event: "Shodan" },
          { year: "2007", event: "30 Man Kumite & Nidan" },
          { year: "2011", event: "Sandan" },
          { year: "2017", event: "Yondan" },
          { year: "2024", event: "Godan" },
        ],
        classes: [
          { day: "Monday", time: "6:15pm - 7:15pm", venue: "Zoom · online session", format: "zoom" },
        ],
      },
    ],
  },
  {
    grade: "Yondan",
    dan: "4th Dan",
    members: [
      {
        name: "David Urquhart",
        slug: toSlug("David Urquhart"),
        portrait: "/images/Yudansha/davepot.gif",
        action: "/images/Yudansha/daveact.gif",
        bio: "David began his karate journey in 1998 under Sensei Mulholland at the old Meidokan dojo in West Hampstead.",
        quote: "Training to me is a totally positive and life-affirming experience, learning skills and attitudes applicable and beneficial to all aspects of life.",
        milestones: [
          { year: "1998", event: "Began Training" },
          { year: "2004", event: "Shodan" },
          { year: "2007", event: "30 Man Kumite & Nidan" },
          { year: "2013", event: "Sandan" },
          { year: "2017", event: "Yondan" },
        ],
      },
      {
        name: "Ragi Marmar",
        slug: toSlug("Ragi Marmar"),
        portrait: "/images/Yudansha/ragi1.jpeg",
        action: "/images/Yudansha/ragi2.jpeg",
        bio: "Ragi began her Goju Ryu training in 2001 under Sensei Gavin Mulholland at Daigaku's Westminster Dojo.",
        quote: "Karate is a major part of my life and has had a positive impact on the way it is shaped. Through karate I have learnt that nothing is too difficult or distant for the mind that dares to believe.",
        instructor: true,
        milestones: [
          { year: "2001", event: "Began Training" },
          { year: "2009", event: "Shodan-Ho" },
          { year: "2010", event: "Shodan" },
          { year: "2013", event: "30 Man Kumite & Nidan" },
          { year: "2016", event: "Sandan" },
          { year: "2021", event: "Yondan" },
        ],
        classes: [
          { day: "Thursday", time: "6:15pm - 8:00pm", venue: "St Andrew's C of E School", address: "The Green, Totteridge, London N20 8NX", mapUrl: "https://maps.app.goo.gl/1Jw7TbaSNBR44MBt5", format: "in-person" },
        ],
      },
      {
        name: "Simon Clinch",
        slug: toSlug("Simon Clinch"),
        portrait: "/images/Yudansha/simon_clinch_studio.jpg",
        action: "/images/Yudansha/simon_clinch_weapons.jpg",
        bio: "Simon began karate at his school's Shotokan club, achieving Shodan at age 18. After joining DKK in 2008, he progressed steadily through the ranks.",
        quote: "Training with the DKK has broadened my understanding of what it means to be a martial artist. Shihan Mulholland has shown that one must constantly learn from others.",
        instructor: true,
        milestones: [
          { year: "2008", event: "Joined DKK" },
          { year: "2009", event: "Shodan-Ho" },
          { year: "2010", event: "Shodan" },
          { year: "2013", event: "30 Man Kumite & Nidan" },
          { year: "2016", event: "Sandan" },
          { year: "2021", event: "Yondan" },
        ],
        classes: [
          { day: "Monday",   time: "7:00pm - 8:30pm", venue: "Oakley Village Hall",    address: "9 Oxford Road, Oakley, Bucks, HP18 9RS", mapUrl: "https://maps.app.goo.gl/jnqjMNQKbRCm6fmCA", format: "in-person" },
          { day: "Thursday", time: "7:30pm - 9:00pm", venue: "Brill Memorial Hall",   address: "19 Church St, Brill, Aylesbury HP18 9RT", mapUrl: "https://maps.app.goo.gl/JRbY289Y33ocM4sm6", format: "in-person" },
        ],
      },
      {
        name: "Simon Kluth",
        slug: toSlug("Simon Kluth"),
        portrait: "/images/Grading/eku-kata-simon-kluth.jpg",
        action: null,
        bio: "Simon began training in Wado Ryu Karate in 1985, earning his Brown Belt within three years. He later studied Goju Ryu with Chris Rowen, progressing to Sandan before joining DKK in 2000.",
        quote: "Two things inspire me at DKK: the vast knowledge base and holistic approach to combat, encompassing grappling, strikes, kicks and armed combat.",
        instructor: true,
        milestones: [
          { year: "1985", event: "Began Wado Ryu" },
          { year: "2000", event: "Joined DKK" },
          { year: "2018", event: "Sandan (DKK)" },
          { year: "2021", event: "Yondan" },
        ],
        classes: [
          { day: "Friday", time: "6:15pm - 7:15pm", venue: "Zoom · online session", format: "zoom" },
        ],
      },
    ],
  },
  {
    grade: "Sandan",
    dan: "3rd Dan",
    members: [
      {
        name: "Daniel Bard",
        slug: toSlug("Daniel Bard"),
        portrait: "/images/Yudansha/danny2.jpg",
        action: null,
        bio: "Daniel commenced Goju Ryu training at DKK under Sensei Mulholland beginning in 2000.",
        quote: "Karate is something I began by chance and I am glad to have done so. I consider it to be an extremely positive influence on my life in many ways.",
        milestones: [
          { year: "2000", event: "Began Training" },
          { year: "2007", event: "Shodan-Ho" },
          { year: "2008", event: "Shodan" },
          { year: "2014", event: "30 Man Kumite & Nidan" },
          { year: "2018", event: "Sandan" },
        ],
      },
      {
        name: "Juha Makinen",
        slug: toSlug("Juha Makinen"),
        portrait: "/images/Yudansha/juha1.jpg",
        action: "/images/Yudansha/juha2.jpg",
        bio: "Juha started karate in 1987 in Finland, earning 1st Dan in Wado Ryu by 1991. On relocating to London he joined DKK at the University of Westminster.",
        quote: "I found Goju Ryu to be based on more realistic self-defence and combat-style focused training, with harder physical workouts and sparring compared with my previous martial arts experiences.",
        milestones: [
          { year: "1987", event: "Began Karate" },
          { year: "1991", event: "1st Dan Wado Ryu" },
          { year: "2011", event: "Shodan-Ho (DKK)" },
          { year: "2012", event: "Shodan" },
          { year: "2014", event: "30 Man Kumite & Nidan" },
          { year: "2024", event: "Sandan" },
        ],
      },
      {
        name: "Karen Sheldon",
        slug: toSlug("Karen Sheldon"),
        portrait: "/images/Alumni/karen.jpg",
        action: "/images/Alumni/karenact.jpg",
        bio: "Karen began her karate training in October 1993 under Sensei Gavin Mulholland, maintaining continuous training from that day.",
        quote: "Karate means different things to different martial artists. But for me, it has always been about my own personal struggle, mentally to beat the demons from within, and physically to improve my natural abilities.",
        milestones: [
          { year: "1993", event: "Began Training" },
          { year: "2000", event: "Shodan" },
          { year: "2003", event: "Nidan" },
          { year: "2022", event: "Sandan" },
        ],
      },
      {
        name: "Laila Al-Minyawi",
        slug: toSlug("Laila Al-Minyawi"),
        portrait: "/images/Yudansha/laila_bo.jpg",
        action: "/images/Yudansha/laila.jpeg",
        bio: "Laila began karate as a child and rejoined at university in 2005 with a Shotokan club, transferring to DKK in 2007.",
        quote: "I wanted to train where my fitness was challenged while learning self-protection. DKK provided that and taught me control, inner strength, resilience, and how to surpass my own limits.",
        milestones: [
          { year: "2005", event: "Began Karate" },
          { year: "2007", event: "Joined DKK" },
          { year: "2013", event: "Shodan-Ho" },
          { year: "2014", event: "Shodan" },
          { year: "2016", event: "30 Man Kumite & Nidan" },
          { year: "2022", event: "Sandan" },
        ],
      },
      {
        name: "Mark Salomone",
        slug: toSlug("Mark Salomone"),
        portrait: "/images/Alumni/mark.gif",
        action: "/images/Alumni/markact.gif",
        bio: "Mark started boxing in the early 1990s and began Shotokan shortly after. He transitioned to Goju Ryu under Sensei Mulholland in 1994. He now runs Torbay Goju Ryu Karate under the DKK banner.",
        instructor: true,
        milestones: [
          { year: "1994", event: "Joined DKK" },
          { year: "1998", event: "Shodan" },
          { year: "2001", event: "Nidan" },
          { year: "", event: "Sandan" },
        ],
      },
      {
        name: "Mike Thornton",
        slug: toSlug("Mike Thornton"),
        portrait: "/images/Yudansha/mike_thornton_portrait.jpg",
        action: "/images/Yudansha/mike_website2.jpg",
        bio: "Mike joined DKK in 2007 with a prior black belt in Taekwondo from New Zealand.",
        quote: "I was impressed with the student calibre and Sensei Mulholland's teaching. Goju Karate presents the ongoing challenge of mastering the hard/soft relationship in training.",
        milestones: [
          { year: "2007", event: "Joined DKK" },
          { year: "2009", event: "Shodan-Ho" },
          { year: "2010", event: "Shodan" },
          { year: "2015", event: "30 Man Kumite & Nidan" },
          { year: "2024", event: "Sandan" },
        ],
        photos: [
          {
            src: "/images/Yudansha/mike_thornton_kumite.jpg",
            alt: "Mike Thornton in a close-range exchange with a partner in a white gi",
            caption: "Close range",
          },
          {
            src: "/images/Yudansha/mike_thornton_grappling.jpg",
            alt: "Mike Thornton controlling a partner's head in the clinch",
            caption: "In the clinch",
          },
          {
            src: "/images/Yudansha/mike_thornton_seminar.jpg",
            alt: "Mike Thornton on the mat as a student kicks a shield beside him",
            caption: "On the mat",
          },
          {
            src: "/images/Yudansha/mike_thornton_crew.jpg",
            alt: "Mike Thornton with three fellow black belts",
            caption: "Black belts",
          },
        ],
      },
      {
        name: "Ralph Mends",
        slug: toSlug("Ralph Mends"),
        portrait: "/images/Yudansha/ralph_mends_portrait.jpg",
        action: "/images/Yudansha/ralph_mends_action.jpg",
        milestones: [
          { year: "2024", event: "Sandan" },
        ],
      },
      {
        name: "Richard Gaillard",
        slug: toSlug("Richard Gaillard"),
        portrait: "/images/Yudansha/richard_gaillard_mitts.jpg",
        action: "/images/Yudansha/rich.jpg",
        bio: "Richard began martial arts at age 15 under Hanshi Steve Arneil (Kyokushinkai), later training in Wado-Ryu and Shorinji Kempo before joining DKK under Shihan Dan Lewis, then Shihan Mulholland in London.",
        quote: "Through DKK, I have been given the opportunity to push myself beyond what I thought were my limits and achieve what I thought was beyond me.",
        milestones: [
          { year: "2005", event: "Shodan-Ho" },
          { year: "2006", event: "Shodan" },
          { year: "2024", event: "Sandan" },
        ],
      },
    ],
  },
  {
    grade: "Nidan",
    dan: "2nd Dan",
    members: [
      {
        name: "Catherine Sandwell",
        slug: toSlug("Catherine Sandwell"),
        portrait: "/images/Yudansha/catherine1.jpg",
        action: "/images/Yudansha/catherine2.jpg",
        bio: "Catherine began karate at age 12 in Shotokan, earning her first black belt at 18. After discovering DKK in her final year at university she attended the 2011 Summer School, later returning to London.",
        quote: "Of all the places I've trained, nowhere else have I been surrounded by so many people who work so hard to push each other past what they thought were their limits.",
        milestones: [
          { year: "2011", event: "Joined DKK" },
          { year: "2015", event: "Shodan-Ho" },
          { year: "2016", event: "Shodan" },
          { year: "2019", event: "30 Man Kumite & Nidan" },
        ],
      },
      {
        name: "Luke Wilcox",
        slug: toSlug("Luke Wilcox"),
        portrait: "/images/Yudansha/luke.jpg",
        action: null,
        bio: "Luke began martial arts at age 10 with judo and shokokai karate, later becoming an instructor in wing chun. After a hiatus he discovered Okinawan Goju through DKK in 2016.",
        quote: "In DKK and Shihan Mulholland, I found exactly what I was looking for in a martial arts association. The people who make up DKK are just a joy to spend time with.",
        milestones: [
          { year: "2016", event: "Joined DKK" },
          { year: "2017", event: "DKK Badge" },
          { year: "2021", event: "Shodan-Ho" },
          { year: "2022", event: "Shodan" },
          { year: "2025", event: "30 Man Kumite & Nidan" },
        ],
      },
      {
        name: "Marianette Violeta",
        slug: toSlug("Marianette Violeta"),
        portrait: "/images/Yudansha/marianette2.jpg",
        action: null,
        bio: "Marianette began karate in 2000 seeking fitness and martial arts training. After earning her 1st Dan in combined Shotokan and Goju, she explored taekwondo, Wing Chun and kickboxing before joining DKK.",
        quote: "DKK has taught me so much about myself, my life and my indomitable spirit, where my perseverance and integrity is tested every time.",
        milestones: [
          { year: "2015", event: "Shodan-Ho" },
          { year: "2016", event: "Shodan" },
          { year: "2019", event: "30 Man Kumite & Nidan" },
        ],
      },
      {
        name: "Seki Lynch",
        slug: toSlug("Seki Lynch"),
        portrait: "/images/Yudansha/seki.jpg",
        action: null,
        bio: "Seki began training with DKK London and progressed steadily through the ranks.",
        milestones: [
          { year: "", event: "Shodan-Ho" },
          { year: "", event: "Shodan" },
          { year: "2025", event: "30 Man Kumite & Nidan" },
        ],
      },
      {
        name: "James Tolson",
        slug: toSlug("James Tolson"),
        portrait: "/images/Yudansha/james_tolson_sparring.jpg",
        action: null,
        milestones: [
          { year: "2025", event: "Nidan" },
        ],
      },
      {
        name: "Glenn Malpass",
        slug: toSlug("Glenn Malpass"),
        portrait: "/images/Yudansha/glenn_sidney_nidan.jpg",
        action: "/images/Yudansha/glenn_malpass_early90s.jpeg",
        bio: "Glenn began training in Goju Ryu at age 14 in Canvey Island. At the University of Westminster he connected with Sensei Mulholland. After relocating to Oxford his training became sporadic until resuming contact during pandemic online sessions.",
        quote: "Training was always meaningful, hard, and developed spirit. The skills I learnt augmented my physical techniques in every other sport I still play today.",
        milestones: [
          { year: "1998", event: "Shodan-Ho" },
          { year: "2021", event: "Full Shodan" },
          { year: "2025", event: "Nidan" },
        ],
      },
      {
        name: "Sidney Ushurhe",
        slug: toSlug("Sidney Ushurhe"),
        portrait: "/images/Yudansha/sidney1.jpg",
        action: "/images/Camp/camp_weapons_lineup_2021.jpg",
        bio: "Sidney began training in Goju Ryu karate in 2005, joining DKK London that year. He describes his first class as transformative despite initial nerves about sparring with a much larger partner.",
        quote: "The fight-or-flee rush of my first class isn't one I'll easily ever forget. I found myself replaying every movement in my head over and over again like a movie.",
        milestones: [
          { year: "2005", event: "Joined DKK" },
          { year: "2020", event: "Shodan-Ho" },
          { year: "2022", event: "Full Shodan" },
          { year: "2025", event: "Nidan" },
        ],
      },
      {
        name: "Mizuki Murai",
        slug: toSlug("Mizuki Murai"),
        portrait: "/images/Yudansha/mizuki_kata_studio.jpg",
        action: "/images/Yudansha/miki2.jpg",
        bio: "Mizuki began training in 2006 under Sensei Lewis at DKK Bristol while at the University of Bristol, relocating to London and joining DKK London.",
        quote: "Having come from a background in ballet, I wanted to try something completely different. DKK has been a fundamental part of my life ever since. The breadth of Goju Ryu and the depth to which we study it fascinates me.",
        milestones: [
          { year: "2006", event: "Began Training (Bristol)" },
          { year: "2010", event: "Shodan-Ho" },
          { year: "2014", event: "Shodan" },
          { year: "2021", event: "Nidan" },
        ],
      },
      {
        name: "Lina Amir",
        slug: toSlug("Lina Amir"),
        portrait: "/images/Yudansha/lina_portrait.jpeg",
        action: "/images/Yudansha/lina_action.jpeg",
        bio: "Lina started training at DKK in 2013 whilst working for a domestic violence charity. She came to DKK just to try it out having no prior martial arts experience, loved it from the first class and stuck with it for the immense physical, mental and social health and wellbeing benefits.",
        quote: "I came to DKK just to try it out having no prior martial arts experience. I loved it from the first class and stuck with it as the health and wellbeing benefits were immense, both physically and mentally, and even socially.",
        milestones: [
          { year: "2013", event: "First Class at DKK" },
          { year: "2020", event: "Shodan (Covid Lockdown)" },
          { year: "2024", event: "Nidan (Summer Camp)" },
        ],
      },
      {
        name: "Dieter Liepsch",
        slug: toSlug("Dieter Liepsch"),
        portrait: "/images/Yudansha/dieter_liepsch.jpg",
        action: null,
        milestones: [
          { year: "2026", event: "Nidan" },
        ],
      },
      {
        name: "Scarlett Mac-Ginty",
        slug: toSlug("Scarlett Mac-Ginty"),
        portrait: "/images/Yudansha/scarlett.jpg",
        action: null,
        milestones: [
          { year: "2022", event: "Shodan" },
          { year: "2025", event: "Nidan" },
        ],
      },
    ],
  },
  {
    grade: "Shodan",
    dan: "1st Dan",
    members: [
      {
        name: "Alex Haslehurst",
        slug: toSlug("Alex Haslehurst"),
        portrait: "/images/Yudansha/alex_haslehurst.jpg",
        action: null,
        milestones: [
          { year: "2023", event: "Shodan" },
        ],
      },
      {
        name: "Alexey Kryazhev",
        slug: toSlug("Alexey Kryazhev"),
        portrait: "/images/Yudansha/ak_kata.jpeg",
        action: "/images/Yudansha/ak_kata2.jpeg",
        bio: "Alexey first experienced Okinawan karate in the Channel Islands and joined DKK as a white belt the day after returning to London in autumn 2016.",
        milestones: [
          { year: "2016", event: "Joined DKK" },
          { year: "2023", event: "Shodan-Ho" },
          { year: "2024", event: "Shodan" },
        ],
      },
      {
        name: "Mark Haslehurst",
        slug: toSlug("Mark Haslehurst"),
        portrait: "/images/Yudansha/mark_haslehurst1.jpeg",
        action: "/images/Yudansha/mark_haslehurst_breaking.jpg",
        bio: "Mark started training under Shihan Lewis between 2006 and 2010 while studying in Bristol and rejoined DKK under Shihan Mulholland in 2017.",
        milestones: [
          { year: "2006", event: "Began Training (Bristol)" },
          { year: "2017", event: "Rejoined DKK London" },
          { year: "2018", event: "DKK Badge" },
          { year: "2023", event: "Shodan" },
        ],
      },
      {
        name: "Sebastien Montemurro",
        slug: toSlug("Sebastien Montemurro"),
        portrait: "/images/Yudansha/sebastien_montemurro.jpg",
        action: "/images/Yudansha/sebastien_montemurro_action.jpg",
        milestones: [
          { year: "2025", event: "Shodan" },
        ],
      },
      {
        name: "Albert Gmaj",
        slug: toSlug("Albert Gmaj"),
        portrait: "/images/Yudansha/albert_portrait.jpg",
        action: "/images/Yudansha/albert_action.jpg",
        bio: "Albert began Shotokan at the age of five under Sensei Stephen Cox in West Wiltshire. Moving to London for university he trained briefly with the JKA, then with Sensei Gabriel Van Rel, under whom he still trains and teaches. After a spell with Tokei Kyokushin (IKO1) under Sensei Sithembiso Majozi, he joined DKK in 2022, taking Shodan-Ho in 2024 and full Shodan in 2025 under Shihan Mulholland and Shihan Lewis.",
        quote: "DKK lives up to its name, you would be hard pressed to find an organisation where the systematic study of karate is as rigorous and consistent, and where the products of training are as true to their guiding intentions. DKK is the hidden gem of British Karate.",
        milestones: [
          { year: "2022", event: "Joined DKK" },
          { year: "2024", event: "Shodan-Ho" },
          { year: "2025", event: "Shodan" },
        ],
      },
      {
        name: "Carlotta Roveri",
        slug: toSlug("Carlotta Roveri"),
        portrait: "/images/Yudansha/carlotta_roveri.jpg",
        action: "/images/Yudansha/carlotta_roveri_kata.jpg",
        bio: "Carlotta began training in DKK in September 2018 after moving to London to study at the University of Westminster. Prior to joining DKK, she trained in Shotokan karate from a young age, achieving the rank of 1st Kyu. She successfully graded for her Shodan at the 2026 Summer Camp.",
        quote: "I first joined because I was looking for something familiar. However, I stayed because it took me completely out of my comfort zone. What I've achieved, and continue to achieve, through my training makes me incredibly proud of myself. Looking back over the past eight years, I'm in awe of the person I've become thanks to DKK.",
        milestones: [
          { year: "2018", event: "Joined DKK" },
          { year: "2019", event: "First Tameshiwari & DKK Badge" },
          { year: "2025", event: "Shodan-Ho" },
          { year: "2026", event: "Shodan" },
        ],
      },
      {
        name: "Zoe Mak",
        slug: toSlug("Zoe Mak"),
        portrait: "/images/Yudansha/zoe_mak.jpg",
        action: null,
        milestones: [
          { year: "2025", event: "Shodan-Ho" },
          { year: "2026", event: "Shodan" },
        ],
      },
      {
        name: "Alex Lowther",
        slug: toSlug("Alex Lowther"),
        portrait: "/images/Yudansha/alex_lowther.jpg",
        action: null,
        milestones: [
          { year: "2024", event: "Shodan" },
        ],
      },
      {
        name: "Elizabeth Hanna",
        slug: toSlug("Elizabeth Hanna"),
        portrait: "/images/Yudansha/elizabeth_hanna.jpg",
        action: null,
        bio: "When her dojo closed down during the first lockdown, Elizabeth joined DKK as classes were being held online. The commitment and dedication to continue training as best they could, to teach and develop regardless of the circumstances, was what kept her coming back. She ultimately joined the club as a fully paid-up full-time member, badging in in 2022.",
        quote: "Karate has genuinely changed my life for the better. Beyond the physical skills and the resilience it teaches you, DKK provides a group of like-minded people who accept, welcome, challenge and support me in equal measure. It's a tough club with high standards but I wouldn't have it any other way.",
        milestones: [
          { year: "2020", event: "Joined DKK, training online through lockdown" },
          { year: "2022", event: "Badged In" },
          { year: "2025", event: "Shodan-Ho" },
          { year: "2026", event: "Shodan at Summer Camp" },
        ],
      },
    ],
  },
];

// Register reads alphabetically by name within each grade tier.
for (const tier of grades) {
  tier.members.sort((a, b) => a.name.localeCompare(b.name, "en"));
}

export function getAllMembers(): (Member & { grade: string; dan: string })[] {
  return grades.flatMap((tier) =>
    tier.members.map((m) => ({ ...m, grade: tier.grade, dan: tier.dan }))
  );
}

export function getMemberBySlug(slug: string) {
  for (const tier of grades) {
    const member = tier.members.find((m) => m.slug === slug);
    if (member) return { ...member, grade: tier.grade, dan: tier.dan };
  }
  return null;
}
