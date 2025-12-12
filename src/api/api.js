import axios from 'axios';

const api = axios.create({
  baseURL: 'https://trinhnhatminh.infinityfreeapp.com/backend2/api',
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}
});

export default api;