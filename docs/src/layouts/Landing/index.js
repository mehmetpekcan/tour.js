import Header from '../../components/Header';

import * as S from './style';

function LandingLayout({ children }) {
  return (
    <S.LandingLayout>
      <Header />
      <S.Main>{children}</S.Main>
    </S.LandingLayout>
  );
}

export default LandingLayout;
