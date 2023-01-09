
// todo: create service methods for accesing posts

import { API_URL, Comments } from "../configuration/const";

export const getCommentById = async (id) => {
  const response = await fetch(`${API_URL}${Comments}/${id}`);
  const data = await response.json();
  return data;
};

export const getAllComments = async () => {
  const response = await fetch(`${API_URL}${Comments}`);
  const data = await response.json();
  return data;
}


