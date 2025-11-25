// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import BreadList from '../components/BreadList';
import * as api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [breads, setBreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchBreads = async () => {
    try {
      setLoading(true);
      const data = await api.getBreads();
      setBreads(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Panggil fetchBreads saat komponen mount
  useEffect(() => {
    fetchBreads();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      try {
        await api.deleteBread(id);
        // Segarkan data setelah delete
        fetchBreads();
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleEdit = (bread) => {
    console.log("Mengedit bread dengan ID:", bread.id);
    // Kirim fungsi refetchBreads sebagai state ke halaman edit
    navigate(`/manage-bread/${bread.id}`, { state: { refetchBreads } });
  };

  const handleAdd = () => {
    console.log("Menambah produk baru");
    // Kirim fungsi refetchBreads sebagai state ke halaman add
    navigate('/manage-bread', { state: { refetchBreads } });
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#FFF2DF]">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center bg-[#FFF2DF]">Error: {error}</div>;

  return (
    <main className="flex-grow mt-8">
      <div className="flex justify-center mb-6">
        <button
          onClick={handleAdd}
          className="px-6 py-3 bg-accent-dark text-white rounded-full font-medium hover:bg-[#2C1815] transition-colors"
        >
          Add Product
        </button>
      </div>
      <BreadList breads={breads} onEdit={handleEdit} onDelete={handleDelete} />
    </main>
  );
};

export default Home;