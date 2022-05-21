import { AiOutlineCopy } from 'react-icons/ai';

import * as S from './style';

function LandingContainer() {
  const handleNpmButton = () => {
    navigator.clipboard.writeText('npm i tour.js');
  };

  const handleDemoButton = () => {};

  return (
    <S.LandingContainer>
      <S.Hero>
        <S.Title>Tell Your Product</S.Title>
        <S.Description>
          Don't let your users figure out your product, give a tour for your
          features befor they ask!
        </S.Description>
        <S.ActionButtons>
          <S.DemoButton kind="primary" onClick={handleDemoButton}>
            Demo Tour
          </S.DemoButton>
          <S.NpmButton icon={<AiOutlineCopy />} onClick={handleNpmButton}>
            npm i tour.js
          </S.NpmButton>
        </S.ActionButtons>
        <S.Details>
          <S.Text>v0.1.0</S.Text>
          &#9679;
          <S.Text>Lightweight</S.Text>
          &#9679;
          <S.Text>All browsers expect IE</S.Text>
        </S.Details>
      </S.Hero>
    </S.LandingContainer>
  );
}

export default LandingContainer;
