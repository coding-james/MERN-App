import React, {  useState, useEffect} from "react";
import axios from "axios";
import InputForm from "./InputForm";

const UpdateCave = (props) => {
    const [formValues, setFromValues] = useState({
        cave:"",
        region:"",
        gridRef:"",
        water:"",
        equipment:[""],
    });

    const onSubmit = (caveObject) => {
        axios.put("http://localhost:4000/updateCave" + props.match.params.id, caveObject)
        .then((res) => {
            if (res.status === 200) {
                alert("Cave Updated");
                props.history.push("/allCaves");
            } else Promise.reject();
        })
        .catch((err) => alert("update failed"));
    };

    useEffect(() => {
        axios.get("http://localhost:4000/updateCave" + props.match.params.id)
        .then((res) => {
            const {cave, region, gridRef, water, equipment} = res.data;
            setFromValues({cave, region, gridRef, water, equipment});
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <InputForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
            Update Cave
        </InputForm>
    );
};

export default UpdateCave;