import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true, // Send coookies with requests
});

export const register = (data: {
  username: string;
  password: string;
  email: string;
  role: string;
}) => api.post('/auth/register', data);
