import axios from 'axios';

const API = axios.create({
  baseURL: 'https://real-time-backend-scfw.onrender.com',
});

export default API;
