import api from "@/services/apiService";



const BLOG_BASE = "/m1m/blog";

export const blogService = {
  // ✅ Get all blogs (list)
  async getBlogs(params = {}) {
    // params example: { page: 1, limit: 10, category: "Real Estate" }
    const res = await api.get(BLOG_BASE, { params });
    return res.data;
  },

  // ✅ Get single blog by slug (2 ways; uses whichever works)
  async getBlogBySlug(slug) {
    if (!slug) throw new Error("slug is required");

    // 1) try /api/m1m/blog/:slug
    try {
      const res = await api.get(`${BLOG_BASE}/${slug}`);
      return res.data;
    } catch (e) {
      // 2) fallback to /api/m1m/blog?slug=...
      const res = await api.get(BLOG_BASE, { params: { slug } });
      return res.data;
    }
  },
};

export default blogService;