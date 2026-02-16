import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* overlay */}
      <div className={styles.overlay}></div>

      {/* content */}
      <div className={`container ${styles.content}`}>
        <div className="row text-center text-lg-start align-items-center">

          <div className="col-lg-4 mb-4">
            <h1 className={styles.title}>Premium Living Spaces</h1>
          </div>

          <div className="col-lg-4 mb-4">
            <h5 className={styles.heading}>RESIDENCE TYPE</h5>
            <p className={styles.sub}>2, 3 & 4 BHK Smart Apartments</p>
          </div>

          <div className="col-lg-4">
            <h5 className={styles.heading}>PRICE STARTS</h5>
            <h2 className={styles.price}>₹ 1.65 Cr*</h2>
          </div>

        </div>
      </div>

    </section>
  )
}
