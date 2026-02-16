"use client"
import styles from "./Properties.module.css"
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa"
import { useState } from "react"
import EnquiryModal from "../enquiry/EnquiryModal"

export default function PropertyCard({ item }) {

  const [open, setOpen] = useState(false)

  return (
    <div className="col-lg-4 col-md-6 mb-5">
      <div className={styles.card}>

        <img src={item.img} className={styles.image} />

        <div className={styles.body}>

          <h4 className={styles.name}>{item.name}</h4>

          <p className={styles.location}>
            <FaMapMarkerAlt /> {item.location}
          </p>

          <p className={styles.type}>{item.type}</p>

          {item.price && <div className={styles.price}>{item.price}</div>}

          <button className={styles.btn} onClick={() => setOpen(true)}>
            Enquire Now <FaArrowRight />
          </button>

        </div>
      </div>

      {open && (
        <EnquiryModal
          property={item.name}
          onClose={() => setOpen(false)}
        />
      )}

    </div>
  )
}
