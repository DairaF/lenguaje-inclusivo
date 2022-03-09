import React, { useState, useCallback, useEffect } from 'react';

function Guia(props) {
  return (
    <div >
        <h1 className='playfair blanco f15 guiaN text-center'>{props.number}</h1>
        <div className='bg-lila col-9 mx-auto p-5 text-center'>
          <h3 className='playfair py-5 under-negro'>{props.titulo}</h3>
          <p className='mt-5'>{props.texto}</p>
        </div>
    </div>
  );
}

export default Guia;
