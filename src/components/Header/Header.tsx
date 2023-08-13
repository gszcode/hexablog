import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/img/main_logo.png'
import styles from '@/styles/Header.module.css'
import { Menu } from '../icons/MenuIcon'
import { useState } from 'react'
import SmallMenu from './SmallMenu'
import LargeMenu from './LargeMenu'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <header className={`${styles.container} ${poppins.className}`}>
      <div className={styles.header}>
        <Link
          href="https://sharpness.vercel.app/"
          className={styles.header_logo}
        >
          <Image width={100} height={50} src={logo} alt="Logo Main" />
          <h1>SHARPNESS</h1>
        </Link>
        <nav className={styles.header_nav}>
          <button className={styles.menu_btn} onClick={handleMenuOpen}>
            <Menu />
          </button>
          {/* Menu mobile */}
          <SmallMenu menuOpen={menuOpen} />
          {/* Menu desktop */}
          <LargeMenu />
        </nav>
      </div>
    </header>
  )
}

export default Header
