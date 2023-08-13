import styles from '@/styles/EbookLayout.module.css'
import Image from 'next/image'
import { Whatsapp } from '@/components/icons/Whatsapp'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  img: string
  title: string
  subtitle: string
  price: string
  children: ReactNode
}

const EbookLayout: React.FC<Props> = ({
  children,
  img,
  title,
  subtitle,
  price
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.container_img}>
        <Image src={img} alt={`Imagen ${title}`} width={350} height={600} />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div>
        <div className={styles.container_text}>
          <span className={styles.brand}>sharpness</span>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <p className={styles.price}>{price}</p>
        </div>

        {children}

        <div className={styles.container_social}>
          <Link
            href="https://wa.link/077thk"
            className={styles.btn}
            target="_blank"
          >
            Adquirir ahora
            <Whatsapp className={styles.icon} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EbookLayout
