import styles from '@/styles/MainSection.module.css'
import Link from 'next/link'

const MainSection: React.FC = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.main}>
        <p className={styles.ad}>
          <span>100%</span> Las guías más eficientes para tu meta
        </p>
        <h1 className={styles.title}>Sharpness Fitness</h1>
        <p className={styles.description}>
          En Sharpness, nuestra misión es proporcionar una plataforma
          interactiva y de fácil acceso donde puedan encontrar recursos para
          alcanzar sus objetivos de acondicionamiento físico y bienestar
          personal.
        </p>
        <div className={styles.info}>
          <Link href="#contact" className={styles.info_contact}>
            Contacto
          </Link>
          <Link href="/testimonials" className={styles.info_guides}>
            Testimonios
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MainSection
