import React, { useState } from 'react';
import { useAuth } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/");
  };

  return (
    <div className="container my-5" style={{ maxWidth: '400px' }}>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <h3>Login</h3>
        <input 
          type="email" 
          placeholder="Email" 
          className="form-control mb-2" 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="form-control mb-2" 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;