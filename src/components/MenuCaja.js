import React, { useState, useCallback, useEffect } from 'react';
import ProgressBar from './ProgressBar';

function MenuCaja(props) {
  const activo = props.activo;
  const [menuState, setMenuState] = useState(false);
  const toggleBtn = () => {
    setMenuState(!menuState);
  } 
console.log(activo);
  return (
    <div className='menuHerramienta' >
      <div className='container' >        
        <ProgressBar/>
        <div className='row justify-content-between negro under-lila mt-5 p-5 '>
          <a className="col-2 lila" onClick={toggleBtn} ><b>{activo}</b></a><br/>
        </div>
        <div className={menuState ? 'activa menu-content bg-blanco container pt-5' : 'noactiva'}>
          <div className='row'>
            <div className='mt-5'>
                <a className='col-12 negro' href='caja-de-herramientas/sustantivos' ><b>Sustantivos</b></a><br/>
                <a className='col-12 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#AsociadosAPersonasOEntidades' : '/sustantivos#AsociadosAPersonasOEntidades'}>Asociados a personas o entidades</a><br/>
                <a className='col-12 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#SustantivosAbstractos' : '/sustantivos#SustantivosAbstractos'}>Abstractos</a><br/>
                <a className='col-12 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#TerminacionesEspeciales' : '/sustantivos#TerminacionesEspeciales'}>Sustantivos con terminaciones especiales</a><br/>
                <a className='col-12 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#Epicenos' : '/sustantivos#Epicenos'}>Epicenos</a><br/>
              </div>
              <div className='mt-5'>
                <a className='col-6 negro' href='caja-de-herramientas/pronombres' ><b>Pronombres</b></a><br/>
                <a className='col-12 negro'>Relativos</a><br/>
                <a className='col-12 negro'>Indefinidos</a><br/>
              </div>
              <a className='col-12 negro mt-5' href='caja-de-herramientas/nuevos-morfemas' ><b>Nuevos morfemas</b></a><br/>
              <a className='col-12 negro mt-5' href='caja-de-herramientas/expresiones' ><b>Expresiones</b></a><br/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCaja;
