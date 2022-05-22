import { AiOutlineCopy } from 'react-icons/ai';
import Tour from 'tour.js';

import Section from '../../components/Section';

import * as S from './style';
import * as C from './constants';

import Footer from '../../components/Footer';

const tour = new Tour({
  steps: [
    {
      selector: '#page-title',
      title: 'Heelo',
      content: 'asdsad',
    },
    {
      selector: '#new-users',
      title: 'Heelo',
      content: 'asdsad',
    },
    {
      selector: '#new-hidden-features',
      title: 'Heelo',
      content: 'asdsad',
    },
    {
      selector: '#shortcuts',
      title: 'Heelo',
      content: 'asdsad',
    },
    {
      selector: '#npm-button',
      title: 'Heelo',
      content: 'asdsad',
    },
    {
      selector: '#footer-docs-button',
      title: 'Heelo',
      content: 'asdsad',
    },
  ],
});

function LandingContainer() {
  const handleNpmButton = () => {
    navigator.clipboard.writeText('npm i tour.js');
  };

  const handleDemoButton = () => {
    tour.start();
  };

  return (
    <S.LandingContainer>
      <S.Hero>
        <S.Title id="page-title">Show Your Product</S.Title>
        <S.Description>
          Don't let the users figure out your product,
          <br />
          give a tour for your features befor they ask!
        </S.Description>
        <S.ActionButtons>
          <S.DemoButton kind="primary" onClick={handleDemoButton}>
            Demo Tour
          </S.DemoButton>
          <S.NpmButton
            id="npm-button"
            icon={<AiOutlineCopy />}
            onClick={handleNpmButton}
          >
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
          id={section.id}
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
