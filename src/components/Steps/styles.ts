import styled from "styled-components";

export const Container = styled.div`
  .step-progress {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid var(--gray-700);
    padding-bottom: 1.2rem;
    margin-bottom: 1rem;
  }

  .step-progress strong {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: var(--gray-700);

    &.done {
      color: var(--gray-300);
    }

    @media screen and (max-width: 600px) {
      gap: 0.4rem;
    }
  }

  .step-progress strong.active {
    color: var(--primary-600);
  }

  .step-progress strong::before {
    content: counter(step);
    counter-increment: step;
    font-family: "Titillium Web", sans-serif;
    font-size: 1rem;

    background-color: var(--gray-100);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--gray-500);

    @media screen and (max-width: 600px) {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 0.875rem;
    }
  }

  .step-progress .active::before {
    background-color: var(--primary-600);
    color: var(--gray-50);
  }

  .step-progress .done::before {
    content: "✔";
    background-color: var(--success-600);
    color: var(--gray-50);
  }
`;
