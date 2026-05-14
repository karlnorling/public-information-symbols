import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { getAllSymbols } from '@public-information-symbols/core';

// ---------------------------------------------------------------------------
// StyleInjector — generates inline CSS with storybook-relative asset paths
// ---------------------------------------------------------------------------

const StyleInjector = ({ size }: { size: number }) => {
  const symbols = getAllSymbols();
  const rules = symbols
    .map((s) => {
      const cls = `pi-${s.code.toLowerCase().replace(' ', '-')}`;
      return `.${cls} { background-image: url('/assets/${s.assets.svg}'); background-size: contain; background-repeat: no-repeat; background-position: center; }`;
    })
    .join('\n');

  const sizeRule = `.pi-icon { display: inline-block; width: ${size}px; height: ${size}px; }`;
  return <style>{`${rules}\n${sizeRule}`}</style>;
};

// ---------------------------------------------------------------------------
// Grid
// ---------------------------------------------------------------------------

interface GridProps {
  size?: number;
  category?: string;
}

const CSSGrid = ({ size = 96, category }: GridProps) => {
  const all = getAllSymbols();
  const symbols = category ? all.filter((s) => s.category === category) : all;

  if (symbols.length === 0) {
    return (
      <p style={{ color: '#888', fontFamily: 'sans-serif' }}>
        No symbols loaded. Run <code>yarn update</code> to populate symbol data.
      </p>
    );
  }

  return (
    <>
      <StyleInjector size={size} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', padding: '1rem' }}>
        {symbols.map((s) => {
          const cls = `pi-${s.code.toLowerCase().replace(' ', '-')}`;
          return (
            <div
              key={s.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span className={`pi-icon ${cls}`} role="img" aria-label={s.name} title={s.name} />
              <span style={{ fontSize: '0.7rem', textAlign: 'center', color: '#555' }}>
                {s.code}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<GridProps> = {
  title: 'ISO 7001/CSS Sprite',
  component: CSSGrid,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: { type: 'number', min: 32, max: 256, step: 8 } },
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
  render: ({ size, category }) => <CSSGrid size={size} category={category} />,
  args: { size: 96 },
};

export const Accessibility: StoryObj<GridProps> = {
  render: ({ size }) => <CSSGrid size={size} category="accessibility" />,
  args: { size: 96 },
};

export const PublicFacilities: StoryObj<GridProps> = {
  name: 'Public Facilities',
  render: ({ size }) => <CSSGrid size={size} category="public-facilities" />,
  args: { size: 96 },
};

export const Transportation: StoryObj<GridProps> = {
  render: ({ size }) => <CSSGrid size={size} category="transportation" />,
  args: { size: 96 },
};
