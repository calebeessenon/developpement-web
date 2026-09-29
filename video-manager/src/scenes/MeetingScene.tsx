import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { Developer, Manager, useTypedText } from "../Characters";
import { COLORS, fontFamily } from "../theme";

// The team at their desks; the manager opens the stand-up.
export const MeetingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const speech = useTypedText({
    text: "Bonjour l'équipe. Point rapide avant de lancer le sprint.",
    startAt: 25,
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bgSoft, fontFamily }}>
      {/* Whiteboard */}
      <Interactive.Div
        name="Whiteboard"
        style={{
          position: "absolute",
          left: 560,
          top: 110,
          width: 1000,
          height: 380,
          backgroundColor: "#EEF2FA",
          borderRadius: 24,
          padding: "40px 56px",
          boxSizing: "border-box",
          color: COLORS.bg,
          opacity: interpolate(frame, [0, 15], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800 }}>Sprint 14 · Objectifs</div>
        <div style={{ fontSize: 40, marginTop: 28, lineHeight: 1.6, color: "#33415F" }}>
          ✔ Paiement en production
          <br />✔ Couverture de tests &gt; 80 %
          <br />✔ Zéro bug critique ouvert
        </div>
      </Interactive.Div>

      {/* Manager */}
      <Interactive.Div
        name="Manager"
        style={{
          position: "absolute",
          left: 200,
          top: 400,
          translate: interpolate(frame, [0, 25], ["-120px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <Manager height={520} gestureAt={30} />
      </Interactive.Div>

      {/* Speech bubble */}
      <Interactive.Div
        name="Speech bubble"
        style={{
          position: "absolute",
          left: 120,
          top: 90,
          width: 400,
          padding: "28px 32px",
          backgroundColor: COLORS.amber,
          color: COLORS.bg,
          borderRadius: 28,
          fontSize: 38,
          fontWeight: 600,
          lineHeight: 1.3,
          opacity: interpolate(frame, [18, 26], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {speech}
      </Interactive.Div>

      {/* Team row */}
      <div
        style={{
          position: "absolute",
          left: 620,
          right: 80,
          bottom: 40,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Developer height={300} shirt="#4F8CFF" skin="#F1C7A4" hair="#6B3E26" phase={0} />
        <Developer height={300} shirt="#FF6B8B" skin="#8D5A3B" hair="#1A1A1A" phase={7} />
        <Developer height={300} shirt="#3DDC97" skin="#E8B48F" hair="#D9A441" phase={13} />
        <Developer height={300} shirt="#A78BFA" skin="#5C3B28" hair="#111111" phase={21} />
      </div>
    </AbsoluteFill>
  );
};
