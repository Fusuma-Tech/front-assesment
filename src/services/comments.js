// todo: create service methods for accesing posts
import { API_URL, COMMENTS_ENDPOINT } from "../configuration/constants";

export async function getCommentById (id) {
  const response = await fetch(`${API_URL}${COMMENTS_ENDPOINT}/${id}`);
  const data = await response.json();
  return data;
};

export async function getAllComments() {
  const response = await fetch(`${API_URL}${COMMENTS_ENDPOINT}`);
  const data = await response.json();
  return data;
}
