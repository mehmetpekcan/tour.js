import { BiShareAlt, BiSave } from "react-icons/bi";

import Title from "components/atoms/Title";

import { useEditorContext } from "../EditorProvider";

import * as S from "./style";

function Preview({ onSave }) {
  const { draftTour, tours } = useEditorContext();

  return (
    <S.Preview type="transparent">
      <S.Preview.Header align="start" id="preview-section">
        <Title level={4}>Preview</Title>
        <S.ActionButtons>
          <S.Button disabled={!tours.length} icon={<BiShareAlt />}>
            Preview
          </S.Button>
          <S.Button
            disabled={!draftTour.selector.value}
            onClick={onSave}
            icon={<BiSave />}
          >
            Save
          </S.Button>
        </S.ActionButtons>
      </S.Preview.Header>
      <S.Preview.Body>
        <S.TooltipWrapper id="tooltip-wrapper">
          {draftTour.title.isActive && (
            <S.TooltipTitle contentEditable>
              {draftTour.title.value}
            </S.TooltipTitle>
          )}
          {draftTour.content.isActive && (
            <S.TooltipContent contentEditable>
              {draftTour.content.value}
            </S.TooltipContent>
          )}
          {(draftTour.prev.isActive ||
            draftTour.next.isActive ||
            draftTour.finish.isActive) && (
            <S.TooltipFooter>
              {draftTour.prev.isActive && (
                <S.TooltipPrevButton contentEditable>
                  {draftTour.prev.value}
                </S.TooltipPrevButton>
              )}
              {draftTour.next.isActive && (
                <S.TooltipNextButton contentEditable>
                  {draftTour.next.value}
                </S.TooltipNextButton>
              )}
              {draftTour.finish.isActive && (
                <S.TooltipFinishButton contentEditable>
                  {draftTour.finish.value}
                </S.TooltipFinishButton>
              )}
            </S.TooltipFooter>
          )}
        </S.TooltipWrapper>
      </S.Preview.Body>
    </S.Preview>
  );
}

export default Preview;
