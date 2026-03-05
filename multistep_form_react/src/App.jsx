import "./App.css";
import { useState } from "react";
import { useForm } from "./hooks/useForm";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

import IdentificationForm from "./components/IdentificationForm";
import ReviewForm from "./components/ReviewForm";
import SendForm from "./components/SendForm";
import Steps from "./components/Steps";

const dataTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(dataTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <IdentificationForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <SendForm data={data} updateFieldHandler={updateFieldHandler} />,
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useForm(formComponents);

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Deixe sua avaliação</h1>

          <p>
            Ficamos felizes com a sua compra, utilize o formulário abaixo para
            avaliar o produto
          </p>
        </div>

        <div className="form-container">
          <Steps currentStep={currentStep} />

          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div>{currentComponent}</div>

            <div className="actions">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )}

              {!isLastStep ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button type="button">
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
