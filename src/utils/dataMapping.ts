interface Data {
  id: number
  img: string
  title: string
  items?: string[]
  description?: string
}

export const adviceData: Array<Data> = [
  {
    id: 1,
    img: '/img/plans_01.jpg',
    title: 'Asesoramiento PLATINO',
    items: [
      'Rutina y planificación individualizada',
      'Dieta individualizada',
      'Recetario',
      'Material exclusivo',
      'Resolución de dudas en 24hs',
      'Constante comunicacion vía Mail',
      'Revisiones semanales y ajustes sin límite'
    ]
  },
  {
    id: 2,
    img: '/img/plans_02.jpg',
    title: 'Asesoramiento PREMIUM',
    items: [
      'Rutina y planificación individualizada',
      'Dieta individualizada',
      'Recetario GOLD',
      'Carpeta de ejercicios GOLD',
      'Material exclusivo',
      'Resolución de dudas en 24hs con nuestros especialistas',
      'Revisiones semanales y ajustes sin límite'
    ]
  },
  {
    id: 3,
    img: '/img/plans_03.jpg',
    title: 'Asesoramiento PREMIUM Trimestral',
    items: [
      'Rutina y planificación individualizada',
      'Plan de dieta individualizada',
      'Material exclusivo (Videos explicativos de conceptos, excel y guía en PDF)',
      'Resolución de dudas en 24hs con nuestros especialistas',
      'Revisiones semanales y ajustes sin límite',
      'Constante comunicacion vía Mail o WhatsApp'
    ]
  }
]

export const ebooksData: Array<Data> = [
  {
    id: 1,
    img: '/img/ebooks_01.jpg',
    title: 'powerbuilding',
    description:
      'Plan de entrenamiento completo y efectivo con el objetivo de que consiga sus objetivos de la mejor forma en 12 semanas.'
  },
  {
    id: 2,
    img: '/img/ebooks_02.jpg',
    title: 'los 3 básicos',
    description:
      'Este ebook está enfocado a brindar la información básica y aplicable para conseguir una correcta técnica en la realización de los 3 ejercicios básicos de musculación.'
  },
  {
    id: 3,
    img: '/img/ebooks_03.jpg',
    title: 'crea tu propia rutina',
    description:
      'Crear una rutina parece algo imposible, por eso lo dejamos en manos de los monitores del gym, los cuales generalmente dan un plan que no se adapta a nosotros. Un plan eficiente requiere de individualización.'
  },
  {
    id: 4,
    img: '/img/ebooks_04.jpg',
    title: 'bases del entrenamiento',
    description:
      'Mucho se habla del entrenamiento cardiovascular y sus beneficios, pero... ¿Y si te dijera que el entrenamiento de fuerza es inclusive mejor que el cardiovascular?. ¿Me creerías?'
  },
  {
    id: 5,
    img: '/img/ebooks_05.jpg',
    title: 'guía: pérdida de grasa',
    description:
      'Perder grasa es el objetivo que tienen el 60% de las personas que concurren a un gimnasio, de las cuales solo un 20% logra su objetivo y el otro 40% no lo logra por abandonar antes de tiempo.'
  },
  {
    id: 6,
    img: '/img/ebooks_06.jpg',
    title: 'entrenamiento principiantes',
    description:
      'Información simple y de calidad, para que puedas sacarle el mejor partido a tus entrenamientos y saber a ciencia cierta si estás haciendo las cosas bien para llegar a tu meta.'
  }
]
