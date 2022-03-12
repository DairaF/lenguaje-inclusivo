import React, { useState, useEffect } from 'react';
function Herramienta(props) {
  console.log(props.id);
  return (
    <div className='container justify-content-center text-center my-5'>
      <h3 id={props.id} className='col-10 col-md-5 mx-auto lila playfair mt-5'>{props.titulo}</h3>
      <p className='col-10 col-md-5 mx-auto'>{props.texto}</p>
      <p className='col-10 col-md-5 playfair mx-auto'><b>Ejemplo:{props.ejemplo1}</b></p>
      { props.masInfo !== " " ? <div className='border-lila mx-auto col-10 col-md-5 mb-5 lila'>
        <h3>MasInfo</h3>
        <p className="under-lila col-10 mx-auto py-2">{props.masInfo}</p>
        <div className='under-lila row text-left ej'>
            <b className='negro playfair col-8 col-md-9'>{props.ejemplo2.no}</b>
            <img className='col-3 col-md-2' alt="no" src={require('../assets/img/no.png')} />      
        </div>
        <div className='row text-left ej'>
            <b className='negro playfair col-8 col-md-9'>{props.ejemplo2.si}</b>
            <img className='col-3 col-md-2' alt="si" src={require('../assets/img/si.png')} />      
        </div>
      </div> : "" }
    </div>
  );
}

export default Herramienta;

