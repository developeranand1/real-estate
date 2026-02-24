import styles from "./About.module.css";
import { FaBuilding, FaUsers, FaAward } from "react-icons/fa";

export default function About() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <h2 className={styles.title}>About The Developer</h2>

            <p className={styles.desc}>
              We are committed to building thoughtfully designed living
              environments that combine comfort, luxury, and long-term value.
              With a strong focus on architectural excellence and sustainable
              development, every project is crafted to enhance lifestyle
              experiences.
            </p>

            <p className={styles.desc}>
              From premium residences to integrated townships and commercial
              destinations, our developments emphasize accessibility, green
              planning, and smart infrastructure.
            </p>

            {/* STATS */}
            <div className={styles.stats}>
              <div>
                <FaBuilding />
                <h4>25+</h4>
                <span>Projects Delivered</span>
              </div>

              <div>
                <FaUsers />
                <h4>10,000+</h4>
                <span>Happy Clients</span>
              </div>

              <div>
                <FaAward />
                <h4>15+</h4>
                <span>Awards Won</span>
              </div>
            </div>

            <button className={styles.btn}>
              Explore Our Projects
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6">
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Developer Building"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}