import { Container } from "./styles";

interface StepsProps {
  currentStep: number;
}

export default function Steps({ currentStep }: StepsProps) {
  return (
    <Container>
      <div className="step-progress">
        <strong className={`active ${currentStep >= 1 ? "done" : ""}`}>
          Dados
        </strong>

        <strong
          className={`${currentStep >= 1 ? "active" : ""} ${
            currentStep >= 2 ? "done" : ""
          }`}
        >
          Docs
        </strong>

        <strong
          className={`${currentStep >= 2 ? "active" : ""} ${
            currentStep >= 3 ? "done" : ""
          }`}
        >
          Perfil
        </strong>
      </div>
    </Container>
  );
}
