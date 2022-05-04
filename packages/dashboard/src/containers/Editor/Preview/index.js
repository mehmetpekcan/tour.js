import { useState } from "react";
import { Tooltip } from "@tour.js/core";

import Title from "components/atoms/Title";

import * as S from "./style";

function Preview() {
  console.log(Tooltip.constant);
  return (
    <S.Preview type="transparent">
      <S.Preview.Header align="start">
        <Title level={4}>Preview</Title>
      </S.Preview.Header>
      <S.Preview.Body>
        <S.TooltipWrapper
          dangerouslySetInnerHTML={{
            __html: Tooltip.constant.TOOLTIP.element({
              title: "asdsada",
              content: "lorem",
              next: "Next",
              prev: "Previous",
              finish: "Finish",
              // TODO: add skip button
            }),
          }}
        ></S.TooltipWrapper>
      </S.Preview.Body>
    </S.Preview>
  );
}

export default Preview;
