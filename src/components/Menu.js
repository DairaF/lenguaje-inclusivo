import React, { useState, useCallback, useEffect } from 'react';


function Menu() {

  const [active, setActive] = useState(false);
  const toggleBtn = () => {
    setActive(!active);
  }

  return (
    <div className='container' >
      <div className='menu row justify-content-between'>
        <a href='/' className="col-2"><img className="logo" alt="." src={require("../assets/img/FU_LogoFundar.png")} /></a>
        <a className="col-2" onClick={toggleBtn} ><img alt="." className="logo" src={require("../assets/img/burger.png")}/></a>
      </div>
      <div className={active ? 'activa menu-content fullHeight bg-lila container' : 'noactiva'}>
        <div className='row'>
          <a className='col-3 blanco mt-25' href='/'>Home</a>
          <a className='col-3 blanco mt-25' href='quiz'> Descubrí tu <span className='playfairItalic'>personalidad</span> gramatical </a>
          <a className='col-3 blanco mt-25' href='caja-de-herramientas'>Caja de <span className='playfairItalic'>herramientas</span></a>
          <a className='col-3 blanco mt-25' href='texto-expositivo'> ¿Qué sentido tiene el nuevo <br/> lenguaje<span className='playfair'> inclusivo</span>? </a>
          <a className='col-3 blanco mt-25'>Acerca del proyecto</a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
