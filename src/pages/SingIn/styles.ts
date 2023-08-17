import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  min-width: 320px;
  min-height: 100svh;
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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .fieldInput {
    display: flex;
    align-items: center;
    gap: 12px;

    font-size: var(--text-small-xl);
    font-weight: var(--weight-reular);
    color: var(--gray-300);

    margin-bottom: 4rem;
  }

  .field {
    display: flex;
    align-items: center;
    position: relative;

    border-color: var(--gray-900);
    word-wrap: break-word;
    border-radius: 0.375rem;

    height: 56px;
    border-radius: 0.375rem;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: var(--gray-900);
    background: var(--gray-900);
    padding-inline-start: 1rem;
  }

  .textCpf {
    font-size: var(--text-small-xl);
    font-weight: var(--weight-reular);
    color: var(--gray-300);
  }

  .field input[type="text"] {
    width: 10ch;
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    appearance: none;
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    transition-duration: 200ms;
    font-size: var(--text-small-xl);
    font-weight: var(--weight-reular);
    color: var(--gray-300);
    padding-inline-start: 2px;
    padding-inline-end: 1rem;
    height: 56px;
    border-radius: 0.375rem;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: var(--gray-900);
    background: var(--gray-900);

    &::placeholder {
      color: var(--gray-700);
    }

    &:focus-visible {
      z-index: 1;
      border-color: rgb(49, 130, 206);
      box-shadow: rgb(49 130 206) 0px 0px 0px 1px;
    }
  }
`;

export const SectionText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 3em;
  height: 100%;
`;
