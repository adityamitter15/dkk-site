"use client";

import { useEffect, useRef, useState } from "react";
import DanGrade from "@/components/DanGrade";

type Anchor = "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right";

type Node = {
  id: string;
  name: string;
  org: string;
  row: number;
  col: number;
  tier?: "founder" | "primary" | "dkk";
  kind?: "node" | "junction";
};

type EndpointRef = string | { id: string; anchor?: Anchor };

type EdgeKind = "tree" | "lateral";
type Edge = [from: EndpointRef, to: EndpointRef, kind?: EdgeKind, busY?: number];

// Layout traced from the DKK Student Handbook (2nd Edition) page 4 lineage diagram.
const NODES: Node[] = [
  // Tier 1
  { id: "miyagi", name: "Chojun Miyagi", org: "Founder", row: 1, col: 6, tier: "founder" },

  // Tier 2
  { id: "miyazato", name: "Ei'ichi Miyazato", org: "Goju Ryu", row: 2, col: 3, tier: "primary" },
  { id: "yamaguchi", name: "Gogen Yamaguchi", org: "Goju Kai", row: 2, col: 9 },

  // Tier 3
  { id: "higaonna", name: "Morio Higaonna", org: "IOGKF", row: 3, col: 1 },
  { id: "bishop", name: "Mark Bishop", org: "Jundokan", row: 3, col: 3, tier: "primary" },
  { id: "woodhams", name: "Rick Woodhams", org: "OMAA", row: 3, col: 5 },
  { id: "morris", name: "Steve Morris", org: "IOGKA", row: 3, col: 7 },
  { id: "jones", name: "Bob Jones", org: "Zen Do Kai", row: 3, col: 9 },
  { id: "oyama", name: "Mas Oyama", org: "Kyokushinkai", row: 3, col: 11 },

  // Tier 4
  { id: "roberts", name: "Kim Roberts", org: "Sogo Bugei No Kai", row: 4, col: 2, tier: "primary" },
  { id: "arnold", name: "Dave Arnold", org: "MFS", row: 4, col: 4 },
  { id: "lambert", name: "Mick Lambert", org: "JKF Goju Kai", row: 3.5, col: 7 },
  { id: "hughes", name: "Nick Hughes", org: "Combat Karate", row: 4, col: 9 },
  { id: "arniel", name: "Steve Arniel", org: "BKK", row: 4, col: 11 },

  // Tier 5
  { id: "gavin", name: "Gavin Mulholland", org: "DKK \u00b7 7th Dan", row: 5, col: 2, tier: "dkk" },
  { id: "dan", name: "Daniel Lewis", org: "DKK \u00b7 7th Dan", row: 5, col: 4, tier: "dkk" },
  { id: "dowler", name: "Brian Dowler", org: "BKJR", row: 5, col: 11 },

  // Routing junctions for Morris → bus (avoid Lambert at col 7)
  { id: "j_morris_a", name: "", org: "", row: 3, col: 6, kind: "junction" },
  { id: "j_morris_b", name: "", org: "", row: 4.5, col: 6, kind: "junction" },
];

const BUS_T4_T5 = 400;

const EDGES: Edge[] = [
  ["miyagi", "miyazato"],
  ["miyagi", "yamaguchi"],

  ["miyazato", "higaonna"],
  ["miyazato", "bishop"],
  ["miyazato", "woodhams"],
  ["miyazato", { id: "morris", anchor: "top-left" }],
  ["yamaguchi", { id: "morris", anchor: "top-right" }],
  ["yamaguchi", "jones"],
  ["yamaguchi", "oyama"],

  ["bishop", "roberts"],
  ["bishop", "arnold"],
  [{ id: "bishop", anchor: "bottom" }, { id: "lambert", anchor: "top" }, "tree", 285],
  ["morris", "lambert"],
  ["jones", "hughes"],
  ["oyama", "arniel"],

  ["arnold", "gavin", "tree", BUS_T4_T5],
  ["arnold", "dan", "tree", BUS_T4_T5],
  ["woodhams", "gavin", "tree", BUS_T4_T5],
  ["woodhams", "dan", "tree", BUS_T4_T5],
  ["hughes", "gavin", "tree", BUS_T4_T5],

  [{ id: "morris", anchor: "left" }, "j_morris_a"],
  ["j_morris_a", "j_morris_b"],

  ["roberts", "gavin"],
  ["arniel", "dowler"],

  ["dan", "dowler", "lateral"],
];

const PRIMARY_PATH = new Set(["miyagi", "miyazato", "bishop", "roberts", "gavin"]);

const COLS = 11;
const ROWS = 5;
const CELL = 100;
const VBW = COLS * CELL;
const VBH = ROWS * CELL;
const NODE_HALF_H = 28;
const NODE_HALF_W = 62;
const ANCHOR_OFFSET = NODE_HALF_W * 0.55;

const NATURAL_W = 1320;
const NATURAL_H = (NATURAL_W * ROWS) / COLS;

function nodeCenter(n: Node) {
  return { x: (n.col - 0.5) * CELL, y: (n.row - 0.5) * CELL };
}

function anchorPoint(n: Node, anchor: Anchor): { x: number; y: number } {
  const c = nodeCenter(n);
  if (n.kind === "junction") return c;
  switch (anchor) {
    case "top": return { x: c.x, y: c.y - NODE_HALF_H };
    case "top-left": return { x: c.x - ANCHOR_OFFSET, y: c.y - NODE_HALF_H };
    case "top-right": return { x: c.x + ANCHOR_OFFSET, y: c.y - NODE_HALF_H };
    case "bottom": return { x: c.x, y: c.y + NODE_HALF_H };
    case "bottom-left": return { x: c.x - ANCHOR_OFFSET, y: c.y + NODE_HALF_H };
    case "bottom-right": return { x: c.x + ANCHOR_OFFSET, y: c.y + NODE_HALF_H };
    case "left": return { x: c.x - NODE_HALF_W, y: c.y };
    case "right": return { x: c.x + NODE_HALF_W, y: c.y };
  }
}

function defaultAnchorFor(role: "from" | "to", fromNode: Node, toNode: Node): Anchor {
  if (fromNode.row < toNode.row) return role === "from" ? "bottom" : "top";
  if (fromNode.row > toNode.row) return role === "from" ? "top" : "bottom";
  return role === "from" ? "right" : "left";
}

function resolveEndpoint(ref: EndpointRef, nodeMap: Map<string, Node>): { node: Node; anchor?: Anchor } | null {
  if (typeof ref === "string") {
    const n = nodeMap.get(ref);
    return n ? { node: n } : null;
  }
  const n = nodeMap.get(ref.id);
  return n ? { node: n, anchor: ref.anchor } : null;
}

type Segment = { d: string; dots: Array<{ x: number; y: number }> };

function edgeSegment(ax: number, ay: number, bx: number, by: number, kind: EdgeKind, busY: number | undefined, anchorA: Anchor, anchorB: Anchor): Segment {
  if (kind === "lateral") {
    return { d: `M ${ax},${ay} L ${bx},${by}`, dots: [] };
  }

  const aHoriz = anchorA === "left" || anchorA === "right";
  const bHoriz = anchorB === "left" || anchorB === "right";

  if (aHoriz && bHoriz && Math.abs(ay - by) < 1) {
    return { d: `M ${ax},${ay} L ${bx},${by}`, dots: [] };
  }

  if (Math.abs(ax - bx) < 1 && busY === undefined) {
    return { d: `M ${ax},${ay} L ${bx},${by}`, dots: [] };
  }

  const midY = busY ?? (ay + by) / 2;
  return {
    d: `M ${ax},${ay} L ${ax},${midY} L ${bx},${midY} L ${bx},${by}`,
    dots: [
      { x: ax, y: midY },
      { x: bx, y: midY },
    ],
  };
}

export default function LineageChain() {
  const [scale, setScale] = useState(1);
  const scaleWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const update = () => {
      if (!scaleWrapRef.current) return;
      const w = scaleWrapRef.current.clientWidth;
      setScale(Math.min(1, w / NATURAL_W));
    };
    update();
    const ro = new ResizeObserver(update);
    if (scaleWrapRef.current) ro.observe(scaleWrapRef.current);
    return () => ro.disconnect();
  }, []);

  const nodeMap = new Map(NODES.map((n) => [n.id, n]));

  return (
    <div>
      <div ref={scaleWrapRef} className="relative w-full" style={{ height: NATURAL_H * scale }}>
        <div
          className="relative"
          style={{
            width: `${NATURAL_W}px`,
            height: `${NATURAL_H}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <svg
            viewBox={`0 0 ${VBW} ${VBH}`}
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {EDGES.map((edge, i) => {
              const [fromRef, toRef, kind = "tree", busY] = edge;
              const a = resolveEndpoint(fromRef, nodeMap);
              const b = resolveEndpoint(toRef, nodeMap);
              if (!a || !b) return null;
              const anchorA = a.anchor ?? defaultAnchorFor("from", a.node, b.node);
              const anchorB = b.anchor ?? defaultAnchorFor("to", a.node, b.node);
              const pa = anchorPoint(a.node, anchorA);
              const pb = anchorPoint(b.node, anchorB);
              const fromId = typeof fromRef === "string" ? fromRef : fromRef.id;
              const toId = typeof toRef === "string" ? toRef : toRef.id;
              const isPrimary = kind === "tree" && PRIMARY_PATH.has(fromId) && PRIMARY_PATH.has(toId);
              const stroke = isPrimary ? "#a8201a" : "#c9a96e";
              const opacity = isPrimary ? 0.95 : 0.55;
              const seg = edgeSegment(pa.x, pa.y, pb.x, pb.y, kind, busY, anchorA, anchorB);
              return (
                <g key={i}>
                  <path
                    d={seg.d}
                    stroke={stroke}
                    strokeWidth={isPrimary ? 2.5 : 1.4}
                    strokeOpacity={opacity}
                    strokeLinejoin="miter"
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                  />
                  {seg.dots.map((dot, j) => (
                    <circle key={j} cx={dot.x} cy={dot.y} r={4} fill={stroke} fillOpacity={opacity} />
                  ))}
                </g>
              );
            })}
          </svg>

          {NODES.map((node) => {
            if (node.kind === "junction") {
              const c = nodeCenter(node);
              const xPct = (c.x / VBW) * 100;
              const yPct = (c.y / VBH) * 100;
              return (
                <div
                  key={node.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                  style={{
                    left: `${xPct}%`,
                    top: `${yPct}%`,
                    width: "8px",
                    height: "8px",
                    background: "#c9a96e",
                    opacity: 0.55,
                    zIndex: 25,
                  }}
                />
              );
            }

            const p = nodeCenter(node);
            const xPct = (p.x / VBW) * 100;
            const yPct = (p.y / VBH) * 100;
            const isPrimary = PRIMARY_PATH.has(node.id);
            const isDkk = node.tier === "dkk";
            const isFounder = node.tier === "founder";

            const variant = isDkk
              ? "bg-[#1a0d0c] border border-[#a8201a] shadow-[0_0_22px_-4px_rgba(168,32,26,0.55)] z-20"
              : isFounder
                ? "bg-[#1a160e] border border-[#c9a96e] shadow-[0_0_22px_-4px_rgba(201,169,110,0.5)] z-20"
                : isPrimary
                  ? "bg-[#141311] border border-[#a8201a]/55 shadow-[0_0_14px_-6px_rgba(168,32,26,0.45)] z-10"
                  : "bg-[#141311] border border-white/12 z-10";

            return (
              <div
                key={node.id}
                className={`absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-sm text-center transition-transform duration-200 hover:scale-[1.04] ${variant}`}
                style={{ left: `${xPct}%`, top: `${yPct}%`, width: "126px" }}
              >
                <p className={`font-['Bebas_Neue'] tracking-wide leading-tight ${isFounder || isDkk ? "text-base sm:text-lg text-white" : "text-[13px] text-white"}`}>
                  {node.name}
                </p>
                <p className={`text-[9px] uppercase tracking-[0.15em] mt-0.5 leading-tight ${isPrimary || isFounder || isDkk ? "text-[#c9a96e]" : "text-gray-500"}`}>
                  <DanGrade text={node.org} />
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-[11px] uppercase tracking-[0.2em] text-gray-500">
        <span className="flex items-center gap-2 text-[#c9a96e]"><span className="inline-block w-6 h-px bg-[#a8201a]" /> Primary DKK Line</span>
        <span className="flex items-center gap-2"><span className="inline-block w-6 h-px bg-[#c9a96e] opacity-60" /> Wider Goju &amp; Combat Heritage</span>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <p className="text-[#c9a96e] text-[10px] font-bold uppercase tracking-[0.3em] mb-3 text-center">From the Student Handbook</p>
        <div className="space-y-4 text-gray-300 leading-relaxed text-[15px]">
          <p>
            Gavin Mulholland and Dan Lewis began training together as Black Belts in 1990, setting up <strong className="text-white">Daigaku Karate Kai in 1992</strong>. Gavin had been studying Okinawan Goju-Ryu under <strong className="text-white">Kyoshi Kim Roberts</strong>, while Dan had been training in Kyokushinkai under <strong className="text-white">Sensei Bryan Dowler</strong>.
          </p>
          <p>
            At the time of DKK&apos;s inception both were training under Kim Roberts and to a lesser degree <strong className="text-white">Dave Arnold</strong>, who had both been students of <strong className="text-white">Mark Bishop</strong> and <strong className="text-white">Mick Lambert</strong>. Between 1993 and 1995 Gavin and Dan were training under Master <strong className="text-white">Steve Morris</strong>, and around this time also developed a strong and lasting relationship with Sensei <strong className="text-white">Nick Hughes</strong>.
          </p>
          <p>
            The name <em>Daigaku</em> was chosen both for its literal meaning - <em>&apos;University&apos;</em> (both clubs initially being set up in universities) - and its wider meaning, <em>&apos;place of learning&apos;</em>. At <strong className="text-white">DKK Summer Camp 2019</strong>, in the presence of Shihan Dave Arnold, Gavin and Dan were both awarded the rank of <strong className="text-white">Shichidan (7<sup className="text-[0.65em] align-super">th</sup> Dan)</strong> by the Chairman of the Okinawan Martial Arts Association, <strong className="text-white">Shihan Roger Sheldon</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
