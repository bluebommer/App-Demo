import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Fetch all posts
export const fetchPosts = async () => {
  const { data } = await api.get("/posts");
  return data;
};

// Fetch single post by ID
export const fetchPostById = async (id) => {
  const { data } = await api.get(`/posts/${id}`);
  return data;
};
