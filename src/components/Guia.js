import React, { useState, useCallback, useEffect } from 'react';

function Guia(props) {
  return (
    <div className='col-11 col-md-4 mx-auto' >
        <h1 className='playfair blanco f15 guiaN text-center'>{props.number}</h1>
        <div className='guia mx-auto p-3 p-md-5 text-center'>
          <h2 className='playfair py-5 under-negro'>{props.titulo}</h2>
          <p className='mt-5'>{props.texto}</p>
        </div>
    </div>
  );
}

export default Guia;
