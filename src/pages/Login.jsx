import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';


const TEST_EMAIL = 'prueba@prueba.com';
const TEST_PASSWORD = 'password123';

const Login= () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validate = () => {
        let formErrors = {};
        let isValid = true;

        if (!formData.email.trim()) {
            formErrors.email = 'El email es obligatorio.';
            isValid = false;
        }
        if (!formData.password) {
            formErrors.password = 'La contraseña es obligatoria.';
            isValid = false;
        }

        if (formData.password && formData.password.length < 6) {
            formErrors.password = 'El password debe tener al menos 6 caracteres.';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            if (formData.email === TEST_EMAIL && formData.password === TEST_PASSWORD) {
                alert('Authentication successful!'); 
                console.log('Login exitoso. Usuario:', formData.email);
            } else {
                alert('Error: Credenciales inválidas.');
            }
        } else {
            alert('Error en el Login. Por favor, revisa los campos.');
        }
    };

    return (
        <Container className="my-5" style={{ maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;