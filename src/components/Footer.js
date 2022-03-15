import React, { useState, useCallback, useEffect } from 'react';


function Footer() {
  return (
    <div className="bg-negro blanco"  >
      <div className='container'>
      <div className='row py-5 justify-content-center justify-content-md-between'>
        <div className='col-10 col-md-6 offset-1'>
          <img id="logoFooter" src={require('../assets/img/footerD.png')} />
        </div>
        <div className='m-1 mb-5 mb-md-0 col-9 col-md-3 f08 '>
          <a className='blanco' href='/'>Hablemos de como hablamos</a><br/>
          <a className='blanco' href='quiz'> Descubrí tu personalidad gramatical </a><br/>
          <a className='blanco' href='caja-de-herramientas'> caja de herramientas </a><br/>
          <a className='blanco' href='texto-expositivo'> ¿Qué sentido tiene el nuevo "lenguaje inclusivo"? </a><br/>
          <a className='blanco' href='acerca'>Acerca de este proyecto</a><br/>
        </div>
        <div className='row justify-content-between justify-content-md-start -mt-2 f08'>
          <span className='col-5 col-md-3 offset-1'>contacto@fund.ar</span>
          <div className='col-5 col-md-2'>
            <a><img alt="twitter" src={require('../assets/img/itwt.png')}/></a>
            <a><img alt="facebook" src={require('../assets/img/ifb.png')}/></a>
            <a><img alt="linkedin" src={require('../assets/img/iin.png')}/></a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
