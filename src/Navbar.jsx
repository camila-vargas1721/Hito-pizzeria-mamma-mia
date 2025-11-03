import React from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const CustomNavbar = () => {
const total = 25000;
const token = false;

const totalFormateado = total.toLocaleString('es-CL');
      return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100">
                        
                        <Nav.Link href="#home">Home</Nav.Link>
                        
                        {token ? (
                            <>
                                <Nav.Link href="#profile">Profile 🔒</Nav.Link>
                                <Nav.Link href="#logout">Logout 🔒</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="#login">Login 🔒</Nav.Link>
                                <Nav.Link href="#register">Register 🔒</Nav.Link>
                            </>
                        )}
                        <Nav.Item className="ms-auto"> 
                        <Button variant="outline-warning" className="ms-3 d-flex align-items-center">
                            Total: $ {totalFormateado}
                        </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
);
};

export default CustomNavbar;