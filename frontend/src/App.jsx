// import './App.css';
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom';
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Home from './components/Home';
// import AllCaves from './components/AllCaves';
import AllCaves from './components/AllCavesFix';
import CreateCave from './components/CreateCave';
import UpdateCave from './components/UpdateCave';
import EditCave from './components/EditCave';


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
                  <Link to="/" className="nav-link">Home</Link>
                </Nav.Item>
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
                  <Route path="/" element={<Home />} />
                  <Route path="/createCave" element={<CreateCave />} />
                  <Route path="/updateCave/:id" element={<UpdateCave />} />
                  <Route path="/allCaves" element={<AllCaves />} />
                  <Route path="/editCave/:id" element={<EditCave />} />
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
