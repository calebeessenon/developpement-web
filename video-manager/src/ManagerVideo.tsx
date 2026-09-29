import React from "react";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { IntroScene } from "./scenes/IntroScene";
import { MeetingScene } from "./scenes/MeetingScene";
import { DirectiveScene } from "./scenes/DirectiveScene";
import { BoardScene } from "./scenes/BoardScene";
import { OutroScene } from "./scenes/OutroScene";

export type ManagerVideoProps = {
  readonly managerName: string;
  readonly years: number;
};

export const ManagerVideo: React.FC<ManagerVideoProps> = ({ managerName, years }) => (
  <TransitionSeries>
    <TransitionSeries.Sequence name="Intro" durationInFrames={120}>
      <IntroScene managerName={managerName} years={years} />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
    <TransitionSeries.Sequence name="Réunion" durationInFrames={180}>
      <MeetingScene />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
    <TransitionSeries.Sequence name="Directive 01" durationInFrames={165}>
      <DirectiveScene
        number="01"
        title="Pas de tests, pas de merge."
        detail="Chaque PR arrive avec ses tests et passe une revue par un pair."
      />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: 15 })} />
    <TransitionSeries.Sequence name="Directive 02" durationInFrames={165}>
      <DirectiveScene
        number="02"
        title="Livrez petit, livrez souvent."
        detail="Des incréments courts réduisent le risque et accélèrent le feedback."
      />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: 15 })} />
    <TransitionSeries.Sequence name="Directive 03" durationInFrames={165}>
      <DirectiveScene
        number="03"
        title="Un blocage ? Parlez-en tôt."
        detail="Bloqué plus d'une heure : on remonte, on ne reste jamais seul."
      />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: 15 })} />
    <TransitionSeries.Sequence name="Directive 04" durationInFrames={165}>
      <DirectiveScene
        number="04"
        title="La dette technique se rembourse."
        detail="20 % de chaque sprint est réservé au refactoring et à la stabilité."
      />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: 15 })} />
    <TransitionSeries.Sequence name="Directive 05" durationInFrames={165}>
      <DirectiveScene
        number="05"
        title="Documentez pour le prochain."
        detail="Le code que vous écrivez aujourd'hui, quelqu'un le reprendra demain."
      />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
    <TransitionSeries.Sequence name="Supervision" durationInFrames={180}>
      <BoardScene />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
    <TransitionSeries.Sequence name="Outro" durationInFrames={150}>
      <OutroScene managerName={managerName} />
    </TransitionSeries.Sequence>
  </TransitionSeries>
);
