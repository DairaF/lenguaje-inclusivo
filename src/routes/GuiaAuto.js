import React, { useState, useCallback, useEffect } from 'react';
import guias from '../data/guias.json';
import Guia from "../components/Guia";
import ReactGa from 'react-ga'
import '../assets/css/Guia.css'
function GuiaAuto() {
    useEffect(()=>{
      ReactGa.initialize('G-BQYF4G0HMV')
      ReactGa.pageview(window.location.pathname + window.location.search)
      },[])
      
  return (
    <div className='guias'>
      <div className=' ' >
      <div className='row justify-content-center text-center pb-5'>
        <h2 className='col-10 col-md-8 col-md-4 mt-45 mt-md-20'><b>Guía de <span className='playfairItalic'>autorevisión</span> a la hora de <span className='playfairItalic'>escribir</span></b></h2>
      </div>
      <div className='row justify-content-center text-center pb-5'>
        <p className='col-10 col-md-8'>Escribir requiere necesariamente revisar y reescribir. A continuación, presentamos una lista de preguntas que buscan guiar la revisión de textos con perspectiva de género. </p>
      </div>        
      <div className='row justify-content-center pb-5 px-md-5'>
              {
                guias.map((guia, index)=>{
                  return (
                    <Guia
                      key = {index}
                      number = {index+1}
                      titulo = {guia.titulo}
                      texto= {guia.texto}     
                    />
                  )
                }
                )
              }
        </div>
      </div>
    </div>
  );
}

export default GuiaAuto;
