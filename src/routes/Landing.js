import React, { } from 'react';

function Landing() {
    return (
    <div className="App bg-crema">
      <div className='fullHeight container'>
        <div className='row'>
          <img alt="?" className="col-3 mx-auto" src={require("../assets/img/interrogacion.png")}/>
        </div>
        <div className="row">
          <img alt="e" className="misc col-2 offset-8 mt-3" src={require("../assets/img/misc-rombo.png")}/>
        </div>
        <div className="row">
          <img alt="e" className="misc col-2 mt-25" src={require("../assets/img/misc-circulo.png")}/>
          <div className="col-9 text-center">
            <h1><b>Hablem<span className="lila">o</span>s de <span className='under-lila'>como</span></b> <span className='playfairItalic'>hablamos</span></h1>
            <span className='nota playfair col-4 opacity-05'>Del lat. <span className='playfairItalic'>fabulāri. <br/> intr.</span> <span className='lila'>Emitir palabras.</span></span>
            <h3 className="playfair mt-5">Un experimento para  <span className='under-lila'>hacer <span className='aktive'>consciente</span> eso que hacemos muchas veces sin pensar:<span className='playfairItalic'> hablar</span>.</span></h3>
          </div>
        </div>
      </div>
      <b className='f10 blanco'>X</b>
      <div className='fullHeight container'>
        <div className="row">
          <span className='mt-45 nota playfair offset-3 col-4 opacity-05 negro'><span className='bg-white'>El feminismo</span> es un movimiento político y social, una teoría política y una perspectiva filosófica .</span>
          <p className="col-9 mt-5 mx-auto text-center playfair">El <span className="aktiv lila">feminismo</span> nos invita a cuestionar mucho de nuestro día a día: estereotipos, acciones cotidianas e incluso nos invita a <span className='playfairItalic' >preguntarnos por cómo hablamos</span>.</p>
        </div>      
      </div>
      <div className='fullHeight container'>
        <div className="row">
          <br/>
          <span className='mt-25 nota playfair offset-3 col-4 opacity-05 negro'>Facultad del ser humano de expresarse y comunicarse con los demás.</span>
          <p className="col-9 mt-5 mx-auto text-center playfair"> El <span className='lila bg-blanco aktiv'>lenguaje</span> no solo representa la realidad: la construye. </p>
          <p className="col-9 mt-5 mx-auto text-center playfair"><span className='bg-white aktiv'>No es neutral</span> y no es ajeno a lo que nos pasa como sociedad.</p>
          <br/>
          <p className="col-10 mt-5 offset-1 border-lila lila">Si a veces <span className='under-lila'>cuestionás</span> un poco la lengua, pero no te sale escribir con la e, esto es para vos. </p>
        </div>
      </div>
      <div className='fullHeight container bg-negro blanco'>
        <div className="row">
          <span className="mt-25 mx-auto text-center py-1 bg-lila f06 col-4 negro">QUIZ INTERACTIVO</span>
          <h2 className="col-9 mt-5 mx-auto text-center ">Descubrí tu propio lenguaje <span className='playfairItalic under-lila pb-2'>inclusivo</span></h2>
          <p className="col-9 mt-5 mx-auto text-center lila ">¡Ponete a prueba!</p>
          <p className="col-9 mx-auto text-center playfair under-blanco pb-2">Encontrá las expresiones excluyentes y reemplazalas con términos que no hablen <span className='playfairItalic'>solo</span> de los varones. </p>
        </div>
        <div className="row">  
          <a className="col-2 mt-5 mx-auto text-center playfair" href="/quiz"><img alt="." className="logo" src={require("../assets/img/flechaBlanca.png")}/></a>
        </div>
      </div>
      <div className='fullHeight container bg-lila'>
        <div className="row">
          <span className="mt-25 mx-auto text-center bg-negro py-1 f06 col-3 blanco">RECURSOS</span>
        </div>
        <div className="row">
          <h2 className="col-9 mt-5 mx-auto text-center blanco under-negro pb-5">Caja de <span className='playfairItalic'>herramientas</span></h2>
          <p className="col-9 mt-5 mx-auto text-center playfair"><b>Recursos gramaticales y no tan gramaticales para hacer que tus textos sean un poco más <span className='playfairItalic'>inclusivos</span></b></p>
        </div>
        <div className='row'>  
          <a className="col-2 mt-5 mx-auto text-center playfair" href="/caja-de-herramientas"><img alt="." className="logo" src={require("../assets/img/flechaBlanca.png")}/></a>
        </div>
      </div>
      <div className='fullHeight container bg-gris'>
        <div className="row">
          <span className="mt-25 mx-auto text-center bg-negro py-1 f06 col-3 blanco">RECURSOS</span>
        </div>
        <div className="row">
          <h2 className="col-9 mt-5 mx-auto text-center blanco under-negro pb-5">¿Qué <span className='playfairItalic'>sentido</span> tiene el lenguaje inclusivo? </h2>
          <p className="col-9 mt-5 mx-auto text-center playfair"><b>Aportes lingüísticos para una discusión <span className='playfairItalic'>incómoda</span></b></p>
        </div>
        <div className='row'>  
          <a className="col-2 mt-5 mx-auto text-center playfair" href="/texto-expositivo"><img alt="." className="logo" src={require("../assets/img/flechaBlanca.png")}/></a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
