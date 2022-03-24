import React, { useState, useCallback, useEffect } from 'react';
 
import ProgressBar from '../components/ProgressBar';
import ReactGa from 'react-ga'
import MenuTexto from '../components/MenuTexto';
import'../assets/css/Texto.css'
function Texto() {
    useEffect(()=>{
      ReactGa.initialize('G-BQYF4G0HMV')
      ReactGa.pageview(window.location.pathname + window.location.search)
      },[])


  return (
    <div className='texto'>
    <div className='container' >
      <div className='row justify-content-center'>
        <MenuTexto/>
        <ProgressBar/>
        <div className='col-10 col-md-6 mt-25 mt-md-5 offset-md-1'>
          <div className='row justify-content-center justify-content-md-left'>
            <h2 className='lila mt-10 mt-md-15 mb-5 mb-md-3 f3'>¿Qué <span className='playfairItalic'>sentido</span> tiene el “lenguaje inclusivo”? </h2>
            <h3 className='playfair mt-1 mb-5 my-md-5'>Aportes lingüísticos para una discusión <span className='playfair'>incómoda</span></h3>
          </div>
          <div className='my-5'>
            <span className='col-12 col-md-5'><b className='f08'>TIEMPO DE LECTURA: 15 MIN. APROX.</b></span>
          </div>
          <div className='my-5 pb-5 under-negro'>
            <a className=' col-10 mx-auto col-md-5 bg-lila p-3 mt-5 blanco' target="_blank" href="FU_DOC_LenguajeInclusivo3.pdf" ><b>Descargá el PDF</b></a>
          </div>

          <h3 id='espacioPublico' className='mt-15 mb-5'>Lenguaje y género en el espacio público</h3>
            <p>Las relaciones entre el lenguaje y el género se han tornado una problemática central en las reflexiones actuales sobre las desigualdades y en las acciones orientadas a disminuir la discriminación en distintos espacios sociales y políticos. En nuestra región, con la proliferación del conocido “lenguaje inclusivo”, el espacio público viene siendo escenario de una discusión sobre el lenguaje que, si bien no es novedosa, ha cobrado impulso y ha puesto sobre la mesa distintas posiciones sobre el lenguaje y sobre el género. Como sostiene la sociolingüista Deborah Cameron (1995), las discusiones sobre el lenguaje suelen tener gran alcance porque, al debatir sobre las formas de hablar o de escribir, se debate, muchas veces implícitamente, sobre cuestiones sociales. </p>
            <p>Particularmente, el “lenguaje inclusivo” refleja y activa cuestionamientos sobre problemáticas tales como las relaciones entre género y poder, la (des)naturalización de las formas de dominación y opresión actuales e históricas, las jerarquías de género, las identidades y los vínculos sexo-genéricos, los procesos de identificación, entre otras. A su vez, el uso de formas como “todxs” o “todes” ha abierto interrogantes sobre el lenguaje: cómo es la relación entre el lenguaje y el mundo; cómo se vinculan el cambio social y el cambio lingüístico; cuán importante es cumplir las normas gramaticales vigentes; cuál es el grado de decisión de cada hablante sobre su lengua; cómo se vinculan las identidades de las personas con sus formas de expresarse y de referirse a otras personas; de qué manera las relaciones e identificaciones de género se vinculan con el habla, la escritura y lectura. Estas discusiones se han dado en distintas regiones del mundo y han sido estudiadas para diferentes lenguas, como el inglés (Alvanoudi, 2020; Cameron, 1998), el francés (Loison-Leruste et al. 2020; Alpheratz, 2019; Abbou et al., 2018), el sueco (Vergoossen et al., 2020; Le Bouteillec, 2020), entre otras. </p>
            <p classname='destacado'>el “lenguaje inclusivo” refleja y activa cuestionamientos sobre problemáticas tales como las relaciones entre género y poder, la (des)naturalización de las formas de dominación y opresión actuales e históricas, las jerarquías de género, las identidades y los vínculos sexo-genéricos, los procesos de identificación, entre otras</p>
            <p>En español hay actualmente varias investigaciones sobre las intervenciones lingüísticas destinadas a influir en las representaciones de género (Tosi, 2021; Rivera Alfaro, 2020; López, Rodríguez Barcia y Cabeza Pereiro, 2020) y trabajos significativos en torno al sexismo lingüístico (Bengoechea, 2005, 2015; Cuba y Acosta, 2016). </p><p>Además, en Argentina se han multiplicado las guías y manuales para el uso de un lenguaje inclusivo y no sexista en distintas entidades, tanto en organismos especializados como el Ministerio de las Mujeres, Géneros y Diversidad y el Instituto Nacional contra la Discriminación, la Xenofobia y el Racismo (INADI), como en instituciones que buscan transversalizar la perspectiva de género en su actividad, como la Honorable Cámara de Diputados de la Nación, el Ministerio de Justicia y Derechos Humanos, el Ministerio de Transporte nacional, el Banco Central de la República Argentina, organismos del Consejo Nacional de Investigaciones Científicas y Técnicas, y universidades como la Universidad Nacional de San Martín, la Universidad Nacional de Rosario, la Universidad de Buenos Aires y la Universidad Nacional de La Plata. A la vez, distintas empresas y fundaciones han incorporado de manera sólida la diversidad y la inclusión en sus estrategias de comunicación ya sea con fines comerciales o sociales, como es el caso de Mercado Libre y de Fundación Huésped respectivamente..</p>

          <h3 id="debates" className='mt-15 mb-5'>Debates en la lingüística</h3>
            <p>En el campo de la lingüística, las primeras problematizaciones significativas sobre género se preguntaron, desde un enfoque binario, por las diferencias entre el habla de las mujeres y de los varones, y sus correspondencias con la dominación masculina. Así, la lingüista Robin Lakoff (1975) sostenía que las formas de hablar expresan la realidad y que, para reducir la desigualdad entre varones y mujeres, es necesario que primero haya cambios sociales, los cuales finalmente darían lugar a cambios lingüísticos. En otras palabras, para Lakoff, el lenguaje representa al mundo pero no tiene el poder de modificarlo. Esta mirada, luego muy discutida, ha perdido su impronta feminista de antaño y ha sido replicada en algunas voces académicas de la actualidad, como Concepción Company Company (Sánchez, 2021) y Pedro Álvarez de Miranda (2018). Esta perspectiva suele alinearse con planteos esencialistas, que entienden las identidades de género como categorías fijas, determinadas por el sexo biológico e independientes de los comportamientos y las decisiones de los seres humanos. </p>
            <br/>
            <p>En el otro extremo, las miradas performativas iniciadas por West y Zimmerman (1983) y profundizadas por Judith Butler (1990), con inspiración de la teoría de los actos de habla de Austin (1962), piensan que el género no se posee, no es algo con lo que se nace ni está determinado por el sexo biológico, sino que se hace social y culturalmente. Desde este enfoque, el lenguaje construye el mundo y, con ello, las identidades y relaciones sexo-genéricas. Así, se abandona la mirada binaria sobre el género, basada en la matriz cisgénero y heterosexual normativa, y se sostiene que el género (junto a las identidades y relaciones sexo-genéricas) es construido y constituido eminentemente por el lenguaje. Esta perspectiva, cabe destacar, se alinea con el necesario abordaje interseccional de los géneros. Desde la lingüística sociocultural (Bucholtz y Hall, 2005), por su parte, las identidades de género no solo son construcciones sino que además emergen en la interacción, mientras se ejerce el lenguaje. La idea de identidad emergente puede ser vinculada, por otro lado, con la noción de “gramática emergente”, propuesta por la lingüística cognitiva (Otheguy y Stern, 2020). Al respecto, Romero y Funes (2018) entienden que la gramática no es estable sino que es el resultado de las elecciones de les hablantes : solo se gramaticalizan las formas más exitosas, es decir, aquellas que permiten satisfacer los objetivos comunicativos del grupo social en cuestión. Para estas autoras, entonces, la “e” y la “x” se han gramaticalizado, es decir, son nuevos morfemas de género inclusivo en español. </p>
            <br/>
            <p>Todas estas posiciones, para las cuales hay una relación necesaria entre género gramatical y género social, subyacen en buena medida a las actuales intervenciones sobre el lenguaje que, mediante las terminaciones “e” y “x” para indicar género en lugar del par “a”/“o”, buscan conseguir cambios sociales. De hecho, las alteraciones en las declinaciones de género que embandera el llamado “lenguaje inclusivo” han contribuido en la visibilización de la desigualdad de género y de la existencia de múltiples identidades sexo-genéricas. </p>
            <br/>
            <p>Actualmente, las investigaciones lingüísticas preocupadas por las relaciones entre lenguaje y género se ubican, a grandes rasgos, en dos grupos. Por un lado, sobre todo desde la lingüística queer aunque no exclusivamente, se han venido indagando las expresiones de género y de sexualidad a través del lenguaje, por ejemplo en el habla de personas trans, travestis o no binarias (Soich, 2019; Borba y Ostermann, 2007). Por otro lado, han proliferado los trabajos sobre medidas e intervenciones lingüísticas de distinta índole en torno al género, en muchos casos concernientes al llamado “lenguaje inclusivo” y al lenguaje no-sexista (Bonnin y Coronel, 2021; Giammatteo, 2020; Martínez, 2020; Niklison, 2020; Raiter, 2020; Tosi, 2019). En cuanto a esto último, no puede soslayarse que las distintas decisiones tomadas para intervenir sobre los usos lingüísticos en relación con el género han venido acompañando otros tipos de medidas, tanto en Argentina como en la región y en el mundo: entre ellas, en nuestro país se destacan las leyes de educación sexual integral en 2006, de matrimonio igualitario en 2010, de identidad de género en 2017, de interrupción voluntaria del embarazo en 2020, de cupo laboral travesti trans en 2020 y el inicio del movimiento #NiUnaMenos en 2015; mientras que en la región y en el mundo son particularmente relevantes la creación de ONU Mujeres en 2010, el Paro Internacional de Mujeres y el movimiento #MeToo en 2017. En suma, como señala Cuba (2018), las intervenciones lingüísticas de corte feminista -propiciadas por distintos actores, ya sean instituciones, agrupaciones o personas- históricamente han sido parte de reformas sociales más amplias que se orientan a alcanzar la igualdad de género.</p>

          <h3 id="inclusion" className='mt-15 mb-5'>Lenguaje e inclusión social </h3>
            <p>El género gramatical puede entenderse como un morfema que se asocia a los sustantivos y, con ello, a otras clases de palabras y que en español ha tenido históricamente una dimensión binaria. A su vez, puede tener correlato semántico o no: por ejemplo, la palabra silla es femenina, aunque la silla en sí misma no lo es. En otras palabras, los géneros gramaticales no necesariamente se corresponden con identidades de género. Sin embargo, varios estudios han notado que es habitual percibir una correlación entre género gramatical y género identitario o social (Niklison, 2020). De ahí que la propuesta de la terminación en “x” o “e” en lugar de los géneros gramaticales femenino y masculino sostenga —y busque mostrar— que hay identidades de género por fuera del binarismo varón-mujer que no son representadas por la gramática del español y, entonces, son difícilmente percibidas por la sociedad. </p>
            <br/>
            <p classname='destacado'>La propuesta de la terminación en “x” o “e” en lugar de los géneros gramaticales femenino y masculino sostiene, y busca mostrar, que hay identidades de género por fuera del binarismo varón-mujer que no son representadas por la gramática del español y, entonces, son difícilmente percibidas por la sociedad.</p>
            <br/>
            <p>A diferencia de las iniciativas del lenguaje no sexista, que buscan visibilizar a la mujer en el marco de una concepción binaria de los géneros mediante estrategias basadas en el desdoblamiento, como “todos y todas”, el lenguaje con “e” o “x” expresa la necesidad de representar a prsonas cuyas identidades e identificaciones escapan a la normatividad cis-heterosexual. De esta forma, señalan que el sexo biológico en tanto construcción cultural, social y política no debería determinar el género social y, al mismo tiempo, exponen la subrepresentación de las personas LGBTIQ+. En todos los casos se busca cuestionar la dominación masculina basada en el androcentrismo, que ubica al varón dominante como medida de lo humano, apropiándose e invisibilizando las experiencias de mujeres en general y de sujetos que no están comprendidos en el estereotipo viril. El principal exponente de este androcentrismo en la gramática de nuestra lengua es el masculino genérico, que la Real Academia Española (RAE) entiende como “masculino inclusivo”. Según esta institución, que en la Argentina suele ser citada como autoridad indiscutida sobre la lengua y sus usos, la inclusión ya existe en el español, en tanto el género gramatical masculino abarca a todos los géneros sociales bajo la lógica declarada de la economía y la simplificación del lenguaje. En su Informe presentado en 2020 se lee que “la expresión lenguaje inclusivo se aplica también a los términos en masculino que incluyen claramente en su referencia a hombres y mujeres [...] Es lo que sucede, por ejemplo, en expresiones como el nivel de vida de los españoles o Todos los españoles son iguales ante la ley” (RAE, 2019: 5,6). La disputa por el significado de la expresión “lenguaje inclusivo” pone de manifiesto el afán institucional por conservar la autoridad sobre la lengua y sus usos, así como la proyección de un enfoque binario sobre los géneros. Como contestación a esta posición normativa, la noción lenguaje incisivo (Salerno, 2019) valora positivamente el gesto de molestar a la Academia y hace hincapié en el carácter provocativo de los nuevos morfemas de género que desafían la norma naturalizada y arraigada, tanto lingüística como social. El lenguaje incisivo incomoda en tanto rompe con las certezas afincadas sobre las formas de representación de las personas y en tanto muestra la incomodidad que genera nuestra gramática a la hora de decir la diversidad. En suma, la “e” y la “x” buscan “señalar la invisibilización lingüística de una realidad social” (Salerno, 2019: 114) o, en otras palabras, cuestionan la idea de que el género gramatical masculino puede representar a la totalidad de las personas, sean cuales fueren sus identidades genéricas. Por lo tanto, más que incluir o hacer entrar a las diversidades en la norma —lingüística, social y política— existente, se trata de hacer una incisión, de romper la norma, de desestabilizar verdades.</p>
            <br/>
            <p className='destacado'>El lenguaje incisivo incomoda en tanto rompe con las certezas afincadas sobre las formas de representación de las personas y en tanto muestra la incomodidad que genera nuestra gramática a la hora de decir la diversidad. Más que incluir o hacer entrar las diversidades en la norma existente, se trata de hacer una incisión, de romper la norma.</p>
            <br/>
            <p>Las posiciones encontradas que suscita el lenguaje incisivo se plasman en una serie de argumentos recurrentes. Hay quienes temen un posible cambio lingüístico o incluso una “deformación” de la gramática. Al respecto, debemos subrayar que, de hecho, la gramática del español requiere morfemas de género: en este sentido, la “e” y la “x” se proponen como tales, obedeciendo las reglas, más que desarticulándolas. Por lo tanto, no habría, en principio, una modificación en la estructura gramatical. La preocupación por el cambio lingüístico, a la vez, suele ser acompañada por el debate de si es posible que este ocurra de manera deliberada o si los cambios decantan con el tiempo. Más allá de que por ahora no se puede saber si el lenguaje incisivo se asentará al punto de dejar de ser incisivo, lo cierto es que el origen de tal fenómeno puede ser tan espontáneo como voluntario. Este debate, por su parte, suele ser escenario de una acusación conservadora, que Pérez y Moragas (2020) han explicado en términos de “tópico del autoritarismo”. Para estas autoras, un rasgo del discurso conservador actual en contra del lenguaje incisivo es la atribución de autoritarismo a grupos feministas, que querrían imponer el uso de la “e”. Es decir, entiende este lenguaje como una obligación y no como una posibilidad. De manera matizada, la discusión sobre la voluntariedad y la obligación se observa en otro argumento, según el cual estas nuevas formas lingüísticas son difíciles de implementar ya que van en contra de la ‘naturaleza’ del español y, por lo tanto, no alcanzarán el objetivo de cambiar la realidad. Al respecto, Yadira Calvo (2017) señala —a partir de Yasmina Okan et al. (2010)— que “el masculino usado como universal puede determinar las representaciones mentales que activamos”. Así, el masculino genérico juega un papel para nada desdeñable en el afianzamiento de jerarquías y desigualdades materiales en tanto puede potenciar estereotipos y prejuicios, afectar la cantidad de personas LGBTQ+ y mujeres que recordamos y hasta determinar qué personas están calificadas o no para un puesto de trabajo de acuerdo al nombre y los atributos de la posición. Calvo agrega que la ambigüedad de los genéricos masculinos no solo dificulta la comunicación sino que induce “a imaginar referentes masculinos” (2017:65). Dicho de otra forma, para esta autora, hay una relación estrecha entre el uso del lenguaje y nuestra percepción de la realidad, lo cual decanta en implicancias materiales que inciden en la reproducción de desigualdades.</p>
            <br/>
            <p>Adoptando un enfoque discursivo, podemos entender el género gramatical como parte de un discurso más amplio que, en tanto tal, articula lenguaje, historia y poder. Desde esta perspectiva, las opciones que plasmamos en los textos escritos y orales pueden expresar posiciones ideológicas que dan cuenta del orden social a la vez que lo constituyen (Fairclough, 2003). En términos de Foucault (1970), es en y por el lenguaje que se constituyen las relaciones de poder. Desde esta mirada, no hay discurso inocente ni neutral.
            La gramática del español, conformada por un conjunto de reglas y plasmada en distintas producciones discursivas —tales como manuales de lengua, cursos de idioma, diccionarios, libros de texto, etc.— es un discurso y, por lo tanto, produce y reproduce posiciones ideológicas y relaciones de poder. Particularmente, en las comunidades hispanohablantes, la RAE se posiciona como enunciadora legítima de discursos sobre la lengua y ocupa un lugar privilegiado en la distribución de los discursos producidos en nuestra sociedad. Esto es relevante porque, según Marc Angenot, “todo discurso legítimo contribuye a legitimar prácticas y maneras de ver, a asegurar beneficios simbólicos (y no hay beneficios ni poderes sociales que no estén acompañados por lo simbólico)” (2010: 66). Desde esta mirada, entonces, la norma lingüística, sugerida y difundida por la RAE, es un discurso legítimo que permite valorar formas de hablar y hablantes, garantizando mayores privilegios para quienes hablen de acuerdo a los parámetros “normales”, estrechamente ligados a procedencias socio-económicas, culturales y —agregamos— sexo-genéricas específicas. Como contracara, quienes no cumplen tales parámetros sufren distintas formas de discriminación por no ajustarse a la norma.
            </p>
            <br/>
            <p className='destacado'>La gramática del español es un discurso y, por lo tanto, produce y reproduce posiciones ideológicas y relaciones de poder. Particularmente, en las comunidades hispanohablantes, la RAE se posiciona como enunciadora legítima de discursos sobre la lengua y ocupa un lugar privilegiado en la distribución de los discursos producidos en nuestra sociedad.</p>
            <br/>
            <p>Esa valoración sobre determinadas formas de hablar es abordada por Mercedes Bengoechea (2005) en su trabajo sobre la discriminación sexual que se produce mediante el lenguaje. Para esta lingüista, hay una serie de mecanismos que “operan reflejando, construyendo, perpetuando y naturalizando el sexismo y el androcentrismo” (2005:4). El masculino genérico es uno de estos mecanismos. Mientras Bengoechea (2015) señala que este recurso es parte de la “gramática del patriarcado”, también lo podemos entender desde la mirada antropológica de Rita Segato (2016), como parte de la “hominización de la humanidad”. Según esta autora, desde la colonización el hombre blanco se ha erigido en modelo de todos los seres humanos. Esto se ha plasmado en el pasaje del hombre en minúscula al Hombre en mayúscula; es decir, al predominio y la naturalización de que el varón (blanco cis-heterosexual) es la norma. Entonces, si la preeminencia del género gramatical masculino es parte de tal hominización, es necesario repensar no solo cómo usamos los géneros gramaticales de nuestra lengua sino también cuál es el carácter mismo de las relaciones entre las normas y el uso del lenguaje. ¿Qué normas lingüísticas cumplimos, cuáles defendemos, cuáles queremos cumplir y defender, y por qué? Si decir “todes” es un gesto incisivo que, más que aceptar el orden social establecido y las normas gramaticales que lo sostienen, busca molestar y cuestionar la cis-heteronormatividad, entonces cabe preguntarse si hay formas de problematizar y desnaturalizar las desigualdades de género sin que esto ‘moleste’. ¿Qué opciones hacemos con el lenguaje? ¿Qué queremos decir y qué decimos efectivamente al adoptar una forma lingüística y no otra? ¿Qué expresamos más allá del contenido de nuestro mensaje? ¿Qué efectos de sentido tienen las expresiones que usamos como hablantes? </p>
            <br/>
            <p>Si el discurso nos atraviesa, si para integrar una sociedad necesitamos naturalizar sus normas, esto no significa que, como señaló Bengoechea (2015), no podamos ser agentes de nuestro decir. Somos, en sus palabras, “cuerpos hablados” y también “cuerpos hablantes”. Esto es, si bien estamos atravesadxs por el discurso de nuestros tiempos, eso no nos quita agentividad como hablantes: al contrario, cada persona puede tomar la palabra y decir “yo” voluntariamente. A esta dimensión optimista apuntamos al proveer herramientas lingüísticas que apuntan a salir del automatismo que nos impone la lengua y a revisar un abanico de opciones que serán más o menos apropiadas para cada situación de comunicación. Con la Caja de herramientas sobre lenguaje y géneros, que pueden encontrar <a href='/caja-de-herramientas' >aquí</a>, buscamos hacer un aporte a la incomodidad y a la reflexión compartida sobre las formas de comunicar y representar las identificaciones y relaciones sexo-genéricas en la cotidianeidad.</p>
            <br/>
          <h3 id="biblio" className='mt-15 mb-5'>Bibliografía</h3>
            <p>
            Abbou, Julie; Arnold, Aron; Candea, Maria & Marignier Noémie. 2018. “Qui a peur de l’écriture inclusive ? Entre délire eschatologique et peur d’émasculation Entretien”. Semen, 44. Recuperado de <a href='http://journals.openedition.org/semen/10800'>http://journals.openedition.org/semen/10800</a> 
            </p><p>
            Alpheratz, My. 2019. “Français inclusif : du discours à la langue ?” Le discours et la langue, 111: 53-74.
            </p><p>
            Alvanoudi, Angeliki. 2020. “Indexing gender, culture, and cognition: An introduction”. Journal of Language and Discrimination 4(1): 1-15. 
            </p><p>
            Álvarez de Miranda, Pedro. 2018. El género y la lengua. Madrid: Turner.
            </p><p>
            Austin, John L. 1962. How to do things with words. Oxford: Oxford University Press.
            </p><p>
            Bengoechea, Mercedes. 2015. “Cuerpos hablados, cuerpos negados y el fascinante devenir del género gramatical”, BHS, 92 (1). 
            </p><p>
            Bengoechea, Mercedes. 2005. Sexismo y androcentrismo en los textos administrativo-normativos. Recuperado de Repositorio CIEM [19/11/2020]: <a href="http://repositorio.ciem.ucr.ac.cr/handle/123456789/265 ">http://repositorio.ciem.ucr.ac.cr/handle/123456789/265 </a>
            </p><p>
            Bonnin, Juan E. & Coronel, Alejandro A. 2021. “Attitudes Toward Gender-Neutral Spanish: Acceptability and Adoptability”. Frontiers in Sociology, 6:629616. doi: 10.3389/fsoc.2021.629616.
            </p><p>
            Borba, Rodrigo & Ostermann, Ana Cristina. 2007. “Do bodies matter? Travestis’ embodiment of (trans)gender identity through the manipulation of the Brazilian Portuguese grammatical gender system”. Gender and Language, 1 (1): 131-147.
            </p><p>
            Bucholtz, Mary & Hall, Kira. 2005. “Identity and interaction: a sociocultural linguistic approach”. Discourse Studies, 7(4-5): 585-614.
            </p><p>
            Butler, J. (1990) Gender Trouble: Feminism and the Subversion of Identity. London: Routledge.
            </p><p>
            Calvo, Yadira. 2017. De mujeres, palabras y alfileres. El patriarcado en el lenguaje. Barcelona: Bellaterra.
            </p><p>
            Cameron, Deborah. 1998. “Lost in translation: non-sexist language”. En D. Cameron (ed.): The Feminist Critique of Language (pp. 155-163). Nueva York: Routledge.
            </p><p>
            Cameron, Deborah. 1995. Verbal Hygiene. New York: Routledge.
            </p><p>
            Cuba, Ernesto & Acosta, Mariel. 2016. “Agitando lo cotidiano. Una conversación sobre el desafío anarquista frente al sexismo en el lenguaje”. The Journal of the Students of the Ph.D. Program in Latin American, Iberian and Latino Cultures, 11(2). Recuperado de <a href='https://lljournal.commons.gc.cuny.edu/2016/12/02/cuba-v11-216/'>https://lljournal.commons.gc.cuny.edu/2016/12/02/cuba-v11-216/</a>
            </p><p>
            Cuba, Ernesto. 2018. “Lingüística Feminista y apuesta glotopolítica”. Anuario de Glotopolítica, 2: 21-40.
            </p><p>
            Fairclough, Norman. 2003. Analysing discourse. Textual analysis for social research. Londres: Routledge.
            </p><p>
            Foucault, Michel. 1970. Arqueología del saber. México: Siglo XXI. (Primera edición en francés en 1969.)
            </p><p>
            Giammatteo, Mabel. 2020. “El género gramatical en español y la disputa por el género”. Cuarenta Naipes. Revista de Cultura y Literatura, 2(3): 177-198.
            </p><p>
            Lakoff, Robin. 1975. Language and Woman's Place. Nueva York: Harper & Row.
            </p><p>
            Le Bouteillec, Nathalie. 2020 “Hen and the pursuit of equality in Sweden”. Cahiers du Genre, 69(2): 205-229.
            </p><p>
            Loison-Leruste, Marie; Perrier, Gwenaëlle & Noûs, Camille. 2020. “Introduction. Le langage inclusif est politique : une spécificité française ?” Cahiers du Genre, 69(2): 5-29.
            </p><p>
            López, Ártemis; Rodríguez Barcia, Susana & Cabeza Pereiro, María del Carmen. 2020. “Visibilizar o interpretar: respuesta al Informe de la Real Academia Española sobre lenguaje inclusivo y cuestiones conexas”. Anuario de Glotopolítica. Recuperado de <a href="https://glotopolitica.com/2020/06/22/visibilizar-o-interpretar-respuesta-al-informe-de-la-real-academia-espanola-sobre-el-lenguaje-inclusivo-y-cuestiones-conexas-2020/">https://glotopolitica.com/2020/06/22/visibilizar-o-interpretar-respuesta-al-informe-de-la-real-academia-espanola-sobre-el-lenguaje-inclusivo-y-cuestiones-conexas-2020/ </a>
            </p><p>
            Martínez, Angelita. 2019. “Disidencias en la conformación de la gramática: el lenguaje inclusivo”. Revista Heterotopías, 2 (4): 1–16.
            </p><p>
            Niklison, Lucía María. 2020. “Lo que la RAE no nombra no existe: una mirada glotopolítica sobre las respuestas de la RAE al lenguaje inclusivo/no sexista”. Cuadernos de la ALFAL, 12(1): 13-32. 
            </p><p>
            Okan, Yasmina; Müller, Stephanie M. & García-Retamero, Rocío (2010) “Relación entre pensamiento y lenguaje: cómo el género gramatical afecta a las representaciones semánticas de los objetos”, Boletín Aelfa, 10 (3): 52-55. 
            </p><p>
            Otheguy, Ricardo y Stern, Nancy. 2000. “The acategorial Lexicon and the Pairing Strategies”. En E. Contini Morava y Y. Tobin (eds.): Between Grammar and Lexicon (pp. 123-157). Amsterdam/Philadelphia: John Benjamins.
            </p><p>
            Raiter, Alejando. 2020. “Variación lingüística e identidad”. Cuarenta Naipes. Revista de Cultura y Literatura, 2(3): 275-294. 
            </p><p>
            Real Academia Española. 2020. Informe de la Real Academia Española sobre el lenguaje inclusivo y cuestiones conexas. [Última consulta: 01/11/2021] Recuperado de: <a href='https://www.rae.es/sites/default/files/Informe_lenguaje_inclusivo.pdf'>https://www.rae.es/sites/default/files/Informe_lenguaje_inclusivo.pdf</a> 
            </p><p>
            Rivera Alfaro, Silvia. 2020. “La planificación lingüística en la Universidad de Costa Rica: política lingüística de lenguaje inclusivo de género, su ejecución y relación con propuestas de universidades hispanohablantes”. Revista de Filología y Lingüística de la Universidad de Costa Rica, 45(2): 269-294.
            </p><p>
            Romero, María Cecilia y Funes, María Soledad. 2018. “Nuevas conceptualizaciones de género en el español de la argentina: un análisis cognitivo-prototípico”. RASAL. Revista de la Sociedad Argentina de Estudios Lingüísticos, 6: 7-39.
            </p><p>
            Salerno, Paula. 2019. “Lenguaje, género y los límites de la desigualdad”. Revista Tábano, 15: 109-115.
            </p><p>
            Sánchez, Karla. 2021. “Entrevista a Concepción Company Company. ‘El lenguaje incluyente es una cortina de humo’”. Letras libres. Recuperado de <a href='https://www.letraslibres.com/mexico/revista/entrevista-concepcion-company-company-el-lenguaje-incluyente-es-una-cortina-humo'>https://www.letraslibres.com/mexico/revista/entrevista-concepcion-company-company-el-lenguaje-incluyente-es-una-cortina-humo</a> 
            </p><p>
            Segato, Rita. 2016. La guerra contra las mujeres. Madrid: Traficantes de sueños.
            </p><p>
            Soich, Matías. 2019. “La exclusión empieza por casa. Análisis crítico de la construcción de La representación discursiva de la identidad de género trans en relación con la familia y otros actores sociales”. Cadernos de Linguagem e Sociedade, 20 (1): 173-200.
            </p><p>
            Tannen, Deborah. 1990. Gender and Discourse. Oxford: Oxford University Press.
            </p><p>
            Tosi, Carolina. 2021. “Linguistic traces of subjectivity and dissent. A discursive analysis of inclusive language in Argentina”. Frontiers in Sociology, 6:633330. doi: 10.3389/fsoc.2021.633330
            </p><p>
            Tosi, Carolina. 2019. “Marcas discursivas de la diversidad. Acerca del lenguaje no sexista y la educación lingüística: aproximaciones al caso argentino”. Álabe. Revista de Investigación sobre Lectura y Escritura, 20. Recuperado de <a href='https://ri.conicet.gov.ar/handle/11336/130480'>https://ri.conicet.gov.ar/handle/11336/130480</a> 
            </p><p>
            Vergoossen, Hellen P.; Pärnamets, Philip; Renström, Emma A. & Gustafsson Sendén, Marie. 2020. “Are New Gender-Neutral Pronouns Difficult to Process in Reading? The Case of Hen in SWEDISH”. Frontiers in Psychology - Language Sciences, 10. Recuperado de <a href='https://doi.org/10.3389/fpsyg.2020.574356'>https://doi.org/10.3389/fpsyg.2020.574356</a> 
            </p><p>
            West, Candace & Zimmerman, Don H. 1983. “Small insults: A Study of Interruptions in Cross-Sex Conversations between Unacquainted Persons”. En B. Thorne, Ch. Kramarae & N. Henley (eds.): Language, Gender and Society (102-117). Rowley, MA: Newbury House.
            </p>
            <h3 id="autora" className='mt-15 mb-5'>Acerca de la autora </h3>
            <p>
            Paula Salerno</p><p>
            Doctora en Lingüística (UBA). Postdoctoranda de CONICET en el Centro de Estudios del Lenguaje en Sociedad (UNSAM). Investigadora responsable del proyecto Las memorias de Malvinas entre lo individual y lo social (FONCYT). Docente del Doctorado en Humanidades (UNSAM) y de la Licenciatura en Letras (UBA).
            </p><p>
            Este documento fue desarrollado por el Centro de Estudios del Lenguaje en Sociedad (CELES) de la Universidad Nacional de San Martín (UNSAM), en el marco de un Convenio de Asistencia Técnica (DIS-2021-114) entre Fundar y el Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET), a través del Laboratorio de Investigación en Ciencias Humanas - UNSAM.
            </p>
            <h3 id="cita" className='mt-15 mb-5'>Modo de citar</h3>
            <p>
            Salerno, Paula (2022). ¿Qué sentido tiene el “lenguaje inclusivo”? Aportes lingüísticos para una discusión incómoda. Buenos Aires: Fundar. Disponible en https://www.fund.ar.
            </p>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Texto;
