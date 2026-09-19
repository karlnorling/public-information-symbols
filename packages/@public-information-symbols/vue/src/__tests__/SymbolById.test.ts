import { createApp, h } from 'vue';
import type { Component } from 'vue';
import { SymbolById } from '../SymbolById';
import { Pf002Hospital } from '../Pf002Hospital';

const mount = (render: () => ReturnType<typeof h> | ReturnType<typeof h>[]): HTMLElement => {
  const el = document.createElement('div');
  createApp({ render }).mount(el);
  return el;
};

describe('SymbolById (Vue)', () => {
  it('is a Vue component', () => {
    expect(typeof SymbolById).toBe('object');
    expect((SymbolById as { name?: string }).name).toBe('SymbolById');
  });

  it('renders the requested symbol', () => {
    const el = mount(() => h(SymbolById, { id: 'pf-002-hospital' }));
    expect(el.querySelector('svg title')?.textContent).toBe('Hospital');
  });
});

describe('generated components (Vue)', () => {
  it('gives each instance its own DOM ids', () => {
    const el = mount(() => [
      h(Pf002Hospital as Component, { title: 'First' }),
      h(Pf002Hospital as Component, { title: 'Second' }),
    ]);
    const all = [...el.querySelectorAll('[id]')].map((n) => n.id);
    expect(new Set(all).size).toBe(all.length);
    const names = [...el.querySelectorAll('svg')].map(
      (svg) => el.querySelector(`#${svg.getAttribute('aria-labelledby')}`)?.textContent,
    );
    expect(names).toEqual(['First', 'Second']);
  });

  it('forwards aria-label to the svg', () => {
    const el = mount(() => h(Pf002Hospital as Component, { 'aria-label': 'Hospital here' }));
    expect(el.querySelector('svg')?.getAttribute('aria-label')).toBe('Hospital here');
    expect(el.querySelector('span')?.hasAttribute('aria-label')).toBe(false);
  });

  it('keeps string styles', () => {
    const el = mount(() => h(Pf002Hospital as Component, { style: 'color: red' }));
    const span = el.querySelector('span') as HTMLElement;
    expect(span.style.color).toBe('red');
    expect(span.style.display).toBe('contents');
  });
});
