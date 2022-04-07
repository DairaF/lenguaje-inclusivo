import React, { useState, useCallback, useEffect } from 'react';


function Footer() {
  return (
    <div className="bg-negro blanco"  >
      <div className='container'>
      <div className='row py-5 justify-content-center justify-content-md-between'>
        <div className='col-10 col-md-6 offset-md-1'>
          <img id="logoFooter" src={require('../assets/img/footerD.png')} />
        </div>
        <div className='m-1 mb-5 mb-md-0 col-10 col-md-3 f1 '>
          <a className='blanco my-5 f1-2' href='/'><b>Hablemos de como hablamos</b></a><br/>
          <a className='blanco my-5' href='/quiz'> Descubrí tu propio lenguaje inclusivo</a><br/>
          <a className='blanco my-5' href='/caja-de-herramientas'> Caja de herramientas </a><br/>
          <a className='blanco my-5' href='/que-sentido-tiene-el-lenguaje-inclusivo'> ¿Qué sentido tiene el nuevo "lenguaje inclusivo"? </a><br/>
          <a className='blanco my-5' href='/acerca'>Acerca del proyecto</a><br/>
        </div>
        <div id="footerIcons" className='row justify-content-center justify-content-md-start -mt-2 f1'>
          <b className='col-6 col-md-3 offset-md-1 pl-8 pl-md-1'>contacto@fund.ar</b>
          <div className='col-6 col-md-3 row justify-content-between'>
            <a className='col-4 ' href='https://twitter.com/fundesarg'><img className='' alt="twitter" src={require('../assets/img/itwt.png')}/></a>
            <a className='col-4 ' href='https://www.facebook.com/fundesarg'><img className='' alt="facebook" src={require('../assets/img/ifb.png')}/></a>
            <a className='col-4 ' href='https://www.linkedin.com/company/fundesarg/'><img className='' alt="linkedin" src={require('../assets/img/iin.png')}/></a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
