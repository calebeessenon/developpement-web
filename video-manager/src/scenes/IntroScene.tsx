import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS, fontFamily } from "../theme";

type Props = {
  readonly managerName: string;
  readonly years: number;
};

export const IntroScene: React.FC<Props> = ({ managerName, years }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        fontFamily,
        justifyContent: "center",
        padding: "0 160px",
      }}
    >
      <Interactive.Div
        name="Eyebrow"
        style={{
          color: COLORS.amber,
          fontSize: 44,
          fontWeight: 600,
          letterSpacing: 6,
          textTransform: "uppercase",
          opacity: interpolate(frame, [0, 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Leadership technique
      </Interactive.Div>
      <Interactive.Div
        name="Title"
        style={{
          color: COLORS.text,
          fontSize: 128,
          fontWeight: 800,
          lineHeight: 1.05,
          marginTop: 24,
          opacity: interpolate(frame, [8, 30], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [8, 40], ["0px 60px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Diriger une équipe
        <br />
        de développeurs
      </Interactive.Div>
      <Interactive.Div
        name="Accent bar"
        style={{
          backgroundColor: COLORS.accent,
          height: 10,
          borderRadius: 5,
          marginTop: 48,
          width: interpolate(frame, [30, 60], [0, 420], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <Interactive.Div
        name="Byline"
        style={{
          color: COLORS.muted,
          fontSize: 48,
          marginTop: 40,
          opacity: interpolate(frame, [45, 70], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {managerName} · Engineering Manager · {years}+ ans d'expérience
      </Interactive.Div>
    </AbsoluteFill>
  );
};
