import { AiFillGithub } from 'react-icons/ai';

import Button from '../Button';
import Logo from '../Logo';

import * as S from './style';

function Footer() {
  return (
    <S.Footer>
      <Logo />
      &#9679;
      <S.Navigation>
        <S.NavItem>
          <Button kind="link" href="/docs">
            Docs
          </Button>
        </S.NavItem>
        <S.NavItem>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            kind="link"
            href="https://github.com/mehmetpekcan/tour.js"
            icon={<AiFillGithub />}
          >
            Github
          </Button>
        </S.NavItem>
      </S.Navigation>
    </S.Footer>
  );
}

export default Footer;
