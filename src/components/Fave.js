import React, { useState, useEffect } from 'react';
function Fave(props) {
  let descripcion;
  let imgSrc;
  const texto = () =>{
    switch (props.name){
      case "Rae": descripcion = "Tu empleo del lenguaje no demuestra inclusión-"; break;
      case "Desdoblamiento": descripcion = "Descripcion Desdoblamiento"; break;
      case "Nuevos morfemas": descripcion = "Nuevos morfemas"; break;
      case "No se": descripcion = "No se"; break;
      case "Pronombres relativos": descripcion = "texto Pronombres relativos"; break;
      case "Sustantivos abstractos": descripcion = "texto Sustantivos abstractos"; break;
      case "Sustantivos Colectivos": descripcion = "texto Sustantivos Colectivos"; break;
      default: descripcion = "Unkown";
    }
  }
  const toolImg = () =>{
    switch (props.name){
      case "Rae": imgSrc = "'../assets/img/illus/end1.png'"; break;
      case "Desdoblamiento": imgSrc = "'../assets/img/illus/expresion.png'"; break;
      case "Nuevos morfemas": imgSrc = "'../assets/img/illus/morfema.png'"; break;
      case "No se": imgSrc = "'../assets/img/illus/end1.png'"; break;
      case "Pronombres relativos": imgSrc = "'../assets/img/illus/pronombre.png'"; break;
      case "Sustantivos abstractos": imgSrc = "'../assets/img/illus/sustantivo.png'"; break;
      case "Sustantivos Colectivos": imgSrc = "'../assets/img/illus/sustantivo.png'"; break;
      default: imgSrc = "'../assets/img/illus/end1.png'";
    }
    console.log(imgSrc);
  }
  return (
    <div >
      {texto()}
      {toolImg()}
      <div className='mx-auto text-center'>
        <hr className='blanco'></hr>
        <h1 className='playfair blanco f3 text-center -mt-1'>{props.number}</h1>
        <div className='row justify-content-center'>
        {   props.name == "Rae"? imgSrc = <img className='col-6 col-md-3' src={ require('../assets/img/illus/end1.png') } />:
            props.name == "Desdoblamiento" ? imgSrc = <img className='col-6 col-md-4' src={ require('../assets/img/illus/expresion.png') } />:
            props.name == "Nuevos morfemas"? imgSrc = <img className='col-6 col-md-4' src={ require('../assets/img/illus/morfema.png') } />:
            props.name == "No se"? imgSrc = <img src={ require('../assets/img/illus/end1.png') } />:
            props.name == "Pronombres relativos"? imgSrc = <img className='col-6 col-md-4' src={ require('../assets/img/illus/pronombre.png') } />:
            props.name == "Sustantivos abstractos"? imgSrc = <img className='col-6 col-md-4' src={ require('../assets/img/illus/sustantivo.png') } />:
            props.name == "Sustantivos Colectivos"? imgSrc = <img className='col-6 col-md-4' src={ require('../assets/img/illus/sustantivo.png') } />
            :<img className='col-6 col-md-4' src={ require('../assets/img/illus/end1.png') } />
            }        
        <div className='col-10 col-md-3 offset-md-2 faveTool mt-3'>
          <h3 className='playfair mt-5'><b>{props.name}</b></h3>
          <p className='mt-3 blanco'>{descripcion}</p>
          <p className='mt-2 playfair'><b>Ejemplo</b></p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Fave;

