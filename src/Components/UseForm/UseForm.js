import React, {useState} from "react";


export default function UseForm(initialValues) {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const handleInputChange = e => {

        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }
    return {
        values,
        setValues,
        handleInputChange,
        errors,
        setErrors

    }


};

