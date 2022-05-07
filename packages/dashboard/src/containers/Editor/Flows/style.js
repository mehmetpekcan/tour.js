import styled from "styled-components";

import Title from "components/atoms/Title";
import Card from "components/molecules/Card";

const Flows = styled(Card)`
  ${Card.S.Body} {
    gap: 16px;
  }

  & > * {
  }
`;

const Flow = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--gray-very-light);
  border-radius: 4px;
`;

const FlowOrder = styled.span`
  font-size: 36px;
  margin-left: 16px;
  font-weight: 900;
`;

const FlowTitle = styled(Title)`
  margin-left: 16px;
  max-width: 75%;

  ${Title.S.TitleElement} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export { Flows, Flow, FlowOrder, FlowTitle };
