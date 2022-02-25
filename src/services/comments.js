// todo: create service methods for accesing posts
const API_URL = "http://localhost:3001";
export const getCommentById = async (id) => {
  const response = await fetch(`${API_URL}/comments/${id}`);
  const data = await response.json();
  return data;
};

export const getAllComments = async () => {
  const response = await fetch(`${API_URL}/comments`);
  const data = await response.json();
  return data;
}

/*Developer notes.
API_URL was wrong. Initially was "http://localhost:3000"

I should be able to make dinamic functions to reduce the code when fetching posts.

Also i could use the Header as a Navbar

At the beggining, further the nom run serve, i had to install this npm install --save react react-dom react-scripts
*/