import styled from "styled-components";

import Card from "components/molecules/Card";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";

const Craft = styled.div``;

const ButtonGroupCard = styled(Card)`
  ${Card.S.Body} {
    gap: 12px;
    flex-direction: row;
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

const InputGroupCard = styled(Card)`
  ${Card.S.Body} {
    gap: 12px;
  }

  ${Input.S.Input} {
    width: 100%;
  }
`;

export { Craft, ButtonGroupCard, InputGroupCard };
