import { useAuth } from "../../../hooks/AuthContext";
import { formatCpf } from "../../../utils/masks";
import {
  Container,
  TextInfoDescription,
  TextInfoTitle,
  ViewInfo,
} from "./styles";

export default function InfoData() {
  const { user } = useAuth();
  return (
    <Container>
      <ViewInfo>
        <TextInfoTitle>Nome</TextInfoTitle>
        <TextInfoDescription>{user.nome}</TextInfoDescription>
      </ViewInfo>
      <ViewInfo>
        <TextInfoTitle>CPF</TextInfoTitle>
        <TextInfoDescription>{formatCpf(user.cpf)}</TextInfoDescription>
      </ViewInfo>
      <ViewInfo>
        <TextInfoTitle>E-mail</TextInfoTitle>
        <TextInfoDescription>{user.email}</TextInfoDescription>
      </ViewInfo>
      <ViewInfo>
        <TextInfoTitle>Telefone</TextInfoTitle>
        <TextInfoDescription>{user.telefone}</TextInfoDescription>
      </ViewInfo>
    </Container>
  );
}
