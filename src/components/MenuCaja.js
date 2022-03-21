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
        <header style={{backgroundColor:"#F1F2F2"}} >
          <div className='row justify-content-center negro '>
            <a className="col-12 text-center lila hide-md tituloMenu" onClick={toggleBtn} ><b>{activo}</b></a><br/>
          </div>
        </header>
        <div className={menuState ? 'activa menu-tool-content pt-5' : 'noactiva menu-tool-content'}>
          <a className="col-11 hide-md" onClick={toggleBtn} ><img alt="." className=" logo" src={require("../assets/img/x.png")}/></a>
          <div className='row'>
            <div className=' mt-3 mt-md-5'>
                <a className='col-12 negro' href='/caja-de-herramientas/expresiones' ><b>Expresiones</b></a><br/>
                <a className='col-12 negro' href='/caja-de-herramientas/expresiones#Elipsis' >Elipsis</a><br/>
                <a className='col-12 negro' href='/caja-de-herramientas/expresiones#Sinecdoque' >Sinécdoque</a><br/>
                <a className='col-12 negro' href='/caja-de-herramientas/expresiones#Metonimia' >Metonimia</a><br/>
                <a className='col-12 negro' href='/caja-de-herramientas/expresiones#Desdoblamiento' >Desdoblamiento</a><br/>
              </div>
            <a className='col-12 negro mt-3' href='/caja-de-herramientas/nuevos-morfemas' ><b>Nuevos morfemas</b></a><br/>
            <div className='mt-3 pl-5'>
                <a className='col-11 negro' href='caja-de-herramientas/sustantivos' ><b>Sustantivos</b></a><br/>
                <a className='col-11 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#AsociadosAPersonasOEntidades' : '/sustantivos#AsociadosAPersonasOEntidades'}>Asociados a personas o entidades</a><br/>
                <a className='col-11 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#SustantivosAbstractos' : '/sustantivos#SustantivosAbstractos'}>Abstractos</a><br/>
                <a className='col-11 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#TerminacionesEspeciales' : '/sustantivos#TerminacionesEspeciales'}>Sustantivos con terminaciones especiales</a><br/>
                <a className='col-11 negro' onClick={toggleBtn} href={activo == "Sustantivo" ? '#Epicenos' : '/sustantivos#Epicenos'}>Epicenos</a><br/>
              </div>
              <div className='mt-3'>
                <a className='col-6 negro' href='/caja-de-herramientas/pronombres' ><b>Pronombres</b></a><br/>
                <a className='col-12 negro' href='/caja-de-herramientas/pronombres#relativos' >Relativos</a><br/>
                <a className='col-12 negro' href='/caja-de-herramientas/pronombres#indefinidos' >Indefinidos</a><br/>
              </div>

            </div>
        </div>
      </div>        
    </div>
  );
}

export default MenuCaja;
