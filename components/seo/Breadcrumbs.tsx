import { site } from "@/data/site";

type Crumb = { name: string; path: string };

type Props = {
  trail: Crumb[];
};

/**
 * Emits BreadcrumbList structured data so Google can show a breadcrumb trail
 * in search results. Renders no visible output - server component, JSON-LD
 * only.
 */
export default function Breadcrumbs({ trail }: Props) {
  const items: Crumb[] = [{ name: "Home", path: "/" }, ...trail];

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
