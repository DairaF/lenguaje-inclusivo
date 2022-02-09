import React from 'react';

const Start = (props) => {
  const handleStart=props.handleStart;
  return(
    <div >
        <p>¡Ponete a prueba! Encontrá las expresiones excluyentes y reemplazalas con términos que no hablen solo de los varones. Descubrí tu personalidad gramatical.</p>
        <p>Intervení en situaciones cotidianas y poné en práctica lo que sabés y lo que aprendiste en la Caja de Herramientas.</p>
        <p>Interactuá con los textos para encontrar expresiones excluyentes y reemplazalas con una opción más inclusiva.</p>
        <button onClick={handleStart}>Comenzar</button>
    </div>
  );
}

export default Start;