import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { Developer, Manager } from "../Characters";
import { COLORS, fontFamily } from "../theme";

type Props = {
  readonly number: string;
  readonly title: string;
  readonly detail: string;
};

// One directive: the manager states it, the team acknowledges it.
export const DirectiveScene: React.FC<Props> = ({ number, title, detail }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily }}>
      <Interactive.Div
        name="Manager"
        style={{
          position: "absolute",
          left: 130,
          top: 250,
        }}
      >
        <Manager height={600} gestureAt={10} />
      </Interactive.Div>

      <Interactive.Div
        name="Directive card"
        style={{
          position: "absolute",
          left: 560,
          top: 110,
          width: 1240,
          padding: "56px 64px",
          boxSizing: "border-box",
          backgroundColor: COLORS.panel,
          borderLeft: "12px solid #FFB547",
          borderRadius: 32,
          opacity: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, 24], ["80px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <div
          style={{
            color: COLORS.amber,
            fontSize: 40,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Directive {number}
        </div>
        <div
          style={{
            color: COLORS.text,
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.08,
            marginTop: 20,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: COLORS.muted,
            fontSize: 46,
            lineHeight: 1.35,
            marginTop: 28,
            opacity: interpolate(frame, [22, 40], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          {detail}
        </div>
      </Interactive.Div>

      {/* The team acknowledges one after another */}
      <div
        style={{
          position: "absolute",
          left: 640,
          right: 120,
          bottom: 30,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Developer height={250} shirt="#4F8CFF" skin="#F1C7A4" hair="#6B3E26" approveAt={70} phase={0} />
        <Developer height={250} shirt="#FF6B8B" skin="#8D5A3B" hair="#1A1A1A" approveAt={80} phase={7} />
        <Developer height={250} shirt="#3DDC97" skin="#E8B48F" hair="#D9A441" approveAt={90} phase={13} />
        <Developer height={250} shirt="#A78BFA" skin="#5C3B28" hair="#111111" approveAt={100} phase={21} />
      </div>
    </AbsoluteFill>
  );
};
