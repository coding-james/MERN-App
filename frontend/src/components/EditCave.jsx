import React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditCave() {

    const [id, setId] = useState("");
    const [cave, setCave] = useState("");
    const [region, setRegion] = useState("Mendips");
    const [gridRef, setGridRef] = useState("");
    const [water, setWater] = useState("wet");
    const [equipmentList, setEquipmentList] = [{ id: 1, item: 'Ladder', checked: false }, { id: 2, item: 'Rope 20m', checked: false }, { id: 3, item: 'Rope 30m', checked: false }]
    const [equipment, setEquipment] = useState([]);

    const params = useParams();
    console.log("Param:", params);
    const [caveData, setCaveData] = useState({
        cave: "",
        region: "",
        gridRef: "",
        water: "",
        equipment: [""],
    });

    useEffect(() => {
        const GetCave = () => {
            axios.get("http://localhost:4000/getCave/" + params.id)
                .then(response => {
                    console.log(response.data);
                    setCaveData(response.data);
                });
        }
        GetCave();
    }, [params]);

    //change to update
    const EditCaveDetails = async (e) => {
        console.log(id, cave, region, gridRef, water, equipment);
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:4000/updateCave/${params.id}`, {
                cave,
                region,
                gridRef,
                water,
                equipment
            });
            EditCaveDetails();
            console.log("Response:", res);
        } catch (err) {

        }
    };

    //delete record and take to All Caves page
    const deleteCave = () => {
        axios.delete(`http://localhost:4000/removeCave/${params.id}`)
            .then((res) => {
                if (res.status === 200) {
                    alert("Cave Deleted");
                    window.location.replace("/allCaves");
                } else Promise.reject();
            })
            .catch((err) => alert("Unable to delete"));
    };

    return (
        <div>
            <Form onSubmit={EditCaveDetails}>
                Edit Cave:
                <Form.Group className="mb-3">
                    <Form.Label> Cave name: </Form.Label>
                    <input type="text" className="form-control" id="cave" defaultValue={caveData.cave} onChange={(e) => setCave(e.target.value)} />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label> Region: </Form.Label>
                    <Form.Select value={region} defaultValue={caveData.region} onChange={(e) => setRegion(e.target.value)}>
                        <option value="Mendips">Mendips</option>
                        <option value="South Wales">South Wales</option>
                        <option value="Dartmoor">Dartmoor</option>
                        <option value="Yorkshire">Yorkshire</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label> Grid Reference: </Form.Label>
                    <input type="text" className="form-control" id="gridRef" defaultValue={caveData.gridRef} onChange={(e) => setGridRef(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label> Water? </Form.Label><br />
                    <Form.Check inline name="water" type="radio" id="wet" label="Wet Cave" value="wet" defaultValue={caveData.water} onChange={(e) => setWater(e.target.value)} />
                    <Form.Check inline name="water" type="radio" id="dry" label="Dry Cave" value="dry" defaultValue={caveData.water} onChange={(e) => setWater(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label> Equipment: </Form.Label>
                    {/* <Form.Check name="equip1" type="checkbox" id="equip1" label="Ladder" value="Ladder" onChange={(e) => equipCheck(e.target.value)} />
                    <Form.Check name="equip2" type="checkbox" id="equip2" label="Rope 20m" value="Rope20m" onChange={(e) => equipCheck(e.target.value)} />
                    <Form.Check name="equip3" type="checkbox" id="equip3" label="Rope 30m" value="Rope30m" onChange={(e) => equipCheck(e.target.value)} /> */}

                    {/* {
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
                    } */}

                </Form.Group>

                <Button variant="success" type="submit">Update</Button><br /><br />
                <Button variant="danger" type="button" onClick={deleteCave}>Delete</Button>
            </Form >
        </div >
    )
}

export default EditCave;