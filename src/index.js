import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Inicio from './pages/Inicio/Inicio';
import SobreNosotros from './pages/Sobre Nosotros/SobreNosotros';
import ListaLibro from './components/ListaLibro/ListaLibro';
import DetallesLibros from './components/DetallesLibros/DetallesLibro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Inicio/>}>
          <Route path = "SobreNosotros" element = {<SobreNosotros/>} />
          <Route path = "libro" element = {<ListaLibro />} />
          <Route path = "/book/:id" element = {<DetallesLibros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

