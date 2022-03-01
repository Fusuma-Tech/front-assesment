// todo: create service methods for accesing posts
const API_URL = "http://localhost:3001";
export const getCommentById = async (id) => {
  const response = await fetch(`${API_URL}/comments/${id}`);
  const data = await response.json();
  return data;
};

export const getAllComments = async () => {
  const response = await fetch(`${API_URL}/comments`);
  const data = await response.json();
  return data;
}
export const getCommentByPostId = async (id) => {
  const response = await fetch(`${API_URL}/comments?postId=${id}`);
  const data = await response.json();
  return data;
};

