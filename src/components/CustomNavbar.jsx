import React from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import { useAuth } from '../context/UserContext.jsx';

const CustomNavbar = () => {
 const { total } = useCart();
 const { token, logout, login } = useAuth();

 const totalFormateado = total.toLocaleString('es-CL');
 
    return (
        <Navbar expand="lg" variant="dark" className="bg-danger"> 
          <Container>
                <Navbar.Brand as={Link} to="/">Pizzería Mamma Mia!</Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav>

                    {token ? (

                        <Nav>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            <Nav.Link as={Button} onClick={logout}>Logout</Nav.Link>
                        </Nav>
                    ) : (
                        <Nav>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Button} onClick={login}>Login (Prueba)</Nav.Link>
                        </Nav>
                    )}

                    <Nav className="ms-auto"> 
                        <Nav.Item> 
                            <Link to="/cart"> 
                                <Button variant="outline-warning" className="d-flex align-items-center">
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
