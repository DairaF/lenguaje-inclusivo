import React, { useState, useCallback, useEffect } from 'react';


function Footer() {
  return (
    <div className="bg-negro blanco"  >
      <div className='row justify-content-center justify-content-md-between'>
        <div>
        <a className='m-1 col-10' href='/'>Hablemos de como hablamos</a>
        <a href='quiz'> Descubrí tu personalidad gramatical </a>
        <a href='caja-de-herramientas'> caja de herramientas </a>
        <a href='texto-expositivo'> ¿Qué sentido tiene el nuevo "lenguaje inclusivo"? </a>
        <a href='acerca'>Acerca de este proyecto</a>
        </div>
        <span>contacto@fund.ar</span>
        <a>twitter</a>
        <a>facebook</a>
        <a>Linkedin</a>
      </div>
    </div>
  );
}

export default Footer;
