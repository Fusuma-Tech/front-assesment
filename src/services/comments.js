// todo: create service methods for accesing posts
const API_URL = "http://localhost:3001";
export const getById = async (ruta,id) => {
  const response = await fetch(`${API_URL}/${ruta}/${id}`);
  const data = await response.json();
  return data;
};

export const getAll = async (ruta) => {
  const response = await fetch(`${API_URL}/${ruta}`);
  const data = await response.json();
  return data;
}

export const postNew = async (ruta,newData) => {
  await fetch(`${API_URL}/${ruta}`, {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
    })
}

export const deleteThis = async (ruta,id) => {
  await fetch(`${API_URL}/${ruta}/${id}`, {
    method: "DELETE",
    body: JSON.stringify(),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
    })
}