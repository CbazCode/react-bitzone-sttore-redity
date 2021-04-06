import { render, useRender } from 'redity'
import { Indexs, Keys } from '../constants'
import { state_step } from '../storage';

export default function useStep() {
    useRender(Keys.FORM);
    const handleNextStep = () => {
        state_step({...state_step(), step: state_step().step + 1});
        render(Keys.FORM,Indexs.HEADER_FORM);
    }
    
    const handlePreviousStep = () => {
        state_step({...state_step(), step: state_step().step - 1});
        render(Keys.FORM, Indexs.HEADER_FORM);
    }

    return {handleNextStep, handlePreviousStep}
}
