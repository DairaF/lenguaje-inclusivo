import React, { useState, useCallback, useEffect } from 'react';
import '../assets/css/Herramientas.css';
import ReactGa from 'react-ga'
function Caja() {
    useEffect(()=>{
      ReactGa.initialize('G-BQYF4G0HMV')
      ReactGa.pageview(window.location.pathname + window.location.search)
      },[])
      
  return (
    <div className=' bg-lila full' >
      <div className='container'>
        <div id="tituloCaja" className='row justify-content-between'>
          <h2 className='offset-1 col-5 blanco pl-3'>Caja de <span className='playfairItalic'>herramientas</span></h2>
          <p className='col-4 playfair'>Elegí una de las opciones para empezar a ver las herramientas</p>
        </div>
        <div className='row justify-content-between contenedorCaja  playfair'>
          <a className='col-5 col-sm-3 col-lg-2 m-auto negro' href='caja-de-herramientas/sustantivos' >
            <img className='herramientaImg' src={require('../assets/img/illus/sustantivo.png')} />
            Sustantivos
          </a>
          <a className='col-5 col-sm-3 col-lg-2 m-auto negro' href='caja-de-herramientas/pronombres' >
            <img className='herramientaImg' src={require('../assets/img/illus/pronombre.png')} />
            Pronombres
          </a>
          <a className='col-5 col-sm-3 col-lg-2 m-auto negro' href='caja-de-herramientas/expresiones' >
            <img className='herramientaImg' src={require('../assets/img/illus/expresion.png')} />
            Expresiones
          </a>
          <a className='col-5 col-sm-3 col-lg-2 m-auto negro' href='caja-de-herramientas/nuevos-morfemas' >
            <img className='herramientaImg' src={require('../assets/img/illus/morfema.png')} />
            Nuevos morfemas
          </a>
        </div>
        <div className='text-center'>
          <a id='btnGuia' className='negro' href='/guia-autocorrecion'>
            <img className='floatL' src={require('../assets/img/sonrisaAbierta.png')} />
            <span className='f08'>GUÍA AUTOREVISIÓN</span>
            <img className='floatR' src={require('../assets/img/uwu.png')} />
          </a>
        </div>
        {/* <span className='bottomText blanco opacity-05'>herramientas</span>        */}
      </div>
    </div>
  );
}

export default Caja;
