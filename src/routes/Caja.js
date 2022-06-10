import React, { useState, useCallback, useEffect } from 'react';
import '../assets/css/Herramientas.css';
//import ReactGa from 'react-ga';;
import DocumentMeta from 'react-document-meta';
function Caja() {
    // useEffect(()=>{
    //   ReactGa.initialize('G-BQYF4G0HMV')
    //   ReactGa.pageview(window.location.pathname + window.location.search)
    //   },[])
      const meta = {
        title: 'Caja de Herramientas',
        description: 'Recursos gramaticales y no tan gramaticales para no hablar solo de los varones',
        canonical: 'https://lenguajeinclusivo.fund.ar/caja-de-herramientas',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'lenguaje,inclusividad'
          }
        }
      };
  return (
    <DocumentMeta {...meta}>
    <div className=' bg-lila full' >
      <div className='container'>
        <div id="tituloCaja" className=''>
          <h2 className='col-5 blanco floatL'>Caja de <span className='playfairItalic'>herramientas</span></h2>
          <p className='col-5 playfair floatR'><b>Explorá recursos para construir tu propio lenguaje inclusivo.</b></p>
        </div>
        <div className='row justify-content-between contenedorCaja playfair'>
          <a className='col-5 col-sm-3 col-lg-2 m-auto negro' href='caja-de-herramientas/herramientas#sustantivos' >
            <img className='herramientaImg mb-3' src={require('../assets/img/illus/sustantivo.png')} />
            <b>Sustantivos</b>
          </a>
          <a className='col-5 col-sm-3 col-lg-2 m-auto negro' href='caja-de-herramientas/herramientas#pronombres' >
            <img className='herramientaImg mb-3' src={require('../assets/img/illus/pronombre.png')} />
            <b>Pronombres</b>
          </a>
          <a className='col-5 col-sm-3 col-lg-2 m-auto negro' href='caja-de-herramientas/herramientas#expresiones' >
            <img className='herramientaImg mb-3' src={require('../assets/img/illus/expresion.png')} />
            <b>Expresiones</b>
          </a>
          <a className='col-5 col-sm-3 col-lg-2 m-auto negro' href='caja-de-herramientas/herramientas#morfemas' >
            <img className='herramientaImg mb-3' src={require('../assets/img/illus/morfema.png')} />
            <b>Nuevos morfemas</b>
          </a>
        </div>
        <div className='text-center'>
          <a id='btnGuia' className='negro' href='caja-de-herramientas/herramientas#guia'>
            <img className='floatL' src={require('../assets/img/sonrisaAbierta.png')} />
            <b className='f08 negro text-center'>GUÍA AUTOREVISIÓN</b>
            <img className='floatR' src={require('../assets/img/uwu.png')} />
          </a>
        </div>
        {/* <span className='bottomText blanco opacity-05'>herramientas</span>        */}
      </div>
    </div>
    </DocumentMeta>
  );
}

export default Caja;
