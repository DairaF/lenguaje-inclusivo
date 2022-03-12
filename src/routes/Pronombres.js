import React, { useState, useCallback, useEffect } from 'react';
 
import Herramienta from '../components/Herramienta';
import pronombres from '../data/pronombres.json';
import MenuCaja from '../components/MenuCaja';
import ReactGa from 'react-ga'

function Pronombres() {
    useEffect(()=>{
      ReactGa.initialize('G-BQYF4G0HMV')
      ReactGa.pageview(window.location.pathname + window.location.search)
      },[])
      
  return (
    <div className='container'>
      <MenuCaja activo="Pronombres"/>
      <h1>Pronombres</h1>
      {
        pronombres.map((herramienta, index)=>{
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

export default Pronombres;
