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