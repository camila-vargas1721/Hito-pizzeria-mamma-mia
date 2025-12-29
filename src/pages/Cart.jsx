import React from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/UserContext.jsx';
import '../Cart.css';

const formatPrice = (price) => price.toLocaleString('es-CL');

const Cart = () => {
  const { cart, incrementItem, decrementItem } = useCart();
  
  const { token } = useAuth();

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + (item.price * item.count), 0);
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
                      <Button variant="dark" size="sm" onClick={() => decrementItem(item.id)} className="me-2">
                        -
                      </Button>
                      <span className="fw-bold">{item.count}</span>
                      <Button variant="dark" size="sm" onClick={() => incrementItem(item.id)} className="ms-2">
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
                <Button 
              variant={token ? "success" : "secondary"} 
              size="lg" 
              className="px-5"
              disabled={!token}
              onClick={() => alert("🛒 ¡Pedido recibido! Estamos preparando tu pizza.")} >
            {token ? "Confirmar Pago" : "Inicia sesión para pagar"}
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