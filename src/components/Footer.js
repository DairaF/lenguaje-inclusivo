import React, { useState, useCallback, useEffect } from 'react';


function Footer() {
  return (
    <div className="bg-negro blanco footer"  >
      <div className='container'>
      <div className='row py-3 justify-content-center justify-content-md-between'>
        <div className='col-10 col-md-6 offset-md-1'>
          <img id="logoFooter" src={require('../assets/img/footerD.png')} />
          
        </div>
        <div id="iconsMd" className='row justify-content-start f08 f1-xl col-md-4 p-0'>
            <b className='col-5 mx-auto floatL p-0'>contacto@fund.ar</b>
            <div className='floatR col-6 row justify-content-between'>
              <a className='col-2 ' href='https://twitter.com/fundesarg'><img className=' ' alt="twitter" src={require('../assets/img/itwt.png')}/></a>
              <a className='col-2 ' href='https://www.facebook.com/fundarcipp'><img className=' ' alt="facebook" src={require('../assets/img/ifb.png')}/></a>
              <a className='col-2 ' href='https://www.linkedin.com/company/fundesarg/'><img className=' ' alt="linkedin" src={require('../assets/img/iin.png')}/></a>
            </div>
          </div>
        <div className='m-1 mt-3 mt-md-0 mb-5 mb-md-0 col-10 col-md-3 links hide-md'>
          {/* <a className='blanco my-1 f1-2' href='/'><p><b>Hablemos de como hablamos</b></p></a>
          <a className='blanco my-1 f08-md f1-xl' href='/quiz'><span>Descubrí tu propio lenguaje inclusivo</span></a>
          <a className='blanco my-1 f08-md f1-xl' href='/caja-de-herramientas'><span>Caja de herramientas</span></a>
          <a className='blanco my-1 f08-md f1-xl' href='/que-sentido-tiene-el-lenguaje-inclusivo'><span>¿Qué sentido tiene el nuevo "lenguaje inclusivo"?</span></a>
          <a className='blanco my-1 f08-md f1-xl' href='/acerca-del-proyecto'><span>Acerca del proyecto</span></a> */}
        
          <p className='col-10 blanco my-1 mt-4 hide-md'><b>contacto@fund.ar</b></p>
          <div className='col-10 mt-4 row justify-content-between hide-md p-0'>
            <a className='col-4 p-0' href='https://twitter.com/fundesarg'><img className='' alt="twitter" src={require('../assets/img/itwt.png')}/></a>
            <a className='col-4' href='https://www.facebook.com/fundarcipp'><img className='' alt="facebook" src={require('../assets/img/ifb.png')}/></a>
            <a className='col-4' href='https://www.linkedin.com/company/fundesarg/'><img className='' alt="linkedin" src={require('../assets/img/iin.png')}/></a>
          </div>
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default Footer;
