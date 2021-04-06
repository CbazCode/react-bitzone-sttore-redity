import React from 'react'
import { render } from 'redity';
import useValues from './useValueForm';

export default function useSubmit() {
    const {stateForm} = useValues();
    const handleSubmit = (e, obj) => {
        e.preventDefault();
        console.log(stateForm)
    }
    return {
        handleSubmit
    }
}
