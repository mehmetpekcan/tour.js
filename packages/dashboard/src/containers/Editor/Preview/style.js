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
  ${Tooltip.constant.TOOLTIP.css};

  & {
    position: static !important;
  }

  &,
  * {
    opacity: 1 !important;
  }
`;

const ActionButtons = styled.div`
  display: flex;
`;

const Button = styled(StyledButton)`
  button {
    border: 0;
    border-left: 1px solid var(--gray-very-light);
    padding: 12px;
    border-radius: 0;
  }
`;

const TooltipTitle = styled.h3`
  ${Tooltip.constant.TITLE.css};
`;

const TooltipContent = styled.div`
  ${Tooltip.constant.CONTENT.css};
`;

const TooltipFooter = styled.div`
  ${Tooltip.constant.FOOTER.css};
`;

const TooltipNextButton = styled.button`
  ${Tooltip.constant.BUTTON.css};
  box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.05) !important;
  ${Tooltip.constant.NEXT_BUTTON.css};
`;

const TooltipPrevButton = styled.button`
  ${Tooltip.constant.BUTTON.css};
  box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.05) !important;
  ${Tooltip.constant.PREV_BUTTON.css};
`;

const TooltipFinishButton = styled.button`
  ${Tooltip.constant.BUTTON.css};
  box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.05) !important;
  ${Tooltip.constant.FINISH_BUTTON.css};
`;

export {
  Preview,
  TooltipWrapper,
  ActionButtons,
  Button,
  TooltipTitle,
  TooltipContent,
  TooltipFooter,
  TooltipNextButton,
  TooltipPrevButton,
  TooltipFinishButton,
};
