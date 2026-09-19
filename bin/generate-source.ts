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
import { parseSvg } from '../packages/@public-information-symbols/core/src/render';

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
  const category = map[prefix];
  if (!category) throw new Error(`Unknown ISO 7001 code prefix "${prefix}" in "${code}"`);
  return category;
};

/** Emits a JS string literal; JSON escaping covers quotes, backslashes and newlines. */
const str = (s: string): string => JSON.stringify(s);

/** Emits the module-level constants every generated component file shares. */
const symbolConstants = ({ description, name, optimizedSvg }: ComponentEntry): string[] => [
  `const _parts: SvgParts = ${JSON.stringify(parseSvg(optimizedSvg))};`,
  `const _title = ${str(name)};`,
  `const _description = ${str(description.slice(0, 300))};`,
];

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
  const componentName = toComponentName(entry.id);
  return [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import * as React from 'react';`,
    `import type { SvgParts } from '@public-information-symbols/core/render';`,
    `import type { SymbolProps } from './SymbolPropsBase';`,
    `import { renderSymbol, useSymbolUid } from './renderSymbol';`,
    ``,
    ...symbolConstants(entry),
    ``,
    `export const ${componentName} = React.memo<SymbolProps>((props) =>`,
    `  renderSymbol(_parts, _title, _description, props, useSymbolUid()),`,
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
  const componentName = toComponentName(entry.id);
  return [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import { defineComponent } from 'vue';`,
    `import { nextUid } from '@public-information-symbols/core/render';`,
    `import type { SvgParts } from '@public-information-symbols/core/render';`,
    `import { symbolProps } from './SymbolPropsBase';`,
    `import { renderSymbol } from './renderSymbol';`,
    ``,
    ...symbolConstants(entry),
    ``,
    `export const ${componentName} = defineComponent({`,
    `  name: '${componentName}',`,
    `  inheritAttrs: false,`,
    `  props: symbolProps,`,
    `  setup(props, { attrs }) {`,
    `    const uid = nextUid();`,
    `    return () => renderSymbol(_parts, _title, _description, props, attrs, uid);`,
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
  const componentName = toComponentName(entry.id);
  return [
    `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.`,
    `// Run 'yarn generate' to regenerate.`,
    ``,
    `import type { SvgParts } from '@public-information-symbols/core/render';`,
    `import { PISymbolBase } from './PISymbolBase';`,
    `import type { SymbolSource } from './PISymbolBase';`,
    ``,
    ...symbolConstants(entry),
    ``,
    `export class ${componentName} extends PISymbolBase {`,
    `  static override readonly tagName = 'pi-${entry.id}';`,
    ``,
    `  protected override _source(): SymbolSource {`,
    `    return { parts: _parts, title: _title, description: _description };`,
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
    `import type { PISymbolBase } from './PISymbolBase';`,
    `import { PISymbolElement } from './PISymbolElement';`,
    ...entries.map(({ componentName }) => `import { ${componentName} } from './${componentName}';`),
    ``,
    `const _elements: Array<typeof PISymbolBase> = [`,
    `  PISymbolElement,`,
    ...entries.map(({ componentName }) => `  ${componentName},`),
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
    `  for (const cls of _elements) {`,
    `    if (prefix === 'pi') {`,
    `      if (!customElements.get(cls.tagName)) customElements.define(cls.tagName, cls);`,
    `      continue;`,
    `    }`,
    `    const tag = \`\${prefix}-\${cls.tagName.replace(/^pi-/, '')}\`;`,
    `    // A constructor can only be registered once, so each extra prefix gets its own subclass.`,
    `    if (!customElements.get(tag)) customElements.define(tag, class extends cls {});`,
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
    `export { PISymbolBase } from './PISymbolBase';`,
    `export type { SymbolSource } from './PISymbolBase';`,
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
