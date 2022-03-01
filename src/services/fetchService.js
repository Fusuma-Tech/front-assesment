const API_URL = "http://localhost:3001";

// POST method for both posts and comments. 
export const fetchPOST = (endpoint, data)=>{
  fetch(`${API_URL}/${endpoint}`,{
  method:'POST',
  headers:{
    "Content-Type": "application/json"
  },
  body:JSON.stringify(data)
  })}