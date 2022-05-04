import styled from "styled-components";

import Card from "components/molecules/Card";

const Editor = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 300px;

  & > * {
    width: 100%;
    border-bottom: 1px solid var(--gray-very-light);
    border-right: 1px solid var(--gray-very-light);
    border-left: 1px solid var(--gray-very-light);
    border-radius: 0;

    :nth-child(1),
    :nth-child(2) {
      border-right: 0;
    }
  }

  ${Card.S.Card} {
    padding: 0;
  }

  ${Card.S.Header} {
    margin-bottom: 0;
    padding: 12px;
    border-top: 1px solid var(--gray-very-light);
    border-bottom: 1px solid var(--gray-very-light);
  }

  ${Card.S.Body} {
    padding: 12px;
  }
`;

export { Editor };
