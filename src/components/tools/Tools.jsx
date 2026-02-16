import { tools } from "./toolsData"
import ToolCard from "./ToolCard"
import styles from "./Tools.module.css"

export default function Tools() {
  return (
    <section className={styles.section}>
      <div className="container">

        <h3 className={styles.heading}>Advice & Tools</h3>

        <div className="row mt-4">
          {tools.map((item, i) => (
            <ToolCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  )
}
