import { AiOutlineCopy } from 'react-icons/ai';

import Section from '../../components/Section';

import * as S from './style';
import * as C from './constants';

import Footer from '../../components/Footer';

function LandingContainer() {
  const handleNpmButton = () => {
    navigator.clipboard.writeText('npm i tour.js');
  };

  const handleDemoButton = () => {};

  return (
    <S.LandingContainer>
      <S.Hero>
        <S.Title>Show Your Product</S.Title>
        <S.Description>
          Don't let the users figure out your product,
          <br />
          give a tour for your features befor they ask!
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
      {C.Sections.map((section) => (
        <Section
          key={section.title}
          color={section.color}
          title={section.title}
          subtitle={section.subtitle}
          prefix={section.prefix}
        >
          {section.content}
        </Section>
      ))}
      <Footer />
    </S.LandingContainer>
  );
}

export default LandingContainer;
