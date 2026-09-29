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
};

export const OutroScene: React.FC<Props> = ({ managerName }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        fontFamily,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 160px",
      }}
    >
      <Interactive.Div
        name="Closing line"
        style={{
          color: COLORS.text,
          fontSize: 104,
          fontWeight: 800,
          lineHeight: 1.1,
          opacity: interpolate(frame, [0, 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 40], [0.92, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        Une équipe alignée
        <br />
        livre mieux.
      </Interactive.Div>
      <Interactive.Div
        name="Signature"
        style={{
          color: COLORS.amber,
          fontSize: 52,
          fontWeight: 600,
          marginTop: 56,
          opacity: interpolate(frame, [30, 55], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        — {managerName}, Engineering Manager
      </Interactive.Div>
    </AbsoluteFill>
  );
};
