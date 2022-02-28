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
    let DesdoblamientoCounter = 0;
    let morfemasCounter = 0;
    let idkCounter = 0;
    let prelativosCounter = 0;
    let sabstractoCounter = 0;
    let sColectivoCounter = 0;
    let results=props.fullArray;
    let realize = props.realize;
    let sortResults = () => {
      results.forEach(result => { 
        if (result === 1) { raeCounter = raeCounter + 1 }
        else if (result === 2) { DesdoblamientoCounter = DesdoblamientoCounter+1}
        else if (result === 3) { morfemasCounter = morfemasCounter+1}
        else if (result === 4) { idkCounter = idkCounter+1}
        else if (result === 5) { prelativosCounter = prelativosCounter+1}
        else if (result === 6) { sabstractoCounter = sabstractoCounter+1}
        else if (result === 7) { sColectivoCounter = sColectivoCounter+1}
      });
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
        <Swiper
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
      >
      <SwiperSlide>
        <div className='endSlide container'>
          <div className='row justify-content-center'>
            <h2 className='blanco text-center col-9 mt-45'>Estamos procesando tus respuestas para saber <span className='playfairItalic'>cómo hablás.</span></h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='endSlide container'>
          <div className='row justify-content-center'>
            <h2 className='blanco col-6 mt-25 text-center'> Acá no hay respuestas buenas ni malas. </h2> 
            <p className='playfair col-9 mt-25 text-center'> Al lenguaje lo construimos todos los días y siempre podemos seguir aprendiendo: <span className='playfairItalic'>se trata de hacerse preguntas.</span> </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='endSlide'> 
          <div className='row justify-content-center'>
            <h2 className='blanco col-9 mt-75 text-center'>Veamos cuántas <span className='playfairItalic'>expresiones</span> te hicieron <span className='playfairItalic'>ruido</span> </h2> 
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={realize < 5 ? "endSlide bg-azul" : realize < 9 ? "endSlide bg-lila" : "endSlide bg-rosa" } > 
          <h3>{realize < 5 ? "amigue date cuenta" : realize < 9 ? "Es por ahí" : "Anteojos violetas activados mode on" }</h3> 
          <p>{realize < 5 ? "Tenés que entrenar un poco más la mirada. Aunque no nos demos cuenta, el lenguaje que nos rodea todos los días puede ser una anteojera. Nos acostumbramos a leer y escuchar palabras que parecen correctas pero que a veces dejan afuera a mucha gente. Si llegaste hasta acá, ya es el primer paso." 
            : realize < 9 ? "Vas por el buen camino. Podés identificar muchas situaciones en las que las palabras excluyen, pero hay otras que todavía cuestan, como todo en la vida. Lo importante: hay cosas que te hacen ruido y querés cambiarlas." 
            : "Tu radar cuestionador de lenguaje ve un término excluyente a 100km a la redonda. El masculino genérico te hace más ruido que una bocina a las 3AM: necesitás eliminarlo a toda costa." }
          </p>
          <p>Te diste cuenta de {realize}/12 oportunidades</p>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className='endSlide'>
          <p>Miremos ahora tu herramienta favorita, la que usaste más veces </p> 
          <button onClick={()=>nextSlide("pos")} > Ver mas </button>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
    }
        {page === 1 && 
          <div> 
            <div>
              <h1>Herramientas usadas</h1>
              1) rae {raeCounter}
              <br/>
              2) Desdoblamiento {DesdoblamientoCounter}
              <br/>
              3) nuevos morfemas {morfemasCounter}
              <br/>
              4) No dice {idkCounter}
              <br/>
              5) pronombres relativos {prelativosCounter}
              <br/>
              6) sustantivos abstractos {sabstractoCounter}
              <br/>
              7) sustantivos Colectivos {sColectivoCounter}
            </div> 


            <div>
              <h1>Guía de autoevaluación</h1>

            {
              guias.map((guia, index)=>{
                return (
                  <Guia
                    key = {index}
                    titulo = {guia.titulo}
                    texto= {guia.texto}     
                  />
                )
              }
              )
            }
            </div>
          </div> 
        }
        
        
    </div>
  );
}

export default End;