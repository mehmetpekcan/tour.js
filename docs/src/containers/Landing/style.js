import styled from 'styled-components';

import Button from '../../components/Button';

const LandingContainer = styled.div``;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-bottom: 96px;
  overflow: hidden;
  min-height: calc(100vh - 96px);
`;

const Title = styled.h1`
  margin-bottom: var(--gap-sm);
  font-size: 6rem;
  font-weight: 800;
  letter-spacing: -4px;
`;

const Description = styled.p`
  font-size: var(--gap-m);
`;

const ActionButtons = styled.div`
  margin-top: var(--gap-m);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap);

  @media (max-width: 475px) {
    grid-template-columns: 1fr;
  }
`;

const DemoButton = styled(Button)``;

const NpmButton = styled(Button)``;

const Details = styled.div`
  margin: var(--gap) 0;
  display: flex;
  gap: var(--gap);
`;

const Text = styled.p`
  color: var(--gray-dark);
`;

export {
  LandingContainer,
  Hero,
  Title,
  Description,
  ActionButtons,
  DemoButton,
  NpmButton,
  Details,
  Text,
};
