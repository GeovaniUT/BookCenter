import React, { useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import './Buscador.css';

const FormularioBusqueda = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const textoBusqueda = useRef('');
  const navegar = useNavigate();

  useEffect(() => textoBusqueda.current.focus(), []);

  const manejarEnvio = (e) => {
    e.preventDefault();
    let tempTerminoBusqueda = textoBusqueda.current.value.trim();
    if (tempTerminoBusqueda.replace(/[^\w\s]/gi, '').length === 0) {
      setSearchTerm('the lost world');
      setResultTitle('Por favor, ingresa algo ...');
    } else {
      setSearchTerm(textoBusqueda.current.value);
    }

    navegar('/libro');
  };

  return (
    <div className='formulario-busqueda'>
      <div className='container'>
        <div className='contenido-formulario-busqueda'>
          <form className='formulario-busqueda' onSubmit={manejarEnvio}>
            <div className='elemento-formulario-busqueda flex flex-sb bg-white'>
              <input
                type='text'
                className='control-formulario'
                placeholder='The Lost World ...'
                ref={textoBusqueda}
              />
              <button type='submit' className='flex flex-c' onClick={manejarEnvio}>
                <FaSearch className='texto-morado' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioBusqueda;
