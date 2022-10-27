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
        return caves.map((res, i) => {
            return <CaveDetail obj={res} key={i} />;
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