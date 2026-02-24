import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* dark overlay */}
      <div className={styles.overlay} />

      <div className={`container ${styles.container}`}>
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-7">
            <span className={styles.badge}>NEW LAUNCH</span>

            <h1 className={styles.title}>
              MEFFIER <span>GARDEN</span>
              <br />
              <span>RESIDENCY</span>
            </h1>

            <p className={styles.subtitle}>
              Premium 2 & 3 BHK Independent Floor Residences
            </p>

            <ul className={styles.points}>
              <li>Sector 5, Sohna, Gurgaon</li>
              <li>45 Acres of Integrated Township</li>
              <li>Total Units (Phase 1): 560</li>
              <li>40,000 sq. ft. Luxury Clubhouse</li>
              <li>Payment Plan: 40:30:30</li>
            </ul>

            <a href="#pricing" className={styles.priceBtn}>
              ₹ 1.25 Cr* Onwards
            </a>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className={styles.formCard}>
              <div className={styles.formHeader}>ENQUIRE NOW</div>

              <form className={styles.formBody}>
                <input className={styles.input} placeholder="Name" />
                <input className={styles.input} placeholder="Phone" />
                <input className={styles.input} placeholder="Email" />
                <textarea
                  className={styles.textarea}
                  placeholder="Message"
                  rows={4}
                />

                <button type="button" className={styles.submit}>
                  Get Callback
                </button>

                <div className={styles.secure}>🔒 100% Secure</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}