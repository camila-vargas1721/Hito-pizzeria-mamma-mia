import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Register= () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
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
        if (!formData.confirmPassword) {
            formErrors.confirmPassword = 'Debes confirmar la contraseña.';
            isValid = false;
        }

        if (formData.password && formData.password.length < 6) {
            formErrors.password = 'El password debe tener al menos 6 caracteres.';
            isValid = false;
        }

        if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = 'El password y la confirmación deben ser iguales.';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert('¡Registro exitoso! Authentication successful!');
            console.log('Datos de registro:', formData);
        } else {
            alert('Error en el registro. Por favor, revisa los campos.');
        }
    };

    return (
        <Container className="my-5" style={{ maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Registro</h2>
            <Form onSubmit={handleSubmit}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingresa tu email"
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
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirma tu contraseña"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                    Registrar
                </Button>
            </Form>
        </Container>
    );
};

export default Register;