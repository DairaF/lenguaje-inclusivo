import React, { useState, useCallback, useEffect } from 'react';


function MenuTexto(props) {
  const activo = props.activo;
  const [menuState, setMenuState] = useState(false);
  const toggleBtn = () => {
    setMenuState(!menuState);
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
    <div className='menuHerramienta' >
      <div className='container' >
      <header className="nombreActivo hide-md" >
          <div className='row justify-content-center negro '>
            <a className="col-12 text-center lila hide-md tituloMenu" onClick={toggleBtn} ><b>Índice</b></a><br/>
          </div>
        </header>
        <div className={menuState ? 'activa menu-tool-content pt-5' : 'noactiva menu-tool-content'}>
          <a className="col-11 hide-md" onClick={toggleBtn} ><img alt="." className=" logo floatR mr-5" src={require("../assets/img/x.png")}/></a>
          <div className='row f08 mt-5 mr-10 mt-md-0 mx-md-0'>
            <a className='col-12 negro py-2 mt-10 mt-md-0 mx-3 under-negro over-negro' href='/que-sentido-tiene-el-lenguaje-inclusivo#espacioPublico' ><b>Lenguaje y género en el espacio público</b></a><br/>
            <a className='col-12 negro py-2 mx-3 -mt-1 under-negro' onClick={toggleBtn} href='/que-sentido-tiene-el-lenguaje-inclusivo#debates' ><b>Debates en la lingüística</b></a><br/>
            <a className='col-12 negro py-2 mx-3 -mt-1 under-negro ' onClick={toggleBtn} href='/que-sentido-tiene-el-lenguaje-inclusivo#inclusion' ><b>Lenguaje e inclusión social</b></a><br/>
            <a className='col-12 negro py-2 mx-3 -mt-1  under-negro ' onClick={toggleBtn} href='/que-sentido-tiene-el-lenguaje-inclusivo#autora' ><b>Acerca la autora</b></a><br/>
            </div>
        </div>
      </div>        
    </div>
  );
}

export default MenuTexto;
