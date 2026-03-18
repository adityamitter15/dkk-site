import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Books",
  description: "Books by Shihan Gavin Mulholland on Okinawan Goju Ryu karate — Four Shades of Black and More Shades of Black.",
};

const dkkBooks = [
  {
    title: "Four Shades of Black",
    author: "Gavin Mulholland",
    cover: "/images/Book Covers/4SOB.jpg",
    description: "The highly acclaimed debut by Shihan Gavin Mulholland — a deep, uncompromising exploration of Okinawan Goju Ryu covering technique, philosophy, and the real martial arts journey. Considered essential reading for any serious karate practitioner.",
    endorsement: undefined as string | undefined,
    ukUrl: "https://www.amazon.co.uk/s?k=Four+Shades+of+Black+Gavin+Mulholland",
    usUrl: "https://www.amazon.com/s?k=Four+Shades+of+Black+Gavin+Mulholland",
    featured: false,
  },
  {
    title: "More Shades of Black",
    author: "Gavin Mulholland",
    cover: "/images/Book Covers/MoreShades.jpg",
    description: "The Traditional Path from Black Belt to Master. Continuing where Four Shades of Black left off, this volume examines the higher kata of Goju Ryu — from Seiunchin through to the advanced Suparinpei — as a training guide for black belts advancing toward mastery.",
    endorsement: "\"This book is not repeating the tropes of others, but comes from original experience and extensive research. That's what makes it a valuable read for any martial artist.\" \u2014 Steve Rowe, 9th Dan",
    ukUrl: "https://amzn.eu/d/hFRzV0w",
    usUrl: "https://a.co/d/iYlghf0",
    featured: true,
  },
];

function BookCard({ book }: { book: typeof dkkBooks[0] }) {
  return (
    <div className={`relative bg-[#111] rounded-sm overflow-hidden flex flex-col group transition-all duration-300 ${
      book.featured
        ? "border border-[#c0392b]/60 hover:border-[#c0392b] shadow-[0_0_20px_rgba(192,57,43,0.1)] hover:shadow-[0_0_30px_rgba(192,57,43,0.2)]"
        : "border border-[#c0392b]/30 hover:border-[#c0392b]/60"
    }`}>
      {book.featured && (
        <div className="absolute top-3 right-3 z-10 px-2 py-0.5 bg-[#c0392b] text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm">
          Latest
        </div>
      )}
      {/* Cover */}
      <div className="relative bg-[#0a0a0a] flex items-center justify-center p-6" style={{ aspectRatio: "3/4" }}>
        {book.cover ? (
          <SafeImage
            src={book.cover}
            alt={book.title}
            fill
            className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="font-['Bebas_Neue'] text-3xl text-[#c0392b]/40 tracking-widest text-center px-4 leading-tight">{book.title}</span>
            <span className="text-gray-600 text-xs uppercase tracking-widest">Cover coming soon</span>
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-5 flex flex-col flex-1 border-t border-white/5">
        <p className="text-[#c0392b] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">by {book.author}</p>
        <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-3 leading-tight">{book.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{book.description}</p>
        {book.endorsement && (
          <blockquote className="border-l-2 border-[#c0392b]/40 pl-3 mb-4">
            <p className="text-gray-500 text-xs italic leading-relaxed">{book.endorsement}</p>
          </blockquote>
        )}
        <div className="flex gap-3 mt-auto">
          <a
            href={book.ukUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#c0392b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#e74c3c] transition-colors rounded-sm"
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
      <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_50%,_#1a0000_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c0392b]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#c0392b] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#c0392b]" />
            Publications
          </p>
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-6">Books</h1>
          <div className="w-16 h-1 bg-[#c0392b]" />
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a]">
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

          <div className="mt-12 p-6 bg-[#111] border border-white/5 rounded-sm max-w-xl flex gap-4 items-start">
            <div className="w-1.5 flex-shrink-0 self-stretch bg-[#c0392b] rounded-sm" />
            <div>
              <p className="text-white font-semibold mb-1.5">Looking for more?</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                For signed copies, bulk orders, or to find out about any new publications by Shihan Mulholland, contact the club directly.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#c0392b] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                Contact Us <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Waking Dragons */}
          <div className="mt-20">
            <SectionHeading
              eyebrow="Recommended"
              title="Also Worth Reading"
            />
            <div className="flex gap-6 items-start max-w-2xl bg-[#111] border border-white/5 rounded-sm p-6 hover:border-[#c0392b]/30 transition-all duration-300 group">
              <div className="relative bg-[#0a0a0a] rounded-sm overflow-hidden flex-shrink-0" style={{ width: 100, aspectRatio: "2/3" }}>
                <SafeImage
                  src="/images/Book Covers/WD.jpg"
                  alt="Waking Dragons"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <p className="text-[#c0392b] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">by Goran Powell</p>
                <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-2 leading-tight">Waking Dragons</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  A true account of Goran Powell&apos;s 30 Man Kumite and the lifetime of martial arts training that led up to it. Covers the physical preparation, mental fortitude, and spiritual dimensions of one of the most demanding tests in traditional karate. Highly recommended for any serious practitioner.
                </p>
                <a
                  href="https://www.goranpowell.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#c0392b] font-semibold text-xs uppercase tracking-wider hover:gap-2.5 transition-all"
                >
                  goranpowell.com <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
