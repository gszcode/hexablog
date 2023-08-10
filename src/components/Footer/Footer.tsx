import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import Links from './LinksComponent'
import { Instagram } from '../icons/Instagram'
import { Facebook } from '../icons/Facebook'
import { Whatsapp } from '../icons/Whatsapp'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} ${poppins.className}`}>
      <div className={styles.image}>
        <Image
          src="/img/logo.png"
          alt="Shapness Logo"
          width={160}
          height={100}
        />
      </div>
      <div className={styles.sections}>
        <Links
          title="Enlaces"
          link={['Home', 'FAQ', 'Tienda', 'Servicios', 'Contacto']}
        />
        <Links
          title="Información"
          link={[
            'Historia',
            'Nosotros',
            'Términos y Condiciones',
            'Asesoramiento online',
            'Blog'
          ]}
        />
        <section className={styles.section}>
          <h3 className={styles.title}>Contacto</h3>
          <p>sharpness@gmail.com</p>
          <p>+54 9 11 2266 2134</p>
          <span className={styles.span}>sharpness</span>
          <div className={styles.social}>
            <Instagram width={35} height={35} className={styles.icon} />
            <Facebook width={35} height={35} className={styles.icon} />
            <Whatsapp width={35} height={35} className={styles.icon} />
          </div>
        </section>
        <p className={styles.copyright}>
          <span className={styles.line} />
          <br />
          Copyright 2023&copy; | Todos los derechos reservados | Página
          desarrollada por Gszcode@
        </p>
      </div>
    </footer>
  )
}

export default Footer
