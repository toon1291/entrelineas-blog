export const members = [
  {
    id: 'oscar',
    name: 'Oscar Barranco Rojas',
    official: 'Barranco Rojas Oscar',
    initials: 'OB',
    control: '23221014',
  },
  {
    id: 'dario',
    name: 'Darío Franco Cortés González',
    official: 'Cortés González Darío Franco',
    initials: 'DC',
    control: '23222213',
  },
  {
    id: 'elizabeth',
    name: 'Elizabeth Fernández Limon',
    official: 'Fernández Limon Elizabeth',
    initials: 'EF',
    control: '23221053',
  },
  {
    id: 'diego',
    name: 'Diego Garcia Cruz',
    official: 'Garcia Cruz Diego',
    initials: 'DG',
    control: '23221041',
  },
  {
    id: 'ismael',
    name: 'Ismael Monterrosas Zitlalpopoca',
    official: 'Monterrosas Zitlalpopoca Ismael',
    initials: 'IM',
    control: '23221130',
  },
  {
    id: 'oliver',
    name: 'Oliver Yael Teopancal Sanchez',
    official: 'Teopancal Sanchez Oliver Yael',
    initials: 'OT',
    control: '23222288',
  },
];

export interface Illustration {
  src: string;
  alt: string;
  caption: string;
}

export interface Story {
  slug: string;
  title: string;
  originalTitle: string;
  spanishName?: string;
  collection: string;
  collectionDetail?: string;
  genre?: string;
  literaryAuthor: string;
  written: string;
  authorId: string;
  publishedAt: string | null;
  plannedDate: string;
  status: 'draft' | 'published';
  excerpt: string;
  characters: {
    name: string;
    description: string;
  }[];
  summary: string[];
  lessons: string[];
  audio: string | null;

  // Imagen principal, compatible con el diseño actual.
  illustration: string | null;
  illustrationAlt: string;

  // Galería de imágenes del cuento.
  illustrations?: Illustration[];
  illustrationDescriptions?: string[];
  contentNote?: string;

  sources: {
    label: string;
    url: string;
  }[];
  shop: string;
  shopLabel?: string;
  shopLinks: {
    label: string;
    url: string;
  }[];
}

export const stories: Story[] = [
  {
    slug: 'el-rey-schahriar-y-su-hermano',
    title: 'El rey Schahriar y su hermano, el rey Schahzaman',
    originalTitle:
      'Título original individual no verificado; varía según la edición.',
    collection: 'Alf layla wa-layla · Las mil y una noches',
    literaryAuthor:
      'Anónimo — tradición narrativa de Las mil y una noches.',
    written:
      'Fecha exacta desconocida. Relato de tradición medieval transmitido y reelaborado durante siglos.',
    authorId: 'oscar',
    publishedAt: '2026-11-06',
    plannedDate: '2026-11-06',
    status: 'published',
    excerpt:
      'Dos hermanos, una herida compartida y una decisión que cambiará mil y una noches.\nUn relato sobre el poder, los prejuicios y la palabra.',

    characters: [
      {
        name: 'Schahriar',
        description:
          'Rey que transforma una traición personal en una venganza contra mujeres inocentes.',
      },
      {
        name: 'Schahzaman',
        description:
          'Hermano de Schahriar, cuya experiencia pone en marcha el relato.',
      },
      {
        name: 'Las esposas de los reyes',
        description:
          'Sus infidelidades desencadenan el conflicto.',
      },
      {
        name: 'El genio y la mujer cautiva',
        description:
          'Aparecen durante el viaje y ponen en evidencia los límites del control.',
      },
      {
        name: 'Scherezada',
        description:
          'En la continuación del relato introductorio, intenta detener la violencia mediante historias.',
      },
      {
        name: 'El visir y la hermana de Scherezada',
        description:
          'Intervienen en la preparación de su estrategia narrativa.',
      },
    ],

    summary: [
      'Schahzaman se dispone a visitar a su hermano Schahriar. Al regresar inesperadamente a su palacio, descubre la infidelidad de su esposa y reacciona con violencia. Después viaja sumido en la tristeza.',

      'En el palacio de su hermano observa otra infidelidad, ahora de la esposa de Schahriar. Cuando ambos conocen lo ocurrido, emprenden un viaje. El encuentro con un genio y una mujer cautiva refuerza su desconfianza, que generalizan injustamente a todas las mujeres.',

      'De regreso, Schahriar ordena casarse con una joven cada noche y ejecutarla al amanecer. Su dolor se convierte en abuso de poder contra personas inocentes.',

      'Esta situación da paso a la intervención de Scherezada: decide casarse con él y contar historias que deja inconclusas al amanecer. Así comienza el marco narrativo de Las mil y una noches. Los límites de este capítulo varían entre ediciones.',
    ],

    lessons: [
      'Una experiencia dolorosa no justifica juzgar a todo un grupo. Cada persona es responsable de sus propios actos.',

      'La venganza multiplica el daño. El sufrimiento personal no da derecho a lastimar a personas inocentes.',

      'El conocimiento y la palabra pueden cuestionar la violencia. Scherezada convierte su inteligencia narrativa en una forma de resistencia.',
    ],

    audio: '/audio/schahriar-schahzaman.mp3',

    illustration: '/ilustraciones/portada-schahriar.jpg',
    illustrationAlt:
      'Schahriar escucha a Scherezada en el palacio.',

    illustrations: [
      {
        src: '/ilustraciones/reyes-palacio.png',
        alt: 'Los dos reyes conversan en el patio de un palacio.',
        caption: 'Schahriar y Schahzaman en el palacio.',
      },
      {
        src: '/ilustraciones/viaje-hermanos.png',
        alt: 'Los dos hermanos viajan a caballo junto al mar.',
        caption: 'El viaje de los hermanos.',
      },
      {
        src: '/ilustraciones/scherezada-hermana.png',
        alt: 'Scherezada conversa con su hermana junto a libros y manuscritos.',
        caption: 'Interpretación artística de Scherezada preparando su plan.',
      },
      {
        src: '/ilustraciones/scherezada-rey.png',
        alt: 'Scherezada cuenta una historia al rey a la luz de una lámpara.',
        caption: 'Scherezada narra una historia al rey.',
      },
    ],

    sources: [
      {
        label: 'Texto del relato · Project Gutenberg (traducción inglesa)',
        url: 'https://www.gutenberg.org/files/51252/51252-h/51252-h.htm',
      },
      {
        label: 'Contexto histórico · Encyclopaedia Iranica',
        url: 'https://www.iranicaonline.org/articles/alf-layla-wa-layla/',
      },
    ],

    shop: 'https://www.elsotano.com/libro-las-mil-y-una-noches-10617780',
    shopLinks: [
      {
        label: 'Comprar en Gandhi · Edición 1',
        url: 'https://www.gandhi.com.mx/las-mil-y-una-noches-9786071411716/p',
      },
      {
        label: 'Comprar en Gandhi · Edición 2',
        url: 'https://www.gandhi.com.mx/las-mil-y-una-noches-9788477207955/p?utm_source=chatgpt.com',
      },
    ],
    
    
  },
  {
    slug: 'las-mil-y-una-noches',
    title: 'Historia del príncipe y la vampiro',
    originalTitle:
      'Título individual en árabe no verificado para la edición consultada.',
    spanishName: 'Historia del príncipe y la vampiro.',
    collection: 'Las mil y una noches',
    collectionDetail:
      'Las mil y una noches, cuyo título en árabe es Alf layla wa-layla.',
    literaryAuthor:
      'Anónimo — tradición narrativa de Las mil y una noches.',
    written:
      'Fecha exacta desconocida; relato perteneciente a la tradición medieval de la colección.',
    authorId: 'elizabeth',
    publishedAt: '2026-11-08',
    plannedDate: '2026-11-08',
    status: 'published',
    excerpt:
      'Un consejo peligroso, una desconocida y una trampa oculta.\nUn relato sobre la prudencia, las apariencias y la fortaleza ante el miedo.',
    characters: [
      {
        name: 'El príncipe',
        description:
          'Joven aficionado a la caza que enfrenta una trampa.',
      },
      {
        name: 'La vampiro',
        description:
          'Criatura que aparenta ser una joven indefensa.',
      },
      {
        name: 'El visir',
        description:
          'Consejero responsable de acompañar al príncipe.',
      },
      {
        name: 'El rey',
        description: 'Padre del protagonista.',
      },
      {
        name: 'Los hijos de la vampiro',
        description: 'Esperan devorar al joven.',
      },
    ],
    summary: [
      'Un príncipe sale de cacería acompañado por un visir encargado de protegerlo. Siguiendo su consejo, persigue a una fiera y termina perdido en el desierto.',
      'Allí encuentra a una joven que llora y afirma ser una princesa abandonada por su caravana. Él se compadece y la lleva en su caballo.',
      'Cuando ella se detiene en un bosquecillo, el príncipe la sigue y escucha cómo promete entregarlo a sus hijos para que lo devoren: es una criatura sobrenatural.',
      'Aterrorizado, pide ayuda a Alá y la mujer desaparece. El príncipe regresa con su padre, relata lo sucedido y denuncia el consejo del visir. El rey ordena ejecutar al consejero.',
    ],
    lessons: [
      'Ayudar también requiere prudencia. La compasión es valiosa, pero conviene observar las circunstancias y cuidar nuestra seguridad. Podemos ayudar sin ignorar las señales de peligro.',
      'Los consejos deben evaluarse. Una recomendación puede tener consecuencias graves, incluso cuando proviene de alguien con autoridad. Pensar por cuenta propia y valorar los riesgos ayuda a tomar mejores decisiones.',
      'El miedo no tiene que paralizarnos. Reconocer un peligro permite buscar una salida. En el relato, el príncipe encuentra fortaleza en su fe; esta situación invita a reflexionar sobre nuestros propios recursos para afrontar momentos difíciles.',
    ],
    audio: null,
    illustration: '/ilustraciones/portada-principe-vampiro.png',
    illustrationAlt:
      'Portada ilustrada de Las mil y una noches, edición de Plutón Ediciones.',
    illustrations: [
      {
        src: '/ilustraciones/principe-vampiro-encuentro.png',
        alt: 'El príncipe encuentra a una mujer junto a su caballo frente a la ciudad.',
        caption:
          'El encuentro: el príncipe ofrece ayuda a la mujer que afirma estar perdida.',
      },
      {
        src: '/ilustraciones/principe-vampiro-oracion.png',
        alt: 'El príncipe eleva las manos en oración mientras la mujer se desvanece entre la niebla.',
        caption:
          'La salvación: el príncipe pide ayuda ante la presencia sobrenatural.',
      },
      {
        src: '/ilustraciones/principe-vampiro-arbol.png',
        alt: 'El príncipe se oculta detrás de un árbol y observa a la mujer junto a una cueva.',
        caption:
          'La trampa descubierta: el príncipe escucha las intenciones de la criatura.',
      },
      {
        src: '/ilustraciones/principe-vampiro-bosque.png',
        alt: 'El príncipe y la mujer avanzan a caballo hacia un bosque al atardecer.',
        caption:
          'El camino al bosque: la desconocida guía al príncipe hacia el lugar de la trampa.',
      },
    ],
    sources: [
      {
        label:
          'Biblioteca Digital del ILCE — Diez cuentos de Las mil y una noches (págs. 46–48)',
        url: 'https://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/10Cuentos_LasMilNoches.pdf',
      },
    ],
    contentNote:
      'Nota de contenido: el cuento incluye engaño, amenaza de ser devorado y una ejecución. El resumen evita detalles gráficos. Las enseñanzas propuestas no justifican los castigos violentos del relato.',
    shop: 'https://www.gandhi.com.mx/las-mil-y-una-noches-9788477207955/p',
    shopLabel: 'Comprar en Librerías Gandhi',
    shopLinks: [
      {
        label: 'Comprar en Cafebrería El Péndulo',
        url: 'https://pendulo.com/libro/mil-y-una-noches-i-y-ii-las_223204',
      },
    ],
  },
  {
    slug: 'el-visir-del-rey-yunan-y-el-medico-ruyan',
    title: 'El visir del rey Yunán y el médico Ruyán',
    originalTitle: 'Historia del visir del rey Yunán y del médico Ruyán',
    collection: 'Las mil y una noches',
    literaryAuthor: 'Anónimo',
    written: 'Fecha de composición desconocida',
    authorId: 'dario',
    publishedAt: '2026-11-07',
    plannedDate: '2026-11-07',
    status: 'published',
    excerpt:
      'El médico Ruyán cura al rey Yunán, pero la envidia del visir siembra desconfianza y desencadena una decisión fatal.',
    characters: [
      {
        name: 'Rey Yunán',
        description: 'Gobernante que padece lepra.',
      },
      {
        name: 'Médico Ruyán',
        description:
          'Sabio que consigue curarlo mediante un ingenioso tratamiento.',
      },
      {
        name: 'Visir',
        description:
          'Consejero del rey que siente envidia del médico y provoca desconfianza.',
      },
      {
        name: 'Pescador y efrit',
        description:
          'Personajes del marco narrativo en el que se cuenta la historia.',
      },
    ],
    summary: [
      'El rey Yunán padece una enfermedad que otros médicos no han podido curar. El médico Ruyán consigue sanarlo mediante un tratamiento ingenioso que utiliza un mazo y una pelota medicinal. Agradecido, el rey recompensa al médico, pero su visir siente envidia y convence al monarca de que Ruyán representa una amenaza. El rey ordena ejecutarlo. Antes de morir, el médico le entrega un libro que supuestamente le permitirá comunicarse con su cabeza después de ser decapitado. Sin embargo, al leerlo, el rey entra en contacto con un veneno y muere.',
    ],
    lessons: [
      'No debemos dejarnos llevar por la envidia, porque puede provocar injusticias.',
      'Debemos ser agradecidos y respetar a quienes nos ayudan.',
      'Antes de tomar decisiones importantes, debemos pensar, investigar los hechos y no dejarnos manipular por rumores.',
    ],
    audio: '/audio/visir-rey-yunan-medico-ruyan.mp3',
    illustration: '/ilustraciones/visir-rey-yunan-3.jpg',
    illustrationAlt:
      'Portada ilustrada del cuento. Autoría y licencia pendientes de verificación.',
    illustrations: [
      {
        src: '/ilustraciones/visir-rey-yunan-1.jpg',
        alt: 'Rey acompañado de una joven.',
        caption: 'Rey acompañado de una joven.',
      },
      {
        src: '/ilustraciones/visir-rey-yunan-2.jpg',
        alt: 'Dos hombres sentados sobre una alfombra decorada con motivos florales y geométricos.',
        caption:
          'Dos hombres sentados sobre una alfombra decorada con motivos florales y geométricos.',
      },
      {
        src: '/ilustraciones/visir-rey-yunan-3.jpg',
        alt: 'Portada ilustrada del cuento.',
        caption: 'Portada ilustrada del cuento.',
      },
    ],
    sources: [
      {
        label: 'Biblioteca Digital ILCE',
        url: 'https://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/10Cuentos_LasMilNoches.pdf',
      },
      {
        label: 'Wikisource — El libro de las mil noches y una noche, Tomo I',
        url: 'https://es.wikisource.org/wiki/El_libro_de_las_mil_noches_y_una_noche/Tomo_I',
      },
      {
        label: 'DivinorTV — Historia del visir del rey Yunán y del médico Ruyán',
        url: 'https://www.divinortv.com/2022/11/historia-del-visir-del-rey-yunan-y-del.html',
      },
      {
        label: 'iVoox — 9.ª noche, historia del visir del rey Yunán',
        url: 'https://www.ivoox.com/9a-noche-historia-del-visir-del-rey-yunan-audios-mp3_rf_17190694_1.html',
      },
    ],
    shop: '',
    shopLinks: [],
  },
  {
    slug: 'el-visir-nureddin-su-hermano-chamseddin-y-hassan-badreddin',
    title:
      'El visir Nureddin, de su hermano el visir Chamseddin y de Hassán Badreddin',
    originalTitle:
      'Título original en árabe no confirmado; se utiliza el título de la versión española consultada.',
    collection: 'Las mil y una noches',
    literaryAuthor: 'Anónimo',
    written: 'Fecha de composición desconocida',
    authorId: 'dario',
    publishedAt: null,
    plannedDate: '2026-11-13',
    status: 'draft',
    excerpt:
      'Dos hermanos visires se separan después de una discusión. Años más tarde, las aventuras de Hassán Badreddin y una serie de encuentros inesperados conducen al reencuentro de su familia.',
    characters: [
      {
        name: 'Nureddin',
        description:
          'Hermano menor de Chamseddin, quien abandona Egipto después de una discusión con su hermano. Posteriormente se casa con la hija del visir de Basora y tiene un hijo llamado Hassán Badreddin.',
      },
      {
        name: 'Chamseddin',
        description:
          'Hermano mayor de Nureddin y visir de Egipto. Es padre de Sett El-Hosn.',
      },
      {
        name: 'Hassán Badreddin',
        description:
          'Hijo de Nureddin y de la hija del visir de Basora. Esposo de Sett El-Hosn y padre de Agib.',
      },
      {
        name: 'Sett El-Hosn',
        description:
          'Hija de Chamseddin y esposa de Hassán Badreddin.',
      },
      {
        name: 'Agib',
        description:
          'Hijo de Hassán Badreddin y Sett El-Hosn.',
      },
      {
        name: 'Visir de Basora',
        description:
          'Padre de la esposa de Nureddin y suegro de este.',
      },
      {
        name: 'Sultán de Egipto',
        description:
          'Gobernante para quien trabajan los dos hermanos.',
      },
    ],
    summary: [
      'Dos hermanos llamados Chamseddin y Nureddin trabajan como visires del sultán de Egipto. Después de una discusión sobre el posible matrimonio de sus hijos, Chamseddin humilla a su hermano menor. Herido por sus palabras, Nureddin abandona Egipto y viaja hasta Basora.',
      'En Basora, Nureddin es recibido por el visir de aquella ciudad y termina casándose con su hija. De esa unión nace Hassán Badreddin, un joven reconocido por su belleza e inteligencia. Mientras tanto, Chamseddin tiene una hija llamada Sett El-Hosn.',
      'Cuando Nureddin muere, Hassán queda solo y emprende un viaje que lo lleva a vivir una serie de acontecimientos extraordinarios. Después de una noche llena de sucesos inesperados, es separado de Sett El-Hosn y termina en Damasco, donde comienza una nueva vida como pastelero.',
      'Tiempo después, Hassán se encuentra con Agib, su propio hijo, aunque ninguno de los dos conoce inicialmente su parentesco. Este encuentro permite que Chamseddin descubra la identidad de su sobrino y comience a buscar a Hassán. Finalmente, Hassán se reúne con su madre, su esposa, su hijo y su tío. La familia vuelve a encontrarse después de años de separación.',
    ],
    lessons: [
      'Debemos cuidar nuestras palabras y acciones: una discusión y las palabras hirientes pueden provocar separaciones y sufrimiento entre familiares.',
      'La familia y los lazos de unión son importantes: el cariño familiar puede permanecer incluso cuando las personas están lejos y atraviesan dificultades.',
      'No debemos perder la esperanza ante las adversidades: aunque Hassán enfrenta pérdidas y separaciones, finalmente logra reencontrarse con sus seres queridos.',
    ],
    audio: null,
    illustration: '/ilustraciones/nureddin-portada.jpg',
    illustrationAlt: 'Portada ilustrada del cuento.',
    illustrations: [
      {
        src: '/ilustraciones/nureddin-portada.jpg',
        alt: 'Portada con una figura femenina en un entorno vegetal y un ave blanca.',
        caption: 'Portada del cuento.',
      },
      {
        src: '/ilustraciones/nureddin-visir-presentacion.jpg',
        alt: 'Escena de un hombre realizando una reverencia ante tres mujeres en un jardín.',
        caption: 'Escena ilustrada en un jardín.',
      },
      {
        src: '/ilustraciones/nureddin-ilustracion-bn.jpg',
        alt: 'Ilustración en blanco y negro de ambiente oriental.',
        caption: 'Ilustración en blanco y negro del relato.',
      },
    ],
    sources: [
      {
        label: 'Ciudad Seva',
        url: 'https://ciudadseva.com/texto/las-mil-y-una-noches-06/',
      },
      {
        label: 'Project Gutenberg',
        url: 'https://www.gutenberg.org/files/47631/47631-h/47631-h.htm',
      },
    ],
    shop: '',
    shopLinks: [],
  },
  {
    slug: 'historia-del-joven-encantado-y-de-los-peces',
    title: 'Historia del joven encantado y de los peces',
    originalTitle:
      'Histoire du jeune homme ensorcelé et des poissons (versión de J. C. Mardrus).',
    collection: 'Las mil y una noches',
    literaryAuthor: 'Anónimo',
    written: 'Fecha de composición desconocida',
    authorId: 'diego',
    publishedAt: '2026-11-09',
    plannedDate: '2026-11-09',
    status: 'published',
    excerpt:
      'Cuatro peces de colores llevan a un rey hasta un palacio solitario. Allí, un joven convertido en piedra de la cintura para abajo le cuenta cómo una ciudad entera desapareció bajo el agua.',
    characters: [
      {
        name: 'El joven rey de las Islas Negras',
        description:
          'Su esposa lo hechiza y lo deja inmóvil de la cintura para abajo.',
      },
      {
        name: 'El rey visitante',
        description:
          'Investiga de dónde vienen los peces y ayuda al joven a recuperar su libertad.',
      },
      {
        name: 'La reina hechicera',
        description:
          'Esposa del joven rey. Usa su magia contra él y contra los habitantes de la ciudad.',
      },
      {
        name: 'El pescador',
        description:
          'Lleva al palacio los peces de colores que ponen en marcha la investigación.',
      },
    ],
    summary: [
      'Un pescador lleva al palacio cuatro peces de distintos colores. Cuando el rey se entera de lo que sucede al cocinarlos y comprueba que los peces pueden hablar, decide investigar su origen. Su búsqueda lo lleva de un lago rodeado de montañas a un palacio donde encuentra a un joven que no puede levantarse.',
      'El joven le cuenta que gobernaba las Islas Negras. Al descubrir que su esposa lo adormecía para salir a escondidas, la siguió e hirió al hombre con quien ella se encontraba. En represalia, la reina convirtió en piedra la mitad inferior del cuerpo del joven, transformó la ciudad en un lago y convirtió a sus habitantes en peces.',
      'El rey visitante se hace pasar por el hombre herido y convence a la hechicera de que deshaga los encantamientos. El joven recupera la movilidad, los peces vuelven a ser personas y las montañas recobran su forma de islas. Al final, el rey adopta al joven como hijo y recompensa al pescador por haberlo llevado hasta el misterio.',
    ],
    lessons: [
      'Investiga antes de sacar conclusiones. El rey escucha al pescador y busca el origen de los peces. Ese detalle extraño lo lleva a descubrir lo que le ocurrió a la ciudad.',
      'La venganza puede dañar a quienes no participaron en el conflicto. La hechicera extiende su castigo a toda una población por una disputa personal.',
      'Escuchar puede ser el primer paso para ayudar. El rey entiende cómo intervenir después de oír la historia del joven.',
    ],
    audio: '/audio/joven-encantado-y-de-los-peces-ultima-toma.mp3',
    illustration: '/ilustraciones/joven-encantado-conversacion.jpg',
    illustrationAlt:
      'El joven rey yace recostado entre dos mujeres que sostienen abanicos de plumas.',
    illustrations: [
      {
        src: '/ilustraciones/joven-encantado-conversacion.jpg',
        alt: 'El joven rey yace recostado entre dos mujeres que sostienen abanicos de plumas.',
        caption:
          'El joven rey escucha una conversación. Ilustración de Thomas Dalziel, digitalizada por George P. Landow para The Victorian Web.',
      },
      {
        src: '/ilustraciones/joven-encantado-liberacion.jpg',
        alt: 'Dos hombres se encuentran de pie junto a la entrada de una habitación.',
        caption:
          'El joven rey, libre del encantamiento. Ilustración de Thomas Dalziel, digitalizada por George P. Landow para The Victorian Web.',
      },
    ],
    sources: [
      {
        label: 'Leer el cuento en español — Wikisource',
        url: 'https://es.wikisource.org/wiki/Historia_del_joven_encantado_y_de_los_peces',
      },
      {
        label: 'Créditos de la imagen: El joven rey escucha una conversación — The Victorian Web',
        url: 'https://victorianweb.org/art/illustration/dalziel/2.html',
      },
      {
        label: 'Créditos de la imagen: El joven rey, libre del encantamiento — The Victorian Web',
        url: 'https://victorianweb.org/art/illustration/dalziel/3.html',
      },
    ],
    shop: 'https://www.gandhi.com.mx/las-mil-y-una-noches-9788446052470/p?srsltid=AYCX9vJu17QNcuK5h-nLAoBWW1DbXPTaTILq__nw3RHTMvs_O5w5zAlf',
    shopLabel: 'El libro de las mil noches y una noche — Librerías GANDHI',
    shopLinks: [],
  },
  {
    slug: 'el-mandadero-y-las-tres-doncellas',
    title: 'El mandadero y las tres doncellas',
    originalTitle:
      'حكاية الحمال مع البنات الثلاث (Ḥikāyat al-ḥammāl maʿa al-banāt al-thalāth)',
    spanishName: 'El mandadero y las tres doncellas',
    collection: 'Las mil y una noches',
    collectionDetail:
      'Las mil y una noches, cuyo título en árabe es Alf layla wa-layla.',
    literaryAuthor:
      'Anónimo, perteneciente a la tradición narrativa árabe.',
    written:
      'Fecha exacta desconocida. Relato de tradición medieval transmitido y reelaborado durante siglos.',
    authorId: 'ismael',
    publishedAt: '2026-11-10',
    plannedDate: '2026-11-10',
    status: 'published',
    excerpt:
      'Una velada en Bagdad reúne a un mandadero, tres doncellas, tres viajeros y visitantes que ocultan su identidad. Cada historia revela un secreto distinto.',
    characters: [
      {
        name: 'El mandadero de Bagdad',
        description:
          'Trabajador humilde que es invitado a una residencia y participa en una velada llena de misterios.',
      },
      {
        name: 'Las tres doncellas',
        description:
          'Anfitrionas que establecen una condición para compartir su casa y guardan historias de sufrimiento.',
      },
      {
        name: 'Los tres calendarios o derviches',
        description:
          'Viajeros que han perdido un ojo y deben contar sus extraordinarias historias.',
      },
      {
        name: 'Harún al-Rashid, Giafar y Masrur',
        description:
          'Visitantes que ocultan sus identidades y ayudan a conocer la verdad de los conflictos.',
      },
    ],
    summary: [
      'En la ciudad de Bagdad, un humilde mandadero es contratado por una joven para transportar numerosas compras hasta una elegante residencia. Allí descubre que viven tres doncellas, quienes lo invitan a compartir una comida y una velada con una condición: no debe preguntar sobre asuntos que no le conciernen.',
      'Durante la reunión llegan tres calendarios, hombres viajeros que han perdido un ojo, y posteriormente tres visitantes que ocultan sus identidades: el califa Harún al-Rashid y sus acompañantes. La noche transcurre entre conversaciones, música y acontecimientos misteriosos.',
      'Los invitados presencian situaciones desconcertantes, entre ellas el castigo de dos perras negras y las señales de sufrimiento de una de las doncellas. Cuando la curiosidad provoca que incumplan la condición establecida, las mujeres reaccionan con severidad.',
      'Para evitar el castigo, los visitantes deben contar sus extraordinarias historias. Poco a poco se revelan secretos relacionados con viajes, traiciones, encantamientos y sufrimientos personales. Finalmente, el califa interviene para conocer la verdad y contribuir a resolver los conflictos.',
    ],
    lessons: [
      'Respetar los límites y la privacidad de los demás. La curiosidad excesiva puede provocar conflictos cuando se incumplen acuerdos o se hacen preguntas sobre asuntos personales.',
      'No juzgar sin conocer toda la historia. Las acciones de las doncellas parecen incomprensibles al principio, pero sus experiencias permiten entender mejor sus comportamientos.',
      'Reconocer el valor de la verdad y la empatía. Escuchar las experiencias ajenas ayuda a comprender el sufrimiento, superar prejuicios y buscar soluciones justas.',
    ],
    audio:
      '/audio/el-mandadero-y-las-tres-doncellas.mp3',
    illustration:
      '/ilustraciones/el-mandadero-y-las-tres-doncellas.jpg',
    illustrationAlt:
      'El mandadero llega a la casa de las tres doncellas.',
    illustrations: [
      {
        src: '/ilustraciones/el-mandadero-y-las-tres-doncellas.jpg',
        alt: 'El mandadero llega a la casa donde se encuentran las tres doncellas.',
        caption: 'El mandadero y las tres doncellas.',
      },
      {
        src: '/ilustraciones/el-mandadero-y-las-tres-doncellas2.jpg',
        alt: 'El mandadero y otros personajes conversan en un jardín con fuente.',
        caption: 'La reunión en el jardín.',
      },
      {
        src: '/ilustraciones/el-mandadero-y-las-tres-doncellas (1).jpg',
        alt: 'El mandadero se encuentra con las tres doncellas durante su viaje.',
        caption: 'El encuentro del mandadero con las doncellas.',
      },
    ],
    sources: [
      {
        label:
          'Project Gutenberg — The Porter and the Three Ladies of Baghdad, traducción de Richard F. Burton',
        url: 'https://www.gutenberg.org/files/3435/3435-h/3435-h.htm',
      },
    ],
    contentNote:
      'Las tres ilustraciones son propias de Ismael. La fecha de publicación real aún no está confirmada; 2026-11-10 es únicamente el turno previsto.',
    shop:
      'https://www.gandhi.com.mx/las-mil-y-una-noches-9786071411716/p',
    shopLabel: 'Comprar Las mil y una noches en Librerías Gandhi',
    shopLinks: [],
  },
  {
    slug: 'historia-de-zobeida-la-mayor-de-las-jovenes',
    title: 'Historia de Zobeida, la mayor de las jóvenes',
    originalTitle:
      'No se identifica un título árabe único y estandarizado para este relato en las fuentes consultadas.',
    spanishName: 'Historia de Zobeida, la mayor de las jóvenes',
    collection: 'Las mil y una noches',
    collectionDetail:
      'Las mil y una noches, cuyo título en árabe es Alf layla wa-layla.',
    literaryAuthor: 'Anónimo.',
    written: 'Edad Media; fecha exacta desconocida.',
    authorId: 'oliver',
    publishedAt: '2026-11-11',
    plannedDate: '2026-11-11',
    status: 'published',
    excerpt:
      'Zobeida recibe a sus hermanas después de sus pérdidas, pero un viaje, los celos y un encantamiento revelan el origen de un castigo misterioso.',
    characters: [
      {
        name: 'Zobeida',
        description:
          'Joven de Bagdad que administra su herencia, ayuda a sus hermanas y sobrevive a sus traiciones.',
      },
      {
        name: 'Las dos hermanas de Zobeida',
        description:
          'Hermanas que, movidas por los celos, traicionan a Zobeida y reciben un castigo sobrenatural.',
      },
      {
        name: 'El joven príncipe',
        description:
          'Príncipe encantado que Zobeida encuentra en una ciudad misteriosa y lleva consigo hacia Bagdad.',
      },
      {
        name: 'La efrita',
        description:
          'Ser sobrenatural que salva a Zobeida y transforma a sus hermanas en dos perras negras.',
      },
      {
        name: 'El califa Harún al-Rashid',
        description:
          'Interviene para conocer la verdad y ayuda a resolver el conflicto.',
      },
    ],
    summary: [
      'Zobeida es una joven de Bagdad que, tras la muerte de su padre, recibe una herencia y aumenta su fortuna mediante el comercio. Cuando sus hermanas son abandonadas después de perder sus riquezas, Zobeida las recibe en su hogar y comparte generosamente sus bienes.',
      'Tiempo después, Zobeida emprende un viaje comercial en barco acompañada por sus hermanas. Durante la travesía llegan a una ciudad misteriosa cuyos habitantes han sido transformados en estatuas de piedra negra. En un palacio, Zobeida encuentra a un joven príncipe que ha sobrevivido al encantamiento gracias a su fe.',
      'Zobeida se enamora del príncipe y lo invita a regresar con ella a Bagdad. Sin embargo, sus hermanas sienten celos y, durante el viaje de regreso, arrojan a ambos al mar. El príncipe muere ahogado, pero Zobeida sobrevive y llega a una isla.',
      'En la isla, Zobeida salva a una serpiente que está siendo atacada. La criatura revela que es una efrita y, en agradecimiento, castiga a las hermanas traidoras convirtiéndolas en dos perras negras. La efrita obliga a Zobeida a azotarlas diariamente, aunque ella sigue sintiendo compasión por sus hermanas. Más adelante, el califa interviene para conseguir que recuperen su forma humana.',
    ],
    lessons: [
      'La generosidad debe acompañarse de prudencia. Zobeida ayuda repetidamente a sus hermanas, pero su confianza no impide que ellas la traicionen.',
      'La envidia puede destruir las relaciones familiares. Los celos de las hermanas provocan una tragedia y terminan convirtiéndose en la causa de su propio castigo.',
      'La compasión puede mantenerse incluso frente al daño recibido. A pesar de la traición, Zobeida sigue sintiendo afecto por sus hermanas y sufre al tener que castigarlas.',
    ],
    audio: null,
    illustration: '/ilustraciones/zobeida.jpg',
    illustrationAlt:
      'Zobeida, la mayor de las jóvenes. Ilustración de Charles Walker Collectios.',
    illustrations: [
      {
        src: '/ilustraciones/zobeida.jpg',
        alt: 'Zobeida, la mayor de las jóvenes, en una escena del relato.',
        caption:
          'Zobeida, la mayor de las jóvenes. Ilustración de Charles Walker Collectios.',
      },
    ],
    sources: [
      {
        label:
          'Biblioteca Virtual Antorcha — Historia de Zobeida, la mayor de las jóvenes',
        url: 'https://antorcha.net/biblioteca_virtual/literatura/mil/17.html',
      },
      {
        label:
          'Proyecto Gutenberg — Las mil noches y una noche, tomo I',
        url: 'https://www.gutenberg.org/files/47287/47287-h/47287-h.htm',
      },
    ],
    contentNote:
      'Publicación realizada el 11 de noviembre de 2026. El audio de solo voz queda pendiente de incorporar.',
    shop:
      'https://www.gandhi.com.mx/las-mil-y-una-noches-9786071411716/p',
    shopLabel: 'Comprar Las mil y una noches en Librerías Gandhi',
    shopLinks: [],
  },
  {
    slug: 'historia-de-la-mujer-despedazada-las-tres-manzanas-y-el-negro-rihan',
    title:
      'Historia de la mujer despedazada, las tres manzanas y el negro Rihán',
    originalTitle:
      'El relato forma parte de Alf layla wa-layla (Las mil y una noches). Se conoce en distintas traducciones como «El cuento de las tres manzanas».',
    spanishName:
      'Historia de la mujer despedazada, las tres manzanas y el negro Rihán.',
    collection: 'Las mil y una noches',
    collectionDetail:
      'Las mil y una noches, una recopilación de relatos tradicionales de origen árabe, persa e indio.',
    genre: 'Narrativo, cuento de misterio y tragedia.',
    literaryAuthor: 'Anónimo.',
    written:
      'Fecha exacta desconocida. Pertenece a la tradición medieval de relatos que conforman la colección.',
    authorId: 'oscar',
    publishedAt: '2026-11-12',
    plannedDate: '2026-11-12',
    status: 'published',
    excerpt:
      'Un misterioso cofre encontrado en el río Tigris revela un terrible crimen que lleva al califa\nHarún al-Rashid a investigar una historia marcada por el amor, los celos, la desconfianza y las consecuencias de una mentira.',
    characters: [
      {
        name: 'El califa Harún al-Rashid',
        description:
          'Gobernante de Bagdad que descubre el cuerpo de la mujer y exige encontrar al responsable del asesinato. Representa la autoridad y la búsqueda de justicia.',
      },
      {
        name: 'Giafar, el visir',
        description:
          'Consejero del califa, encargado de investigar el crimen y descubrir la identidad de los responsables.',
      },
      {
        name: 'La mujer asesinada',
        description:
          'Esposa del joven comerciante y madre de tres hijos. Su deseo de comer manzanas desencadena los acontecimientos y la convierte en víctima de una acusación falsa.',
      },
      {
        name: 'El joven esposo',
        description:
          'Viaja hasta Basora para conseguir las manzanas. Sus celos y desconfianza lo llevan a cometer un asesinato del que después se arrepiente.',
      },
      {
        name: 'El negro Rihán',
        description:
          'Esclavo que obtiene una de las manzanas y cuenta una historia falsa sobre su procedencia, provocando los celos del esposo.',
      },
      {
        name: 'El hijo del matrimonio',
        description:
          'Niño que toma una de las manzanas y explica lo sucedido, permitiendo descubrir que su madre era inocente.',
      },
      {
        name: 'El anciano',
        description:
          'Padre de la mujer asesinada, quien se presenta ante el califa e intenta asumir la responsabilidad del crimen.',
      },
      {
        name: 'El pescador',
        description:
          'Hombre humilde que encuentra el cofre en el río Tigris y da inicio a la investigación.',
      },
    ],
    summary: [
      'La historia comienza en Bagdad, cuando el califa Harún al-Rashid recorre la ciudad acompañado de su visir Giafar y otros miembros de su corte. Encuentran a un pescador que se lamenta de su mala fortuna. El califa le ofrece una recompensa a cambio de lanzar nuevamente sus redes al río Tigris, y el pescador consigue sacar un pesado cofre cerrado. Al abrirlo, descubren el cuerpo despedazado de una mujer, cuidadosamente envuelto y oculto en su interior.',
      'Indignado por el asesinato, el califa ordena a Giafar encontrar al responsable del crimen. Le concede tres días para resolver el misterio y lo amenaza con castigarlo si fracasa. Cuando el plazo está por terminar, aparecen un joven y un anciano que aseguran ser responsables de la muerte. Finalmente, el joven comienza a contar lo sucedido.',
      'El muchacho explica que la mujer era su esposa, a quien amaba profundamente y con quien tenía tres hijos. Cuando ella enfermó, expresó el deseo de comer una manzana. Como no había manzanas en Bagdad, su esposo viajó hasta Basora, compró tres y regresó a su hogar para entregárselas.',
      'Días después, encontró a un esclavo negro que llevaba una manzana. Al preguntarle de dónde la había obtenido, el hombre respondió que se la había regalado su amante, cuyo esposo había viajado hasta Basora para conseguir tres manzanas. Dominado por los celos y sin comprobar la historia, el joven creyó que su esposa lo había traicionado, la asesinó y ocultó su cuerpo en un cofre que arrojó al Tigris.',
      'Más tarde, uno de sus hijos confesó que había tomado una de las manzanas y que un esclavo se la había arrebatado en la calle. El hombre comprendió que su esposa era inocente y que había cometido una injusticia por creer a un desconocido. Arrepentido, confesó ante el califa. La investigación conduce finalmente hasta Rihán, un esclavo relacionado con la casa del visir.',
      'El relato muestra cómo una mentira aparentemente insignificante puede desencadenar una tragedia irreparable. También presenta la importancia de investigar los hechos antes de juzgar y las consecuencias de permitir que las emociones dominen la razón.',
    ],
    lessons: [
      'Los celos pueden provocar consecuencias irreparables. El esposo permite que sus sospechas dominen sus decisiones y termina asesinando a una mujer inocente.',
      'Una mentira puede causar daños mayores de lo imaginado. La historia inventada sobre la manzana desencadena una serie de acontecimientos que terminan en tragedia.',
      'La verdad debe buscarse antes de juzgar. Es importante investigar, escuchar y comprobar los hechos antes de acusar a alguien.',
    ],
    audio: null,
    illustration: '/ilustraciones/portada-tres-manzanas.png',
    illustrationAlt:
      'Mujer retratada en la entrada de una casa, ilustración para el cuento de las tres manzanas.',
    illustrations: [
      {
        src: '/ilustraciones/tres-manzanas-ilustracion-1.png',
        alt: 'Escena de un palacio con un gobernante, una bailarina y una mujer sentada.',
        caption:
          'Una escena de palacio, con personajes reunidos durante la narración.',
      },
      {
        src: '/ilustraciones/tres-manzanas-ilustracion-2.png',
        alt: 'Una mujer conversa con un gobernante en un palacio iluminado por la noche.',
        caption:
          'Una conversación nocturna entre una mujer y un gobernante.',
      },
      {
        src: '/ilustraciones/tres-manzanas-ilustracion-3.png',
        alt: 'Varias personas se reúnen alrededor de una mesa en una escena antigua.',
        caption:
          'Personajes reunidos alrededor de una mesa mientras se desarrolla la historia.',
      },
      {
        src: '/ilustraciones/tres-manzanas-ilustracion-4.png',
        alt: 'Un hombre vestido con prendas rojas huye de una escena en una cueva.',
        caption:
          'Un hombre escapa de una cueva mientras lleva consigo un objeto valioso.',
      },
    ],
    sources: [
      {
        label: 'Proyecto Gutenberg — Las mil noches y una noche, tomo I',
        url: 'https://www.gutenberg.org/files/47287/47287-h/47287-h.htm',
      },
      {
        label: 'Wikipedia — El cuento de las tres manzanas',
        url: 'https://es.wikipedia.org/wiki/El_cuento_de_las_tres_manzanas',
      },
      {
        label:
          'Proyecto Gutenberg — The Book of the Thousand Nights and a Night',
        url: 'https://www.gutenberg.org/ebooks/3435',
      },
    ],
    contentNote:
      'Publicación realizada el 12 de noviembre de 2026. El audio de solo voz queda pendiente de incorporar.',
    shop:
      'https://www.libreriadante.com.mx/product-page/las-mil-y-una-noches-para-niños?utm_source=chatgpt.com',
    shopLabel: 'Librería Dante',
    shopLinks: [
      {
        label: 'Akal',
        url: 'https://www.akal.mx/libro/sherezade-y-las-mil-y-una-noches_44639/?utm_source=chatgpt.com',
      },
    ],
  },
];

export const schedule = Array.from({ length: 24 }, (_, index) => ({
  date: `2026-11-${String(index + 6).padStart(2, '0')}`,
  member: members[index % members.length],
  round: Math.floor(index / members.length) + 1,
}));

export function dateLabel(date: string): string {
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T12:00:00Z`));
}

// Cambiar estos datos únicamente cuando se publique realmente.
// La fecha prevista no equivale a una fecha real de publicación.
export const visibleStories = stories.filter(
  (story) => story.status === 'published' && story.publishedAt,
);

export const socialProfiles: {
  name: string;
  url: string | null;
}[] = [
  { name: 'Instagram', url: 'https://www.instagram.com/entr_elineasblog/' },
  { name: 'Facebook', url: 'https://www.facebook.com/entrelineasblog1' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@entr_elineasblog' },
];