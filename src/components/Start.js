import React from 'react';
import '../assets/css/Quiz.css';
const Start = (props) => {
  const handleStart=props.handleStart;
  return(
    <div className='full bg-negro blanco' >
      <div className='container'>
        {/* <div className='title'>
          <div className='row'>
            <span className='col-4 mt-15 mx-auto text-center bg-lila negro f06'>QUIZ INTERACTIVO</span>
          </div>
          <div className='row'>
            <h2 className='col-6 mt-2 mx-auto text-center blanco under-blanco pb-3'>Descubrí tu <span className='playfair'>personalidad</span> gramatical</h2>
          </div>
        </div> */}
        <div className='row'>
          <div className='col-9 col-md-4 mt-15 mt-md-25 text-center mx-auto'>
            <span className='lila'>¡Ponete a prueba! </span>
            <span className='playfair blanco'>Intervení en situaciones cotidianas y poné en práctica lo que sabés y lo que aprendiste en la Caja de Herramientas.</span>
            <p className='mt-1 lila under-lila py-2'>Encontrá las expresiones excluyentes y reemplazalas con una opción más inclusiva.</p>
          </div>
          
          <div className='hide-sm col-md-4 bg-azul mt-25'>aca va gif</div>
        </div>
        <div className='row '>
          <a className='col-1 mt-2 mx-auto lila f2 text-center' onClick={handleStart}>↓</a>
        </div>
      </div>
    </div>
  );
}

export default Start;