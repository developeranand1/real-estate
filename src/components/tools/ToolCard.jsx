import styles from "./Tools.module.css"

export default function ToolCard({ item }) {
  const Icon = item.icon

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className={styles.card}>

        <div className={styles.icon}>
          <Icon />
        </div>

        <h5>{item.title}</h5>
        <p>{item.desc}</p>

        <span className={styles.link}>
          View now →
        </span>

      </div>
    </div>
  )
}
