import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS } from "./theme";

type ManagerProps = {
  readonly height: number;
  // Frame at which the manager raises a hand to make a point.
  readonly gestureAt?: number;
};

// Standing manager in a blazer. Breathes gently and gestures on cue.
export const Manager: React.FC<ManagerProps> = ({ height, gestureAt = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const breathe = Math.sin(frame / 18) * 2;
  const gesture = spring({
    frame: frame - gestureAt,
    fps,
    config: { damping: 14 },
  });
  const armAngle = interpolate(gesture, [0, 1], [8, -62]);

  return (
    <svg viewBox="0 0 200 420" style={{ height, overflow: "visible" }}>
      {/* Legs */}
      <rect x="64" y="290" width="30" height="115" rx="12" fill="#1F2A44" />
      <rect x="106" y="290" width="30" height="115" rx="12" fill="#1F2A44" />
      <rect x="54" y="396" width="44" height="16" rx="8" fill="#0A0F1A" />
      <rect x="102" y="396" width="44" height="16" rx="8" fill="#0A0F1A" />
      <g transform={`translate(0 ${breathe})`}>
        {/* Left arm */}
        <rect x="28" y="140" width="28" height="130" rx="14" fill="#2B3A63" />
        <circle cx="42" cy="272" r="14" fill="#C98F6B" />
        {/* Torso: shirt + blazer */}
        <rect x="46" y="120" width="108" height="180" rx="30" fill="#2B3A63" />
        <path d="M86 122 L100 175 L114 122 Z" fill="#F4F6FB" />
        <path d="M97 140 L103 140 L106 200 L100 212 L94 200 Z" fill={COLORS.amber} />
        <path d="M86 122 L100 175 L78 150 Z" fill="#22305A" />
        <path d="M114 122 L100 175 L122 150 Z" fill="#22305A" />
        {/* Right arm, rotating from the shoulder */}
        <g transform={`rotate(${armAngle} 158 146)`}>
          <rect x="144" y="140" width="28" height="130" rx="14" fill="#2B3A63" />
          <circle cx="158" cy="272" r="14" fill="#C98F6B" />
        </g>
        {/* Neck + head */}
        <rect x="88" y="98" width="24" height="28" rx="8" fill="#B87D5B" />
        <circle cx="100" cy="68" r="42" fill="#C98F6B" />
        {/* Short hair with a touch of grey: years of experience */}
        <path
          d="M56 70 C44 4 156 4 144 70 C138 50 122 42 100 42 C78 42 62 50 56 70 Z"
          fill="#3B3F4A"
        />
        <path d="M60 58 C62 50 66 46 70 44" stroke="#B8BCC8" strokeWidth="4" fill="none" />
        <path d="M140 56 C138 48 134 44 130 42" stroke="#B8BCC8" strokeWidth="4" fill="none" />
        {/* Face */}
        <circle cx="86" cy="70" r="4" fill="#1B1B1B" />
        <circle cx="114" cy="70" r="4" fill="#1B1B1B" />
        <path d="M88 88 Q100 96 112 88" stroke="#1B1B1B" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
};

type DevProps = {
  readonly height: number;
  readonly shirt: string;
  readonly skin: string;
  readonly hair: string;
  // Frame at which the developer nods and shows an approval badge.
  readonly approveAt?: number;
  // Offsets the typing rhythm so the team does not move in unison.
  readonly phase?: number;
};

// Developer seated behind a laptop. Types, then nods on cue.
export const Developer: React.FC<DevProps> = ({
  height,
  shirt,
  skin,
  hair,
  approveAt,
  phase = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const typing = Math.sin((frame + phase) / 3) * 1.5;
  const nod =
    approveAt === undefined
      ? 0
      : interpolate(frame - approveAt, [0, 6, 12, 18, 24], [0, 8, 0, 6, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
  const badge =
    approveAt === undefined
      ? 0
      : spring({ frame: frame - approveAt, fps, config: { damping: 12 } });
  const screenGlow = 0.55 + Math.sin((frame + phase) / 10) * 0.15;

  return (
    <svg viewBox="0 0 260 300" style={{ height, overflow: "visible" }}>
      {/* Torso */}
      <rect x="70" y="120" width="120" height="120" rx="36" fill={shirt} />
      {/* Head */}
      <g transform={`translate(0 ${typing + nod})`}>
        <rect x="118" y="96" width="24" height="26" rx="8" fill={skin} opacity={0.85} />
        <circle cx="130" cy="72" r="38" fill={skin} />
        <path d="M92 66 C92 28 168 28 168 66 C156 50 106 48 92 66 Z" fill={hair} />
        <circle cx="117" cy="76" r="3.5" fill="#1B1B1B" />
        <circle cx="143" cy="76" r="3.5" fill="#1B1B1B" />
      </g>
      {/* Laptop seen from behind */}
      <rect x="58" y="150" width="144" height="92" rx="10" fill="#C9D2E3" />
      <circle cx="130" cy="196" r="12" fill={COLORS.accent} opacity={screenGlow} />
      {/* Desk */}
      <rect x="0" y="238" width="260" height="22" rx="6" fill="#3A2F2A" />
      <rect x="20" y="258" width="14" height="42" fill="#2A221E" />
      <rect x="226" y="258" width="14" height="42" fill="#2A221E" />
      {/* Approval badge */}
      <g
        transform={`translate(196 20) scale(${badge})`}
        style={{ transformOrigin: "0px 0px" }}
      >
        <circle cx="0" cy="0" r="26" fill={COLORS.green} />
        <path
          d="M-11 0 L-3 9 L12 -8"
          stroke="#0B1220"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

type BubbleProps = {
  readonly text: string;
  readonly startAt: number;
  readonly charsPerFrame?: number;
};

// Typewriter-style reveal for speech bubbles.
export const useTypedText = ({ text, startAt, charsPerFrame = 1.4 }: BubbleProps) => {
  const frame = useCurrentFrame();
  const count = Math.floor(
    interpolate(frame - startAt, [0, text.length / charsPerFrame], [0, text.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.linear,
    }),
  );
  return text.slice(0, count);
};
