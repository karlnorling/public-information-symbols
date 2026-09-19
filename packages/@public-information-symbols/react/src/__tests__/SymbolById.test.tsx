import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SymbolById } from '../SymbolById';
import { Pf002Hospital } from '../Pf002Hospital';

const ids = (html: string): string[] => [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);

describe('SymbolById', () => {
  it('returns null for unknown ids', () => {
    const html = renderToStaticMarkup(<SymbolById id="nonexistent" />);
    expect(html).toBe('');
  });

  it('renders the requested symbol', () => {
    const html = renderToStaticMarkup(<SymbolById id="pf-002-hospital" />);
    expect(html).toContain('<title id=');
    expect(html).toContain('>Hospital</title>');
  });
});

describe('generated components', () => {
  it('gives each instance its own DOM ids', () => {
    const html = renderToStaticMarkup(
      <>
        <Pf002Hospital title="First" />
        <Pf002Hospital title="Second" />
      </>,
    );
    const all = ids(html);
    expect(all.length).toBeGreaterThan(0);
    expect(new Set(all).size).toBe(all.length);

    const [first, second] = [...html.matchAll(/aria-labelledby="([^"]+)"/g)].map((m) => m[1]);
    expect(html).toContain(`<title id="${first}">First</title>`);
    expect(html).toContain(`<title id="${second}">Second</title>`);
  });

  it('does not repeat the title as a description', () => {
    const html = renderToStaticMarkup(<Pf002Hospital />);
    expect(html).not.toContain('<desc');
  });

  it('applies aria-label to the svg, not the wrapper', () => {
    const html = renderToStaticMarkup(<Pf002Hospital aria-label="Hospital here" />);
    expect(html).toMatch(/^<span style="display:contents"><svg [^>]*aria-label="Hospital here"/);
    expect(html).not.toContain('aria-labelledby');
  });
});
