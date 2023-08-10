import Link from 'next/link'
import styles from '@/styles/Header.module.css'

const LargeMenu: React.FC = () => {
  return (
    <ul
      className={styles.menu_desktop}
      aria-label="Menú de navegación principal"
    >
      <Link aria-label="Ir a la página de inicio" href="http://localhost:3000/">
        HOME
      </Link>
      <Link
        aria-label="Ver planes disponibles"
        href="http://localhost:3000/#plans"
      >
        PLANES
      </Link>
      <Link aria-label="Ver entrenadores" href="http://localhost:3000/#ebooks">
        EBOOKS
      </Link>
      <Link
        aria-label="Más información sobre nosotros"
        href="http://localhost:3000/#about"
      >
        NOSOTROS
      </Link>
      <Link
        aria-label="Ir a la página de inicio"
        href="http://localhost:3000/#contact"
      >
        CONTACTO
      </Link>
    </ul>
  )
}

export default LargeMenu
