"use client"
import styles from "./EnquiryModal.module.css"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"

export default function EnquiryModal({ property, onClose }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Lead:", { ...form, property })
    alert("Enquiry Submitted!")
    onClose()
  }

  return (
    <div className={styles.overlay}>

      <div className={styles.modal}>

        <button className={styles.close} onClick={onClose}>
          <FaTimes />
        </button>

        <h3 className={styles.title}>{property}</h3>

        <form onSubmit={handleSubmit} className={styles.form}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <div className={styles.phone}>
            <span>+91</span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone No."
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Comment"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <label className={styles.check}>
            <input type="checkbox" defaultChecked />
            <span>
              I authorize company representatives to contact me via Call/SMS/WhatsApp.
            </span>
          </label>

          <button type="submit" className={styles.submit}>
            Submit
          </button>

        </form>
      </div>
    </div>
  )
}
