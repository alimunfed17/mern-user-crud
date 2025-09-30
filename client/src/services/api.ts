import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api/users"
});

export const getUsers = (page = 1, limit = 10, q = "") =>
  API.get(`?page=${page}&limit=${limit}&q=${q}`);

export const getUser = (id: string) => API.get(`/${id}`);

export const createUser = (data: any) => API.post("/", data);

export const updateUser = (id: string, data: any) => API.put(`/${id}`, data);

export const deleteUser = (id: string) => API.delete(`/${id}`);

export const exportUsers = () => API.get("/export", { responseType: "blob" });
