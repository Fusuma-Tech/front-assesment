//Cambio en la forma de comunicarse con la  API y de recuperar los datos. 

import http from './base-api-service';
const API_URL = "http://localhost:3000";

export const getAllPosts = (posts) => http.get('/posts')

export const getPostById = (id) => http.get(`/posts/${id}`)
