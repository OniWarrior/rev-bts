/*
 * Author: Stephen Aranda
 * File  : useValidation.js
 * Desc  : custom hook to validate form components
 * 
 */

import * as yup from 'yup';
import { useState } from 'react';

const useFormValidation = (schema, initialValuesObj, initialErrorsObj) => {

    // Set the initial values for the data and errors
    const [data, setData] = useState(initialValuesObj)
    const [errors, setErrors] = useState(initialErrorsObj)

    // validate as the input is changing in a text box
    const onInputChange = (e) => {

        const { name, value } = e.target
        yup.reach(schema, name)
            .validate(value)
            .then(() => {
                setErrors({ ...errors, [name]: '' })
            })
            .catch((err) => {
                setErrors({ ...errors, [name]: err.errors[0] })
            })

        setData({ ...data, [name]: value })


    }

    // return the data errors and the event handler function.
    return [data, errors, onInputChange]

}


export default useFormValidation;


