import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch users with optional pagination and search query
export const getUsers = (page = 1, limit = 10, q = "") =>
  API.get(`/users?page=${page}&limit=${limit}&q=${q}`);

// Fetch a single user by ID
export const getUser = (id: string) => API.get(`/users/${id}`);

// Create a new user
export const createUser = (data: any) => API.post("/users", JSON.stringify(data));

// Update an existing user
export const updateUser = (id: string, data: any) =>
  API.put(`/users/${id}`, JSON.stringify(data));

// Delete a user
export const deleteUser = (id: string) => API.delete(`/users/${id}`);

// Export users as CSV
export const exportUsers = () =>
  API.get("/users/export", { responseType: "blob" });
