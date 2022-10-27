import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CaveResults({ ID, caveName, region }) {

    return (
                
        <Card>
            <Card.Body>
                <Card.Title>{`${caveName} (${region})`}</Card.Title>
                <Link to={`/cave/${ID}`}><Button variant="primary">More Details</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default CaveResults;