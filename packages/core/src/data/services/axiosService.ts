import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const errorResponse =  api.interceptors.response.use(
  response => response,
  error => {
    if(error.response) {
      return Promise.reject( error.response );
    } else if(error.request) {
      return Promise.reject({ message: 'No response received from server' });
    } else {
      return Promise.reject({ message: error.message });
    }
  }
)

export default api
