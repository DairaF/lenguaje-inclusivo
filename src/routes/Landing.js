import React, { } from 'react';

function Landing() {
    return (
    <div className="App">
      <div className='fullHeight'>
        <p>El feminismo nos invita a cuestionar mucho de nuestro día a día: estereotipos, acciones cotidianas e incluso nos invita a preguntarnos por cómo hablamos.
        <br/>
        El lenguaje no solo representa la realidad: la construye. No es neutral y no es ajeno a lo que nos pasa como sociedad. 
        <br/>
        Si a veces cuestionás un poco la lengua, pero no te sale escribir con la e, esto es para vos. 
        <br/>
        Una herramienta para hacer consciente eso que hacemos muchas veces sin pensar: hablar. 
        </p>
      </div>
      <div className='fullHeight'>
        <h3>Quiz Interactivo</h3>
        <h1>Descubrí tu personalidad gramatical</h1>
        <p>¡Ponete a prueba! Encontrá las expresiones excluyentes y reemplazalas con términos que no hablen solo de los varones. </p>
        <a href="quiz">ir a quiz</a>
      </div>
      <div className='fullHeight'>
        <h1>Caja de Herramientas</h1>
        <p>Te dejamos herramientas útiles para expresarte en escritos, exposiciones o en la vida cotidiana.</p>
        <a href="caja-de-herramientas">ir a caja de herramientas</a>
      </div>
    </div>
  );
}

export default Landing;
