import React, { useEffect, useState } from 'react';
import Herramienta from './Herramienta';
function Situacion(props) {
    const step = props.step;
    const situation = props.situation;
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
    //forzar estado xq no capta 3er mount +
    useEffect( () => {
      setOportunidad1(opciones1[0].texto);
      setOportunidad2(opciones2[0].texto);
      setOportunidad3(opciones3[0].texto);
      setOportunidadValor1(opciones1[0].valor);
      setOportunidadValor2(opciones2[0].valor);
      setOportunidadValor3(opciones3[0].valor);
      setActive1(false);
      setActive2(false);
      setActive3(false);
   }, [props.opciones1]);

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
      if(options === 1 ){
      setActiveOptions1(!activeOptions1);
      setActiveOptions2(false);
      setActiveOptions3(false);
      }else if(options === 2){
      setActiveOptions2(!activeOptions2);
      setActiveOptions1(false);
      setActiveOptions3(false);
      }else{
      setActiveOptions3(!activeOptions3);
      setActiveOptions1(false);
      setActiveOptions2(false);
      }
    };    
  useEffect(() => {
    handleAnswer1(oportunidadValor1);
    handleAnswer2(oportunidadValor2);
    handleAnswer3(oportunidadValor3);
},);
  return (
    <div className=''>
      <div className='container'>
        <div className='row'>
          <div className='mt-5 bg-white border-negro-redondeado col-11 mx-auto'>
            <div className='row justify-content-between'>
              <span className='col-1 f08 playfairItalic'>{situation}</span> 
              <span className='col-1 f08 azul mx-3'>{step}/4</span> 
            </div>
            <div>
              <p className='azul mt-5'>
                {block1}
                <span className={isActive1 ? 'activo1': 'noactivo1'} onClick={()=>{toggleOnce(1);toggleOptions(1)}}><i>{oportunidad1}</i></span>
                {block2}
                <span className={isActive2 ? 'activo2': 'noactivo2'} onClick={()=>{toggleOnce(2);toggleOptions(2)}}><i>{oportunidad2}</i></span>
                {block3}
                <span className={isActive3 ? 'activo3': 'noactivo3'} onClick={()=>{toggleOnce(3);toggleOptions(3)}}><i>{oportunidad3}</i></span>
                {block4}
              </p>
            </div>
          </div> 
          <div className='mt-75 row justify-content-end '>
              <a className='col-4 p-1 bg-azul negro f08 text-center' onClick={()=>{handleAnswers(); setActiveOptions1(false); setActiveOptions2(false); setActiveOptions3(false);}}>SIGUIENTE</a>
              <a className='col-1' onClick={()=>{handleAnswers(); setActiveOptions1(false); setActiveOptions2(false); setActiveOptions3(false);}}><img alt="." className="logo" src={require("../assets/img/flecha.png")}/></a>
          </div>
        </div>
      </div>
        <div className={activeOptions1 ? 'activa options': 'noactiva'}  >
          { opciones1.map(n => { return <p onClick={()=>{elegirTexto(n.valor, n.texto, 1);toggleOptions(1)}} className='option' value={n.valor}> <span className='blanco'>{n.texto}</span></p> } ) }
        </div>
        <div className={activeOptions2 ? 'activa options': 'noactiva'} >
          { opciones2.map(n => { return <p onClick={()=>{elegirTexto(n.valor, n.texto, 2);toggleOptions(2)}} className='option' value={n.valor}> <span className='blanco'>{n.texto}</span></p> } ) }
        </div>
        <div className={activeOptions3 ? 'activa options': 'noactiva'} >
          { opciones3.map(n => { return <p onClick={()=>{elegirTexto(n.valor, n.texto, 3);toggleOptions(3)}} className='option' value={n.valor}> <span className='blanco'>{n.texto}</span></p> } ) }
        </div>
    </div>
  );
}

export default Situacion;
