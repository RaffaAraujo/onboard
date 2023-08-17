import Header from "../../components/Header";

import Button from "../../components/Button";
import NotFoundImage from "../../assets/notFound.svg";

import {
  ContainerDefault,
  ContentDefault,
  Paragraph,
  Title,
} from "../../styles";
import { SectionText } from "./styles";

export default function NotFound() {
  const handleOnFinished = () => {
    const externalUrl = "https://www.copart.com.br/";
    window.location.href = externalUrl;
  };

  return (
    <ContainerDefault>
      <Header />
      <ContentDefault>
        <Title>Não encontramos nada por aqui 😔</Title>

        <SectionText>
          <div className="sectionIllustration">
            <img src={NotFoundImage} alt="Illustração de error 404" />
          </div>

          <Paragraph>
            "Se o problema persistir, por favor, entre em contato com nosso time
            de atendimento"
          </Paragraph>
        </SectionText>
      </ContentDefault>

      <Button
        size="lg"
        onClick={handleOnFinished}
        style={{ marginTop: "14px" }}
      >
        Ir para website Copart
      </Button>
    </ContainerDefault>
  );
}
