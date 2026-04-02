import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Books",
  description: "Books by Shihan Gavin Mulholland on Okinawan Goju Ryu karate. Four Shades of Black and More Shades of Black.",
};

const dkkBooks = [
  {
    title: "Four Shades of Black",
    author: "Gavin Mulholland",
    cover: "/images/Book Covers/4SOB.jpg",
    description: "The highly acclaimed debut by Shihan Gavin Mulholland. A deep, uncompromising exploration of Okinawan Goju Ryu covering technique, philosophy, and the real martial arts journey. Rated 4.4/5 on Goodreads.",
    endorsement: "\"One of, if not the best practical book I've read on karate. About time someone wrote the real deal about kata instead of the gibberish usually seen.\"" as string | undefined,
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

function BookCard({ book }: { book: typeof dkkBooks[0] }) {
  return (
    <div className={`relative bg-[#141311] rounded-sm overflow-hidden flex flex-col group transition-all duration-300 ${
      book.featured
        ? "border border-[#a8201a]/60 hover:border-[#a8201a] shadow-[0_0_20px_rgba(168,32,26,0.1)] hover:shadow-[0_0_30px_rgba(168,32,26,0.2)]"
        : "border border-[#a8201a]/30 hover:border-[#a8201a]/60"
    }`}>
      {book.featured && (
        <div className="absolute top-3 right-3 z-10 px-2 py-0.5 bg-[#a8201a] text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm">
          Latest
        </div>
      )}
      {/* Cover */}
      <div className="relative bg-[#0f0e0c] flex items-center justify-center p-6" style={{ aspectRatio: "3/4" }}>
        {book.cover ? (
          <SafeImage
            src={book.cover}
            alt={book.title}
            fill
            className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="font-['Bebas_Neue'] text-3xl text-[#a8201a]/40 tracking-widest text-center px-4 leading-tight">{book.title}</span>
            <span className="text-gray-600 text-xs uppercase tracking-widest">Cover coming soon</span>
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-5 flex flex-col flex-1 border-t border-white/5">
        <p className="text-[#a8201a] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">by {book.author}</p>
        <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-3 leading-tight">{book.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{book.description}</p>
        {book.endorsement && (
          <blockquote className="border-l-2 border-[#a8201a]/40 pl-3 mb-4">
            <p className="text-gray-500 text-xs italic leading-relaxed">{book.endorsement}</p>
          </blockquote>
        )}
        <div className="flex gap-3 mt-auto">
          <a
            href={book.ukUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#a8201a] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#c62828] transition-colors rounded-sm"
          >
            UK Store <ExternalLink size={11} />
          </a>
          <a
            href={book.usUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors rounded-sm"
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
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0">
          <SafeImage src="/images/GavPortrait.jpg" alt="" fill className="object-cover object-top opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#b08d57] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#b08d57]" />
            Publications
          </p>
          <h1 className="font-['Bebas_Neue'] text-7xl sm:text-8xl lg:text-[9rem] text-white tracking-wide leading-none mb-4">Books</h1>
          <p className="text-gray-300 text-lg max-w-lg font-light leading-relaxed">Written by Shihan Gavin Mulholland. Essential reading for serious practitioners.</p>
        </div>
      </section>

      <section className="py-16 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Written by Shihan Mulholland"
            title="DKK Books"
            subtitle="Shihan Gavin Mulholland is a published author on Okinawan Goju Ryu. His books are considered essential reading for serious practitioners and draw on decades of training, teaching and research."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {dkkBooks.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#141311] border border-white/5 rounded-sm max-w-xl flex gap-4 items-start">
            <div className="w-1.5 flex-shrink-0 self-stretch bg-[#a8201a] rounded-sm" />
            <div>
              <p className="text-white font-semibold mb-1.5">Looking for more?</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                For signed copies, bulk orders, or to find out about any new publications by Shihan Mulholland, contact the club directly.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#a8201a] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
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
              <div className="flex gap-6 items-start bg-[#141311] border border-white/5 rounded-sm p-6 hover:border-[#a8201a]/30 transition-all duration-300 group">
                <div className="relative bg-[#0f0e0c] rounded-sm overflow-hidden flex-shrink-0" style={{ width: 100, aspectRatio: "2/3" }}>
                  <SafeImage
                    src="/images/Book Covers/WD.jpg"
                    alt="Waking Dragons"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[#a8201a] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">by Goran Powell</p>
                  <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-2 leading-tight">Waking Dragons</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    A true account of Goran Powell&apos;s 30 Man Kumite and the lifetime of martial arts training that led up to it. Covers the physical preparation, mental fortitude, and spiritual dimensions of one of the most demanding tests in traditional karate.
                  </p>
                  <a
                    href="https://www.goranpowell.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#a8201a] font-semibold text-xs uppercase tracking-wider hover:gap-2.5 transition-all"
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
