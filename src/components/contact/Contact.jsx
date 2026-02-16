"use client"
import styles from "./Contact.module.css"
import { useState } from "react"

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
    alert("Form Submitted")
  }

  return (
    <section className={styles.contact}>

      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT IMAGE */}
          <div className="col-lg-6">
            <img src="https://godrejhomez.com/gurgaon/godrej-sector-53/images/contact_us.webp" className={styles.image} alt="contact"/>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-6">
            <div className={styles.card}>

              <h2 className="text-primary text-center mb-4">
                Get In Touch
              </h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text bg-secondary text-white">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    className="form-control"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us about your requirement"
                    className="form-control"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="form-check mb-3 small">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    I agree to receive calls, WhatsApp messages and emails regarding property updates.
                  </label>
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
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
