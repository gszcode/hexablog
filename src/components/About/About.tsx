import styles from '@/styles/About.module.css'

const About: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.about}>
        <h2 className={styles.title}>Nosotros</h2>
        <span>¿Qúe es Sharpness?</span>
        <p>
          En Sharpness, creemos que todos tenemos el poder de alcanzar nuestro
          máximo potencial físico y mental. Somos más que una marca de
          fitness;&nbsp;
          <span>somos un estilo de vida</span> que te impulsa a superar tus
          límites y alcanzar una agudeza y claridad inigualables en todos los
          aspectos de tu vida. <br />
          <br />
          Nuestro enfoque va más allá de simples rutinas de ejercicios y planes
          de alimentación. En Sharpness, hemos creado una plataforma integral y
          vanguardista que fusiona la ciencia del acondicionamiento físico con
          la pasión por el bienestar, ofreciéndote una&nbsp;
          <span>
            experiencia única que se adapta a tus objetivos y necesidades
            individuales.
          </span>
          <br />
          <br />
          Ya sea que seas un atleta consumado o un principiante en el mundo del
          fitness, Sharpness es el lugar donde encontrarás la inspiración y los
          recursos para llevar tu rendimiento al siguiente nivel. Descubre
          cómo&nbsp;
          <span>
            la dedicación, el enfoque y la pasión por el bienestar pueden
            transformar tu vida por completo.
          </span>
          <br />
          <br />
          Únete a la revolución del fitness con Sharpness y comienza tu viaje
          hacia la claridad, la fuerza y la confianza inquebrantable. Juntos,
          alcanzaremos nuevos horizontes y nos convertiremos en la mejor versión
          de nosotros mismos.
          <br />
          <br />
          <i className={styles.welcome}>
            ¡Bienvenido a Sharpness, donde la agudeza se convierte en una forma
            de vida!
          </i>
        </p>
      </div>
    </section>
  )
}

export default About
