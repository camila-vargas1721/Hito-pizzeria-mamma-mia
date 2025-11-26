import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Profile = () => {
    const userEmail = "usuario_estatico@pizzeria.com"; 

    const handleLogout = () => {
        alert('Función de cerrar sesión (Logout) ejecutada.');
    };

    return (
        <Container className="my-5" style={{ maxWidth: '400px' }}>
            <Card className="p-4 shadow">
                <h2 className="text-center mb-4">🔒 Mi Perfil</h2>
                <p className="text-center mb-4">
                    **Email del Usuario:** <br />
                    <span className="fw-bold text-primary">{userEmail}</span>
                </p>
                <Button variant="danger" onClick={handleLogout} className="w-100">
                    Cerrar Sesión
                </Button>
            </Card>
        </Container>
    );
};

export default Profile;