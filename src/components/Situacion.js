import React, { useEffect, useState } from 'react';
import Herramienta from './Herramienta';
function Situacion(props) {
    const block1=props.block1;
    const block2=props.block2;
    const block3=props.block3;
    const block4=props.block4;
    const opciones1=props.opciones1;
    const opciones2=props.opciones2;
    const opciones3=props.opciones3;
    const handleAnswers = props.handleAnswers;
    const handleAnswer1 = props.handleAnswer1;
    const handleAnswer2 = props.handleAnswer2;
    const handleAnswer3 = props.handleAnswer3;
    console.log("entra a situacion");
  return (
    <div>
        <div>
          <p>{block1}
            <Herramienta classname="selectHerramientas" opciones={opciones1} handleAnswer={handleAnswer1} />
            </p>
          <p>{block2}</p>
           <Herramienta opciones={opciones2} handleAnswer={handleAnswer2} />
          <p>{block3}</p>
           <Herramienta opciones={opciones3} handleAnswer={handleAnswer3} />
          <p>{block4}</p>
           <button onClick={handleAnswers}>Continuar</button>
        </div>
    </div>
  );
}

export default Situacion;
