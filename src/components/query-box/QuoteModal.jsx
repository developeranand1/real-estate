"use client";

import { useEffect, useState } from "react";
import styles from "./QuoteModal.module.css";
import { FaUser, FaPhoneAlt, FaEnvelope, FaTimes, FaLock } from "react-icons/fa";

export default function QuoteModal() {
  const [show, setShow] = useState(false);

  // page load -> auto open modal
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 250); // small delay for smoothness
    return () => clearTimeout(t);
  }, []);

  // optional: ESC close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setShow(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div className={`modal-backdrop fade show ${styles.backdrop}`} />

      {/* Modal */}
      <div className={`modal fade show ${styles.modalRoot}`} tabIndex="-1" role="dialog">
        <div className={`modal-dialog modal-dialog-centered ${styles.dialog}`} role="document">
          <div className={`modal-content ${styles.modalContent}`}>
            {/* Header */}
            <div className={styles.header}>
              <h5 className={styles.headerTitle}>GET BEST QUOTE</h5>

              <button className={styles.closeBtn} onClick={() => setShow(false)} aria-label="Close">
                <FaTimes />
              </button>
            </div>

            {/* Body */}
            <div className={styles.body}>
              {/* Logo */}
              <div className={styles.logoWrap}>
                {/* Replace src with your logo */}
                <img
                  src="/logo.png"
                  alt="Garden Residency"
                  className={styles.logo}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className={styles.logoFallback}>
                  <div className={styles.leaf} />
                  <div>
                    <div className={styles.brand}>Garden</div>
                    <div className={styles.subBrand}>RESIDENCY</div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputGroup}>
                  <span className={styles.icon}>
                    <FaUser />
                  </span>
                  <input className={styles.input} placeholder="Name" />
                </div>

                <div className={styles.inputGroup}>
                  <span className={styles.icon}>
                    <FaPhoneAlt />
                  </span>
                  <input className={styles.input} placeholder="Mobile" />
                </div>

                <div className={styles.inputGroup}>
                  <span className={styles.icon}>
                    <FaEnvelope />
                  </span>
                  <input className={styles.input} placeholder="Email" />
                </div>

                <div className={styles.inputGroup}>
                  <textarea className={styles.textarea} placeholder="Message (Optional)" rows={3} />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  SUBMIT
                </button>

                <div className={styles.secure}>
                  <FaLock /> 100% Secure
                </div>
              </form>
            </div>

            {/* Bottom green border (like image) */}
            <div className={styles.bottomBar} />
          </div>
        </div>
      </div>
    </>
  );
}