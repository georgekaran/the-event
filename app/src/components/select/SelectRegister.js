import React from 'react';
import Select from '@material-ui/core/Select';
import { useFormContext } from "react-hook-form"

export default (props) => {
    const { register } = useFormContext();
    return (
        <Select { ...props } innerRef={register} />
    )
}