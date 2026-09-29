import "./index.css";
import { Composition, Folder } from "remotion";
import { ManagerVideo } from "./ManagerVideo";
import { IntroScene } from "./scenes/IntroScene";
import { MeetingScene } from "./scenes/MeetingScene";
import { DirectiveScene } from "./scenes/DirectiveScene";
import { BoardScene } from "./scenes/BoardScene";
import { OutroScene } from "./scenes/OutroScene";

// 9 scenes (120 + 180 + 5×165 + 180 + 150 = 1455) minus 8 transitions of 15 frames.
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ManagerVideo"
        component={ManagerVideo}
        durationInFrames={1335}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ managerName: "Calebe", years: 10 }}
      />
      <Folder name="ManagerVideo-Scenes">
        <Composition
          id="Intro"
          component={IntroScene}
          durationInFrames={120}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ managerName: "Calebe", years: 10 }}
        />
        <Composition
          id="Meeting"
          component={MeetingScene}
          durationInFrames={180}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Directive"
          component={DirectiveScene}
          durationInFrames={165}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            number: "01",
            title: "Pas de tests, pas de merge.",
            detail: "Chaque PR arrive avec ses tests et passe une revue par un pair.",
          }}
        />
        <Composition
          id="Board"
          component={BoardScene}
          durationInFrames={180}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Outro"
          component={OutroScene}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ managerName: "Calebe" }}
        />
      </Folder>
    </>
  );
};
