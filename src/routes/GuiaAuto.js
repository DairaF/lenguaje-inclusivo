import React, { useState, useCallback, useEffect } from 'react';
import guias from '../data/guias.json';
import Guia from "../components/Guia";
import ReactGa from 'react-ga'

function GuiaAuto() {
    useEffect(()=>{
      ReactGa.initialize('G-BQYF4G0HMV')
      ReactGa.pageview(window.location.pathname + window.location.search)
      },[])
      
  return (
    <div className='container ' >
      <div className='row bg-crema text-center pb-5'>
              <h2 className='col-8 mx-auto my-5'><b>Guía de <span className='playfairItalic'>autorevisión</span> a la hora de <span className='playfairItalic'>escribir</span></b></h2>
              <p className='col-8 mx-auto'>Escribir requiere necesariamente revisar y reescribir. A continuación, presentamos una lista de preguntas que buscan guiar la revisión de textos con perspectiva de género. </p>
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
  );
}

export default GuiaAuto;
