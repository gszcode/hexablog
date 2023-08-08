import Link from 'next/link'
import styles from '@/styles/Header.module.css'

const LargeMenu: React.FC = () => {
  return (
    <ul
      className={styles.menu_desktop}
      aria-label="Menú de navegación principal"
    >
      <Link aria-label="Ir a la página de inicio" href="#home">
        HOME
      </Link>
      <Link aria-label="Ver planes disponibles" href="#plans">
        PLANES
      </Link>
      <Link aria-label="Ver entrenadores" href="#ebooks">
        EBOOKS
      </Link>
      <Link aria-label="Más información sobre nosotros" href="#about">
        NOSOTROS
      </Link>
      <Link aria-label="Ir a la página de inicio" href="#contact">
        CONTACTO
      </Link>
    </ul>
  )
}

export default LargeMenu
