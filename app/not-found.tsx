import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";

/**
 * The photo is a real club one from summer camp, captioned in meme format,
 * rather than an actual internet meme. A stock meme would be someone else's
 * copyrighted image sitting on the club's site, and the club's own obstacle
 * course is funnier anyway: one man crawling out from under the cargo net,
 * one man standing over him watching it happen.
 */
export default function NotFound() {
  return (
    <section className="min-h-[100svh] flex items-center justify-center bg-night py-24">
      <div className="text-center px-6 max-w-2xl">
        <p className="font-display text-[8rem] sm:text-[12rem] text-brand/20 leading-none">404</p>
        <h1 className="font-display text-4xl sm:text-5xl text-white tracking-wide -mt-6 mb-4">Page Not Found</h1>
        <p className="text-gold/80 font-display text-xl sm:text-2xl tracking-[0.08em] italic mb-8">
          Always a little further&hellip; but not this far.
        </p>

        <figure className="mb-8">
          <div className="relative aspect-[4/3] sm:aspect-[3/2] rounded-sm overflow-hidden bg-card border border-white/10">
            <SafeImage
              src="/images/Camp/obstacle-crawl.JPG"
              alt="A DKK member crawling out from under the cargo net on the summer camp obstacle course while another member stands over him, watching"
              fill
              className="object-cover object-center"
            />
            {/* Zero-alpha stops, never via-transparent: Tailwind v4 interpolates
                gradients in oklab and a transparent stop muddies the photo. */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/80 to-black/0" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-black/0" />

            <p className="absolute top-3 sm:top-5 inset-x-3 sm:inset-x-6 font-display text-white text-lg sm:text-2xl lg:text-3xl uppercase tracking-wide leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              You, looking for that page
            </p>
            <p className="absolute bottom-3 sm:bottom-5 inset-x-3 sm:inset-x-6 font-display text-white text-lg sm:text-2xl lg:text-3xl uppercase tracking-wide leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Us, watching you look for that page
            </p>
          </div>
          <figcaption className="text-gray-600 text-xs mt-2 tracking-wide">
            Summer camp, obstacle course. No pages were harmed.
          </figcaption>
        </figure>

        <p className="text-gray-400 text-base max-w-md mx-auto mb-8">
          That page doesn&apos;t exist. Head back to the homepage, check the{" "}
          <Link href="/faq" className="link-underline text-gold">
            common questions
          </Link>
          , or just get in touch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-brand text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-hover transition-colors rounded-sm inline-flex items-center justify-center gap-2"
          >
            Homepage <ChevronRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-widest text-sm hover:border-brand hover:bg-brand/10 transition-all rounded-sm inline-flex items-center justify-center gap-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
