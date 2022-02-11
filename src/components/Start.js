import React from 'react';

const Start = (props) => {
  const handleStart=props.handleStart;
  return(
    <div >
        <h3>Cómo jugar</h3>
        <p>Intervení en situaciones cotidianas y poné en práctica lo que sabés y lo que aprendiste en la Caja de Herramientas.</p>
        <p>Interactuá con los textos para encontrar expresiones excluyentes y reemplazalas con una opción más inclusiva.</p>
        <button onClick={handleStart}>Comenzar</button>
    </div>
  );
}

export default Start;