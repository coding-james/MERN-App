import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CaveResults({ ID, cave, region }) {

    return (
                
        <Card>
            <Card.Body>
                <Card.Title>{`${cave} (${region})`}</Card.Title>
                <Link to={`/cave/${ID}`}><Button variant="primary">More Details</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default CaveResults;