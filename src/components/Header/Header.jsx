import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../Buscador/Buscador";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Encuentra Tu Libro !!</h2><br />
                <p className='header-text fs-18 fw-3'>¡Bienvenidos a nuestra librería en línea!
Aquí encontrarás una amplia selección de libros para todas las edades y gustos.
Nuestro objetivo es ofrecerte una experiencia de compra sencilla y agradable.
Si tienes alguna pregunta, no dudes en contactarnos.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header