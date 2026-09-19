import { getAllSymbols } from '../index';
import { UID_PLACEHOLDER, getSvgParts, parseSvg, renderSvg } from '../render';

const ids = (html: string): string[] => [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);

describe('parseSvg', () => {
  it('does not mistake stroke-width for width', () => {
    const parts = parseSvg('<svg stroke-width="3" width="10" height="20"><path/></svg>');
    expect(parts.width).toBe('10');
    expect(parts.attrs).toContain('stroke-width="3"');
    expect(parts.attrs).toContain('viewBox="0 0 10 20"');
  });

  it('prefixes internal ids and their references with the uid placeholder', () => {
    const parts = parseSvg(
      '<svg viewBox="0 0 1 1"><linearGradient id="g"/><path fill="url(#g)"/><use href="#g"/></svg>',
    );
    expect(parts.body).toContain(`id="${UID_PLACEHOLDER}-g"`);
    expect(parts.body).toContain(`url(#${UID_PLACEHOLDER}-g)`);
    expect(parts.body).toContain(`href="#${UID_PLACEHOLDER}-g"`);
  });
});

describe('renderSvg', () => {
  const parts = parseSvg('<svg viewBox="0 0 1 1"><path id="p"/></svg>');

  it('labels by title only, omitting a desc that repeats the title', () => {
    const html = renderSvg(parts, { description: 'Hospital', title: 'Hospital', uid: 'u1' });
    expect(html).toContain('aria-labelledby="u1-title"');
    expect(html).not.toContain('<desc');
    expect(html).not.toContain('aria-describedby');
  });

  it('links a distinct description via aria-describedby', () => {
    const html = renderSvg(parts, { description: 'Emergency care', title: 'Hospital', uid: 'u1' });
    expect(html).toContain('aria-labelledby="u1-title"');
    expect(html).toContain('aria-describedby="u1-desc"');
    expect(html).toContain('<desc id="u1-desc">Emergency care</desc>');
  });

  it('uses aria-label in place of aria-labelledby when given', () => {
    const html = renderSvg(parts, { ariaLabel: 'A & B', title: 'Hospital', uid: 'u1' });
    expect(html).toContain('aria-label="A &amp; B"');
    expect(html).not.toContain('aria-labelledby');
  });

  it('escapes title and dimensions', () => {
    const html = renderSvg(parts, { title: '<b>', uid: 'u1', width: '"><script>' });
    expect(html).toContain('<title id="u1-title">&lt;b&gt;</title>');
    expect(html).not.toContain('<script>');
  });

  it('strips characters that are unsafe in ids from the uid', () => {
    expect(renderSvg(parts, { title: 't', uid: ':r1:' })).toContain('id="r1-title"');
  });

  it('gives every symbol distinct ids per instance', () => {
    for (const symbol of getAllSymbols()) {
      const a = ids(renderSvg(getSvgParts(symbol), { title: symbol.name, uid: 'a' }));
      const b = ids(renderSvg(getSvgParts(symbol), { title: symbol.name, uid: 'b' }));
      expect(new Set(a).size).toBe(a.length);
      expect(a.filter((id) => b.includes(id))).toEqual([]);
    }
  });
});
