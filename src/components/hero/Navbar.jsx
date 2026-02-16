"use client"
import styles from "./Hero.module.css"
import { FaArrowRight } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} container-fluid`}>
      <div className="container d-flex justify-content-between align-items-center">

        <div className={styles.logo}>M3M</div>

        <ul className={`${styles.menu} d-none d-lg-flex`}>
          <li>Home</li>
          <li>Our Projects</li>
          <li>Download Brochure</li>
          <li>Contact Us</li>
        </ul>

        <div className={`${styles.actions} d-none d-lg-flex`}>
          <button className={styles.phone}>+91-7838550055</button>
          <button className={styles.visit}>
            Book A Site Visit <FaArrowRight />
          </button>
        </div>

      </div>
    </nav>
  )
}
