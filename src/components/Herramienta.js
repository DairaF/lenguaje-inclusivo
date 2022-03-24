import React, { useState, useEffect } from 'react';
function Herramienta(props) {
  return (
    <div className='container justify-content-center text-center mb-10'>
      <h3 id={props.id} className='col-10 col-md-7 mx-auto lila playfair mt-5 mb-3'><b>{props.titulo}</b></h3>
      <p className='col-10 col-md-7 mx-auto'>{props.texto}</p>
      <p className='col-10 col-md-7 playfair mx-auto'><b>Ejemplo: {props.ejemplo1}</b></p>
      { props.masInfo !== "" ? <table className='col-10 col-md-7 mx-auto lila'>
        <tbody className=' my-4'>
        <tr>
          <td className="p-4 p-md-5">
            <b>{props.masInfo}</b>
          </td>
        </tr>
        {props.ejemplo2 !== "" ? <div>
          <tr className=''>
            <td className='col-10 col-md-12 text-left p-3'>
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

