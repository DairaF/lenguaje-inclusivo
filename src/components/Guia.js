import React, { useState, useCallback, useEffect } from 'react';

function Guia(props) {
  return (
    <div >
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
    </div>
  );
}

export default Guia;
