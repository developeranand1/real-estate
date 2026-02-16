import { properties } from "./data"
import PropertyCard from "./PropertyCard"
import styles from "./Properties.module.css"

export default function Properties() {
  return (
    <section className={styles.section}>
      <div className="container">

        <h2 className={styles.heading}>
          Flexible Pricing Plans Designed for Every Business
        </h2>

        <div className="row mt-5">
          {properties.map((item, i) => (
            <PropertyCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  )
}
