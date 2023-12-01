import React from 'react';
import { Link } from 'react-router-dom';
import "./ListaLibro.css";

const Libro = (Libros) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {Libros.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/${Libros.id}`} {...Libros}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{Libros.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Autor: </span>
          <span>{Libros.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Ediciones Totales: </span>
          <span>{Libros.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>Año Primera Publicacion: </span>
          <span>{Libros.first_publish_year}</span>
        </div>
      </div>
    </div>
  )
}

export default Libro