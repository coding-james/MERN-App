import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateCave = ({ getCaves }) => {

    const [cave, setCave] = useState("");
    const [region, setRegion] = useState("Mendips");
    const [gridRef, setGridRef] = useState("");
    const [water, setWater] = useState("wet");
    const [equipment, setEquipment] = useState([]);

    // const CaveDetails = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const res = await axios.post("http://localhost:1296/createCave", {
    //             cave,
    //             region,
    //             gridRef,
    //             water,
    //             equipment
    //         });
    //         getCaves();
    //         console.log("Response:", res);
    //     } catch (err) {

    //     }
    // };

    const CaveDetails = (e) => {
        e.preventDefault();
        console.log(cave, region, gridRef, water, equipment);
    }

    const equipCheck = (value) => {
        //if value already included the splice out, otherwise add in.
        if (equipment.includes(value)) {
            let index = equipment.indexOf(value);
            setEquipment = equipment.slice(index, 1);
        } else {
            setEquipment(equipment => [...equipment, value])
        }
    }

    return (
        <div>
            <Form onSubmit={CaveDetails}>
                Add a Cave:
                <Form.Group className="mb-3">
                    <Form.Label> Cave name: </Form.Label>
                    <input type="text" className="form-control" id="caveName" onChange={(e) => setCave(e.target.value)} />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label> Region: </Form.Label>
                    <Form.Select value={region} onChange={(e) => setRegion(e.target.value)}>
                        <option value="Mendips">Mendips</option>
                        <option value="South Wales">South Wales</option>
                        <option value="Dartmoor">Dartmoor</option>
                        <option value="Yorkshire">Yorkshire</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label> Grid Reference: </Form.Label>
                    <input type="text" className="form-control" id="gridRef" onChange={(e) => setGridRef(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label> Water? </Form.Label><br/>
                    <Form.Check inline name="water" type="radio" id="wet" label="Wet Cave" value="wet" onChange={(e) => setWater(e.target.value)}/>
                    <Form.Check inline name="water" type="radio" id="dry" label="Dry Cave" value="dry" onChange={(e) => setWater(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label> Equipment: </Form.Label>
                    <Form.Check name="equip1" type="checkbox" id="equip1" label="Ladder" value="Ladder" onChange={(e) => equipCheck(e.target.value)}/>
                    <Form.Check name="equip2" type="checkbox" id="equip2" label="Rope 20m" value="Rope20m" onChange={(e) => equipCheck(e.target.value)}/>
                    <Form.Check name="equip3" type="checkbox" id="equip3" label="Rope 30m" value="Rope30m" onChange={(e) => equipCheck(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">Add Cave</Button>
            </Form >
        </div >
    );
};

export default CreateCave;