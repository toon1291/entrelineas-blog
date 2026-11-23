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
    publishedAt: '2026-11-13',
    plannedDate: '2026-11-13',
    status: 'published',
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
    audio: '/audio/nureddin-hassan.mp3',
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
    audio: '/audio/Zobeida.mp3',
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
      'Publicación realizada el 11 de noviembre de 2026. Audio de solo voz incorporado.',
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

  {
    slug: 'el-rey-omar-al-neman-dario',
    title:
      'El rey Omar Al-Nemán y de sus dos hijos Scharkán y Daul’makán',
    originalTitle:
      'Relato perteneciente a Alf layla wa-layla (Las mil y una noches). El título presenta distintas variantes de transliteración en las traducciones.',
    spanishName:
      'Historia del rey Omar Al-Nemán y de sus dos hijos Scharkán y Daul’makán.',
    collection: 'Las mil y una noches',
    collectionDetail:
      'Recopilación de relatos tradicionales de origen árabe, persa e indio. Esta historia se desarrolla a lo largo de numerosas noches.',
    genre: 'Narrativo, cuento de aventuras, drama y relatos maravillosos.',
    literaryAuthor: 'Anónimo.',
    written:
      'Fecha exacta de composición desconocida. Pertenece a la tradición de relatos que conforman Las mil y una noches.',
    authorId: 'dario',
    publishedAt: '2026-11-19',
    plannedDate: '2026-11-19',
    status: 'published',
    excerpt:
      'La historia de un poderoso rey de Bagdad y sus hijos Scharkán, Daul’makán y Nozhatú, cuyas vidas quedan marcadas por las guerras, el amor, las rivalidades familiares y la lucha por el poder.',
    characters: [
      {
        name: 'Omar Al-Nemán',
        description:
          'Rey de Bagdad y padre de Scharkán, Daul’makán y Nozhatú. Sus decisiones influyen profundamente en el destino de su familia y de su reino.',
      },
      {
        name: 'Scharkán',
        description:
          'Hijo mayor del rey Omar. Es un guerrero valiente y hábil que participa en campañas militares y conoce a la princesa Abriza.',
      },
      {
        name: 'Daul’makán',
        description:
          'Hijo gemelo de Omar y hermano de Nozhatú. Sus aventuras lo llevan lejos de Bagdad y posteriormente participa en la sucesión del reino.',
      },
      {
        name: 'Nozhatú',
        description:
          'Hermana gemela de Daul’makán. Es una joven inteligente y decidida que comparte con su hermano parte de sus aventuras.',
      },
      {
        name: 'Abriza',
        description:
          'Princesa cristiana, hija del rey Hardobios. Es reconocida por su valentía y habilidades de combate. Su encuentro con Scharkán cambia el rumbo de la historia.',
      },
      {
        name: 'Rey Hardobios',
        description:
          'Rey cristiano y padre de Abriza, cuya relación con el reino de Omar forma parte de los conflictos políticos y militares del relato.',
      },
      {
        name: 'Dandán',
        description:
          'Gran visir del rey Omar. Es uno de los consejeros importantes durante los acontecimientos que afectan a la familia real.',
      },
    ],
    summary: [
      'La historia comienza en Bagdad, donde gobierna Omar Al-Nemán, un rey poderoso. Su hijo mayor, Scharkán, es un joven guerrero reconocido por su valentía. Mientras Scharkán se encuentra lejos del reino, nacen Daul’makán y Nozhatú, los hijos gemelos del monarca.',
      'Durante una campaña militar, Scharkán conoce a Abriza, una princesa cristiana que destaca por su inteligencia y destreza en el combate. Entre ambos surge un vínculo que se desarrolla en medio de las diferencias entre sus pueblos y los conflictos que rodean a sus familias.',
      'Los acontecimientos posteriores provocan enfrentamientos, pérdidas y deseos de venganza que afectan profundamente al rey Omar y a sus hijos. Al mismo tiempo, Daul’makán y Nozhatú emprenden un viaje que los conduce por distintos lugares y los enfrenta a situaciones inesperadas.',
      'La muerte del rey Omar cambia el destino de Bagdad y abre una nueva etapa para sus descendientes. Daul’makán regresa al reino y es reconocido como sucesor, mientras se plantea una distribución del poder que también involucra a Scharkán.',
      'A lo largo de sus numerosos episodios, el relato combina aventuras, guerras, relaciones familiares, amor, traición y disputas por el poder. Sus acontecimientos muestran cómo las decisiones de los gobernantes pueden transformar la vida de quienes los rodean.',
    ],
    lessons: [
      'Las decisiones de quienes gobiernan pueden tener consecuencias que afectan a familias enteras y a pueblos completos.',
      'La valentía y la determinación son importantes para enfrentar situaciones difíciles, aunque deben acompañarse de prudencia.',
      'Las rivalidades y los deseos de venganza pueden alimentar conflictos que terminan perjudicando a muchas personas.',
      'La lealtad y la confianza son fundamentales para mantener unidos a quienes enfrentan dificultades.',
    ],
    audio: '/audio/rey-omar-al-neman.mp3',
    illustration: '/ilustraciones/omar-al-neman-portada.jpg',
    illustrationAlt:
      'Portada ilustrada de la historia del rey Omar Al-Nemán y sus hijos.',
    illustrations: [
      {
        src: '/ilustraciones/omar-al-neman-2.jpg',
        alt: 'El rey Omar Al-Nemán lee un libro a sus dos hijos.',
        caption:
          'El rey Omar Al-Nemán comparte la lectura con sus dos hijos.',
      },
      {
        src: '/ilustraciones/omar-al-neman-3.jpg',
        alt: 'Escena de carácter militar con un rey en primer plano y un ejército detrás.',
        caption:
          'Una escena que representa al rey y a su ejército.',
      },
    ],
    sources: [
      {
        label:
          'Wikisource — Las mil y una noches, tomo IV: Historia del rey Omar Al-Nemán',
        url: 'https://es.wikisource.org/wiki/El_libro_de_las_mil_noches_y_una_noche/Tomo_IV',
      },
      {
        label:
          'Wikisource — Historia del rey Omar Al-Nemán y de sus dos hijos',
        url: 'https://es.wikisource.org/wiki/Las_mil_y_una_noches%3A74',
      },
      {
        label:
          'Universidad del Valle — Una mirada transgresora del amor no canónico en algunos cuentos de Las Mil y Una Noches',
        url: 'https://bibliotecadigital.univalle.edu.co/server/api/core/bitstreams/a7f4c50e-f44a-4dcf-8fba-dca2df644707/content',
      },
    ],
    contentNote:
      'Borrador preparado para el 19 de noviembre de 2026. El audio de solo voz queda pendiente de incorporar.',
    shop: '',
    shopLabel: '',
    shopLinks: [],
  },
  {
  slug: 'el-rey-omar-al-neman-y-sus-dos-hijos',
  title: 'El rey Omar al Neman y sus dos hijos Scharkan y Daul Makan',
  originalTitle:
    'Título original en árabe no verificado para la edición consultada.',
  collection: 'Las mil y una noches',
  literaryAuthor:
    'Anónimo — tradición narrativa de Las mil y una noches.',
  written:
    'Fecha exacta desconocida; relato perteneciente a la tradición medieval de la colección.',
  authorId: 'elizabeth',
  publishedAt: '2026-11-14',
  plannedDate: '2026-11-14',
  status: 'published',

  excerpt:
    'La historia de un poderoso rey, sus hijos y una serie de conflictos, viajes y encuentros que ponen a prueba la lealtad, el amor y el destino.',

  characters: [
    {
      name: 'Omar al Neman',
      description:
        'Rey poderoso cuyo linaje da origen a las aventuras principales del relato.',
    },
    {
      name: 'Scharkan',
      description:
        'Príncipe valiente y hábil guerrero que vive importantes aventuras y conflictos.',
    },
    {
      name: 'Daul Makan',
      description:
        'Hijo del rey Omar al Neman que enfrenta desafíos relacionados con la política y el destino de su reino.',
    },
    {
      name: 'Nuzhat al-Zaman',
      description:
        'Hermana de Daul Makan, protagonista de diversos acontecimientos del relato.',
    },
    {
      name: 'Abriza',
      description:
        'Princesa cristiana cuya historia se relaciona estrechamente con Scharkan.',
    },
  ],

  summary: [
    'El rey Omar al Neman gobierna un gran reino y tiene dos hijos destacados: Scharkan y Daul Makan. Ambos crecen rodeados de privilegios, pero pronto deberán enfrentarse a situaciones que pondrán a prueba su carácter.',

    'Scharkan participa en campañas militares y conoce a Abriza, una princesa cristiana de gran inteligencia y nobleza. Entre ambos surge una relación marcada por el respeto y la admiración.',

    'Mientras tanto, Daul Makan y su hermana Nuzhat al-Zaman enfrentan conflictos políticos, viajes y peligros que afectan su futuro. Las intrigas, alianzas y enfrentamientos modifican el destino de varias familias y reinos.',

    'A través de numerosas aventuras, los personajes descubren el valor de la lealtad, la justicia y la perseverancia. El relato muestra cómo las decisiones personales pueden influir en el destino de muchas personas.',
  ],

  lessons: [
    'La lealtad y el honor fortalecen las relaciones entre las personas y ayudan a enfrentar las dificultades.',

    'Las decisiones impulsivas pueden provocar consecuencias inesperadas; por ello es importante reflexionar antes de actuar.',

    'La perseverancia permite superar los obstáculos y afrontar los cambios que trae la vida.',
  ],

  audio: null,

  illustration: '/ilustraciones/omar-al-neman.jpg',
  illustrationAlt:
    'Representación artística del rey Omar al Neman y sus hijos.',

  illustrations: [
    {
      src: '/ilustraciones/omar-al-neman.jpg',
      alt: 'Representación artística del rey Omar al Neman.',
      caption: 'El rey Omar al Neman.',
    },
     {
    src: '/ilustraciones/scharkan.jpg',
    alt: 'El príncipe Scharkan durante sus aventuras.',
    caption: 'Scharkan, hijo de Omar al Neman.',
  },
  {
    src: '/ilustraciones/daul-makan.jpg',
    alt: 'Daul Makan reflexiona sobre el destino de su reino.',
    caption: 'Daul Makan, heredero del reino.',
  },
  ],

  sources: [
    {
      label: 'Ciudad Seva — Las mil y una noches',
      url: 'https://ciudadseva.com/texto/las-mil-y-una-noches/',
    },
    {
      label: 'Project Gutenberg — Arabian Nights',
      url: 'https://www.gutenberg.org/',
    },
  ],

  contentNote:
    'El relato incluye conflictos bélicos, intrigas políticas y enfrentamientos. El resumen evita detalles gráficos.',

  shop:
    'https://www.gandhi.com.mx/las-mil-y-una-noches-9788477207955/p',

  shopLabel: 'Comprar en Librerías Gandhi',

  shopLinks: [],
},
{
  slug: 'historia-de-dulce-amiga',
  title: 'Historia de Dulce-Amiga',
  originalTitle: 'Historia de Nūr al-Dīn Alí y Anīs al-Jalīs',
  spanishName: 'Historia de Dulce-Amiga',
  collection: 'Las mil y una noches',
  collectionDetail:
    'Las mil y una noches, cuyo título en árabe es Alf layla wa-layla.',
  literaryAuthor: 'Anónimo.',
  written: 'Edad Media; fecha exacta de composición desconocida.',
  authorId: 'ismael',
  publishedAt: '2026-11-16',
  plannedDate: '2026-11-16',
  status: 'published',
  excerpt:
    'Dulce-Amiga y Alí-Nur enfrentan la pérdida de la riqueza, la envidia y el abuso de poder sin perder la lealtad ni la esperanza.',
  characters: [
    {
      name: 'Dulce-Amiga (Anīs al-Jalīs)',
      description:
        'Joven de gran belleza, inteligencia y talento para la música y la poesía.',
    },
    {
      name: 'Alí-Nur',
      description:
        'Hijo del visir El-Faldl. Se enamora de Dulce-Amiga, pero su imprudencia y sus gastos excesivos le provocan dificultades.',
    },
    {
      name: 'El-Faldl ben-Khacán',
      description:
        'Visir generoso y respetado, padre de Alí-Nur.',
    },
    {
      name: 'El-Mohín ben-Sauí',
      description:
        'Visir envidioso y ambicioso que intenta perjudicar a la familia de Alí-Nur.',
    },
    {
      name: 'Mohammad ben-Soleimán El-Zeiní',
      description: 'Sultán de Basora.',
    },
    {
      name: 'Harún al-Rashid',
      description:
        'Califa de Bagdad que interviene para resolver los conflictos.',
    },
    {
      name: 'Giafar',
      description:
        'Visir del califa, encargado de ayudar a Alí-Nur.',
    },
    {
      name: 'El jeique Ibrahim',
      description:
        'Guardián de un jardín y un palacio del califa en Bagdad.',
    },
  ],
  summary: [
    'La historia comienza en Basora, donde el sultán Mohammad ben-Soleimán encarga a su visir El-Faldl que encuentre a una joven extraordinaria por su belleza, inteligencia y buenos modales. El visir adquiere a Dulce-Amiga, una joven esclavizada que destaca por sus conocimientos, su habilidad musical y su carácter amable.',
    'Mientras permanece en la casa del visir, Dulce-Amiga conoce a Alí-Nur, el hijo de este. Ambos se enamoran y comienzan una relación que provoca un grave problema, pues ella había sido comprada para el sultán. Finalmente, el padre acepta la unión de los jóvenes.',
    'Durante un tiempo viven felices, pero todo cambia cuando el visir fallece. Alí-Nur hereda una gran fortuna y la desperdicia en fiestas y reuniones con amigos interesados. Cuando pierde sus riquezas, descubre que quienes lo rodeaban por conveniencia lo abandonan.',
    'Ante la pobreza, Dulce-Amiga propone que la venda para obtener dinero, aunque esto implique separarse. Sin embargo, durante la venta surge un conflicto con el malvado visir El-Mohín ben-Sauí. Alí-Nur se enfrenta a él y debe huir junto con Dulce-Amiga.',
    'Los jóvenes llegan a Bagdad, donde encuentran refugio en un jardín perteneciente al califa Harún al-Rashid. Allí, la extraordinaria voz de Dulce-Amiga llama la atención del gobernante, quien escucha su historia y decide ayudarlos. La intervención del califa permite que se haga justicia y que Dulce-Amiga y Alí-Nur reciban protección para comenzar una nueva vida.',
  ],
  lessons: [
    'La riqueza debe administrarse con responsabilidad. Alí-Nur pierde su fortuna por gastar sin medida y confiar en personas que solamente se acercaban a él por interés.',
    'La lealtad se demuestra en los momentos difíciles. Dulce-Amiga permanece junto a Alí-Nur cuando desaparecen el dinero y los privilegios, mientras que sus supuestos amigos lo abandonan.',
    'La justicia debe estar por encima de la envidia y el abuso de poder. Las acciones del visir El-Mohín muestran el daño que puede causar la ambición, mientras que la intervención del califa permite reparar las injusticias.',
  ],
  audio: '/audio/dulce-amiga.mp3',
  illustration: '/ilustraciones/dulce-amiga.JPG',
  illustrationAlt:
    'Dulce-Amiga en una escena del relato. Imagen tomada de Fairytalez.',
  illustrations: [
    {
      src: '/ilustraciones/dulce-amiga.JPG',
      alt: 'Dulce-Amiga en una escena del relato.',
      caption:
        'Dulce-Amiga en una escena del relato. Imagen tomada de Fairytalez.',
    },
  ],
  sources: [
    {
      label: 'Wikisource — Historia de Dulce-Amiga',
      url: 'https://es.wikisource.org/wiki/Historia_de_Dulce-Amiga',
    },
    {
      label: 'Proyecto Gutenberg — Las mil y una noches',
      url: 'https://www.gutenberg.org/ebooks/48903',
    },
    {
      label: 'Crédito de la imagen — Fairytalez',
      url: 'https://fairytalez.com/es/arabian-nights/',
    },
  ],
  contentNote:
    'Publicación realizada el 16 de noviembre de 2026. Audio de solo voz incorporado.',
  shop:
    'https://www.gandhi.com.mx/las-mil-y-una-noches-9786071411716/p',
  shopLabel: 'Comprar Las mil y una noches en Librerías Gandhi',
  shopLinks: [],
},
{
  slug: 'historia-del-joven-cojo-con-el-barbero-de-bagdad',
  title: 'Historia del joven cojo con el barbero de Bagdad',
  originalTitle:
    'Histoire du jeune homme boiteux avec le barbier de Baghdad (título de la versión francesa de J. C. Mardrus).',
  collection: 'Las mil y una noches',
  literaryAuthor: 'Anónimo',
  written: 'Desconocido',
  authorId: 'diego',
  publishedAt: '2026-11-15',
  plannedDate: '2026-11-15',
  status: 'published',
  excerpt:
    'Un joven de Bagdad tiene una cita secreta. Antes de salir, pide un afeitado rápido, pero el barbero que llega a su casa tiene otros planes.',
  characters: [
    {
      name: 'El joven de Bagdad',
      description:
        'Hijo de un mercader. Busca encontrarse con la hija del cadí y se lesiona al intentar escapar.',
    },
    {
      name: 'El barbero',
      description:
        'Retrasa al joven con sus discursos y luego lo sigue.',
    },
    {
      name: 'La hija del cadí',
      description:
        'Acepta recibir al joven con la condición de que se marche antes de que su padre regrese.',
    },
    {
      name: 'La anciana',
      description:
        'Sirve de intermediaria y consigue concertar el encuentro.',
    },
    {
      name: 'El cadí',
      description: 'Juez de la ciudad y padre de la joven.',
    },
  ],
  summary: [
    'Un joven de Bagdad se enamora al ver a una muchacha regando flores en su ventana. Una anciana le confirma que es la hija del cadí y consigue que ella lo reciba un viernes. La joven le pide que se marche antes de que su padre vuelva de la oración.',
    'Antes de salir, el joven manda llamar a un barbero. El hombre se demora consultando un astrolabio y presumiendo de sus conocimientos. Cuando por fin el joven se marcha a la cita, el barbero lo sigue y arma un escándalo al creer que está en peligro.',
    'En medio del alboroto, el joven intenta huir y se rompe una pierna al caer. Después decide marcharse de Bagdad para evitar volver a encontrarse con el barbero.',
  ],
  lessons: [
    'Escuchar también es respetar el tiempo de los demás. El barbero se concentra en demostrar lo que sabe y pasa por alto la petición del joven.',
    'Conviene comprobar qué ocurre antes de intervenir. El barbero cree que hay peligro y, al actuar sin verificarlo, agrava la situación.',
    'La prisa puede llevarnos a tomar decisiones arriesgadas. El joven se precipita al escapar y acaba lesionado.',
  ],
  audio: '/audio/joven-cojo-barbero-de-bagdad-diego-garcia-cruz.mp3',
  illustration:
    '/ilustraciones/el-barbero-del-zoco-enrique-simonet-1897.jpg',
  illustrationAlt:
    'Un barbero afeita a un hombre sentado en un patio del mercado',
  illustrations: [
    {
      src: '/ilustraciones/el-barbero-del-zoco-enrique-simonet-1897.jpg',
      alt: 'Un barbero afeita a un hombre sentado en un patio del mercado',
      caption: 'El barbero del zoco (1897), Enrique Simonet',
    },
    {
      src: '/ilustraciones/barbero2.png',
      alt: 'Un vendedor sostiene una alfombra roja en una calle del mercado',
      caption: 'Imagen tomada de Páginas Árabes',
    },
  ],
  sources: [
    {
      label: 'Leer el cuento completo en español — Biblioteca Virtual Antorcha',
      url: 'https://www.antorcha.net/biblioteca_virtual/literatura/mil/26.html',
    },
    {
      label:
        'El barbero del zoco (1897), Enrique Simonet — Wikimedia Commons',
      url: 'https://commons.wikimedia.org/wiki/File:Enrique_Simonet_-_El_barbero_del_zoco_-_1897.jpg',
    },
    {
      label: 'Imagen tomada de Páginas Árabes',
      url: 'https://paginasarabes.com/2015/08/22/el-joven-cojo-y-el-barbero-de-bagdad/',
    },
  ],
  shop:
    'https://www.gandhi.com.mx/las-mil-y-una-noches-9788446052470/p',
  shopLabel: 'Ficha del libro — Las mil y una noches — Librerías Gandhi',
  shopLinks: [],
},
  {
    slug: 'el-negro-sauab-primer-eunuco-sudanes',
    title: 'El negro Sauab, primer eunuco sudanés',
    originalTitle: 'Historia del negro Sauab, primer eunuco sudanés. Relato perteneciente a Alf layla wa-layla (Las mil y una noches). El nombre del protagonista también aparece escrito como Sáuab, según la edición.',
    spanishName: 'El negro Sauab, primer eunuco sudanés.',
    collection: 'Las mil y una noches',
    collectionDetail: 'Las mil y una noches, recopilación de relatos tradicionales de procedencia árabe, persa e india. Relato intercalado en la Historia de Ghanem Ben-Ayub y de su hermana Fetnah. Aparece durante la noche 38, en el tomo III de la edición de Joseph-Charles Mardrus.',
    genre: 'Narrativo, cuento tradicional, relato de carácter social y dramático. Temas principales: Esclavitud, desigualdad social, infancia, abuso de poder, secretos familiares, pérdida de libertad y destino.',
    literaryAuthor: 'Anónimo.',
    written: 'Fecha exacta desconocida. El cuento pertenece a la tradición literaria de Las mil y una noches, formada y transmitida durante varios siglos.',
    authorId: 'oscar',
    publishedAt: '2026-11-18',
    plannedDate: '2026-11-18',
    status: 'published',
    excerpt: 'La historia de un joven africano que es separado de su tierra natal y llevado como esclavo a Bagdad, donde una amistad de infancia, un acontecimiento inesperado y las decisiones de una familia poderosa transforman su destino para siempre.',
    characters: [
      {
        name: 'Sauab',
        description: 'Protagonista y narrador del cuento. Es un niño africano llevado como esclavo a Bagdad cuando tenía cinco años. Crece en la casa de un guardia de palacio y establece una relación cercana con la hija de su propietario. Después de un acontecimiento que la familia decide ocultar, es castrado y destinado al servicio de la joven. Con el tiempo llega a convertirse en eunuco del palacio.',
      },
      {
        name: 'La hija del guardia',
        description: 'Joven que crece junto a Sauab desde la infancia. Ambos comparten juegos y una convivencia cercana. Su relación con el protagonista desencadena los acontecimientos que transforman la vida de ambos. Posteriormente contrae matrimonio con un barbero.',
      },
      {
        name: 'La madre de la joven',
        description: 'Mujer que desempeña un papel fundamental en el desarrollo de la historia. Al descubrir lo sucedido entre los menores, decide ocultarlo para proteger la reputación familiar. Organiza el matrimonio de su hija y ordena la mutilación de Sauab, convirtiéndose en la principal responsable de su destino.',
      },
      {
        name: 'El guardia de palacio',
        description: 'Propietario de Sauab y padre de la muchacha. Trabaja al servicio del palacio de Bagdad. Aunque no conoce los acontecimientos que ocurren dentro de su hogar, el temor a su posible reacción influye en las decisiones de los demás personajes.',
      },
      {
        name: 'El joven barbero',
        description: 'Hombre que trabaja para la familia y posteriormente se casa con la hija del guardia. Es quien realiza la castración de Sauab por disposición de la madre. Desconoce las circunstancias que motivaron la intervención.',
      },
      {
        name: 'El amigo de Sauab',
        description: 'Hombre en cuya casa el protagonista busca refugio después del encuentro con la muchacha. Su participación es breve, pero representa un espacio de protección durante un momento de temor.',
      },
      {
        name: 'Kafur',
        description: 'Segundo eunuco sudanés que participa en la reunión. Escucha la narración de Sauab y, cuando este termina, comienza a contar su propia historia.',
      },
      {
        name: 'Bakhita',
        description: 'Tercer eunuco sudanés del conjunto de relatos intercalados. Su historia forma parte de la misma secuencia narrativa, aunque no interviene directamente en los acontecimientos de Sauab.',
      },
    ],
    summary: [
      'La historia del negro Sauab comienza cuando un grupo de eunucos sudaneses decide compartir las circunstancias que los llevaron a convertirse en servidores del palacio. Durante una noche de descanso, uno de ellos propone que cada compañero cuente su propia experiencia. Sauab, encargado de llevar una linterna y unos azadones, es el primero en tomar la palabra.',
      'Su relato comienza muchos años atrás, cuando apenas tenía cinco años. A esa edad fue separado de su tierra natal por un mercader de esclavos que lo trasladó hasta Bagdad, una de las ciudades más importantes del mundo árabe. Allí fue vendido a un guardia del palacio, quien lo incorporó al servicio de su hogar.',
      'El guardia tenía una hija de tres años, con quien Sauab comenzó a convivir desde pequeño. Ambos crecieron juntos y desarrollaron una relación de confianza y cercanía. Sauab participaba en los juegos de la niña, cantaba canciones y realizaba bailes que entretenían a quienes vivían en la casa.',
      'A pesar de su condición de esclavo, el joven era apreciado por los integrantes de aquella familia. Su carácter alegre y su habilidad para divertir a los demás hicieron que se acostumbraran a su presencia. Sin embargo, esa aparente tranquilidad ocultaba una diferencia fundamental: mientras la niña pertenecía a una familia con autoridad y recursos, Sauab continuaba siendo una persona sometida a la voluntad de sus propietarios.',
      'Los años transcurrieron y ambos llegaron a una nueva etapa de sus vidas. Sauab tenía doce años y la hija del guardia había cumplido diez. Aunque habían crecido juntos, la relación entre ambos comenzó a ser observada de manera diferente debido a las normas sociales que regulaban la convivencia y el comportamiento dentro de las familias.',
      'Un día, mientras se encontraban solos en un lugar apartado, ocurrió un encuentro íntimo entre los dos menores. El episodio provocó un cambio decisivo en la vida de Sauab. Al comprender que lo sucedido podía ocasionarle graves consecuencias, el muchacho sintió miedo y huyó de la casa para refugiarse con un amigo.',
      'Poco después, la niña regresó a su hogar. Su madre advirtió que algo había ocurrido y reaccionó con desesperación. Temía que el padre descubriera el encuentro y castigara violentamente a Sauab, además de considerar que la reputación familiar podía quedar comprometida.',
      'Ante esa situación, la mujer decidió mantener el acontecimiento en secreto. Su principal preocupación era impedir que su esposo conociera lo sucedido y evitar que el escándalo afectara el futuro de su hija.',
      'Durante aproximadamente dos meses, Sauab permaneció alejado de la familia. Finalmente, la madre consiguió localizarlo y comenzó a ofrecerle regalos para convencerlo de regresar. El muchacho aceptó volver, aunque el episodio nunca volvió a mencionarse abiertamente.',
      'Tiempo después, la mujer organizó el matrimonio de su hija con un joven barbero que trabajaba para la familia. Para facilitar la unión, proporcionó una dote y preparó lo necesario para la ceremonia. El matrimonio representaba una oportunidad para asegurar el futuro social de la muchacha y mantener ocultos los acontecimientos anteriores.',
      'Sin embargo, la madre también tomó una decisión que cambiaría definitivamente la existencia de Sauab. Ordenó que el barbero lo castrara, convirtiéndolo en eunuco. Esta mutilación fue realizada sin que el joven tuviera posibilidad de decidir sobre su propio cuerpo y su futuro.',
      'Después de la intervención, Sauab fue destinado al servicio personal de la muchacha, ahora convertida en esposa del barbero. Su nueva condición le permitía acompañarla en sus desplazamientos, visitas familiares y recorridos por los mercados sin despertar las sospechas que habrían existido anteriormente.',
      'La madre consiguió que todo permaneciera oculto. Ni el esposo de la joven ni los demás familiares y conocidos llegaron a enterarse de los acontecimientos que habían provocado aquella decisión.',
      'Sauab continuó viviendo en la casa de su antigua compañera de infancia y de su marido. Con el paso del tiempo, las circunstancias familiares fueron cambiando. Finalmente, murieron la mujer, su esposo y los padres de ella.',
      'Según el propio relato de Sauab, después de esas muertes los bienes de la familia pasaron a sus manos. Posteriormente llegó a desempeñarse como eunuco del palacio, posición que mantenía cuando contó su historia a sus compañeros.',
      'Al terminar su narración, Sauab explicó que esos acontecimientos habían sido la causa de su mutilación. Su intervención concluyó y otro de los eunucos, llamado Kafur, tomó la palabra para contar su propia experiencia.',
      'El cuento presenta una historia breve, pero marcada por acontecimientos difíciles. A través de la vida de Sauab se muestran las condiciones de desigualdad que podían existir en una sociedad donde la esclavitud era aceptada y donde las personas sometidas a servidumbre tenían un control muy limitado sobre sus propias decisiones.',
      'También permite reflexionar sobre la manera en que el miedo al escándalo, la preocupación por la reputación y el poder de las familias podían provocar decisiones injustas e irreversibles.',
      'Aunque Sauab termina ocupando una posición dentro del palacio y recibiendo bienes, esos acontecimientos no eliminan el sufrimiento ni la pérdida de autonomía que experimentó durante su juventud.',
      'Su historia constituye un ejemplo de cómo Las mil y una noches combina situaciones cotidianas, conflictos humanos y acontecimientos sorprendentes para presentar relatos que, además de entretener, permiten examinar las costumbres y contradicciones de las sociedades representadas.',
    ],
    lessons: [
      'La libertad es fundamental para la dignidad humana. La historia de Sauab muestra las consecuencias de vivir bajo el control de otras personas. Desde pequeño, el protagonista es vendido y obligado a aceptar decisiones que afectan su vida. Su experiencia permite comprender la importancia de respetar la libertad y los derechos de cada individuo. El destino de una persona puede cambiar por decisiones ajenas. Sauab no elige abandonar su tierra natal, convertirse en esclavo ni sufrir una mutilación. Su historia demuestra cómo las circunstancias sociales y las acciones de otros pueden transformar profundamente una vida.',
      'El abuso de poder puede provocar daños irreversibles. La madre de la joven utiliza su autoridad para resolver un problema familiar mediante una decisión que perjudica gravemente a Sauab. El relato demuestra cómo el poder, cuando no tiene límites éticos, puede convertirse en una herramienta de injusticia.',
      'El miedo a las apariencias puede conducir a decisiones equivocadas. La preocupación por conservar la reputación de la familia lleva a ocultar la verdad y a tomar medidas extremas. Esta situación invita a reflexionar sobre las consecuencias de dar mayor importancia a la imagen social que al bienestar de las personas.',
    ],
    audio: null,
    illustration: '/ilustraciones/sauab-portada.png',
    illustrationAlt:
      'Portada verde de Las mil noches y una noche, con cinco figuras en un recuadro dorado.',
    illustrations: [
      {
        src: '/ilustraciones/sauab-1.png',
        alt: 'Una mujer sentada junto a un hombre con turbante en un patio nocturno.',
        caption: 'Escena nocturna en un patio',
      },
      {
        src: '/ilustraciones/sauab-2.png',
        alt: 'Varias personas se reúnen al pie de un gran arco en un recinto ornamentado.',
        caption: 'Interior con arcos monumentales',
      },
      {
        src: '/ilustraciones/sauab-3.png',
        alt: 'Tres hombres con túnicas conversan. Uno está sentado y dos están de pie.',
        caption: 'Tres figuras conversan',
      },
      {
        src: '/ilustraciones/sauab-4.png',
        alt: 'Dos mujeres se sientan entre cojines mientras un hombre se asoma junto a una columna.',
        caption: 'Escena en un salón ornamentado',
      },
    ],
    sources: [
      {
        label: 'Project Gutenberg — El libro de las mil noches y una noche, tomo III',
        url: 'https://www.gutenberg.org/files/48903/old/48903-h/48903-h.htm',
      },
      {
        label: 'Ciudad Seva — Historia de Ghanem Ben-Ayub y de su hermana Fetnah',
        url: 'https://ciudadseva.com/texto/las-mil-y-una-noches-08/',
      },
      {
        label: 'Universidad Nacional Autónoma de México — Las mil y una noches (PDF)',
        url: 'https://portalacademico.cch.unam.mx/materiales/al/cont/tall/tlriid/tlriid4/circuloLectores/docs/las-mil-y-una-noches.pdf',
      },
      {
        label: 'Wikipedia — Las mil y una noches',
        url: 'https://es.wikipedia.org/wiki/Las_mil_y_una_noches',
      },
    ],
    contentNote: 'El relato aborda la esclavitud, el abuso de poder y la mutilación, sin descripciones gráficas.',
    shop: 'https://www.gandhi.com.mx/las-mil-y-una-noches-9788446052470/p',
    shopLabel: 'Ficha del libro — Las mil y una noches — Librerías Gandhi',
    shopLinks: []
  },
  {
    slug: 'el-joven-kanmakan-hijo-de-daul-makan',
    title: 'El joven Kanmakán, hijo de Daul-makán',
    originalTitle: 'Título original en su idioma no verificado.',
    spanishName: "Aventuras del joven Kanmakán, hijo de Daul'Makan",
    collection: 'Las mil y una noches',
    collectionDetail:
      'Las fuentes consultadas sitúan este episodio entre las noches 138 y 145.',
    literaryAuthor:
      'No identificado en las fuentes consultadas; relato de Las mil y una noches.',
    written:
      'Fecha de composición desconocida; las fuentes no la indican. El 23 de septiembre de 2023 corresponde a la publicación de las páginas web, no al año de escritura.',
    authorId: 'diego',
    publishedAt: '2026-11-21',
    plannedDate: '2026-11-21',
    status: 'published',
    excerpt:
      'Apartado de Bagdad por la usurpación del trono, Kanmakán emprende un viaje de aventuras para recuperar sus derechos y reencontrarse con su familia.',
    characters: [
      {
        name: 'Kanmakán',
        description:
          'Hijo de Daul-makán y heredero de Bagdad, obligado a salir de la ciudad mientras un chambelán controla el trono.',
      },
      {
        name: 'Fuerza del Destino',
        description:
          'Prima de Kanmakán e hija de Nozhatú, a quien él ama desde joven.',
      },
      {
        name: 'Sabah',
        description:
          'Beduino que se convierte en compañero y aliado de Kanmakán durante sus viajes.',
      },
      {
        name: 'El gran visir Dandán',
        description:
          'Fiel servidor de la familia real que organiza la resistencia contra el usurpador y busca a Kanmakán.',
      },
      {
        name: 'Nozhatú',
        description:
          'Tía de Kanmakán y madre de Fuerza del Destino, separada de su familia por los conflictos del relato.',
      },
      {
        name: 'Rumzán',
        description:
          'Rey de Kaissaria cuyo parentesco con Kanmakán se descubre durante la campaña contra sus enemigos.',
      },
      {
        name: 'El gran chambelán',
        description:
          'Tutor de Kanmakán que se apodera del gobierno y lo aparta de sus derechos.',
      },
    ],
    summary: [
      'Kanmakán, hijo del difunto rey Daul-makán, vive apartado del poder por el gran chambelán, que se ha hecho con el gobierno de Bagdad. También le prohíben acercarse a su prima Fuerza del Destino. Ante las amenazas y el encierro, Kanmakán abandona la ciudad para buscar fortuna y aliados.',
      'En el camino conoce a Sabah, un beduino con quien comparte sus esperanzas y emprende una vida de viajes y combates. Kanmakán socorre a un jinete herido, recibe su caballo Katul y continúa reuniendo compañeros y recursos. Mientras tanto, el gran visir Dandán organiza la resistencia, derrota al usurpador y manda buscar al heredero.',
      'Cuando vuelve a Bagdad, Kanmakán se reúne con su madre y con Fuerza del Destino, con quien después se casa. En una campaña posterior descubre que Rumzán, rey de Kaissaria, es su tío; ambos acuerdan gobernar juntos y unen fuerzas frente a los enemigos de su familia.',
      'La continuación resuelve antiguas disputas y revela otros vínculos entre los personajes. Tras derrotar a sus adversarios, Kanmakán y sus aliados regresan a Bagdad, donde se reúnen familiares y viejos conocidos.',
    ],
    lessons: [
      'La lealtad se demuestra con acciones: Sabah acompaña a Kanmakán y Dandán persevera en apoyar al heredero.',
      'La compasión puede crear vínculos duraderos; Kanmakán auxilia al jinete herido sin exigir una recompensa.',
      'El abuso del poder y las disputas por el trono dañan a las familias y extienden los conflictos.',
    ],
    audio: '/audio/kanmakan-diego-garcia-cruz.mp3',
    illustration: '/ilustraciones/kanmakan-anton-pieck.jpg',
    illustrationAlt:
      'Un jinete sobre un camello entre personas y puestos de una ciudad.',
    illustrations: [
      {
        src: '/ilustraciones/kanmakan-anton-pieck.jpg',
        alt: 'Un jinete sobre un camello entre personas y puestos de una ciudad.',
        caption:
          'Un jinete sobre un camello entre personas y puestos de una ciudad. Anton Pieck. El regreso de Kanmakán a Bagdad, ilustración para Las mil y una noches. Fuente: Christie’s.',
      },
      {
        src: '/ilustraciones/kanmakan-albert-letchford.jpg',
        alt: 'Ilustración en blanco y negro de varias personas que descubren un cuerpo tendido en el suelo.',
        caption:
          'Ilustración en blanco y negro de varias personas que descubren un cuerpo tendido en el suelo. Albert Letchford. Ilustración de El rey Omar y sus hijos, ciclo narrativo al que pertenece la historia de Kanmakán. Imagen de contexto; no representa una escena identificada de este episodio. Fuente: 1001 Recaps.',
      },
    ],
    sources: [
      {
        label: 'Leer la primera parte en español — 1001 noches, cada historia',
        url: 'https://h.1001noches.co/2020/10/11-p1-aventuras-del-joven-kanmakan-hijo.html',
      },
      {
        label: 'Leer la segunda parte en español — 1001 noches, cada historia',
        url: 'https://h.1001noches.co/2020/10/11-p2-aventuras-del-joven-kanmakan-hijo.html',
      },
      {
        label: 'Anton Pieck — El regreso de Kanmakán a Bagdad, Christie’s',
        url: 'https://www.christies.com/en/lot/lot-5566106',
      },
      {
        label: 'Albert Letchford — El rey Omar y sus hijos, 1001 Recaps',
        url: 'https://1001recaps.org/arabian_nights_-_letchford_-_13/',
      },
    ],
    contentNote:
      'El relato incluye guerras, secuestros, esclavitud y castigos violentos; este resumen omite sus detalles gráficos. No se ha verificado que esta edición incluya el episodio de Kanmakán.',
    shop: 'https://www.gandhi.com.mx/las-mil-y-una-noches-9788446052470/p',
    shopLabel: 'Comprar Las mil y una noches en Gandhi',
    shopLinks: [],
  },
  {
    slug: 'historias-encantadoras-de-los-animales-y-de-las-aves',
    title: 'Historias encantadoras de los animales y de las aves',
    originalTitle: 'Kitāb Alf Layla wa-Layla (كتاب ألف ليلة وليلة)',
    spanishName: 'Historias encantadoras de los animales y de las aves',
    collection: 'Las mil y una noches',
    collectionDetail:
      'Las mil y una noches, cuyo título en árabe es Kitāb Alf Layla wa-Layla.',
    literaryAuthor: 'Anónimo.',
    written: 'Fecha exacta desconocida.',
    authorId: 'ismael',
    publishedAt: '2026-11-22',
    plannedDate: '2026-11-22',
    status: 'published',
    excerpt:
      'Diversas fábulas reunidas en Las mil y una noches muestran a animales que razonan, se enfrentan y representan virtudes y defectos humanos.',
    characters: [
      {
        name: 'La oca',
        description:
          'Ave que describe a Ibn-Adán como un ser astuto y temible.',
      },
      {
        name: 'El pavo real y la pava real',
        description:
          'Pareja de aves que recibe a la oca y le ofrece protección.',
      },
      {
        name: 'El león',
        description:
          'Animal fuerte que aprende que la fuerza física no siempre supera a la inteligencia.',
      },
      {
        name: 'El lobo',
        description:
          'Personaje autoritario y cruel que abusa de su poder.',
      },
      {
        name: 'El zorro',
        description:
          'Animal astuto que usa su ingenio para enfrentarse al lobo y aparece en otras fábulas.',
      },
      {
        name: 'La tortuga y el martín pescador',
        description:
          'Protagonistas de una historia sobre la confianza y las apariencias.',
      },
      {
        name: 'El ratón, la comadreja, el cuervo y el gato de algalia',
        description:
          'Animales protagonistas de relatos sobre convivencia, prudencia y amistad.',
      },
      {
        name: 'Ibn-Adán',
        description:
          'Nombre utilizado para referirse al ser humano, presentado como una criatura especialmente astuta.',
      },
    ],
    summary: [
      'Historias encantadoras de los animales y de las aves reúne diversas fábulas en las que los animales hablan, razonan y enfrentan situaciones que reflejan las virtudes y los defectos de las personas.',
      'La primera historia presenta a un pavo real y una pava real que viven tranquilamente cerca del mar. Durante una visita a una isla encuentran a una oca aterrorizada por el peligro que representa Ibn-Adán, es decir, el ser humano. La oca cuenta sus encuentros con otros animales y con un joven león que pretende enfrentarse a ese enemigo.',
      'Después aparecen otros relatos, como el de la tortuga y el martín pescador, que aborda los riesgos de confiar sin precaución, y el del lobo y el zorro, donde un lobo cruel maltrata constantemente a su compañero hasta que este encuentra una manera de vengarse mediante su ingenio.',
      'La colección también incluye las historias del ratón y la comadreja, del cuervo y el gato de algalia, y del cuervo y el zorro. En ellas se presentan conflictos relacionados con la confianza, la amistad, el engaño, la supervivencia y el uso de la inteligencia.',
      'A lo largo de estas narraciones, los animales representan distintos comportamientos humanos: la arrogancia, la generosidad, el egoísmo, la prudencia y la lealtad.',
    ],
    lessons: [
      'La inteligencia y la prudencia pueden superar la fuerza. Los animales descubren que ser poderoso no garantiza el éxito cuando se actúa sin pensar.',
      'No debemos confiar ciegamente en las apariencias ni en las palabras amables. Algunas criaturas utilizan el engaño para aprovecharse de otras, por lo que conviene analizar las intenciones de quienes nos rodean.',
      'La amistad debe basarse en el respeto y la lealtad. Las historias muestran las consecuencias de la crueldad, el abuso de poder y la traición, pero también el valor de ayudar a los demás.',
    ],
    audio: '/audio/animales-y-de-las-aves.mp3',
    illustration: '/ilustraciones/animals.jpg',
    illustrationAlt:
      'Ilustración inspirada en los animales y las aves del relato.',
    illustrations: [
      {
        src: '/ilustraciones/animals.jpg',
        alt: 'Animales y aves reunidos en una escena ilustrada.',
        caption:
          'Historias encantadoras de los animales y de las aves. Crédito: 1001 Recaps.',
      },
    ],
    sources: [
      {
        label: 'Proyecto Gutenberg — Tomo VI',
        url: 'https://www.gutenberg.org/ebooks/74041',
      },
      {
        label:
          'Wikisource — Inicio del relato, noche 146',
        url: 'https://es.wikisource.org/wiki/Las_mil_y_una_noches:177',
      },
      {
        label: 'Crédito de la ilustración — 1001 Recaps',
        url: 'https://1001recaps.org/wp-content/uploads/2020/04/animals-featured-1.jpg',
      },
    ],
    contentNote:
      'Publicación realizada el 22 de noviembre de 2026. El audio de solo voz queda pendiente de incorporar.',
    shop:
      'https://www.gandhi.com.mx/las-mil-y-una-noches-9788446052470/p',
    shopLabel: 'Comprar Las mil y una noches en Gandhi',
    shopLinks: [],
  },
    {
      slug: 'historia-de-ghanem-ben-ayub-y-de-su-hermana-fetnah',
      title: 'Historia de Ghanem Ben-Ayub y de su hermana Fetnah',
      originalTitle:
        'Título árabe individual no identificado en las fuentes proporcionadas.',
      spanishName:
        'Historia de Ghanem Ben-Ayub y de su hermana Fetnah',
      collection: 'Las mil y una noches',
      collectionDetail:
        'Las mil y una noches, cuyo título en árabe es Alf layla wa-layla.',
      literaryAuthor: 'Anónimo.',
      written: 'Fecha exacta desconocida.',
      authorId: 'oliver',
      publishedAt: '2026-11-17',
      plannedDate: '2026-11-17',
      status: 'published',
      excerpt:
        'Ghanem salva a una joven abandonada en Bagdad y enfrenta los celos y las decisiones precipitadas del califa, hasta que la verdad permite la reparación y la reconciliación.',
      characters: [
        {
          name: 'Ghanem Ben-Ayub',
          description:
            'Joven comerciante que viaja de Damasco a Bagdad y rescata a Kuat Al-Kulub.',
        },
        {
          name: 'Kuat Al-Kulub',
          description:
            'Joven favorita del califa, abandonada y rescatada por Ghanem.',
        },
        {
          name: 'Harún al-Rashid',
          description:
            'Califa de Bagdad que actúa por celos, descubre la verdad y repara la injusticia.',
        },
        {
          name: 'Sett Zobeida',
          description:
            'Ordena abandonar a Kuat Al-Kulub por sentir celos de ella.',
        },
        {
          name: 'Fetnah',
          description:
            'Hermana de Ghanem, expulsada de Damasco junto con su familia.',
        },
        {
          name: 'La madre de Ghanem',
          description:
            'Acompaña a Ghanem y a Fetnah tras la pérdida de su fortuna y su expulsión.',
        },
      ],
      summary: [
        'Ghanem Ben-Ayub es un joven comerciante que, después de la muerte de su padre, viaja de Damasco a Bagdad para vender las mercancías heredadas. Sus negocios prosperan y consigue una importante fortuna.',
        'Una noche, al encontrar cerradas las puertas de la ciudad, Ghanem se refugia cerca de un cementerio y observa a tres hombres que entierran un gran cajón. Al marcharse, descubre que contiene a una joven todavía viva: Kuat Al-Kulub.',
        'La joven es una favorita del califa Harún al-Rashid. Había sido drogada y abandonada por orden de Sett Zobeida. Ghanem la cuida y ambos se enamoran, pero él respeta su relación con el califa.',
        'Cuando el califa descubre a Kuat Al-Kulub en casa de Ghanem, interpreta mal la situación y ordena perseguir al joven, confiscar sus bienes y castigar a su familia. Ghanem huye, cae en la pobreza y debe enfrentar la enfermedad.',
        'Kuat Al-Kulub explica la verdad al califa, quien reconoce su injusticia y ordena buscar a Ghanem. Finalmente, el joven se reúne con su madre, su hermana y su amada; Ghanem se casa con Kuat Al-Kulub y Fetnah contrae matrimonio con el califa.',
      ],
      lessons: [
        'No debemos juzgar sin conocer la verdad. El califa actúa impulsado por los celos y provoca sufrimiento a personas inocentes.',
        'La honestidad y el respeto tienen un gran valor. Ghanem protege a Kuat Al-Kulub sin aprovecharse de su vulnerabilidad, incluso cuando está enamorado de ella.',
        'Reconocer los errores es necesario para reparar el daño. Cuando descubre la verdad, el califa acepta que actuó injustamente y busca compensar a los afectados.',
      ],
      audio: null,
      illustration: '/ilustraciones/Ghanem.jpg',
      illustrationAlt:
        'Ilustración de Ghanem Ben-Ayub y su hermana Fetnah.',
      illustrations: [
        {
          src: '/ilustraciones/Ghanem.jpg',
          alt: 'Escena relacionada con Ghanem Ben-Ayub y Fetnah.',
          caption:
            'Ilustración de Ghanem Ben-Ayub y su hermana Fetnah.',
        },
      ],
      sources: [
        {
          label:
            'Wikisource — Historia de Ghanem Ben-Ayub y de su hermana Fetnah',
          url: 'https://es.wikisource.org/wiki/Historia_de_Ghanem_Ben-Ayub_y_de_su_hermana_Fetnah',
        },
        {
          label:
            'Ciudad Seva — Las mil y una noches',
          url: 'https://ciudadseva.com/texto/las-mil-y-una-noches-08/',
        },
        {
          label: 'Crédito de la ilustración',
          url: 'https://www.antorcha.net/biblioteca_virtual/literatura/mil/34.jpg',
        },
      ],
      contentNote:
        'Publicación preparada para el 17 de noviembre de 2026. El audio de solo voz está pendiente de incorporar.',
      shop:
        'https://www.gandhi.com.mx/las-mil-y-una-noches-9786071411716/p',
      shopLabel: 'Comprar Las mil y una noches en Librerías Gandhi',
      shopLinks: [],
    },
    {
      slug: 'historia-de-ali-ben-bekar-y-la-bella-schamsennahar',
      title: 'Historia de Alí Ben-Bekar y la bella Schamsennahar',
      originalTitle:
        'Título árabe individual no identificado en las fuentes proporcionadas.',
      spanishName:
        'Historia de Alí Ben-Bekar y la bella Schamsennahar',
      collection: 'Las mil y una noches',
      collectionDetail:
        'Las mil y una noches, cuyo título en árabe es Alf layla wa-layla.',
      literaryAuthor: 'Anónimo.',
      written: 'Fecha exacta desconocida.',
      authorId: 'oliver',
      publishedAt: '2026-11-23',
      plannedDate: '2026-11-23',
      status: 'published',
      excerpt:
        'Alí Ben-Bekar y Schamsennahar viven un amor secreto marcado por encuentros, peligros y pérdidas dentro de la corte de Harún al-Rashid.',
      characters: [
        {
          name: 'Alí Ben-Bekar',
          description:
            'Joven príncipe de origen persa que se enamora de Schamsennahar.',
        },
        {
          name: 'Schamsennahar',
          description:
            'Bella mujer perteneciente al círculo íntimo del califa Harún al-Rashid.',
        },
        {
          name: 'Abalhassan Ben-Taher',
          description:
            'Comerciante amigo de Alí que intenta protegerlo y ayudarlo.',
        },
        {
          name: 'Amín',
          description:
            'Joyero que ayuda a organizar encuentros y a planear la huida de Alí.',
        },
        {
          name: 'Harún al-Rashid',
          description:
            'Califa de Bagdad relacionado con el entorno en el que vive Schamsennahar.',
        },
      ],
      summary: [
        'En Bagdad vive Alí Ben-Bekar, un joven príncipe de origen persa que visita con frecuencia la tienda de su amigo, el comerciante Abalhassan Ben-Taher.',
        'Alí conoce a Schamsennahar, una hermosa mujer del círculo íntimo del califa Harún al-Rashid. Ambos se sienten atraídos desde el primer encuentro y mantienen una relación peligrosa por su posición social.',
        'Schamsennahar invita a Alí y a Abalhassan a su palacio. Durante una reunión acompañada de música y poesía, los jóvenes descubren su amor. Desde entonces intentan mantenerse en contacto mediante mensajes y encuentros secretos.',
        'Abalhassan se marcha preocupado por las consecuencias, mientras Amín ocupa su lugar y ayuda a organizar nuevos encuentros. Los protagonistas enfrentan robos, sospechas y el temor constante de ser descubiertos.',
        'Cuando el secreto sale a la luz, Alí intenta huir con ayuda de Amín. Ambos son asaltados por unos bandidos y se refugian en un oasis, donde Alí muere debilitado por sus sufrimientos. Schamsennahar también fallece en el palacio del califa.',
        'Sus amigos consiguen que Alí sea enterrado junto a su amada. El relato termina con una reflexión sobre el amor, la pérdida y el sufrimiento provocado por una relación que no podían vivir libremente.',
      ],
      lessons: [
        'El amor no elimina las dificultades de la realidad. Los sentimientos de Alí y Schamsennahar son intensos, pero las circunstancias sociales y políticas impiden que puedan estar juntos sin peligro.',
        'La amistad verdadera se demuestra mediante las acciones. Abalhassan, Amín y la confidente ayudan a los protagonistas en momentos difíciles, aunque esa ayuda también implica riesgos.',
        'Las emociones necesitan acompañarse de prudencia. La historia muestra cómo el sufrimiento, el miedo y las decisiones desesperadas pueden tener consecuencias irreversibles.',
      ],
      audio: null,
      illustration: '/ilustraciones/Ali.JPG',
      illustrationAlt:
        'Ilustración de Alí Ben-Bekar y Schamsennahar.',
      illustrations: [
        {
          src: '/ilustraciones/Ali.JPG',
          alt: 'Escena relacionada con Alí Ben-Bekar y Schamsennahar.',
          caption:
            'Ilustración de Alí Ben-Bekar y la bella Schamsennahar.',
        },
      ],
      sources: [
        {
          label:
            'Wikisource — Noche 168, episodio final de Alí Ben-Bekar',
          url: 'https://es.wikisource.org/wiki/Las_mil_y_una_noches:183',
        },
        {
          label:
            'Wikisource — El libro de las mil noches y una noche, Tomo V',
          url: 'https://es.wikisource.org/wiki/El_libro_de_las_mil_noches_y_una_noche/Tomo_V',
        },
      ],
      contentNote:
        'Publicación preparada para el 23 de noviembre de 2026. El audio de solo voz está pendiente de incorporar.',
      shop:
        'https://www.gandhi.com.mx/las-mil-y-una-noches-9786071411716/p',
      shopLabel: 'Comprar Las mil y una noches en Librerías Gandhi',
      shopLinks: [],
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
