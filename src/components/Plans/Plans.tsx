import styles from '@/styles/Plans.module.css'
import { adviceData } from '@/utils/dataMapping'
import Image from 'next/image'
import Link from 'next/link'

const Plants: React.FC = () => {
  return (
    <section className={styles.container} id="plans">
      <div className={styles.main}>
        <h2 className={styles.title}>PLANES DE ASESORAMIENTO PERSONALIZADOS</h2>
        <div className={styles.articles}>
          {adviceData.map((plan) => (
            <>
              <article key={plan.id} className={styles.article}>
                <Image
                  src={plan.img}
                  alt={'Image' + plan.title}
                  width={300}
                  height={200}
                  className={styles.plan_img}
                />
                <h3 className={styles.plan_title}>{plan.title}</h3>
                <ul className={styles.plan_items}>
                  {plan.items?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href="#contact" className={styles.plan_buy}>
                  Adquirir ahora
                </Link>
              </article>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plants
