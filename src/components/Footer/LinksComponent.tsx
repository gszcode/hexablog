import styles from '@/styles/Footer.module.css'
import Link from 'next/link'

interface Props {
  title: string
  link: Array<string>
}

const Links: React.FC<Props> = ({ title, link }) => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.links}>
        {link.map((item) => (
          <li key={item}>
            <Link href="#" className={styles.item}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Links
