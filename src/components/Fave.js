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
      <div className='col-9 mx-auto p-5 text-center'>
        <h1 className='playfair blanco f3 text-center'>{props.number}</h1>
        

        {   props.name == "Rae"? imgSrc = <img src={ require('../assets/img/illus/end1.png') } />:
            props.name == "Desdoblamiento" ? imgSrc = <img src={ require('../assets/img/illus/expresion.png') } />:
            props.name == "Nuevos morfemas"? imgSrc = <img src={ require('../assets/img/illus/morfema.png') } />:
            props.name == "No se"? imgSrc = <img src={ require('../assets/img/illus/end1.png') } />:
            props.name == "Pronombres relativos"? imgSrc = <img src={ require('../assets/img/illus/pronombre.png') } />:
            props.name == "Sustantivos abstractos"? imgSrc = <img src={ require('../assets/img/illus/sustantivo.png') } />:
            props.name == "Sustantivos Colectivos"? imgSrc = <img src={ require('../assets/img/illus/sustantivo.png') } />
            :<img src={ require('../assets/img/illus/end1.png') } />
            }


        
        <h3 className='playfair py-5 under-negro'>{props.name}</h3>
        <p className='mt-5'>{descripcion}</p>
      </div>
    </div>
  );
}

export default Fave;

