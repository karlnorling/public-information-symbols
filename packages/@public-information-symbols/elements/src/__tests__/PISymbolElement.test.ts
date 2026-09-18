import { PISymbolElement } from '../PISymbolElement';
import { defineCustomElements } from '../defineCustomElements';

const create = (html: string): HTMLElement => {
  const host = document.createElement('div');
  host.innerHTML = html;
  document.body.append(host);
  return host;
};

describe('PISymbolElement', () => {
  beforeAll(() => defineCustomElements());
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('has the correct tagName', () => {
    expect(PISymbolElement.tagName).toBe('pi-symbol');
  });

  it('observes the expected attributes', () => {
    expect(PISymbolElement.observedAttributes).toEqual(
      expect.arrayContaining(['symbol-id', 'symbol-title', 'title', 'aria-label']),
    );
  });

  it('gives each instance its own DOM ids', () => {
    const host = create(
      '<pi-symbol symbol-id="pf-002-hospital" symbol-title="First"></pi-symbol>' +
        '<pi-pf-002-hospital title="Second"></pi-pf-002-hospital>',
    );
    const all = [...host.querySelectorAll('[id]')].map((n) => n.id);
    expect(new Set(all).size).toBe(all.length);
    const names = [...host.querySelectorAll('svg')].map(
      (svg) => host.querySelector(`#${svg.getAttribute('aria-labelledby')}`)?.textContent,
    );
    expect(names).toEqual(['First', 'Second']);
  });

  it('forwards aria-label to the svg', () => {
    const host = create('<pi-pf-002-hospital aria-label="Hospital here"></pi-pf-002-hospital>');
    expect(host.querySelector('svg')?.getAttribute('aria-label')).toBe('Hospital here');
  });

  it('re-renders when attributes change', () => {
    const host = create('<pi-symbol symbol-id="pf-002-hospital"></pi-symbol>');
    host.querySelector('pi-symbol')!.setAttribute('symbol-title', 'Changed');
    expect(host.querySelector('title')?.textContent).toBe('Changed');
  });

  it('can register the same elements under an additional prefix', () => {
    expect(() => defineCustomElements('pub')).not.toThrow();
    expect(customElements.get('pub-symbol')).toBeDefined();
    const host = create('<pub-pf-002-hospital></pub-pf-002-hospital>');
    expect(host.querySelector('title')?.textContent).toBe('Hospital');
  });
});
