import { useRender } from 'redity'
import { Indexs, Keys } from '../constants'
import { state_form } from '../storage'

export default function useValues() {
    useRender(Keys.FORM, Indexs.BODY_FORM);
    return {
        name: state_form().name,
        email: state_form().email,
        password: state_form().password,
        stateForm: state_form
    }
}
