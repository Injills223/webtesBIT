// src/services/api.js
const API_URL = 'http://localhost:5000/breads';

// Get all breads
export const getBreads = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch breads');
  return response.json();
};

// Get bread by ID
export const getBreadById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error('Failed to fetch bread');
  return response.json();
};

// Add new bread with auto-generated ID
export const addBread = async (bread) => {
  // Generate unique ID based on timestamp
  const newBread = {
    ...bread,
    id: Date.now().toString()
  };
  
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBread),
  });
  
  if (!response.ok) throw new Error('Failed to add bread');
  return response.json();
};

// Update existing bread
export const updateBread = async (id, bread) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...bread, id }),
  });
  
  if (!response.ok) throw new Error('Failed to update bread');
  return response.json();
};

// Delete bread
export const deleteBread = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) throw new Error('Failed to delete bread');
  return response;
};
