import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { BiCamera, BiRefresh } from "react-icons/bi";
import Button from "../Button";
import { Container, Sectionimage, Footer, SectionWebCam } from "./styles";

const videoConstraints = {
  width: 1280,
  height: 720,
};

export interface TypePhotoProps {
  title: string;
  type: "docVerse" | "docFront" | "docPerfil";
  image: string | null | undefined;
}

interface WebCamProps {
  data: TypePhotoProps;
  handleOnTakePhoto: (image: string | null | undefined) => void;
  handleClose: () => void;
}

export default function WebCam({
  handleOnTakePhoto,
  handleClose,
  data,
}: WebCamProps) {
  const webcamRef = useRef<Webcam>(null);
  const [imageSrc, setImageSrc] = useState<string | null | undefined>(
    data.image
  );

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef]);

  const clearImage = useCallback(() => {
    setImageSrc(null);
  }, []);

  const savePhoto = () => {
    handleOnTakePhoto(imageSrc);
    handleClose();
  };

  return (
    <Container>
      {imageSrc ? (
        <Sectionimage>
          <img src={imageSrc} alt="imagem do documento" />
        </Sectionimage>
      ) : (
        <SectionWebCam>
          {data.type === "docPerfil" ? (
            <div className="maskPerfilCamera" />
          ) : (
            <div className="maskDocCamera" />
          )}
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            height="100%"
            width="100%"
            videoConstraints={{
              width: videoConstraints.width,
              height: videoConstraints.height,
              facingMode: data.type === "docPerfil" ? "user" : "environment",
            }}
          />
        </SectionWebCam>
      )}

      <Footer>
        <Button variant="outline" onClick={handleClose} type="button">
          Fechar
        </Button>

        {imageSrc ? (
          <div className="fieldGroup">
            <Button onClick={clearImage} variant="dark">
              <BiRefresh size={22} color="#32D583" /> Refazer Foto
            </Button>
            <Button onClick={savePhoto} variant="dark">
              <BiCamera size={22} color="#FBA94C" /> Aplicar
            </Button>
          </div>
        ) : (
          <Button onClick={capture} variant="dark">
            {" "}
            <BiCamera size={22} color="#FBA94C" /> Tirar Foto
          </Button>
        )}
      </Footer>
    </Container>
  );
}
