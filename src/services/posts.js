// todo: create service methods for accesing posts
import http from './base-api-service';
const API_URL = "http://localhost:3000";

export const getAllPosts = (posts) => http.get('/posts')

export const getCommentById = (id) => http.get(`/posts/${id}`)
