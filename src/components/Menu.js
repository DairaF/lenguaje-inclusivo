import React, { useState, useCallback, useEffect } from 'react';


function Menu() {

  const [active, setActive] = useState(false);
  const toggleBtn = () => {
    setActive(!active);
  }

  return (
    <div className='menu' >
      <img alt="." className="logo" src={require("../assets/img/FU_LogoFundar.png")} onClick={toggleBtn} />
      <div className={active ? 'activa menu-content' : 'noactiva'}>
        <a href='/'>home</a>
        <a href='quiz'> Descubrí tu personalidad gramatical </a>
        <a href='caja-de-herramientas'> caja de herramientas </a>
        <a href='texto-expositivo'> ¿Qué sentido tiene el nuevo "lenguaje inclusivo"? </a>
        <a>Acerca del proyecto</a>
      </div>
    </div>
  );
}

export default Menu;
