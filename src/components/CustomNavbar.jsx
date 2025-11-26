import React from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
const total = 25000;
const token = false;

const totalFormateado = total.toLocaleString('es-CL');
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Pizzería Mamma Mia!</Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100">

                        <Nav.Link as={Link} to="/">Home</Nav.Link> 
                        <Nav.Link as={Link} to="/profile">Profile 🔒</Nav.Link>
                        {token ? (
                            <>
                                <Nav.Link onClick={() => alert('Cerrando sesión (estático)')}>Logout 🔒</Nav.Link> 
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">Login 🔒</Nav.Link>
                                <Nav.Link as={Link} to="/register">Register 🔒</Nav.Link>
                            </>
                        )}
                        <Nav.Item className="ms-auto"> 
                        <Link to="/cart"> 
                            <Button variant="outline-warning" className="ms-3 d-flex align-items-center">
                                🛒 Total: $ {totalFormateado}
                            </Button>
                        </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;