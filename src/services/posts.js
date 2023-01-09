import { API_URL, POSTS_ENDPOINT } from "../configuration/constants";

export async function getPostsById(id) {
  const response = await fetch(`${API_URL}${POSTS_ENDPOINT}/${id}`);
  const data = await response.json();
  return data;
};

export async function getAllPosts() {
  const response = await fetch(`${API_URL}${POSTS_ENDPOINT}`);
  const data = await response.json();
  return data;
}

export async function createPost(name, user) {
  const payload = { 
    name: name,
    user: user 
  }

  const response = await fetch(`${API_URL}${POSTS_ENDPOINT}`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  return data;
}
//separacion
export async function deletePost(id){
  
  const response = await fetch(`${API_URL}${POSTS_ENDPOINT}/${id}`, { 
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  
  const data = await response.json();
  return data;
}

// export async function deletePostsById(id) {
//   const response = await fetch(`${API_URL}${POSTS_ENDPOINT}`);
//   const data = await response.json();
//   console.log('data')
//   return data;
// };

// export async function agetAllPosts() {
//   const response = await fetch(`${API_URL}${POSTS_ENDPOINT}`);
//   const data = await response.json();
//   console.log('data', data)
//   return data;
// }

