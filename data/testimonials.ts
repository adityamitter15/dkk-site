/**
 * Homepage testimonials. A member on the dan register is referenced by `slug`,
 * so their name and grade are read from data/yudansha.ts at build time and a
 * promotion is one edit there (see lib/members.ts). Someone not on the register
 * keeps a hand-written `name` and `grade`. Quotes are attributed speech: never
 * edit one.
 */
export type Testimonial =
  | { quote: string; slug: string }
  | { quote: string; name: string; grade: string };

export const testimonials: Testimonial[] = [
  {
    quote: "From the first class, training with DKK was a kick to the gut, both literally and metaphorically. The sweet thrill of fear I feel walking into the dojo is a big part of what I love about it.",
    name: "Daniel Bradley",
    grade: "2nd Dan",
  },
  {
    quote: "Of all the places I've trained, nowhere else have I been surrounded by so many people who work so hard to push each other past what they thought were their limits.",
    slug: "catherine-sandwell",
  },
  {
    quote: "I wanted to train where my fitness was challenged while learning self-protection. DKK provided that and taught me control, inner strength, resilience, and how to surpass my own limits.",
    slug: "laila-al-minyawi",
  },
  {
    quote: "Through DKK, I have been given the opportunity to push myself beyond what I thought were my limits and achieve what I thought was beyond me.",
    slug: "richard-gaillard",
  },
  {
    quote: "In DKK and Shihan Mulholland, I found exactly what I was looking for in a martial arts association. The people who make up DKK are just a joy to spend time with.",
    slug: "luke-wilcox",
  },
  {
    quote: "The fight-or-flee rush of my first class isn't one I'll easily ever forget. I found myself replaying every movement in my head over and over again like a movie.",
    slug: "sidney-ushurhe",
  },
  {
    quote: "The breadth of Goju Ryu and the depth to which we study it fascinates me. DKK has been a fundamental part of my life ever since my first class.",
    slug: "mizuki-murai",
  },
  {
    quote: "I consider it a privilege to train with the calibre of people in the club.",
    slug: "tunde-oladimeji",
  },
];
