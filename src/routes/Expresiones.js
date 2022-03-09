import React, { useState, useCallback, useEffect } from 'react';
import '../App.css';
import Herramienta from '../components/Herramienta';
import expresiones from '../data/expresiones.json';
import MenuCaja from '../components/MenuCaja';
function Expresiones() {

  return (
    <div >
      <MenuCaja activo="Expresiones"/>
      <h1>Expresiones</h1>
      {
        expresiones.map((herramienta, index)=>{
          return (
            <Herramienta
              key = {index}
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
      <p>Ahora que viste todas las herramientas, descubrí tu personalidad gramatical</p>
      <a href='quiz'> Ver </a>
      <p>Y acá te dejamos un texto académico super completo.</p>
      <a href='texto-expositivo'> Ver </a>
    </div>
  );
}

export default Expresiones;
