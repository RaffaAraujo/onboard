import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

export const ButtonIcons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  padding: 4px;
  border: none;
  background-color: transparent;

  color: var(--gray-50);
  font-weight: var(--weight-bold);
`;

export const ButtonLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  padding: 4px;
  border: none;
  background-color: transparent;

  color: var(--gray-50);
  font-weight: var(--weight-bold);
`;
