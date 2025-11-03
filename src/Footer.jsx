import React from "react";
import { Container } from 'react-bootstrap'
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center p-5 mt-5 mb-5 footer-style">
            <Container>
                <p className="mb-0">
                    &copy; 2021 - Pizzería Mamma Mia! - Todos los derechos reservados
                </p>
            </Container>
        </footer>
);

};

export default Footer;