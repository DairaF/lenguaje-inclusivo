import React, { useState } from 'react';
import guias from '../data/guias.json';
import Guia from './Guia';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const End = (props) => {
    const [page,setPage]=useState(0);
    let raeCounter = 0;
    let desdoblamientoCounter = 0;
    let morfemasCounter = 0;
    let idkCounter = 0;
    let prelativosCounter = 0;
    let sabstractoCounter = 0;
    let sColectivoCounter = 0;
    let results=props.fullArray;
    let realize = props.realize;
    let faveToolNumber = 0;
    let faveToolName = "";
    let sortResults = () => {
      results.forEach(result => { 
        if (result === 1) { raeCounter = raeCounter + 1 }
        else if (result === 2) { desdoblamientoCounter = desdoblamientoCounter+1}
        else if (result === 3) { morfemasCounter = morfemasCounter+1}
        else if (result === 4) { idkCounter = idkCounter+1}
        else if (result === 5) { prelativosCounter = prelativosCounter+1}
        else if (result === 6) { sabstractoCounter = sabstractoCounter+1}
        else if (result === 7) { sColectivoCounter = sColectivoCounter+1}
      });
      let recount = [raeCounter, desdoblamientoCounter, morfemasCounter, idkCounter, prelativosCounter, sabstractoCounter,sColectivoCounter ];
      findMostUsedTool(recount);
  }
  const findMostUsedTool = (recount) =>{
      let largest = 0;
      let largestIndex = 0;
      for(let i = 0; i<recount.length; i++){
        if(largest < recount[i]) {
          largest = recount[i];
          largestIndex = i;
        }
      }
      console.log("largest"+largest+"largest index"+largestIndex);
      faveToolNumber = largest;
      locateFaveToolName(largestIndex);
  }
  
  const locateFaveToolName = (toolIndex) =>{
    switch (toolIndex){
    case 0: faveToolName =  "Rae"; break;
    case 1: faveToolName =  "Desdoblamiento"; break;
    case 2: faveToolName =  "Nuevos morfemas"; break;
    case 3: faveToolName =  "No se"; break;
    case 4: faveToolName =  "Pronombres relativos"; break;
    case 5: faveToolName =  "Sustantivos abstractos"; break;
    case 6: faveToolName =  "Sustantivos Colectivos"; break;
    default:faveToolName =  "Unkown";
  }
  }

  const nextSlide = (direction) =>{
    direction === "neg" ? setPage(page-1) : setPage(page+1)
  }
  
  return(
    <div >
        {sortResults()}
        {/* <button onClick={()=>nextSlide("neg")} > izq </button>
        <button onClick={()=>nextSlide("pos")} > der </button>
        {page === 0 && <p>Estamos procesando tus respuestas para saber cómo hablás.</p> } */}
        {page === 0 && 
        <div>
        {/* <Swiper
        loop={false}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      > */}
      <Swiper
        autoplay={{
          delay: 2500} }       
        spaceBetween={0}
        centeredSlides={true}
        modules={[Autoplay, Pagination,Navigation]}
        className="mySwiper"
      >
      <SwiperSlide>
        <div className='endSlide container'>
          <div className='row justify-content-center'>
            <span className='blanco opacity-05 text-center'>xxx</span>
            <h2 className='blanco text-center col-9 mt-25 under-blanco pb-3'><b>Estamos procesando tus respuestas para saber </b><span className='playfairItalic'>cómo hablás.</span></h2>
            <input className='col-8 mt-5' type="range" min={1} max={12} value={morfemasCounter} ></input>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='endSlide container'>
          <div className='row justify-content-center'>
            <h2 className='blanco col-9 mt-25 text-center under-blanco pb-5'> <b>Acá no hay respuestas buenas ni malas.</b> </h2> 
            <p className='playfair col-9 mt-25 text-center'><b> Al lenguaje lo construimos todos los días y siempre podemos seguir aprendiendo: <span className='playfairItalic'>se trata de hacerse preguntas.</span> </b></p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='endSlide'> 
          <div className='row justify-content-center'>
            <h2 className='blanco col-9 mt-45 text-center'>Veamos cuántas <span className='playfairItalic'>expresiones</span> te hicieron <span className='playfairItalic'>ruido</span> </h2> 
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={realize < 5 ? "endSlide amigue" : realize < 9 ? "endSlide xahi" : "endSlide anteojos" } > 
          <div className='row justify-content-center border-blanco'>
            <h2 className='text-center'> <b>{realize < 5 ? "Amigue date cuenta" : realize < 9 ? "Es por ahí" : "Anteojos violetas activados mode on" }</b></h2> 
            <input className='col-8 mt-75' type="range" min={1} max={12} value={morfemasCounter} ></input>
            <p className='blanco mt-5 text-center f08 col-8'><b>Identificaste {realize} de 12 expresiones</b></p>
          </div>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className={realize < 5 ? "endSlide amigue" : realize < 9 ? "endSlide xahi" : "endSlide anteojos" } > 
          <div className='row justify-content-center border-blanco'>
              <p className='under-blanco text-center'>{realize < 5 ? "Tenés que entrenar un poco más la mirada. Aunque no nos demos cuenta, el lenguaje que nos rodea todos los días puede ser una anteojera. Nos acostumbramos a leer y escuchar palabras que parecen correctas pero que a veces dejan afuera a mucha gente. Si llegaste hasta acá, ya es el primer paso." 
                : realize < 9 ? "Vas por el buen camino. Podés identificar muchas situaciones en las que las palabras excluyen, pero hay otras que todavía cuestan, como todo en la vida. Lo importante: hay cosas que te hacen ruido y querés cambiarlas." 
                : "Tu radar cuestionador de lenguaje ve un término excluyente a 100km a la redonda. El masculino genérico te hace más ruido que una bocina a las 3AM: necesitás eliminarlo a toda costa." }
              </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='endSlide'>
          <div className='row justify-content-center '>
            <h2 className='blanco text-center col-9 mt-25'><b>Miremos ahora tu </b><span className='playfairItalic'>herramienta</span><b> favorita, la que usaste más veces</b> </h2> 
          </div>
          {/* <div className='row justify-content-center '>
            <a className="col-1 mt-5"><img alt="." className="logo" src={require("../assets/img/flechita.png")}/></a>
          </div> */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='endSlide'>
          <div className='row justify-content-center '>
            <p className='col-8 text-center blanco'>Usaste {faveToolName} <br/> <b>{faveToolNumber} veces</b></p>
            <div className='mt-45'>Ilustracion</div>
            <a className='col-6 bg-crema f08 text-center mt-75 negro py-2' onClick={()=>nextSlide("pos")} > <b>EXPLORÁ TU PERFIL </b></a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
    }
    {page === 1 && 
        <div className={realize < 5 ? "container amigue" : realize < 9 ? "container xahi" : "container anteojos" } > 
            <div className='row'>
              <h2 className='text-center mt-5'> <b>{realize < 5 ? "Amigue date cuenta" : realize < 9 ? "Es por ahí" : "Anteojos violetas activados mode on" }</b></h2> 
            </div>
            <hr className='blanco'></hr>
            <div className='row'>
              <p className=' text-center'>{realize < 5 ? "Tenés que entrenar un poco más la mirada. Aunque no nos demos cuenta, el lenguaje que nos rodea todos los días puede ser una anteojera. Nos acostumbramos a leer y escuchar palabras que parecen correctas pero que a veces dejan afuera a mucha gente. Si llegaste hasta acá, ya es el primer paso." 
                : realize < 9 ? "Vas por el buen camino. Podés identificar muchas situaciones en las que las palabras excluyen, pero hay otras que todavía cuestan, como todo en la vida. Lo importante: hay cosas que te hacen ruido y querés cambiarlas." 
                : "Tu radar cuestionador de lenguaje ve un término excluyente a 100km a la redonda. El masculino genérico te hace más ruido que una bocina a las 3AM: necesitás eliminarlo a toda costa." }
              </p>
            </div>
            <div className='row bg-gris text-center mt-5 pb-5'>
              <h2 className='col-8 mx-auto my-5'><b>Guía de <span className='playfairItalic'>autorevisión</span> a la hora de <span className='playfairItalic'>escribir</span></b></h2>
              <p className='col-8 mx-auto'>Escribir requiere necesariamente revisar y reescribir. A continuación, presentamos una lista de preguntas que buscan guiar la revisión de textos con perspectiva de género. </p>
            {
              guias.map((guia, index)=>{
                return (
                  <Guia
                    key = {index}
                    number = {index+1}
                    titulo = {guia.titulo}
                    texto= {guia.texto}     
                  />
                )
              }
              )
            }
            </div>
            <div className='row bg-lila justify-content-center'>
              <div className='blanco-borde-negro col-8 mt-5 p-3'>
                <a href='/quiz'><b>Ahora que conocés tus resutlados, desafiate otra vez: hacé el experimento de nuevo</b></a>
              </div>
              <div className='blanco-borde-negro col-8 mt-5 p-3'>
                <a href='/caja-de-herramientas'><b>Chequear texto q redirige a herramienta</b></a>
              </div>
              <div className='blanco-borde-negro col-8  my-5'>
                <a href='/texto-expositivo'><b>¿Qué sentido tiene el lenguaje <span className='playfair'>inclusivo?</span></b></a>
              </div>
            </div>
          </div> 
    }

        
        
    </div>
  );
}

export default End;