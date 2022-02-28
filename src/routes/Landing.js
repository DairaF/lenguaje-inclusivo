import React, { } from 'react';

function Landing() {
    return (
    <div className="App bg-crema">
      <div className='fullHeight container'>
        <div className="row">
          <h1 className="col-9 mx-auto text-center mt-45">Hablem<span className="rosita">o</span>s de <span className='under-rosita'>como</span> <span className='playfairItalic'>hablamos</span></h1>
          <h3 className="col-9 mx-auto text-center playfair mt-5">Un experimento para  <span className='under-rosita'>hacer <span className='aktive'>consciente</span> eso que hacemos muchas veces sin pensar:<span className='playfairItalic'> hablar</span>.</span></h3>
          <span className='nota playfair offset-4 col-3 opacity-05'>Del lat. <span className='playfairItalic'>fabulāri. intr.</span> <span className='rosita'>Emitir palabras.</span></span>
        </div>
      </div>
      <div className='fullHeight container'>
        <div className="row">
          <span className='mt-45 nota playfair offset-3 col-4 opacity-05 negro'><span className='bg-white'>El feminismo</span> es un movimiento político y social, una teoría política y una perspectiva filosófica .</span>
          <p className="col-9 mt-5 mx-auto text-center playfair">El <span className="aktiv rosita">feminismo</span> nos invita a cuestionar mucho de nuestro día a día: estereotipos, acciones cotidianas e incluso nos invita a <span className='playfairItalic' >preguntarnos por cómo hablamos</span>.</p>
        </div>      
      </div>
      <div className='fullHeight container'>
        <div className="row">
          <br/>
          <span className='mt-25 nota playfair offset-3 col-4 opacity-05 negro'>Facultad del ser humano de expresarse y comunicarse con los demás.</span>
          <p className="col-9 mt-5 mx-auto text-center playfair"> El <span className='rosita bg-blanco aktiv'>lenguaje</span> no solo representa la realidad: la construye. </p>
          <p className="col-9 mt-5 mx-auto text-center playfair"><span className='bg-white aktiv'>No es neutral</span> y no es ajeno a lo que nos pasa como sociedad.</p>
          <br/>
          <p className="col-10 mt-5 offset-1 border-rosita rosita">Si a veces <span className='under-rosita'>cuestionás</span> un poco la lengua, pero no te sale escribir con la e, esto es para vos. </p>
        </div>
      </div>
      <div className='fullHeight'>
        <h3>Quiz Interactivo</h3>
        <h1>Descubrí tu personalidad gramatical</h1>
        <p>¡Ponete a prueba! Encontrá las expresiones excluyentes y reemplazalas con términos que no hablen solo de los varones. </p>
        <a href="/quiz">ir a quiz</a>
      </div>
      <div className='fullHeight'>
        <h1>Caja de Herramientas</h1>
        <p>Te dejamos herramientas útiles para expresarte en escritos, exposiciones o en la vida cotidiana.</p>
        <a href="/caja-de-herramientas">ir a caja de herramientas</a>
      </div>
      <div className='fullHeight'>
        <h1>¿Qué sentido tiene el “lenguaje inclusivo”? </h1>
        <p>Aportes lingüísticos para una discusión incómoda</p>
        <a href="/texto-expositivo">Ver más</a>
      </div>
    </div>
  );
}

export default Landing;
