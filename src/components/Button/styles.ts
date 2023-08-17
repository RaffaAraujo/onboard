import { shade } from "polished";
import styled, { css } from "styled-components";

interface ButtonProps {
  size?: "md" | "lg";
  full?: boolean;
  variant?: "outline" | "dark";
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: var(--text-small-sm);
  color: var(--gray-50);
  font-weight: var(--weight-semibold);
  white-space: nowrap;

  background-color: var(--primary-600);
  border: 1px solid var(--primary-600);
  border-radius: 4px;
  padding: 0 10px;
  height: 40px;

  transition: all 0.35s ease;

  &:hover {
    background: ${shade(0.1, "#4D7ED7")};
    border: 1px solid ${shade(0.1, "#4D7ED7")};
    transform: scale(1.03);
  }

  ${(props) =>
    props.full &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.size === "lg" &&
    css`
      height: 52px;
    `}

  ${(props) =>
    props.variant === "outline" &&
    css`
      border: 1px solid var(--gray-300);
      background-color: var(--gray-800);

      &:hover {
        background: ${shade(0.1, "#1D2939")};
        border: 1px solid var(--gray-300);
        transform: scale(1.03);
      }
    `}

    ${(props) =>
    props.variant === "dark" &&
    css`
      border: 1px solid var(--gray-900);
      background-color: var(--gray-900);

      &:hover {
        background: ${shade(0.1, "#101828")};
        border: 1px solid var(--gray-900);
        transform: scale(1.03);
      }
    `}
`;
