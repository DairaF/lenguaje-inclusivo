import React, { useState, useCallback, useEffect } from 'react';
 
function Acerca() {

  return (
    <div id="acerca" className=' full blanco' >
        <div className='container' >
            <div className='row justify-content-center'>
                <h2 className='lila mt-35 mt-md-15 col-10 col-md-7'>Acerca de este proyecto</h2>
            </div>
            <div className='row mt-5 justify-content-center'>
                <p className='col-10 col-md-7 '>
                "Hablemos de cómo hablamos" es una propuesta creada a partir de un trabajo de investigación del CELES encargado por Fundar para hacer frente al desafío de tener una comunicación inclusiva. Esta experiencia digital busca abrir herramientas para que podamos reflexionar sobre el significado y las consecuencias de nuestras conductas adquiridas a la hora de hablar y escribir. El lenguaje no es neutral. Por el contrario, es un territorio de disputa política y cultural. Queremos hacer un aporte desde la lingüística para evitar los sesgos excluyentes en el discurso y para que cada persona encuentre las herramientas que le resulten más adecuadas a su forma de expresarse.
                </p>
                <p className='col-10 col-md-7 '>
                    Nuestra sociedad es lo que hagamos de ella. Este proyecto no busca ser una verdad revelada, sino más bien un espacio de pensamiento y un llamado a quienes creen en la convivencia democrática. Todas las personas tenemos la capacidad de hacer un aporte en el desafío de construir un futuro mejor.</p>
            </div>
        </div>    
    </div>
  );
}

export default Acerca;
