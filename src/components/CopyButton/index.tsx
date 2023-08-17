import { ReactNode } from "react";
import { toast } from "react-toastify";

import { Container, ContentText, ButtonCopyText } from "./styles";

interface CopyButtonProps {
  children: ReactNode;
}

export default function CopyButton({ children }: CopyButtonProps) {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        toast.success("Link copiado com sucesso");
      })
      .catch(() => {
        toast.error("Erro ao copiar o texto");
      });
  };

  return (
    <Container>
      <ContentText>{children}</ContentText>
      <ButtonCopyText onClick={copyToClipboard}>Copiar</ButtonCopyText>
    </Container>
  );
}
