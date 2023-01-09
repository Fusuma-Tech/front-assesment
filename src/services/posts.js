import { API_URL, Post } from "../configuration/const";


export const getPostById = async (id) => {
  const response = await fetch(`${API_URL}${Post}/${id}`);
  const data = await response.json();
  return data;
};

export const getAllPosts = async () => {
  const response = await fetch(`${API_URL}${Post}`);
  const data = await response.json();
  return data;
}



export async function createPost(name, user) {
  const payload = {
    name: name,
    user: user
  }
  const response = await fetch(`${API_URL}${Post}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  return response.json();
}




export async function deletePost(id) {
 
  const response = await fetch(`${API_URL}${Post}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
body:JSON.stringify()
  });
  return await response.json();}

