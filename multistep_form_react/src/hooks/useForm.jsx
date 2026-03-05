import { useState } from "react";

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);
  const currentComponent = steps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep + 1 === steps.length;

  function changeStep(index, e) {
    if (e) e.preventDefault();

    if (index < 0 || index > steps.length - 1) return;

    setCurrentStep(index);
  }

  return {
    currentStep,
    currentComponent,
    changeStep,
    isFirstStep,
    isLastStep,
  };
}
