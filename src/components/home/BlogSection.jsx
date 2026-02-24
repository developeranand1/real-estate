import Link from "next/link";
import { blogService } from "@/services/blogService";
import styles from "./HomeSection.module.css";
import { FaArrowRight } from "react-icons/fa";

export default async function BlogSection() {
  const blogs = await blogService.getBlogs();

  return (
    <section className={styles.section}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Latest Insights</h2>
            <p className={styles.sectionSubtitle}>
              Stay updated with property trends & investment news.
            </p>
          </div>

          <Link href="/blog" className={styles.viewAll}>
            View All <FaArrowRight size={12} />
          </Link>
        </div>

        <div className="row g-4">
          {blogs.slice(0, 3).map((blog) => (
            <div key={blog._id} className="col-md-4">

              <Link href={`/blog/${blog.slug}`}>

                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className={styles.image}
                    />
                    <span className={styles.badge}>
                      {blog.category}
                    </span>
                  </div>

                  <div className={styles.content}>
                    <h5 className={styles.title}>
                      {blog.title}
                    </h5>

                    <p className={styles.desc}>
                      {blog.shortDescription.slice(0, 90)}...
                    </p>

                    <div className={styles.readMore}>
                      Read More <FaArrowRight size={12} />
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