import React, { useState } from 'react';
import Herramienta from './Herramienta';
function Situacion(props) {
    const block1=props.block1;
    const block2=props.block2;
    const block3=props.block3;
    const block4=props.block4;
    const opciones1=props.opciones1;
    const opciones2=props.opciones2;
    const opciones3=props.opciones3;
    const [answer1, setAnswer1] = useState(1);
    const [answer2, setAnswer2] = useState(1);
    const [answer3, setAnswer3] = useState(1);
    const [pushArray, setPushArray] = useState([]);
    // const insertArray = (newValue) => {
    //   setPushArray(pushArray => [...pushArray,newValue] );
    //   console.log("newvalue" + newValue);
    //   console.log("pusharray"+pushArray);
    // };
    const insertArray = () => {
console.log(answer1, answer2, answer3);
      // setPushArray(pushArray => [...pushArray,answer1] );
      // setPushArray(pushArray => [...pushArray,answer2] );
      // setPushArray(pushArray => [...pushArray,answer3] );
      console.log("pusharray"+pushArray);
    };
    const handleAnswer1=(answer)=>{
      console.log("entra 1:", answer);
      setAnswer1(answer);
    }
    const handleAnswer2=(answer)=>{
      console.log("entra 2:", answer);
      setAnswer2(answer)
    }
    const handleAnswer3=(answer)=>{
      console.log("entra 3:", answer);
      setAnswer3(answer)
    }
  return (
    <div>
        <div>
          <h1>{pushArray}</h1>
           {block1}
            <Herramienta opciones={opciones1} handleAnswer={handleAnswer1} />
           {block2}
           <Herramienta opciones={opciones2} handleAnswer={handleAnswer2} />
           {block3}
           <Herramienta opciones={opciones3} handleAnswer={handleAnswer3} />
           {block4}
           <button onClick={insertArray}>Continuar</button>
        </div>
    </div>
  );
}

export default Situacion;
