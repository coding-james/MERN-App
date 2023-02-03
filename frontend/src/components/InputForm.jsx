import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const InputForm = () => {

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="caveName">
                    <Form.Label>Cave Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter cave name" />
                </Form.Group>

                <Form.Group className="mb-3" controlID="region">
                    <Form.Label>Region</Form.Label>
                    <Form.Select>
                        <option value="Mendips">Mendips</option>
                        <option value="South Wales">South Wales</option>
                        <option value="Dartmoor">Dartmoor</option>
                        <option value="Yorkshire">Yorkshire</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="gridRef">
                    <Form.Label>Grid Reference</Form.Label>
                    <Form.Control type="text" placeholder="SN 123 456" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="length">
                    <Form.Label>Length</Form.Label>
                    <Form.Control type="number" placeholder="1" min="0" max="10000"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="depth">
                    <Form.Label>Depth</Form.Label>
                    <Form.Control type="number" placeholder="1" min="0" max="10000"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="wetCave">
                    <Form.Label>Wet Cave?</Form.Label>
                    <br></br>
                    <Form.Check inline name="radioWater" type="radio" id="wet" label="Wet Cave" selected/>
                    <Form.Check inline name="radioWater" type="radio" id="dry" label="Dry Cave" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="equipment">
                    <Form.Label>Equipment: </Form.Label>
                    <br></br>
                    <Form.Check inline name="equipment" id="Ladder" label="Ladder" />
                    <Form.Check inline name="equipment" id="Rope 20m" label="Rope 20m" />
                    <Form.Check inline name="equipment" id="Rope 30m" label="Rope 30m" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit form</Button>
            </Form>
        </>
    )
}

export default InputForm;