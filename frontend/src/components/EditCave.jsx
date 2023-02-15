import React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditCave() {

    const [id, setId] = useState("");
    const [cave, setCave] = useState("");
    const [region, setRegion] = useState("");
    const [gridRef, setGridRef] = useState("");
    const [length, setLength] = useState("");
    const [depth, setDepth] = useState("");
    const [water, setWater] = useState("");
    const [equipmentList, setEquipmentList] = [{ id: 1, item: 'Ladder', checked: false }, { id: 2, item: 'Rope 20m', checked: false }, { id: 3, item: 'Rope 30m', checked: false }]
    const [equipment, setEquipment] = useState([]);

    const params = useParams();
    console.log("Param:", params);
    const [caveData, setCaveData] = useState({
        cave: "",
        region: "",
        gridRef: "",
        length: "",
        depth: "",
        water: "",
        equipment: [""],
    });

    useEffect(() => {
        setCave(caveData.cave);
        setRegion(caveData.region);
        setGridRef(caveData.gridRef);
        setLength(caveData.length);
        setDepth(caveData.depth);
        setWater(caveData.water);
        setEquipment(caveData.equipment);
      }, [caveData]);

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
        console.log(id, cave, region, gridRef, length, depth, water, equipment);
        e.preventDefault();
        
        axios.patch(`http://localhost:4000/updateCave/${params.id}`, {
            cave,
            region,
            gridRef,
            length,
            depth,
            water,
            equipment
        })
            .then((res) => {
                if (res.status === 202) {
                    alert("Cave Updated");
                    // console.log(id, cave, region, gridRef, length, depth, water, equipment);
                    window.location.replace("/allCaves");
                } else Promise.reject();
            })
            .catch((err) => alert("Unable to create"));
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
                    <Form.Label> Length: </Form.Label>
                    <input type="number" className="form-control" id="length" min="0" max="10000" defaultValue={caveData.length} onChange={(e) => setLength(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label> Depth: </Form.Label>
                    <input type="number" className="form-control" id="depth" min="0" max="10000" defaultValue={caveData.depth} onChange={(e) => setDepth(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label> Water? </Form.Label><br />
                    <Form.Select value={water} defaultValue={caveData.water} onChange={(e) => setWater(e.target.value)}>
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

                <Button variant="success" type="submit">Update</Button><br /><br />
                <Button variant="danger" type="button" onClick={deleteCave}>Delete</Button>
            </Form >
        </div >
    )
}

export default EditCave;