// src/services/pastryApi.js
const API_URL = 'http://localhost:5000/pastries';

// Get all pastries
export const getPastries = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch pastries');
  return response.json();
};

// Get pastry by ID
export const getPastryById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error('Failed to fetch pastry');
  return response.json();
};

// Add new pastry with auto-generated ID
export const addPastry = async (pastry) => {
  const newPastry = {
    ...pastry,
    id: Date.now().toString()
  };
  
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPastry),
  });
  
  if (!response.ok) throw new Error('Failed to add pastry');
  return response.json();
};

// Update existing pastry
export const updatePastry = async (id, pastry) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...pastry, id }),
  });
  
  if (!response.ok) throw new Error('Failed to update pastry');
  return response.json();
};

// Delete pastry
export const deletePastry = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) throw new Error('Failed to delete pastry');
  return response;
};

