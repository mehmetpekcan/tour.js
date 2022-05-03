import styled from "styled-components";

import Card from "components/molecules/Card";

const Editor = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 300px;

  ${Card.S.Header} {
    padding-bottom: 12px;
    border-bottom: 1px solid var(--gray-very-light);
  }
`;

export { Editor };
