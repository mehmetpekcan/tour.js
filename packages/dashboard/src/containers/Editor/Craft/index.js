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
import Input from "components/atoms/Input";

const Section = ({ title, children, ...props }) => {
  return (
    <S.Section type="transparent" {...props}>
      <S.Section.Header align="start">
        <Title level={4}>{title}</Title>
      </S.Section.Header>
      <S.Section.Body>{children}</S.Section.Body>
    </S.Section>
  );
};

function Craft() {
  const { changeActiveState, draftTour, changeFieldValue } = useEditorContext();

  return (
    <S.Craft>
      <Section title="Configs">
        <Input
          id="selector-input"
          type="text"
          placeholder="Selector e.g: #footer, .header"
          onChange={(e) => {
            changeFieldValue("selector", e.target.value);
          }}
        />
      </Section>
      <Section title="Type" id="type-section">
        <S.Button isActive={true}>Tooltip</S.Button>
        <S.Button disabled>Modal</S.Button>
      </Section>
      <Section title="Text Fields" id="text-field-section">
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
      <Section title="Buttons" id="buttons-section">
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
