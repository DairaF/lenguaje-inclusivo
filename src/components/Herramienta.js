import React, { useState, useEffect } from 'react';
function Herramienta(props) {
  return (
    <div className='container justify-content-center text-center mb-10'>
      <h3 id={props.id} className='col-10 col-md-5 mx-auto lila playfair mt-5'>{props.titulo}</h3>
      <p className='col-10 col-md-5 mx-auto'>{props.texto}</p>
      <p className='col-10 col-md-5 playfair mx-auto'><b>Ejemplo:{props.ejemplo1}</b></p>
      { props.masInfo !== "" ? <table className='col-10 col-md-5 mx-auto lila'>
        <tbody>
        <tr className=''>
            <p className='py-2 f2'>MasInfo</p>
            <p className="py-2 ">{props.masInfo}</p>
        </tr>
        {props.ejemplo2 !== "" ? <div>
          <tr className=''>
            <td className='col-10  text-left p-3'>
              <b className='negro playfair'>{props.ejemplo2.no}</b>
            </td>
            <td className='col-2 p-3'>
              <img className='' alt="no" src={require('../assets/img/no.png')} />
            </td>      
          </tr>
          <tr className=''>
            <td className='col-10  text-left p-3'>
              <b className='negro playfair text-left'>{props.ejemplo2.si}</b>
            </td>
            <td className='col-2 p-3'>
              <img className='' alt="si" src={require('../assets/img/si.png')} />
            </td>      
          </tr>
        </div>:""}
        </tbody>
      </table> : "" }



    </div>
  );
}

export default Herramienta;

