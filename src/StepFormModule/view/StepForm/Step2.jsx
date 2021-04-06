import React from 'react'
import useValues from '../../hooks/useValueForm';
import { useForm } from '../../hooks/useForm'
import { BodyStep, FormControl, InputStep, LabelStep } from './Steps.style';

export default function Step2() {
    const {handleInputChange} = useForm();
    const {email, password} = useValues();
    return (
      <BodyStep>
           <FormControl>
              <LabelStep>Email</LabelStep>
              <InputStep
                type="email"
                className="form-control"
                name="email"
                onChange={handleInputChange}
                value={email}
                autoComplete="off"
              />
           </FormControl>
           <FormControl>
              <LabelStep>Password</LabelStep>
              <InputStep
                type="password"
                className="form-control"
                name="password"
                onChange={handleInputChange}
                value={password}
                autoComplete="off"
              />
           </FormControl>
      </BodyStep>
    )
}