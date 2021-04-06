import React from 'react'
import { useRender } from 'redity';
import useValueStep from '../hooks/useValueStep'

export default function Header() {
    //No colocar dos hooks en el mismo lugar a menos que sean de distintos identidficadores (los keys e indices son unicos)
    const {step} = useValueStep();
    console.log(step);
  
    return (
        <h1>Step {step} of 3</h1>
    )
}
