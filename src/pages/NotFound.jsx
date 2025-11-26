import React from 'react';
import { Container, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container className="my-5 text-center">
            <Alert variant="danger">
                <Alert.Heading>¡Error 404 - Página no encontrada!</Alert.Heading>
                <p>
                    Lo sentimos, la ruta que estás buscando no existe en nuestra pizzería.
                </p>
                <hr />
                <p className="mb-0">
                    Vuelve a un lugar seguro.
                </p>
            </Alert>
            <Link to="/"> 
                <Button variant="primary" size="lg">Ir a Home 🏠</Button>
            </Link>
        </Container>
    );
};

export default NotFound;