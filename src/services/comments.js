// // todo: create service methods for accesing posts
// const API_URL = "http://localhost:3000";
// export const getCommentById = async (id) => {
//   const response = await fetch(`${API_URL}/comments/${id}`);
//   const data = await response.json();
//   return data;
// };

// export const getAllComments = async () => {
//   const response = await fetch(`${API_URL}/comments`);
//   const data = await response.json();
//   return data;
// }



//Cambio en la forma de comunicarse con la  API y de recuperar los datos. 

import http from './base-api-service';
const API_URL = "http://localhost:3000";

export const getAllComments = () => http.get('/comments')

