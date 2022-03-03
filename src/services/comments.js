import axios from 'axios'

// todo: create service methods for accesing posts
const API_URL = "http://localhost:3001";
export const createNewComment = async (comment, postId) => {
  await axios.post(`${API_URL}/comments`, { ...comment, postId });
}

export const getCommentsById = async id => {
  const response = await fetch(`${API_URL}/comments?postId=${id}`);
  const data = await response.json();
  return data;
}

export const deleteComment = async id => {
  await axios.delete(`${API_URL}/comments/${id}`);
}



