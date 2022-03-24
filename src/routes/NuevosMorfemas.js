import React, { useState, useCallback, useEffect } from 'react';
 
import Herramienta from '../components/Herramienta';
import morfemas from '../data/nuevos-morfemas.json';
import MenuCaja from '../components/MenuCaja';
import ReactGa from 'react-ga'
import ProgressBar from '../components/ProgressBar';

function NuevosMorfemas() {
  
  useEffect(()=>{
    ReactGa.initialize('G-BQYF4G0HMV')
    ReactGa.pageview(window.location.pathname + window.location.search)
    },[])
    
  return (
    <div className='bg-crema toolBody'>
    <div className='container' >
      <div className='row justify-content-center'>  
        <div className='col-12 col-md-3'>  
          <MenuCaja activo="morfemas"/>
        </div>
        <div className='col-12 col-md-9'>
          <ProgressBar/>  
          <h2 className='mt-45 mt-md-15 pt-5 text-center col-9 mx-auto lila '>morfemas</h2>
          <hr className='negro mb-5' />
          <div className='bg-lila banner col-8 col-md-11 mx-auto mb-10'>
            <img src={require('../assets/img/illus/morfemas.png')} />
          </div>
          {
            morfemas.map((herramienta, index)=>{
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
    <div className='redirects '>     
      <div className='row justify-content-center p-5'>
        <div className=' mx-5 blanco-borde-negro col-12 col-md-3 redirect negro'>
          <a  href='/quiz'>
            <div className='row redirect-texto negro'>
              <b>Ahora que viste todas las herramientas, ponete a prueba y descubrí tu propio lenguaje inclusivo</b>
            </div>
            <div className='flechaEnBorde'>
              <img alt="." className="logo" src={require("../assets/img/flechaBgLila.png")}/>
            </div>   
          </a>       
        </div>

        <div className=' mx-5 blanco-borde-negro col-12 col-md-3 redirect negro'>
          <a href='/texto-expositivo'>
            <div className='row redirect-texto negro'>
              <b>¿Qué sentido tiene el lenguaje <span className='playfair'>inclusivo?</span></b>
            </div>
            <div className='flechaEnBorde'>
              <img alt="." className="logo" src={require("../assets/img/flechaBgLila.png")}/>
            </div>   
          </a>       
        </div>
        
      </div>
    </div>
  </div>
);
}

export default NuevosMorfemas;
