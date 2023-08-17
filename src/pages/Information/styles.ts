import styled from "styled-components";

export const ContentStep = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 16px;

  margin-top: 20px;
  border-radius: 5px;
  background: var(--gray-900);
`;

export const FooterSteps = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
  }
`;
