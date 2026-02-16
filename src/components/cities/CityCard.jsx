import styles from "./Cities.module.css"

export default function CityCard({ city }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className={styles.card}>

        <img src={city.img} className={styles.image} alt={city.name}/>

        <div className={styles.info}>
          <h5>{city.name}</h5>
          <span>{city.count}</span>
        </div>

      </div>
    </div>
  )
}
