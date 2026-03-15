import api from "./api";

// Get tasks inside a project
export const getTasks = (projectId) => {
  return api.get(`/projects/${projectId}/tasks`);
};

// Add new task
export const addTask = (projectId, task) => {
  return api.post(`/projects/${projectId}/tasks`, task);
};

// Delete task
export const deleteTask = (projectId, taskId) => {
  return api.delete(`/projects/${projectId}/tasks/${taskId}`);
};

export const toggleTask = (projectId,taskId) => {
  return api.put(`/projects/${projectId}/tasks/${taskId}/toggle`);
};
