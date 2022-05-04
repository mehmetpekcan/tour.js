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
        <S.Button disabled onClick={() => handleButtonAdd("modal")}>
          Modal
        </S.Button>
      </Section>
      <Section title="Text Fields">
        <S.Button
          disabled={draftTour.title.isDisabled || false}
          isActive={draftTour.title.isActive}
          icon={<BiHeading />}
          onClick={() => changeActiveState("title")}
        >
          Title
        </S.Button>
        <S.Button
          disabled={draftTour.content.isDisabled || false}
          isActive={draftTour.content.isActive}
          icon={<BiParagraph />}
          onClick={() => changeActiveState("content")}
        >
          Body
        </S.Button>
      </Section>
      <Section title="Buttons">
        <S.Button
          disabled={draftTour.prev.isDisabled || false}
          isActive={draftTour.prev.isActive}
          icon={<BiSkipPrevious />}
          onClick={() => changeActiveState("prev")}
        >
          Prev
        </S.Button>
        <S.Button
          disabled={draftTour.next.isDisabled || false}
          isActive={draftTour.next.isActive}
          icon={<BiSkipNext />}
          onClick={() => changeActiveState("next")}
        >
          Next
        </S.Button>
        <S.Button
          disabled={draftTour.finish.isDisabled || false}
          isActive={draftTour.finish.isActive}
          icon={<BiCheck />}
          onClick={() => changeActiveState("finish")}
        >
          Done
        </S.Button>
        <S.Button
          disabled={draftTour.skip.isDisabled || false}
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
