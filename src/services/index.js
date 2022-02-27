// GET Method for both comments and posts by ID.
const API_URL = "http://localhost:3001";
export const getAllKindsById = async (type, id) => {
  const response = await fetch(`${API_URL}/${type}/${id}`);
  const data = await response.json();
  return data;
};
// GET Method for all comments and all posts.
export const getAllKinds = async (type) => {
  const response = await fetch(`${API_URL}/${type}`);
  const data = await response.json();
  return data;
}
// POST Method for all comments and all posts.
export const postAllKinds = (type, content)=>{
fetch(`${API_URL}/${type}`,{
method:'POST',
headers:{
  "Content-Type": "application/json"
},
body:JSON.stringify(content)
})}
// DELETE Method for all posts. Could work for comments if required.
export const deleteData =async (type, id)=> {
  return fetch(`${API_URL}/${type}/${id}`,{
    method: 'delete'
  })
  .then(response => response.json());
}






/*Developer notes.

API_URL was wrong. Initially was "http://localhost:3000"

At the beggining, further the npm run serve, i had to install this: npm install --save react react-dom react-scripts
*/