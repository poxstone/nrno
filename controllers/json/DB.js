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
      {tipo:'imagen',link: rdir+'/img/santafe/IMG00168.jpg',pie:'<i>Esquina noreste de la plaza – Nariño</i>. Grabado tomado de <i>El papel periódico ilustrado</i>, 1 de enero de 1887, p. 168. Biblioteca Nacional de Colombia.'},
      {tipo:'imagen 2',link: rdir+'/img/santafe/Cabrer_1797.jpg',pie:'<i>Plano de la ciudad de Santafé de Bogotá y sus alrededores</i> (1797), Carlos Francisco Cabrer (acuarela sobre tela, 122 X156 cms.), Servicio Cartográfico del Ejército de Madrid, registro: Cartografía y relaciones históricas de ultramar, tomo V: Colombia, Panamá, Venezuela, lámina 164).'},
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
    {titulo:'El catálogo ',parrafos:['Los libros incautados a Nariño incluían clásicos griegos, latinos, españoles y franceses, y títulos de los más reconocidos autores del momento en materia política, filosófica y económica; y conviven sin problema obras divulgativas y populares con libros altamente especializados. El santafereño sabía conciliar la tradición humanística heredada (encarnada en la literatura, la gramática, la retórica, la jurisprudencia hispánica, las historias clásicas y las crónicas indianas) con los nuevos intereses en las “ciencias de la naturaleza” (física, química, geografía y mineralogía) y la economía política, el periodismo, la educación y la literatura e historia modernas. Finalmente, los libros de devoción, apologética cristiana y teología también campean en sus colecciones, lo que evidencia el peso que seguían teniendo las lecturas religiosas como formas privilegiadas de comprensión del mundo para este momento.','<a target="_blank" href"https://www.google.com/url?q=http://www.bdigital.unal.edu.co/8059/1/Archivo_Nari%25C3%25B1o.html%2358c&sa=D&ust=1443968806856000&usg=AFQjCNGMJJD5HMcMS6JmZlmXu4MXFH1rAw">La segunda diligencia</a> se llevó a cabo unas semanas después, el 20 de septiembre de 1794, en la celda de fray Andrés de Jijona, en el Hospicio de los Padres Capuchinos de Santafé. Allí fueron incautados 28 títulos y un total de 78 volúmenes que el hermano mayor del santafereño, José Nariño, había dejado en manos del religioso valenciano después de esconderlos en distintos lugares. El oidor Joaquín Mosquera y Figueroa, que adelantaba el proceso de Nariño, ordenó que se llevara a cabo un procedimiento de reconocimiento e incautación en ese lugar, pues algunos compañeros de Jijona habían comentado a oficiales militares que los libros estaban escondidos en el convento y la noticia ya corría como polvorín por la ciudad. ','Estos libros dan cuenta del catálogo de lecturas prohibidas por la Corona, al mismo tiempo que dan luces sobre las lecturas que más curiosidad despertaba en los inquietos estudiantes de los colegios santafereños: obras de Voltaire, Raynal, Robertson, Holbach, Montaigne y Montesquieu; también la famosa colección de poesía erótica compuesta por Ovidio (el tomo V de  <i>Amores</i>) y un librito titulado <i>Les Amours de Madame Lavariere</i>, una de las más famosas compañeras sentimentales de Luis XIV. Y aunque eran libros prohibidos, todo parece indicar que Nariño contaba con autorización del deán de la catedral, Francisco Martínez D’acosta (a quien el santafereño prestaba libros), para leerlos y conservarlos por un tiempo. Según los fiscales del caso, estos libros se encontraban en pésimo estado, mojados y maltratados, “como si los hubiesen metido en el agua, de modo que cuesta trabajo, en no pocos, desunir sus hojas para leerlas”. Este descubrimiento garantizaba la inculpación definitiva del santafereño.']},
    {titulo:'Nariño: el librero',parrafos:['Nariño tenía en su biblioteca, ubicada en su casa de la Plazuela de San Francisco, “una colección completa de cuanto era menester”, pues ésta también funcionaba como una librería: entonces era común utilizar el término ‘librería’ para lo que se conoce hoy en día como ‘biblioteca’ y ambos vocablos eran intercambiables y funcionaban como sinónimos. Allí se leían, estudiaban, prestaban, intercambiaban, compraban y vendían libros nuevos y usados, al igual que algunos periódicos provenientes de otros países de América y Europa, que llegaban al virreinato a través del comercio legal y eran aprobados por la censura eclesiástica. Otros –considerados amenazas al orden político hispánico o que “atentaban” contra la pureza de la religión católica– llegaban de contrabando. En este sentido, es probable que los circuitos trazados por los negocios de exportación de quina, tabaco, cacao y azúcar que tenía Nariño, y que incluían ciudades como Cádiz, La Habana, Veracruz y Cartagena, seguramente le permitieron al santafereño aventurarse en este mercado.','Nariño era un juicioso y avezado librero: captaba los intereses y las necesidades de su público, y, aprovechando su amplio bagaje de lecturas, le transmitía su fascinación por los libros y ayudaba a modelar su criterio. Su biblioteca estaba al servicio de personas que se imaginaban a sí mismas como parte de un círculo ilustrado y lector, versado en los clásicos, y cada vez más familiarizado con las “lecturas del siglo” y con idiomas como el francés y el inglés, además del latín. Nariño prestaba y vendía sus libros a familiares, amigos y contertulios, profesores y estudiantes universitarios, funcionarios reales y religiosos seculares y regulares: personajes como Camilo Torres, José Antonio Ricaurte, Joaquín Camacho, Antonio Morales, el ya mencionado deán Martínez, el padre Miguel Isla, los extranjeros Luis de Rieux y Manuel Froes, y el mismo Mutis, figuran entre aquellos a quienes Nariño había prestado libros antes de ir a prisión en agosto de 1794 y muchos de ellos también eran habituales compradores.']},
    {titulo:'El comercio de libros',parrafos:['En muchas oportunidades amigos y conocidos le vendieron a Nariño sus propios libros. Es el caso del naturalista y economista Pedro Fermín de Vargas, quien, antes de fugarse del virreinato, le vendió sus libros al santafereño por cerca de 700 pesos y se los remitió desde Zipaquirá. De hecho, algunos de los libros prohibidos incautados en la celda de Jijona se encontrarán con su signatura. Asimismo, todo parece indicar que Nariño estaba interesado en adquirir algunos libros de José Celestino Mutis y por eso pidió a Zea averiguar su valor.','Si bien el comercio de libros no era un negocio boyante, sí dio réditos gracias al espíritu emprendedor de su dueño. Sin duda, Nariño conocía muy bien los arbitrios del mercado de libros, y así lo dejó consignado en su <a target="_blank" href="http://www.bdigital.unal.edu.co/8059/1/Archivo_Nari%C3%B1o.html#58c"><i>Defensa</i></a>: “yo he tenido comercio de libros, conocía el lugar, sabía que hay sujetos que pagaban bien un buen papel”. Incluso, personajes como el ilustrado bugueño Miguel Cabal Barona le pagaron oro por algunos libros. De hecho, según se desprende de los <a target="_blank" href="http://www.bdigital.unal.edu.co/8059/1/Archivo_Nari%C3%B1o.html#58c">papeles incautados</a> por las autoridades virreinales, entre los planes más inmediatos del santafereño se encontraba darle un nuevo impulso a su librería:','<blockquote>Se hará la factura de los libros, exceptuando sólo los que se contemplen necesarios para el uso, y el resto se harán diligencias activas para su venta a precios moderados, recogiendo todos los que están regados, y recuperando algunos útiles de los vendidos y que no se han pagado.</blockquote>','El testimonio del médico y naturalista panameño Sebastián José López Ruiz, iniciado ante la Real Audiencia con motivo del secuestro de todos los bienes de Nariño, evidencia el buen nombre que se había ganado el santafereño como librero. La causa tenía como objetivo salvar del embargo algunos enseres y 66 títulos (192 volúmenes) que le pertenecían al panameño y que estaban a la venta, a título de depósito, en la casa del santafereño –Nariño tenía negocios importantes relacionados con exportaciones de quina con López Ruiz, razón por la cual este le debía una considerable suma de dinero–. Según consta en la <a tsrget="_blank" href="http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/search/asset/68843">relación firmada por López Ruiz</a> en octubre de 1797, había enviado sus libros a casa de Nariño por “la mayor comodidad que podrían tener en su casa para venderse, por la frecuencia de gentes” que allí entraban.','Entre los libros de López Ruiz se encontraban obras de medicina (compendios de cirugía, viruelas, partos y enfermedades venéreas), historia natural, mineralogía, botánica, geografía, historia y teología. Sin embargo, en el listado de los libros embargados a Nariño figuran muy pocos de los reclamados por el naturalista, quizá porque el santafereño había conseguido venderlos con antelación, mientras que aquellos que no habían encontrado salida fueron embargados con los demás y corrieron su misma suerte.']},
    {titulo:'La suerte de la biblioteca ',parrafos:['Según documentos del proceso de Nariño, muchos de los libros de su biblioteca fueron subastados y su producto se entregó a los fiadores del santafereño en el caso de la Tesorería de Diezmos. La venta no fue fácil ni inmediata, y nunca fue del todo esclarecida en vida de Nariño. El 18 de mayo de 1795, el santafereño le escribió a la Real Audiencia: “yo sé que desde el principio han estado clamando muchas personas por comprar varios muebles y alhajas, pero sobre todo libros que todos son excelentes y pasa su valor de tres mil pesos y con todo no se ha vendido ni el valor de un peso”. La prueba reina al respecto, sin embargo, es el <a target="_blank" href="http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/search/asset/68843">testimonio del escribano real Juan Nepomuceno Camacho</a>, quien afirmará en su momento:','En el embargo y venta de libros no se separaron los que se dicen corresponder a don Sebastián López, así porque todos los que había en casa de don Antonio Nariño estaban juntos, sin división ni especificación alguna de sus dueños, como porque en aquel tiempo no se sabía cuáles fuesen aquéllos ni sobre el particular había recaído providencia, por lo cual se procedió a la venta de libros indistintamente, bajo la inteligencia de que todos eran de Nariño, y en ella entrarían los de López en el todo o en parte, porque algunos quedaron sin rematarse, lo que puede verse de las respectivas diligencias, y el producto de los vendidos, junto con el de los otros bienes embargados entró en poder de don Antonio de las Cajigas, depositario de ellos.','Sin embargo, teniendo en cuenta el valor y la importancia de los libros de Nariño, es muy probable que aquellos que no fueron vendidos terminaran en los repositorios de la Biblioteca Real –que se encuentren hoy en la Biblioteca Nacional de Colombia–. Según el investigador Eduardo Ruiz Martínez, existen ciertas coincidencias inquietantes al revisar los ejemplares de los libros correspondientes a los siglos XVII y XVIII custodiados por la Biblioteca Nacional de Colombia, los cuales se ajustan a los mismos títulos y autores que figuraban en la biblioteca de Nariño.','Por su parte, es muy probable que los libros hallados en La Capuchina fueran destruidos. Sin embargo, más allá de la materialidad de los libros del santafereño, es innegable que estos se constituyeron en faros de ilustración de ideas para toda una generación y contribuyeron, en una manera realmente difícil de ponderar, a la instalación de una verdadera sociedad de opinión, de crítica argumentada y de libre examen entre nosotros. Como bien dirá en su célebre <i>Defensa</i>, firmada en julio de 1795: “para hacer la felicidad del reino, es necesario dar libertad a las plumas, haciendo la restricción a la religión y al gobierno” y “se debe [poder] hablar y escribir libremente”.']},

//    {titulo:'',parrafos:['']},
  ],
  botones : [
    {tipo:'imagen',link: rdir+'/img/biblioteca/IMG00164.jpg'},
    //{tipo:'',link:''},
  ],
  libros : [
    {
      titulo:'Expediente instaurado por Dn. Sebastian Lopez Ruiz, sobre unos papeles, libros y bienes que dice haver recivido Dn. Antonio Nariño de doña María Begoña Aldana, legitima mujer del solicitante.',
      hover:'',
      pie:'1797. BNC: RM 330, pza. 8. Libros y bienes que recibió Nariño de López Ruiz. Da cuenta de la importancia del comercio de libros en el caso de Nariño.',
      url:'http://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/search/asset/68843',
      archivo:'fslopez_55_Pagina_01',
      estilo:'Portada y catálogo',//URL inserta
    },
    /*{
      titulo:'',
      hover:'',
      pie:'',
      url:'',
      archivo:'',
      estilo:'',
    },*/
  ],
},
///////////
narino : {
  id: 'narino',//tambien es el folder de las imagenes
  titulo :'Nariño en la tertulia',
  imagen : '',
  banners : [
    {titulo:'',parrafos:['']},
  ],
  botones : [
    {tipo:'imagen',link: rdir+'/img/narino/.jpg'},
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
imprenta : {
  id: 'imprenta',//tambien es el folder de las imagenes
  titulo :'La Imprenta Patriótica',
  imagen : '',
  banners : [
    {titulo:'',parrafos:['']},
  ],
  botones : [
    {tipo:'imagen',link: rdir+'/img/imprenta/.jpg'},
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
santuario : {
  id: 'santuario',//tambien es el folder de las imagenes
  titulo :'El Santuario',
  imagen : '',
  banners : [
    {titulo:'',parrafos:['']},
  ],
  botones : [
    {tipo:'imagen',link: rdir+'/img/santuario/.jpg'},
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
