import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert, Spinner} from 'react-bootstrap';
import Header from '../components/Header.jsx';
import CardPizza from '../components/CardPizza.jsx';
// import { pizzas } from './pizzas'; //
import '../Home.css';

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pizzas'); 
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setPizzas(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPizzas();
    }, []); 

    if (loading) {
        return (
            <Container className="text-center my-5">
                <Spinner animation="border" variant="warning" />
                <p>Cargando pizzas...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="my-5">
                <Alert variant="danger">
                    Error al cargar las pizzas: {error}. Asegúrate de que el **backend esté levantado** en el puerto 5000.
                </Alert>
            </Container>
        );
    }

    return (
        <Container fluid>
            <Header />
            <Container className="my-5 p-4" home-container-style>
               <Row className="justify-content-center">
                  {pizzas.map((pizza) => (
                    <Col key={pizza.id} xs={12} md={6} lg={4} className="d-flex justify-content-center">
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