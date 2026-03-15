import api from "./api";

// Register user
export const registerUser = (userData) => {
  return api.post("/auth/register", userData);
};

// Login user
export const loginUser = (userData) => {
  return api.post("/auth/login", userData);
};