import Button from "../../components/Button";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/AuthContext";

import {
  ContainerDefault,
  ContentDefault,
  Paragraph,
  Title,
} from "../../styles";
import { SectionText } from "./styles";

export default function Finished() {
  const { signOut } = useAuth();

  const handleOnFinished = () => {
    signOut();
    const externalUrl = "https://www.copart.com.br/";
    window.location.href = externalUrl;
  };

  return (
    <ContainerDefault>
      <Header isLogo />
      <ContentDefault>
        <Title>Cadastro concluido com sucesso! ✅</Title>

        <SectionText>
          <Paragraph>
            Se tudo estiver okay, as fotos legíveis e transmissão de dados
            funcionando, nosso sistema automatizado habilitará seu cadastro em
            alguns minutos. O tempo pode ser maior caso seja necessário a
            revisão dos dados.
          </Paragraph>

          <Paragraph>
            Em instantes você receberá mais informações. Se sua conta for
            aprovada, enviaremos um e-mail de confirmação para você.
          </Paragraph>
        </SectionText>
      </ContentDefault>

      <Button size="lg" full onClick={handleOnFinished}>
        Bem-vindo á Copart do Brasil
      </Button>
    </ContainerDefault>
  );
}
