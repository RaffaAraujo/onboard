import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../../services/api";

import Button from "../../components/Button";
import CopyButton from "../../components/CopyButton";
import Header from "../../components/Header";

import { ContentDefault, Paragraph, Title } from "../../styles";
import { Container, SectionText } from "./styles";

export default function Wellcome() {
  const navigate = useNavigate();
  const { code } = useParams();
  const [partialIdenty, setPartialIdenty] = useState("");

  useEffect(() => {
    async function getCode() {
      try {
        const response = await api
          .get(`Onboarding/GetCodeInformation?code=${code}`)
          .then((res) => res.data);

        if (response.resultCode === 1) {
          navigate("/erro", {
            state: { title: "Atenção", message: response.resultMessage },
          });
          throw new Error(response.resultMessage);
        }

        setPartialIdenty(response.partialIdentity);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    }
    getCode();
  }, [navigate, code]);

  const handleOnNavigateSign = () => {
    const isPartial = !!partialIdenty;
    if (isPartial) {
      navigate(`/login/${partialIdenty}`, { state: { code } });
    }
  };

  if (partialIdenty === "") {
    return <></>;
  }

  return (
    <Container>
      <Header isLogo />
      <ContentDefault>
        <Title>
          Obrigado por realizar seu cadastro na <span>Copart</span>
        </Title>

        <SectionText>
          <Paragraph>
            Agora vamos ajudá-lo a habilitar seu cadastro de forma rápida e
            simples. Antes de prosseguirmos, por favor, siga as recomendações
            abaixo.
          </Paragraph>

          <Paragraph>
            Para que o processo funcione adequadamente, recomendamos que utilize
            versões atualizadas do navegador Chrome em dispositivos Android ou
            Safari em dispositivos IOS (iPhone.)
          </Paragraph>

          <CopyButton>Clique aqui para copiar o link</CopyButton>
        </SectionText>
      </ContentDefault>

      <Button
        size="lg"
        full
        onClick={handleOnNavigateSign}
        disabled={!partialIdenty}
      >
        Iniciar
      </Button>
    </Container>
  );
}
