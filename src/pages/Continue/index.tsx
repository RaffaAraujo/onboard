import { ChangeEvent, useState, useCallback, FormEvent } from "react";
import { toast } from "react-toastify";

import Button from "../../components/Button";
import Header from "../../components/Header";

import { maskCpf, maskCpfComplete } from "../../utils/masks";
import { Paragraph, Title } from "../../styles";
import { Container, Content, SectionText } from "./styles";
import { useAuth } from "../../hooks/AuthContext";

export default function Continue() {
  const { signInGeneric } = useAuth();
  const [formData, setFormData] = useState({
    cpf: "",
  });

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    maskCpf(event);
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
      const newFormData = maskCpfComplete("cpfParams") + formData.cpf;
      const isValidCpf = cpfRegex.test(newFormData);
      const cpfClear = formData.cpf.replace(/\./g, "").replace("-", "");

      try {
        if (!isValidCpf) {
          throw new Error("FAVOR DIGITE UM CPF VALIDO");
        }

        await signInGeneric({
          cpf: cpfClear,
        });

        toast.success("CPF VALIDO COM SUCESSO");
        window.location.pathname = "/information";
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    },
    [formData, signInGeneric]
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
              <input
                id="cpf"
                maxLength={12}
                type="text"
                name="cpf"
                placeholder="999.999.999-99"
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
