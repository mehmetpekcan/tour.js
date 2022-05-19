import { useMemo } from "react";
import { BiShareAlt, BiSave } from "react-icons/bi";

import Title from "components/atoms/Title";

import { useEditorContext } from "../EditorProvider";

import * as S from "./style";

const TooltipFields = ({ fields, changeFieldValue }) => {
  console.log(fields);

  return fields.map(
    (field) =>
      field.condition && (
        <field.element
          onInput={(e) => changeFieldValue(field.name, e.target.innerText)}
          contentEditable
          suppressContentEditableWarning={true}
        >
          {field.value || (
            <TooltipFields
              fields={field.children}
              changeFieldValue={changeFieldValue}
            />
          )}
        </field.element>
      )
  );
};

function Preview({ onSave }) {
  const { draftTour, tours, changeFieldValue } = useEditorContext();

  const fieldsToElements = useMemo(
    () => [
      {
        condition: draftTour.title.isActive,
        element: S.TooltipTitle,
        name: "title",
        value: draftTour.title.value,
      },
      {
        condition: draftTour.content.isActive,
        element: S.TooltipContent,
        name: "content",
        value: draftTour.content.value,
      },
      {
        condition:
          draftTour.prev.isActive ||
          draftTour.next.isActive ||
          draftTour.finish.isActive,
        element: S.TooltipFooter,
        children: [
          {
            condition: draftTour.prev.isActive,
            element: S.TooltipPrevButton,
            content: "prev",
            value: draftTour.prev.value,
          },
          {
            condition: draftTour.next.isActive,
            element: S.TooltipNextButton,
            content: "next",
            value: draftTour.next.value,
          },
          {
            condition: draftTour.finish.isActive,
            element: S.TooltipFinishButton,
            content: "finish",
            value: draftTour.finish.value,
          },
        ],
      },
    ],
    [draftTour]
  );

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
          <TooltipFields
            fields={fieldsToElements}
            changeFieldValue={changeFieldValue}
          />
        </S.TooltipWrapper>
      </S.Preview.Body>
    </S.Preview>
  );
}

export default Preview;
