import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook } from "react-icons/fa";
import './Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8083/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.mensaje) {
        setSuccessMessage('Autenticación exitosa');
        setError(null);
        navigate('/');
      } else {
        setError('Credenciales incorrectas');
        setSuccessMessage('');
      }
    } catch (error) {
      setError('Error al iniciar sesión');
      setSuccessMessage('');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
    <div className="login-box" style={{ width: '500px', padding: '20px' }}> {/* Aumentar el tamaño del recuadro */}
      <div className="login-header">
      <FaBook size={30} /> 
          <h2>No Estas Registrado?</h2>
    <a href="/Registro" className="create-account-link">Crea Una Cuenta!</a>
        </div>
        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              minLength="6"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
    </div>
  );
};

export default LoginForm;