const API_URL = "http://localhost:3001";
export const getPostById = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`);
  const data = await response.json();
  return data;
};

export const getAllPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  const data = await response.json();
  return data;
}