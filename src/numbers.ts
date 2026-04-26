export type Point = { x: number; y: number };
export type Stroke = Point[];
export type NumberDef = {
  digit: string;
  count: number;
  emoji: string;
  singular: string;
  plural: string;
  strokes: Stroke[];
};

const p = (x: number, y: number): Point => ({ x, y });
const line = (...pts: Point[]): Stroke => pts;

function arc(cx: number, cy: number, rx: number, ry: number, a0: number, a1: number, steps = 24): Stroke {
  const out: Point[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = a0 + (a1 - a0) * t;
    out.push(p(cx + Math.cos(a) * rx, cy + Math.sin(a) * ry));
  }
  return out;
}

export const NUMBERS: NumberDef[] = [
  {
    digit: "1", count: 1, emoji: "🦁", singular: "lion", plural: "lions",
    strokes: [
      line(p(0.32, 0.22), p(0.50, 0.10)),
      line(p(0.50, 0.10), p(0.50, 0.90)),
      line(p(0.30, 0.90), p(0.70, 0.90)),
    ],
  },
  {
    digit: "2", count: 2, emoji: "🐱", singular: "cat", plural: "cats",
    strokes: [[
      p(0.20, 0.32),
      ...arc(0.50, 0.30, 0.30, 0.20, Math.PI, 2 * Math.PI, 16),
      p(0.20, 0.85),
      p(0.85, 0.85),
    ]],
  },
  {
    digit: "3", count: 3, emoji: "🦆", singular: "duck", plural: "ducks",
    strokes: [
      [
        p(0.20, 0.22),
        ...arc(0.50, 0.28, 0.30, 0.18, Math.PI, 2 * Math.PI, 14),
        p(0.45, 0.50),
      ],
      [
        p(0.45, 0.50),
        ...arc(0.50, 0.70, 0.30, 0.20, -Math.PI / 2, Math.PI / 2, 14),
        p(0.20, 0.82),
      ],
    ],
  },
  {
    digit: "4", count: 4, emoji: "🐸", singular: "frog", plural: "frogs",
    strokes: [
      line(p(0.55, 0.10), p(0.18, 0.62), p(0.82, 0.62)),
      line(p(0.65, 0.20), p(0.65, 0.90)),
    ],
  },
  {
    digit: "5", count: 5, emoji: "🐝", singular: "bee", plural: "bees",
    strokes: [
      line(p(0.75, 0.12), p(0.28, 0.12), p(0.25, 0.45)),
      [
        p(0.25, 0.45),
        p(0.55, 0.42),
        ...arc(0.55, 0.65, 0.28, 0.22, -Math.PI / 2, Math.PI / 2, 16),
        p(0.25, 0.88),
        p(0.18, 0.78),
      ],
    ],
  },
  {
    digit: "6", count: 6, emoji: "🐟", singular: "fish", plural: "fish",
    strokes: [[
      p(0.78, 0.15),
      p(0.55, 0.20),
      p(0.35, 0.35),
      p(0.22, 0.55),
      ...arc(0.50, 0.68, 0.30, 0.22, Math.PI, Math.PI * 3, 22),
      p(0.30, 0.55),
    ]],
  },
  {
    digit: "7", count: 7, emoji: "🦋", singular: "butterfly", plural: "butterflies",
    strokes: [
      line(p(0.20, 0.12), p(0.82, 0.12)),
      line(p(0.82, 0.12), p(0.42, 0.90)),
    ],
  },
  {
    digit: "8", count: 8, emoji: "🐌", singular: "snail", plural: "snails",
    strokes: [
      arc(0.50, 0.30, 0.25, 0.20, -Math.PI / 2, Math.PI * 1.5, 30),
      arc(0.50, 0.70, 0.30, 0.22, -Math.PI / 2, Math.PI * 1.5, 30),
    ],
  },
  {
    digit: "9", count: 9, emoji: "🐦", singular: "bird", plural: "birds",
    strokes: [[
      p(0.55, 0.50),
      ...arc(0.50, 0.32, 0.30, 0.22, Math.PI / 2, Math.PI * 2.5, 22),
      p(0.78, 0.40),
      p(0.50, 0.92),
    ]],
  },
  {
    digit: "10", count: 10, emoji: "⭐", singular: "star", plural: "stars",
    strokes: [
      line(p(0.18, 0.22), p(0.30, 0.10)),
      line(p(0.30, 0.10), p(0.30, 0.90)),
      arc(0.68, 0.50, 0.18, 0.36, -Math.PI / 2, Math.PI * 1.5, 30),
    ],
  },
];
