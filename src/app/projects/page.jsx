import Link from "next/link";   // ✅ ADD THIS
import { projectService } from "@/services/projectService";
import styles from "./Project.module.css";
import { FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Luxury Projects | Gurgaon Real Estate",
  description: "Explore premium luxury residential projects in Gurgaon.",
};

export default async function ProjectsPage() {
  const projects = await projectService.getProjects();

  return (
    <div className={styles.pageBg}>

      {/* ================= HERO SECTION ================= */}
      <section className={styles.hero}>
        <div className="container text-center">
          <h1 className={styles.heroTitle}>
            Discover Luxury Living in Gurgaon
          </h1>

          <p className={styles.heroSubtitle}>
            Explore premium residential projects offering world-class
            amenities, prime locations, and exceptional investment value.
          </p>

          <div className={styles.heroStats}>
            <div>
              <h4>{projects.length}+</h4>
              <span>Premium Projects</span>
            </div>
            <div>
              <h4>Luxury</h4>
              <span>Residential</span>
            </div>
            <div>
              <h4>Prime</h4>
              <span>Locations</span>
            </div>
          </div>

          <a href="#projects" className={styles.heroBtn}>
            View Projects <FaArrowRight />
          </a>
        </div>
      </section>

      {/* ================= PROJECT LIST ================= */}
      <div id="projects" className="container py-5">
        <h2 className={styles.heading}>Featured Projects</h2>

        <div className="row g-4 mt-4">
          {projects.map((project) => (
            <div key={project._id} className="col-md-6 col-lg-4">

              {/* ✅ SLUG LINK ADDED HERE */}
              <Link
                href={`/projects/${project.slug}`}
                className={styles.cardLink}
              >
                <div className={styles.card}>

                  {/* Image */}
                  <div className={styles.imageWrapper}>
                    <img
                      src={project.image}
                      alt={project.name}
                      className={styles.image}
                    />
                    <div className={styles.overlay}>
                      {project.projectType}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={styles.content}>
                    <h5 className={styles.title}>{project.name}</h5>

                    <div className={styles.priceArea}>
                      <span className={styles.price}>
                        ₹ {project.cost}
                      </span>
                      <span className={styles.area}>
                        {project.area}
                      </span>
                    </div>

                    <p className={styles.shortDesc}>
                      {project.shortDescription}
                    </p>

                    <div className={styles.amenities}>
                      {project.amenities?.slice(0, 3).map((item, i) => (
                        <span key={i}>{item}</span>
                      ))}
                    </div>

                  </div>
                </div>
              </Link>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}