import React, { useState, useEffect } from "react";
import axios from 'axios';
import InputForm from "./InputForm";
import { ReactDOM } from "react";

const CreateCave = () => {
    // const [formValues, setFormValues] = useState({caveName:"", region:"", gridRef:"", water:"", equipment:[""]})

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    // const onSubmit = caveObject => {
    //     axios.post("http://localhost:4000/createCave", caveObject)
    //     .then(res => {
    //         if (res.status === 200)
    //             alert("Cave successfully created")
    //         else
    //             Promise.reject()
    //     })
    //     .catch(err =>("Cave not created"))
    // }

    return (
        <>
            {/* <InputForm initialValues={formValues}
                onSubmit={onSubmit}
                enableReinitialize>
                Create Cave
                </InputForm> */}
            
            <form onSubmit={handleSubmit}>
                <label>Cave Name:
                    <input
                        type="text"
                        name="caveName"
                        value={inputs.caveName || ""}
                        onChange={handleChange}
                    />
                </label>
                <select value={inputs.region || ""} onChange={handleChange}>
                    <option value="Mendips">Mendips</option>
                    <option value="South Wales">South Wales</option>
                    <option value="Dartmoor">Dartmoor</option>
                    <option value="Yorkshire">Yorkshire</option>
                </select>
                <label>Grid Reference:
                    <input
                        type="text"
                        name="gridRef"
                        value={inputs.gridRef || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CreateCave />);

export default CreateCave;