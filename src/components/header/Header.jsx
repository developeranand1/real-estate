"use client"
import { useEffect, useState } from "react"
import styles from "./Header.module.css"
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa"

export default function Header() {

  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>

      <div className="container d-flex justify-content-between align-items-center">

        {/* LOGO */}
        <div className={styles.logo}>REAL ESTATE</div>

        {/* DESKTOP MENU */}
        <ul className={styles.menu}>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* RIGHT SIDE */}
        <div className={styles.actions}>
          <a className={styles.phone}><FaPhoneAlt /> +91 78385 xxxxx</a>
          <button className={styles.cta}>Book Visit</button>

          {/* MOBILE TOGGLE */}
          <div className={styles.toggle} onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>

      </div>

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
        <a>Home</a>
        <a>Projects</a>
        <a>About</a>
        <a>Contact</a>
        <button className="btn btn-primary w-100 mt-3">Book Site Visit</button>
      </div>

    </header>
  )
}
