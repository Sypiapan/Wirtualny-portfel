import React, {useState} from "react";
import * as Dictionary from "../../Dictionary/Dictionary";


export default function UseForm(initialValues) {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [list, setList] = useState(Dictionary.getCurriencyCollection());
    const {asset} = initialValues
    const handleInputChange = e => {

        const {name, value} = e.target

        setValues({
            ...values,
            [name]: value,


        })

        console.log(values);
        console.log(asset);

        const listNumber = {asset};
        switch (listNumber) {
            case "nieruchomości":
                setList(prevState => Dictionary.getRealestateCollection());

                break;
            case "akcje":
                setList(prevState => Dictionary.getSharesCollection());

                break;
        }

    }
    return {
        values,
        setValues,
        handleInputChange,
        errors,
        setErrors,
        list,
        setList

    }


};

