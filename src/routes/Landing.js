import React, { useState, useCallback, useEffect } from 'react';
import '../assets/css/Landing.css';
import ReactGa from 'react-ga';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import DocumentMeta from 'react-document-meta';

function Landing() {
  const meta = {
    title: 'Hablemos de cómo hablamos',
    description: 'Una experiencia interactiva para cuestionar un poco el lenguaje',
    canonical: 'https://lenguajeinclusivo.fund.ar/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'lenguaje,inclusividad'
      }
    }
  };

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
      <DocumentMeta {...meta}>
    <div className="App bg-crema">
      <div className='container'>
        <div id="landing1" >
          {/* <div className='row'>
            <img alt="?" className="col-3 col-md-1 mt-8 mx-auto" src={require("../assets/img/interrogacion.png")}/>
          </div> */}
          <div className="row justify-content-center mt-15">
            <div className="col-12 col-md-5 text-center mx-auto">
              <h1 className='negro col-10 col-xl-6 mx-auto f3 mt-45'><b>Hablem<span className="lila">o</span>s de <span className='under-lila'>cómo</span></b> <span className='playfairItalic'>hablamos</span></h1>
              <p className='nota playfair col-4 col-md-6 offset-4 offset-md-0 offset-md-7 col-md-2 opacity-05'>Del lat. <span className='playfairItalic'>fabulāri. <br/> intr.</span> <span className='lila'>Emitir palabras</span></p>
              <p id="bajada" className="playfair mt-5 col-8 mx-auto animate__animated animate__fadeIn">Un experimento para  <span className='under-lila'>hacer <span className='aktive'>consciente</span> eso que hacemos muchas veces sin pensar:<span className='playfairItalic'> hablar</span></span></p>
            </div>
          </div>
        </div>
        <div className='row'><img id="home1" className='col-10 wiggle-md' src={require("../assets/img/illus/home1.png")} /></div>
        <div className='row'><img id="home2" className='col-10 wiggle-md' src={require("../assets/img/illus/home2.png")} /></div>
        <div className='row hide-sm'><img id="home3" className='col-10 wiggle-md' src={require("../assets/img/illus/home3.png")} /></div>
        <img id="filledStar" className='wiggle hide-md' src={require('../assets/img/filledStar.png')}/>
        <div id='landing2'>
          <div className="row">
            <p id="feminismo" className="col-9 mx-auto text-center playfair my-5 my-md-1 animate__animated animate__fadeIn">El <b className="aktiv lila bg-white">feminismo</b> nos invita a <span className='under-lila'>cuestionar mucho</span> de nuestro día a día: estereotipos, acciones cotidianas e incluso nos invita a <span className='playfairItalic' >preguntarnos por <span className='under-lila'>cómo hablamos</span></span></p>
          </div>            
            <img  className='homeMisc hide-sm bocaGris pulse' id=" " src={require('../assets/img/bocaGris.png')}/>      
          <div >
          </div>
        </div>
        <div id="landing3" >
          <div className="">
            <br/>
            <p id="lenguaje" className="col-9 mt-2 mx-auto text-center playfair animate__animated animate__fadeIn"> El <b className='lila bg-blanco aktiv'>lenguaje</b> no solo representa la realidad: la construye.
            <br/><br/><span className='bg-white aktiv'>No es neutral</span> y no es ajeno a lo que nos pasa como sociedad</p>            
            <p id="cuestionasmobile" className="col-11 mt-5 mx-auto offset-1 border-lila lila text-center">Si a veces <span className='under-lila'>cuestionás</span> un poco la lengua, <span className='playfairItalic'>pero no te sale escribir con la e</span>, esto es para vos</p>
          </div>
          <img id="bocaRosa" className='homeMisc wiggle' src={require('../assets/img/bocaRosa.png')}/>
          
        </div>
        <div id="rowquestionas" className='row'>
          <p id="cuestionasdesk" className="col-5 col-xl-4 mt-md-35 mt-xl-15 mb-5 mx-auto offset-1 border-lila lila text-center">Si a veces <span className='under-lila'>cuestionás</span> un poco la lengua, <span className='playfairItalic'>pero no te sale escribir con la e</span>, esto es para vos</p>
        </div>
        {/* QUIZ */}
        <div id="quiz" className='gradBlack blanco'>
          <div className='landing-center mb-md-15'>
            {/* <div className="row justify-content-center">
              <b className=" mt-xl-30 mx-auto text-center py-1 f06 col-10 lila">EXPERIENCIA INTERACTIVA</b>
            </div> */}
            <div className="row justify-content-center">
              <a href="/quiz"><h2 className="mt-35 mt-md-5 col-9 col-md-4 mx-auto text-center blanco">Descubrí tu propio lenguaje <span className='playfairItalic pb-2'>inclusivo</span></h2></a>
            </div>
            <div className="row justify-content-center">
              {/* <span className="hide-md col-9 mt-5 mx-auto text-center lila f1-5">¡Ponete a prueba!</span> */}
              <p className="col-9 mt-5 col-md-4 mx-auto text-center playfair pb-2 "><span className="lila aktiv">¡Ponete a prueba! </span>Encontrá las expresiones excluyentes y reemplazalas con términos que no hablen <span className='playfairItalic'>solo</span> de los varones</p>
            </div>
            <div className="row">  
              <a className="col-12 mt-5 mx-auto text-center playfair pulse" href="/quiz"><img alt="." className="flechaRedir" src={require("../assets/img/flechaBlanca.png")}/></a>
            </div>
          </div>
        </div>
        {/* CAJA DE HERRAMIENTAS */}
        <div id="caja" className='gradRP'>
          <div className='landing-center'>

            <div className="row justify-content-center">
              <a href="/caja-de-herramientas"><h2 className="mt-35 mt-md-5 mt-xl-30 col-9 col-md-4 mx-auto text-center blanco pb-5">Caja de <span className='playfairItalic'>herramientas</span></h2></a>
            </div>
            <div className="row justify-content-center">
              <p className="col-9 col-md-4 mt-1 mx-auto text-center playfair"><b>Recursos gramaticales y no tan gramaticales para crear tu propio lenguaje <span className='playfairItalic'>inclusivo</span></b></p>
            </div>
            <div className='row'>  
              <a className="pulse col-12 mt-5 mx-auto text-center playfair" href="/caja-de-herramientas"><img alt="." className="flechaRedir" src={require("../assets/img/flechaBlanca.png")}/></a>
            </div>
          </div>
        </div>
        {/* TEXTO EXPOSITIVO */}
        <div id="texto" className='gradWP'>
          <div className='landing-center'>
          <div className="row">
            <a className="mt-35 mt-md-5 mt-xl-40 " href="/que-sentido-tiene-el-lenguaje-inclusivo"><h2 className="col-9 mx-auto text-center  lila pb-5">¿Qué <span className='playfairItalic'>sentido</span> tiene el lenguaje inclusivo?</h2></a>
            <p className="col-9 mt-1 mx-auto text-center playfair"><b>Aportes lingüísticos para una discusión <span className='playfairItalic'>incómoda</span></b></p>
          </div>
          <div className='row'>  
            <a className="col-12 mt-5 mx-auto text-center playfair pulse" href="/que-sentido-tiene-el-lenguaje-inclusivo"><img alt="." className="flechaRedir" src={require("../assets/img/flechaNegra.png")}/></a>
          </div>
        </div>
        </div>
      </div>
    </div>
    </DocumentMeta>
  );
}

export default Landing;
