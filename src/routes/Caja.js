import React, { useState, useCallback, useEffect } from 'react';
import '../App.css';


function Caja() {

  return (
    <div >
      <h1>Caja de Herramientas</h1>
      <h3>Recursos gramaticales y no tan gramaticales para hacer que tus textos sean un poco más inclusivos</h3>
      <a href='caja-de-herramientas/tradicionales' >Tradicionales</a>
      <a href='caja-de-herramientas/disruptivas' >Disruptivas</a>
      <p>Elegí uno de los botones para empezar a ver las herramientas</p>
    </div>
  );
}

export default Caja;
