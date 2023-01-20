import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Working with checkbox
// https://dev.to/mhmmdysf/handling-multiple-checkboxes-in-react-3efe
// Look at https://appdividend.com/2022/03/12/how-to-save-multiple-checkboxes-values-in-react/
// https://www.reddit.com/r/reactjs/comments/mitwvs/how_to_get_selected_values_of_multiple_checkboxes/

const CreateCave = ({ getCaves }) => {

    const [cave, setCave] = useState("");
    const [region, setRegion] = useState("Mendips");
    const [gridRef, setGridRef] = useState("");
    const [water, setWater] = useState("Wet");
    const [equipmentList, setEquipmentList] = [{ id: 1, item: 'Ladder', checked: false }, { id: 2, item: 'Rope 20m', checked: false }, { id: 3, item: 'Rope 30m', checked: false }]
    const [equipment, setEquipment] = useState([]);

    // this.state = {
    //     equipment:
    //         [
    //             { id: 1, name: 'Ladder', checked: false },
    //             { id: 2, name: 'Rope 20m', checked: false },
    //             { id: 3, name: 'Rope 30m', checked: false }
    //         ],
    //     selected: [],
    // }

    const CaveDetails = async (e) => {
        console.log(cave, region, gridRef, water, equipment);
        e.preventDefault();
        axios.post("http://localhost:4000/createCave", {
            cave,
            region,
            gridRef,
            water,
            equipment
        })
            .then((res) => {
                if (res.status === 201) {
                    alert("Cave Created");
                    window.location.replace("/allCaves");
                } else Promise.reject();
            })
            .catch((err) => alert("Unable to create"));

        // try {
        //     const res = await axios.post("http://localhost:4000/createCave", {
        //         cave,
        //         region,
        //         gridRef,
        //         water,
        //         equipment
        //     });
        //     getCaves();
        //     console.log("Response:", res);
        // } catch (err) {

        // }
    };


    // const equipCheck = (value) => {
    //     //if value already included the splice out, otherwise add in.
    //     if (equipment.includes(value)) {
    //         let index = equipment.indexOf(value);
    //         setEquipment = equipment.slice(index, 1);
    //     } else {
    //         setEquipment(equipment => [...equipment, value])
    //     }
    // }

    return (
        <div>
            <Form onSubmit={CaveDetails}>
                Add a Cave:
                <Form.Group className="mb-3">
                    <Form.Label> Cave name: </Form.Label>
                    <input type="text" className="form-control" id="cave" onChange={(e) => setCave(e.target.value)} />
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
                    <Form.Label> Water? </Form.Label><br />
                    {/* JAMES - Would be good to sort fix Radio Button react.tips/radio-buttons-in-react=16 */}
                    {/* <Form.Check inline name="water" type="radio" id="wet" label="Wet Cave" value="wet" onChange={(e) => setWater(e.target.value)} />
                    <Form.Check inline name="water" type="radio" id="dry" label="Dry Cave" value="dry" onChange={(e) => setWater(e.target.value)} /> */}
                    
                    <Form.Select value={water} onChange={(e) => setWater(e.target.value)}>
                        <option value="Wet">Wet Cave</option>
                        <option value="Dry">Dry Cave</option>
                    </Form.Select>
                </Form.Group>

                {/* JAMES - Would be good to sort fix CheckBoxes/Array react.tips/checkboxes-in-react=16 */}
                {/* <Form.Group className="mb-3">
                    <Form.Label> Equipment: </Form.Label>
                    <Form.Check name="equip1" type="checkbox" id="equip1" label="Ladder" value="Ladder" onChange={(e) => equipCheck(e.target.value)} />
                    <Form.Check name="equip2" type="checkbox" id="equip2" label="Rope 20m" value="Rope20m" onChange={(e) => equipCheck(e.target.value)} />
                    <Form.Check name="equip3" type="checkbox" id="equip3" label="Rope 30m" value="Rope30m" onChange={(e) => equipCheck(e.target.value)} />

                    {
                        this.state.equipment.map(item => {
                            return (
                                <Form.Check
                                    key={item.id}
                                    type="checkbox"
                                    label={item.name}
                                    onChange={() => this.onChange(item.id)}
                                    selected={this.state.selected.includes(item.id)}>
                                </Form.Check>
                            )
                        })
                    }

                </Form.Group> */}

                <Button variant="primary" type="submit">Add Cave</Button>
            </Form >
        </div >
    );
};

export default CreateCave;