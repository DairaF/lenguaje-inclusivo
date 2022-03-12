import React, { useState, useCallback, useEffect } from 'react';
 
import Herramienta from '../components/Herramienta';
import sustantivos from '../data/sustantivos.json';
import MenuCaja from '../components/MenuCaja';
import ReactGa from 'react-ga'


function Sustantivos() {

  useEffect(()=>{
    ReactGa.initialize('G-BQYF4G0HMV')
    ReactGa.pageview(window.location.pathname + window.location.search)
    },[])
    
  return (
    <div className='container' >
      <div className='row'>      
        <MenuCaja activo="Sustantivos"/>
      </div>
      <div>
      <h1 className='mt-25 py-5 text-center col-9 mx-auto lila '>Sustantivos</h1>
      <div className='bg-lila banner col-11 mx-auto'>
        <img src={require('../assets/img/illus/sustantivos.png')} />
      </div>
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

      <div className='row bg-lila justify-content-center'>
        <div className='blanco-borde-negro col-8 mt-5 p-3'>
          <a className='negro' href='/quiz'><b>Ahora que viste todas las herramientas, descubrí tu personalidad gramatical</b></a>
        </div>
        <div className='blanco-borde-negro col-8 p-3 my-5'>
          <a className='negro' href='/texto-expositivo'><b>Y acá te dejamos un texto académico super completo.</b></a>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Sustantivos;
