export type Milestone = {
  year: string;
  event: string;
};

export type Member = {
  name: string;
  slug: string;
  portrait: string | null;
  action: string | null;
  bio?: string;
  quote?: string;
  milestones?: Milestone[];
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
        portrait: "/images/Yudansha/Tundepot.gif",
        action: "/images/Yudansha/tundeact.gif",
        bio: "Tunde began karate training in 1998 during his final year as an undergraduate at the University of Westminster. While primarily trained in Goju Ryu, he has studied under multiple karate systems.",
        quote: "I believe one should train to the point where the whole combat process becomes natural and its application seemingly 'planned' and 'calculated'. I consider it a privilege to train with the calibre of people in the club.",
        milestones: [
          { year: "1998", event: "Began Training" },
          { year: "2004", event: "Shodan" },
          { year: "2007", event: "30 Man Kumite & Nidan" },
          { year: "2011", event: "Sandan" },
          { year: "2017", event: "Yondan" },
          { year: "", event: "Godan" },
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
        milestones: [
          { year: "2001", event: "Began Training" },
          { year: "2009", event: "Shodan-Ho" },
          { year: "2010", event: "Shodan" },
          { year: "2013", event: "30 Man Kumite & Nidan" },
          { year: "2016", event: "Sandan" },
          { year: "2021", event: "Yondan" },
        ],
      },
      {
        name: "Simon Clinch",
        slug: toSlug("Simon Clinch"),
        portrait: "/images/Yudansha/simon_clinch1.jpg",
        action: "/images/Yudansha/simon_clinch2.jpg",
        bio: "Simon began karate at his school's Shotokan club, achieving Shodan at age 18. After joining DKK in 2008, he progressed steadily through the ranks.",
        quote: "Training with the DKK has broadened my understanding of what it means to be a martial artist. Shihan Mulholland has shown that one must constantly learn from others.",
        milestones: [
          { year: "2008", event: "Joined DKK" },
          { year: "2009", event: "Shodan-Ho" },
          { year: "2010", event: "Shodan" },
          { year: "2013", event: "30 Man Kumite & Nidan" },
          { year: "2016", event: "Sandan" },
          { year: "2021", event: "Yondan" },
        ],
      },
      {
        name: "Simon Kluth",
        slug: toSlug("Simon Kluth"),
        portrait: null,
        action: null,
        bio: "Simon began training in Wado Ryu Karate in 1985, earning his Brown Belt within three years. He later studied Goju Ryu with Chris Rowen, progressing to Sandan before joining DKK in 2000.",
        quote: "Two things inspire me at DKK: the vast knowledge base and holistic approach to combat, encompassing grappling, strikes, kicks and armed combat.",
        milestones: [
          { year: "1985", event: "Began Wado Ryu" },
          { year: "2000", event: "Joined DKK" },
          { year: "2018", event: "Sandan (DKK)" },
          { year: "2021", event: "Yondan" },
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
          { year: "", event: "Sandan" },
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
        portrait: "/images/Yudansha/laila.jpeg",
        action: null,
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
        quote: undefined,
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
        portrait: "/images/Yudansha/mike_website1.jpg",
        action: "/images/Yudansha/mike_website2.jpg",
        bio: "Mike joined DKK in 2007 with a prior black belt in Taekwondo from New Zealand.",
        quote: "I was impressed with the student calibre and Sensei Mulholland's teaching. Goju Karate presents the ongoing challenge of mastering the hard/soft relationship in training.",
        milestones: [
          { year: "2007", event: "Joined DKK" },
          { year: "2009", event: "Shodan-Ho" },
          { year: "2010", event: "Shodan" },
          { year: "2015", event: "30 Man Kumite & Nidan" },
          { year: "", event: "Sandan" },
        ],
      },
      {
        name: "Richard Gaillard",
        slug: toSlug("Richard Gaillard"),
        portrait: "/images/Yudansha/richgaypot.gif",
        action: "/images/Yudansha/rich.jpg",
        bio: "Richard began martial arts at age 15 under Hanshi Steve Arneil (Kyokushinkai), later training in Wado-Ryu and Shorinji Kempo before joining DKK under Shihan Dan Lewis, then Shihan Mulholland in London.",
        quote: "Through DKK, I have been given the opportunity to push myself beyond what I thought were my limits and achieve what I thought was beyond me.",
        milestones: [
          { year: "2005", event: "Shodan-Ho" },
          { year: "2006", event: "Shodan" },
          { year: "2015", event: "Sandan" },
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
        name: "Daniel Bradley",
        slug: toSlug("Daniel Bradley"),
        portrait: "/images/Yudansha/photo1.JPG",
        action: "/images/Yudansha/photo2.JPG",
        bio: "Daniel trained in Judo as a child before exploring various karate clubs as an adult. He joined DKK in 2007.",
        quote: "From the first class, training with DKK was a kick to the gut, both literally and metaphorically. The sweet thrill of fear I feel walking into the dojo is a big part of what I love about it.",
        milestones: [
          { year: "2007", event: "Joined DKK" },
          { year: "2013", event: "Shodan-Ho" },
          { year: "2014", event: "Shodan" },
          { year: "2017", event: "30 Man Kumite & Nidan" },
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
        quote: undefined,
        milestones: [
          { year: "", event: "Shodan-Ho" },
          { year: "", event: "Shodan" },
          { year: "2025", event: "30 Man Kumite & Nidan" },
        ],
      },
      {
        name: "Mizuki Murai",
        slug: toSlug("Mizuki Murai"),
        portrait: "/images/Yudansha/miki1.jpg",
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
    ],
  },
  {
    grade: "Shodan",
    dan: "1st Dan",
    members: [
      {
        name: "Alex Haslehurst",
        slug: toSlug("Alex Haslehurst"),
        portrait: null,
        action: null,
      },
      {
        name: "Alexey Kryazhev",
        slug: toSlug("Alexey Kryazhev"),
        portrait: "/images/Yudansha/ak_kata.jpeg",
        action: "/images/Yudansha/ak_kata2.jpeg",
        bio: "Alexey first experienced Okinawan karate in the Channel Islands and joined DKK as a white belt the day after returning to London in autumn 2016.",
        quote: undefined,
        milestones: [
          { year: "2016", event: "Joined DKK" },
          { year: "2023", event: "Shodan-Ho" },
          { year: "2024", event: "Shodan" },
        ],
      },
      {
        name: "Glenn Malpass",
        slug: toSlug("Glenn Malpass"),
        portrait: null,
        action: null,
        bio: "Glenn began training in Goju Ryu at age 14 in Canvey Island. At the University of Westminster he connected with Sensei Mulholland. After relocating to Oxford his training became sporadic until resuming contact during pandemic online sessions.",
        quote: "Training was always meaningful, hard, and developed spirit. The skills I learnt augmented my physical techniques in every other sport I still play today.",
        milestones: [
          { year: "1998", event: "Shodan-Ho" },
          { year: "2021", event: "Full Shodan" },
        ],
      },
      {
        name: "Mark Haslehurst",
        slug: toSlug("Mark Haslehurst"),
        portrait: "/images/Yudansha/mark_haslehurst1.jpeg",
        action: "/images/Yudansha/mark_haslehurst2.jpeg",
        bio: "Mark started training under Shihan Lewis between 2006 and 2010 while studying in Bristol and rejoined DKK under Shihan Mulholland in 2017.",
        quote: undefined,
        milestones: [
          { year: "2006", event: "Began Training (Bristol)" },
          { year: "2017", event: "Rejoined DKK London" },
          { year: "2018", event: "DKK Badge" },
          { year: "2023", event: "Shodan" },
        ],
      },
      {
        name: "Sidney Ushurhe",
        slug: toSlug("Sidney Ushurhe"),
        portrait: "/images/Yudansha/sidney1.jpg",
        action: "/images/Yudansha/sidney2.jpg",
        bio: "Sidney began training in Goju Ryu karate in 2005, joining DKK London that year. He describes his first class as transformative despite initial nerves about sparring with a much larger partner.",
        quote: "The fight-or-flee rush of my first class isn't one I'll easily ever forget. I found myself replaying every movement in my head over and over again like a movie.",
        milestones: [
          { year: "2005", event: "Joined DKK" },
          { year: "2020", event: "Shodan-Ho" },
          { year: "2022", event: "Full Shodan" },
        ],
      },
    ],
  },
];

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
