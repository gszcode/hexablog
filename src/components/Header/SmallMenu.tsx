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
      <Link aria-label="Ir a la página de inicio" href="">
        HOME
      </Link>
      <Link aria-label="Ver planes disponibles" href="">
        PLANES
      </Link>
      <Link aria-label="Ver entrenadores" href="">
        TRAINERS
      </Link>
      <Link aria-label="Más información sobre nosotros" href="">
        NOSOTROS
      </Link>
      <Link aria-label="Ir a la página de inicio" href="">
        CONTACTO
      </Link>
    </ul>
  )
}

export default SmallMenu
