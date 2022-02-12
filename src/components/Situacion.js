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
    const handleRealize = props.handleRealize;
    const handleAnswers = props.handleAnswers;
    const handleAnswer1 = props.handleAnswer1;
    const handleAnswer2 = props.handleAnswer2;
    const handleAnswer3 = props.handleAnswer3;
    const [oportunidad1, setOportunidad1] = useState(opciones1[0].texto);
    const [oportunidad2, setOportunidad2] = useState(opciones2[0].texto);
    const [oportunidad3, setOportunidad3] = useState(opciones3[0].texto);
    const [oportunidadValor1, setOportunidadValor1] = useState(opciones1[0].valor);
    const [oportunidadValor2, setOportunidadValor2] = useState(opciones2[0].valor);
    const [oportunidadValor3, setOportunidadValor3] = useState(opciones3[0].valor);
    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    const [activeOptions1, setActiveOptions1] = useState(false);
    const [activeOptions2, setActiveOptions2] = useState(false);
    const [activeOptions3, setActiveOptions3] = useState(false);
    const elegirTexto = (valor, texto, cual) => {
      if(cual === 1) { 
        setOportunidad1(texto);
        setOportunidadValor1(valor);
        handleAnswer1(valor);
      }
      else if( cual === 2) {
        setOportunidad2(texto);
        setOportunidadValor2(valor);
        handleAnswer2(valor);
      }
      else{
        setOportunidad3(texto);
        setOportunidadValor3(valor);
        handleAnswer3(valor);
      }
    };
    const toggleOnce = (cual) => {
      if(cual === 1) {
        if(!isActive1){
          setActive1(!isActive1);
          handleRealize();
        }
      }else if(cual === 2) {
        if(!isActive2){
          setActive2(!isActive2);
          handleRealize();
        }
      }else{
        if(!isActive3){
          setActive3(!isActive3);
          handleRealize();
        }
      }
    };
    const toggleOptions = (options) => {
      options === 1 ?
      setActiveOptions1(!activeOptions1)
      :options === 2 ?
      setActiveOptions2(!activeOptions2)
      :setActiveOptions3(!activeOptions3)
      
    };
  useEffect(() => {
    handleAnswer1(oportunidadValor1);
    handleAnswer2(oportunidadValor2);
    handleAnswer3(oportunidadValor3);
});
  return (
    <div>
        <div>
          <p>
            {block1}
            <span className={isActive1 ? 'activo1': 'noactivo1'} onClick={()=>{toggleOnce(1);toggleOptions(1)}}>{oportunidad1}</span>
            {block2}
            <span className={isActive2 ? 'activo2': 'noactivo2'} onClick={()=>{toggleOnce(2);toggleOptions(2)}}>{oportunidad2}</span>
            {block3}
            <span className={isActive3 ? 'activo3': 'noactivo3'} onClick={()=>{toggleOnce(3);toggleOptions(3)}}>{oportunidad3}</span>
          {block4}</p>
           <button onClick={handleAnswers}>Continuar</button>
        </div>
        <div className={activeOptions1 ? 'activa': 'noactiva'}  >
          { opciones1.map(n => { return <span onClick={()=>elegirTexto(n.valor, n.texto, 1)} className='option' value={n.valor}>{n.valor}) {n.texto} - {n.categoria}<br/></span> } ) }
        </div>
        <div className={activeOptions2 ? 'activa': 'noactiva'} >
          { opciones2.map(n => { return <span onClick={()=>elegirTexto(n.valor, n.texto, 2)} className='option' value={n.valor}>{n.valor}) {n.texto} - {n.categoria}<br/></span> } ) }
        </div>
        <div className={activeOptions3 ? 'activa': 'noactiva'} >
          { opciones3.map(n => { return <span onClick={()=>elegirTexto(n.valor, n.texto, 3)} className='option' value={n.valor}>{n.valor}) {n.texto} - {n.categoria}<br/></span> } ) }
        </div>
    </div>
  );
}

export default Situacion;
