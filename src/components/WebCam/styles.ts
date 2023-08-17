import styled from "styled-components";

export const Container = styled.div``;

export const Sectionimage = styled.div``;

export const SectionWebCam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #000;

  .maskPerfilCamera {
    position: absolute;
    width: 40%;
    height: 90%;

    left: 30%;
    top: 5%;
    transform: translateY(-50%, -50%);

    box-shadow: 0px 0px 20px 56px rgba(0, 0, 0, 0.1);
    border: 2px dashed #fff;
    border-radius: 50%;
  }

  .maskDocCamera {
    position: absolute;
    width: 95%;
    height: 92%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    box-shadow: 0px 0px 20px 56px rgba(0, 0, 0, 0.1);
    border: 2px dashed #fff;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;

  .fieldGroup {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  @media screen and (max-width: 600px) {
    .fieldGroup {
      button {
        text-indent: -900px;
        text-transform: capitalize;
        gap: 0;
      }
    }
  }
`;
