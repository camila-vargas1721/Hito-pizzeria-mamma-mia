import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useAuth } from '../context/UserContext.jsx';

const Profile = () => {
  const { email, logout } = useAuth(); 

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
      <Card className="p-4 shadow-lg text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body>
          <div className="mb-4">
            <span style={{ fontSize: '4rem' }}>👤</span>
          </div>
          <Card.Title as="h2" className="mb-3">Perfil de Usuario</Card.Title>
          <Card.Text className="text-muted mb-4">
            Email conectado: <br />
            <strong className="text-dark">{email}</strong>
          </Card.Text>

          <Button 
            variant="danger" 
            onClick={logout} 
            className="w-100 fw-bold"
          >
            Cerrar Sesión
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;