import { render, useRender } from "redity";
import { Indexs, Keys } from "../constants";
import { state_form } from "../storage";


export const useForm = () => {
    useRender(Keys.FORM);

    const handleReset = ()=>{
        // setValues(initialState);
        state_form.init();
        render(Keys.FORM,Indexs.BODY_FORM)
    }


    const handleInputChange = (e) =>{
        state_form({ ...state_form(), [e.target.name]: e.target.value }) 
        render(Keys.FORM,Indexs.BODY_FORM)
            // setValues({
            //     ...values,
            //     [e.target.name]: e.target.value
            // })
    }
    return {handleInputChange,handleReset};
}
