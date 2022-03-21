import React, { useState, useCallback, useEffect } from 'react';
import '../assets/css/Menu.css'

function Menu() {

  const [active, setActive] = useState(false);
  const toggleBtn = () => {
    setActive(!active);
  }
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 
  useEffect(()=> {
      const handleScroll = () => {
         let moving = window.pageYOffset
         
         setVisible(position > moving);
         setPosition(moving)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
         window.removeEventListener("scroll", handleScroll);
      })
  })

const cls = visible ? "visible" : "hidden";

  return (

    <header className={cls} >
      {/* {window.location.pathname} */}
      <div className={window.location.pathname == "/acerca" ? "menu blanco":"menu"}>
        <a id="flag" href='/' className="floatL"><img className="logo" alt="." src={require("../assets/img/FU_LogoFundar.png")} /></a>
        <a id="burger" className="floatR" onClick={toggleBtn} ><img alt="." className="logo floatR" src={ active ? require("../assets/img/x.png") : require("../assets/img/burger.png")}/></a>
      </div>
      <div className={active ? 'activa menu-content bg-lila container' : 'noactiva menu-content '}>
        <div className='mt-5 mb-2 mt-md-0 mx-1 mx-md-0 ml-md-5 row justify-content-md-end'>
          <a className="col-12 hide-md " onClick={toggleBtn} ><img alt="." className="mr-5 hide-md floatR logo" src={ require("../assets/img/x.png")}/></a>
          <a className='mt-5 mb-2 blanco col-7 col-md-2' href='/quiz'> Descubrí tu propio lenguaje <span className='playfairItalic'>inclusivo</span></a>
          <a className='mt-5 mb-2 blanco col-7 col-md-2' href='/caja-de-herramientas'>Caja de <span className='playfairItalic'>herramientas</span></a>
          <a className='mt-5 mb-2 blanco col-7 col-md-2' href='/texto-expositivo'> ¿Qué sentido tiene el nuevo lenguaje<span className='playfairItalic'> inclusivo</span>? </a>
          <a className='mt-5 mb-2 blanco col-7 col-md-2' href='/acerca'>Acerca del proyecto</a>
          <hr className='lila col-8 mt-2 hidden-sm'/>
        </div>
      </div>
    </header>
  );
}

export default Menu;
