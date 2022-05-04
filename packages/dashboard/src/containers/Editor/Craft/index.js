import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { MdOutlineDone } from "react-icons/md";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";

import * as S from "./style";

function Craft({ handleButtonAdd }) {
  return (
    <S.Craft>
      <S.ButtonGroupCard type="transparent">
        <S.ButtonGroupCard.Header align="start">
          <Title level={4}>Buttons</Title>
        </S.ButtonGroupCard.Header>
        <S.ButtonGroupCard.Body>
          <Button icon={<BiSkipNext />} onClick={() => handleButtonAdd("next")}>
            Next
          </Button>
          <Button
            icon={<BiSkipPrevious />}
            onClick={() => handleButtonAdd("previous")}
          >
            Prev
          </Button>
          <Button
            icon={<MdOutlineDone />}
            onClick={() => handleButtonAdd("finish")}
          >
            Done
          </Button>
        </S.ButtonGroupCard.Body>
      </S.ButtonGroupCard>
      <S.InputGroupCard type="transparent">
        <S.InputGroupCard.Header align="start">
          <Title level={4}>Text Fields</Title>
        </S.InputGroupCard.Header>
        <S.InputGroupCard.Body>
          <Input
            placeholder="Title"
            icon={<AiOutlineCheckCircle fill="var(--green)" />}
          />
          <Input
            placeholder="Body"
            icon={<AiOutlineCheckCircle fill="var(--green)" />}
          />
        </S.InputGroupCard.Body>
      </S.InputGroupCard>
    </S.Craft>
  );
}

export default Craft;
