import React, { useState, useEffect } from 'react';
function Herramienta(props) {
  console.log(props.id);
  return (
    <div className='container justify-content-center text-center my-5'>
      <h3 id={props.id} className='col-10 col-md-5 mx-auto lila playfair mt-5'>{props.titulo}</h3>
      <p className='col-10 col-md-5 mx-auto'>{props.texto}</p>
      <p className='col-10 col-md-5 playfair mx-auto'><b>Ejemplo:{props.ejemplo1}</b></p>
      { props.masInfo !== " " ? <table className='col-10 col-md-5 mx-auto lila'>
        <tr className=''>
            <h3 className='py-2 ml-10'>MasInfo</h3>
            <p className="py-2 ml-15">{props.masInfo}</p>
        </tr>
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
      </table> : "" }



    </div>
  );
}

export default Herramienta;

