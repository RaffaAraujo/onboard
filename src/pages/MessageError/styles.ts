import styled, { keyframes } from "styled-components";

const moveWheel = keyframes`
  50% {
    transform: translateY(1.5rem);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const SectionText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  .sectionIllustration {
    width: 75%;
    animation: ${moveWheel} 5s infinite linear;
  }
`;
