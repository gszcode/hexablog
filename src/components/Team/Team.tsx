import styles from '@/styles/Team.module.css'
import Link from 'next/link'
import { TitleUnderline } from '../icons/TitleUnderline'

const Team: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.team}>
        <TitleUnderline />
        <h2 className={styles.title}>ejercicio eficiente hecho para vos</h2>

        <div className={styles.text}>
          <p>
            Contamos con un equipo de profesionales con amplia experiencia, para
            asesorarte en tu camino y que puedas obtener el mejor resultado de
            forma garantizada.
          </p>
          <Link href="#" className={styles.btn}>
            Comenzar
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Team
