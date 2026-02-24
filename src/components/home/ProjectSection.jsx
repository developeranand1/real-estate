import Link from "next/link";
import { projectService } from "@/services/projectService";
import styles from "./HomeSection.module.css";
import { FaArrowRight } from "react-icons/fa";

export default async function ProjectSection() {
  const projects = await projectService.getProjects();

  return (
    <section className={`${styles.section} ${styles.lightBg}`}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>
              Explore premium residential developments in prime locations.
            </p>
          </div>

          <Link href="/projects" className={styles.viewAll}>
            View All <FaArrowRight size={12} />
          </Link>
        </div>

        <div className="row g-4">
          {projects.slice(0, 3).map((project) => (
            <div key={project._id} className="col-md-4">

              <Link href={`/projects/${project.slug}`}>

                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={project.image}
                      alt={project.name}
                      className={styles.image}
                    />
                    <span className={styles.badge}>
                      {project.projectType}
                    </span>
                  </div>

                  <div className={styles.content}>
                    <h5 className={styles.title}>
                      {project.name}
                    </h5>

                    <div className={styles.price}>
                      ₹ {project.cost}
                    </div>

                    <p className={styles.desc}>
                      {project.shortDescription.slice(0, 90)}...
                    </p>

                    <div className={styles.readMore}>
                      Explore <FaArrowRight size={12} />
                    </div>
                  </div>
                </div>

              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}