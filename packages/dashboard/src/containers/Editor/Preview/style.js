import styled from "styled-components";

import { Tooltip } from "@tour.js/core";

import Card from "components/molecules/Card";
import Title from "components/atoms/Title";

import { Button as StyledButton } from "../Craft/style";

const Preview = styled(Card)`
  ${Card.S.Body} {
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }

  ${Card.S.Header} {
    padding: 0 !important;
    flex-direction: row;
    justify-content: space-between;
  }

  ${Card.S.Header} ${Title.S.Title} {
    padding: 12px;
  }
`;

const TooltipWrapper = styled.div`
  margin-top: 24px;

  &,
  * {
    opacity: 1 !important;
  }

  .tour--tooltip-wrapper {
    position: static !important;
  }

  .${Tooltip.constant.TITLE.class} {
    ${Tooltip.constant.TITLE.css};
  }

  .${Tooltip.constant.CONTENT.class} {
    ${Tooltip.constant.CONTENT.css};
  }

  .${Tooltip.constant.FOOTER.class} {
    ${Tooltip.constant.FOOTER.css};
  }

  .${Tooltip.constant.BUTTON.class} {
    ${Tooltip.constant.BUTTON.css};
    box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.05) !important;
  }

  .${Tooltip.constant.NEXT_BUTTON.class} {
    ${Tooltip.constant.NEXT_BUTTON.css};
  }

  .${Tooltip.constant.PREV_BUTTON.class} {
    ${Tooltip.constant.PREV_BUTTON.css};
  }

  .${Tooltip.constant.FINISH_BUTTON.class} {
    ${Tooltip.constant.FINISH_BUTTON.css};
  }
`;

const SaveButton = styled(StyledButton)`
  button {
    border: 0;
    border-left: 1px solid var(--gray-very-light);
    padding: 12px;
    border-radius: 0;
  }
`;

export { Preview, TooltipWrapper, SaveButton };
