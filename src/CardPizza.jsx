import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import './CardPizza.css';

const CardPizza = ({ img, name, price, ingredients }) => {
const priceFormateado = price ? price.toLocaleString('es-CL') : 'N/A';
const ingredientesJuntos = ingredients ? ingredients.join(', ') : 'Sin ingredientes';
const ingredientesListaConIcono = `🍕 ${ingredientesJuntos}`;

return (
        <Card className="card-pizza"> 
            <Card.Img variant="top" src={img} className="card-pizza-img" />
            
            <Card.Body>
                <Card.Title className="text-capitalize">{name}</Card.Title>
                
                <p className="mb-1">
                    <Badge bg="secondary">Ingredientes:</Badge>
                </p>
                <p className="text-muted small">
                    {ingredientesListaConIcono}.
                </p>

                <h5 className="mt-3">Precio: $ {priceFormateado}</h5>

                <div className="d-flex justify-content-between mt-3">
                    <Button variant="outline-primary" size="sm">Ver más 👀</Button>
                    <Button variant="dark" size="sm">Añadir 🛒</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardPizza;