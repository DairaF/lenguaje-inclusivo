import React from 'react';

const Start = (props) => {
  const handleStart=props.handleStart;
  return(
    <div className='fullHeight bg-negro blanco container' >
      <div className='row '>
        <span className='col-4 mt-25 mx-auto text-center bg-azul negro f06'>QUIZ INTERACTIVO</span>
      </div>
      <div className='row'>
        <h2 className='col-6 mt-5 mx-auto text-center celeste f2'>Descubrí <br/> tu propio lenguaje <span className='playfair under-azul'>inclusivo</span></h2>
      </div>
      <div className='row'>
        <p className='col-9 mt-5 mx-auto text-center azul'>¡Ponete a prueba!</p>
        </div>
      <div className='row'>
        <p className='col-9 mt-1 mx-auto text-center playfair'>Encontrá las expresiones excluyentes y reemplazalas con <span className='under-blanco'>términos que no hablen <span className='playfairItalic'>solo</span> de los varones</span>.</p>
      </div>
      <div className='row'>
        <a className='col-1 mt-25 mx-auto azul f2' onClick={handleStart}>↓</a>
      </div>
    </div>
  );
}

export default Start;