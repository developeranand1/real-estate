import api from "@/services/apiService";

const PROJECT_BASE = "/m1m/project";

export const projectService = {
  async getProjects() {
    const res = await api.get(PROJECT_BASE);
    return res.data?.data || res.data || [];
  },

  async getProjectBySlug(slug) {
    if (!slug) return null;

    try {
      const res = await api.get(`${PROJECT_BASE}/${slug}`);
      return res.data?.data || res.data;
    } catch (e) {
      const res = await api.get(PROJECT_BASE, { params: { slug } });
      return res.data?.data || res.data;
    }
  },
};

export default projectService;