import React, { useState } from 'react';
import './Registro.css'; 
import { FaBook } from "react-icons/fa";
const Registro = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
  });
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9001/registrarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setRegistroExitoso(true);
        setError('');
       
      } else {
        
        setError('El registro fue exitoso');
      }
    } catch (error) {
      setError('Ocurrió un error al registrar.');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
    <div className="login-box" style={{ width: '500px', padding: '20px' }}> {/* Aumentar el tamaño del recuadro */}
      <div className="login-header">
        <FaBook size={30} /> 
          <h2>REGISTRO!!</h2>
        </div>
        {registroExitoso && (
          <div className="success-message">
            Tu Registro Fue Exitoso
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="full_name"
              value={formData.user}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              minLength="6"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            REGISTRATE
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
        <p className="create-account-link">
          Ya Tienes Una Cuenta?{' '}
          <a href="/Login" className="text-blue-500 hover:text-blue-700 font-semibold">
            Acceso
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registro;
