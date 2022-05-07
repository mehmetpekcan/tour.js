import { BiShareAlt, BiSave } from "react-icons/bi";

import Title from "components/atoms/Title";

import { useEditorContext } from "../EditorProvider";

import * as S from "./style";

function Preview({ onSave }) {
  const { draftTour, tours, changeFieldValue } = useEditorContext();

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
            <S.TooltipTitle
              contentEditable
              onInput={(e) => {
                changeFieldValue("title", e.target.innerText);
              }}
              suppressContentEditableWarning={true}
            >
              {draftTour.title.value}
            </S.TooltipTitle>
          )}
          {draftTour.content.isActive && (
            <S.TooltipContent
              onInput={(e) => {
                changeFieldValue("content", e.target.innerText);
              }}
              contentEditable
              suppressContentEditableWarning={true}
            >
              {draftTour.content.value}
            </S.TooltipContent>
          )}
          {(draftTour.prev.isActive ||
            draftTour.next.isActive ||
            draftTour.finish.isActive) && (
            <S.TooltipFooter>
              {draftTour.prev.isActive && (
                <S.TooltipPrevButton
                  onInput={(e) => {
                    changeFieldValue("prev", e.target.innerText);
                  }}
                  contentEditable
                  suppressContentEditableWarning={true}
                >
                  {draftTour.prev.value}
                </S.TooltipPrevButton>
              )}
              {draftTour.next.isActive && (
                <S.TooltipNextButton
                  onInput={(e) => {
                    changeFieldValue("next", e.target.innerText);
                  }}
                  contentEditable
                  suppressContentEditableWarning={true}
                >
                  {draftTour.next.value}
                </S.TooltipNextButton>
              )}
              {draftTour.finish.isActive && (
                <S.TooltipFinishButton
                  onInput={(e) => {
                    changeFieldValue("finish", e.target.innerText);
                  }}
                  contentEditable
                  suppressContentEditableWarning={true}
                >
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
