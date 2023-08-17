import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/AuthContext";
import { useSteps } from "../../hooks/useStep";
import { api } from "../../services/api";

import Button from "../../components/Button";
import Header from "../../components/Header";
import Steps from "../../components/Steps";
import InfoData from "./componentSteps/InfoData";
import InfoDocs from "./componentSteps/InfoDocs";
import InfoPerfil from "./componentSteps/InfoPerfil";

import { Content } from "../Wellcome/styles";
import { FooterSteps, ContentStep } from "./styles";
import { ContainerDefault, Paragraph, Title } from "../../styles";

export interface UserDataProps {
  docFront: string | null | undefined;
  docVerse: string | null | undefined;
  imagePerfil: string | null | undefined;
}

export default function Information() {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const [formData, setFormData] = useState<UserDataProps>({
    docFront: "",
    docVerse: "",
    imagePerfil: "",
  });

  const handleOnChange = (name: string, value: string | null | undefined) => {
    setFormData({ ...formData, [name]: value });
  };

  const componentStepsInfo = [
    {
      title: "Por favor, confirme os dados abaixo 👇",
      description:
        "Para habilitar sua conta, basta seguir 2 passos simples e rápidos. Para o primeiro passo precisaremos de uma foto de sua CNH ou RG que conste o número do seu CPF. Para o segundo passo será necessário enviar uma foto do seu rosto.",
      component: <InfoData />,
    },
    {
      title: "",
      description:
        "Agora vamos tirar uma foto do seu documento de identificação. Pode ser o RG contendo o número do seu CPF ou a CNH. <br> <br> A foto será realizada em duas partes, sendo a primeira a foto da frente e depois o verso do documento. O documento pode estar na horizontal ou vertical, mas é necessário estar legível.",
      component: (
        <InfoDocs
          data={formData}
          handleOnChange={(name, value) => handleOnChange(name, value)}
        />
      ),
    },
    {
      title: "",
      description:
        "Agora será feita a foto do seu rosto. Por favor, alinhe o seu rosto com as linhas pontilhadas.",
      component: (
        <InfoPerfil
          data={formData}
          handleOnChange={(name, value) => handleOnChange(name, value)}
        />
      ),
    },
  ];

  const filterComponent = componentStepsInfo.map((row) => row.component);
  const { currentComponent, isFirstStep, changeStep, isLastStep, currentStep } =
    useSteps(filterComponent);

  const currentInfo = componentStepsInfo.filter(
    (_, key) => key === currentStep
  )[0];

  const validationStep = () => {
    const nextStep = formData.docFront && formData.docVerse ? true : false;
    if (!nextStep && currentStep === 1) {
      throw new Error("Favor preencher todos os campos");
    }
  };

  const handleOnNextStep = () => {
    try {
      validationStep();
      changeStep(currentStep + 1);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleOnPrevStep = () => {
    changeStep(currentStep - 1);
  };

  const handleOnFinished = async () => {
    try {
      const { docFront, docVerse, imagePerfil } = formData;
      const newFormData = {
        codigo: user.code,
        identity: user.cpf,
        facematch: imagePerfil,
        docFrente: docFront,
        docVerso: docVerse,
        browserUserAgent: window.navigator.userAgent,
      };

      const response = await api.post("/Onboarding/UploadOCR", newFormData);

      if (response.data.resultCode === 1) {
        throw new Error(response.data.resultMessage);
      }
      signOut();
      navigate("/finalizado");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <ContainerDefault>
      <Header />

      <Content>
        {currentInfo.title && <Title>{currentInfo.title}</Title>}

        <Paragraph
          dangerouslySetInnerHTML={{ __html: currentInfo.description }}
        />
      </Content>

      <ContentStep>
        <form>
          <Steps currentStep={currentStep} />

          <div style={{ minHeight: "220px" }}>{currentComponent}</div>
          <FooterSteps>
            <div className="fieldGroup">
              <Button
                variant="outline"
                style={
                  isFirstStep
                    ? { visibility: "hidden", opacity: 0, transition: "none" }
                    : { visibility: "visible", opacity: 1, transition: "none" }
                }
                onClick={handleOnPrevStep}
              >
                Voltar
              </Button>

              {!isLastStep ? (
                <Button onClick={handleOnNextStep}>Avançar</Button>
              ) : (
                <Button onClick={handleOnFinished}>Salvar</Button>
              )}
            </div>
          </FooterSteps>
        </form>
      </ContentStep>
    </ContainerDefault>
  );
}
