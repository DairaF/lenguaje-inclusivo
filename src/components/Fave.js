import React, { useState, useEffect } from 'react';
function Fave(props) {
  let descripcion;
  let ejemplo;
  const texto = () =>{
    switch (props.name){
      case "Rae": descripcion = "Tu empleo del lenguaje no demuestra inclusión-"; break;
      case "Desdoblamiento" : descripcion = "Este recurso duplica la terminación de género. Incluye el femenino y el masculino con un nexo adversativo o copulativo."; break;
      case "Nuevos morfemas": descripcion = "Con la  x, el @ o la e podemos crear nuevos morfemas de género, por afuera de lo masculino/femenino. Sirve particularmente para hacer referencia a colectivos diversos que se identifican por fuera de esta dualidad."; break;
      case "Sustantivo abstracto": descripcion = "En este contexto, son palabras que hablan de condiciones, posiciones laborales o habilidades, en lugar de personas u objetos concretos."; break;
      case "Pronombres relativos": descripcion = "Son palabras que reemplazan a los sustantivos y permiten evitar el masculino genérico. 'Quien' y 'quienes' refieren siempre a personas y no requieren concordancia de género."; break;
      case "Sustantivos abstractos": descripcion = "En este contexto, son palabras que hablan de condiciones, posiciones laborales o habilidades, en lugar de personas u objetos concretos."; break;
      case "Sustantivos colectivos": descripcion = "Son aquellos que se refieren a un conjunto de personas a las que no se les asigna un género particular. También acá podemos incluir sustantivos colectivos o algunos que designan a una porción de la sociedad."; break;
      case "Elipsis": descripcion = "Con este recurso podemos eliminar la referencia a las personas, lo que no solo evita usar masculino genérico, sino también impide repeticiones innecesarias."; break;
      case "Formas impersonales": descripcion = "Una manera de evitar el masculino genérico es usar oraciones impersonales, que no tienen sujetos concretos. Para construirlas podemos usar el verbo 'haber' o expresiones con 'se' conjugadas con verbos en tercera persona."; break;
      case "Pronombres indefinidos": descripcion = "Son pronombres que no aportan una identificación clara, pero nos sirven para evitar el masculino genérico."; break;
      case "Sustantivos epicenos": descripcion = "Son los sustantivos que siempre mantienen el mismo género gramatical, aunque se refieran a personas de distintos géneros."; break;
      case "Sustantivos asociados a entidades": descripcion = "Son los que agrupan a personas, instituciones, empresas u otras entidades. Como no se refieren exclusivamente a personas, entendemos que el género gramatical no se refiere a un género social."; break;
      case "Sustantivos con terminaciones especiales": descripcion = "Son sustantivos que por sí mismos no marcan género, pero que adoptan el de las palabras que los rodean."; break;
      case "Prosopopeya": descripcion = "En este contexto, podemos usar este recurso para mencionar el efecto en vez de la causa, o viceversa. Es decir, ponemos el peso en el resultado en lugar de las personas que lo crearon."; break;
      default: descripcion = "" 
    }
    switch (props.name){
      case "Rae": ejemplo = "Tu empleo del lenguaje no demuestra inclusión-"; break;
      case "Desdoblamiento" : ejemplo = "los estudios indican | hay argumentos a favor | existen cuestionamientos"; break;
      case "Nuevos morfemas": ejemplo = "Todes, lxs trabajadorxs, l@s jugador@s"; break;
      case "Sustantivo abstracto": ejemplo = "jefatura, presidencia"; break;
      case "Pronombres relativos": ejemplo = "'hay quienes sostienen que' / 'quien lo desee puede...'"; break;
      case "Sustantivos abstractos": ejemplo = "jefatura, presidencia"; break;
      case "Sustantivos colectivos": ejemplo = "sectores, población, audiencia"; break;
      case "Elipsis": ejemplo = "❌Los invitamos a  ✅Invitamos a | ❌Los funcionarios advierten que ✅ Advierten que"; break;
      case "Formas impersonales": ejemplo = "se busca, hubo acuerdo"; break;
      case "Pronombres indefinidos": ejemplo = "alguien, cualquiera, nadie."; break;
      case "Sustantivos epicenos": ejemplo = "persona, víctima, individuo, autoridades."; break;
      case "Sustantivos asociados a entidades": ejemplo = "agentes, actores"; break;
      case "Sustantivos con terminaciones especiales": ejemplo = "cliente, intérprete, joven"; break;
      case "Prosopopeya": descripcion = "los estudios indican | hay argumentos a favor | existen cuestionamientos"; break;
      default: ejemplo = "" 
    }

  }

  return (
    <div >
      {texto()}
      <div className='mx-auto text-center my-5'>
        <div id="faveIndex">
          <h2 className='playfair blanco text-center mx-auto'>{props.number}</h2>
        </div>
        <hr className='blanco'></hr>
        <div className='row justify-content-center'>
        {props.name == "Rae"? <img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/nubeGris.png') } />:
                  props.name == "Desdoblamiento" ?<img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/expresion.png') } />:
                  props.name == "Nuevos morfemas"?<img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/morfema.png') } />:
                  props.name == "Sustantivo abstracto"? <img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/end1.png') } />:
                  props.name == "Pronombres relativos"? <img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/pronombre.png') } />:
                  props.name == "Sustantivos abstractos"? <img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/sustantivo.png') } />:
                  props.name == "Sustantivos colectivos"? <img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/sustantivo.png') } />:
                  props.name == "Elipsis"? <img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/expresion.png') } />:
                  props.name == "Formas impersonales"? <img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/sustantivo.png') } />:
                  props.name == "Pronombres indefinidos"? <img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/pronombres.png') } />:
                  props.name == "Sustantivos epicenos"? <img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/sustantivo.png') } />:
                  props.name == "Sustantivos asociados a entidades"? <img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/sustantivo.png') } />:
                  props.name == "Sustantivos con terminaciones especiales"? <img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/sustantivo.png') } />:
                  props.name == "Prosopopeya"? <img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/sustantivo.png') } />
                  :<img className='col-6 col-md-2 h-content mt-3' src={ require('../assets/img/illus/nubeGris.png') } />
                }
      
        <div className='col-10 col-md-3 offset-md-1 faveTool mt-3'>
          <h2 className='playfair mt-5 bg-none'><b>{props.name}</b></h2>
          <p id="descripcionFave" className='mt-3 blanco'>{descripcion}</p>
          <p className='mt-2 playfair'><b>{ejemplo}</b></p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Fave;

