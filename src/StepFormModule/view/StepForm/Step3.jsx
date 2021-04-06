import React from 'react'
import useValues from '../../hooks/useValueForm';
import { useForm } from '../../hooks/useForm'
import { BodyStep, FormControl, InputStep, LabelStep, LabelStepStep } from './Steps.style';

export default function Step3() {
    const {handleInputChange} = useForm();
    const {phone, address} = useValues();
   
    return (
        <BodyStep>
            <FormControl>
                <LabelStep>Phone</LabelStep>
                <InputStep
                    type="number"
                    className="form-control"
                    name="phone"
                    onChange={handleInputChange}
                    value={phone}
                    autoComplete="off"
                />

            </FormControl>
            <FormControl>
                <LabelStep>Address</LabelStep>
                <InputStep
                    type="text"
                    className="form-control"
                    name="address"
                    onChange={handleInputChange}
                    value={address}
                    autoComplete="off"
                />
            </FormControl>
        </BodyStep>
    )
}
