import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { getAllSymbols } from '@public-information-symbols/core';
import { defineCustomElements } from '@public-information-symbols/elements';

// Register custom elements once on module load.
defineCustomElements();

// ---------------------------------------------------------------------------
// React wrapper for <pi-symbol> custom element
// ---------------------------------------------------------------------------

interface PISymbolProps {
  symbolId: string;
  size?: number;
}

const PISymbol = React.memo(({ symbolId, size = 96 }: PISymbolProps) => {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const el = document.createElement('pi-symbol');
    el.setAttribute('symbol-id', symbolId);
    el.setAttribute('width', String(size));
    el.setAttribute('height', String(size));
    ref.current.replaceChildren(el);
  }, [symbolId, size]);

  return <span ref={ref} style={{ display: 'contents' }} />;
});
PISymbol.displayName = 'PISymbol';

// ---------------------------------------------------------------------------
// Grid
// ---------------------------------------------------------------------------

interface GridProps {
  size?: number;
  category?: string;
}

const ElementsGrid = ({ size = 96, category }: GridProps) => {
  const all = getAllSymbols();
  const symbols = category ? all.filter((s) => s.category === category) : all;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', padding: '1rem' }}>
      {symbols.map((s) => (
        <div
          key={s.id}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <PISymbol symbolId={s.id} size={size} />
          <span style={{ fontSize: '0.75rem', textAlign: 'center', color: '#555' }}>{s.code}</span>
        </div>
      ))}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Single symbol story
// ---------------------------------------------------------------------------

const ALL_SYMBOLS = getAllSymbols();

interface SingleProps {
  symbolId: string;
  size?: number;
}

const SingleSymbol = ({ symbolId, size = 200 }: SingleProps) => (
  <PISymbol symbolId={symbolId} size={size} />
);

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<GridProps> = {
  title: 'ISO 7001/Web Components',
  component: ElementsGrid,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: { type: 'number', min: 32, max: 512, step: 8 } },
    category: {
      control: 'select',
      options: [
        '',
        'accessibility',
        'public-facilities',
        'transportation',
        'behaviour',
        'commercial',
        'tourism',
        'sporting',
      ],
    },
  },
};

export default meta;

export const AllSymbols: StoryObj<GridProps> = {
  name: 'All Symbols',
  render: ({ size, category }) => <ElementsGrid size={size} category={category} />,
  args: { size: 96 },
};

export const Accessibility: StoryObj<GridProps> = {
  render: ({ size }) => <ElementsGrid size={size} category="accessibility" />,
  args: { size: 96 },
};

export const Single: StoryObj<SingleProps> = {
  name: 'Single Symbol',
  parameters: { layout: 'centered' },
  render: ({ symbolId, size }) => <SingleSymbol symbolId={symbolId} size={size} />,
  args: {
    symbolId: ALL_SYMBOLS[0]?.id ?? 'ac-001-full-accessibility-or-toilets-accessible',
    size: 200,
  },
  argTypes: {
    symbolId: {
      control: 'select',
      options: ALL_SYMBOLS.map((s) => s.id),
      labels: Object.fromEntries(ALL_SYMBOLS.map((s) => [s.id, `${s.code} — ${s.name}`])),
    },
    size: { control: { type: 'number', min: 32, max: 512, step: 8 } },
  },
};
