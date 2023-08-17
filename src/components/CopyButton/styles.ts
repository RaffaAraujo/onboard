import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  width: 100%;
  padding: 16px;

  background-color: var(--gray-900);
  border-radius: 6px;
`;

export const ContentText = styled.div`
  font-weight: var(--weight-semibold);
  color: var(--gray-50);
  line-height: 20px;
  font-size: clamp(0.625rem, 3vw, 0.875rem);
  text-transform: uppercase;
  width: 100%;
  text-align: left;
`;

export const ButtonCopyText = styled.button`
  display: grid;
  place-items: center;

  padding: 6px;
  border-radius: 4px;

  font-size: 12px;
  font-weight: var(--weight-semibold);
  border: none;
  background-color: var(--gray-800);
  color: var(--gray-300);

  transition: all 0.25s ease;
  &:hover {
    color: var(--primary-900);
    background-color: var(--primary-100);
  }
`;
