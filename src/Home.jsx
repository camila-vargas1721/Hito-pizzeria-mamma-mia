import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import CardPizza from './CardPizza';
import './Home.css';

import NapolitanaImg from './assets/img/pizza-napolitana.JPG';
import EspanolaImg from './assets/img/pizza-española.JPG';
import PepperoniImg from './assets/img/pizza-pepperoni.JPG';


const Home = () => {
    const pizzas = [
        {
            name: "Pizza Napolitana",
            price: 5950,
            ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
            img: NapolitanaImg
        },
        {
            name: "Pizza Española",
            price: 6950,
            ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
            img: EspanolaImg
        },
        {
            name: "Pizza Pepperoni",
            price: 6950,
            ingredients: ["mozzarella", "pepperoni", "orégano"],
            img: PepperoniImg
        }
    ];

    return (
        <Container fluid>
            <Header />
            <Container className="my-5 p-4" home-container-style>
               <Row className="justify-content-center">
                  {pizzas.map((pizza, index) => (
                    <Col key={index} xs={12} md={6} lg={4} className="d-flex justify-content-center">
                       <CardPizza
                         img={pizza.img}
                         name={pizza.name}
                         price={pizza.price}
                         ingredients={pizza.ingredients}
                       />
                    </Col>
           ))}
                </Row>
            </Container>
        </Container>
    );
};

export default Home;