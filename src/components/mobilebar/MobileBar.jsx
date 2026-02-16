"use client"
import styles from "./MobileBar.module.css"
import { FaPhoneAlt, FaWhatsapp, FaRegEnvelope } from "react-icons/fa"

export default function MobileBar() {

  const phone = "917838550055"
  const message = "Hi, I am interested in your property."

  return (
    <div className={styles.mobileBar}>

      {/* CALL */}
      <a href={`tel:+${phone}`} className={styles.call}>
        <FaPhoneAlt />
        <span>Tap to Call</span>
      </a>

      {/* QUERY */}
      <a href="#contact" className={styles.query}>
        <FaRegEnvelope />
        <span>Query Now</span>
      </a>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
        target="_blank"
        className={styles.whatsapp}
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>

    </div>
  )
}
