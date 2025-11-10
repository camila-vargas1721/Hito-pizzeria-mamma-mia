import React, { useState } from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import { pizzaCart } from './pizzas.js'; 
import './Cart.css';

const formatPrice = (price) => price.toLocaleString('es-CL');

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + (item.price * item.count), 0);
  };

  const handleIncrement = (id) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart(prevCart => 
      prevCart.reduce((acc, item) => {
        if (item.id === id) {
          const newCount = item.count - 1;
          if (newCount > 0) {
            acc.push({ ...item, count: newCount });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  return (
    <Container className="my-5" style={{ maxWidth: '700px' }}>
      <Card className="p-4 shadow">
        <h2 className="mb-4 border-bottom pb-2">🛒 Detalles del pedido</h2>
        
        {cart.length === 0 ? (
          <p className="text-center text-muted">El carrito está vacío.</p>
        ) : (
          <>
            {cart.map((item) => (
              <Row key={item.id} className="align-items-center mb-3 pb-3 border-bottom">
                <Col xs={2}>
                  <Image src={item.img} thumbnail className="cart-item-img" /> 
                </Col>
                <Col xs={4} className="text-capitalize">
                  <p className="mb-0 fw-bold">{item.name}</p>
                </Col>
                
                <Col xs={6}>
                  <Row className="align-items-center">
                    <Col xs={6} className="text-end">
                      <span className="fw-bold text-dark">${formatPrice(item.price * item.count)}</span>
                      <span className="text-muted small d-block">($ {formatPrice(item.price)} c/u)</span>
                    </Col>
                    <Col xs={6} className="d-flex align-items-center justify-content-end">
                      <Button variant="dark" size="sm" onClick={() => handleDecrement(item.id)} className="me-2">
                        -
                      </Button>
                      <span className="fw-bold">{item.count}</span>
                      <Button variant="dark" size="sm" onClick={() => handleIncrement(item.id)} className="ms-2">
                        +
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}

            <Row className="mt-3">
              <Col xs={12} className="text-end">
                <h3>Total: <span className="text-secondary">${formatPrice(calculateTotal())}</span></h3>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col xs={12} className="text-end">
                <Button variant="warning" size="lg" className="px-5">
                  Pagar
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Card>
    </Container>
  );
};

export default Cart;