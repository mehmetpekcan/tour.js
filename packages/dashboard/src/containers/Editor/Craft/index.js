import {
  BiSkipPrevious,
  BiSkipNext,
  BiHeading,
  BiParagraph,
  BiFastForward,
  BiCheck,
} from "react-icons/bi";

import Title from "components/atoms/Title";

import { useEditorContext } from "../EditorProvider";

import * as S from "./style";

const Section = ({ title, children }) => {
  return (
    <S.Section type="transparent">
      <S.Section.Header align="start">
        <Title level={4}>{title}</Title>
      </S.Section.Header>
      <S.Section.Body>{children}</S.Section.Body>
    </S.Section>
  );
};

function Craft({ handleButtonAdd }) {
  const { changeActiveState, draftTour } = useEditorContext();

  return (
    <S.Craft>
      <Section title="Type">
        <S.Button onClick={() => handleButtonAdd("tooltip")}>Tooltip</S.Button>
        <S.Button onClick={() => handleButtonAdd("modal")}>Modal</S.Button>
      </Section>
      <Section title="Text Fields">
        <S.Button
          isActive={draftTour.title.isActive}
          icon={<BiHeading />}
          onClick={() => changeActiveState("title")}
        >
          Title
        </S.Button>
        <S.Button
          isActive={draftTour.content.isActive}
          icon={<BiParagraph />}
          onClick={() => changeActiveState("content")}
        >
          Body
        </S.Button>
      </Section>
      <Section title="Buttons">
        <S.Button
          isActive={draftTour.prev.isActive}
          icon={<BiSkipPrevious />}
          onClick={() => changeActiveState("prev")}
        >
          Prev
        </S.Button>
        <S.Button
          isActive={draftTour.next.isActive}
          icon={<BiSkipNext />}
          onClick={() => changeActiveState("next")}
        >
          Next
        </S.Button>
        <S.Button
          isActive={draftTour.finish.isActive}
          icon={<BiCheck />}
          onClick={() => changeActiveState("finish")}
        >
          Done
        </S.Button>
        <S.Button
          isActive={draftTour.skip.isActive}
          icon={<BiFastForward />}
          onClick={() => changeActiveState("skip")}
        >
          Skip
        </S.Button>
      </Section>
    </S.Craft>
  );
}

export default Craft;
