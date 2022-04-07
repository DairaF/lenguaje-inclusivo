import React from 'react';
import '../assets/css/Quiz.css';
import Menu from './Menu';
const Start = (props) => {
  const handleStart=props.handleStart;
  return(
    <div className='full bg-negro blanco' >
    <Menu/>
      <div className='container'>
        <div  id="start-content" className='row justify-content-center justify-content-md-between'>
          <div id="startIntro" className='col-9 col-md-4 mt-15 mt-md-5 mx-auto'>
            <span className='lila'>¡Ponete a prueba! </span>
            <span className='playfair blanco'>Intervení en situaciones cotidianas y poné en práctica lo que sabés y lo que aprendiste en la Caja de Herramientas.</span>
            <p className='mt-1 lila under-lila py-2 pb-md-5'>Encontrá las expresiones excluyentes y reemplazalas con una opción más inclusiva.</p>
          </div>
          <div className='col-11 col-md-4 mt-2 mt-md-10 gif'>
          </div>
        </div>
        <div className='row '>
          <a id="start-quiz" className='col-2 p-md-4 mt-2 mx-auto lila f2 text-center' onClick={handleStart}><span>Empezar</span><img alt="." className="" src={require("../assets/img/flechaBlanca.png")}/></a>
        </div>
      </div>
    </div>
  );
}

export default Start;