import styled from "styled-components";

import Card from "components/molecules/Card";
import { Tooltip } from "@tour.js/core";

const Preview = styled(Card)`
  ${Card.S.Body} {
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }
`;

const TooltipWrapper = styled.div`
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

export { Preview, TooltipWrapper };
