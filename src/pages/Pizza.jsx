import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import "../Pizza.css";

const API_URL = 'http://localhost:5000/api/pizzas/p001';

const Pizza = () => {
    const [pizza, setPizza] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPizza = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setPizza(data);
        } catch (err) {
            console.error("Error fetching pizza:", err);
            setError("No se pudo cargar la información de la pizza.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPizza();
    }, []);

    if (loading) return <Container className="my-5"><p>Cargando detalles de la pizza...</p></Container>;
    if (error) return <Container className="my-5"><p className="text-danger">{error}</p></Container>;
    if (!pizza) return <Container className="my-5"><p>No se encontraron datos de la pizza.</p></Container>;

    const priceFormateado = pizza.price ? pizza.price.toLocaleString('es-CL') : 'N/A';
    const ingredientesJuntos = pizza.ingredients ? pizza.ingredients.join(', ') : 'Sin ingredientes';

    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <img 
                        src={pizza.img} 
                        alt={pizza.name} 
                        className="img-fluid pizza-detail-img" 
                    />
                </Col>

                <Col md={6}>
                    <h1 className="text-capitalize">{pizza.name}</h1>
                    <p className="text-muted small">ID: {pizza.id}</p>

                    <hr />

                    <h3>Descripción</h3>
                    <p>{pizza.desc || 'Descripción no disponible.'}</p>

                    <div className="mb-3">
                        <h4 className="mb-2">
                            <Badge bg="success">Ingredientes:</Badge>
                        </h4>
                        <p className="lead">{ingredientesJuntos}.</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <h2>Precio: ${priceFormateado}</h2>
                        <Button 
                            variant="danger" 
                            size="lg" 
                            onClick={() => alert('Función de carrito no implementada en este hito.')}
                        >
                            Añadir 🛒
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Pizza;