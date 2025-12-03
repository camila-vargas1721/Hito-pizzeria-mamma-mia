import React from 'react';
import { Container, Row, Col, Alert, Spinner} from 'react-bootstrap';
import Header from '../components/Header.jsx';
import CardPizza from '../components/CardPizza.jsx';
import { usePizzas } from '../context/PizzaContext.jsx';
import '../Home.css';

const Home = () => {
    const { pizzas, loading, error } = usePizzas();

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
             <CardPizza pizza={pizza}/>
            </Col>
))}
           </Row>
          </Container>
       </Container>
    );
};

export default Home;