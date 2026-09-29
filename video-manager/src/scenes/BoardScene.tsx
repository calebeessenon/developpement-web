import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { useTypedText } from "../Characters";
import { COLORS, fontFamily } from "../theme";

type CardProps = {
  readonly label: string;
  readonly owner: string;
  readonly color: string;
};

const Card: React.FC<CardProps> = ({ label, owner, color }) => (
  <div
    style={{
      width: 480,
      padding: "22px 26px",
      boxSizing: "border-box",
      backgroundColor: COLORS.panel,
      borderRadius: 18,
      borderLeft: `10px solid ${color}`,
    }}
  >
    <div style={{ color: COLORS.text, fontSize: 36, fontWeight: 600 }}>{label}</div>
    <div style={{ color: COLORS.muted, fontSize: 28, marginTop: 8 }}>{owner}</div>
  </div>
);

// The manager supervises sprint progress on the board.
export const BoardScene: React.FC = () => {
  const frame = useCurrentFrame();
  const comment = useTypedText({
    text: "Bon rythme. On débloque l'API aujourd'hui.",
    startAt: 100,
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily }}>
      <Interactive.Div
        name="Board title"
        style={{
          position: "absolute",
          left: 140,
          top: 90,
          color: COLORS.text,
          fontSize: 84,
          fontWeight: 800,
        }}
      >
        Supervision du sprint
      </Interactive.Div>

      <Interactive.Div
        name="Column todo"
        style={{ position: "absolute", left: 140, top: 250, color: COLORS.muted, fontSize: 44, fontWeight: 600 }}
      >
        À faire
      </Interactive.Div>
      <Interactive.Div
        name="Column doing"
        style={{ position: "absolute", left: 720, top: 250, color: COLORS.amber, fontSize: 44, fontWeight: 600 }}
      >
        En cours
      </Interactive.Div>
      <Interactive.Div
        name="Column done"
        style={{ position: "absolute", left: 1300, top: 250, color: COLORS.green, fontSize: 44, fontWeight: 600 }}
      >
        Terminé
      </Interactive.Div>

      <Interactive.Div name="Card todo" style={{ position: "absolute", left: 140, top: 330 }}>
        <Card label="Export PDF des factures" owner="Inès" color="#9AA8C7" />
      </Interactive.Div>
      <Interactive.Div
        name="Card API"
        style={{
          position: "absolute",
          top: 330,
          left: interpolate(frame, [40, 70], [140, 720], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          }),
        }}
      >
        <Card label="API de paiement" owner="Karim" color="#FFB547" />
      </Interactive.Div>
      <Interactive.Div
        name="Card tests"
        style={{
          position: "absolute",
          left: interpolate(frame, [20, 50], [720, 1300], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          }),
          top: interpolate(frame, [20, 50], [330, 560], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          }),
        }}
      >
        <Card label="Tests d'intégration" owner="Léa" color="#3DDC97" />
      </Interactive.Div>
      <Interactive.Div name="Card review" style={{ position: "absolute", left: 1300, top: 330 }}>
        <Card label="Revue du checkout" owner="Tom" color="#3DDC97" />
      </Interactive.Div>

      <Interactive.Div
        name="Manager comment"
        style={{
          position: "absolute",
          left: 140,
          right: 140,
          bottom: 110,
          padding: "30px 40px",
          backgroundColor: COLORS.amber,
          color: COLORS.bg,
          borderRadius: 26,
          fontSize: 50,
          fontWeight: 600,
          opacity: interpolate(frame, [90, 100], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {comment}
      </Interactive.Div>
    </AbsoluteFill>
  );
};
