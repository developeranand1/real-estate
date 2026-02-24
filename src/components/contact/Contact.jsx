"use client"
import styles from "./Contact.module.css"
import { useState } from "react"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: true
  })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
    alert("Thank you! Our team will contact you shortly.")
  }

  return (
    <section className={styles.contact}>

      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT SIDE INFO */}
          <div className="col-lg-5">
            <div className={styles.infoBox}>
              <h2>Let’s Connect</h2>
              <p>
                Have questions about our projects? Our property experts
                are here to guide you through every step.
              </p>

              <div className={styles.contactItem}>
                <FaPhoneAlt />
                <span>+91 98765 43210</span>
              </div>

              <div className={styles.contactItem}>
                <FaEnvelope />
                <span>support@m3mhomes.com</span>
              </div>

              <div className={styles.contactItem}>
                <FaMapMarkerAlt />
                <span>
                  Golf Course Extension Road,<br />
                  Gurgaon, Haryana
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-7">
            <div className={styles.card}>

              <h3 className={styles.formTitle}>Request a Call Back</h3>

              <form onSubmit={handleSubmit}>

                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                  <label>Full Name</label>
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                  <label>Email Address</label>
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <label>Mobile Number</label>
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    name="message"
                    rows="3"
                    required
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                  <label>Your Requirement</label>
                </div>

                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                  />
                  <span>
                    I agree to receive updates via call, WhatsApp & email.
                  </span>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Submit Enquiry
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

    </section>
  )
}