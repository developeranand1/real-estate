import { cities } from "./citiesData"
import CityCard from "./CityCard"
import styles from "./Cities.module.css"

export default function Cities() {
  return (
    <section className={styles.section}>
      <div className="container">

        <p className={styles.top}>TOP CITIES</p>
        <h2 className={styles.heading}>
          Explore Real Estate in Popular Indian Cities
        </h2>

        <div className="row mt-5">
          {cities.map((city, i) => (
            <CityCard key={i} city={city} />
          ))}
        </div>

      </div>
    </section>
  )
}
