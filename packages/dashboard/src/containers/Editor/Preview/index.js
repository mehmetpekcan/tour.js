import { BiSave } from "react-icons/bi";
import { useState } from "react";
import { Tooltip } from "@tour.js/core";

import Title from "components/atoms/Title";

import * as S from "./style";
import Button from "components/atoms/Button";

function Preview() {
  const [title, setTitle] = useState("Publish your changes");
  const [content, setContent] = useState(
    "Your colleagues will see the changefs you made as soon as you publish them."
  );
  const [next, setNext] = useState("Next Tip");
  const [prev, setPrev] = useState("");
  const [finish, setFinish] = useState("");

  return (
    <S.Preview type="transparent">
      <S.Preview.Header align="start">
        <Title level={4}>Preview</Title>
        <Button icon={<BiSave />}>Save</Button>
      </S.Preview.Header>
      <S.Preview.Body>
        <S.TooltipWrapper
          dangerouslySetInnerHTML={{
            // TODO: change `content` to `body` from core api
            // TODO: add skip button
            __html: Tooltip.constant.TOOLTIP.element({
              isEditMode: true,
              title,
              content,
              next,
              prev,
              finish,
            }),
          }}
        ></S.TooltipWrapper>
      </S.Preview.Body>
    </S.Preview>
  );
}

export default Preview;
