import { FormEvent, useState } from "react";

export function useSteps<T>(steps: Array<T>) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i: number, event?: FormEvent<HTMLInputElement>) {
    if (event) event.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
  };
}
