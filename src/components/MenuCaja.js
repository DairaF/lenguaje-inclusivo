import React, { useState, useCallback, useEffect } from 'react';
import ProgressBar from './ProgressBar';

function MenuCaja(props) {
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
        <ProgressBar/>
        <header  className={cls}>
          <div className='row justify-content-center negro '>
            <a className="col-12 text-center lila hide-md tituloMenu" onClick={toggleBtn} ><b>{activo}</b></a><br/>
          </div>
        </header>
        <div className={menuState ? 'activa menu-tool-content bg-blanco container pt-5' : 'noactiva menu-tool-content'}>
          <div className='row'>
            <div className='mt-5'>
                <a className='col-12 negro' href='caja-de-herramientas/sustantivos' ><b>Sustantivos</b></a><br/>
                <a className='col-12 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#AsociadosAPersonasOEntidades' : '/sustantivos#AsociadosAPersonasOEntidades'}>Asociados a personas o entidades</a><br/>
                <a className='col-12 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#SustantivosAbstractos' : '/sustantivos#SustantivosAbstractos'}>Abstractos</a><br/>
                <a className='col-12 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#TerminacionesEspeciales' : '/sustantivos#TerminacionesEspeciales'}>Sustantivos con terminaciones especiales</a><br/>
                <a className='col-12 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#Epicenos' : '/sustantivos#Epicenos'}>Epicenos</a><br/>
              </div>
              <div className='mt-3'>
                <a className='col-6 negro' href='caja-de-herramientas/pronombres' ><b>Pronombres</b></a><br/>
                <a className='col-12 negro'>Relativos</a><br/>
                <a className='col-12 negro'>Indefinidos</a><br/>
              </div>
              <a className='col-12 negro mt-3' href='caja-de-herramientas/nuevos-morfemas' ><b>Nuevos morfemas</b></a><br/>
              <div>
                <a className='col-12 negro mt-3' href='caja-de-herramientas/expresiones' ><b>Expresiones</b></a><br/>
                <a className='col-12 negro' href='caja-de-herramientas/sustantivos' >Elipsis</a><br/>
                <a className='col-12 negro' href='caja-de-herramientas/sustantivos' >Sinecdoque</a><br/>
                <a className='col-12 negro' href='caja-de-herramientas/sustantivos' >Metonimia</a><br/>
                <a className='col-12 negro' href='caja-de-herramientas/sustantivos' >Desdoblamiento</a><br/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCaja;
