//Cambio en la forma de comunicarse con la  API y de recuperar los datos. 

import http from './base-api-service';
const API_URL = "http://localhost:3000";

export const getAllComments = () => http.get('/comments')

