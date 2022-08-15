import React from 'react';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const App = () => {
  return (
    <section className='container-fluid p-5' id='contenedor'>
      <Titulo></Titulo>
      <Formulario></Formulario>
    </section>
  );
};

export default App;