import styled from 'styled-components';

const Section = styled.section`
  margin-top: var(--gap-xl);

  &:not(:last-child) {
    margin-bottom: calc(var(--gap-xl) * 3);
  }
`;

const Title = styled.h2`
  font-size: 3.75rem;
  text-align: center;
  margin-bottom: var(--gap-xl);
`;

const SubTitle = styled.h3`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  color: ${({ color }) => color};
  margin-bottom: var(--gap);
`;

const Prefix = styled.span`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  color: var(--black);
  font-weight: 500;
  border-radius: 99999px;
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: var(--gap-m);
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: var(--gap-xl);
    background: linear-gradient(rgba(0, 0, 0, 0.2), ${({ color }) => color});
    position: absolute;
    top: calc(var(--gap-xl) * -1);
  }
`;

const Content = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;

export { Section, SubTitle, Prefix, Title, Content };
