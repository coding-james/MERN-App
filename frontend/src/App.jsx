// import './App.css';
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom';
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import AllCaves from './Components/AllCaves';
import CreateCave from './Components/CreateCave';
import UpdateCave from './Components/UpdateCave'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar className="navbar navbar-dark bg-dark">
            <Container>
              <Navbar.Brand>
                Cave Registry
              </Navbar.Brand>

              <Nav>
                <Nav.Item>
                  <Link to="/createCave" className="nav-link">Add a Cave</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/allCaves" className="nav-link">All Caves</Link>
                </Nav.Item>
              </Nav>

            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/createCave" element={<CreateCave />} />
                  <Route path="/updateCave/:id" element={<UpdateCave />} />
                  <Route path="/allCaves" element={<AllCaves />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router >
  );
}

export default App;
