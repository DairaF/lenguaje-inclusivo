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
    <div className='bg-crema'>
      <div className='container' >
        <div className='row justify-content-center'>    
          <div className='col-12 col-md-3'>  
            <MenuCaja activo="Sustantivos"/>
          </div>
        <div className='col-12 col-md-9'>
          <h2 className='mt-10 mt-25 mt-md-15 py-5 text-center col-9 mx-auto lila '>Pronombres</h2>
          <div className='bg-lila banner col-8 col-md-11 mx-auto mb-10'>
            <img src={require('../assets/img/illus/pronombres.png')} />
          </div>
          {
            pronombres.map((herramienta, index)=>{
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
        </div>
      </div>
      <div className='row justify-content-center justify-content-md-between p-5'>
        <div className='blanco-borde-negro col-8 col-md-3 redirect'>
          <a className='negro' href='/quiz'><b>Ahora que viste todas las herramientas, descubrí tu personalidad gramatical</b></a>
          <a  href='/quiz' className='col-1 mx-auto flechaEnBorde'><img alt="." className="logo" src={require("../assets/img/flechaBgLila.png")}/></a>
        </div>
        <div className='blanco-borde-negro col-8 col-md-3 redirect'>
          <a className='negro' href='/caja-de-herramientas'><b>Chequear texto q redirige a herramienta</b></a>
        </div>
        <div className='blanco-borde-negro col-8 col-md-3 redirect'>
          <a className='negro' href='/texto-expositivo'><b>¿Qué sentido tiene el lenguaje <span className='playfair'>inclusivo?</span></b></a>
        </div>
      </div>
    </div>
  );
}

export default Pronombres;
