import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function CaveDetail({ id, cave, region, gridRef, length, depth, water, equipment }) {
    
    return (
        <tr>
            <td>{cave}</td>
            <td>{region}</td>
            <td>{gridRef}</td>
            <td>{length}</td>
            <td>{depth}</td>
            <td>{water}</td>
            <td>{equipment}</td>
            <td>
                <Link to={`/editCave/${id}`}><Button>Edit / Delete</Button></Link>
            </td>
        </tr>
    );
};

export default CaveDetail;