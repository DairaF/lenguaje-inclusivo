import React, { useState, useCallback, useEffect } from 'react';


function MenuCaja(props) {
  const activo = props.activo;
  const [active, setActive] = useState(false);
  const toggleBtn = () => {
    setActive(!active);
  }
console.log(activo);
  return (
    <div className='container' >
      <div className='menu row justify-content-between negro under-lila my-5'>
        <a className="col-2" onClick={toggleBtn} >{activo}</a>
      </div>
      <div className={active ? 'activa menu-content fullHeight bg-blanco container mt-25' : 'noactiva'}>
        <div className='row'>
        <div className='container'>
          <div className='mt-5'>
              <a className='col-6 ' href='caja-de-herramientas/sustantivos' >Sustantivos</a>
              <a onClick={toggleBtn} href={activo == "Sustantivo" ? '#AsociadosAPersonasOEntidades' : 'caja-de-herramientas/sustantivos#AsociadosAPersonasOEntidades'}>Asociados a personas o entidades</a>
              <a onClick={toggleBtn} href={activo == "Sustantivo" ? '#SustantivosAbstractos' : 'caja-de-herramientas/sustantivos#SustantivosAbstractos'}>Abstractos</a>
              <a onClick={toggleBtn} href={activo == "Sustantivo" ? '#TerminacionesEspeciales' : 'caja-de-herramientas/sustantivos#TerminacionesEspeciales'}>Sustantivos con terminaciones especiales</a>
              <a onClick={toggleBtn} href={activo == "Sustantivo" ? '#Epicenos' : 'caja-de-herramientas/sustantivos#Epicenos'}>Epicenos</a>
            </div>
            <div>
              <a className='col-6 ' href='caja-de-herramientas/pronombres' >Pronombres</a>
              <a>Relativos</a>
              <a>Inbdefinidos</a>
            </div>
            <a className='col-6 ' href='caja-de-herramientas/nuevos-morfemas' >nuevos morfemas</a>
            <a className='col-6 ' href='caja-de-herramientas/expresiones' >expresiones</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCaja;
