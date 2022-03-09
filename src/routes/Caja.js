import React, { useState, useCallback, useEffect } from 'react';
import '../App.css';

function Caja() {

  return (
    <div className='container bg-lila fullHeight' >
      
      {/* <div className='row bg-lila'>
        <h1 className='balnco under-negro'><b>Caja de <span className='playfair'>herramientas</span></b></h1>
        <p className='playfair'>Recursos gramaticales y no tan gramaticales para hacer que tus textos sean un poco más <span className='playfairItalic'>inclusivos</span></p>
      </div> */}
      <div className='container'>
        <div className='row mt-75'>
          <a className='col-6 border-negro-redondeado' href='caja-de-herramientas/sustantivos' >sustantivos</a>
          <a className='col-6 border-negro-redondeado' href='caja-de-herramientas/pronombres' >pronombres</a>
        </div>
        <div className='row'>
          <a className='col-6 border-negro-redondeado' href='caja-de-herramientas/nuevos-morfemas' >nuevos morfemas</a>
          <a className='col-6 border-negro-redondeado' href='caja-de-herramientas/expresiones' >expresiones</a>
        </div>
        
      </div>
    </div>
  );
}

export default Caja;
