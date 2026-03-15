import api from "./api";

// Get all projects for a user
export const getProjects = (userId) => {
  return api.get(`/projects/${userId}`);
};

// Create a new project
export const createProject = (userId, project) => {
  return api.post(`/projects/${userId}`, project);
};