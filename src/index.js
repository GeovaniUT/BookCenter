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
import LoginForm from './components/Login/Login';
import Registro from './components/Registro/Registro';
import Slider from './components/slider/slider';
import Category from './components/books/category';
import Books from './components/books/books';
import Videos from './components/videos/Recomendaciones';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
      <Route path = "Registro" element = {<Registro />} />
      <Route path = "Login" element = {<LoginForm />} />
        <Route path = "/" element = {<Inicio/>}>
          <Route path = "SobreNosotros" element = {<SobreNosotros/>} />
          <Route path='/category' element={<Category/>}></Route>
          <Route path='Book/:idBook' element={<Books/>}></Route>
          <Route path = "libro" element = {<ListaLibro />} />
          <Route path = "bookOne/:id" element = {<DetallesLibros />} />
          <Route path='Videos' element={<Videos/>}></Route>
    
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>);



