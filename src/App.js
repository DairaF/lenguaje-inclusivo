import React, { useState, useCallback } from 'react';
import './App.css';
import Situacion from './Situacion';
import Count from './Count';
import Button from './Button';

function App() {
  
  const [raeCounter, setRaeCounter] = useState(0);
  const [DesdoblamientoCounter, setDesdoblamientoCounter] = useState(0);
  const [morfemasCounter, setMorfemasCounter] = useState(0);
  const [idkCounter, setIdkCounter] = useState(0);
  const [prelativosCounter, setPrelativosCounter] = useState(0);
  const [sabstractoCounter, setSabstractoCounter] = useState(0);
  const [sColectivoCounter, setScolectivoCounter] = useState(0);
  // const incrementRae = useCallback(()=> {
  //   setRaeCounter(raeCounter +1)
  // },[raeCounter])

  /*
  1 rae
  2 desdoblamiento
  3 nuevos morfemas
  4 sin especificar
  5 pronombres relativos
  6 sustantivo abstracto
  7 sustantivo colectivo/asociado a grupos
  elipsis
  formas impersonales
  pronombres indefinidos
  sustantivo epiceno
  sustantivo asociado a personas o entiudades
  sustantivos con terminaciones especiales
  metonimia
  */
  return (
    <div className="App">
      {/* <Count text="Rae" count={raeCounter} />
      <Button handleClick={incrementRae} children="rae" /> */}
      <Situacion 
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
      />
      <Situacion 
      block1="El factor más importante según las investigaciones sobre educación es la familia y las circunstancias del " 
      opciones1={[["niño","rae", 1],["los niños y niñas ","desdoblamiento",2], ["les niñes","nuevos morfemas",3],["las infancias","sustantivos abstractos",6]]} 
      block2="El segundo es"
      opciones2={[["el profesor","rae",1],["profesor/a ","desdoblamiento",2],["el personal docente", "sustantivos asociados a grupos",7],["quien educa","pronombre relativo",5]]}
      block3=". Entonces, hay que pensar cómo mejorar la formación de "
      opciones3={[["los docentes","rae",1],["del cuerpo docente","sustantivos referidos a grupos", 7],["les docentes","nuevos morfemas",3],["los/as docentes","desdoblamiento",2]]}
      block4=", cómo pagarles mejor. Todo eso es importante. "
      />
    </div>
  );
}

export default App;
