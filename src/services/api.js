// src/services/api.js
const API_URL = 'http://localhost:5000/breads'; // Pastikan port sesuai dengan JSON Server Anda

export const getBreads = () => fetch(API_URL).then(res => res.json());

export const getBreadById = (id) => fetch(`${API_URL}/${id}`).then(res => res.json());

export const addBread = (bread) => fetch(API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(bread),
}).then(res => res.json());

export const updateBread = (id, bread) => fetch(`${API_URL}/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(bread),
}).then(res => res.json());

export const deleteBread = (id) => fetch(`${API_URL}/${id}`, {
  method: 'DELETE',
});