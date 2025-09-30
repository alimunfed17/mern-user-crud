import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URI
});

export const getUsers = (page = 1, limit = 10, q = "") =>
  API.get(`/users?page=${page}&limit=${limit}&q=${q}`);

export const getUser = (id: string) => API.get(`/users/${id}`);

export const createUser = (data: any) => API.post("/users", data);

export const updateUser = (id: string, data: any) => API.put(`/users/${id}`, data);

export const deleteUser = (id: string) => API.delete(`/users/${id}`);

export const exportUsers = () => API.get("/users/export", { responseType: "blob" });
