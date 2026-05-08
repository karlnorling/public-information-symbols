/**
 * Shared TypeScript types for the @public-information-symbols packages.
 */

/**
 * Category of an ISO 7001 public information symbol.
 */
export type SymbolCategory =
  | "accessibility"
  | "public-facilities"
  | "transportation"
  | "behaviour"
  | "commercial"
  | "tourism"
  | "sporting";

/**
 * Pre-built image asset paths, relative to the package `assets/` directory.
 * Each raster format is available at five sizes: 240, 512, 768, 1024 and 2048 px².
 */
export interface SymbolAssets {
  jpg: Record<number, string>;
  png: Record<number, string>;
  svg: string;
  webp: Record<number, string>;
}

/**
 * A single ISO 7001 public information symbol with all associated metadata and assets.
 */
export interface PISymbol {
  assets: SymbolAssets;
  category: SymbolCategory;
  /** ISO 7001 code, e.g. `"AC 001"` or `"PF 015"`. */
  code: string;
  description: string;
  /** Slug identifier, e.g. `"ac-001-full-accessibility"`. */
  id: string;
  name: string;
  /** Full inline SVG string (optimised by SVGO). */
  svg: string;
}
