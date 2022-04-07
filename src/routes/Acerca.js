import React, { useState, useCallback, useEffect } from 'react';
import DocumentMeta from 'react-document-meta';
 
function Acerca() {

  return (
    <div id="acerca" className=' full blanco ' >
        <div className='container' >

            <div className='row mt-5 justify-content-center'>
              <div className='col-10 col-md-8 mb-10'>
                <h2 className='lila mt-35 mt-md-20 f-md-3'>Acerca del proyecto</h2>
                <p className='mt-5 lh1-5' >
                "Hablemos de cómo hablamos" es una propuesta creada a partir de un trabajo de investigación del CELES encargado por Fundar para hacer frente al desafío de tener una comunicación inclusiva. Esta experiencia digital busca abrir herramientas para que podamos reflexionar sobre el significado y las consecuencias de nuestras conductas adquiridas a la hora de hablar y escribir. El lenguaje no es neutral. Por el contrario, es un territorio de disputa política y cultural. Queremos hacer un aporte desde la lingüística para evitar los sesgos excluyentes en el discurso y para que cada persona encuentre las herramientas que le resulten más adecuadas a su forma de expresarse.
                </p>
                <p className='lh1-5'>
                    Nuestra sociedad es lo que hagamos de ella. Este proyecto no busca ser una verdad revelada, sino más bien un espacio de pensamiento y un llamado a quienes creen en la convivencia democrática. Todas las personas tenemos la capacidad de hacer un aporte en el desafío de construir un futuro mejor.
                </p>
                <p className='lh1-5 mt-10 pb-5'>
                Este proyecto fue concebido y realizado por el equipo de Fundar. Además, contó con un grupo de colaboradores externos. Paula Salerno es la autora del documento principal y coordinó el equipo de investigación del CELES/LICH-UNSAM del que participaron Virginia Unamuno, Milagros Vilar, María Florencia Rizzo y Florencia Sartori. Brenda Burgoa coordinó el equipo de desarrollo web y realizó el diseño UX junto con Federico Witzel. La programación backend y la maquetación estuvieron a cargo de Daira Faz. Las ilustraciones son de Paula Maneyro.
                </p>
            </div>
            {/* <div className='col-10 mt-md-20 col-md-6 pl-md-10 lh1-5'>
                <div className='mb-2'>
                  <p><b>quien</b></p>
                  <p>Alguien</p>
                  <p>Alguien</p>
                </div>
                <div className='mb-2'>
                  <p><b>quien</b></p>
                  <p>Alguien</p>
                  <p>Alguien</p>
                </div>
                <div className=''>
                  <p><b>quien</b></p>
                  <p>Alguien</p>
                  <p>Alguien</p>
                </div>
              </div> */}
            </div>
        </div>    
    </div>
  );
}

export default Acerca;
