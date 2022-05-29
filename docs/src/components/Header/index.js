import { AiFillGithub } from 'react-icons/ai';

import Button from '../Button';
import Logo from '../Logo';

import * as S from './style';

function Header() {
  return (
    <S.Header>
      <Logo />
      <S.Navigation>
        <S.NavItem>
          <Button kind="link" href="/docs/introduction" id="header-docs-button">
            Docs
          </Button>
        </S.NavItem>
        <S.NavItem>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            kind="link-default"
            href="https://github.com/mehmetpekcan/tour.js"
            icon={<AiFillGithub />}
          >
            Github
          </Button>
        </S.NavItem>
      </S.Navigation>
    </S.Header>
  );
}

export default Header;
