import styles from '@/styles/Ebooks.module.css'
import { ebooksData } from '@/utils/dataMapping'
import Image from 'next/image'
import Link from 'next/link'

const Ebooks: React.FC = () => {
  return (
    <section className={styles.container} id="ebooks">
      <div className={styles.main}>
        <h2 className={styles.title}>EBOOKS SHARPNESS</h2>
        <div className={styles.articles}>
          {ebooksData.map((ebook) => (
            <article key={ebook.id} className={styles.article}>
              <Image
                src={ebook.img}
                alt={'Image' + ebook.title}
                width={300}
                height={200}
                className={styles.ebook_img}
              />

              <h3 className={styles.ebook_title}>{ebook.title}</h3>
              <p className={styles.ebook_paragraph}>{ebook.description}</p>

              {/* Modal */}
              <div className={styles.modal}>
                <p>
                  Ponte en Contacto <br /> para adquirir el plan.
                </p>
                <Link href={`/ebooks/${ebook.title.split(' ').join('-')}`}>
                  Ver más
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ebooks
