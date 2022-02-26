// todo: create service methods for accesing posts
const API_URL = "http://localhost:3001";
export const getAllKindsById = async (type, id) => {
  const response = await fetch(`${API_URL}/${type}/${id}`);
  const data = await response.json();
  return data;
};

export const getAllKinds = async (type) => {
  const response = await fetch(`${API_URL}/${type}`);
  const data = await response.json();
  return data;
}

export const postAllKinds = (type, content)=>{
fetch(`${API_URL}/${type}`,{
method:'POST',
headers:'Content-Type: application/json',
body:JSON.stringify(content)
})




}

/*Developer notes.
API_URL was wrong. Initially was "http://localhost:3000"

I should be able to make dinamic functions to reduce the code when fetching posts.

Also i could use the Header as a Navbar
Date when posting?

At the beggining, further the npm run serve, i had to install this npm install --save react react-dom react-scripts
*/