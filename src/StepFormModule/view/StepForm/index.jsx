import React from "react";
import Button from "../../../component/Button";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import useStep from '../../hooks/useStep'
import useValueStep from "../../hooks/useValueStep";
import useValues from "../../hooks/useValueForm";
import useSubmit from "../../hooks/useSubmit";
import { FormContainer, Form } from "../stepForm.style";
import { ButtonsContainer } from "./Steps.style";

export default function StepForm() {
  
    const {step} = useValueStep();
    const {handleNextStep, handlePreviousStep} = useStep();
    const {stateForm} = useValues();
    // const {handleSubmit} = useSubmit();
  return (
    <FormContainer>
      <Form
        className="col-4 form"
        onSubmit={(e) =>
          {
            e.preventDefault();
            console.log(stateForm())
          }
        }
      >
         <h1>Step {step} of 3</h1>
        {step === 1 ? <Step1 /> : null}
        {step === 2 ? <Step2 /> : null}
        {step === 3 ? <Step3 /> : null}

        {step === 3 ? (
          <Button bgColor="danger" color="white" rounded="full" type="submit" /* onClick= {(e) => handleSubmit(e,{name,email,password})} */>Submit</Button>
        ) : null}
        <ButtonsContainer>
          <Button
            bgColor="primary"
            color="white"
            rounded="full"
            type="submit"
            onClick={handlePreviousStep}
            isDisabled={step < 2}
          >
            Back
          </Button>
          <Button
            bgColor="secondary"
            color="white"
            rounded="full"
            type="submit"
            onClick={handleNextStep}
            isDisabled={step > 2}
          >
            Next
          </Button>
        </ButtonsContainer>
      </Form>

    </FormContainer>
  );
}
