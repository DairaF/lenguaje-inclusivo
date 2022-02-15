import React, { useState, useCallback, useEffect } from 'react';


function Menu() {
  return (
    <div >
        <a href='/'>home</a>
        <a href='quiz'> Descubrí tu personalidad gramatical </a>
        <a href='caja-de-herramientas'> caja de herramientas </a>
        <a href='texto-expositivo'> ¿Qué sentido tiene el nuevo "lenguaje inclusivo"? </a>
        <a>Acerca del proyecto</a>
    </div>
  );
}

export default Menu;
