import React, { useState, useEffect } from 'react';
function Herramienta(props) {
  console.log(props.id);
  return (
    <div className='container justify-content-center text-center my-5'>
      <h2 id={props.id} className='col-8 mx-auto lila playfair'>{props.titulo}</h2>
      <p className='col-8 mx-auto'>{props.texto}</p>
      <p className='playfair mx-auto'><b>Ejemplo:{props.ejemplo1}</b></p>
      { props.masInfo !== " " ? <div className='border-lila mx-auto'>
        <h3>MasInfo</h3>
        <p className="under-lila">{props.masInfo}</p>
        <p>Ejemplo:{props.ejemplo2}</p>
      </div> : "" }
    </div>
  );
}

export default Herramienta;

