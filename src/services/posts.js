import axios from 'axios'

const API_URL = "http://localhost:3001";
export const getAllPosts = async () => {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    return data
}

export const createNewPost = async (postInfo, event) => {
    await axios.post(`${API_URL}/posts`, postInfo);
    event()
}

export const deletePost = async id => {
    await axios.delete(`${API_URL}/posts/${id}`);
}