import React, { useState, useCallback, useEffect } from 'react';

function Guia(props) {
  return (
    <div >
        <h1>{props.key}</h1>
        <div className='bg-lila'>
          <h3>{props.titulo}</h3>
          <p>{props.texto}</p>
        </div>
    </div>
  );
}

export default Guia;
