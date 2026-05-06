import axios from 'axios';

// In dev, Vite proxies `/api` to the backend (see `vite.config.js`).
// In prod, set `VITE_API_BASE_URL` to something like:
//   https://pmstore-backend-kodexdbc.onrender.com/api
const baseURL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV
    ? '/api'
    : 'https://pmstore-backend-kodexdbc.onrender.com/api');

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

export const productService = {
  getAll: (params) => api.get('/products', { params }),
  getById: (id) => api.get(`/products/${id}`),
  create: (data) => api.post('/products', data),
  update: (id, data) => api.put(`/products/${id}`, data),
  delete: (id) => api.delete(`/products/${id}`),
};
