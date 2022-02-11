import React, { useState } from 'react';

const End = (props) => {
    let raeCounter = 0;
    let DesdoblamientoCounter = 0;
    let morfemasCounter = 0;
    let idkCounter = 0;
    let prelativosCounter = 0;
    let sabstractoCounter = 0;
    let sColectivoCounter = 0;
    let results=props.fullArray;
    let realize = props.realize;
    let sortResults = () => {
      results.forEach(result => { 
        console.log(result);
        if (result === 1) { raeCounter = raeCounter + 1 }
        else if (result === '2') { DesdoblamientoCounter = DesdoblamientoCounter+1}
        else if (result === '3') { morfemasCounter = morfemasCounter+1}
        else if (result === '4') { idkCounter = idkCounter+1}
        else if (result === '5') { prelativosCounter = prelativosCounter+1}
        else if (result === '6') { sabstractoCounter = sabstractoCounter+1}
        else if (result === '7') { sColectivoCounter = sColectivoCounter+1}
      });
  }
  console.log("renderea end");
  return(
    <div >
        {sortResults()}
        <h1>Te diste cuenta de {realize}/9 oportunidades</h1>
        <h1>Herramientas usadas</h1>
        1) rae {raeCounter}
        <br/>
        2) Desdoblamiento {DesdoblamientoCounter}
        <br/>
        3) nuevos morfemas {morfemasCounter}
        <br/>
        4) No dice {idkCounter}
        <br/>
        5) pronombres relativos {prelativosCounter}
        <br/>
        6) sustantivos abstractos {sabstractoCounter}
        <br/>
        7) sustantivos Colectivos {sColectivoCounter}
    </div>
  );
}

export default End;