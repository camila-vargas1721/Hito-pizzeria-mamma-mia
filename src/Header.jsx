import React from "react";
import { Container } from "react-bootstrap";
import './Header.css';


const Header = () => {
    return (

      <header className="py-5 text-white text-center header-pizza header-border-style">
        <Container>
            <h1>¡Pizzería Mamma Mia!</h1>
            <p>¡Disfruta de las mejores pizzas que podrás probar!</p>
            <br />
        </Container>
      </header>
      
    );
};

export default Header;