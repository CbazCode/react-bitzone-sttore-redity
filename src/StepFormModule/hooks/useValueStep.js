import { useRender } from 'redity'
import { Indexs, Keys } from '../constants'
import { state_step } from '../storage'

export default function useValueStep() {
    useRender(Keys.FORM, Indexs.HEADER_FORM);

    return {
        step: state_step().step
    }
}
