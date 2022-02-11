import React, { useState, useCallback, useEffect } from 'react';
import '../App.css';
import Situacion from '../components/Situacion';
import Start from '../components/Start';
import End from '../components/End';

function Quiz() {
    /*
  1 rae
  2 desdoblamiento
  3 nuevos morfemas
  4 sin especificar
  5 pronombres relativos
  6 sustantivo abstracto
  7 sustantivo colectivo/asociado a grupos
  8 elipsis
  9 formas impersonales
  10 pronombres indefinidos
  11 sustantivo epiceno
  12 sustantivo asociado a personas o entiudades
  13 sustantivos con terminaciones especiales
  14 metonimia
  */
  const [realize, setRealize] = useState(1);
  const [answer1, setAnswer1] = useState(1);
  const [answer2, setAnswer2] = useState(1);
  const [answer3, setAnswer3] = useState(1);
  const [pushArray, setPushArray] = useState([]);
  const handleAnswers = () => {
    nextSituatcion();
    setPushArray(pushArray => [...pushArray,answer1] );
    setPushArray(pushArray => [...pushArray,answer2] );
    setPushArray(pushArray => [...pushArray,answer3] );
    console.log("pusharray"+ pushArray);
  };

  const handleRealize = useCallback(() =>{
    setRealize(realize+1);
    console.log("ralize"+realize);
  })
  const handleAnswer1=useCallback((answer)=>{
    setAnswer1(answer);
  },[answer1])
  const handleAnswer2=useCallback((answer)=>{
    setAnswer2(answer);
  },[answer2])
  const handleAnswer3=useCallback((answer)=>{
    setAnswer3(answer);
  },[answer3])
//   useEffect(() => {
//     handleAnswer1(answer1);
//     handleAnswer2(answer2);
//     handleAnswer3(answer3);
//    // handleAnswers(pushArray);
// });
const [page,setPage]=useState(0);
const nextSituatcion = () =>{
  console.log('cambia a '+ page);
  setPage(page+1);
}

  return (
    <div className="App">
      {page === 0 && <Start handleStart={nextSituatcion} />}
      {page === 1 && <Situacion 
            handleRealize={handleRealize}
            handleAnswers={handleAnswers}
            handleAnswer1={handleAnswer1}
            handleAnswer2={handleAnswer2}
            handleAnswer3={handleAnswer3}
            situation="tweet"
            block1="@fundesarg Estamos muy " 
            opciones1={[["orgullosos ","rae", 1],
                        ["orgullosas y orgullosos ","desdoblamiento",2], 
                        ["orgulloses ","nuevos morfemas",3]]} 
            block2="de presentar a quienes quedaron"
            opciones2={[["seleccionados ","rae",1],
                        ["la selección ","no se", 4],
                        ["seleccionades ","nuevos morfemas",3]]}
            block3="para la primera edición de la beca Fundatos. La calidad de las propuestas recibidas motivó que "
            opciones3={[["los beneficiarios ","rae",1],
                        ["las becas ","no se", 4],
                        ["les beneficiaries ","nuevos morfemas",3],
                        ["quienes recibirán la beca ","pronombre relativo",5]]}
            block4="sean 4, en lugar de 3, como se había establecido inicialmente."
            /> }
      {page === 2 &&  <Situacion 
            handleRealize={handleRealize}
            handleAnswers={handleAnswers}
            handleAnswer1={handleAnswer1}
            handleAnswer2={handleAnswer2}
            handleAnswer3={handleAnswer3}
            situation="academico"
            block1="El factor más importante según las investigaciones sobre educación es la familia y las circunstancias del " 
            opciones1={[["niño","rae", 1],["los niños y niñas ","desdoblamiento",2], ["les niñes","nuevos morfemas",3],["las infancias","sustantivos abstractos",6]]} 
            block2="El segundo es"
            opciones2={[["el profesor","rae",1],["profesor/a ","desdoblamiento",2],["el personal docente", "sustantivos asociados a grupos",7],["quien educa","pronombre relativo",5]]}
            block3=". Entonces, hay que pensar cómo mejorar la formación de "
            opciones3={[["los docentes","rae",1],["del cuerpo docente","sustantivos referidos a grupos", 7],["les docentes","nuevos morfemas",3],["los/as docentes","desdoblamiento",2]]}
            block4=", cómo pagarles mejor. Todo eso es importante. "
            /> }
      {page === 3 && <End fullArray={pushArray} realize={realize} /> }

    </div>
  );
}

export default Quiz;
