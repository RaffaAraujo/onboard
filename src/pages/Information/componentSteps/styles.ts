import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ViewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 2px;
`;

export const TextInfoTitle = styled.h3`
  font-size: 0.875rem;
  margin-bottom: 2px;
  color: var(--gray-500);
`;

export const TextInfoDescription = styled.span`
  font-size: 1rem;
  color: var(--gray-300);
`;

// DOCS

export const ContainerDocs = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const WrapperFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--gray-800);
  padding: 8px;
  border-radius: 5px;

  .fieldGroupImages {
    display: flex;
    align-items: center;
    gap: 12px;

    .descriptionFile {
      font-size: 0.875rem;
      font-weight: var(--weight-semibold);
      color: var(--gray-300);
    }
  }
`;

export const ImageFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 60px;

  border-radius: 4px;
  background: #475467;
  box-shadow: 0px 4px 42px 0px rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const ButtonTakePhoto = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  background: var(--gray-900);
`;
