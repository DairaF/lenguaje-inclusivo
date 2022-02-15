import React, { useState, useEffect } from 'react';
function Herramienta(props) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.texto}</p>
      <p>Ejemplo:{props.ejemplo1}</p>
      <p>MasInfo:{props.masInfo}</p>
      <p>Ejemplo:{props.ejemplo2}</p>
    </div>
  );
}

export default Herramienta;

