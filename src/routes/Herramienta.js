import React, { useState, useCallback, useEffect } from 'react';
 
import Herramienta from '../components/Herramienta';
import sustantivos from '../data/sustantivos.json';
import morfemas from '../data/nuevos-morfemas.json';
import pronombres from '../data/pronombres.json';
import expresiones from '../data/expresiones.json';
import MenuHerramienta from '../components/MenuHerramienta';
import ReactGa from 'react-ga'
import ProgressBar from '../components/ProgressBar';
import '../assets/css/Guia.css'
import guias from '../data/guias.json';
import Guia from "../components/Guia";

function Sustantivos() {

  useEffect(()=>{
    ReactGa.initialize('G-BQYF4G0HMV')
    ReactGa.pageview(window.location.pathname + window.location.search)
    },[])
    
  return (
    <div className='bg-crema toolBody'>
      <div className='container' >  
          
            <ProgressBar/>  
        <div className='row justify-content-center'>
        <div className='col-12 col-md-3'>  
            <MenuHerramienta activo="Herramientas"/>
          </div>
          <div className='col-12 col-md-9 pb-5'>
            <hr className='negro mb-5' />            
            <h2 id="sustantivos" className='mt-5 pt-5 text-center col-9 mx-auto lila '>Sustantivos</h2>
            <div className='bg-lila banner col-8 col-md-11 mx-auto mb-10'>
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
              <hr className='negro mb-10 mt-10' />
                <h2 id="pronombres" className=' text-center col-9 mx-auto lila '>Pronombres</h2>
                
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
                <hr className='negro mb-10 mt-10' />
                <h2 id="expresiones" className=' text-center col-9 mx-auto lila '>Expresiones</h2>
          
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

            <hr className='negro mb-10 mt-10' />
            <h2 id="morfemas" className=' text-center col-9 mx-auto lila '>Morfemas</h2>
            
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

      <div id="guia" className='guias pb-5 mt-8 row'>
        <div className='col-12 col-md-3'>
        </div>
        <div className='col-12 col-md-9' >
          <div className='row justify-content-center text-center pb-5'>
            <h2 className='col-10 col-md-8 col-md-4 mt-45 mt-md-5'><b>Guía de <span className='playfairItalic'>autorevisión</span> a la hora de <span className='playfairItalic'>escribir</span></b></h2>
          </div>
          <div className='row justify-content-center text-center pb-5'>
            <p className='col-10 col-md-8'>Escribir requiere necesariamente revisar y reescribir. A continuación, presentamos una lista de preguntas que buscan guiar la revisión de textos con perspectiva de género. </p>
          </div>        
          <div id="guiaRow" className='row justify-content-center'>
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
      </div>
    </div>      
      <div className='redirects '>     
        <div className='row justify-content-center p-5'>
          <div className=' mx-5 blanco-borde-negro col-12 col-md-8 col-xl-3 redirect negro'>
            <a  href='/quiz'>
              <div className='row redirect-texto negro'>
                <b>Ahora que viste todas las herramientas, ponete a prueba y descubrí tu propio lenguaje inclusivo</b>
              </div>
              <div className='flechaEnBorde'>
                <img alt="." className="logo" src={require("../assets/img/flechaBgLila.png")}/>
              </div>   
            </a>       
          </div>

          <div className=' mx-5 blanco-borde-negro col-12 col-md-8 col-xl-3 redirect negro'>
            <a href='/que-sentido-tiene-el-lenguaje-inclusivo'>
              <div className='row redirect-texto negro'>
                <b>¿Qué sentido tiene el lenguaje inclusivo?</b>
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

export default Sustantivos;
