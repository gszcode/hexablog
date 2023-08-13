import Link from 'next/link'
import styles from '@/styles/Header.module.css'

interface Props {
  menuOpen: boolean
}

const SmallMenu: React.FC<Props> = ({ menuOpen }) => {
  return (
    <ul
      className={menuOpen ? styles.menu : styles.hidden_menu}
      aria-label="Menú de navegación principal"
    >
      <Link
        aria-label="Ir a la página de inicio"
        href="https://sharpness.vercel.app/"
      >
        HOME
      </Link>
      <Link
        aria-label="Ver planes disponibles"
        href="https://sharpness.vercel.app/#plans"
      >
        PLANES
      </Link>
      <Link
        aria-label="Ver entrenadores"
        href="https://sharpness.vercel.app/#ebooks"
      >
        EBOOKS
      </Link>
      <Link
        aria-label="Más información sobre nosotros"
        href="https://sharpness.vercel.app/#about"
      >
        NOSOTROS
      </Link>
      <Link
        aria-label="Ir a la página de inicio"
        href="https://sharpness.vercel.app/#contact"
      >
        CONTACTO
      </Link>
    </ul>
  )
}

export default SmallMenu
