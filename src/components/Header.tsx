import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/assets/logo.png'
import styles from '@/styles/Header.module.css'
import MenuIcon from './icons/MenuIcon'
import { useState } from 'react'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.header_logo}>
          <Image width={100} height={50} src={logo} alt="Logo Main" />
          <h1>SHARPNESS</h1>
        </Link>
        <nav className={styles.header_nav}>
          <button className={styles.menu_btn} onClick={handleMenuOpen}>
            <MenuIcon />
          </button>
          <ul className={menuOpen ? styles.menu : styles.hidden_menu}>
            <Link href="">HOME</Link>
            <Link href="">PLANES</Link>
            <Link href="">TRAINERS</Link>
            <Link href="">NOSOTROS</Link>
            <Link href="">CONTACTO</Link>
          </ul>
          <ul className={styles.menu_desktop}>
            <Link href="">HOME</Link>
            <Link href="">PLANES</Link>
            <Link href="">TRAINERS</Link>
            <Link href="">NOSOTROS</Link>
            <Link href="">CONTACTO</Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
