import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const CaveDetail = (props) => {
    const { _id, cave, region, gridRef, wetCave, equipment } = props.obj;

    const deleteCave = () => {
        axios.delete("http://localhost:4000/deleteCave" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Cave Deleted");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Unable to delete"));
    };

    return (
        <tr>
            <td>{cave}</td>
            <td>{region}</td>
            <td>{gridRef}</td>
            <td>{wetCave}</td>
            <td>{equipment}</td>
            <td>
                <Link className="edit-link" to={"/updateCave/" + _id}>Edit</Link>
                <Button onClick={deleteCave}>Delete</Button>
            </td>
        </tr>
    );
};

export default CaveDetail;