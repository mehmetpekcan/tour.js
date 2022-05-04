import { Tooltip } from "@tour.js/core";
import { BiSave } from "react-icons/bi";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";

import { useEditorContext } from "../EditorProvider";

import * as S from "./style";

function Preview() {
  const { draftTour } = useEditorContext();

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
              title: draftTour.title.isActive && draftTour.title.value,
              content: draftTour.content.isActive && draftTour.content.value,
              next: draftTour.next.isActive && draftTour.next.value,
              prev: draftTour.prev.isActive && draftTour.prev.value,
              finish: draftTour.finish.isActive && draftTour.finish.value,
            }),
          }}
        ></S.TooltipWrapper>
      </S.Preview.Body>
    </S.Preview>
  );
}

export default Preview;
