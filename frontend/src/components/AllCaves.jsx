import { useEffect, useState } from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import CaveDetail from "./CaveDetail";


const AllCaves = () => {
    const [caves, setCaves] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/getAllCaves")
        .then(response => {
            console.log(response.data);
            setCaves(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const DataTable = () => {
        return caves.map((caves, i) => {
            return <CaveDetail
            key={caves._id}
            cave={caves.cave}
            region={caves.region}
            gridRef={caves.gridRef}
            length={caves.length}
            depth={caves.depth}
            water={caves.water}
            equipment={caves.equipment}
            id={caves._id}
            />;
        });
    };

    return (
        <div className="table-wrapper">
            <Table>
                <thead>
                    <tr>
                        <th>Cave</th>
                        <th>Region</th>
                        <th>Grid Reference</th>
                        <th>Length</th>
                        <th>Depth</th>
                        <th>Water?</th>
                        <th>Equipment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};

export default AllCaves;