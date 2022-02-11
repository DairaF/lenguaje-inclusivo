import React, { useState, useEffect } from 'react';
function Herramienta(props) {
  const opciones = props.opciones;
  const handleAnswer = props.handleAnswer;
  const handleRealize = props.handleRealize;
  const [select,setSelect] = useState(1);
  const [isActive, setActive] = useState(false);
  const toggleOnce = () => {
    if(!isActive){
    setActive(!isActive);
    handleRealize();
  }
  };
  const handleSelectChange = (event) => {
      setSelect(event.target.value);
      handleAnswer(select);
  }
  useEffect(() => {
      handleAnswer(select);
  });

  return (
    <div  className={isActive ? 'activo': 'noactivo'} onClick={toggleOnce} >
    {/* <div  className={isActive ? 'activo': 'noactivo'} onClick={e => isActive ? handleRealize() : toggleOnce()} > */}
      <select value={select} onChange={handleSelectChange} >
        {
        opciones.map(n => { return <option className='options' value={n[2]}>{n[2]}) {n[0]} - {n[1]}</option> } )
        }

      </select>
    </div>
  );
}

export default Herramienta;

