/**
 * scrape.ts
 *
 * Scrapes ISO 7001 public information symbol data from the Wikipedia article
 * "ISO 7001". Returns structured data including Wikimedia Commons image URLs
 * and descriptions for each symbol, grouped by category.
 *
 * Run indirectly via `yarn update` (bin/update.ts).
 */

import { parse } from "node-html-parser";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SymbolCategory =
  | "accessibility"
  | "public-facilities"
  | "transportation"
  | "behaviour"
  | "commercial"
  | "tourism"
  | "sporting";

/** A single scraped ISO 7001 symbol entry. */
export interface ScrapedSymbol {
  /** ISO 7001 code, e.g. "AC 001" or "PF 015". */
  code: string;
  /** Human-readable description from the Wikipedia gallery caption. */
  name: string;
  /** Wikimedia Commons file page URL for the symbol's SVG. */
  imageUrl: string | null;
}

/** Root shape of the data returned by {@link scrape}. */
export type ScrapedData = Record<SymbolCategory, ScrapedSymbol[]>;

// ---------------------------------------------------------------------------
// Category configuration
// ---------------------------------------------------------------------------

const CATEGORIES: Array<{
  category: SymbolCategory;
  prefix: string;
  headingIds: string[];
}> = [
  {
    category: "accessibility",
    prefix: "AC",
    headingIds: ["Accessibility"],
  },
  {
    category: "public-facilities",
    prefix: "PF",
    headingIds: ["Public_facilities", "Public_Facilities"],
  },
  {
    category: "transportation",
    prefix: "TF",
    headingIds: ["Transportation_facilities", "Transportation_Facilities"],
  },
  {
    category: "behaviour",
    prefix: "BP",
    headingIds: ["Behaviour_of_the_public", "Behaviour_of_the_Public"],
  },
  {
    category: "commercial",
    prefix: "CF",
    headingIds: ["Commercial_facilities", "Commercial_Facilities"],
  },
  {
    category: "tourism",
    prefix: "TC",
    headingIds: ["Tourism,_culture_and_heritage", "Tourism,_Culture_and_Heritage"],
  },
  {
    category: "sporting",
    prefix: "SA",
    headingIds: ["Sporting_activities", "Sporting_Activities"],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Regex matching an ISO 7001 symbol code, e.g. "AC 001", "PF 015", "SA 004" */
const SYMBOL_CODE_RE = /\b(AC|PF|TF|BP|CF|TC|SA)\s+(\d{3})\b/;

const extractCode = (text: string): string | null => {
  const m = text.match(SYMBOL_CODE_RE);
  return m ? `${m[1]} ${m[2]}` : null;
};

const cleanName = (text: string, code: string): string =>
  text
    .replace(new RegExp(`^${code}\\s*[:\\-–—]?\\s*`, "i"), "")
    .replace(/\[\d+\]/g, "")
    .replace(/\s+/g, " ")
    .trim();

// ---------------------------------------------------------------------------
// Scraping logic
// ---------------------------------------------------------------------------

const scrapeSection = (
  htmlData: ReturnType<typeof parse>,
  headingId: string,
  prefix: string,
): ScrapedSymbol[] => {
  const heading = htmlData.getElementById(headingId);
  if (!heading) return [];

  let node = heading.parentNode?.nextElementSibling;
  const symbols: ScrapedSymbol[] = [];

  while (node) {
    const tag = node.tagName?.toLowerCase();

    if (tag === "h2" || tag === "h3") break;
    if (tag === "div") {
      const cls = node.getAttribute("class") ?? "";
      if (cls.includes("mw-heading2") || cls.includes("mw-heading3")) break;
    }

    if (tag === "ul" && node.classNames?.includes("gallery")) {
      for (const li of node.querySelectorAll("li.gallerybox")) {
        const imgLink = li.querySelector(".thumb a, .gallery-image-body a");
        const href = imgLink?.getAttribute("href") ?? null;
        const imageUrl = href ? `https://en.wikipedia.org${href}` : null;

        const captionEl = li.querySelector(".gallerytext, figcaption");
        const caption = captionEl?.textContent?.trim() ?? "";

        const code = extractCode(caption) ?? extractCode(href ?? "");
        if (!code || !code.startsWith(prefix)) continue;

        const name = cleanName(caption, code) || code;
        symbols.push({ code, imageUrl, name });
      }
    }

    node = node.nextElementSibling;
  }

  return symbols;
};

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

const scrape = async (): Promise<ScrapedData> => {
  const URL = "https://en.wikipedia.org/wiki/ISO_7001";
  const response = await fetch(URL);
  if (response.status !== 200) {
    throw new Error(`Failed to fetch Wikipedia page: ${response.status}`);
  }

  const html = await response.text();
  const doc = parse(html);

  const result: ScrapedData = {
    accessibility: [],
    "public-facilities": [],
    transportation: [],
    behaviour: [],
    commercial: [],
    tourism: [],
    sporting: [],
  };

  for (const { category, prefix, headingIds } of CATEGORIES) {
    let symbols: ScrapedSymbol[] = [];
    for (const headingId of headingIds) {
      symbols = scrapeSection(doc, headingId, prefix);
      if (symbols.length > 0) break;
    }

    if (symbols.length === 0) {
      console.warn(`  Warning: no symbols found for category "${category}" (prefix ${prefix})`);
    } else {
      console.log(`  ${category}: ${symbols.length} symbols`);
    }

    result[category] = symbols;
  }

  return result;
};

export default scrape;
