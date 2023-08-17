import styled from "styled-components";

export const ContainerDefault = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  min-width: 320px;
  min-height: 100svh;
  padding: 2rem;
  display: grid;
  grid-template-rows: min-content 1fr min-content;

  @media screen and (max-width: 600px) {
    padding: var(--container-padding-sm);
  }
`;

export const ContentDefault = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Paragraph = styled.p`
  font-size: var(--text-small-lg);
  font-weight: var(--weight-medium);
  color: var(--gray-50);
  line-height: 1.75rem;
`;

export const Title = styled.h1`
  font-size: clamp(1rem, 10vw, 2.2rem);
  font-weight: var(--weight-black);
  width: min(100%, 380px);

  span {
    color: var(--primary-600);
  }
`;
