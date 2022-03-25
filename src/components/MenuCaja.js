import React, { useState, useCallback, useEffect } from 'react';


function MenuCaja(props) {
  const activo = props.activo;
  const [menuState, setMenuState] = useState(false);
  const toggleBtn = () => {
    setMenuState(!menuState);
  } 

  return (
    <div className='menuHerramienta' >
      <div className='container' >
        <header className="nombreActivo hide-md" >
          <div className='row justify-content-center negro '>
            <a className="col-12 text-center lila hide-md tituloMenu" onClick={toggleBtn} ><b>{activo}</b></a><br/>
          </div>
        </header>
        <div className={menuState ? 'activa menu-tool-content pt-5' : 'noactiva menu-tool-content'}>
          <a className="col-11 hide-md" onClick={toggleBtn} ><img alt="." className=" logo floatR mr-5" src={require("../assets/img/x.png")}/></a>
          <div className='row f08 mt-15 mr-10 mt-md-0 mx-md-0'>
            <div className='my-2 pl-5 pt-3 over-negro under-negro ml-md-3'>
                <a className='col-11 negro' href='/caja-de-herramientas/sustantivos' ><b>Sustantivos</b></a><br/>
                <a className='col-11 negro' onClick={toggleBtn} href='/caja-de-herramientas/sustantivos#AsociadosAPersonasOEntidades'>Asociados a personas o entidades</a><br/>
                <a className='col-11 negro' onClick={toggleBtn} href= '/caja-de-herramientas/sustantivos#SustantivosAbstractos'>Abstractos</a><br/>
                <a className='col-11 negro' onClick={toggleBtn} href='/caja-de-herramientas/sustantivos#TerminacionesEspeciales'>Sustantivos con terminaciones especiales</a><br/>
                <a className='col-11 negro' onClick={toggleBtn} href='/caja-de-herramientas/sustantivos#Epicenos'>Epicenos</a><br/>
                <a className='col-11 negro' onClick={toggleBtn} href='/caja-de-herramientas/sustantivos#Colectivos'>Colectivos</a><br/>
              </div>
              <div className='my-2 under-negro'>
                <a className='col-6 negro' href='/caja-de-herramientas/pronombres' ><b>Pronombres</b></a><br/>
                <a className='col-12 negro' href='/caja-de-herramientas/pronombres#relativos' >Relativos</a><br/>
                <a className='col-12 negro' href='/caja-de-herramientas/pronombres#indefinidos' >Indefinidos</a><br/>
              </div>
              <div className=' my-2 under-negro'>
                <a className='col-12 negro' href='/caja-de-herramientas/expresiones' ><b>Expresiones</b></a><br/>
                <a className='col-12 negro' href='/caja-de-herramientas/expresiones#Elipsis' >Elipsis</a><br/>
                <a className='col-12 negro' href='/caja-de-herramientas/expresiones#Sinecdoque' >Sinécdoque</a><br/>
                <a className='col-12 negro' href='/caja-de-herramientas/expresiones#Prosopopeya' >Prosopopeya</a><br/>
                <a className='col-12 negro' href='/caja-de-herramientas/expresiones#Desdoblamiento' >Desdoblamiento</a><br/>
                <a className='col-12 negro' href='/caja-de-herramientas/expresiones#Impersonales' >Impersonales</a><br/>
              </div>
              <a className='col-12 negro my-2 under-negro' href='/caja-de-herramientas/nuevos-morfemas' ><b>Nuevos morfemas</b></a><br/>
              <a className='col-12 negro my-2 under-negro' href='/guia-autocorrecion' ><b>Guía de autorevisión</b></a><br/>
            </div>
        </div>
      </div>        
    </div>
  );
}

export default MenuCaja;
