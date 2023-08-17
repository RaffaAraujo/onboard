import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  min-width: 320px;
  min-height: 100dvh;
  padding: 2rem;
  display: grid;
  grid-column: 1fr;
  grid-template-rows: min-content 1fr min-content;

  @media screen and (max-width: 600px) {
    padding: var(--container-padding-sm);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100%;
`;

export const SectionText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;
