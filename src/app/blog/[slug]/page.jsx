import { blogService } from "@/services/blogService";
import styles from "./BlogDetail.module.css";
import { notFound } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

/* ================= METADATA ================= */

export async function generateMetadata(props) {
  const { slug } = await props.params;

  if (!slug) return { title: "Blog Not Found" };

  const blog = await blogService.getBlogBySlug(slug);
  if (!blog) return { title: "Blog Not Found" };

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.shortDescription,
    keywords: blog.metaKeywords,
  };
}

/* ================= PAGE ================= */

export default async function BlogDetailPage(props) {
  const { slug } = await props.params;
  if (!slug) return notFound();

  const blog = await blogService.getBlogBySlug(slug);
  if (!blog) return notFound();

  const decodedHTML = blog.description
    ?.replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

  const shareUrl = `https://yourdomain.com/blog/${blog.slug}`;

  return (
    <div className={styles.pageBg}>

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.badges}>
          <span className={styles.category}>{blog.category}</span>
          <span className={styles.type}>{blog.type}</span>
        </div>

        <h1 className={styles.title}>{blog.title}</h1>

        <div className={styles.meta}>
          {new Date(blog.createdAt)
            .toLocaleDateString("en-GB")
            .replace(/\//g, "-")}{" "}
          • By {blog.authorName}
        </div>
      </div>

      {/* CONTENT CARD */}
      <div className={styles.wrapper}>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className={styles.image}
          />
        )}

        {/* AUTHOR */}
        <div className={styles.authorCard}>
          <div className={styles.avatar}>
            {blog.authorName?.charAt(0)}
          </div>
          <div>
            <div className={styles.authorName}>
              {blog.authorName}
            </div>
            <div className={styles.authorRole}>
              Real Estate Specialist
            </div>
          </div>
        </div>

        {/* SHARE */}
        <div className={styles.shareSection}>
          <span>Share</span>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
          >
            <FaFacebookF />
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
            target="_blank"
          >
            <FaTwitter />
          </a>

          <a
            href={`https://www.linkedin.com/shareArticle?url=${shareUrl}`}
            target="_blank"
          >
            <FaLinkedinIn />
          </a>

          <a
            href={`https://wa.me/?text=${shareUrl}`}
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* BLOG CONTENT */}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: decodedHTML }}
        />

      </div>
    </div>
  );
}