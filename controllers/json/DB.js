var rdir = 'http://www.bibliotecanacional.gov.co/imagenes/antonio_narino';
var rdir = '';
db = {
  glb : {//variable global
    rdir: rdir,
  },
  menu : [
    {titulo:'La Santafé <span>de</span> Nariño',link:'santafe',clase:'normal'},
    {titulo:'<span>La</span> biblioteca',link:'biblioteca',clase:'normal'},
    {titulo:'Nariño <span>en la</span> tertulia',link:'narino',clase:'normal'},
    {titulo:'<span>El</span> Santuario',link:'santuario',clase:'normal'},
    {titulo:'<span>La</span> Imprenta <span>Patriótica</span>',link:'imprenta',clase:'normal'},
    {titulo:'<span>La</span> impresión <span>de los <i>Derechos</i></span><i> del Hombre</i>',link:'derechos',clase:'normal'},
    {titulo:'<span>La</span> aventura <span>del</span> pensamiento',link:'pensamiento',clase:'destacada'},
    {titulo:'Ahora <span>o</span> nunca',link:'ahora',clase:'destacada'},
  ],

  chrono : [
    {year:"1765",date:"9 de abril de 1765", description:"Nace en Santafé de Bogotá Antonio Amador José de Nariño y Álvarez del Casal, hijo del español Vicente de Nariño y Vásquez y la santafereña Catalina Álvarez del Casal."},
    {year:"1785",date:"27 de marzo de 1785", description:"Se casa con la criolla santafereña Magdalena Ortega y Mesa."},
    {year:"1788",date:"1 de enero de 1788", description:"Es nombrado alcalde del segundo voto de la ciudad (juez en lo civil y en lo militar)."},
    {year:"1788",date:"15 de enero de 1788", description:"Nariño escribe a José Celestino Mutis informándole de sus intenciones de “tener en casa una especie de tertulia o junta de amigos de genio”. Esta es la primera noticia que se tiene del Arcano Sublime de la Filantropía."},
    {year:"1789",date:"8 de agosto de 1789", description:"Nariño, alcalde ordinario de Santafé de Bogotá, asume también el cargo de tesorero de diezmos del Arzobispado de la ciudad."},
    {year:"1793",date:"1 de abril de 1793", description:"Entra en funcionamiento la Imprenta Patriótica en Santafé de Bogotá, con cajones de letras que Nariño había traído en 1791."},
    {year:"1793",date:"Diciembre de 1793", description:"Nariño traduce y publica por vez primera en la América española los <i>Derechos del hombre del ciudadano</i>."},
    {year:"1794",date:"29 de agosto de 1794", description:"Nariño es encarcelado por traducir e imprimir los <i>Derechos del hombre del ciudadano</i> acusado de fraguar un intento de sublevación en el virreinato."},
    {year:"1795",date:"Julio - agosto de 1795", description:"Nariño presenta ante la Real Audiencia de Santafé su célebre <i>Defensa</i> por traducir y publicar los  <i>Derechos del hombre del ciudadano</i>."},
    {year:"1795",date:"28 de noviembre de 1795", description:"Nariño es condenado a diez años de prisión en África y extrañamiento perpetuo de América, además de que se le confiscaran todos sus bienes, incluidos su taller de imprenta y su biblioteca."},
    {year:"1796",date:"17 de marzo de 1796", description:"Nariño se fuga en Cádiz. Recorre Madrid buscando una audiencia con las autoridades metropolitanas. Luego viaja a Francia e Inglaterra. Regresa a Santafé en abril de 1797."},
    {year:"1810",date:"19 de septiembre de 1810", description:"Nariño publica las <i>Reflexiones al Manifiesto de la Junta Gubernativa de Cartagena</i>, documento con el que regresa al ruedo político."},
    {year:"1811",date:"14 de julio de 1811", description:"Publica el primer número de su célebre periódico <i>La Bagatela</i> (1811-1812)."},
    {year:"1811",date:"19 de septiembre de 1811", description:"Es elegido presidente del Estado de Cundinamarca tras la dimisión del titular Jorge Tadeo Lozano a raíz de una polémica suscitada por <i>La Bagatela</i>."},
    {year:"1814",date:"14 de mayo de 1814", description:"Las fuerzas realistas apresan a Nariño en la acción de Tacines y conducido a Pasto. De allí lo llevan a Quito, Guayaquil, Lima, y finalmente Cádiz, donde permanecería hasta 1820."},
    {year:"1821",date:"6 de mayo de 1821", description:"Nariño inaugura el Congreso de Cúcuta en calidad de vicepresidente de la República de Colombia."},
    {year:"1823",date:"13 de diciembre de 1823", description:"Nariño muere en Villa de Leyva a la de edad de 58 años."},
  ],

  social : [
    {nombre:'Facebook',link:'https://www.facebook.com/bncolombia'},
    {nombre:'Twitter',link:'https://twitter.com/BibliotecaNalCo'},
    {nombre:'Blog',link:'http://www.bibliotecanacional.gov.co/blogs/'},
    {nombre:'Youtube',link:'https://www.youtube.com/user/bnacionaladmin'},
  ],

///////////
  presentacion : {
    id: 'presentacion',//tambien es el folder de las imagenes
    titulo :'Presentación',
    imagen : 'banner.jpg',
  },
///////////
  santafe : {
    id: 'santafe',//tambien es el folder de las imagenes
    titulo :'La Santafe ilustrada',
    imagen : 'IMG00168.jpg',
    banners : [
      {titulo:'La Santafé de Nariño',parrafos:['A finales del siglo XVIII, <a href="#libro_Cabrer_1797">Santafé de Bogotá</a> se imaginaba a sí misma como una ciudad ilustrada, una ciudad de libros y ávidos lectores. Con cerca de 20.000 habitantes, era corte virreinal, silla arzobispal, sede de la Real Audiencia, de los tribunales de justicia y de las cajas reales, además de asiento de tres colegios mayores, un colegio para niñas, cinco escuelas populares, dos imprentas, un teatro público y un papel periódico oficial. También fue la primera capital de América que contó con una biblioteca pública. La Real Biblioteca Pública de Santafé de Bogotá –hoy Biblioteca Nacional de Colombia– abrió sus puertas el 9 de enero de 1777, bajo el mandato del virrey Manuel Antonio Flórez, y fue presentada en su momento por el <a href="#libro_nro_264_Page_001"><i>Papel Periódico de Santafé de Bogotá</i></a> como “un riquísimo museo dedicado al esplendor del Reino, al aumento de la Sabiduría y a las delicias de la Virtud”. Sus colecciones se sumaron a las de aquellas bibliotecas establecidas y cultivadas por décadas por las órdenes religiosas y por un crecido número de peninsulares y criollos ilustrados.']},
      {titulo:'Nariño: el lector',parrafos:['Entre las bibliotecas privadas de Santafé de Bogotá, destacaba la imponente y ciertamente única biblioteca-librería de Antonio Nariño. Miembro de una de las “primeras familias del Reino”, hijo del gallego Vicente de Nariño y Vásquez, contador oficial de las cajas del Reino, y de la santafereña Catalina Álvarez del Casal, Nariño fue un apasionado de los libros, un gran lector y un autodidacta formidable: todo parece indicar que estudió por algún tiempo en el Colegio Mayor de San Bartolomé, aunque no concluyó sus estudios por razones médicas. Desde muy niño tuvo acceso a las colecciones de libros. Cientos de lecturas le dieron una sólida formación intelectual y un bagaje de ideas difícilmente comparable. Durante el proceso judicial que enfrentó en 1793 por traducir y publicar <i>La Declaración de los Derechos del Hombre y del Ciudadano</i> él mismo mencionó los “tantos libros y papeles públicos que solía leer en los momentos de [su] reposo”.','Los testimonios de los amigos de Nariño –y también de sus malquerientes– destacan el talante de lector incansable del santafereño. Según le escribió a Nariño uno de sus amigos más entrañables, el ilustrado antioqueño Francisco Antonio Zea, en una carta fechada en junio de 1794: “no puedo abrir un libro donde no lea mis deberes para contigo, que no me recuerde tus bondades”. Asimismo, el historiador José Manuel Restrepo escribió en su <i>Historia de la Revolución de la República de Colombia</i> –no sin cierta sorna– que Nariño “se dedicó a leer, formando una buena librería y reuniendo varias máquinas de física. Con esto y con una imprenta que tenía y en que se publicaban algunos folletos, pasaba por un sabio en Santafé”. Las autoridades reales incluso reconocían sus “conocimientos, instrucción y buenas luces” y en el escrito de acusación formal en su contra lo describían como un gran lector, como si de un nuevo oficio se tratara: “[la] lectura de los autores de que se vale ha sido su principal ocupación”.']},
      {titulo:'La biblioteca de Nariño',parrafos:['Si bien la biblioteca de Nariño no era la más grande de la ciudad, como lo han querido ver algunos de sus biógrafos, sí era una colección de importancia y calidad extraordinarias, ampliamente reconocida por los santafereños, y leída y consultada por los principales ilustrados del virreinato –cosa que no pasaba con otras colecciones privadas–. Sin duda, hubo otras bibliotecas mucho más grandes, como la de José Celestino Mutis, que contaba con cerca de 3000 títulos –una cifra sorprendente para la época–, y también otras, aunque modestas, más especializadas, como la del científico peninsular Juan José D’Elhuyar compuesta por 166 obras. &nbsp;Sin embargo, la biblioteca de Nariño, atiborrada de libros, periódicos y algunos manuscritos, y bien equipada con cartas geográficas e instrumentos de química y física, se convirtió, quizá como ninguna otra, en un crisol donde comenzaron a tomar forma entre nosotros nuevas maneras de comprender el mundo social, económico y natural y, quizá más importante en este caso, el mundo político.']},
      {titulo:'La juventud ilustrada',parrafos:['Aunque la biblioteca dice mucho de los gustos de su dueño y de sus múltiples inquietudes intelectuales, también habla sobre la sociedad en la que se inserta y del grupo ilustrado que la frecuenta. Ciertamente, los libros y los impresos empezaron a tener un papel central en la sociedad neogranadina de finales del siglo XVIII, en particular aquellos relacionados con los llamados “saberes útiles” y las “lecturas políticas” de los acontecimientos recientes. Es evidente su mayor presencia y circulación, por lo menos entre las gentes ilustradas, aunque sabemos que &nbsp;también circulaban entre los sectores populares. El libro, la escritura, la lectura y el periodismo experimentaron una revalorización importante entre los neogranadinos, hecho que favoreció la circulación de lo que Zea llamó el “lenguaje de toda la juventud ilustrada y de los pocos hombres que piensan y conocen”, además de permitir que él mismo se definiera como un estudioso de las “bellas letras”:','<blockquote>Yo aquí en mi retiro, ocupado en el delicioso estudio de las flores, lejos de la corrupción de la capital, vivo tranquilo. Si el tedio de la soledad se viene a apoderar de mi corazón, en el estudio de las bellas letras, que ha sido la pasión de mi vida, hallo un seguro consuelo.</blockquote>']},
      {titulo:'Las tertulias',parrafos:['Una de las grandes transformaciones de la sociedad letrada fue el surgimiento y la extensión de las tertulias, espacios privilegiados para el intercambio y el debate de ideas que fomentaron nuevas formas de sociabilidad alrededor de la lectura y la circulación de impresos y manuscritos. Estas funcionaban en la mayoría de los casos de manera periódica y siguiendo ciertas convenciones: se organizaban según un “orden del día”, se podían o no llevar actas de lo acontecido, eran acompañadas por viandas y se llevaban a cabo siempre en un mismo lugar –casi siempre en casa de particulares– o, por el contrario, podían ser itinerantes. Entre ellas destacaron la “Tertulia Eutropélica” (1792-1794), fundada por el director del <i>Papel Periódico de Santafé de Bogotá,</i> el cubano Manuel del Socorro Rodríguez; la “Tertulia del Buen Gusto” (1801-1808), organizada por la ilustrada santafereña Manuela Sanz de Santamaría, y “El Arcano Sublime de la Filantropía”, fundada por Nariño.','Las tertulias se convirtieron en campos de acción política, antes reservados al ámbito monárquico, en los que diversos temas eran sometidos a la opinión razonada de los asistentes: allí se discutía sobre la naturaleza de la comunidad y sobre las reformas necesarias a la administración virreinal; se construyeron nociones comunes <a href="#libro_nro_3_Page_002">sobre qué era legítimo y sobre los valores</a> que todos debían considerar como superiores. En pocas palabras: funcionaron como verdaderos laboratorios en los que se elaboraron nuevas posibilidades políticas. En aquellas reuniones se pusieron en circulación y se resignificaron conceptos fundamentales como “libertad”, “igualdad”, “felicidad” y “buen gobierno”, al tiempo que se cultivaron las virtudes correspondientes a esa nueva manera de entender el mundo: la amistad, la civilidad, la sociabilidad y el “buen gusto”.']},
      {titulo:'El libro: un bien escaso',parrafos:['En la Santafé de Bogotá ilustrada, las dificultades para conseguir nuevos libros, colecciones completas y últimas ediciones a veces parecían insuperables. Y, precisamente, Nariño destacó en su época por arriesgarse con empresas que intentaban salvar este tipo de dificultades. En 1793, el periodista Manuel del Socorro Rodríguez dio cuenta en su <i>Papel Periódico de Santafé de Bogotá</i>, por ejemplo, de cómo para los “pueblos de América” el “comercio de libros ha sido siempre demasiado escaso con respecto a lo que debía ser según el estado de su ilustración”, mientras que Francisco José de Caldas, uno de los más destacados pensadores de la época, se lamentaba por no hallar en toda la extensión del virreinato, desde Cartagena hasta Quito, los libros más clásicos y fundamentales para el estudio de la botánica. Según le escribió a su amigo Santiago Arroyo desde Popayán en <a target="_blank" href="http://www.bibliotecanacional.gov.co/recursos_user/digitalizados/986_03c15c1975.pdf">noviembre de 1800</a>:','<blockquote>Pero ¡cuántos obstáculos hay que vencer para llegar a una medianía! Sin libros, sin maestros, todo se ha de sacar de los pocos [libros] que a fuerza de fatigas he podido conseguir. No tengo a mi disposición, ni hay más en Popayán, que el Curso escaso de Ortega, la Parte Práctica de Linneo, las Instituciones de Toumeford y el Quer. Estos forman mi biblioteca: y ya ve usted lo poco que hay en esto, y cuánto falta para tener lo más necesario. Vivimos, mi Santiago, en un país casi bárbaro, a 3,000 leguas de las naciones cultas y de la ilustración.</blockquote>','Sin embargo, no solo se trataba de escasez de libros y nuevos materiales de estudio. Ciertos sectores veían en las novedades ilustradas una amenaza a sus privilegios y prerrogativas. La actitud de los fiscales de la Real Audiencia frente a algunos libros de Nariño durante todo el proceso seguido en su contra en 1793 pone de presente la importancia social de sus lecturas, al tiempo que revela las múltiples inquietudes y prevenciones que suscitaban entre algunos círculos del Gobierno Real. Más aún, en múltiples ocasiones, Nariño fue reconvenido por poseer una compilación de las leyes federativas de la América inglesa y acusado de querer copiar esta “legislación para la nueva forma de gobierno”. El santafereño respondió a las acusaciones haciendo énfasis en que la posesión de libros no implicaba necesariamente la adhesión a todos sus principios, es decir, subrayó el potencial de la lectura crítica y puso en evidencia, no sin cierto sinsabor, cómo cuando se persiguen las ideas, se persiguen, de necesidad, los libros: “no pudiera yo citar personas más condecoradas que yo, que tienen libros semejantes y en abundancia, y peores, peores sin comparación, y no por eso se les mira como sospechosos?”.','Finalmente, con el propósito de contribuir a las “luces del Reino”, atender un creciente mercado conformado por hombres ilustrados –religiosos, burócratas, estudiantes y profesores universitarios–, y mejorar su propia fortuna, Nariño fundó el primer taller particular de imprenta en la capital virreinal del que se tenga noticia en la historia colombiana: la Imprenta Patriótica, donde imprimió la traducción de <i>Los Derechos del Hombre y del Ciudadano</i>.']},
    ],
    botones : [
      {tipo:'imagen',link: rdir+'/img/santafe/IMG00168.jpg',estilo:'imagen en pop-up',pie:'<i>Esquina noreste de la plaza – Nariño</i>. Grabado tomado de <i>El papel periódico ilustrado</i>, 1 de enero de 1887, p. 168. Biblioteca Nacional de Colombia.'},
      {tipo:'imagen 2',link: rdir+'/img/santafe/Cabrer_1797.jpg',estilo:'imagen en pop-up',pie:'<i>Plano de la ciudad de Santafé de Bogotá y sus alrededores</i> (1797), Carlos Francisco Cabrer (acuarela sobre tela, 122 X156 cms.), Servicio Cartográfico del Ejército de Madrid, registro: Cartografía y relaciones históricas de ultramar, tomo V: Colombia, Panamá, Venezuela, lámina 164).'},
      //{tipo:'vídeo',link:'#'},
    ],
    libros : [
      {
        titulo:'<i>Plano de la ciudad de Santafé de Bogotá y sus alrededores (1797), por Carlos Francisco Cabrer (Servicio Cartográfico del Ejército de Madrid)</i>',
        hover:'',
        pie:'<i>Plano de la ciudad de Santafé de Bogotá y sus alrededores</i> (1797), Carlos Francisco Cabrer (acuarela sobre tela, 122 X156 cms.), Servicio Cartográfico del Ejército de Madrid, registro: Cartografía y relaciones históricas de ultramar, tomo V: Colombia, Panamá, Venezuela, lámina 164).',
        url: rdir+'/img/santafe/Cabrer_1797.jpg',
        archivo:'Cabrer_1797',
        estilo:'imagen en pop-up',
      },
      {
        titulo:'"Erección de la Real Biblioteca", <i>Papel Periódico de Santafé de Bogotá</i> (diciembre 1796)',
        hover:'',
        pie:'La Real Biblioteca Pública de Santafé de Bogotá –hoy Biblioteca Nacional de Colombia– abrió sus puertas el 9 de enero de 1777 y fue presentada como “un riquísimo museo dedicado al esplendor del Reino, al aumento de la Sabiduría y a las delicias de la Virtud”. "Erección de la Real Biblioteca", <i>Papel Periódico de Santafé de Bogotá</i> (diciembre 1796), Biblioteca Nacional de Colombia RS 1.',
        url: 'http://www.bibliotecanacional.gov.co/recursos_user/bookreader/nro_264/#page/1/mode/1up',
        archivo:'nro_264_Page_001',
        estilo:'Flip',
      },
      {
        titulo:'“Los frutos del árbol noble”, <i>Papel Periódico de Santafé de Bogotá</i> (febrero de 1791)',
        hover:'',
        pie:'Este texto, atribuido a Antonio Nariño, habla sobre los valores del ciudadano ilustrado. “Los frutos del árbol noble”, <i>Papel Periódico de Santafé de Bogotá,</i> febrero de 1791, Biblioteca Nacional de Colombia, Fondo Pineda 183.',
        url:'http://www.bibliotecanacional.gov.co/recursos_user/bookreader/nro_3/#page/2/mode/2up',
        archivo:'nro_3_Page_002',
        estilo:'Flip',
      },
    ],
  },
///////////
biblioteca : {
  id: 'biblioteca',//tambien es el folder de las imagenes
  titulo : 'La biblioteca-librería',
  imagen : 'IMG00164.jpg',
  banners : [
    {titulo:'La biblioteca-librería',parrafos:['La biblioteca de Nariño comenzó a tomar forma con los libros que le dejó su padre, Vicente Nariño, quien fue contador oficial de las reales cajas de Santafé. En su testamento, suscrito en noviembre de 1778, el otrora contador da cuenta de manera detallada de los libros que contenía su biblioteca: <a target="_blank" href="http://www.bdigital.unal.edu.co/8059/1/Archivo_Nari%C3%B1o.html#12c">108 títulos y 245 volúmenes</a>, clasificados según la entrada temática y distinguiendo, en algunos casos, su tipo de encuadernación, en pasta o en pergamino. Poseía libros místicos, de derecho, de filosofía y gramática, libros de “historias” y poesía, libros en francés y una pequeñísima colección miscelánea donde figuraban, entre otros, un ejemplar escrito en alemán y “un librito de montar a caballo”. El padre se hizo así a un importante repertorio de obras, que incluía, además, aquellas legadas por su suegro, el abogado madrileño y fiscal de la Real Audiencia Manuel de Bernardo Álvarez.']},
    {titulo:'Número de libros',parrafos:['Aunque no ha sido posible establecer de manera concluyente cuántos y cuáles títulos conformaban la biblioteca de Nariño, es común oír que su colección rondaba los 6000 volúmenes. El mismo Nariño calificó su colección, en su <i>Defensa</i> de 1823, como “una exquisita librería de muchos miles de libros escogidos” y años antes los había definido como “excelentes”, tanto así que pasaba “su valor de tres mil pesos”. Sin embargo, para establecer esta cifra solo contamos con los inventarios realizados por las autoridades virreinales con motivo del proceso instaurado en contra del santafereño en 1794 por traducir e imprimir de manera clandestina la <i>Declaración de los derechos del hombre y del ciudadano</i>. Según estos documentos, en aquella ocasión se embargaron cerca de 700 títulos y un total de 1881 volúmenes. No obstante, según Eduardo Martínez Ruiz, el principal estudioso de la biblioteca de Nariño, no fueron 700 sino 630, pues había varios títulos repetidos. En todo caso, la biblioteca no se encontraba completa al momento del secuestro, pues Nariño prestaba sus libros a un círculo amplio de lectores locales y también es probable que haya ocultado en casas de sus amigos más cercanos otros de sus libros.','Sin embargo, gracias a las acuciosas diligencias de los fiscales de la Real Audiencia se puede conocer hoy con certeza el alcance de la colección de Nariño: la lista de libros embargados respeta el orden que guardaban en la biblioteca del santafereño y mantiene las entradas de título, autor, tamaño del libro, tipo de encuadernación y número de tomos. <a target="_blank" href="http://www.bdigital.unal.edu.co/8059/1/Archivo_Nari%C3%B1o.html#54c">La primera de las dos diligencias de embargo</a> que se llevaron a cabo se realizó en la casa de Nariño, ubicada en la Plaza de San Francisco, en tres momentos diferentes. Comenzó el 30 de agosto de 1794, continuó al día siguiente y finalizó el 3 de septiembre. En esa oportunidad fueron confiscados un total de 672 títulos y 1803 volúmenes, además de cientos de objetos personales: ropas, joyas, muebles y enseres, entre los que vale la pena mencionar una “máquina eléctrica, con su mesita y demás anexos correspondientes”, “un bracerito de plata, de dar candela”, “una papelera de escribir, con todas sus gavetas correspondientes”, “un reloj de sobremesa, ovalado, con pie de palo dorado” y “un cajoncito con 23 piezas de herramienta de carpintería”.']},
    {titulo:'El catálogo',parrafos:['Los libros incautados a Nariño incluían clásicos griegos, latinos, españoles y franceses, y títulos de los más reconocidos autores del momento en materia política, filosófica y económica; y conviven sin problema obras divulgativas y populares con libros altamente especializados. El santafereño sabía conciliar la tradición humanística heredada (encarnada en la literatura, la gramática, la retórica, la jurisprudencia hispánica, las historias clásicas y las crónicas indianas) con los nuevos intereses en las “ciencias de la naturaleza” (física, química, geografía y mineralogía) y la economía política, el periodismo, la educación y la literatura e historia modernas. Finalmente, los libros de devoción, apologética cristiana y teología también campean en sus colecciones, lo que evidencia el peso que seguían teniendo las lecturas religiosas como formas privilegiadas de comprensión del mundo para este momento.','<a target="_blank" href"https://www.google.com/url?q=http://www.bdigital.unal.edu.co/8059/1/Archivo_Nari%25C3%25B1o.html%2358c&sa=D&ust=1443968806856000&usg=AFQjCNGMJJD5HMcMS6JmZlmXu4MXFH1rAw">La segunda diligencia</a> se llevó a cabo unas semanas después, el 20 de septiembre de 1794, en la celda de fray Andrés de Jijona, en el Hospicio de los Padres Capuchinos de Santafé. Allí fueron incautados 28 títulos y un total de 78 volúmenes que el hermano mayor del santafereño, José Nariño, había dejado en manos del religioso valenciano después de esconderlos en distintos lugares. El oidor Joaquín Mosquera y Figueroa, que adelantaba el proceso de Nariño, ordenó que se llevara a cabo un procedimiento de reconocimiento e incautación en ese lugar, pues algunos compañeros de Jijona habían comentado a oficiales militares que los libros estaban escondidos en el convento y la noticia ya corría como polvorín por la ciudad. ','Estos libros dan cuenta del catálogo de lecturas prohibidas por la Corona, al mismo tiempo que dan luces sobre las lecturas que más curiosidad despertaba en los inquietos estudiantes de los colegios santafereños: obras de Voltaire, Raynal, Robertson, Holbach, Montaigne y Montesquieu; también la famosa colección de poesía erótica compuesta por Ovidio (el tomo V de  <i>Amores</i>) y un librito titulado <i>Les Amours de Madame Lavariere</i>, una de las más famosas compañeras sentimentales de Luis XIV. Y aunque eran libros prohibidos, todo parece indicar que Nariño contaba con autorización del deán de la catedral, Francisco Martínez D’acosta (a quien el santafereño prestaba libros), para leerlos y conservarlos por un tiempo. Según los fiscales del caso, estos libros se encontraban en pésimo estado, mojados y maltratados, “como si los hubiesen metido en el agua, de modo que cuesta trabajo, en no pocos, desunir sus hojas para leerlas”. Este descubrimiento garantizaba la inculpación definitiva del santafereño.']},
    {titulo:'Nariño: el librero',parrafos:['Nariño tenía en su biblioteca, ubicada en su casa de la Plazuela de San Francisco, “una colección completa de cuanto era menester”, pues ésta también funcionaba como una librería: entonces era común utilizar el término ‘librería’ para lo que se conoce hoy en día como ‘biblioteca’ y ambos vocablos eran intercambiables y funcionaban como sinónimos. Allí se leían, estudiaban, prestaban, intercambiaban, compraban y vendían libros nuevos y usados, al igual que algunos periódicos provenientes de otros países de América y Europa, que llegaban al virreinato a través del comercio legal y eran aprobados por la censura eclesiástica. Otros –considerados amenazas al orden político hispánico o que “atentaban” contra la pureza de la religión católica– llegaban de contrabando. En este sentido, es probable que los circuitos trazados por los negocios de exportación de quina, tabaco, cacao y azúcar que tenía Nariño, y que incluían ciudades como Cádiz, La Habana, Veracruz y Cartagena, seguramente le permitieron al santafereño aventurarse en este mercado.','Nariño era un juicioso y avezado librero: captaba los intereses y las necesidades de su público, y, aprovechando su amplio bagaje de lecturas, le transmitía su fascinación por los libros y ayudaba a modelar su criterio. Su biblioteca estaba al servicio de personas que se imaginaban a sí mismas como parte de un círculo ilustrado y lector, versado en los clásicos, y cada vez más familiarizado con las “lecturas del siglo” y con idiomas como el francés y el inglés, además del latín. Nariño prestaba y vendía sus libros a familiares, amigos y contertulios, profesores y estudiantes universitarios, funcionarios reales y religiosos seculares y regulares: personajes como Camilo Torres, José Antonio Ricaurte, Joaquín Camacho, Antonio Morales, el ya mencionado deán Martínez, el padre Miguel Isla, los extranjeros Luis de Rieux y Manuel Froes, y el mismo Mutis, figuran entre aquellos a quienes Nariño había prestado libros antes de ir a prisión en agosto de 1794 y muchos de ellos también eran habituales compradores.']},
    {titulo:'El comercio de libros',parrafos:['En muchas oportunidades amigos y conocidos le vendieron a Nariño sus propios libros. Es el caso del naturalista y economista Pedro Fermín de Vargas, quien, antes de fugarse del virreinato, le vendió sus libros al santafereño por cerca de 700 pesos y se los remitió desde Zipaquirá. De hecho, algunos de los libros prohibidos incautados en la celda de Jijona se encontrarán con su signatura. Asimismo, todo parece indicar que Nariño estaba interesado en adquirir algunos libros de José Celestino Mutis y por eso pidió a Zea averiguar su valor.','Si bien el comercio de libros no era un negocio boyante, sí dio réditos gracias al espíritu emprendedor de su dueño. Sin duda, Nariño conocía muy bien los arbitrios del mercado de libros, y así lo dejó consignado en su <a target="_blank" href="http://www.bdigital.unal.edu.co/8059/1/Archivo_Nari%C3%B1o.html#58c"><i>Defensa</i></a>: “yo he tenido comercio de libros, conocía el lugar, sabía que hay sujetos que pagaban bien un buen papel”. Incluso, personajes como el ilustrado bugueño Miguel Cabal Barona le pagaron oro por algunos libros. De hecho, según se desprende de los <a target="_blank" href="http://www.bdigital.unal.edu.co/8059/1/Archivo_Nari%C3%B1o.html#58c">papeles incautados</a> por las autoridades virreinales, entre los planes más inmediatos del santafereño se encontraba darle un nuevo impulso a su librería:','<blockquote>Se hará la factura de los libros, exceptuando sólo los que se contemplen necesarios para el uso, y el resto se harán diligencias activas para su venta a precios moderados, recogiendo todos los que están regados, y recuperando algunos útiles de los vendidos y que no se han pagado.</blockquote>','El testimonio del médico y naturalista panameño Sebastián José López Ruiz, iniciado ante la Real Audiencia con motivo del secuestro de todos los bienes de Nariño, evidencia el buen nombre que se había ganado el santafereño como librero. La causa tenía como objetivo salvar del embargo algunos enseres y 66 títulos (192 volúmenes) que le pertenecían al panameño y que estaban a la venta, a título de depósito, en la casa del santafereño –Nariño tenía negocios importantes relacionados con exportaciones de quina con López Ruiz, razón por la cual este le debía una considerable suma de dinero–. Según consta en la <a tsrget="_blank" href="http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/search/asset/68843">relación firmada por López Ruiz</a> en octubre de 1797, había enviado sus libros a casa de Nariño por “la mayor comodidad que podrían tener en su casa para venderse, por la frecuencia de gentes” que allí entraban.','Entre los libros de López Ruiz se encontraban obras de medicina (compendios de cirugía, viruelas, partos y enfermedades venéreas), historia natural, mineralogía, botánica, geografía, historia y teología. Sin embargo, en el listado de los libros embargados a Nariño figuran muy pocos de los reclamados por el naturalista, quizá porque el santafereño había conseguido venderlos con antelación, mientras que aquellos que no habían encontrado salida fueron embargados con los demás y corrieron su misma suerte.']},
    {titulo:'La suerte de la biblioteca ',parrafos:['Según documentos del proceso de Nariño, muchos de los libros de su biblioteca fueron subastados y su producto se entregó a los fiadores del santafereño en el caso de la Tesorería de Diezmos. La venta no fue fácil ni inmediata, y nunca fue del todo esclarecida en vida de Nariño. El 18 de mayo de 1795, el santafereño le escribió a la Real Audiencia: “yo sé que desde el principio han estado clamando muchas personas por comprar varios muebles y alhajas, pero sobre todo libros que todos son excelentes y pasa su valor de tres mil pesos y con todo no se ha vendido ni el valor de un peso”. La prueba reina al respecto, sin embargo, es el <a target="_blank" href="http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/search/asset/68843">testimonio del escribano real Juan Nepomuceno Camacho</a>, quien afirmará en su momento:','En el embargo y venta de libros no se separaron los que se dicen corresponder a don Sebastián López, así porque todos los que había en casa de don Antonio Nariño estaban juntos, sin división ni especificación alguna de sus dueños, como porque en aquel tiempo no se sabía cuáles fuesen aquéllos ni sobre el particular había recaído providencia, por lo cual se procedió a la venta de libros indistintamente, bajo la inteligencia de que todos eran de Nariño, y en ella entrarían los de López en el todo o en parte, porque algunos quedaron sin rematarse, lo que puede verse de las respectivas diligencias, y el producto de los vendidos, junto con el de los otros bienes embargados entró en poder de don Antonio de las Cajigas, depositario de ellos.','Sin embargo, teniendo en cuenta el valor y la importancia de los libros de Nariño, es muy probable que aquellos que no fueron vendidos terminaran en los repositorios de la Biblioteca Real –que se encuentren hoy en la Biblioteca Nacional de Colombia–. Según el investigador Eduardo Ruiz Martínez, existen ciertas coincidencias inquietantes al revisar los ejemplares de los libros correspondientes a los siglos XVII y XVIII custodiados por la Biblioteca Nacional de Colombia, los cuales se ajustan a los mismos títulos y autores que figuraban en la biblioteca de Nariño.','Por su parte, es muy probable que los libros hallados en La Capuchina fueran destruidos. Sin embargo, más allá de la materialidad de los libros del santafereño, es innegable que estos se constituyeron en faros de ilustración de ideas para toda una generación y contribuyeron, en una manera realmente difícil de ponderar, a la instalación de una verdadera sociedad de opinión, de crítica argumentada y de libre examen entre nosotros. Como bien dirá en su célebre <i>Defensa</i>, firmada en julio de 1795: “para hacer la felicidad del reino, es necesario dar libertad a las plumas, haciendo la restricción a la religión y al gobierno” y “se debe [poder] hablar y escribir libremente”.']},
//    {titulo:'',parrafos:['']},
  ],
  botones : [
    {tipo:'imagen',link: rdir+'/img/biblioteca/IMG00164.jpg',estilo:'imagen en pop-up',pie:'Para evitar que las autoridades virreinales descubrieran los ‘libros prohibidos’ de su biblioteca, Nariño los envió en 1794 a la iglesia convento de La Capuchina para que los guardara Fray Andrés de Jijona. <i>Iglesia y alameda de la Capuchina</i>. Grabado tomado de <i>El papel periódico ilustrado</i>, 15 de febrero de 1882, p. 164. Biblioteca Nacional de Colombia.'},
    //{tipo:'',link:''},
  ],
  libros : [
    {
      titulo:'',
      hover:'<i>Elementa chemiae</i> (1752). Hermann Boerhaave',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/search/asset/69765',
      archivo:'rg_5187_v1_Pagina_006',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Introducción al conocimiento de las bellas artes</i>(1799). Don Francisco Martinez',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f88193/ada?te=ASSET',
      archivo:'fcuervo_1799_Pagina_005',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'Elementos de matemática (1777-1787). Benito Bails',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f73318/ada?te=ASSET',
      archivo:'fcaro_2110_Pagina_005',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Memorias instructivas y curiosas...</i> (1778-1791). Miguel Jerónimo Suárez y Núñez',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f89161/ada?te=ASSET',
      archivo:'fmutis_2083',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Ensayo de la Sociedad Bascongada de los Amigos del PaÍs </i>(1768). Thomás de Robles',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f58016/ada?te=ASSET',
      archivo:'fmutis_1850_pag_002',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Oración apologética por la España y su mérito literario</i> (1786). Juan Pablo Forner',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f87446/ada?te=ASSET',
      archivo:'fcuervo_1712_Pagina_004',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'Discurso sobre el fomento de la industria popular (1883). Pedro Rodríguez Campomanes',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f88025/ada?te=ASSET',
      archivo:'fcuervo_866_Pagina_004',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Theatro crítico universal</i> (1734-1776). Benito Jerónimo Feijóo y Montenegro',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f89162/ada?te=ASSET',
      archivo:'fmutis_4036',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Historia natural del hombre </i>(1773). Andrés Ortega',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f89163/ada?te=ASSET',
      archivo:'fmutis_3232',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Encyclopédie méthodique, ou par ordre de matières</i> (1782-1832)',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f74758/ada?te=ASSET',
      archivo:'fpineda_521_v1_pte1_Pagina_005',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Don Quixote de la Mancha, </i>Tomo I (1757). Miguel de Cervantes Saavedra',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f87685/ada?te=ASSET',
      archivo:'fcuervo_509_Pagina_003',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>La filosofia moral declarada y propuesta a la juventud</i> (1780).  Ludovico Antonio Muratori',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f98006/ada?te=ASSET',
      archivo:'fmutis_339',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>La Araucana</i> (1597). Alonso de Ercilla',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f86767/ada?te=ASSET',
      archivo:'fcuervo_112_Pagina_002',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Pensées de M. Pascal sur la religion, et sur quelques autres sujets</i> (1709). Chez Henri Wetstein',
      pie:'',
      url:'http://www.gutenberg.org/ebooks/18269',
      archivo:'rg_22235',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Species plantarum</i> (1762-1763). Carl von Linné',
      pie:'',
      url:'http://www.gutenberg.org/ebooks/20771',
      archivo:'fmutis_2932',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Elementa juris naturae et gentium</i> (1789)',
      pie:'',
      url:'Pendiente URL de Conservación ',
      archivo:'rg_10734',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Histoire philosophique et politique...</i> (1783-1784). Guillaume Thomas Francois Raynal',
      pie:'',
      url:'Pendiente URL de Conservación',
      archivo:'rg_5884_001',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Oeuvres completes de Voltaire</i> (1785)',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f98005/ada?te=ASSET',
      archivo:'farciniegas_7507',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Mercurio de España</i> (1784-1805). Anónimo',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f98476/ada?te=ASSET',
      archivo:'rg_4568',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Recherches philosophiques sur les Américains</i> (1774). Cornelius Pauw',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f98207/ada?qu=Recherches+philosophiques+sur+les+Am%C3%A9ricains&te=ASSET',
      archivo:'rg_5209',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Historia de Polybio Megalopolitano</i> (1789). Polibio',
      pie:'',
      url:'Verificar URL de Correo de Friederich',
      archivo:'fcuervo_3894_v1_003',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Plan de educación ó, exposición de un nuevo método...</i> (1767). Juan Antonio González Cañaveras',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f98007/ada?te=ASSET',
      archivo:'fmutis_1907',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Disertación físico-médica</i> (1784). Francisco Gil',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f98164/ada?te=ASSET',
      archivo:'rg_5579',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>La perfecta casada</i> (1773). Luis de León',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f87572/ada?te=ASSET',
      archivo:'fcuervo_749_Pagina_004',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Llave nueva y universal para aprender con brevedad y perfeccion la lengua francesa</i> (1787). Antonio Galmace',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f98165/ada?te=ASSET',
      archivo:'rg_6287',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>Proyecto económico: en que se proponen varias providencias...</i> (1779). Bernardo Ward',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f98166/ada?te=ASSET',
      archivo:'rg_10635',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'',
      hover:'<i>El cirujano instruido</i> (1783). Thomas Goulard',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f98008/ada?te=ASSET',
      archivo:'fmutis_3448',
      estilo:'Portada y catálogo',
    },
  ],
},
///////////
narino : {
  id: 'narino',//tambien es el folder de las imagenes
  titulo :'Nariño en la tertulia',
  imagen : 'IMG00026.jpg',
  banners : [
    {titulo:'Nariño en la tertulia',parrafos:['Además de las reuniones que se llevaban a cabo en los conventos, colegios mayores e instituciones públicas, se sabe que para finales del periodo virreinal funcionaron por lo menos tres tertulias importantes en Santafé. Aparte de las “juntas” que se llevaban a cabo en la casa de Nariño, que fueron las primeras de la ciudad, estaban la “Tertulia Eutropélica”, fundada por el ilustrado bayamés Manuel del Socorro Rodríguez en 1792 y clausurada después de 1794, y la “Tertulia del Buen Gusto”, organizada por Manuela Sanz de Santamaría en su propia casa entre 1801 y 1808. Según se lee en las páginas del <a href="#libro_nro_84_Page_001"><i>Papel Periódico de Santafé de Bogotá</i></a> sobre la primera:','<blockquote>[Se trata de] una junta de varios sujetos instruidos, de ambos sexos, bajo el amistoso pacto de concurrir todas las noches a pasar tres horas de honesto entretenimiento, discurriendo sobre todo género de materias útiles y agradables.</blockquote>']},
    {titulo:'<small>El Arcano Sublime de la Filantropía</small>',parrafos:['Aunque no es posible establecer con exactitud cuándo comenzaron las reuniones en la casa de Nariño, se sabe que la idea de organizar una tertulia le venía dando vueltas por lo menos desde enero de 1788. En una <a href="#libro_3137">carta que le escribió el santafereño a José Celestino Mutis</a> sobre su nombramiento como alcalde del segundo voto de la ciudad –juez en lo civil y en lo militar–, expresa sus deseos de “tener en casa una especie de tertulia o junta de amigos de genio que fuésemos adelantando algunas ideas, que con el tiempo pudieran ser de alguna utilidad”. Es razonable suponer, por lo tanto, que el proyecto tomó forma después de 1789, una vez el santafereño entregó la vara de alcalde. En efecto, entre los <a target="_blank" href="http://www.bdigital.unal.edu.co/8059/1/Archivo_Nari%C3%B1o.html#54c">papeles incautados a Nariño</a> en 1794 se encuentra uno que hacía referencia explícita a la fundación y los objetivos de su tertulia:','<blockquote>Me ocurre el pensamiento de establecer en esta ciudad una suscripción de literatos, a ejemplo de las que hay en algunos casinos de Venecia; ésta se reduce a que los suscriptores se juntan en una pieza cómoda y sacados los gastos de luces, etc., lo restante se emplea en pedir un ejemplar de los mejores diarios, gacetas extranjeras, los diarios enciclopédicos y demás papeles de esta naturaleza, según la cantidad de la suscripción. A determinadas horas se juntan, se leen los papeles, se critica y se conversa sobre aquellos asuntos, de modo que se pueden pasar un par de horas divertidas y con utilidad.</blockquote>','Según el santafereño, la idea había venido a su cabeza de leer <a href="#libro_fcuervo_1563_v1_Pagina_006">libros</a> muy conocidos en su época, escritos por <a target="_blank" href="http://bdh-rd.bne.es/viewer.vm?id=0000015484&page=1">religiosos peninsulares</a> que habían viajado por España y el resto de Europa con el objetivo de hacer un balance intelectual del continente. Estas obras, como es previsible, se encontraban en su biblioteca al momento del embargo. Asimismo, el santafereño reconoció que varios asistentes –incluso algunos que habían declarado en su contra– “concurrían a su casa, [pero] no lo hacían a horas determinadas”.','Este círculo literario fue bautizado “Arcano Sublime de la Filantropía”. Según los diccionarios de la época, “arcano” significaba “lo mismo que secreto muy reservado, y de importancia”, por “sublime” se entendía “grande, excelso, glorioso, eminente, o alto”, y por “filantropía” “amor del género humano”. De este modo, en la tertulia de Nariño tenía lugar la alquimia ilustre de lo más elevado y de gran valor, del altruismo y de la inquietud por el “bien común” y los asuntos públicos.','Aunque también se trataba de “pasar un par de horas divertidas”, “tertuliar” era un ejercicio que iba más allá de la mera erudición y el divertimento, pues como afirmaba Nariño, este era un espacio donde “se leen los papeles, se critica y se conversa sobre aquellos asuntos”, y se pasaba el tiempo con <i>utilidad,</i> finalidad primera de la tertulia y principio rector de todo el movimiento ilustrado. La <a href="#libro_rm_330_pza7_Pagina_1">“utilidad pública”</a>, el beneficio de todos y de cada uno, era objeto de la acción del Gobierno y también fin de la labor de los ilustrados, y en la medida en que las tertulias seguían los derroteros de la razón, conducían al provecho intelectual, a la felicidad general y al adelantamiento del Reino.']},
    {titulo:'Los tertulianos',parrafos:['La tertulia de Nariño convocaba a lo más granado de los ilustrados locales: un grupo de criollos unidos por relaciones de amistad y parentesco, influenciados por diversas lecturas, y con un importante sentido de complicidad y lealtad frente a las conversaciones allí entabladas. En los <a target="_blank" href="http://www.bdigital.unal.edu.co/8059/1/Archivo_Nari%C3%B1o.html#54c">papeles</a> que las autoridades le embargaron a Nariño se mencionan algunos de sus nombres, que coinciden, en algunos casos, con los de aquellos a quienes el santafereño prestaba y vendía libros: su concuñado y abogado santafereño, José Antonio Ricaurte; el segundo marqués de San Jorge, José María Lozano; el presbítero y publicista, José Luis Azuola; el abogado bartolino, Luis Eduardo Azuola; Juan Esteban Ricaurte, padre de Antonio Ricaurte, el “héroe de San Mateo”; el abogado tunjano y corregidor de Pamplona, Joaquín Camacho; el abogado de Timaná y fiscal de la Real Audiencia de Quito, Andrés José de Iriarte; el canónigo ilustrado, Francisco Tovar, y por supuesto, su íntimo amigo, el naturalista antioqueño y miembro de la Expedición Botánica, Francisco Antonio Zea; los médicos extranjeros Luis de Rieux y Manuel Froes, el cirujano Santiago Vidal; su gran amigo, el ilustrado bugueño José María Cabal, y los estudiantes universitarios José Antonio Cortés, Luis Gómez, Enrique Umaña y Sinforoso Mutis –sin olvidar que parece bastante probable que asistieran en algún momento el mismo Pedro Fermín de Vargas y los ilustrados quiteños desterrados en Santafé: Juan Pío Montúfar Larrea, segundo marqués de Selva Alegre, y Eugenio de Santa Cruz y Espejo, abogado y médico notable–.']},
    {titulo:'Un espacio ilustrado',parrafos:['Los tertulianos se reunían en la casa de Nariño guiados por la perspectiva del aprendizaje entre pares, por ciertas coincidencias intelectuales y por un profundo sentido de la amistad. El Arcano, así conformado, estimuló el uso colectivo de bibliotecas personales, el estudio autodidacta y el intercambio intelectual entre amigos y conocidos. Asimismo, propició que se consolidara una nueva forma de discutir y argumentar a través del examen de ciertas cuestiones y de la confrontación de opiniones informadas y siempre respaldadas en la razón. En la tertulia de Nariño se discutían sin reserva temas científicos, literarios, filosóficos y políticos; se conversaba sobre la importancia de las obras clásicas y de los “filósofos” del siglo, y se estudiaban los últimos acontecimientos atlánticos y las más recientes novedades políticas (“las cosas de la Francia” y “los sistemas republicanos de Filadelfia”).','También es probable que se discutieran algunas ideas de alcance subversivo y que se comentaran las posibilidades de que fueran realizadas en el Nuevo Reino: los avances de la Revolución francesa, incluida la decapitación de la pareja real, fueron rápidamente conocidos en todo el virreinato, al igual que los “sucesos de Francia”, aunque más con tono especulativo que con el vigor de un proyecto a realizar de manera efectiva. No obstante, la tertulia de Nariño abrió las puertas para que se discutieran nuevos puntos de vista sobre el manejo de lo público y nuevos derroteros sobre la vida en sociedad.','En este sentido, El Arcano se constituyó en un espacio privilegiado para que una parte importante del proyecto ilustrado local tomara forma y fuera ensayado. Sus participantes se imaginaban a sí mismos como desprovistos de intereses particulares y pasiones políticas, se reconocían como iguales en un espacio horizontal de discusión y, guiados por la razón, discurrían en pro de la comunidad política, hecho que no siempre fue visto con buenos ojos por los sectores más tradicionales. Según se lee en el discurso <a href="#libro_nro_a1976_Page_001">“Las extravagancias del siglo ilustrado”</a> del clérigo Nicolás Moya y Valenzuela, publicado en el <i>Papel Periódico de Santafé de Bogotá</i> casi dos años después de que Nariño fuera aprisionado, y dirigido contra todos los “que afectan fundar la felicidad, la filantropía y [los] derechos del hombre destruyendo a la religión que es la base del bien público”:','<blockquote>… de creerse estos jefes del filosofismo unos entes nacidos para resucitar y proteger los derechos del hombre; sin embargo de afectar un arrebatamiento por la salud pública, y que juzgaron sorprender a los pueblos con su singularidad y patriotismo, no vemos en ellos sino la imagen del fratricida Caín, y que sobre ellos han caído las consecuencias del delito.</blockquote>']},
    {titulo:'Una mirada crítica ',parrafos:['El Arcano fue, algunas veces, un espacio complementario a la educación que recibían los neogranadinos en los colegios mayores de Santafé; y otras, un ambiente de formación alternativo. Todo parece indicar que allí se perfiló una de las mayores críticas públicas al sistema educativo neoescolástico seguido en la capital, conocido popularmente como Peripato. Según el historiador José Antonio Amaya, los conocidos artículos <a href="#libro_nro_8_Page_001">“Avisos de Hebéphilo a los jóvenes de los dos colegios”</a>, publicados por Zea en 1791 en el <i>Papel Periódico de Santafé de Bogotá</i>, pudieron haber sido algunos de los productos intelectuales de la tertulia de Nariño. En este discurso, el ilustrado antioqueño esbozó el “cuadro filosófico de nuestra ignorancia y de nuestras miserias” e hizo un llamado frontal contra el “fanatismo” y el “yugo de la servidumbre filosófica”. Para él, los estudios impartidos en las colonias “deshonran [a] la humanidad”, “tienen la patria en vergonzosa languidez” y “solo sirven para formar ciudadanos inútiles que la sociedad mantiene a su pesar, y para conservar como un depósito precioso la barbarie, y la rusticidad”. Sin embargo, no todo estaba perdido, pues al margen de los estudios públicos, se vislumbraban ciertas figuras ilustradas, como el mismo Antonio Nariño, que llevaban sus “luces filosóficas” por todo el Reino:','<blockquote>Sería temeridad y aún insolencia negar que en Santafé hay muchas personas de exquisito gusto, y vasta erudición. Pero es cierto que estos grandes hombres solo sacaron de las Aulas el triste desengaño de no haber aprendido en ellas cosa buena. Se han formado por sí mismos: en su retiro, y en sus libros. Y esto, que a ellos les hace tanto honor, es lo que más desacredita la enseñanza pública. Esta se debe reformar: porque solo está reservado a los genios sublimes mudar de doctrina, y formarse en los Autores, el resto de los hombres sigue constantemente el camino, que le enseñaron.</blockquote>']},
    {titulo:'Una iniciativa política',parrafos:['La tertulia de Nariño no solo puso en evidencia que el Gobierno virreinal no siempre podía acertar en el manejo de los asuntos de todos –contrario a lo señalado por la tradición y la teoría política de corte absolutista que sostiene la monarquía–, sino que allí se dio cuenta de cómo la misma <i>iniciativa</i> intelectual en la ciudad ahora no era monopolio exclusivo de la Corona o de la Iglesia: esta también podía florecer gracias al esfuerzo decidido de individuos ilustrados. Si bien las juntas en la casa de Nariño eran ampliamente conocidas por las autoridades virreinales, estas no dependían ya de su favor para llevarse a cabo. Los agentes del poder monárquico ya no eran los únicos apoderados de la felicidad pública y la prosperidad común del Reino. Zea lo expresó así en los mismos “Avisos...”:','<blockquote>Nadie ignora que los sabios son en las Repúblicas lo que el alma en el hombre. Ellos son los que animan, y ponen en movimiento este vasto cuerpo de mil brazos, que ejecuta cuanto le sugieren; pero que no sabe obrar por sí mismo, o salir un punto de los planes que le trazan.</blockquote>']},
  ],
  botones : [
    {tipo:'imagen',link: rdir+'/img/narino/IMG00026.jpg',pie:'Nariño organizó varias reuniones de su tertulia, El Arcano Sublime de la Filantropía, en su casa ubicada en la antigua plaza de San Francisco. Esta plaza es conocida desde el siglo XIX como parque Santander (Carrera Séptima con Calle 16). <i>Acera norte del parque de Santander</i>. Grabado tomado de <i>El papel periódico ilustrado</i>, 1 de septiembre de 1884, p. 24. Biblioteca Nacional de Colombia.'},
  ],
  libros : [
    {
      titulo:'Anuncio de la creación de la Tertulia Eutropélica, <i>Papel Periódico de Santafé de Bogotá</i> (diciembre 1792).',
      hover:'',
      pie:'Artículo en el que se decriben las tertulias como juntas en la que se reúnen hombres y mujeres "bajo el amistoso pacto de concurrir todas las noches a pasar tres horas de honesto entretenimiento, discurriendo sobre todo género de materias útiles y agradables", <i>Papel Periódico de Santafé de Bogotá</i> (diciembre 1792), Biblioteca Nacional de Colombia F. Pineda 183.',
      url:'http://www.bibliotecanacional.gov.co/recursos_user/bookreader/nro_84/#page/1/mode/1up',
      archivo:'nro_84_Page_001',
      estilo:'Flip',
    },
    {
      titulo:'Carta de Antonio Nariño a José Celestino Mutis (1788), Museo 20 de julio-Casa del Florero',
      hover:'',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f89677/one?qu=%5BCarta%5D+1788+enero+15%2C+%5Bpara%5D+S.+D.+Josef+Selestino+Mutis&te=ASSET',
      archivo:'3137',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'<i>Viage fuera de España</i> (1785), por Antonio Ponz.',
      hover:'',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f98939/ada?te=ASSET',
      archivo:'fcuervo_1563_v1_Pagina_006',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'"Don Antonio Nariño vecino de esta capital, sobre que se le conceda licencia para extraer de los montes de Fusagasugá 3000 arrobas de quina para exportación a España" (1794)',
      hover:'',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f68734/ada?te=ASSET',
      archivo:'rm_330_pza7_Pagina_1',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'"Los Avisos de Hebephilo", <i>Papel Periódico de Santafé de Bogotá</i> (abril 1791)',
      hover:'',
      pie:'"Los Avisos de Hebéphilo", uno de los textos más inteligentes y polémicos publicados en el <i>Papel Periódico de Santafé de Bogotá</i>, fue escrito por Francisco Antonio Zea, uno de los amigos más cercanos de Antonio Nariño."Los Avisos de Hebephilo", <i>Papel Periódico de Santafé de Bogotá</i> (abril 1791), Biblioteca Nacional de Colombia, Fondo Quijano 57, pza. 2.',
      url:'http://www.bibliotecanacional.gov.co/recursos_user/bookreader/nro_8/#page/1/mode/1up',
      archivo:'nro_8_Page_001',
      estilo:'Flip',
    },
    {
      titulo:'"Las extravagancias del siglo ilustrado", <i>Papel Periódico de Santafé de Bogotá</i> (1796)',
      hover:'',
      pie:'Escrito por Nicolás de Valenzuela y Moya, considerado uno de los clérigos más conservadores de la Colonia, este artículo critica algunas de las posiciones de los jóvenes estudiantes en la época de Antonio Nariño. "Las extravagancias del siglo ilustrado", <i>Papel Periódico de Santafé de Bogotá</i>, Biblioteca Nacional de Colombia, RS 1.',
      url:'http://www.bibliotecanacional.gov.co/recursos_user/bookreader/nro_a1976/#page/1/mode/1up',
      archivo:'nro_a1976_Page_001',
      estilo:'Flip',
    },
  ],
},
///////////
santuario : {
  id: 'santuario',//tambien es el folder de las imagenes
  titulo :'El Santuario',
  imagen : 'Techo2.jpg',
  banners : [
    {titulo:'El Santuario',parrafos:['Gracias a una carta fechada en abril de 1794, escrita por el  médico francés Luis de Rieux, quien frecuentaba la tertulia organizada por Nariño, se conoce el nombre del salón de reuniones donde esta se llevaba a cabo. En ella Rieux le dijo al santafereño: “si el amigo Zea hubiere llegado, dele vuestra merced muchas expresiones de mi parte, y manifiéstele el sentimiento que tengo de no poder encerrarme con vuestras mercedes en el Santuario”. En su momento, las autoridades virreinales le preguntaron a Nariño por el lugar, ante lo cual respondió:','<blockquote>[L]o que Rieux ha querido decir o dar a entender con el nombre de santuario ha sido la pieza interior del estudio del declarante, formada por el mismo diseño de que se ha hablado en estas diligencias […] el motivo que Rieux ha tenido para llamar santuario a la citada pieza, dimana de haberle oído decir al declarante, que pensaba encerrarse en ella como en un santuario para no tratar con nadie.</blockquote>','El Santuario era un espacio privado en la casa de Nariño, diseñado para ser sede de las reuniones de su círculo literario. Y, al igual que había ocurrido con la tertulia, es probable que al santafereño se le hubiera ocurrido la idea de adaptar un salón de su casa para tal fin, después de haberlo leído en uno de sus tantos libros. El recinto, que nunca se terminó de construir según las proyecciones iniciales, debía estar decorado con  adornos significativos: inscripciones, dibujos alegóricos, plafones con retratos y un obelisco dedicado a la libertad.','Se sabe que Nariño diseñó el Santuario a inicios de 1794. En septiembre de ese año, pocos días después de que lo encarcelaran, les dijo a las autoridades virreinales que “el diseño es un borrador que tomó para él disponer la pieza de su estudio, y que hará el tiempo de siete u ocho meses que lo delineó y escribió”. Sin embargo, todo parece indicar que el salón  servía desde antes como lugar de encuentro para las reuniones del Arcano, pese a no estar completamente acondicionado según los planes del santafereño.','Según la descripción más completa del Santuario que elaboraron las autoridades virreinales en los autos del proceso de Nariño, el estudio estaba compuesto por cuatro habitaciones: una para recibir a los  invitados; otra destinada a albergar la biblioteca-librería; una más, que funcionaba como pasadizo, y otra, de forma rectangular, donde se estaba adecuando el Santuario. Según los fiscales, esta última se encontraba “en estado de estar sirviendo, como efectivamente servía al interesado”. Si bien se hallaban ya varios retratos completamente terminados en los plafones, otros se encontraban incompletos y en lugares diferentes a lo proyectado en el plano. Las inscripciones aún no se habían hecho. También fueron encontrados los bustos de Franklin y de Washington y algunos obeliscos pequeños.','Después de examinar algunos de los elementos del Santuario y analizar la <i>Defensa</i> de Nariño, las autoridades virreinales dieron su veredicto. Para ellas era evidente que el plafón dejaba al descubierto que Nariño sostenía sentimientos y principios opuestos a la legítima autoridad del monarca español. Su esmerada argumentación también fue puesta en su contra: “si Nariño discurre por su escrito como él manifiesta ¿qué se hablaría en su casa por los concurrentes a ella? ¿Cómo se tratarían estos asuntos en aquel cuarto fabricado al intento? ¿En aquel retrete, que ellos mismos llaman el Santuario?”.']},
    {titulo:'Disposición espacial',parrafos:['<a href="#libro_Techo2">El techo</a> del Santuario tenía la forma de una artesa invertida, de cuatro planos inclinados hacia un centro rectangular denominado “el cielo”. Nariño consagró en cada uno de los extremos del plano cuatro conceptos y valores fundamentales: la libertad, la filosofía, la razón y la sabiduría –esta última bajo el nombre de Minerva, diosa romana de las artes y la invención–. Cada costado estaba adornado con retratos de personajes clásicos y modernos, alusivos a cada concepto y con algunas inscripciones que los explicaban.','La disposición espacial y simbólica estaba proyectada de la siguiente manera: el costado norte estaba dedicado a la Libertad con un epígrafe de Rousseau que rezaba: “aquel es verdaderamente libre que no necesita poner los brazos de otros al fin de los suyos para hacer su voluntad”. Debajo había dos retratos de Sócrates y Rousseau junto a la leyenda: “la verdad, la sobriedad, el desinterés los distinguieron en Atenas y en Ginebra. El estudio del corazón del hombre en todas las naciones”. También había representaciones de los naturalistas Plinio y Buffon junto a la frase: “la naturaleza les abrió sus tesoros o robaron a la naturaleza sus secretos”.','El lado sur estaba destinado a la Razón bajo la inscripción: “se sigue la razón cuando, sin oír las opiniones de los hombres, se escuchan los gritos de la Naturaleza”. Debajo estaban los retratos de Jenofonte y Washington con la leyenda: “filósofos intrépidos y guerreros superiores a todos los sucesos de la vida”. También estaban los pensadores Solón y Montesquieu con la frase: “dejemos en herencia al resto de los mortales la riqueza, pero que la virtud sea la nuestra. El mismo Solón”.','El costado oriental se encontraba consagrado a la Filosofía con la frase: “aquel es verdaderamente filósofo que al estudio del corazón humano junta el amor de sus semejantes”. Debajo de esta se encontraban las imágenes de Nariño, sin ninguna inscripción, y la de Cicerón, Demóstenes y William Pitt junto a la frase: “oradores, filósofos, amantes de la Patria. Roma e Inglaterra los disfrutaron, el mundo entero los admira”.','El lado occidental estaba reservado a la Sabiduría (Minerva) con la leyenda: “Oh tú, cualquiera que seas, detén el paso si no eres amigo de la razón, de la verdad, y de la filosofía”. Debajo estaban Tácito y Raynal, a quienes describía la frase: “conocieron las naciones, los hombres y todos los tiempos les fueron presentes”. En el centro estaba Newton con la inscripción <i>et inducit illum in nubem</i> (“condúcelo hacia la nube”). Finalmente, estaban “El divino Platón”, como lo llamaba Nariño, junto a una leyenda de Quintiliano que rezaba “tenía menos el lenguaje de los hombres que el de los dioses”, y Franklin junto al epígrafe “quitó al cielo el rayo de las manos y el cetro a los tiranos”. Estos dos últimos retratos estaban unidos con una cadena a un pedestal.']},
    {titulo:'El obelisco',parrafos:['Los fiscales encontraron entre los papeles de Nariño un pliego de papel blanco donde se encontraba <a href="$libro_obelisco3">dibujado un obelisco</a> con una inscripción que decía <i>libertas nullo venditur auro</i> (“la libertad no se vende por ningún oro”). Este era el obelisco que, según lo proyectado, debía erigirse en el Santuario y estar dedicado a la Libertad como bien supremo e insignia de la virtud de ese nuevo ciudadano virtuoso, sapiente y deliberante que Nariño intentó modelar. Los orígenes de la inscripción latina en el pedestal de la columna se remontan a los textos de Cicerón, las fábulas de Esopo, el prólogo del Quijote (donde Cervantes la atribuye equivocadamente a Horacio) y las obras de Bartolomé de las Casas.','Según Nariño, él mismo había hecho el dibujo a principios de 1793 a partir de una pequeña estampa que conservaba a la entrada de su estudio. Por su parte, el colegial santafereño, José María Prieto, era el autor de la inscripción, y Nariño la utilizó por recomendación del mismo Prieto. En los interrogatorios de los fiscales, Prieto dijo que no se acordaba de la pregunta que Nariño decía haberle hecho, ni de la respuesta que él le había dado.']},
    {titulo:'Un proyecto colectivo',parrafos:['Se sabe que Nariño consultó el diseño del Santuario con su amigo, el ilustrado antioqueño Francisco Antonio Zea, aunque parece que también lo hizo con otros miembros del Arcano. Entre los papeles secuestrados a Nariño, se encuentra una carta en la que Zea manifestaba su entusiasmo por el proyecto, explicaba sus preferencias y aprobaba las decisiones tomadas por Nariño. Gracias a esta misiva, se sabe que para abril de 1794 el repertorio y la posición de todos los personajes del Santuario aún no estaba completamente definida. Por ejemplo, para esta fecha, un retrato del político y militar griego Arato de Sición, famoso por sus luchas contra la tiranía en el Peloponeso y por su liderazgo en la Liga Aquea, todavía se encontraba entre las figuras tutelares del recinto. La discusión, sobre si dejarlo o no, no debió haber sido menor. Según escribió Zea:','<blockquote>Querido amigo: he comprendido ya perfectamente la disposición de la pieza: me alegro que a Newton le haya tocado un lugar en que no cabe otro. Para la mutación de los retratos de Franklin y Montesquieu, me fundaba en la conveniencia de los sujetos. Franklin y Solón, legisladores; Platón y Montesquieu, autores de bellos pensamientos, profundos pensadores, dos antorchas del mundo que abrió demasiado los ojos sobre sus desgracias a la luz de sus escritos.</blockquote>','Una vez concluida la discusión, Nariño contrató al mismísimo capitán de ingenieros del virreinato, el madrileño Carlos Cabrer y Rodríguez, para dirigir los trabajos del Santuario y hacer su proyecto una realidad. En octubre de 1795, previa autorización del virrey Ezpeleta, Cabrer fue llamado por la Real Audiencia a declarar en contra de Nariño. Según dijo en su testimonio:','<blockquote>[…] cierto que por amistad y por favor a Nariño había dirigido la pintura en todo lo que pertenece a lo arquitectónico de planta y dibujo, y que con este motivo es cierto que entraba a la casa con frecuencia hasta aquellas piezas y que jamás ni por estudio ni por casualidad se le detuvo en la entrada, encontrando siempre las piezas abiertas sin reserva ni precaución, habiendo sido siempre bien recibido sin que jamás hubiese hallado en la casa persona sospechosa, y ni a Nariño en alguna ocupación ilícita, poco decente o que desdijese de un hombre de bien [...]</blockquote>','Cabrer y Rodríguez se dio a conocer años después por levantar en 1797 el plano de Santafé por comisión del virrey Mendinueta.']},
    {titulo:'Las inscripciones',parrafos:['La enigmática disposición del Santuario despertó todo tipo de suspicacias durante el proceso de Nariño y su descubrimiento no hizo otra cosa que encender las alarmas de las autoridades por su evidente culto al “filosofismo”. Así, uno de los temas que más ocupó la imaginación de los fiscales fue el origen y el significado de las diferentes inscripciones que acompañaban los retratos. Según explicó extensamente el santafereño:','[Las inscripciones que] se hallan puestas a la filosofía, a la razón, y a Minerva, son propia producción del declarante; que la de la libertad, según la cita que está al pie de ella, es de Rousseau; pero que no la ha visto en este autor y sí en otro que no recuerda, y que si fuese necesario la buscaría entre sus libros y manifestaría; que otras cuatro inscripciones eran las que debían haberse colocado en el cielo de dicha pieza, como se reconoce del mismo diseño; que las de Cicerón y William Pitt; las de Jenofonte y Washington, las de Tácito y Raynal; las de Sócrates y Rousseau; las de Plinio y Buffon, son de propia producción del declarante; que la de Solón y Montesquieu, eran del mismo Solón; la de Platón, de Quintiliano; la de Franklin no es producción del declarante, y que es la misma inscripción que se puso en París en su misma casa, cuando estuvo en aquella corte de enviado de los Estados Unidos de América; que la de Newton, que está en latín y dice: <i>et inducit illum in nubem</i>, es de una estampa que le dio el bibliotecario don Manuel del Socorro Rodríguez, y que debe estar en el cuarto del declarante; que lo demás de otra inscripción en castellano es producción del declarante habiendo tomado del padre Almeida el concepto para el último renglón que decía: <i>El cielo fue su morada</i>; y que estas inscripciones eran para los plafones donde debían ponerse los retratos, como asimismo se reconoce del citado diseño; y últimamente, que la expresión que se halla entre las inscripciones de Platón y Franklin y dice: <i>una cadena en el pedestal</i>, fue puesta para recomendarse a la memoria que se habían de enlazar con ella los retratos que iban en cada plafón haciendo alusión a la conveniencia de sus ideas [...]']},
    {titulo:'Franklin y Rousseau',parrafos:['De todas las inscripciones, la que más inquietó a la Real Audiencia fue la que acompañaba a Franklin. En un principio, el retrato de Franklin, considerado por Nariño como uno de los más grandes legisladores modernos, debía estar ubicado en la pared occidental del salón, dedicada a Minerva. Finalmente, lo ubicó en el pabellón del lado sur, dedicado a la razón. La inscripción, escrita originalmente en latín en el revés de un retrato de Franklin, del francés Anne Robert Jacques Turgot, rezaba: <i>Eripuit coelo fulmen sceptrumque tyrannis</i> (“Arrebató del cielo el rayo y el cetro a los tiranos”). Esa frase (famosa en Europa y América en 1778, cuando todavía las monarquías europeas se encontraban florecientes y el político bostoniano cosechaba, como pocos, los aplausos de los ilustrados europeos) aludía al descubrimiento del pararrayos y al espíritu republicano con el que Franklin figuró en la política. Las autoridades españolas debían conocer la popularidad del norteamericano y, en consecuencia, comenzaron a inquirir con especial detalle por la inscripción al santafereño.','Nariño se defendió aduciendo que había elegido el epígrafe porque era aplicable en las ciencias de la física y que no estaba dirigida al Gobierno español: según Nariño, además de ser esta una “interpretación odiosa a despecho de la razón”, la monarquía borbónica estaba lejos de constituirse en una tiranía, por el contrario, se trataba de una “monarquía fundada en la justicia y la equidad”. En cualquier caso, el hecho de que la frase circulara en todos los papeles públicos españoles ya lo eximía de culpa, así como el hecho mismo de tratarse de un apuntamiento privado.','Nariño también debió explicar con especial cuidado la frase atribuida a Rousseau: “aquel que es verdaderamente libre no necesita poner los brazos de otros al fin de los suyos para hacer su voluntad”. Según el santafereño, la inscripción no se refería a la libertad de gobierno, sino a la necesaria libertad personal de un “hombre particular”. Para Nariño, la definición de este hombre virtuoso y libre no podía ser considerada delito, pues según dijo “no puede ocultarse a V.A. que aquel hombre que se pueda servir a sí mismo y que sea tan sobrio que se baste, sin tener necesidad de otro para satisfacer sus necesidades, lejos de ser un hombre criminal, es un hombre virtuoso”.']},
    {titulo:'Nariño: ¿masón?',parrafos:['Para algunos historiadores el sentido político del Arcano y el mensaje del Santuario parece evidente: los contertulios de Nariño hicieron parte del primer círculo masónico del Nuevo Reino de Granada, y su líder fue el primer masón de estas tierras. Para los investigadores Eduardo Ruiz Martínez y Luis Duque Gómez, por ejemplo, la tertulia del santafereño era en realidad una sociedad secreta que tenía como fin apuntalar las ideas revolucionarias e independentistas de sus miembros. Los símbolos empleados en el Santuario y en su biblioteca-librería, su amistad con el médico francés de Rieux (supuesto miembro de una logia francesa), el enigmático nombre dado a la tertulia y el apoyo recibido por Nariño durante sus correrías por toda Europa y el Caribe probarían tales asertos.','Aunque no es posible descartar esta idea de manera contundente, tampoco se puede asegurar que los miembros del Arcano eran masones. No sabemos si se regían por estructuras jerárquicas o se llevaban a cabo ritos. Lo que sí es un hecho es que Nariño no fue procesado por masón, cuando en otras partes de la monarquía ya se adelantaban esa clase de juicios. Como bien afirma el historiador Fabio Zambrano, no parece probable que el Arcano se haya constituido como una logia, aunque sí está presente en el Santuario cierta imaginería masónica: la “evidencia histórica tendería a demostrar que Nariño, más que un masón, era un ilustrado y amante de las tertulias […] más bien los contertulios usaban formas de sociabilidad política tomadas de la masonería y de la carbonería como los símbolos, fórmulas, grados y hasta juramentos secretos, sin llegar a tener carta patente que les autorizara a funcionar bajo los auspicios de una logia matriz”.','Más allá del debate sobre la existencia o no de ciertos elementos masónicos en el Santuario, es cierto que éste da cuenta de las incansables búsquedas de Nariño, de sus experiencias como lector y de sus expectativas como hombre ilustrado. El amplio abanico de personajes seleccionados, los detalles del plafón y los epígrafes son una síntesis conceptual de lo que buscaba el santafereño, al igual que la constelación de autores y lecturas que fueron sus referentes y fuentes doctrinales fundamentales: autores que leyó, que quiso leer, que quizá encontró referenciados en libros o periódicos, o que simplemente conoció a través de sus conversaciones. De este modo, el Santuario se constituyó en un espacio fundamental para la reelaboración de la cultura política colonial y la recepción y apropiación de un nuevo lenguaje político. La tertulia de Nariño no solo da cuenta de la riqueza y variedad de las posibilidades políticas del momento; también da cuenta de los esfuerzos de Nariño por hacer que la misma comunidad política, al margen de la iniciativa del Gobierno Real, comenzara a pensarse y a reconstituirse a sí misma a través de estas nuevas formas de sociabilidad que pusieron sobre la mesa una nueva manera de entender el mundo político. Una manera que en muchos sentidos ya es la nuestra.']},
  ],
  botones : [
    {tipo:'boceto',link: rdir+'/img/santuario/Techo2.jpg',pie:'Esta es la descripción más completa del Santuario elaborada por las autoridades virreinales, tal y como este se encontraba al momento de que aprisionaran a Antonio Nariño. Tomado de <i>Proceso contra Don Antonio Nariño: por la publicación clandestina de la Declaración de los Derechos del Hombre y del Ciudadano</i>, por Guillermo Hernández de Alba (volúmen 1). Presidencia de la República, 1980-1984.'},
  ],
  libros : [
    {
      titulo:'<i>Boceto del techo de El Santuario</i> (ca. 1793)',
      hover:'',
      pie:'Esta es la descripción más completa del Santuario elaborada por las autoridades virreinales, tal y como este se encontraba al momento de que aprisionaran a Antonio Nariño. Tomado de <i>Proceso contra Don Antonio Nariño: por la publicación clandestina de la Declaración de los Derechos del Hombre y del Ciudadano</i>, por Guillermo Hernández de Alba (volúmen 1). Presidencia de la República, 1980-1984.',
      url: rdir+'/img/santuario/Techo2.jpg',
      archivo:'Techo2',
      estilo:'imagen en pop-up',
    },
    {
      titulo:'<i>Dibujo del obelisco en El Santuario</i> (ca. 1793) <i>Boceto del techo de El Santuario </i>(ca. 1793)',
      hover:'',
      pie:'Este era el diseño del obelisco que, según lo proyectado por Antonio Nariño, debía erigirse en el Santuario y estar dedicado a la libertad como bien supremo. Tomado de <i>El proceso de Nariño a la luz de documentos inéditos</i>, por Guillermo Hernández de Alba. Bogotá, ABC, 1958.',
      url: rdir+'/img/santuario/obelisco3.jpg',
      archivo:'obelisco3',
      estilo:'Imagen en pop-up',
    },
  ],
},
///////////
imprenta : {
  id: 'imprenta',//tambien es el folder de las imagenes
  titulo :'La Imprenta Patriótica',
  imagen : 'IMG00304.jpg',
  banners : [
    {titulo:'La Imprenta Patriótica',parrafos:['Los pormenores de la adquisición de una imprenta por parte de Antonio Nariño no son muy conocidos hoy. Se sabe que el santafereño importó los cajones de letras en 1791, muy seguramente desde España, y que vinculó a sus primeros empleados en marzo de 1793, cuando ya estaban listos los chibaletes, las mesas y la prensa, elaborados por artesanos locales. Los primeros encargados de dar vida a la empresa editorial de Nariño fueron Diego Espinosa de los Monteros como impresor, Pedro José Vergara como auxiliar, Antonio Murcia como encargado del tórculo, y Pedro Rodríguez y Manuel María Torres como peones. El taller tipográfico funcionó inicialmente en la planta baja de una casa ubicada en la Plazuela de San Carlos (en la actual calle Décima, entre carreras Sexta y Séptima), que le pertenecía al médico francés Luis de Rieux, considerado, por algunos de los sectores más ortodoxos de la sociedad virreinal, un revolucionario encubierto.']},
    {titulo:'Nariño: el impresor',parrafos:['Nariño estuvo a la cabeza del taller tipográfico entre abril de 1793 y agosto de 1794. Durante este tiempo gozó de relativa autonomía para imprimir y pocas veces necesitó licencia oficial para hacerlo, pues debido a su ascendencia familiar y a su notable desempeño en algunos cargos públicos, contaba con la anuencia y la confianza de las autoridades virreinales. El mismo santafereño, en un documento oficial dirigido al monarca en diciembre de 1795, describió su ocupación como “director de la Imprenta Patriótica […] una imprenta que subsistía hacía dos años sin licencia, con un impresor sin título, y hallándose encargado por vuestro Virrey del tiro de la edición de los papeles periódicos que ejecutaba sin otras licencias especiales, a ciencia y paciencia del gobierno”.','En abril de 1793, cuando empezó a estamparse allí el <a href="#libro_nro_86_Page_001"><i>Papel Periódico de Santafé de Bogotá</i></a>, su editor, Manuel del Socorro Rodríguez, no pudo sino celebrar el cambio de imprenta en términos laudatorios:','<blockquote>Nos parece, podemos asegurar al público con entera satisfacción, que desde este número ya no habrá motivo para quejarse de las muchas erratas de imprenta, la que con el título de Patriótica ha establecido en esta capital el Regidor don Antonio Nariño en la plazuela de la iglesia de San Carlos, es la que estrenamos hoy, con el gusto de saber el exquisito cuidado que se pondrá en la impresión de este papel, y que el carácter de la letra, la bondad de la tinta y limpieza de la edición no puede menos sino agradar mucho al público.</blockquote>']},
    {titulo:'¿Por qué “Patriótica”?',parrafos:['Las razones que llevaron a Nariño a llamar su taller tipográfico “Imprenta Patriótica” no han sido muy exploradas. Para muchos estudiosos de su vida y obra, que lo haya bautizado así fue una manera soterrada de clamar por la Independencia del Nuevo Reino de Granada. Sin embargo, es necesario subrayar que para 1793 no había ningún antagonismo entre los bríos patrióticos de la empresa nariñista y la fidelidad debida al monarca. El estandarte de la “patria” y la identidad “patriota” (en otras palabras, el lenguaje del patriotismo), de gran arraigo en las tradiciones políticas hispánicas, y de amplia circulación entre los ilustrados peninsulares y americanos, no implica aquí, de manera alguna, la sustracción a los ideales de la Monarquía borbónica. Que Nariño estableciera un taller tipográfico con este nombre se puede leer como una expresión importante del talante patriota de Nariño, de su preocupación genuina por los problemas del virreinato y por los asuntos públicos.','Sin embargo, el mote patriótico de la imprenta, más que referirse siempre a un espacio geográfico concreto –la patria podía designar desde la misma ciudad de nacimiento hasta toda la Monarquía hispánica tomada en su conjunto– funcionaba como un recurso fundamental para invitar a las personas a intervenir sus propias realidades, a buscar el bien de la comunidad política y a perseguir la prosperidad pública a partir de los saberes ilustrados. Según algunos diccionarios de la época, el adjetivo “patriótico” era “lo perteneciente al patriota; y así se dice: las intenciones de Fulanito son benéficas y patrióticas”, mientras que “patriota” significaba “el que ama la patria y procura todo su bien”. El patriotismo neogranadino germinó amparado en el marco de la nación española, entendida como un conjunto plural de reinos peninsulares y americanos unidos en su fidelidad a un mismo rey. El progreso del virreinato redundaba necesariamente en la grandeza de la Monarquía hispánica. En este sentido, la ‘patria’ del Nariño <i>de este momento</i> convivía sin problema con la monarquía española, aunque clamara por reformas importantes en campos sensibles como la administración fiscal y de justicia.']},
    {titulo:'Catálogo de impresos',parrafos:['No es fácil establecer el catálogo completo de las obras impresas en el taller de Nariño. La importancia de su imprenta tiene que ver más con el acontecimiento cultural que representó el hecho de ser la primera imprenta de carácter privado de la que tengamos noticia en el actual territorio colombiano. Si bien es cierto que por la imprenta de Nariño no corrieron mares de tinta, también lo es que el volumen de impresos estampados no fue nada desdeñable. El mismo Espinosa, su impresor, dejó constancia de cómo en no pocas jornadas “se ha trabajado de día, y algunas veces de noche, cuando ha cargado más el trabajo” y también “algunas veces en días de fiestas, cuando hay riesgo de que se pierda el papel”. Así, según testimonios de sus empleados, se sabe que la Imprenta Patriótica reprodujo cerca de 70 números del <i>Papel Periódico</i>, <a href="#libro_fpineda_165_pza11_Pagina_01">una oración</a> en honor al arzobispo de Santafé y fundador del Colegio Mayor de Nuestra Señora del Rosario, fray Cristóbal de Torres, y, por supuesto, los célebres <i>Derechos del hombre y del ciudadano</i>. Además, estampó varios impresos menores (esquelas de convite, asertos de conclusiones y varios sobrescritos para cartas) y otras obras que no han llegado hasta nosotros por diferentes avatares del tiempo.','<i>Historia de la historia natural</i>','Debido a las importantes dificultades técnicas que experimentaba por aquellos años la Imprenta Real, que llevaron a su cierre temporal en septiembre de 1792, es probable que en el taller de Nariño se estamparan otros trabajos de mayor envergadura. Según afirmó el mismo Nariño en mayo de 1795 durante su proceso judicial, allí se había impreso, con licencia del Gobierno, un libro titulado <i>Historia de la historia natural</i>, probablemente una traducción de la <a href="#libro_rn_44"><i>Historia de las ciencias naturales</i></a> del filósofo y matemático Alexandre Savérien hecha por el religioso <a href="#libro_nro_167_Page_001">Francisco Martínez D’acosta</a>, deán de la catedral de Santafé.','Solo nueve cuadernillos de un plan de impresión que contemplaba doce, según había sido anunciado en la edición de <a href="#libro_nro_18_Page_001">junio de 1791</a> del <i>Papel Periódico,</i> fueron impresos en la Imprenta Real. Sin embargo, la obra no terminó de imprimirse en el taller oficial. En agosto de 1793, Rodríguez escribía en el mismo periódico: “los últimos tratados no se han podido imprimir, pero saldrán presto”. Cerca de un año después aún afirmaba: “quedó a medio imprimir la historia natural del citado M. Saverien”. Aunque no se sabe si <a href="#libro_nro_66_Page_001">los cuadernillos restantes fueron impresos</a>, según el testimonio de Nariño es posible pensar que alguno fue estampado en su imprenta. No de otra manera es posible explicar la aseveración de Nariño, aseveración no rebatida por las autoridades virreinales durante el proceso judicial.','<i>Tratado sobre la fuerza de la fantasía humana</i>','El <a href="#libro_fmutis_315_Pagina_005"><i>Tratado sobre la fuerza de la fantasía humana,</i></a> de Ludovico Antonio Muratori, traducido por el mismo deán Martínez también se pudo haber impreso en el taller de Nariño. Aunque en el pie de imprenta no se especifica el taller tipográfico, el nombre del impresor es el del padre adoptivo del impresor de Nariño y regente de la imprenta virreinal, Antonio Espinosa de los Monteros. Por lo demás, esta obra solo se conseguía en las oficinas de la Imprenta Patriótica, y entonces era común que las obras se adquirieran en las instalaciones del taller de origen. De hecho, durante la confiscación de los bienes de Nariño por parte de las autoridades reales, se encontraron en el taller tipográfico 29 ejemplares de esta obra sin encuadernar y en proceso de preparación para ser distribuidos en todo el virreinato.','Más allá de si en la prensa de Nariño se estamparon estas obras, el taller era visto con mucho entusiasmo por los grupos ilustrados del virreinato y por un sector importante del Gobierno Real: ellos veían en la máquina tipográfica del santafereño una herramienta fundamental para difundir la afición por la lectura y por los libros en los neogranadinos.']},
    {titulo:'Las imprentas americanas',parrafos:['En <a href="#libro_nro_101_Page_001">agosto de 1793</a>, Manuel del Socorro Rodríguez saludó con orgullo la publicación del libro del <i>Tratado sobre la fuerza de la fantasía humana</i> Muratori en su <i>Papel Periódico</i>:','<blockquote>¿Y qué dijéramos si fuésemos a examinar los frutos de las Imprentas Americanas? Nada más sino que se harán eternas en virtud de su inacción. No es de mi asunto discurrir ahora acerca de los motivos de la quietud o parálisis en que yacen, sino decir que la de esta Capital quizá es la menos ociosa.</blockquote>','El poco entusiasmo no era injustificado: las difíciles condiciones de operación de las imprentas americanas eran ampliamente conocidas. La escasez de papel –en buena medida relacionada con la inexistencia de fábricas y las dificultades para importarlo–, las limitaciones técnicas de las prensas, la ausencia de un verdadero mercado del libro, la competencia de los impresos venidos de Europa y los retrasos y pérdidas relacionados con el sistema de correos hacían que emprender una empresa de esta naturaleza fuera muy arriesgado. Riesgos todos, que Nariño decidió asumir. Al justificar su impresión de los <i>Derechos del hombre y del ciudadano</i>, él mismo dejó constancia de las dificultades que atravesaba su taller por aquellos días y de la naturaleza del mercado al que atendía:','<blockquote>¿Qué otro objeto puede tener en imprimirlo, sino el interés de la ganancia?... Mucho más no produciendo la imprenta que ya tenía establecida ni para los costos que me ocasionaba la impresión del <i>Papel Periódico</i>, que por sólo condescender con el gobierno y servir al público mantenía en ella. Esta fue, y no otra, la causa por que se hizo la impresión con reserva, porque el único modo de darle valor al papel era suponerlo raro y venido de afuera. Yo he tenido comercio de libros, conocía el lugar, sabía que hay sujetos que pagaban bien un buen papel; pero que no había muchos que lo compraran aunque fuera a bajo precio. Con este conocimiento era preciso sacar de pocos, con que no se conociera que era impreso aquí, lo que era difícil sacar de muchos si se sabía que podía tener cuantos ejemplares quisiera.</blockquote>']},
    {titulo:'La prensa inunda a Santafé',parrafos:['Es indudable que para 1790 los neogranadinos ya habían comenzado a familiarizarse con nuevos hábitos de lectura y sociabilidad alrededor de la cultura de la imprenta. Si ya en 1785, la <a href="#libro_ps18_gazetasantafe_1785_001"><i>Gazeta de Santafé</i></a>, el primer papel periódico neogranadino, celebraba con entusiasmo el “admirable arte de la imprenta”, el mismo Nariño daba cuenta en su <i>Defensa </i> de cómo los periódicos venidos de Europa, al igual que el propio <i>Papel Periódico de Santafé</i>, circulaban profusamente “en manos del público” y “en manos hasta de los niños y mujeres”. Por otro lado, también habló de unas gacetas impresas de Ámsterdam escritas en francés, del <i>Extracto del Suplemento de París</i> y, por supuesto, del <i>Espíritu de los mejores diarios literarios que se publican en Europa</i>, y abogó por la pronta extensión de la imprenta en el mundo retomando los escritos del ilustrado vitoriano Valentín de Foronda:','<blockquote>El hombre se despertará, cogerá el hilo de las experiencias, se deshará de una porción de preocupaciones, será activo, tratará con los seres de su especie, en virtud del comercio, hará con ellos un tráfico de sus ideas y de sus descubrimientos; la imprenta las hará circular prontamente y transmitirá a la posteridad un sinnúmero de descubrimientos útiles; una multitud de obras inmortales han sacudido y a golpes a la mentira. El error vacilante por todas partes. Los mortales llaman con ahínco a la razón, la buscan con codicia, hartos de las producciones con que se divertían en su infancia, desean un pasto más sólido; su curiosidad se dirige insensiblemente hacia objetos útiles.</blockquote>','Si bien es cierto que los impresos no fueron la principal fuente de información en este momento debido a la primacía de los circuitos orales, estos no tuvieron un impacto limitado en la vida local, como se ha querido creer. Todo tipo de impresos y papeles públicos eran comentados en tertulias ilustradas y salones familiares; y algunos de sus suscriptores los enviaban, una vez leídos, a otras provincias. Además, los impresos fueron un importante objeto de análisis y debate en la correspondencia privada del periodo: publicaciones van y vienen en cientos de cartas. Este es el caso de la misiva fechada en agosto de 1794, en la que Francisco Antonio Zea pide a José María Cabal –ambos amigos y contertulios de Nariño– la información relevante que se publicaba en un impreso de la época: “no me dices si ha venido correo de España, ni me hablas de noticias públicas. Como no estoy suscrito a la Gaceta, es preciso que tú la leas con cuidado y me mandes un extracto de todo lo que valga la pena”. Finalmente, resulta importante destacar que sus lectores excedían los círculos ilustrados: los testimonios sobre la lectura en voz alta por parte de los sectores populares, aunque escasos, también dan cuenta de un creciente y generalizado impacto de los impresos.']},
    {titulo:'<small>El papel político de la imprenta</small>',parrafos:['Las autoridades virreinales aplaudían los innegables avances de la imprenta en el virreinato, aunque al mismo tiempo declaraban sus temores frente a los efectos, aún no muy bien ponderados, sobre un mundo que comenzaba a transformarse de manera vertiginosa. La imprenta era un factor fundamental de ilustración y una herramienta fundamental para el ejercicio del poder monárquico, pero también podía ser un arma peligrosa que podía erosionar la obediencia. Esta tensión irresoluble será formulada una y otra vez a lo largo del siglo XIX. Según se lee en la acusación formal contra Nariño por parte de la Real Audiencia en julio de 1795:','La imprenta, invención ciertamente feliz para el género humano, pero que, como dice un político, no se ha calculado todavía si ha traído mayores bienes que males, es el medio más cierto de propagar, extender y comunicarse recíprocamente los hombres sus conocimientos, sus ideas y el fruto de sus talentos; así los efectos corresponden a lo bueno, honesto, malo o perjudicial que estos contienen, y por eso las naciones cultas y sabias han establecido en sus leyes la forma y reglas de evitar los males que causa la libertad de prensa o los irreparables daños y fatales consecuencias que puede producir un reprobado abuso de la imprenta.','Como resultado del proceso judicial seguido en contra de Nariño, la Imprenta Patriótica le fue expropiada y fue trasladada de la Plazuela de San Carlos a la Biblioteca Real, donde funcionó con algunas intermitencias. En 1796 Nicolás Calvo la compró  y la puso a funcionar un año después en la llamada Calle de los Carneros (en el costado norte de la actual Avenida Jiménez, entre carreras Séptima y Octava). Pasaron muchos años antes de que Nariño volviera a tener relación con el mundo de la imprenta, y a través de ella, consiguiera el protagonismo político que inmortalizará su nombre en la historia de nuestro país.']},
  ],
  botones : [
    {tipo:'imagen',link: rdir+'/img/imprenta/IMG00304.jpg',pie:'Nariño puso en funcionamiento La Imprenta Patriótica, el primer taller tipográfico de carácter privado en la historia colombiana, en la plazuela de San Carlos (actual Calle 10 entre Carrera Séptima y Sexta). <i>Vistas de Bogotá. Medias naranjas y esquinazos de la Iglesia de San Carlos.</i> Grabado tomado de <i>El papel periódico ilustrado</i>, Número 19, 1882, p. 305. Biblioteca Nacional de Colombia.'},
  ],
  libros : [
    {
      titulo:'Anuncio de que la Imprenta Patriótica va a imprimir el <i>Papel Periódico de Santafé de Bogotá</i>. <i>Papel Periódico de Santafé de Bogotá </i>(abril de 1793)',
      hover:'',
      pie:'Anuncio de que el <i>Papel Periódico de Santafé de Bogotá</i> se va a imprimir en la Imprenta Patriótica. <i>Papel Periódico de Santafé de Bogotá</i> (abril de 1793). Biblioteca Nacional de Colombia, Fondo Pineda 183.',
      url:'http://www.bibliotecanacional.gov.co/recursos_user/bookreader/nro_86/#page/1/mode/1up',
      archivo:'nro_86_Page_001',
      estilo:'Flip',
    },
    {
      titulo:'<i>Oración que en alabanza del ilustrísimo señor don fray Christoval de Torres, insigne fundador del Colegio Mayor de Nuestra Señora del Rosario de Santafé de Bogotá </i>(1793), Imprenta Patriótica',
      hover:'',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f68691/ada?te=ASSET',
      archivo:'fpineda_165_pza11_Pagina_01',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'Historia de las ciencias naturales <i>(1791), por</i> Alexandre Savérien',
      hover:'',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f98186/ada?te=ASSET',
      archivo:'rn_44',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'Noticia sobre la muerte del deán Francisco Martínez, <i>Papel Periódico de Santafé de Bogotá </i>(noviembre de 1794)',
      hover:'',
      pie:'Anuncio del plan de publicación de<i> Historia de la historia natural</i>, <i>Papel Periódico de Santafé de Bogotá</i> (junio de 1791)',
      url:'http://www.bibliotecanacional.gov.co/recursos_user/bookreader/nro_167/#page/2/mode/1up',
      archivo:'nro_167_Page_001',
      estilo:'Flip',
    },
    {
      titulo:'Anuncio del plan de publicación de<i> Historia de la historia natural</i>, <i>Papel Periódico de Santafé de Bogotá </i>(junio de 1791)',
      hover:'',
      pie:'Solo nueve cuadernillos de un plan de impresión que contemplaba doce fueron impresos en la Imprenta Real. Es muy probable que algunos de los restantes hubieran sido estampados en la Imprenta Patriótica de Nariño. Anuncio del plan de publicación de <i>Historia de la historia natural</i>, <i>Papel Periódico de Santafé de Bogotá</i> (junio de 1791). Biblioteca Nacional de Colombia, Fondo Quijano 57, pza. 2.',
      url:'http://www.bibliotecanacional.gov.co/recursos_user/bookreader/nro_18/#page/1/mode/1up',
      archivo:'nro_18_Page_001',
      estilo:'Flip',
    },
    {
      titulo:'Plan de suscripción y reseña de<i> La historia de la historia natural,</i> <i>Papel Periódico de Santafé de Bogotá </i>(mayo de 1792)',
      hover:'',
      pie:'Plan de suscripción y reseña de <i>La historia de la historia natural, Papel Periódico de Santafé de Bogotá</i> (mayo de 1792), Biblioteca Nacional de Colombia, Fondo Pineda 740.',
      url:'http://www.bibliotecanacional.gov.co/recursos_user/bookreader/nro_66/#page/7/mode/1up',
      archivo:'nro_66_Page_001',
      estilo:'Flip',
    },
    {
      titulo:'<i>De la fuerza de la fantasía humana </i>(1793), por Antonio Ludovico Muratori',
      hover:'',
      pie:'',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/bd/search/detailnonmodal/ent:$002f$002fSD_ASSET$002f0$002f68722/ada?te=ASSET',
      archivo:'fmutis_315_Pagina_005',
      estilo:'Portada y catálogo',
    },
    {
      titulo:'Noticia sobre la publicación <i>De la fuerza de la fantasía humana,</i> <i>Papel Periódico de Santafé de Bogotá</i> (agosto de 1793)',
      hover:'',
      pie:'En agosto de 1793, el director del <i>Papel Periódico de Santafé de Bogotá</i>, Manuel del Socorro Rodríguez, escribió un artículo en el que recibía con orgullo la edición que había hecho la Imprenta Patriótica de Antonio Nariño del <i>Tratado sobre la fuerza de la fantasía humana,</i> de Ludovico Muratori. Noticia sobre la publicación del <i>De la fuerza de la fantasía humana, Papel Periódico de Santafé de Bogotá</i> (agosto de 1793), Biblioteca Nacional de Colombia, RS 1.',
      url:'http://www.bibliotecanacional.gov.co/recursos_user/bookreader/nro_101/#page/3/mode/1up',
      archivo:'nro_101_Page_001',
      estilo:'Flip',
    },
    {
      titulo:'<i>Gazeta de Santafé de Bogotá</i> (agosto y diciembre de 1785)',
      hover:'',
      pie:'Dos de las primeras ediciones de la <i>Gaceta de Santafé de Bogotá</i>, una de las primeras publicaciones noticiosas impresas en el actual territorio colombiano junto con el <i>Aviso del terremoto</i>. <i>Gazeta de Santafé de Bogotá</i> (agosto y diciembre de 1785), Biblioteca Nacional de Colombia, Fondo Pineda 740.',
      url:'http://www.bibliotecanacional.gov.co/recursos_user/bookreader/gazetasantafe/#page/1/mode/1up',
      archivo:'ps18_gazetasantafe_1785_001',
      estilo:'Flip',
    },
  ],
},
///////////
derechos : {
  id: 'derechos',//tambien es el folder de las imagenes
  titulo :'La impresión de los Derechos del Hombre',
  imagen : '',
  banners : [
    {titulo:'',parrafos:['']},
  ],
  botones : [
    {tipo:'imagen',link: rdir+'/img/derechos/.jpg'},
    {tipo:'vídeo',link:'#'},
  ],
  libros : [
    {
      titulo:'',
      hover:'',
      pie:'',
      url:'',
      archivo:'',
      estilo:'',
    }
  ],
},
///////////
pensamiento : {
  id: 'pensamiento',//tambien es el folder de las imagenes
  titulo :'La aventura del pensamiento',
  imagen : '',
  banners : [
    {titulo:'',parrafos:['']},
  ],
  botones : [
    {tipo:'imagen',link: rdir+'/img/pensamiento/.jpg'},
    {tipo:'vídeo',link:'#'},
  ],
  libros : [
    {
      titulo:'',
      hover:'',
      pie:'',
      url:'',
      archivo:'',
      estilo:'',
    }
  ],
},
///////////
ahora : {
  id: 'ahora',//tambien es el folder de las imagenes
  titulo :'Ahora o nunca',
  imagen : '',
  banners : [
    {titulo:'',parrafos:['']},
  ],
  botones : [
    {tipo:'imagen',link: rdir+'/img/ahora/.jpg'},
    {tipo:'vídeo',link:'#'},
  ],
  libros : [
    {
      titulo:'',
      hover:'',
      pie:'',
      url:'',
      archivo:'',
      estilo:'',
    }
  ],
},
///////////
pruebas : {
  id: 'pruebas',//tambien es el folder de las imagenes
  titulo :'Pruebas',
  imagen : '',
  banners : [
    {titulo:'',parrafos:['']},
  ],
  botones : [
    {tipo:'imagen',link: rdir+'/img/pruebas/pruebas.jpg'},
    {tipo:'vídeo normal',link:'https://www.youtube.com/watch?v=bpOSxM0rNPM'},
    {tipo:'vídeo short',link:'https://youtu.be/bpOSxM0rNPM'},
    {tipo:'vídeo iframe',link:'http://www.youtube.com/embed/bpOSxM0rNPM'},
  ],
  libros : [
    {
      titulo:'Titulo de prueba',
      hover:'Hover de prueba',
      pie:'Pie de prueba',
      url:'/img/pruebas/pruebas.jpg',
      archivo:'pruebas',
      estilo:'estilo de prueba',
    }
  ],
},
///////////

};

module.exports = db;
