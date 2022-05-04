import styled, { css } from "styled-components";

import Card from "components/molecules/Card";
import StyledButton from "components/atoms/Button";

const Craft = styled.div``;

const Section = styled(Card)`
  ${Card.S.Body} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  ${StyledButton.S.Button} {
    flex: 1;
  }

  ${StyledButton.S.Button} button {
    padding: 12px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const Button = styled(StyledButton)`
  ${({ isActive }) =>
    typeof isActive !== "undefined" &&
    !isActive &&
    css`
      button {
        background-color: var(--gray-very-light);
      }
    `}

  ${({ disabled }) =>
    typeof disabled !== "undefined" &&
    disabled &&
    css`
      button {
        background-color: var(--gray-light);
        color: var(--gray-very-light);
        cursor: not-allowed;

        &:hover {
          background-color: var(--gray-light);
          color: var(--gray-very-light);
        }
      }
    `}
`;

export { Craft, Section, Button };
