import React, { useState, useCallback, useEffect } from 'react';
 
import Herramienta from '../components/Herramienta';
import expresiones from '../data/expresiones.json';
import MenuCaja from '../components/MenuCaja';
import ReactGa from 'react-ga'
import ProgressBar from '../components/ProgressBar';

function Expresiones() {
   
  useEffect(()=>{
    ReactGa.initialize('G-BQYF4G0HMV')
    ReactGa.pageview(window.location.pathname + window.location.search)
    },[])
    
  return (
    <div className='bg-crema'>
      <div className='container' >
        <div className='row justify-content-center'>  
          <div className='col-12 col-md-3'>  
            <MenuCaja activo="Expresiones"/>
          </div>
          <div className='col-12 col-md-9'>
            <ProgressBar/>  
            <h2 className='mt-10 mt-25 mt-md-15 py-5 text-center col-9 mx-auto lila '>Expresiones</h2>
            <div className='bg-lila banner col-8 col-md-11 mx-auto mb-10'>
              <img src={require('../assets/img/illus/expresiones.png')} />
            </div>
            {
              expresiones.map((herramienta, index)=>{
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
      <div className='redirects'>     
        <div className='row justify-content-center p-5'>
          <div className=' mx-5 blanco-borde-negro col-8 col-md-3 redirect'>
          <div className='row'>
            <a className='negro' href='/quiz'><b>Ahora que viste todas las herramientas, ponete a prueba y descubrí tu propio lenguaje inclusivo</b></a>
          </div>
            <a  href='/quiz' className='flechaEnBorde -mb-1'><img alt="." className="logo " src={require("../assets/img/flechaBgLila.png")}/></a>
          </div>
          <div className='mx-5 blanco-borde-negro col-8 col-md-3 redirect'>
            <div className='row'>
              <a className='negro' href='/texto-expositivo'><b>¿Qué sentido tiene el lenguaje <span className='playfair'>inclusivo?</span></b></a>
            </div>
              <a  href='/quiz' className='flechaEnBorde'><img alt="." className="logo" src={require("../assets/img/flechaBgLila.png")}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expresiones;
