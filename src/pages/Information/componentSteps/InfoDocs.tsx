import { useState } from "react";
import { BiFile, BiCamera } from "react-icons/bi";
import Modal from "../../../components/Modal";

import {
  ContainerDocs,
  WrapperFile,
  ImageFile,
  ButtonTakePhoto,
} from "./styles";

import { UserDataProps } from "../index";
import WebCam, { TypePhotoProps } from "../../../components/WebCam";

export interface InfoDocsProps {
  data: UserDataProps;
  handleOnChange: (name: string, value: string | null | undefined) => void;
}

export default function InfoDocs({ data, handleOnChange }: InfoDocsProps) {
  const [modal, setModal] = useState(false);
  const optionCameraFront = {
    title: "Foto da frente do documento",
    type: "docFront",
    image: data.docFront,
  } as TypePhotoProps;

  const optionCameraVerse = {
    title: "Foto do verso do documento",
    type: "docVerse",
    image: data.docVerse,
  } as TypePhotoProps;

  const [optionsCamera, setOptionsCamera] =
    useState<TypePhotoProps>(optionCameraFront);

  const openCamera = (type: "docFront" | "docVerse") => {
    setOptionsCamera(
      type === "docFront" ? optionCameraFront : optionCameraVerse
    );
    setModal(true);
  };

  const handleOnTakePhoto = (
    type: "docVerse" | "docFront" | "docPerfil",
    image: string | null | undefined
  ) => {
    handleOnChange(type, image);
    setModal(false);
  };

  return (
    <ContainerDocs>
      <WrapperFile>
        <div className="fieldGroupImages">
          <ImageFile>
            {!data.docFront ? (
              <BiFile size={32} color="#D0D5DD" />
            ) : (
              <img src={data.docFront} alt="Imagem frontal" />
            )}
          </ImageFile>
          <span className="descriptionFile">Frente</span>
        </div>
        <ButtonTakePhoto onClick={() => openCamera("docFront")} type="button">
          <BiCamera color="rgba(251, 169, 76, 1)" />
        </ButtonTakePhoto>
      </WrapperFile>

      <WrapperFile>
        <div className="fieldGroupImages">
          <ImageFile>
            {!data.docVerse ? (
              <BiFile size={32} color="#D0D5DD" />
            ) : (
              <img src={data.docVerse} alt="Imagem frontal" />
            )}
          </ImageFile>
          <span className="descriptionFile">Verso</span>
        </div>
        <ButtonTakePhoto type="button" onClick={() => openCamera("docVerse")}>
          <BiCamera color="rgba(251, 169, 76, 1)" />
        </ButtonTakePhoto>
      </WrapperFile>

      <Modal isOpen={modal} title={optionsCamera.title} onOpenChange={setModal}>
        {/* <Camera
          handleOnClose={closeCamera}
          handleOnTakePhoto={(image) => takePicture(optionsCamera.type, image)}
          image={optionsCamera.image}
          typeCam={optionsCamera.type}
        /> */}

        <WebCam
          data={optionsCamera}
          handleClose={() => setModal(!modal)}
          handleOnTakePhoto={(image) =>
            handleOnTakePhoto(optionsCamera.type, image)
          }
        />
      </Modal>
    </ContainerDocs>
  );
}
