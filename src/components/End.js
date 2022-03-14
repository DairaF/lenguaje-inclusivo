import React, { useState } from 'react';
import guias from '../data/guias.json';
import Guia from './Guia';
import Fave from './Fave';

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
    let faveN1 = 0;
    let faveName1 = "";
    let faveN2 = 0;
    let faveName2 = "";
    let faveN3 = 0;
    let faveName3 = "";
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
      let largest1 = 0;
      let largestIndex1 = 0;
      let largest2 = 0;
      let largestIndex2 = 0;
      let largest3 = 0;
      let largestIndex3 = 0;
      for(let i = 0; i< recount.length; i++){
        if(largest1 < recount[i]) {
          largest1 = recount[i];
          largestIndex1 = i;
        }else if(largest2 < recount[i]) {
          largest2 = recount[i];
          largestIndex2 = i;
        }else if(largest3 < recount[i]) {
          largest3 = recount[i];
          largestIndex3 = i;
        }
      }
      faveN1 = largest1;
      faveN2 = largest2;
      faveN3 = largest3;
      locatefaveName(largestIndex1, "faveName1");
      locatefaveName(largestIndex2, "faveName2");
      locatefaveName(largestIndex3, "faveName3");
      console.log("faveName1"+faveName1+" faveName2"+faveName2+ " faveName3"+faveName3)
  }
  
  const locatefaveName = (toolIndex, toolN) =>{
    if(toolN=="faveName1"){
    switch (toolIndex){
      case 0: faveName1 =  "Rae"; break;
      case 1: faveName1 =  "Desdoblamiento"; break;
      case 2: faveName1 =  "Nuevos morfemas"; break;
      case 3: faveName1 =  "No se"; break;
      case 4: faveName1 =  "Pronombres relativos"; break;
      case 5: faveName1 =  "Sustantivos abstractos"; break;
      case 6: faveName1 =  "Sustantivos Colectivos"; break;
      default:faveName1 =  "Unkown";
    }}else if(toolN=="faveName2"){
    switch (toolIndex){
      case 0: faveName2 =  "Rae"; break;
      case 1: faveName2 =  "Desdoblamiento"; break;
      case 2: faveName2 =  "Nuevos morfemas"; break;
      case 3: faveName2 =  "No se"; break;
      case 4: faveName2 =  "Pronombres relativos"; break;
      case 5: faveName2 =  "Sustantivos abstractos"; break;
      case 6: faveName2 =  "Sustantivos Colectivos"; break;
      default:faveName2 =  "Unkown";
    }}else if(toolN=="faveName3"){
    switch (toolIndex){
      case 0: faveName3 =  "Rae"; break;
      case 1: faveName3 =  "Desdoblamiento"; break;
      case 2: faveName3 =  "Nuevos morfemas"; break;
      case 3: faveName3 =  "No se"; break;
      case 4: faveName3 =  "Pronombres relativos"; break;
      case 5: faveName3 =  "Sustantivos abstractos"; break;
      case 6: faveName3 =  "Sustantivos Colectivos"; break;
      default:faveName3 =  "Unkown";
    }}
  }

  const nextSlide = (direction) =>{
    direction === "neg" ? setPage(page-1) : setPage(page+1)
  }
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  return(
    <div >
        {sortResults()}
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
        <div className='endSlide '>
          <div className='container procesando'>
            <div className='row justify-content-center'>
              <span className='blanco opacity-05 text-center'>xxx</span>
              <h2 className='blanco text-center col-9 col-md-5 mt-15 under-blanco pb-3'><b>Estamos procesando tus respuestas para saber </b><span className='playfairItalic'>cómo hablás.</span></h2>
              <input id="input1" className='col-8 col-md-3 m-5 mt-md-25' type="range" min={1} max={12} value={morfemasCounter} ></input>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='endSlide aca'>
          <div className='container'>
              <div className='row justify-content-center'>
                <h2 className='blanco col-9 col-md-5 mt-15 mt-md-20 text-center under-blanco pb-5'> <b>Acá no hay respuestas buenas ni malas.</b> </h2> 
              </div>
              <div className='row justify-content-center'>
                <p className='playfair col-9 mt-25 col-md-5 mt-md-5 text-center'><b> Al lenguaje lo construimos todos los días y siempre podemos seguir aprendiendo: <span className='playfairItalic'>se trata de hacerse preguntas.</span> </b></p>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='endSlide ruido'> 
          <div className='row justify-content-center'>
            <h2 className='blanco col-9 col-md-5 mt-25 text-center'>Veamos cuántas <span className='playfairItalic'>expresiones</span> te hicieron <span className='playfairItalic'>ruido</span> </h2> 
          </div>
        </div>
      </SwiperSlide>
      {vw<768?<div><SwiperSlide>
        <div className={realize < 5 ? "endSlide amigueF" : realize < 9 ? "endSlide xahiF" : "endSlide anteojosF" } > 
          <div className='row justify-content-center border-blanco'>
            <h2 className='text-center'><b>{realize < 5 ? "Amigue date cuenta" : realize < 9 ? "Es por ahí" : "Anteojos violetas activados mode on" }</b></h2> 
            <input className='col-8 mt-75' type="range" min={1} max={12} value={morfemasCounter} ></input>
            <p className='blanco mt-5 text-center f08 col-8'><b>Identificaste {realize} de 12 expresiones</b></p>
          </div>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className={realize < 5 ? "endSlide amigue" : realize < 9 ? "endSlide xahi" : "endSlide anteojos" } > 
          <div className='row justify-content-center border-blanco'>
              <p className='under-blanco text-center'>{realize < 5 ? "Tenés que entrenar un poco más la mirada. Aunque no nos demos cuenta, el lenguaje que nos rodea todos los días puede ser una anteojera. " 
                : realize < 9 ? "Vas por el buen camino. Podés identificar muchas situaciones pero hay otras que todavía cuestan." 
                : "Tu radar cuestionador de lenguaje ve un término excluyente a 100km a la redonda." }
              </p>
              <div className=''>
              {realize < 5 ? <img className='mt-5' src={require('../assets/img/pfmisc1.png')}/> : 
                realize < 9 ? <img src={require('../assets/img/pfmisc2.png')}/> : 
                <img src={require('../assets/img/pfmisc3.png')}/> } 
              </div>
          </div>
        </div>
      </SwiperSlide></div>
      :<SwiperSlide>
        <div className={realize < 5 ? "endSlide" : realize < 9 ? "endSlide " : "endSlide " } > 
          <div className='row justify-content-between'>
            <div className='col-5 offset-1 mt-5'>
              { realize < 5 ? <img className=' border-blanco p-0 floatR' src={require('../assets/img/illus/end1.png')}/> : 
                realize < 9 ? <img className=' border-blanco p-0 floatR' src={require('../assets/img/illus/end2.png')}/> : 
                <img className=' border-blanco p-0 floatR' src={require('../assets/img/illus/end3.png')}/> } 
            </div>
            <div className='col-6'>
              <h2 className='text-center col-8 mt-25'><b>{realize < 5 ? "Amigue date cuenta" : realize < 9 ? "Es por ahí" : "Anteojos violetas activados mode on" }</b></h2> 
              <input className='col-8 mx-auto mt-5' type="range" min={1} max={12} value={morfemasCounter} ></input>
              <p className='blanco mt-5 col-8 text-center f08 '><b>Identificaste {realize} de 12 expresiones</b></p>
                <p className='col-8 text-left playfair'>{realize < 5 ? "Tenés que entrenar un poco más la mirada. Aunque no nos demos cuenta, el lenguaje que nos rodea todos los días puede ser una anteojera. Nos acostumbramos a leer y escuchar palabras que parecen correctas pero que a veces dejan afuera a mucha gente. Si llegaste hasta acá, ya es el primer paso." 
                  : realize < 9 ? "Vas por el buen camino. Podés identificar muchas situaciones en las que las palabras excluyen, pero hay otras que todavía cuestan, como todo en la vida. Lo importante: hay cosas que te hacen ruido y querés cambiarlas." 
                  : "Tu radar cuestionador de lenguaje ve un término excluyente a 100km a la redonda. El masculino genérico te hace más ruido que una bocina a las 3AM: necesitás eliminarlo a toda costa." }
                </p>
                {/* {realize < 5 ? <img className='mt-5' src={require('../assets/img/pfmisc1.png')}/> : 
                realize < 9 ? <img src={require('../assets/img/pfmisc2.png')}/> : 
                <img src={require('../assets/img/pfmisc3.png')}/> }  */}
            </div>
          </div>
        </div> 
      </SwiperSlide>}
      {vw<768? <SwiperSlide>
        <div className='endSlide aca'>
          <div className='row justify-content-center '>
            <h2 className='blanco text-center col-9 mt-25'><b>Miremos ahora tu </b><span className='playfairItalic'>herramienta</span><b> favorita, la que usaste más veces</b> </h2> 
          </div>
        </div>
      </SwiperSlide>
      :""}
      <SwiperSlide>
        <div className='endSlide'>
          <div className='container'>
          <div className='row justify-content-center text-center pt-5'>
            <h3>Tu herramienta favorita</h3>
          </div> 
          <div className='row justify-content-center text-center'>
            <p className='col-8 text-center blanco'>Usaste {faveName1=="Rae"? faveN2 :faveName2=="Rae"? faveN3 : faveName3 =="Rae"? "no" : "no" } <br/> <b> veces</b></p>
          </div>          
          <div className='row justify-content-center '>
              {faveName1 == "Rae"? <img className='col-2' src={ require('../assets/img/illus/end1.png') } />:
              faveName1 == "Desdoblamiento" ?<img className='col-2' src={ require('../assets/img/illus/expresion.png') } />:
              faveName1 == "Nuevos morfemas"?<img className='col-2' src={ require('../assets/img/illus/morfema.png') } />:
              faveName1 == "No se"? <img className='col-2' src={ require('../assets/img/illus/end1.png') } />:
              faveName1 == "Pronombres relativos"? <img className='col-2' src={ require('../assets/img/illus/pronombre.png') } />:
              faveName1 == "Sustantivos abstractos"? <img className='col-2' src={ require('../assets/img/illus/sustantivo.png') } />:
              faveName1 == "Sustantivos Colectivos"? <img className='col-2' src={ require('../assets/img/illus/sustantivo.png') } />
              :<img className='col-2' src={ require('../assets/img/illus/end1.png') } />
              }
          </div>
          <div className='row justify-content-center '>
              {faveName1}
          </div>
          <div className='row justify-content-center '>
            <a className='col-10 col-md-2 bg-crema f08 text-center mt-75 mt-md-5 mt-md-15 negro py-2' onClick={()=>nextSlide("pos")} > <b>EXPLORÁ TU PERFIL </b></a>
          </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
    }
    {page === 1 && 
        <div className={realize < 5 ? " amiguePf" : realize < 9 ? " xahiPf" : " anteojosPf" } > 
        <div className='container'>
            <div className='row justify-content-center'>
              <h2 className='text-center mt-15 col-10 col-md-5 m-center'> <b>{realize < 5 ? "Amigue date cuenta" : realize < 9 ? "Es por ahí" : "Anteojos violetas activados mode on" }</b></h2> 
            </div>
            <div className='row justify-content-center'>
              <p className=' text-center mt-15 mt-md-10 col-10 col-md-5 m-center playfair'>{realize < 5 ? "Tenés que entrenar un poco más la mirada. Aunque no nos demos cuenta, el lenguaje que nos rodea todos los días puede ser una anteojera. Nos acostumbramos a leer y escuchar palabras que parecen correctas pero que a veces dejan afuera a mucha gente. Si llegaste hasta acá, ya es el primer paso." 
                : realize < 9 ? "Vas por el buen camino. Podés identificar muchas situaciones en las que las palabras excluyen, pero hay otras que todavía cuestan, como todo en la vida. Lo importante: hay cosas que te hacen ruido y querés cambiarlas." 
                : "Tu radar cuestionador de lenguaje ve un término excluyente a 100km a la redonda. El masculino genérico te hace más ruido que una bocina a las 3AM: necesitás eliminarlo a toda costa." }
              </p>
            </div>
            <hr className='blanco mt-15'/>
            <div className='row text-center mt-5 pb-5 justify-content-center'>
              <h2 className='col-8 col-md-5 mx-auto my-5'><b>Tus <span className='playfairItalic'>herramientas</span> favoritas fueron</b></h2>
                  <Fave key = {1} number = {1} name = {faveName1} />
                  {faveN2 !==0 ? <Fave key = {2} number = {2} name = {faveName2} />: "" }
                  {faveN3 !==0 ? <Fave key = {3} number = {3} name = {faveName3} />: "" }
            </div>
            <div className='bg-crema'>
              <div className='row text-center mt-5 pb-5'>
                <h2 className='col-8 col-md-5 mx-auto my-5'><b>Guía de <span className='playfairItalic'>autorevisión</span> a la hora de <span className='playfairItalic'>escribir</span></b></h2>
                <p className='col-8 col-md-5 mx-auto my-md-5'>Escribir requiere necesariamente revisar y reescribir. A continuación, presentamos una lista de preguntas que buscan guiar la revisión de textos con perspectiva de género. </p>
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
            </div>

            <div className='row justify-content-center  justify-content-md-between pb-5'>
              <div className='blanco-borde-negro col-8 col-md-3 mt-5 p-3'>
                <a className='negro' href='/quiz'><b>Ahora que conocés tus resutlados, desafiate otra vez: hacé el experimento de nuevo</b></a>
                <a  href='/quiz' className='col-1 mx-auto flechaEnBorde'><img alt="." className="logo" src={require("../assets/img/flechaBgLila.png")}/></a>
              </div>
              <div className='blanco-borde-negro col-8 col-md-3 mt-5 p-3'>
                <a className='negro' href='/caja-de-herramientas'><b>Chequear texto q redirige a herramienta</b></a>
              </div>
              <div className='blanco-borde-negro col-8 col-md-3 my-5'>
                <a className='negro' href='/texto-expositivo'><b>¿Qué sentido tiene el lenguaje <span className='playfair'>inclusivo?</span></b></a>
              </div>
            </div>
          </div> 
          </div> 
    }

        
        
    </div>
  );
}

export default End;