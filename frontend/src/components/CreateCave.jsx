import React, { useState, useEffect } from "react";
import axios from 'axios';
import InputForm from "./InputForm";

const CreateCave = () => {
    const [formValues, setFormValues] = useState({caveName:"", region:"", gridRef:"", water:"", equipment:[""]})

    const onSubmit = caveObject => {
        axios.post("http://localhost:4000/createCave", caveObject)
        .then(res => {
            if (res.status === 200)
                alert("Cave successfully created")
            else
                Promise.reject()
        })
        .catch(err =>("Cave not created"))
    }

    return(
        <>
            <InputForm initialValues={formValues}
                onSubmit={onSubmit}
                enableReinitialize>
                Create Cave
                </InputForm>
        </>
    )
}

export default CreateCave;