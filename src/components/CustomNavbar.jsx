import React from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import { useAuth } from '../context/UserContext.jsx';

const CustomNavbar = () => {
    const { total } = useCart();
    const { token, logout } = useAuth();

    const totalFormateado = total.toLocaleString('es-CL');
 
    return (
        <Navbar expand="lg" variant="dark" className="bg-danger shadow-sm sticky-top"> 
            <Container>

                <Navbar.Brand as={Link} to="/">Pizzería Mamma Mia!</Navbar.Brand> 
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
                    </Nav>

                    <Nav className="mx-auto">
                        {token ? (
                            <>
                                <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
                                <Button 
                                    variant="link" 
                                    className="nav-link border-0 text-start" 
                                    onClick={logout}
                                    style={{ textDecoration: 'none' }}
                                >
                                    🔒 Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>
                            </>
                        )}
                    </Nav>

                    <Nav className="ms-auto"> 
                        <Nav.Item> 
                            <Link to="/cart" style={{ textDecoration: 'none' }}> 
                                <Button variant="outline-warning" className="fw-bold">
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