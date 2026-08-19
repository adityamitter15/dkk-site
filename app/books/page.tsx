import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Books",
  description: "Books by Shihan Gavin Mulholland on Okinawan Goju Ryu karate. Four Shades of Black and More Shades of Black.",
  openGraph: { images: ["/og/books.jpg"] },
  twitter: { images: ["/og/books.jpg"] },
};

type Book = {
  title: string;
  author: string;
  cover: string;
  description: string;
  endorsement?: string;
  ukUrl: string;
  usUrl: string;
  featured: boolean;
};

const dkkBooks: Book[] = [
  {
    title: "Four Shades of Black",
    author: "Gavin Mulholland",
    cover: "/images/Book Covers/4SOB.jpg",
    description: "The highly acclaimed debut by Shihan Gavin Mulholland. A deep, uncompromising exploration of Okinawan Goju Ryu covering technique, philosophy, and the real martial arts journey. Rated 4.4/5 on Goodreads.",
    endorsement: "\"One of, if not the best practical book I've read on karate. About time someone wrote the real deal about kata instead of the gibberish usually seen.\"",
    ukUrl: "https://www.amazon.co.uk/s?k=Four+Shades+of+Black+Gavin+Mulholland",
    usUrl: "https://www.amazon.com/s?k=Four+Shades+of+Black+Gavin+Mulholland",
    featured: false,
  },
  {
    title: "More Shades of Black",
    author: "Gavin Mulholland",
    cover: "/images/Book Covers/MoreShades.jpg",
    description: "The Traditional Path from Black Belt to Master. Continuing where Four Shades of Black left off, this volume examines the higher kata of Goju Ryu, from Seiunchin through to the advanced Suparinpei, as a training guide for black belts advancing toward mastery.",
    endorsement: "\"This book is not repeating the tropes of others, but comes from original experience and extensive research. That's what makes it a valuable read for any martial artist.\" - Steve Rowe, 9th Dan",
    ukUrl: "https://amzn.eu/d/hFRzV0w",
    usUrl: "https://a.co/d/iYlghf0",
    featured: true,
  },
];

/** Bookshop editorial row: large cover beside the copy, gold endorsement pull-quote. */
function BookCard({ book }: { book: Book }) {
  return (
    <div className="relative flex flex-col sm:flex-row gap-8 sm:gap-10 py-10 first:pt-0 border-b border-white/10 last:border-b-0 group">
      {/* Cover */}
      <div className="relative flex-shrink-0 w-[180px] sm:w-[220px] mx-auto sm:mx-0">
        {book.featured && (
          <div className="absolute -top-2 -right-2 z-10 px-2 py-0.5 bg-brand text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm">
            Latest
          </div>
        )}
        <div className="relative bg-night rounded-sm overflow-hidden ring-1 ring-white/10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)]" style={{ aspectRatio: "3/4" }}>
          <SafeImage
            src={book.cover}
            alt={book.title}
            fill
            sizes="220px"
            className="object-contain p-3 group-hover:scale-[1.03] transition-transform duration-500"
          />
        </div>
      </div>
      {/* Info */}
      <div className="flex flex-col flex-1 justify-center">
        <p className="text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-1">by {book.author}</p>
        <h3 className="font-display text-3xl sm:text-4xl tracking-wide text-white mb-4 leading-tight">{book.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xl">{book.description}</p>
        {book.endorsement && (
          <blockquote className="border-l-2 border-gold/50 pl-4 mb-6 max-w-xl">
            <p className="text-gold/80 font-display text-lg tracking-wide leading-snug">{book.endorsement}</p>
          </blockquote>
        )}
        <div className="flex gap-3">
          <a
            href={book.ukUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-6 py-2.5 bg-brand text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-hover transition-colors rounded-sm"
          >
            UK Store <ExternalLink size={11} />
          </a>
          <a
            href={book.usUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-6 py-2.5 bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors rounded-sm"
          >
            US Store <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BooksPage() {
  return (
    <>
      <PageHero
        variant="full"
        eyebrow="Publications"
        eyebrowTone="gold"
        folio="10 / Books"
        kanji="教本"
        kanjiTone="gold"
        title="Books"
        lead="Written by Shihan Gavin Mulholland. Essential reading for serious practitioners."
        image={{ src: "/images/Shihan/shihan-tanto-black.jpg", alt: "Shihan Mulholland - studio portrait with tanto", position: "top" }}
      />

      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Written by Shihan Mulholland"
            title="DKK Books"
            subtitle="Shihan Gavin Mulholland is a published author on Okinawan Goju Ryu. His books are considered essential reading for serious practitioners and draw on decades of training, teaching and research."
          />
          <div className="max-w-3xl">
            {dkkBooks.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-card border border-white/5 rounded-sm max-w-xl flex gap-4 items-start">
            <div className="w-1.5 flex-shrink-0 self-stretch bg-brand rounded-sm" />
            <div>
              <p className="text-white font-semibold mb-1.5">Looking for more?</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                For signed copies, bulk orders, or to find out about any new publications by Shihan Mulholland, contact the club directly.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                Contact Us <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Also Worth Reading */}
          <div className="mt-20">
            <SectionHeading
              eyebrow="Recommended"
              title="Also Worth Reading"
            />
            <div className="space-y-4 max-w-2xl">
              <div className="flex gap-6 items-start bg-card border border-white/5 rounded-sm p-6 hover:border-brand/30 transition-all duration-300 group">
                <div className="relative bg-night rounded-sm overflow-hidden flex-shrink-0" style={{ width: 100, aspectRatio: "2/3" }}>
                  <SafeImage
                    src="/images/Book Covers/WD.jpg"
                    alt="Waking Dragons"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-1">by Goran Powell</p>
                  <h3 className="font-display text-2xl tracking-wide text-white mb-2 leading-tight">Waking Dragons</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    A true account of Goran Powell&apos;s 30 Man Kumite and the lifetime of martial arts training that led up to it. Covers the physical preparation, mental fortitude, and spiritual dimensions of one of the most demanding tests in traditional karate.
                  </p>
                  <a
                    href="https://www.goranpowell.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand font-semibold text-xs uppercase tracking-wider hover:gap-2.5 transition-all"
                  >
                    goranpowell.com <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
