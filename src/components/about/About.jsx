import styles from "./About.module.css"

export default function About() {
  return (
    <section className={styles.about}>

      <div className="container">

        <h2 className={styles.title}>ABOUT DEVELOPER</h2>

        <p className={styles.desc}>
          Our development group is dedicated to building thoughtfully designed living
          environments that combine comfort, convenience, and long-term value.
          With a strong focus on architectural excellence and sustainable planning,
          each project is carefully crafted to enhance everyday lifestyle experiences.
          From modern residences and premium apartments to integrated townships and
          commercial destinations, our developments are created around accessibility,
          green spaces, and smart infrastructure.

          Over the years, we have earned the trust of homeowners and investors by
          maintaining transparent processes, quality construction standards, and
          timely project completion. Our goal is not just to construct buildings,
          but to create vibrant communities where families can grow and businesses
          can thrive.
        </p>

      </div>

    </section>
  )
}
