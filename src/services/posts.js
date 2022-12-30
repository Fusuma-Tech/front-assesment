
// const API_URL = "http://localhost:3001";
// export const getPostById = async (id) => {
//   const response = await fetch(`${API_URL}/posts/${id}`);
//   const data = await response.json();
//   return data;
// };

// export const getAllPosts = async () => {
//   const response = await fetch(`${API_URL}/posts`);
//   const data = await response.json();
//   return data;
// }

// export const makeNewPost = async (newData) => {
//   await fetch(`${API_URL}/posts`, {
//     method: "POST",
//     body: JSON.stringify(newData),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//     },
//     })
// }

// export const deletePost = async (id) => {
//   await fetch(`${API_URL}/posts/${id}`, {
//     method: "DELETE",
//     body: JSON.stringify(),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//     },
//     })
// }