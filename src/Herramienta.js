import React, { useState, useEffect } from 'react';
function Herramienta(props) {
  const opciones = props.opciones;
  const handleAnswer = props.handleAnswer;
  const [select,setSelect] = useState(1);
  
  const handleSelectChange = (event) => {
      setSelect(event.target.value);
      handleAnswer(select);
  }
  useEffect(() => {
      handleAnswer(select);
  });

  return (
    <div>
      {/* <h1>{select}</h1> */}
      <select value={select} onChange={handleSelectChange}>

        {
        opciones.map(n => { return <option className='options' value={n[2]}>{n[2]}) {n[0]} - {n[1]}</option> } )
        }

      </select>
    </div>
  );
}

export default Herramienta;

