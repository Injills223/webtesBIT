// src/pages/ManageBread.jsx
import React, { useState, useEffect } from 'react';
import BreadForm from '../components/BreadForm';
import * as api from '../services/api';
import { useNavigate, useParams, useLocation } from 'react-router-dom'; // Tambahkan useLocation

const ManageBread = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation(); // Ambil location
  // Ambil fungsi refetchBreads dari state
  const refetchBreads = location.state?.refetchBreads;

  const [form, setForm] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchBread = async () => {
        try {
          setLoading(true);
          const bread = await api.getBreadById(id);
          setForm(bread);
        } catch (err) {
          alert("Gagal memuat data produk: " + err.message);
          console.error(err);
          navigate('/breads');
        } finally {
          setLoading(false);
        }
      };
      fetchBread();
    } else {
      setForm({ id: '', name: '', price: '', description: '', image: '' });
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const breadData = {
      ...form,
      price: parseFloat(form.price)
    };

    try {
      if (form.id) {
        await api.updateBread(form.id, breadData);
        alert("Produk berhasil diperbarui!");
      } else {
        await api.addBread(breadData);
        alert("Produk berhasil ditambahkan!");
      }
      setForm({ id: '', name: '', price: '', description: '', image: '' });
      // Panggil fungsi refetchBreads jika tersedia
      if (refetchBreads) {
        refetchBreads();
      }
      navigate('/breads');
    } catch (err) {
      alert("Gagal menyimpan produk: " + err.message);
      console.error(err);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#FFF2DF]">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto bg-creamy-white min-h-screen">
      <h1 className="font-title text-3xl font-bold text-accent-dark mb-6 text-center">
        {form.id ? 'Edit Product' : 'Add Product'}
      </h1>
      <BreadForm
        bread={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isEditing={!!form.id}
      />
    </div>
  );
};

export default ManageBread;