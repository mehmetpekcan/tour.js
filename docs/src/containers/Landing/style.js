import styled from 'styled-components';

import Button from '../../components/Button';

const LandingContainer = styled.div``;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3.5rem 0;
`;

const Title = styled.h1`
  margin-bottom: var(--gap-sm);
  font-size: 6rem;
  font-weight: 800;
  letter-spacing: -4px;
`;

const Description = styled.p`
  font-size: 2rem;
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
  margin-top: var(--gap);
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
