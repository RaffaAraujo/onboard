import { useState } from "react";
import { BiCamera, BiFile } from "react-icons/bi";
import Modal from "../../../components/Modal";
import {
  ButtonTakePhoto,
  ContainerDocs,
  ImageFile,
  WrapperFile,
} from "./styles";
import { InfoDocsProps } from "./InfoDocs";
import WebCam from "../../../components/WebCam";

export default function InfoPerfil({ data, handleOnChange }: InfoDocsProps) {
  const [modal, setModal] = useState(false);

  const handleOnTakePhoto = (image: string | null | undefined) => {
    handleOnChange("imagePerfil", image);
  };

  return (
    <ContainerDocs>
      <WrapperFile>
        <div className="fieldGroupImages">
          <ImageFile>
            {!data.imagePerfil ? (
              <BiFile size={32} color="#D0D5DD" />
            ) : (
              <img src={data.imagePerfil} alt="Imagem frontal" />
            )}
          </ImageFile>
          <span className="descriptionFile">Perfil</span>
        </div>
        <ButtonTakePhoto onClick={() => setModal(!modal)} type="button">
          <BiCamera color="rgba(251, 169, 76, 1)" />
        </ButtonTakePhoto>
      </WrapperFile>

      <Modal isOpen={modal} title={"Foto da face"} onOpenChange={setModal}>
        <WebCam
          data={{
            image: data.imagePerfil,
            title: "Foto de perfil",
            type: "docPerfil",
          }}
          handleClose={() => setModal(!modal)}
          handleOnTakePhoto={(image) => handleOnTakePhoto(image)}
        />
      </Modal>
    </ContainerDocs>
  );
}
