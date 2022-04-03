import React, { useState, useCallback, useEffect } from 'react';
import '../assets/css/Landing.css';
import ReactGa from 'react-ga';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
function Landing() {
  useEffect(()=>{
    ReactGa.initialize('G-BQYF4G0HMV')
    ReactGa.pageview(window.location.pathname + window.location.search)
    },[])
    

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <div className="App bg-crema">
      <div className='container'>
        <div id="landing1">
          <div className='row'>
            <img alt="?" className="col-3 col-md-1 mt-8 mx-auto" src={require("../assets/img/interrogacion.png")}/>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-5 text-center mx-auto">
              <h1 className='mt-5 negro col-10 col-md-12 mx-auto'><b>Hablem<span className="lila">o</span>s de <span className='under-lila'>cómo</span></b> <span className='playfairItalic'>hablamos</span></h1>
              <p className='nota playfair col-4 col-md-6 offset-4 offset-md-0 offset-md-7 col-md-2 opacity-05'>Del lat. <span className='playfairItalic'>fabulāri. <br/> intr.</span> <span className='lila'>Emitir palabras</span></p>
              <p id="bajada" className="playfair mt-5 col-8 mx-auto">Un experimento para  <span className='under-lila'>hacer <span className='aktive'>consciente</span> eso que hacemos muchas veces sin pensar:<span className='playfairItalic'> hablar</span></span></p>
            </div>
          </div>
        </div>
        <div className='row'><img id="home1" className='col-10' src={require("../assets/img/illus/home1.png")} /></div>
        <div className='row'><b id="" className='col-2 floatL blanco f6'>¿</b><img id="home2" className='col-10' src={require("../assets/img/illus/home2.png")} /></div>
        <div className='row hide-sm'><img style={{ transform: `translateY(-${offsetY / 5}px)` }} id="home3" className='col-10' src={require("../assets/img/illus/home3.png")} /><b style={{ transform: `translateY(-${offsetY * 0.8}px)` }} className=' hide-sm col-2 mt-25 blanco f6'>X</b></div>
        <div className='landing2'>
          <img id="bocaGris" className='homeMisc hide-sm' src={require('../assets/img/bocaGris.png')}/>
          <img id="bubWiggle" style={{ transform: `translateY(-${offsetY * 1}px)` }} className='homeMisc hide-sm' src={require('../assets/img/bubWiggle.png')}/>
          <div className="row">
            <p id="feminismo" className="col-9 mx-auto text-center playfair">El <b className="aktiv lila bg-white">feminismo</b> nos invita a <span className='under-lila'>cuestionar mucho</span> de nuestro día a día: estereotipos, acciones cotidianas e incluso nos invita a <span className='playfairItalic' >preguntarnos por <span className='under-lila'>cómo hablamos</span></span></p>
          </div>      
        </div>
        <img style={{ transform: `translateY(-${offsetY * 0.1}px)` }} id="filledStar" className='homeMisc' src={require('../assets/img/filledStar.png')}/>
        <h2 id="comoHablamos" className='f3 col-12 blanco text-center hide-md my-5'>cómo <br/> hablamos</h2>
        <img style={{ transform: `translateY(-${offsetY * 0.2}px)` }} id="star" className='homeMisc hide-md' src={require('../assets/img/star.png')}/>
        <img id="lineaLengua" className='homeMisc hide-sm' src={require('../assets/img/lineaLengua.png')}/>
        <div id="landing3">
          <div className="row">
            <br/>
            <p style={{ transform: `translateY(-${offsetY * 0.3}px)` }} id="lenguaje" className="col-9 mt-2 mx-auto text-center playfair"> El <b className='lila bg-blanco aktiv'>lenguaje</b> no solo representa la realidad: la construye.
            <br/><span className='bg-white aktiv'>No es neutral</span> y no es ajeno a lo que nos pasa como sociedad</p>            
            <p style={{ transform: `translateY(-${offsetY * 0.2}px)` }} id="cuestionas" className="col-10 mt-5 offset-1 border-lila lila text-center">Si a veces <span className='under-lila'>cuestionás</span> un poco la lengua, <span className='playfairItalic'>pero no te sale escribir con la e</span>, esto es para vos</p>
          </div>
          <img id="bocaRosa" style={{ transform: `translateY(-${offsetY / 5}px)` }} className='homeMisc' src={require('../assets/img/bocaRosa.png')}/>
        </div>
          <p style={{ transform: `translateY(-${offsetY *0.1}px)` }} id="noNeutral" className='f3 col-12 blanco text-center'><b>El lenguaje no es neutral</b></p>
        {/* QUIZ */}
        <div id="quiz" className='bg-negro blanco'>
          <div className="row justify-content-center">
            <b className="mt-15 mt-md-10 mt-xl-30 mx-auto text-center py-1 f06 col-10 lila">EXPERIENCIA INTERACTIVA</b>
          </div>
          <div className="row justify-content-center">
            <a href="/quiz"><h2 className="col-9 col-md-4 mt-4 mx-auto text-center ">Descubrí tu propio lenguaje <span className='playfairItalic under-lila pb-2'>inclusivo</span></h2></a>
          </div>
          <div className="row justify-content-center">
            {/* <span className="hide-md col-9 mt-5 mx-auto text-center lila f1-5">¡Ponete a prueba!</span> */}
            <p className="col-9 mt-5 col-md-4 mx-auto text-center playfair pb-2"><span className="lila aktiv">¡Ponete a prueba! </span>Encontrá las expresiones excluyentes y reemplazalas con términos que no hablen <span className='playfairItalic'>solo</span> de los varones</p>
          </div>
          <div className="row">  
            <a className="col-12 mt-5 mx-auto text-center playfair" href="/quiz"><img alt="." className="flechaRedir" src={require("../assets/img/flechaBlanca.png")}/></a>
          </div>
        </div>
        {/* CAJA DE HERRAMIENTAS */}
        <div id="caja" className='bg-lila'>
          <div className="row">
            <b className="col-4 col-md-2 mt-25 mt-md-10 mt-xl-30 mx-auto text-center py-1 f06 col-3 negro">RECURSOS</b>
          </div>
          <div className="row justify-content-center">
            <a href="/caja-de-herramientas"><h2 className="col-9 col-md-4 mt-3 mx-auto text-center blanco pb-5">Caja de <span className='playfairItalic'>herramientas</span></h2></a>
          </div>
          <div className="row justify-content-center">
            <p className="col-9 col-md-4 mt-1 mx-auto text-center playfair"><b>Recursos gramaticales y no tan gramaticales para crear tu propio lenguaje <span className='playfairItalic'>inclusivo</span></b></p>
          </div>
          <div className='row'>  
            <a className="col-12 mt-5 mx-auto text-center playfair" href="/caja-de-herramientas"><img alt="." className="flechaRedir" src={require("../assets/img/flechaBlanca.png")}/></a>
          </div>
        </div>
        {/* TEXTO EXPOSITIVO */}
        <div id="texto" className=' bg-gris'>
          <div className="row">
            <b className="mt-25 mt-md-15 mt-xl-40 mx-auto text-center py-1 f06 col-4 col-md-2 negro">RECURSOS</b>
          </div>
          <div className="row">
            <a className="" href="/texto-expositivo"><h2 className="col-9 mt-3 mx-auto text-center  lila pb-5">¿Qué <span className='playfairItalic'>sentido</span> tiene el lenguaje inclusivo?</h2></a>
            <p className="col-9 mt-1 mx-auto text-center playfair"><b>Aportes lingüísticos para una discusión <span className='playfairItalic'>incómoda</span></b></p>
          </div>
          <div className='row'>  
            <a className="col-12 mt-5 mx-auto text-center playfair" href="/texto-expositivo"><img alt="." className="flechaRedir" src={require("../assets/img/flechaNegra.png")}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
