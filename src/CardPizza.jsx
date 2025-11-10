import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import './CardPizza.css';

const CardPizza = ({ id, img, name, price, ingredients }) => {
const priceFormateado = price ? price.toLocaleString('es-CL') : 'N/A';

return (
        <Card className="card-pizza shadow-sm">
            <Card.Img variant="top" src={img} className="card-pizza-img" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/300x180?text=Pizza+No+Image" }} /> 
            
            <Card.Body>
                <Card.Title className="text-capitalize border-bottom pb-2 mb-3">{name}</Card.Title>
                
                <p className="mb-2">
                    <Badge bg="success">Ingredientes:</Badge>
                </p>

                <ul className="list-unstyled small text-muted ms-3">
                    {ingredients && ingredients.map((ingrediente, index) => (
                        <li key={index} className="text-capitalize">
                            🍕 {ingrediente}
                        </li>
                    ))}
                </ul>

                <h4 className="mt-3 text-dark border-top pt-3">Precio: ${priceFormateado}</h4>

                <div className="d-flex justify-content-between mt-3">
                    <Button variant="outline-dark" size="sm">Ver más 👀</Button>
                    <Button variant="dark" size="sm">Añadir 🛒</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardPizza;