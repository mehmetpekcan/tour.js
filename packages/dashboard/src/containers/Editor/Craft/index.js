import {
  BiSkipPrevious,
  BiSkipNext,
  BiHeading,
  BiParagraph,
  BiFastForward,
  BiCheck,
} from "react-icons/bi";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";

import * as S from "./style";

function Craft({ handleButtonAdd }) {
  return (
    <S.Craft>
      <S.ButtonGroupCard type="transparent">
        <S.ButtonGroupCard.Header align="start">
          <Title level={4}>Type</Title>
        </S.ButtonGroupCard.Header>
        <S.ButtonGroupCard.Body>
          <Button onClick={() => handleButtonAdd("previous")}>Tooltip</Button>
          <Button onClick={() => handleButtonAdd("next")}>Modal</Button>
        </S.ButtonGroupCard.Body>
      </S.ButtonGroupCard>
      <S.ButtonGroupCard type="transparent">
        <S.ButtonGroupCard.Header align="start">
          <Title level={4}>Buttons</Title>
        </S.ButtonGroupCard.Header>
        <S.ButtonGroupCard.Body>
          <Button
            icon={<BiSkipPrevious />}
            onClick={() => handleButtonAdd("previous")}
          >
            Prev
          </Button>
          <Button icon={<BiSkipNext />} onClick={() => handleButtonAdd("next")}>
            Next
          </Button>
          <Button icon={<BiCheck />} onClick={() => handleButtonAdd("finish")}>
            Done
          </Button>
          <Button
            icon={<BiFastForward />}
            onClick={() => handleButtonAdd("skip")}
          >
            Skip
          </Button>
        </S.ButtonGroupCard.Body>
      </S.ButtonGroupCard>
      <S.ButtonGroupCard type="transparent">
        <S.ButtonGroupCard.Header align="start">
          <Title level={4}>Text Fields</Title>
        </S.ButtonGroupCard.Header>
        <S.ButtonGroupCard.Body>
          <Button icon={<BiHeading />} onClick={() => handleButtonAdd("next")}>
            Title
          </Button>
          <Button
            icon={<BiParagraph />}
            onClick={() => handleButtonAdd("previous")}
          >
            Body
          </Button>
        </S.ButtonGroupCard.Body>
      </S.ButtonGroupCard>
    </S.Craft>
  );
}

export default Craft;
