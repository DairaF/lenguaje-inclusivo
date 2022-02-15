import React, { useState, useCallback, useEffect } from 'react';
import '../App.css';


function Texto() {

  const [page,setPage]=useState(0);
  const nextSlide = () =>{
    setPage(page+1);
  }
  return (
    <div >
      {page === 0 && <div><h1>¿Qué sentido tiene el “lenguaje inclusivo”? </h1>
      <p>Aportes lingüísticos para una discusión incómoda</p>
      <p>Lenguaje y género en el espacio público</p>
      <button onClick={nextSlide}>Ver más</button>
      </div> }
      {page === 1 && <div>
        <p>Las relaciones entre el lenguaje y el género se han tornado una problemática central en las
reflexiones actuales sobre las desigualdades y en las acciones orientadas a disminuir la
discriminación en distintos espacios sociales y políticos. En nuestra región, con la
proliferación del conocido “lenguaje inclusivo”, el espacio público viene siendo escenario de
una discusión sobre el lenguaje que, si bien no es novedosa, ha cobrado impulso y ha
puesto sobre la mesa distintas posiciones sobre el lenguaje y sobre el género. omo
sostiene la sociolingüista Deborah Cameron (1995), las discusiones sobre el lenguaje
suelen tener gran alcance porque, al debatir sobre las formas de hablar o de escribir, se
debate, muchas veces implícitamente, sobre cuestiones sociales.
Particularmente, el “lenguaje inclusivo” refleja y activa cuestionamientos sobre
problemáticas tales como las relaciones entre género y poder, la des)naturalización de las
formas de dominación y opresión actuales e históricas, las jerarquías de género, las
identidades y los vínculos sexo-genéricos, los procesos de identificación, entre otras. A su
vez, el uso de formas como “todxs” o “todes” ha abierto interrogantes sobre el lenguaje:
cómo es la relación entre el lenguaje y el mundo; cómo se vinculan el cambio social y el
cambio lingüístico; cuán importante es cumplir las normas gramaticales vigentes; cuál es el
grado de decisión de cada hablante sobre su lengua; cómo se vinculan las identidades de
las personas con sus formas de expresarse y de referirse a otras personas; de qué manera
las relaciones e identificaciones de género se vinculan con el habla, la escritura y lectura.
Estas discusiones se han dado en distintas regiones del mundo y han sido estudiadas para
diferentes lenguas, como el inglés (Alvanoudi, 2020; Cameron, 1998), el francés (Loison-
Leruste et al. 2020; Alpheratz, 2019; Abbou et al., 2018), el sueco (Vergoossen et al., 2020;
Le Bouteillec, 2020), entre otras. En español hay actualmente varias investigaciones sobre
las intervenciones lingüísticas destinadas a influir en las representaciones de género (Tosi,
2021; Rivera Alfaro, 2020; López, Rodríguez Barcia y Cabeza Pereiro, 2020) y trabajos significativos en torno al sexismo lingüístico (Bengoechea, 2005, 2015; Cuba y Acosta,
2016). Además, en Argentina se han multiplicado las guías y manuales para el uso de un
lenguaje inclusivo y no sexista en distintas entidades, tanto en organismos especializados
como el Ministerio de las Mujeres, Géneros y Diversidad y el Instituto Nacional contra la
discriminación, la Xenofobio y el Racismo (INADI) como en instituciones que buscan
transversalizar la perspectiva de género en su actividad, como la Honorable Cámara de
Diputados de la Nación, el Ministerio de Justicia y Derechos Humanos, el Ministerio de Transporte nacional, el Banco Central de la República Argentina, organismos del Consejo
Nacional de Investigaciones Científicas y Técnicas, y universidades como la Universidad
Nacional de San Martín, la Universidad Nacional de Rosario, la Universidad de Buenos
Aires y la Universidad Nacional de La Plata. A la vez, distintas empresas y fundaciones han
incorporado de manera sólida la diversidad y la inclusión en sus estrategias de
comunicación ya sea con fines comerciales o sociales, como es el caso de Mercado Libre y
de Fundación Huésped respectivamente.</p>
<h3>Debates en la lingüística</h3>
<p>En el campo de la lingüística, las primeras problematizaciones significativas sobre género
se preguntaron, desde un enfoque binario, por las diferencias entre el habla de las mujeres
y de los varones, y sus correspondencias con la dominación masculina. Así, la lingüista
Robin Lakoff (1975) sostenía que las formas de hablar expresan la realidad y que, para
reducir la desigualdad entre varones y mujeres, es necesario que primero haya cambios
sociales, los cuales finalmente darían lugar a cambios lingüísticos. En otras palabras, para
Lakoff, el lenguaje representa al mundo pero no tiene el poder de modificarlo. Esta mirada,
luego muy discutida, ha perdido su impronta feminista de antaño y ha sido replicada en
algunas voces académicas de la actualidad, como Concepción Company Company
(Sánchez, 2021) y Pedro Álvarez de Miranda (2018). 2 Esta perspectiva suele alinearse con
planteos esencialistas, que entienden las identidades de género como categorías fijas,
determinadas por el sexo biológico e independientes de los comportamientos y las
decisiones de los seres humanos.
En el otro extremo, las miradas performativas iniciadas por West y Zimmerman (1983) y
profundizadas por Judith Butler (1990), con inspiración de la teoría de los actos de habla de
Austin (1962), piensan que el género no se posee, no es algo con lo que se nace ni está
determinado por el sexo biológico, sino que se hace social y culturalmente. Desde este
enfoque, el lenguaje construye el mundo y, con ello, las identidades y relaciones sexo-
genéricas. Así, se abandona la mirada binaria sobre el género, basada en la matriz
cisgénero y heterosexual normativa, y se sostiene que el género (junto a las identidades y
relaciones sexo-genéricas) es construido y constituido eminentemente por el lenguaje. Esta
perspectiva, cabe destacar, se alinea con el necesario abordaje interseccional de los
géneros. Desde la lingüística sociocultural (Bucholtz y Hall, 2005), por su parte, las
identidades de género no solo son construcciones sino que además emergen en la
interacción, mientras se ejerce el lenguaje. La idea de identidad emergente puede ser
vinculada, por otro lado, con la noción de “gramática emergente”, propuesta por la
lingüística cognitiva (Otheguy y Stern, 2020). Al respecto, Romero y Funes (2018) entienden
que la gramática no es estable sino que es el resultado de las elecciones de les hablantes:
solo se gramaticalizan las formas más exitosas, es decir, aquellas que permiten satisfacer
los objetivos comunicativos del grupo social en cuestión. Para estas autoras, entonces, la
“e” y la “x” se han gramaticalizado, es decir, son nuevos morfemas de género inclusivo en
español.
Todas estas posiciones, para las cuales hay una relación necesaria entre género gramatical
y género social, subyacen en buena medida a las actuales intervenciones sobre el lenguaje
que, mediante las terminaciones “e” y “x” para indicar género en lugar del par “a”/“o”, buscan
conseguir cambios sociales. De hecho, las alteraciones en las declinaciones de género que</p>
      </div> }
    </div>
  );
}

export default Texto;
