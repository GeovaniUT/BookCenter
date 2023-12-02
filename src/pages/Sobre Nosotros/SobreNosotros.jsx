import React from 'react';
import './SobreNosotros.css'; 
// import libraryImage from 'C:\Users\geova\OneDrive\Documentos\clone-books\Libros\src\images\Biblioteca-montserrat.jpg'

const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      {/* <div className="libraryImage">
        <img src={libraryImage} alt="Biblioteca" />
      </div> */}
      <div className="informationContainer">
        <h2>Nuestra Historia</h2>
        <p>
          Book Center comenzó como un sueño compartido por nuestros fundadores: Marvin Adan, Giovani Guzman, Edwin Avila y Sergio Canul. Nos unimos con la visión de romper las barreras del idioma y hacer que la información sea accesible para todos.
        </p>
        <h2>Nuestro Equipo</h2>
        <ul>
          <li>Marvin Adan - Co-Fundador</li>
          <li>Giovani Guzman - Co-Fundador</li>
          <li>Edwin Avila - Co-Fundador</li>
          <li>Sergio Canul - Co-Fundador</li>
        </ul>
        <h2>Misión</h2>
        <p>Proporcionar acceso universal y fácil a una amplia gama de recursos de conocimiento y aprendizaje digital.</p>
        <h2>Visión</h2>
        <p>Ser reconocida como una plataforma líder en la provisión de recursos educativos digitales.</p>
        <h2>Valores</h2>
        <ul>
          <li>Accesibilidad</li>
          <li>Innovación</li>
          <li>Integridad</li>
          {/* ...más valores */}
        </ul>
        <h2>Código de Ética</h2>
        <ul>
          <li>Respeto a la Propiedad Intelectual</li>
          <li>Privacidad</li>
          <li>Confidencialidad</li>
          {/* ...más códigos de ética */}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;