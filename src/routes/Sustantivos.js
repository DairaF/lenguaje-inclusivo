import React, { useState, useCallback, useEffect } from 'react';
import '../App.css';
import Herramienta from '../components/Herramienta';
import sustantivos from '../data/sustantivos.json';
import MenuCaja from '../components/MenuCaja';
function Sustantivos() {

  return (
    <div className='container' >
      <div className='row'>      
        <MenuCaja activo="Sustantivos"/>
      </div>
      <div>
      <h1 className='mt-25 py-5 text-center col-9 mx-auto'>Sustantivos</h1>
      {
        sustantivos.map((herramienta, index)=>{
          return (
            <Herramienta
              key = {index}
              id={herramienta.camelCase}
              titulo = {herramienta.titulo}
              texto= {herramienta.texto}
              ejemplo1={herramienta.ejemplo1} 
              masInfo={herramienta.masInfo}
              ejemplo2={herramienta.ejemplo2}      
            />
          )
        }
        )
      }

      </div>
      <p>Ahora que viste todas las herramientas, descubrí tu personalidad gramatical</p>
      <a href='quiz'> Ver </a>
      <p>Y acá te dejamos un texto académico super completo.</p>
      <a href='texto-expositivo'> Ver </a>
    </div>
  );
}

export default Sustantivos;
