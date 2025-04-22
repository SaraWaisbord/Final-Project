
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { About } from '../screens/About';
import { Products } from '../screens/Products';
import { Home } from '../screens/Home';
export const  NavigateComponent=()=>{
    return(
        <>
    <Router>
      <Navbar bg="dark" variant="dark" className="tech-navbar">
        <Container>
          <Navbar.Brand className="brand-logo">TechFlow</Navbar.Brand>
          <Nav className="me-auto nav-links">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle id="dropdown-basic" variant="dark">
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/ספורט">1485</Dropdown.Item>
                <Dropdown.Item as={Link} to="/טיולים">88</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/ספורט' element={<Home />}/>
        <Route path='/טיולים"'  element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router> 
    </>


);
}
