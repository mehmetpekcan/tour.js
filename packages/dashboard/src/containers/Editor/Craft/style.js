import styled from "styled-components";

import Card from "components/molecules/Card";
import Button from "components/atoms/Button";

const Craft = styled.div``;

const ButtonGroupCard = styled(Card)`
  ${Card.S.Body} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  ${Button.S.Button} {
    flex: 1;
  }

  ${Button.S.Button} button {
    padding: 12px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export { Craft, ButtonGroupCard };
