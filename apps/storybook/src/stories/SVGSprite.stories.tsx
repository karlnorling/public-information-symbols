import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { getAllSymbols } from "@public-information-symbols/core";

const InlineSprite = () => {
  const [spriteHtml, setSpriteHtml] = React.useState<string>("");

  React.useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}assets/sprites/sprite.svg`)
      .then((r) => r.text())
      .then(setSpriteHtml)
      .catch(() => {
        // Sprite not served in this environment
      });
  }, []);

  if (!spriteHtml) return null;
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      dangerouslySetInnerHTML={{ __html: spriteHtml }}
    />
  );
};

interface SpriteIconProps {
  id: string;
  label: string;
  size?: number;
}

const SpriteIcon = ({ id, label, size = 120 }: SpriteIconProps) => (
  <svg width={size} height={size} role="img" aria-label={label} style={{ display: "block" }}>
    <title>{label}</title>
    <use href={`#${id}`} />
  </svg>
);

// ---------------------------------------------------------------------------
// Grid component
// ---------------------------------------------------------------------------

const ALL_SYMBOLS = getAllSymbols();

interface GridProps {
  size?: number;
  category?: string;
}

const SpriteGrid = ({ size = 120, category }: GridProps) => {
  const symbols = category ? ALL_SYMBOLS.filter((s) => s.category === category) : ALL_SYMBOLS;
  // sprite IDs are "ac-001", "pf-015" (code slug without name)
  const spriteId = (id: string) => id.split("-").slice(0, 2).join("-");

  return (
    <>
      <InlineSprite />
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
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <SpriteIcon id={spriteId(s.id)} label={s.name} size={size} />
            <span style={{ fontSize: "0.75rem", textAlign: "center", color: "#555" }}>
              {s.code}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

const SingleSpriteIcon = ({ id, label, size }: SpriteIconProps) => (
  <>
    <InlineSprite />
    <SpriteIcon id={id} label={label} size={size} />
  </>
);

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<GridProps> = {
  title: "ISO 7001/SVG Sprite",
  component: SpriteGrid,
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
};

export default meta;

export const AllSymbols: StoryObj<GridProps> = {
  name: "All Symbols",
  render: ({ size, category }) => <SpriteGrid size={size} category={category} />,
  args: { size: 120 },
};

export const Large: StoryObj<GridProps> = {
  name: "All Large",
  render: ({ size, category }) => <SpriteGrid size={size} category={category} />,
  args: { size: 200 },
};

const SPRITE_SYMBOLS = ALL_SYMBOLS.map((s) => ({
  id: s.id.split("-").slice(0, 2).join("-"),
  label: `${s.code} — ${s.name}`,
}));

export const SingleIcon: StoryObj<SpriteIconProps> = {
  name: "Single Icon",
  parameters: { layout: "centered" },
  render: (args) => <SingleSpriteIcon {...args} />,
  args: {
    id: SPRITE_SYMBOLS[0]?.id ?? "ac-001",
    label: SPRITE_SYMBOLS[0]?.label ?? "AC 001",
    size: 200,
  },
  argTypes: {
    id: {
      control: "select",
      options: SPRITE_SYMBOLS.map((s) => s.id),
      labels: Object.fromEntries(SPRITE_SYMBOLS.map((s) => [s.id, s.label])),
    },
    label: { control: "text" },
    size: { control: { type: "number", min: 32, max: 512, step: 8 } },
  },
};
