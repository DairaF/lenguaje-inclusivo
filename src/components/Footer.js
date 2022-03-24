import React, { useState, useCallback, useEffect } from 'react';


function Footer() {
  return (
    <div className="bg-negro blanco"  >
      <div className='container'>
      <div className='row py-5 justify-content-center justify-content-md-between'>
        <div className='col-10 col-md-6 offset-md-1'>
          <img id="logoFooter" src={require('../assets/img/footerD.png')} />
        </div>
        <div className='m-1 mb-5 mb-md-0 col-10 col-md-3 f08 '>
          <a className='blanco my-5' href='/'><b>Hablemos de como hablamos</b></a><br/>
          <a className='blanco my-5' href='quiz'> Descubrí tu propio lenguaje inclusivo</a><br/>
          <a className='blanco my-5' href='caja-de-herramientas'> caja de herramientas </a><br/>
          <a className='blanco my-5' href='texto-expositivo'> ¿Qué sentido tiene el nuevo "lenguaje inclusivo"? </a><br/>
          <a className='blanco my-5' href='acerca'>Acerca de este proyecto</a><br/>
        </div>
        <div className='row justify-content-center justify-content-md-start -mt-2 f08'>
          <b className='col-6 col-md-3 offset-md-1 pl-8 pl-md-1'>contacto@fund.ar</b>
          <div className='col-6 col-md-3'>
            <a><img className='mx-2 mx-md-4' alt="twitter" src={require('../assets/img/itwt.png')}/></a>
            <a><img className='mx-2 mx-md-4' alt="facebook" src={require('../assets/img/ifb.png')}/></a>
            <a><img className='mx-2 mx-md-4' alt="linkedin" src={require('../assets/img/iin.png')}/></a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
