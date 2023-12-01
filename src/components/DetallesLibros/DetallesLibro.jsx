import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cargador from "../Cargador/Cargador";
import coverImg from "../../images/cover_not_found.jpg";
import "./DetallesLibro.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const DetallesLibro = () => {
  const { id } = useParams();
  const [cargando, setCargando] = useState(false);
  const [libro, setLibro] = useState(null);
  const navegar = useNavigate();

  useEffect(() => {
    setCargando(true);
    async function obtenerDetallesLibro() {
      try {
        const respuesta = await fetch(`${URL}${id}.json`);
        const datos = await respuesta.json();
        console.log(datos);

        if (datos) {
          const { description, title, covers, subject_places, subject_times, subjects } = datos;
          const nuevoLibro = {
            descripcion: description ? description.value : "No se encontró descripción",
            titulo: title,
            coverImg: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            lugares_tematicos: subject_places ? subject_places.join(", ") : "No se encontraron lugares temáticos",
            tiempos: subject_times ? subject_times.join(", ") : "No se encontraron tiempos",
            categorias: subjects ? subjects.join(", ") : "No se encontraron categorías"
          };
          setLibro(nuevoLibro);
        } else {
          setLibro(null);
        }
        setCargando(false);
      } catch (error) {
        console.log(error);
        setCargando(false);
      }
    }
    obtenerDetallesLibro();
  }, [id]);

  if (cargando) return <Cargador />;

  return (
    <section className='book-details'>
      <div className='contenedor'>
        <button type='button' className='back-btn' onClick={() => navegar("/libro")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>REGRESAR</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={libro?.coverImg} alt="imagen de portada" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item titulo'>
              <span className='fw-6 fs-24'>{libro?.titulo}</span>
            </div>
            <div className='book-details-item description'>
              <span>{libro?.descripcion}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Lugares Temáticos: </span>
              <span className='text-italic'>{libro?.lugares_tematicos}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Tiempos: </span>
              <span className='text-italic'>{libro?.tiempos}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Categoría: </span>
              <span>{libro?.categorias}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetallesLibro;
