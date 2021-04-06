import React from 'react'
import { useForm } from '../../hooks/useForm'
import useValues from '../../hooks/useValueForm';
import { BodyStep, FormControl, InputStep, LabelStep } from './Steps.style';


export default function Step1() {
    const {handleInputChange} = useForm();
    const {name, lastname} = useValues();
    return (
        <BodyStep>
            <FormControl>
                <LabelStep>Name</LabelStep>
                <InputStep
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={handleInputChange}
                  value={name}
                  autoComplete="off"
                />
            </FormControl>
                <FormControl>
                    <LabelStep>Lastname</LabelStep>
                    <InputStep
                      type="text"
                      className="form-control"
                      name="lastname"
                      onChange={handleInputChange}
                      value={lastname}
                      autoComplete="off"
                    />
                </FormControl>
        </BodyStep>
    )
}
