import { projectService } from "@/services/projectService";
import styles from "./ProjectDetail.module.css";
import { notFound } from "next/navigation";
import { FaRupeeSign, FaExpandArrowsAlt, FaCheck } from "react-icons/fa";

/* ================= METADATA ================= */

export async function generateMetadata(props) {
  const { slug } = await props.params;

  const project = await projectService.getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.metaTitle || project.name,
    description: project.metaDescription || project.shortDescription,
    keywords: project.metaKeywords,
  };
}

/* ================= PAGE ================= */

export default async function ProjectDetailPage(props) {
  const { slug } = await props.params;

  if (!slug) return notFound();

  const project = await projectService.getProjectBySlug(slug);
  if (!project) return notFound();

  const decodedHTML = project.description
    ?.replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

  return (
    <div className={styles.pageBg}>

      {/* HERO */}
      <div className={styles.hero}>
        <h1>{project.name}</h1>
        <p>{project.projectType}</p>
      </div>

      {/* CONTENT */}
      <div className="container">
        <div className={styles.wrapper}>

          {/* IMAGE */}
          <img
            src={project.image}
            alt={project.name}
            className={styles.image}
          />

          {/* PRICE & AREA */}
          <div className={styles.highlightBox}>
            <div>
              <FaRupeeSign />
              <span>Starting Price</span>
              <h4>{project.cost}</h4>
            </div>

            <div>
              <FaExpandArrowsAlt />
              <span>Area</span>
              <h4>{project.area}</h4>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: decodedHTML }}
          />

          {/* AMENITIES */}
          <div className={styles.amenitiesSection}>
            <h3>World Class Amenities</h3>

            <div className={styles.amenitiesGrid}>
              {project.amenities?.map((item, i) => (
                <div key={i} className={styles.amenityItem}>
                  <FaCheck />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <h4>Interested in this project?</h4>
            <button>Book Site Visit</button>
          </div>

        </div>
      </div>
    </div>
  );
}