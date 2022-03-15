import React, { useState, useCallback, useEffect } from 'react';
import '../assets/css/Landing.css';
import ReactGa from 'react-ga'

function Landing() {
  useEffect(()=>{
    ReactGa.initialize('G-BQYF4G0HMV')
    ReactGa.pageview(window.location.pathname + window.location.search)
    },[])
    
    return (
    <div className="App bg-crema">
      <div className='container'>
        <div id="landing1">
          <div className='row'>
            <img alt="?" className="col-3 col-md-1 mx-auto" src={require("../assets/img/interrogacion.png")}/>
          </div>
          <div className="row justify-content-center">
            <div className="col-9 col-md-5 text-center mx-auto">
              <h1 className='mt-5'><b>Hablem<span className="lila">o</span>s de <span className='under-lila'>cómo</span></b> <span className='playfairItalic'>hablamos</span></h1>
              <p className='nota playfair col-4 col-md-6 offset-4 offset-md-0 offset-md-7 col-md-2 opacity-05'>Del lat. <span className='playfairItalic'>fabulāri. <br/> intr.</span> <span className='lila'>Emitir palabras</span></p>
              <h3 id="bajada" className="playfair mt-5">Un experimento para  <span className='under-lila'>hacer <span className='aktive'>consciente</span> eso que hacemos muchas veces sin pensar:<span className='playfairItalic'> hablar</span></span></h3>
            </div>
          </div>
        </div>
        <div className='row'><img id="home1" className='col-10' src={require("../assets/img/illus/home1.png")} /></div>
        <div className='row'><span id="" className='col-2 floatL blanco f5'>¿</span><img id="home2" className='col-10' src={require("../assets/img/illus/home2.png")} /></div>
        <div className='row'><img id="home3" className='col-10' src={require("../assets/img/illus/home3.png")} /><span className='col-2 mt-25 blanco f5'>X</span></div>
        <div className='landing2'>
          <img id="bocaGris" className='homeMisc hide-sm' src={require('../assets/img/bocaGris.png')}/>
          <img id="bubWiggle" className='homeMisc hide-sm' src={require('../assets/img/bubWiggle.png')}/>
          <div className="row">
            <span className='mt-45 nota playfair offset-3 col-4 opacity-05 negro'><span className='bg-white'>El feminismo</span> es un movimiento político y social, una teoría política y una perspectiva filosófica</span>
            <div className='offset-4 mt-2 col-4'><img className='linea' src={require('../assets/img/linea.png')} /></div>
            <p id="feminismo" className="col-9 mx-auto text-center playfair">El <span className="aktiv lila bg-white">feminismo</span> nos invita a <span className='under-lila'>cuestionar mucho</span> de nuestro día a día: estereotipos, acciones cotidianas e incluso nos invita a <span className='playfairItalic' >preguntarnos por <span className='under-lila'>cómo hablamos</span></span></p>
          </div>      
        </div>
        <img id="filledStar" className='homeMisc' src={require('../assets/img/filledStar.png')}/>
        <p className='f3 col-12 blanco text-center hide-md my-5'><b>cómo <br/> hablamos</b></p>
        <img id="star" className='homeMisc hide-md' src={require('../assets/img/star.png')}/>
        <img id="lineaLengua" className='homeMisc hide-sm' src={require('../assets/img/lineaLengua.png')}/>
        <div id="landing3">
          <div className="row">
            <br/>
            <span className='mt-25 nota playfair offset-3 col-4 opacity-05 negro'>Facultad del ser humano de expresarse y comunicarse con los demás</span>
            <div className='offset-4 mt-2 col-4'><img className='linea' src={require('../assets/img/linea.png')} /></div>
            <p id="lenguaje" className="col-9 mt-2 mx-auto text-center playfair"> El <span className='lila bg-blanco aktiv'>lenguaje</span> no solo representa la realidad: la construye
            <br/><span className='bg-white aktiv'>No es neutral</span> y no es ajeno a lo que nos pasa como sociedad</p>            
            <p id="cuestionas" className="col-10 mt-5 offset-1 border-lila lila text-center">Si a veces <span className='under-lila'>cuestionás</span> un poco la lengua, <span className='playfairItalic'>pero no te sale escribir con la e</span>, esto es para vos</p>
          </div>
          <img id="bocaRosa" className='homeMisc' src={require('../assets/img/bocaRosa.png')}/>
        </div>
          <p id="noNeutral" className='f3 col-12 blanco text-center'><b>El lenguaje no es neutral</b></p>
        {/* QUIZ */}
        <div id="quiz" className='bg-negro blanco'>
          <div className="row justify-content-center">
            <span className="mt-10 mx-auto text-center py-1 bg-lila f06 col-4 col-md-2 negro">EXPERIENCIA INTERACTIVA</span>
          </div>
          <div className="row justify-content-center">
            <h2 className="col-9 col-md-4 mt-5 mx-auto text-center ">Descubrí tu propio lenguaje <span className='playfairItalic under-lila pb-2'>inclusivo</span></h2>
          </div>
          <div className="row justify-content-center">
            <span className="col-9 mt-5 mx-auto text-center lila ">¡Ponete a prueba!</span>
            <p className="col-9 col-md-4 mx-auto text-center playfair under-blanco pb-2">Encontrá las expresiones excluyentes y reemplazalas con términos que no hablen <span className='playfairItalic'>solo</span> de los varones</p>
          </div>
          <div className="row">  
            <a className="col-2 mt-5 mx-auto text-center playfair" href="/quiz"><img alt="." className="logo" src={require("../assets/img/flechaBlanca.png")}/></a>
          </div>
        </div>
        {/* CAJA DE HERRAMIENTAS */}
        <div id="caja" className='bg-lila'>
          <div className="row">
            <span className="col-4 col-md-2 mt-25 mt-md-10 mx-auto text-center bg-negro py-1 f06 col-3 blanco">RECURSOS</span>
          </div>
          <div className="row justify-content-center">
            <h2 className="col-9 col-md-4 mt-5 mx-auto text-center blanco under-negro pb-5">Caja de <span className='playfairItalic'>herramientas</span></h2>
          </div>
          <div className="row justify-content-center">
            <p className="col-9 col-md-4 mt-5 mx-auto text-center playfair"><b>Recursos gramaticales y no tan gramaticales para hacer que tus textos sean un poco más <span className='playfairItalic'>inclusivos</span></b></p>
          </div>
          <div className='row'>  
            <a className="col-2 mt-5 mx-auto text-center playfair" href="/caja-de-herramientas"><img alt="." className="logo" src={require("../assets/img/flechaBlanca.png")}/></a>
          </div>
        </div>
        {/* TEXTO EXPOSITIVO */}
        <div id="texto" className=' bg-gris'>
          <div className="row">
            <span className="mt-25 mt-md-15 mx-auto text-center bg-negro py-1 f06 col-3 blanco">RECURSOS</span>
          </div>
          <div className="row">
            <h2 className="col-9 mt-5 mx-auto text-center blanco under-negro pb-5">¿Qué <span className='playfairItalic'>sentido</span> tiene el lenguaje inclusivo?</h2>
            <p className="col-9 mt-5 mx-auto text-center playfair"><b>Aportes lingüísticos para una discusión <span className='playfairItalic'>incómoda</span></b></p>
          </div>
          <div className='row'>  
            <a className="col-2 mt-5 mx-auto text-center playfair" href="/texto-expositivo"><img alt="." className="logo" src={require("../assets/img/flechaBlanca.png")}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
