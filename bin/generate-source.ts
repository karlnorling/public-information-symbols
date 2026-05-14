/**
 * generate-source.ts
 *
 * Reads data/scraped.json + assets/svg-map.json and generates:
 *   - packages/@public-information-symbols/core/src/symbols.generated.ts
 *   - packages/@public-information-symbols/react/src/SymbolProps.ts
 *   - packages/@public-information-symbols/react/src/{ComponentName}.tsx  (one per symbol)
 *   - packages/@public-information-symbols/react/src/index.ts
 *   - packages/@public-information-symbols/vue/src/SymbolProps.ts
 *   - packages/@public-information-symbols/vue/src/{ComponentName}.ts    (one per symbol)
 *   - packages/@public-information-symbols/vue/src/index.ts
 *   - packages/@public-information-symbols/elements/src/{ComponentName}.ts (one per symbol)
 *   - packages/@public-information-symbols/elements/src/defineCustomElements.ts
 *   - packages/@public-information-symbols/elements/src/index.ts
 *
 * Run via: yarn generate
 */

import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';
import type { ScrapedData, SymbolCategory } from './scrape';
import type { PISymbol } from '../packages/@public-information-symbols/core/src/types';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const slugify = (str: string): string =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Converts a kebab-case slug to PascalCase component name. */
const toComponentName = (id: string): string =>
  id
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

const IMAGE_SIZES = [240, 512, 768, 1024, 2048] as const;

const buildAssets = (svgRelPath: string): PISymbol['assets'] => {
  const dir = path.dirname(svgRelPath);
  const base = path.basename(svgRelPath, path.extname(svgRelPath));
  const makeRecord = (ext: string): Record<number, string> =>
    Object.fromEntries(IMAGE_SIZES.map((s) => [s, `${dir}/${base}_${s}x${s}.${ext}`])) as Record<
      number,
      string
    >;
  return {
    jpg: makeRecord('jpg'),
    png: makeRecord('png'),
    svg: svgRelPath,
    webp: makeRecord('webp'),
  };
};

const cleanSvg = (svg: string): string =>
  svg
    .replace(/<\?xml[^>]*\?>/g, '')
    .replace(/<!DOCTYPE[^>]*>/g, '')
    .trim();

const optimizeSvg = (svg: string): string =>
  optimize(svg, { multipass: true, plugins: ['preset-default'] }).data;

/** Prefix every internal SVG id with the symbol slug to prevent DOM collisions. */
const scopeBodyIds = (body: string, prefix: string): string => {
  const ids = new Set<string>();
  body.replace(/\bid="([^"]+)"/g, (_, id: string) => {
    ids.add(id);
    return _;
  });
  if (ids.size === 0) return body;
  let out = body;
  for (const id of ids) {
    const esc = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out
      .replace(new RegExp(`\\bid="${esc}"`, 'g'), `id="${prefix}-${id}"`)
      .replace(new RegExp(`url\\(#${esc}\\)`, 'g'), `url(#${prefix}-${id})`)
      .replace(new RegExp(`href="#${esc}"`, 'g'), `href="#${prefix}-${id}"`);
  }
  return out;
};

/** "AC 001" → "accessibility", "PF 015" → "public-facilities", etc. */
const categoryFromCode = (code: string): SymbolCategory => {
  const prefix = code.split(' ')[0].toUpperCase();
  const map: Record<string, SymbolCategory> = {
    AC: 'accessibility',
    PF: 'public-facilities',
    TF: 'transportation',
    BP: 'behaviour',
    CF: 'commercial',
    TC: 'tourism',
    SA: 'sporting',
  };
  return map[prefix] ?? 'public-facilities';
};

// ---------------------------------------------------------------------------
// Entry collection
// ---------------------------------------------------------------------------

interface ComponentEntry {
  id: string;
  name: string;
  description: string;
  optimizedSvg: string;
}

const collectEntries = (
  scraped: ScrapedData,
  svgMap: Record<string, string>,
): Array<{ sign: PISymbol; optimizedSvg: string }> => {
  const results: Array<{ sign: PISymbol; optimizedSvg: string }> = [];

  for (const [, symbols] of Object.entries(scraped)) {
    for (const symbol of symbols) {
      const category = categoryFromCode(symbol.code);
      // slug: "AC 001" → "ac-001", name: "Full accessibility" → "ac-001-full-accessibility"
      const codeSlug = symbol.code.toLowerCase().replace(/\s+/, '-');
      const id = symbol.name ? `${codeSlug}-${slugify(symbol.name)}` : codeSlug;

      // Find the SVG in the map: look for files under the category/codeSlug path
      const svgKey = Object.keys(svgMap).find((k) => {
        const normalized = k.replace(/\\/g, '/');
        return (
          (normalized.startsWith(`${category}/${codeSlug}/`) ||
            normalized.includes(`/${category}/${codeSlug}/`)) &&
          normalized.endsWith('.svg') &&
          !/_\d+x\d+\.svg$/.test(normalized)
        );
      });

      if (!svgKey) {
        console.warn(`  No SVG found for ${symbol.code} (${id}), skipping`);
        continue;
      }

      const rawSvg = svgMap[svgKey];
      const cleaned = cleanSvg(rawSvg);
      const opt = optimizeSvg(cleaned);

      const assets = buildAssets(svgKey);

      results.push({
        sign: {
          assets,
          category,
          code: symbol.code,
          description: symbol.name,
          id,
          name: symbol.name,
          svg: opt,
        },
        optimizedSvg: opt,
      });
    }
  }

  return results;
};

// ---------------------------------------------------------------------------
// Code generation — core/src/symbols.generated.ts
// ---------------------------------------------------------------------------

const generateSymbolsFile = (symbols: PISymbol[]): string => {
  const esc = (s: string): string =>
    s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

  const entries = symbols.map((s) => {
    const assetsStr = JSON.stringify(s.assets, null, 4).replace(/"/g, "'");
    return [
      `  {`,
      `    assets: ${assetsStr},`,
      `    category: '${s.category}',`,
      `    code: '${s.code}',`,
      `    description: \`${esc(s.description)}\`,`,
      `    id: '${s.id}',`,
      `    name: \`${esc(s.name)}\`,`,
      `    svg: \`${esc(s.svg)}\`,`,
      `  },`,
    ].join('\n');
  });

  return [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import type { PISymbol } from './types';`,
    ``,
    `export const symbols: PISymbol[] = [`,
    ...entries,
    `];`,
    ``,
  ].join('\n');
};

// ---------------------------------------------------------------------------
// Code generation — react/src/SymbolProps.ts
// ---------------------------------------------------------------------------

const generateReactPropsFile = (): string =>
  [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `export type { SymbolProps } from './SymbolPropsBase';`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — react/src/{ComponentName}.tsx
// ---------------------------------------------------------------------------

const generateReactComponentFile = (entry: ComponentEntry): string => {
  const { description, id, name, optimizedSvg } = entry;
  const componentName = toComponentName(id);

  const svgBodyMatch = optimizedSvg.match(/^<svg([^>]*)>([\s\S]*)<\/svg>\s*$/i);
  const svgAttrs = svgBodyMatch ? svgBodyMatch[1] : '';
  const svgBody = scopeBodyIds(svgBodyMatch ? svgBodyMatch[2] : optimizedSvg, id);

  const esc = (s: string): string =>
    s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

  const widthMatch = svgAttrs.match(/\bwidth="([^"]+)"/);
  const heightMatch = svgAttrs.match(/\bheight="([^"]+)"/);
  const defaultWidth = (widthMatch ? widthMatch[1] : '100%').replace(/px$/, '');
  const defaultHeight = (heightMatch ? heightMatch[1] : '100%').replace(/px$/, '');

  const hasViewBox = /\bviewBox="/.test(svgAttrs);
  const syntheticViewBox =
    !hasViewBox && /^\d+(\.\d+)?$/.test(defaultWidth) && /^\d+(\.\d+)?$/.test(defaultHeight)
      ? ` viewBox="0 0 ${defaultWidth} ${defaultHeight}"`
      : '';

  const attrsWithoutSize =
    svgAttrs
      .replace(/\s*\bwidth="[^"]*"/, '')
      .replace(/\s*\bheight="[^"]*"/, '')
      .trim() + syntheticViewBox;

  return [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import * as React from 'react';`,
    `import type { SymbolProps } from './SymbolPropsBase';`,
    ``,
    `const _Attrs = \`${esc(attrsWithoutSize)}\`;`,
    `const _Body = \`${esc(svgBody)}\`;`,
    `const _DefaultDesc = \`${esc(description.slice(0, 300))}\`;`,
    `const _DefaultTitle = '${name.replace(/'/g, "\\'")}';`,
    `const _DefaultWidth = \`${esc(defaultWidth)}\`;`,
    `const _DefaultHeight = \`${esc(defaultHeight)}\`;`,
    `const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');`,
    ``,
    `export const ${componentName} = React.memo<SymbolProps>(`,
    `  ({ 'aria-label': ariaLabel, className, description, height, style, title, width }) => {`,
    `    const descId = \`pi-desc-${id}\`;`,
    `    const titleId = \`pi-title-${id}\`;`,
    `    const _w = width !== undefined ? _h(String(width)) : _DefaultWidth;`,
    `    const _ht = height !== undefined ? _h(String(height)) : _DefaultHeight;`,
    `    const resolvedTitle = title ?? _DefaultTitle;`,
    `    const resolvedDesc = description ?? _DefaultDesc;`,
    `    const svgHtml = \`<svg \${_Attrs} width="\${_w}" height="\${_ht}" role="img" aria-labelledby="\${titleId} \${descId}">`,
    `  <title id="\${titleId}">\${_h(resolvedTitle)}</title>`,
    `  <desc id="\${descId}">\${_h(resolvedDesc)}</desc>`,
    `  \${_Body}</svg>\`;`,
    `    return (`,
    `      <span`,
    `        aria-label={ariaLabel}`,
    `        className={className}`,
    `        dangerouslySetInnerHTML={{ __html: svgHtml }}`,
    `        style={{ display: 'contents', ...style }}`,
    `      />`,
    `    );`,
    `  },`,
    `);`,
    `${componentName}.displayName = '${componentName}';`,
    ``,
  ].join('\n');
};

// ---------------------------------------------------------------------------
// Code generation — react/src/index.ts
// ---------------------------------------------------------------------------

const generateReactIndex = (componentNames: string[]): string =>
  [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `export type { SymbolProps } from './SymbolPropsBase';`,
    `export { SymbolById } from './SymbolById';`,
    ...componentNames.map((name) => `export { ${name} } from './${name}';`),
    `export type { PISymbol, SymbolAssets, SymbolCategory } from '@public-information-symbols/core';`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — vue/src/SymbolProps.ts
// ---------------------------------------------------------------------------

const generateVuePropsFile = (): string =>
  [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `export { symbolProps } from './SymbolPropsBase';`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — vue/src/{ComponentName}.ts
// ---------------------------------------------------------------------------

const generateVueComponentFile = (entry: ComponentEntry): string => {
  const { description, id, name, optimizedSvg } = entry;
  const componentName = toComponentName(id);

  const svgBodyMatch = optimizedSvg.match(/^<svg([^>]*)>([\s\S]*)<\/svg>\s*$/i);
  const svgAttrs = svgBodyMatch ? svgBodyMatch[1] : '';
  const svgBody = scopeBodyIds(svgBodyMatch ? svgBodyMatch[2] : optimizedSvg, id);

  const esc = (s: string): string =>
    s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

  const widthMatch = svgAttrs.match(/\bwidth="([^"]+)"/);
  const heightMatch = svgAttrs.match(/\bheight="([^"]+)"/);
  const defaultWidth = (widthMatch ? widthMatch[1] : '100%').replace(/px$/, '');
  const defaultHeight = (heightMatch ? heightMatch[1] : '100%').replace(/px$/, '');

  const hasViewBox = /\bviewBox="/.test(svgAttrs);
  const syntheticViewBox =
    !hasViewBox && /^\d+(\.\d+)?$/.test(defaultWidth) && /^\d+(\.\d+)?$/.test(defaultHeight)
      ? ` viewBox="0 0 ${defaultWidth} ${defaultHeight}"`
      : '';

  const attrsWithoutSize =
    svgAttrs
      .replace(/\s*\bwidth="[^"]*"/, '')
      .replace(/\s*\bheight="[^"]*"/, '')
      .trim() + syntheticViewBox;

  return [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import { defineComponent, h } from 'vue';`,
    `import { symbolProps } from './SymbolPropsBase';`,
    ``,
    `const _Attrs = \`${esc(attrsWithoutSize)}\`;`,
    `const _Body = \`${esc(svgBody)}\`;`,
    `const _DefaultDesc = \`${esc(description.slice(0, 300))}\`;`,
    `const _DefaultTitle = '${name.replace(/'/g, "\\'")}';`,
    `const _DefaultWidth = \`${esc(defaultWidth)}\`;`,
    `const _DefaultHeight = \`${esc(defaultHeight)}\`;`,
    `const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');`,
    ``,
    `export const ${componentName} = defineComponent({`,
    `  name: '${componentName}',`,
    `  inheritAttrs: false,`,
    `  props: {`,
    `    ...symbolProps,`,
    `  },`,
    `  setup(props, { attrs }) {`,
    `    return () => {`,
    `      const descId = \`pi-desc-${id}\`;`,
    `      const titleId = \`pi-title-${id}\`;`,
    `      const _w = props.width !== undefined ? _h(String(props.width)) : _DefaultWidth;`,
    `      const _ht = props.height !== undefined ? _h(String(props.height)) : _DefaultHeight;`,
    `      const resolvedTitle = props.title ?? _DefaultTitle;`,
    `      const resolvedDesc = props.description ?? _DefaultDesc;`,
    `      const svgHtml = \`<svg \${_Attrs} width="\${_w}" height="\${_ht}" role="img" aria-labelledby="\${titleId} \${descId}">`,
    `  <title id="\${titleId}">\${_h(resolvedTitle)}</title>`,
    `  <desc id="\${descId}">\${_h(resolvedDesc)}</desc>`,
    `  \${_Body}</svg>\`;`,
    `      return h('span', {`,
    `        ...attrs,`,
    `        style: { display: 'contents', ...(typeof attrs.style === 'object' ? (attrs.style as Record<string, unknown>) : {}) },`,
    `        innerHTML: svgHtml,`,
    `      });`,
    `    };`,
    `  },`,
    `});`,
    ``,
  ].join('\n');
};

// ---------------------------------------------------------------------------
// Code generation — vue/src/index.ts
// ---------------------------------------------------------------------------

const generateVueIndex = (componentNames: string[]): string =>
  [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `export { symbolProps } from './SymbolPropsBase';`,
    `export { SymbolById } from './SymbolById';`,
    ...componentNames.map((name) => `export { ${name} } from './${name}';`),
    `export type { PISymbol, SymbolAssets, SymbolCategory } from '@public-information-symbols/core';`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — elements/src/{ComponentName}.ts
// ---------------------------------------------------------------------------

const generateElementFile = (entry: ComponentEntry): string => {
  const { description, id, name, optimizedSvg } = entry;
  const componentName = toComponentName(id);

  const svgBodyMatch = optimizedSvg.match(/^<svg([^>]*)>([\s\S]*)<\/svg>\s*$/i);
  const svgAttrs = svgBodyMatch ? svgBodyMatch[1] : '';
  const svgBody = scopeBodyIds(svgBodyMatch ? svgBodyMatch[2] : optimizedSvg, id);

  const esc = (s: string): string =>
    s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

  const widthMatch = svgAttrs.match(/\bwidth="([^"]+)"/);
  const heightMatch = svgAttrs.match(/\bheight="([^"]+)"/);
  const defaultWidth = (widthMatch ? widthMatch[1] : '100%').replace(/px$/, '');
  const defaultHeight = (heightMatch ? heightMatch[1] : '100%').replace(/px$/, '');

  const hasViewBox = /\bviewBox="/.test(svgAttrs);
  const syntheticViewBox =
    !hasViewBox && /^\d+(\.\d+)?$/.test(defaultWidth) && /^\d+(\.\d+)?$/.test(defaultHeight)
      ? ` viewBox="0 0 ${defaultWidth} ${defaultHeight}"`
      : '';

  const attrsWithoutSize =
    svgAttrs
      .replace(/\s*\bwidth="[^"]*"/, '')
      .replace(/\s*\bheight="[^"]*"/, '')
      .trim() + syntheticViewBox;

  return [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `const _Attrs = \`${esc(attrsWithoutSize)}\`;`,
    `const _Body = \`${esc(svgBody)}\`;`,
    `const _DefaultDesc = \`${esc(description.slice(0, 300))}\`;`,
    `const _DefaultTitle = '${name.replace(/'/g, "\\'")}';`,
    `const _DefaultWidth = \`${esc(defaultWidth)}\`;`,
    `const _DefaultHeight = \`${esc(defaultHeight)}\`;`,
    `const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');`,
    ``,
    `export class ${componentName} extends HTMLElement {`,
    `  static readonly tagName = 'pi-${id}';`,
    `  static readonly observedAttributes = ['title', 'description', 'width', 'height'];`,
    ``,
    `  connectedCallback(): void { this._render(); }`,
    `  attributeChangedCallback(): void { this._render(); }`,
    ``,
    `  private _render(): void {`,
    `    const descId = \`pi-desc-${id}\`;`,
    `    const titleId = \`pi-title-${id}\`;`,
    `    const _w = this.hasAttribute('width') ? _h(this.getAttribute('width')!) : _DefaultWidth;`,
    `    const _ht = this.hasAttribute('height') ? _h(this.getAttribute('height')!) : _DefaultHeight;`,
    `    const resolvedTitle = this.getAttribute('title') ?? _DefaultTitle;`,
    `    const resolvedDesc = this.getAttribute('description') ?? _DefaultDesc;`,
    `    this.style.display = 'contents';`,
    `    this.innerHTML = \`<svg \${_Attrs} width="\${_w}" height="\${_ht}" role="img" aria-labelledby="\${titleId} \${descId}">`,
    `  <title id="\${titleId}">\${_h(resolvedTitle)}</title>`,
    `  <desc id="\${descId}">\${_h(resolvedDesc)}</desc>`,
    `  \${_Body}</svg>\`;`,
    `  }`,
    `}`,
    ``,
  ].join('\n');
};

// ---------------------------------------------------------------------------
// Code generation — elements/src/defineCustomElements.ts
// ---------------------------------------------------------------------------

const generateDefineCustomElements = (
  entries: Array<{ id: string; componentName: string }>,
): string =>
  [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import { PISymbolElement } from './PISymbolElement';`,
    ...entries.map(({ componentName }) => `import { ${componentName} } from './${componentName}';`),
    ``,
    `const _elements: Array<[typeof HTMLElement & { tagName: string }, string]> = [`,
    `  [PISymbolElement, PISymbolElement.tagName],`,
    ...entries.map(({ componentName }) => `  [${componentName}, ${componentName}.tagName],`),
    `];`,
    ``,
    `/**`,
    ` * Registers all ISO 7001 public information symbol custom elements.`,
    ` *`,
    ` * @param prefix — tag-name prefix (default \`"pi"\`). Each element is registered`,
    ` *   as \`{prefix}-{id}\`, e.g. \`pi-ac-001-full-accessibility\`.`,
    ` * @example`,
    ` * \`\`\`ts`,
    ` * import { defineCustomElements } from '@public-information-symbols/elements';`,
    ` * defineCustomElements();`,
    ` * \`\`\``,
    ` */`,
    `export function defineCustomElements(prefix = 'pi'): void {`,
    `  for (const [cls, defaultTag] of _elements) {`,
    `    const tag = prefix === 'pi' ? defaultTag : \`\${prefix}-\${defaultTag.replace(/^pi-/, '')}\`;`,
    `    if (!customElements.get(tag)) customElements.define(tag, cls);`,
    `  }`,
    `}`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Code generation — elements/src/index.ts
// ---------------------------------------------------------------------------

const generateElementsIndex = (componentNames: string[]): string =>
  [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `export { PISymbolElement } from './PISymbolElement';`,
    `export { defineCustomElements } from './defineCustomElements';`,
    ...componentNames.map((name) => `export { ${name} } from './${name}';`),
    `export type { PISymbol, SymbolAssets, SymbolCategory } from '@public-information-symbols/core';`,
    ``,
  ].join('\n');

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export const generateSource = async (): Promise<void> => {
  const scrapedPath = path.join('data', 'scraped.json');
  const svgMapPath = path.join(
    'packages',
    '@public-information-symbols',
    'assets',
    'assets',
    'svg-map.json',
  );

  if (!fs.existsSync(scrapedPath)) {
    throw new Error(`Missing ${scrapedPath}. Run 'yarn update' first.`);
  }
  if (!fs.existsSync(svgMapPath)) {
    throw new Error(`Missing ${svgMapPath}. Run 'yarn update' first.`);
  }

  const scraped: ScrapedData = JSON.parse(fs.readFileSync(scrapedPath, 'utf-8'));
  const svgMap: Record<string, string> = JSON.parse(fs.readFileSync(svgMapPath, 'utf-8'));

  console.log(`Loaded ${Object.keys(svgMap).length} SVGs from svg-map.json`);

  const entries = collectEntries(scraped, svgMap);
  console.log(`Collected ${entries.length} symbol entries`);

  const symbols = entries.map((e) => e.sign);
  const componentEntries: ComponentEntry[] = entries.map((e) => ({
    id: e.sign.id,
    name: e.sign.name,
    description: e.sign.description,
    optimizedSvg: e.optimizedSvg,
  }));

  // core/src/symbols.generated.ts
  const coreOut = path.join(
    'packages',
    '@public-information-symbols',
    'core',
    'src',
    'symbols.generated.ts',
  );
  fs.writeFileSync(coreOut, generateSymbolsFile(symbols), 'utf-8');
  console.log(`Written: ${coreOut}`);

  // react/src/
  const reactDir = path.join('packages', '@public-information-symbols', 'react', 'src');
  fs.mkdirSync(reactDir, { recursive: true });

  fs.writeFileSync(path.join(reactDir, 'SymbolProps.ts'), generateReactPropsFile(), 'utf-8');

  const componentNames: string[] = [];
  for (const entry of componentEntries) {
    const componentName = toComponentName(entry.id);
    componentNames.push(componentName);
    fs.writeFileSync(
      path.join(reactDir, `${componentName}.tsx`),
      generateReactComponentFile(entry),
      'utf-8',
    );
  }
  console.log(`Written: ${componentNames.length} React components`);

  fs.writeFileSync(path.join(reactDir, 'index.ts'), generateReactIndex(componentNames), 'utf-8');
  console.log(`Written: ${path.join(reactDir, 'index.ts')}`);

  // vue/src/
  const vueDir = path.join('packages', '@public-information-symbols', 'vue', 'src');
  fs.mkdirSync(vueDir, { recursive: true });

  fs.writeFileSync(path.join(vueDir, 'SymbolProps.ts'), generateVuePropsFile(), 'utf-8');

  for (const entry of componentEntries) {
    const componentName = toComponentName(entry.id);
    fs.writeFileSync(
      path.join(vueDir, `${componentName}.ts`),
      generateVueComponentFile(entry),
      'utf-8',
    );
  }
  console.log(`Written: ${componentNames.length} Vue components`);

  fs.writeFileSync(path.join(vueDir, 'index.ts'), generateVueIndex(componentNames), 'utf-8');
  console.log(`Written: ${path.join(vueDir, 'index.ts')}`);

  // elements/src/
  const elementsDir = path.join('packages', '@public-information-symbols', 'elements', 'src');
  fs.mkdirSync(elementsDir, { recursive: true });

  const elementEntries: Array<{ id: string; componentName: string }> = [];
  for (const entry of componentEntries) {
    const componentName = toComponentName(entry.id);
    elementEntries.push({ id: entry.id, componentName });
    fs.writeFileSync(
      path.join(elementsDir, `${componentName}.ts`),
      generateElementFile(entry),
      'utf-8',
    );
  }
  console.log(`Written: ${elementEntries.length} custom elements`);

  fs.writeFileSync(
    path.join(elementsDir, 'defineCustomElements.ts'),
    generateDefineCustomElements(elementEntries),
    'utf-8',
  );

  fs.writeFileSync(
    path.join(elementsDir, 'index.ts'),
    generateElementsIndex(elementEntries.map((e) => e.componentName)),
    'utf-8',
  );

  console.log('\nDone.');
};

const isMain =
  process.argv[1] &&
  (process.argv[1].endsWith('generate-source.ts') ||
    process.argv[1].endsWith('generate-source.js'));

if (isMain) {
  generateSource().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
