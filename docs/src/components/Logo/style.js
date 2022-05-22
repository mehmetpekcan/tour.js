import styled from 'styled-components';

import Button from '../Button';

const Logo = styled(Button)``;

const LogoSVG = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 24px 24px;
  border-color: transparent transparent var(--white) transparent;
`;

const Text = styled.p`
  font-size: 20px;
  margin-left: 8px;
  color: var(--white);
  font-weight: 700;
`;

export { Logo, LogoSVG, Text };
