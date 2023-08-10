export interface Data {
  id: number
  img: string
  title: string
  items?: string[]
  description?: string
}

interface DataQuestions {
  questionNum: string
  question: string
  answer: string
}

interface Testimonials {
  id: number
  image: string
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
    img: '/img/ebooks_6.jpg',
    title: 'entrenamiento principiantes',
    description:
      'Información simple y de calidad, para que puedas sacarle el mejor partido a tus entrenamientos y saber a ciencia cierta si estás haciendo las cosas bien para llegar a tu meta.'
  }
]

export const questionsData: Array<DataQuestions> = [
  {
    questionNum: '1.',
    question: '¿CUANTO TIEMPO TARDA EN LLEGARME LA PLANIFICACIÓN?',
    answer:
      'Una vez que se reciba el pago y la planilla completada, se le mandará la rutina entre el sabado y domingo, para comenzar con la rutina el lunes con las dudas ya resueltas.'
  },
  {
    questionNum: '2.',
    question: '¿CADA CUANTO SE CAMBIA LA RUTINA Y/O DIETA?',
    answer:
      'Depende exclusivamente de vos, se te haran chequeos mensuales/semanales/diarios (depende del pack que elijas) para ver como estas respondiendo a la rutina, si no estas respondiendo bien se te RETOCARA la rutina o dieta, en caso de no necesitar retocarla, no hará falta gastar cartas bajo la manga y seguirás con la misma rutina hasta que el estimulo te quede corto.'
  },
  {
    questionNum: '3.',
    question: '¿CÓMO ES EL SEGUIMIENTO?',
    answer:
      'Dependiendo del pack que elijas, el PACK premium es un seguimiento diario por wpp, el pack platino es un seguimiento semanal por vía E-MAIL, y el pack básico es un seguimiento diario mensual por vía E-MAIL.'
  },
  {
    questionNum: '4.',
    question: '¿CUANDO EMPIEZA A CORRER EL PAGO?',
    answer: `Nosotros tomamos a los clientes desde el martes hasta el domingo de la anterior semana a comenzar con la rutina, y el pago empieza a correr el día LUNES que es cuando comienza con el programa. 
      
    Es decir, si abonas el día miercoles 26/08, el pago comenzara a correr el lunes 31/08 que es cuando comenzaras con el programa.`
  },
  {
    questionNum: '5.',
    question: '¿EL PRECIO ESTA EN PESOS ARGENTINOS?',
    answer:
      'Si! a los extranjero se le mandara un LINK de paypal o por western union.'
  },
  {
    questionNum: '6.',
    question: '¿SE PUEDE REMBOLSAR?',
    answer:
      'Se realizaran devoluciones ÚNICAMENTE en las primeras 72hs posteriores al pago, una vez pasado el tiempo, no habrá devoluciones.'
  },
  {
    questionNum: '7.',
    question: '¿COMO ME CONTACTO PARA COMENZAR?',
    answer:
      'Puedes enviarnos un mensáje desde el formulario, ingresando a nuestras redes sociales o enviarnos un email.'
  },
  {
    questionNum: '8.',
    question: '¿AL MOMENTO DE RENOVAR EL PLAN, CUANDO TENGO QUE PAGAR?',
    answer: `Una vez acabado el primer mesociclo y el cliente decide renovar la asesoría, deberá abonar el mismo en la semana que recibe el plan dando un plazo máximo de otra semana más, es decir, 2 semanas de tiempo tiene hasta pagar el mesociclo enviado. 
      
    Si no se recibe el pago a partir de la segunda semana, se le cobrará un 30% de recargo.`
  },
  {
    questionNum: '9.',
    question: '¿CUANTO DURA EL ASESORAMIENTO?',
    answer: `Los planes son de 4 semanas (un mesociclo), salvo que abones el PLAN TRIMESTRAL donde el plan dura 12 semanas (3 mesociclos, 4 semanas cada uno) 
      
      Cada 4 semanas se debería renovar el plan.`
  }
]

export const testimonialsData: Array<Testimonials> = [
  {
    id: 1,
    image: '/img/testimonial_01.jpg'
  },
  {
    id: 2,
    image: '/img/testimonial_02.jpg'
  },
  {
    id: 3,
    image: '/img/testimonial_03.avif'
  },
  {
    id: 4,
    image: '/img/testimonial_04.avif'
  },
  {
    id: 5,
    image: '/img/testimonial_05.avif'
  },
  {
    id: 6,
    image: '/img/testimonial_6.jpg'
  },
  {
    id: 5,
    image: '/img/testimonial_07.jpg'
  },
  {
    id: 6,
    image: '/img/testimonial_08.jpg'
  }
]
