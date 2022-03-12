import React, { useState, useCallback, useEffect } from 'react';
import ProgressBar from './ProgressBar';

function MenuCaja(props) {
  const activo = props.activo;
  const [active, setActive] = useState(false);
  const toggleBtn = () => {
    setActive(!active);
  }
console.log(activo);
  return (
    <div className='container' >        
      <ProgressBar/>
      <div className='row justify-content-between negro under-lila mt-5 p-5 '>
        <a className="col-2 lila" onClick={toggleBtn} ><b>{activo}</b></a>
      </div>
      <div className={active ? 'activa menu-content bg-blanco container pt-5' : 'noactiva'}>
        <div className='row'>
          <div className='mt-5'>
              <a className='col-12 negro' href='caja-de-herramientas/sustantivos' ><b>Sustantivos</b></a>
              <a className='col-12 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#AsociadosAPersonasOEntidades' : '/sustantivos#AsociadosAPersonasOEntidades'}>Asociados a personas o entidades</a>
              <a className='col-12 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#SustantivosAbstractos' : '/sustantivos#SustantivosAbstractos'}>Abstractos</a>
              <a className='col-12 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#TerminacionesEspeciales' : '/sustantivos#TerminacionesEspeciales'}>Sustantivos con terminaciones especiales</a>
              <a className='col-12 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#Epicenos' : '/sustantivos#Epicenos'}>Epicenos</a>
            </div>
            <div className='mt-5'>
              <a className='col-6 negro' href='caja-de-herramientas/pronombres' ><b>Pronombres</b></a>
              <a className='col-12 negro'>Relativos</a>
              <a className='col-12 negro'>Indefinidos</a>
            </div>
            <a className='col-12 negro mt-5' href='caja-de-herramientas/nuevos-morfemas' ><b>Nuevos morfemas</b></a>
            <a className='col-12 negro mt-5' href='caja-de-herramientas/expresiones' ><b>Expresiones</b></a>
          </div>
      </div>
    </div>
  );
}

export default MenuCaja;
