import styles from '@/styles/Testimonials.module.css'
import Layout from '@/components/Layout/Layout'
import Image from 'next/image'
import { testimonialsData } from '@/utils/dataMapping'
import Link from 'next/link'

const Testimonials: React.FC = () => {
  return (
    <Layout>
      <section className={styles.container}>
        <h2 className={styles.title}>Testimonios de Clientes</h2>
        <p className={styles.paragraph}>
          Estos son algunos de los cambios físicos que hemos logrado junto con
          nuestros clientes. Con nuestro equipo vas a aprender a entrenar para
          sacar la mejor versión de vos y que puedas alcanzar tus metas. El
          cambio empieza ahora con Sharpness.
        </p>
        <div className={styles.testimonials}>
          {testimonialsData.map((item) => (
            <Image
              key={item.id}
              src={item.image}
              alt={`Testimonio ${item.id}`}
              width={300}
              height={350}
            />
          ))}
        </div>
      </section>
      <Link href="http://localhost:3000/#contact" className={styles.btn}>
        Comenzar
      </Link>
    </Layout>
  )
}

export default Testimonials
