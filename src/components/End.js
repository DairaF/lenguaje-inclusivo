import React, { useState } from 'react';
import Menu from './Menu';
import Fave from './Fave';
import Footer from './Footer';


import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon, TelegramIcon, WhatsappIcon } from "react-share";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/Stories.css";


// import required modules
import {Zoom, Autoplay, Pagination, Navigation } from "swiper";

const End = (props) => {
    const [page,setPage]=useState(0);
    let raeCounter = 0;
    let desdoblamientoCounter = 0;
    let morfemasCounter = 0;
    let idkCounter = 0;
    let prelativosCounter = 0;
    let sabstractoCounter = 0;
    let sColectivoCounter = 0;
    let prosopopeyaCounter = 0;
    let sEpicenoCounter = 0;
    let sEspecialCounter = 0;
    let elipsisCounter = 0;
    let fImpersonalCounter = 0;
    let pIndefinidoCounter = 0;
    let sEntidadesCounter = 0;
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
        else if (result === 4) { sabstractoCounter = sabstractoCounter+1}
        else if (result === 5) { prelativosCounter = prelativosCounter+1}
        else if (result === 7) { sColectivoCounter = sColectivoCounter+1}
        else if (result === 8) { elipsisCounter = elipsisCounter+1}
        else if (result === 9) { fImpersonalCounter = fImpersonalCounter+1}
        else if (result === 10) { pIndefinidoCounter = pIndefinidoCounter+1}
        else if (result === 11) { sEpicenoCounter = sEpicenoCounter+1}
        else if (result === 12) { sEntidadesCounter = sEntidadesCounter+1}
        else if (result === 13) { sEspecialCounter = sEspecialCounter+1}
        else if (result === 14) { prosopopeyaCounter = prosopopeyaCounter+1}
      });
      let recount = [
        raeCounter, 
        desdoblamientoCounter, 
        morfemasCounter, 
        sabstractoCounter, 
        prelativosCounter, 
        sColectivoCounter,
        elipsisCounter, 
        fImpersonalCounter, 
        pIndefinidoCounter, 
        sEpicenoCounter, 
        sEntidadesCounter,
        sEspecialCounter,
        prosopopeyaCounter ];
      findMostUsedTool(recount);
  }
  const findMostUsedTool = (recount) =>{
      let largest1 = 0;
      let largestIndex1 = 0;
      let largest2 = 0;
      let largestIndex2 = 0;
      let largest3 = 0;
      let largestIndex3 = 0;
      //cuales son los index de las mas usadas y sus cantidad
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
      //Asegurarse de q RAE no sea el mas usado
      if(largestIndex1 == 0){
        if(largestIndex2 == 0){
          if(largestIndex3 == 0){
            //solo uso RAE dejar vacio
          }else{
            faveN1 = largest3;
            locatefaveName(largestIndex3, "faveName1");}
        }else{
          faveN1 = largest2
          locatefaveName(largestIndex2, "faveName1");
          if(largestIndex3 == 0){
            //dejar vacio  3
          }else{
            faveN2 = largest3;
            locatefaveName(largestIndex3, "faveName2");          
          }
        }
      }
      else {
        faveN1 = largest1;
        locatefaveName(largestIndex1, "faveName1");
        if(largestIndex2 == 0){
          if(largestIndex3 == 0){
            //dejar vacio 2 y 3
          }else{
            faveN2 = largest3;
            locatefaveName(largestIndex3, "faveName2");
          }
        }
        else{
          faveN2 = largest2;
          locatefaveName(largestIndex2, "faveName2");
          if(largestIndex3 == 0){
            //dejar vacio  3
          }else{
            faveN3 = largest3;
            locatefaveName(largestIndex3, "faveName3");          
          }
        }
      }
      
      console.log("faveName1"+faveName1+" faveName2"+faveName2+ " faveName3"+faveName3)
  }
  
  const locatefaveName = (toolIndex, toolN) =>{
    if(toolN=="faveName1"){
    switch (toolIndex){
      case 0: faveName1 =  "Rae"; break;
      case 1: faveName1 =  "Desdoblamiento"; break;
      case 2: faveName1 =  "Nuevos morfemas"; break;
      case 3: faveName1 =  "Sustantivos abstractos"; break;
      case 4: faveName1 =  "Pronombres relativos"; break;
      case 5: faveName1 =  "Sustantivos colectivos"; break;
      case 6: faveName1 =  "Elipsis"; break;
      case 7: faveName1 =  "Formas impersonales"; break;
      case 8: faveName1 =  "Pronombres indefinidos"; break;
      case 9: faveName1 =  "Sustantivos epicenos"; break;
      case 10: faveName1 =  "Sustantivos asociados a entidades"; break;
      case 11: faveName1 =  "Sustantivos con terminaciones especiales"; break;
      case 12: faveName1 =  "Prosopopeya"; break;
      default:faveName1 =  "Unkown";
    }}else if(toolN=="faveName2"){
    switch (toolIndex){
      case 0: faveName2 =  "Rae"; break;
      case 1: faveName2 =  "Desdoblamiento"; break;
      case 2: faveName2 =  "Nuevos morfemas"; break;
      case 3: faveName2 =  "Sustantivos abstractos"; break;
      case 4: faveName2 =  "Pronombres relativos"; break;
      case 5: faveName2 =  "Sustantivos colectivos"; break;
      case 6: faveName2 =  "Elipsis"; break;
      case 7: faveName2 =  "Formas impersonales"; break;
      case 8: faveName2 =  "Pronombres indefinidos"; break;
      case 9: faveName2 =  "Sustantivos epicenos"; break;
      case 10: faveName2 =  "Sustantivos asociados a entidades"; break;
      case 11: faveName2 =  "Sustantivos con terminaciones especiales"; break;
      case 12: faveName2 =  "Prosopopeya"; break;
      default:faveName2 =  "Unkown";
    }}else if(toolN=="faveName3"){
    switch (toolIndex){
      case 0: faveName3 =  "Rae"; break;
      case 1: faveName3 =  "Desdoblamiento"; break;
      case 2: faveName3 =  "Nuevos morfemas"; break;
      case 3: faveName3 =  "Sustantivos abstractos"; break;
      case 4: faveName3 =  "Pronombres relativos"; break;
      case 5: faveName3 =  "Sustantivos colectivos"; break;
      case 6: faveName3 =  "Elipsis"; break;
      case 7: faveName3 =  "Formas impersonales"; break;
      case 8: faveName3 =  "Pronombres indefinidos"; break;
      case 9: faveName3 =  "Sustantivos epicenos"; break;
      case 10: faveName3 =  "Sustantivos asociados a entidades"; break;
      case 11: faveName3 =  "Sustantivos con terminaciones especiales"; break;
      case 12: faveName3 =  "Prosopopeya"; break;
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
        <div id="endSlides">
        <Swiper
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='endSlide '>
            <div className='container procesando'>
              <div className='row justify-content-center'>
                {/* <span className='blanco opacity-05 text-center'>xxx</span> */}
                <h2 className='blanco text-center col-8 mt-55 pb-3'><b>Estamos procesando tus respuestas para saber </b><span className='playfairItalic'>cómo hablás</span></h2>
                {/* <input id="input1" className='col-8 m-5 ' type="range" min={1} max={12} value={morfemasCounter} ></input> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='endSlide '>
            <div className='container'>
                <div className='row justify-content-center'>
                  <h2 className='blanco col-8 mt-45 text-center pb-5'> <b>Acá no hay respuestas buenas ni malas.</b> </h2> 
                </div>
                <div className='row justify-content-center'>
                  <p className='playfair col-8 mt-7 text-center'>Al lenguaje lo construimos todos los días y siempre podemos seguir aprendiendo: <span className='playfairItalic'>se trata de hacerse preguntas.</span></p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='endSlide'> 
            <div className='row justify-content-center'>
              <h2 className='blanco col-9 mt-65 text-center'>Veamos cuántas <span className='playfairItalic'>expresiones</span> te hicieron <span className='playfairItalic'>ruido</span> </h2> 
            </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className={realize < 5 ? "endSlide amigue" : realize < 9 ? "endSlide xahi" : "endSlide anteojos" } > 
            <div className={realize < 5 ? " border-blanco mt-4 amigueF" : realize < 9 ? "border-blanco mt-4 xahiF" : "border-blanco mt-4 anteojosF" }>
              <h3 className='text-center bg-none'><b>{realize < 5 ? "Amigue date cuenta" : realize < 9 ? "Es por ahí" : "Tenés los anteojos violetas activados" }</b></h3> 
              <p className='blanco botText text-center f08 col-4'><b>Identificaste {realize} de 12 expresiones</b></p>
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className={realize < 5 ? "endSlide amiguec" : realize < 9 ? "endSlide xahic" : "endSlide anteojosc" } > 
            <div className='border-blanco'>
                <p className='mt-75 text-center px-3'>{realize < 5 ? "Tenés que entrenar un poco más la mirada. Aunque no nos demos cuenta, el lenguaje que nos rodea todos los días puede ser una anteojera. " 
                  : realize < 9 ? "Vas por el buen camino. Podés identificar muchas situaciones pero hay otras que todavía cuestan." 
                  : "Tu radar cuestionador de lenguaje ve un término excluyente a 100km a la redonda." }
                </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='endSlide'>
            <div className='row justify-content-center '>
              <h2 className='blanco text-center col-8 mt-55 '>Miremos ahora tu <span className='playfairItalic'>herramienta</span> favorita, la que usaste más veces</h2> 
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={realize < 5 ? "endSlide amigue" : realize < 9 ? "endSlide xahi" : "endSlide anteojos" } >
          {faveN1 == 0? <div className='row justify-content-center pt-1'>
            <div className='col-8 mt-45'>
            <p className=''>No tenemos suficiente información como para decirte cuál es tu herramienta favorita... </p>
            <p className='negro'>¿No querés <span className='playfairItalic' >hacer el experimento de nuevo</span> y fijarte mejor en esas expresiones que no son inclusivas?</p>
            </div>
            <a onClick={() => window.location.reload()} className='btnRedo mt-3 col-8 '>Repetí el experimento</a>

            </div>:
            <div className='container'>
              <div className='row justify-content-center text-center'>
                <p className='col-8 text-center blanco mt-25 f1'>Usaste <br/><b>{faveN1} {faveN1 >1?"veces":"vez"}</b></p>
              </div>          
              <div className='row justify-content-center '>
                  {faveName1 == "Rae"? <img className='col-6' src={ require('../assets/img/illus/nubeGris.png') } />:
                    faveName1 == "Desdoblamiento" ?<img className='col-6 ' src={ require('../assets/img/illus/expresion.png') } />:
                    faveName1 == "Nuevos morfemas"?<img className='col-6 ' src={ require('../assets/img/illus/morfema.png') } />:
                    faveName1 == "Sustantivo abstracto"? <img className='col-6 ' src={ require('../assets/img/illus/sustantivo.png') } />:
                    faveName1 == "Pronombres relativos"? <img className='col-6 ' src={ require('../assets/img/illus/pronombre.png') } />:
                    faveName1 == "Sustantivos abstractos"? <img className='col-6 ' src={ require('../assets/img/illus/sustantivo.png') } />:
                    faveName1 == "Sustantivos colectivos"? <img className='col-6 ' src={ require('../assets/img/illus/sustantivo.png') } />:
                    faveName1 == "Elipsis"? <img className='col-6 ' src={ require('../assets/img/illus/expresion.png') } />:
                    faveName1 == "Formas impersonales"? <img className='col-6 ' src={ require('../assets/img/illus/sustantivo.png') } />:
                    faveName1 == "Pronombres indefinidos"? <img className='col-6 ' src={ require('../assets/img/illus/pronombres.png') } />:
                    faveName1 == "Sustantivos epicenos"? <img className='col-6 ' src={ require('../assets/img/illus/sustantivo.png') } />:
                    faveName1 == "Sustantivos asociados a entidades"? <img className='col-6 ' src={ require('../assets/img/illus/sustantivo.png') } />:
                    faveName1 == "Sustantivos con terminaciones especiales"? <img className='col-6 ' src={ require('../assets/img/illus/sustantivo.png') } />:
                    faveName1 == "Prosopopeya"? <img className='col-6 ' src={ require('../assets/img/illus/sustantivo.png') } />
                    :<img className='col-6 ' src={ require('../assets/img/illus/nubeGris.png') } />
                  }
              </div>
              <div className='row justify-content-center playfair mt-3'>
                <p className='text-center f-'>{faveName1}</p>
              </div>
              <div className='row justify-content-center '>
                <a id="verResultados" className='col-8 f08 text-center mt-15 negro py-2 pointer' onClick={()=>nextSlide("pos")} > <b>EXPLORÁ TU PERFIL </b></a>
              </div>
            </div>
            }
          </div>
        </SwiperSlide>
    </Swiper>
    </div>
    }
    {page === 1 && 
        <div className={realize < 5 ? " amiguePf" : realize < 9 ? " xahiPf" : " anteojosPf" } > 
        <div className='container'>
          <Menu />
            <div className='row justify-content-center'>
              <h2 id="resultTitle" className='text-center mt-25 mt-md-15 col-10 m-center blanco'> <b>{realize < 5 ? "Amigue date cuenta" : realize < 9 ? "Es por ahí" : "Tenés los anteojos violetas activados" }</b></h2> 
            </div>
            <hr className='blanco hide-md' />
            <div className='row justify-content-center'>
              <p className=' text-center mt-15 mt-md-5 col-10 col-md-5 m-center playfair'>{realize < 5 ? "Tenés que entrenar un poco más la mirada. Aunque no nos demos cuenta, el lenguaje que nos rodea todos los días puede ser una anteojera. Nos acostumbramos a leer y escuchar palabras que parecen correctas pero que a veces dejan afuera a mucha gente. Si llegaste hasta acá, ya es el primer paso." 
                : realize < 9 ? "Vas por el buen camino. Podés identificar muchas situaciones en las que las palabras excluyen, pero hay otras que todavía cuestan, como todo en la vida. Lo importante: hay cosas que te hacen ruido y querés cambiarlas." 
                : "Tu radar cuestionador de lenguaje ve un término excluyente a 100km a la redonda. El masculino genérico te hace más ruido que una bocina a las 3AM: necesitás eliminarlo a toda costa." }
              </p>
            </div>
            <div className='row text-center mt-5 pb-5 justify-content-center'>
              <h2 className='col-10 col-md-5 mx-auto my-5'><b>Tus <span className='playfairItalic'>herramientas</span> favoritas fueron</b></h2>
                  <Fave key = {1} number = {1} name = {faveName1} />
                  {faveN2 !==0 ? <Fave key = {2} number = {2} name = {faveName2} />: "" }
                  {faveN3 !==0 ? <Fave key = {3} number = {3} name = {faveName3} />: "" }
            </div>
            <div className='my-5'>
              <h2 className='text-center my-5 mx-1'>Compartí tus resultados</h2>
              <div className='row justify-content-center'>
                <FacebookShareButton
                  url={"https://lenguajeinclusivo.fund.ar/quiz"}
                  quote={"Encontré mi propio lenguaje inclusivo con la experiencia interactiva de Fundar ¡Descubrí vos el tuyo!"}
                  hashtag={"#fundar"}
                  description={"descubri tu propio lenguaje inclusivo"}
                  className="col-2 col-md-1 Demo__some-network__share-button"
                >
                  <img className='icons' src={require('../assets/img/facebook.png')} />
                </FacebookShareButton>
                <LinkedinShareButton
                  url={"https://lenguajeinclusivo.fund.ar/quiz"}
                  quote={"Encontré mi propio lenguaje inclusivo con la experiencia interactiva de Fundar ¡Descubrí vos el tuyo!"}
                  hashtag={"#fundar"}
                  description={"descubri tu propio lenguaje inclusivo"}
                  className="col-2 col-md-1 Demo__some-network__share-button"
                >
                  <img className='icons' src={require('../assets/img/linkedin.png')} />
                </LinkedinShareButton>
                <TwitterShareButton
                  url={"https://lenguajeinclusivo.fund.ar/quiz"}
                  quote={"Encontré mi propio lenguaje inclusivo con la experiencia interactiva de @fundesarg ¡Descubrí vos el tuyo!"}
                  hashtag={"#fundar"}
                  description={"descubri tu propio lenguaje inclusivo"}
                  className="col-2 col-md-1 Demo__some-network__share-button"
                >
                  <img className='icons' src={require('../assets/img/twitter.png')} />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={"https://lenguajeinclusivo.fund.ar/quiz"}
                  quote={"Encontré mi propio lenguaje inclusivo con la experiencia interactiva de Fundar ¡Descubrí vos el tuyo!"}
                  hashtag={"#fundar"}
                  description={"descubri tu propio lenguaje inclusivo"}
                  className="col-2 col-md-1 Demo__some-network__share-button"
                >
                  <img className='icons' src={require('../assets/img/wpp.png')} />
                </WhatsappShareButton>
              </div>
            </div>
            <hr className='blanco'/>



            <div className='redirectsQuiz ml-0'>     
              <div className='row justify-content-center p-5'>
                <div className=' blanco-borde-negro col-12 col-md-8 col-xl-3 redirect negro'>
                  <a onClick={() => window.location.reload()}>
                    <div className='row redirect-texto negro'>
                      <b>Ahora que conocés tus resultados, desafiate otra vez: hacé el experimento de nuevo</b>
                    </div>
                    {/* <div className='flechaEnBorde'>
                      <img alt="." className="logo" src={require("../assets/img/flechaBgLila.png")}/>
                    </div>    */}
                  </a>       
                </div>

                <div className=' blanco-borde-negro col-12 col-md-8 col-xl-3 redirect negro'>
                  <a  href='/caja-de-herramientas'>
                    <div className='row redirect-texto negro'>
                      <b>Explorá más recursos y descubrí más herramientas para no hablar solo de los varones.</b>
                    </div>
                    {/* <div className='flechaEnBorde'>
                      <img alt="." className="logo" src={require("../assets/img/flechaBgLila.png")}/>
                    </div>    */}
                  </a>       
                </div>

                <div className=' blanco-borde-negro col-12 col-md-8 col-xl-3 redirect negro'>
                  <a  href='/que-sentido-tiene-el-lenguaje-inclusivo'>
                    <div className='row redirect-texto negro '>
                      <b>¿Qué sentido tiene el lenguaje inclusivo?</b>
                    </div>
                    {/* <div className='flechaEnBorde'>
                      <img alt="." className="logo" src={require("../assets/img/flechaBgLila.png")}/>
                    </div>    */}
                  </a>       
                </div>           
              </div>
                <Footer/>     
            </div>


          </div> 
          </div> 
    }

        
        
    </div>
  );
}

export default End;