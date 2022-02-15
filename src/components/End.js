import React, { useState } from 'react';
import guias from '../data/guias.json';
import Guia from './Guia';

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
        <button onClick={()=>nextSlide("neg")} > izq </button>
        <button onClick={()=>nextSlide("pos")} > der </button>
        {page === 0 && <p>Tus respuestas nos dieron información sobre cómo hablás: cuántas cosas te hicieron ruido y qué cambios elegiste.</p> }
        {page === 1 && <div> <h3> Acá no hay respuestas buenas ni malas. </h3> <p> Al lenguaje lo construimos todos los días y siempre podemos seguir aprendiendo: se trata de hacerse preguntas.</p> </div> }
        {page === 2 && <div> <p> ¿Cuántas expresiones excluyentes identificaste?</p> </div> }
        {page === 3 && 
          <div> 
            <h1>{realize < 5 ? "amigue date cuenta" : realize < 9 ? "Es por ahí" : "Anteojos violetas activados mode on" }</h1> 
            <p>{realize < 5 ? "Tenés que entrenar un poco más la mirada. Aunque no nos demos cuenta, el lenguaje que nos rodea todos los días puede ser una anteojera. Nos acostumbramos a leer y escuchar palabras que parecen correctas pero que a veces dejan afuera a mucha gente. Si llegaste hasta acá, ya es el primer paso." 
            : realize < 9 ? "Vas por el buen camino. Podés identificar muchas situaciones en las que las palabras excluyen, pero hay otras que todavía cuestan, como todo en la vida. Lo importante: hay cosas que te hacen ruido y querés cambiarlas." 
            : "Tu radar cuestionador de lenguaje ve un término excluyente a 100km a la redonda. El masculino genérico te hace más ruido que una bocina a las 3AM: necesitás eliminarlo a toda costa." }
            </p>
            <p>Te diste cuenta de {realize}/12 oportunidades</p>
          </div> 
        }
        {page === 4 && 
          <div> 
            <p>Interactuaste con {realize} de 12 expresiones excluyentes</p>
            <p>Texto de Resultado</p>
          </div> 
        }
        {page === 5 && 
          <div> 
            <p>Según los cambios que hiciste, tus resultados pueden estar más cerca de las reglas del español o un poco más lejos de los diccionarios.</p>
          </div> 
        }
        {page === 6 && 
          <div> 
            <h1>{morfemasCounter < 6 ? "Amamos el español" : morfemasCounter == 6 ? "Vamos viendo " : "Quiero romper todo" }</h1>
            <p>{morfemasCounter < 6 ? "Te manejás dentro de terreno conocido con un diccionario bajo el brazo. La lengua “correcta” es tu lugar: buscás esos recovecos para encontrar la manera de no dejar a nadie afuera, pero usando esas reglas que ya existen. Vamos a romper el sistema, pero desde adentro." 
            : morfemasCounter == 6 ? "Te movés dentro de lo que ya conocés, pero si hace falta no tenés miedo de tirar una “e”. Te gusta tener todas las opciones posibles a mano, para elegir la que más se ajusta a tu situación. ¿Lo más importante? Que nadie se quede afuera." 
            : "Un grupo de señores llenos de naftalina no van a decirte a vos cómo se habla o cómo se escribe. La lengua la hacen quienes hablan, y quienes hablan quieren que todas las personas estén incluidas. Incluso si eso significa romper (bastante) las reglas. " }
            </p>
            <button onClick={()=>nextSlide("pos")} >Explora tus resultados</button>
          </div> 
        }
        
        {page === 7 && 
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