import Link from "next/link";
import { blogService } from "@/services/blogService";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./Blog.module.css";

export const metadata = {
  title: "Blogs | Real Estate Updates",
  description: "Latest real estate news, insights and investment trends.",
};

export default async function BlogPage() {
  const data = await blogService.getBlogs();
  const blogs = Array.isArray(data) ? data : data?.data || [];

  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.heroSection}`}>
        <div className="container text-center">
          <h1 className={styles.heroTitle}>
            Real Estate Insights & Updates
          </h1>
          <p className={styles.heroSubtitle}>
            Stay informed with latest property trends, prices & investment tips.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <div className="container py-5">
        <div className="row g-4">
          {blogs.map((b) => (
            <div className="col-md-6 col-lg-4" key={b._id}>
              <div className={styles.blogCard}>

                {/* Image Section */}
                <div className={styles.imageWrapper}>
                  {b.image && (
                    <img
                      src={b.image}
                      alt={b.title}
                      className={styles.blogImage}
                    />
                  )}

                  {/* Category Badge */}
                  <span className={styles.categoryBadge}>
                    {b.category}
                  </span>

                  {/* Type Badge */}
                  <span className={styles.typeBadge}>
                    {b.type}
                  </span>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <div className={styles.blogMeta}>
                    {new Date(b.createdAt)
                      .toLocaleDateString("en-GB")
                      .replace(/\//g, "-")}
                  </div>

                  <h5 className={styles.blogTitle}>
                    {b.title}
                  </h5>

                  <p className={styles.blogDesc}>
                    {b.shortDescription}
                  </p>

                  {/* Author */}
                  <div className={styles.author}>
                    By {b.authorName}
                  </div>

                  <Link href={`/blog/${b.slug}`} className={styles.readMore}>
                    Read More
                    <span className={styles.arrowCircle}>
                      <FiArrowUpRight />
                    </span>
                  </Link>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}