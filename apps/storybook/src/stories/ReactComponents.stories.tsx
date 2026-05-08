import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { SymbolById } from "@public-information-symbols/react";
import { getAllSymbols } from "@public-information-symbols/core";
import type { SymbolProps } from "@public-information-symbols/react";

// ---------------------------------------------------------------------------
// Shared grid layout
// ---------------------------------------------------------------------------

interface GridProps {
  size?: number;
  category?: string;
}

const SymbolGrid = ({ size = 120, category }: GridProps) => {
  const all = getAllSymbols();
  const symbols = category ? all.filter((s) => s.category === category) : all;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        padding: "1rem",
      }}
    >
      {symbols.map((s) => (
        <div
          key={s.id}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
        >
          <SymbolById id={s.id} width={size} height={size} />
          <span style={{ fontSize: "0.75rem", textAlign: "center", color: "#555" }}>{s.code}</span>
        </div>
      ))}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
  title: "ISO 7001/React Components",
  component: SymbolGrid,
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: { type: "number", min: 32, max: 512, step: 8 } },
    category: {
      control: "select",
      options: [
        "",
        "accessibility",
        "public-facilities",
        "transportation",
        "behaviour",
        "commercial",
        "tourism",
        "sporting",
      ],
    },
  },
} satisfies Meta<typeof SymbolGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Grid stories
// ---------------------------------------------------------------------------

export const All: Story = { name: "All Symbols", args: { size: 120 } };
export const Large: Story = { name: "All Large", args: { size: 200 } };
export const Small: Story = { name: "All Small", args: { size: 64 } };

export const Accessibility: Story = {
  args: { size: 120, category: "accessibility" },
};
export const PublicFacilities: Story = {
  name: "Public Facilities",
  args: { size: 120, category: "public-facilities" },
};
export const Transportation: Story = {
  args: { size: 120, category: "transportation" },
};
export const Behaviour: Story = { args: { size: 120, category: "behaviour" } };
export const Commercial: Story = { args: { size: 120, category: "commercial" } };
export const Tourism: Story = { args: { size: 120, category: "tourism" } };
export const Sporting: Story = { args: { size: 120, category: "sporting" } };

// ---------------------------------------------------------------------------
// Single symbol with controls
// ---------------------------------------------------------------------------

const AllSymbols = getAllSymbols();

export const SingleSymbol: StoryObj<SymbolProps & { id: string }> = {
  name: "Single Symbol",
  parameters: { layout: "centered" },
  render: ({ id, ...props }) => <SymbolById id={id} {...props} />,
  args: {
    id: AllSymbols[0]?.id ?? "ac-001-full-accessibility",
    width: 200,
    height: 200,
  },
  argTypes: {
    id: {
      control: "select",
      options: AllSymbols.map((s) => s.id),
      labels: Object.fromEntries(AllSymbols.map((s) => [s.id, `${s.code} — ${s.name}`])),
    },
    width: { control: { type: "number", min: 32, max: 512, step: 8 } },
    height: { control: { type: "number", min: 32, max: 512, step: 8 } },
    title: { control: "text" },
    description: { control: "text" },
  },
};
