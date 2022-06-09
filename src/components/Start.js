import React from 'react';
import '../assets/css/Quiz.css';
import Menu from './Menu';
const Start = (props) => {
  const handleStart=props.handleStart;
  return(
    <div className='full gradBlack blanco' >
    <Menu/>
      <div className='container'>
        <div  id="start-content" className='row justify-content-center justify-content-md-between '>
          <div className='hide-md h-md-100vh'>
            <h2 className='col-9 hide-md col-8 text-center mx-auto mt-25 mb-5 f1-8'>Descubrí tu propio lenguaje <br/><span className='playfairItalic'>inclusivo</span></h2>
            <p className='lila playfair col-8 text-center mx-auto'>¡Ponete a prueba! </p>
            <p className='blanco playfair col-8 text-center mx-auto'>Encontrá las expresiones excluyentes y reemplazalas con términos que no hablen solo de los varones.</p>
            <img className='my-3 ml-45 ' alt="flechita" src={require("../assets/img/flechaDown.png")} />
            <p className='lila col-8 text-center mx-auto'>Encontrá las expresiones excluyentes y reemplazalas con una opción más inclusiva.</p>
          </div>
          <div className='hide-md w-100vw pt-5' >
            <video className='videoTag w-80vw ml-7' autoPlay loop muted>
                <source src={require ('../assets/img/mobile.mp4')} type='video/mp4' />
            </video>          
            <a onClick={handleStart}><img className='my-3 ml-45 hide-md' alt="flechita" src={require("../assets/img/flechaDown.png")} /></a>
          </div>

          <div id="startIntro" className='col-9 col-md-3 mt-15 mt-md-5 mx-auto hide-sm f1-2'>
            <span className='lila'>¡Ponete a prueba! </span>
            <span className='playfair blanco'>Intervení en situaciones cotidianas y poné en práctica lo que sabés y lo que aprendiste en la Caja de Herramientas.</span>
            <p className='mt-1 lila under-lila py-2 pb-md-3 f1 playfair'>Encontrá las expresiones excluyentes y reemplazalas con una opción más inclusiva.</p>

            <a className='mt-1 py-2 pb-md-5 f1 blanco row hide-sm' onClick={handleStart}>
              <span className='hide-sm col-3 text-left floatL p-0'>Empezar</span>
              <img alt="." className="hide-sm pulse col-3 hide-sm ml-15 floatL sigStart" src={require("../assets/img/flechaBlanca.png")}/>
            </a>

          </div>
           <div className='col-11 col-md-6 mt-5 mt-md-10 hide-sm'>
           <video className='videoTag col-11' autoPlay loop muted>
                <source src={require ('../assets/img/desk.mp4')} type='video/mp4' />
            </video>
          </div> 
        </div>

      </div>
    </div>
  );
}

export default Start;