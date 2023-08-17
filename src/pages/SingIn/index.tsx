import { ChangeEvent, useState, useCallback, FormEvent } from "react";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { maskCpfPartial, maskCpfComplete } from "../../utils/masks";

import { useAuth } from "../../hooks/AuthContext";
import Button from "../../components/Button";
import Header from "../../components/Header";

import { Paragraph, Title } from "../../styles";
import { Container, Content, SectionText } from "./styles";

export default function SingIn() {
  const { signIn } = useAuth();
  const location = useLocation();
  const { id: cpfParams } = useParams();
  const code = location.state.code;

  const [formData, setFormData] = useState({
    cpf: "",
  });

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    maskCpfPartial(event);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleOnSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const cpfRegex = /^(\d{3}\.){2}\d{3}-\d{2}$/;
      const newFormData = maskCpfComplete(cpfParams) + formData.cpf;
      const isValidCpf = cpfRegex.test(newFormData);
      const cpfValid = cpfParams + formData.cpf.replace("-", "");

      try {
        if (!isValidCpf) {
          throw new Error("FAVOR DIGITE UM CPF VALIDO");
        }

        await signIn({
          cpf: cpfValid,
          code: code,
        });

        toast.success("CPF VALIDO COM SUCESSO");
        window.location.pathname = "/information";
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    },
    [formData, cpfParams, signIn, code]
  );

  return (
    <Container>
      <Header isLogo />
      <Content>
        <Title>
          Bem vindo a verificação rapida <span>Copart</span>
        </Title>

        <SectionText>
          <Paragraph>
            Vamos agora ajudá-lo a habilitar seu cadastro de forma rápida e
            simples. Mas antes de prosseguirmos, por favor siga as recomendações
            a baixo.
          </Paragraph>

          <Paragraph>Favor confirme o CPF abaixo 👇</Paragraph>
        </SectionText>

        <form onSubmit={handleOnSubmit}>
          <label className="fieldInput" htmlFor="cpf">
            CPF:
            <div className={`field ${isFocused ? "focused" : ""}`}>
              <span className="textCpf">
                {maskCpfComplete(cpfParams ?? "")}
              </span>
              <input
                id="cpf"
                maxLength={6}
                type="text"
                name="cpf"
                placeholder="XXX-XX"
                role="presentation"
                inputMode="numeric"
                autoComplete="off"
                onChange={handleOnChange}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
              />
            </div>
          </label>
          <Button type="submit" full size="lg">
            ENVIAR
          </Button>
        </form>
      </Content>
    </Container>
  );
}
