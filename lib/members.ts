/**
 * Build-time lookups into the dan register (data/yudansha.ts), so a member's
 * name, grade and grade years are written in ONE place. A promotion is still a
 * human edit (move the member to the new tier, add a milestone), but it is one
 * edit: every caption, testimonial, instructor card and sentence that reads
 * from here follows on the next build.
 *
 * Server-side only. Importing values (not just types) from here in a
 * "use client" file would ship the whole register, bios included, to the browser.
 */
import { getMemberBySlug, grades, type Member } from "@/data/yudansha";
import { testimonials } from "@/data/testimonials";

type RegisterMember = NonNullable<ReturnType<typeof getMemberBySlug>>;

/** Throws on an unknown slug so a typo or a removed member fails the build instead of printing "undefined". */
export function member(slug: string): RegisterMember {
  const m = getMemberBySlug(slug);
  if (!m) throw new Error(`lib/members.ts: no member with slug "${slug}" in data/yudansha.ts`);
  return m;
}

/** Current grade, e.g. "4th Dan". */
export function danOf(slug: string): string {
  return member(slug).dan;
}

/** Gallery caption, "Name - 3rd Dan" or "Name · 3rd Dan". */
export function memberCaption(slug: string, sep: " - " | " · " = " - "): string {
  const m = member(slug);
  return `${m.name}${sep}${m.dan}`;
}

/**
 * Year a member reached `grade`, as the register shows it. Prioritised match,
 * moved here unchanged from app/yudansha/page.tsx: exact event, then a partial
 * match that is not a "-Ho" grade, then any partial match (some members only
 * have a Shodan-Ho milestone). "" when there is none.
 */
export function yearOfGrade(m: Pick<Member, "milestones">, grade: string): string {
  return (
    m.milestones?.find((x) => x.event === grade)?.year ||
    m.milestones?.find((x) => x.event.includes(grade) && !x.event.includes("-Ho"))?.year ||
    m.milestones?.find((x) => x.event.includes(grade))?.year ||
    ""
  );
}

const START_EVENT = /^(Began|Joined|First Class)\b/;

/**
 * Year the member started training: the first milestone that marks a start
 * ("Began Training", "Joined DKK", "First Class at DKK"...) with a 4-digit year.
 * Null when there is none, so the page shows no start stat rather than passing
 * a grade year off as a start year.
 */
export function trainingStartYear(m: Pick<Member, "milestones">): number | null {
  const start = m.milestones?.find((x) => START_EVENT.test(x.event) && /^\d{4}$/.test(x.year));
  return start ? Number(start.year) : null;
}

/**
 * Each dan grade from `from` up to the member's current grade with the year it
 * was reached, oldest first. Tiers come from the register itself, so a new top
 * tier needs no change here. Grades with no recorded year are skipped.
 */
export function danHistory(slug: string, from = "Nidan"): { grade: string; dan: string; year: string }[] {
  const m = member(slug);
  const ascending = [...grades].reverse();
  const start = ascending.findIndex((t) => t.grade === from);
  const end = ascending.findIndex((t) => t.grade === m.grade);
  if (start < 0 || end < start) return [];
  return ascending
    .slice(start, end + 1)
    .map((t) => ({ grade: t.grade, dan: t.dan, year: yearOfGrade(m, t.grade) }))
    .filter((s) => s.year !== "");
}

export type ResolvedTestimonial = { quote: string; name: string; grade: string };

/** Testimonials with register members' names and grades filled in from data/yudansha.ts. */
export function resolvedTestimonials(): ResolvedTestimonial[] {
  return testimonials.map((t) => {
    if ("slug" in t) {
      const m = member(t.slug);
      return { quote: t.quote, name: m.name, grade: m.dan };
    }
    return { quote: t.quote, name: t.name, grade: t.grade };
  });
}
