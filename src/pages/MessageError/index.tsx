import Button from "../../components/Button";
import Header from "../../components/Header";

import {
  ContainerDefault,
  ContentDefault,
  Paragraph,
  Title,
} from "../../styles";
import { SectionText } from "./styles";
import { useLocation } from "react-router-dom";

export default function MessageError() {
  const location = useLocation();
  const handleOnFinished = () => {
    const externalUrl = "https://www.copart.com.br/";
    window.location.href = externalUrl;
  };

  return (
    <ContainerDefault>
      <Header />
      <ContentDefault>
        <Title>Opss 😔</Title>

        <SectionText>
          <Paragraph>
            {location.state.message ??
              "Se o problema persistir, por favor, entre em contato com nosso time de atendimento"}
          </Paragraph>
        </SectionText>
      </ContentDefault>

      <Button size="lg" full onClick={handleOnFinished}>
        Ir para website Copart
      </Button>
    </ContainerDefault>
  );
}
