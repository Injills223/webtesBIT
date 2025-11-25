// src/pages/ManageBread.jsx
import React, { useState, useEffect } from 'react';
import BreadForm from '../components/BreadForm';
import * as api from '../services/api';
import { useNavigate, useParams, Link } from 'react-router-dom';

const ManageBread = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchBread = async () => {
        try {
          setLoading(true);
          const bread = await api.getBreadById(id);
          setForm({
            name: bread.name || '',
            price: bread.price?.toString() || '',
            description: bread.description || '',
            image: bread.image || ''
          });
        } catch (err) {
          alert("Gagal memuat data produk: " + err.message);
          navigate('/');
        } finally {
          setLoading(false);
        }
      };
      fetchBread();
    } else {
      // Reset form for new product
      setForm({ name: '', price: '', description: '', image: '' });
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (saving) return;

    // Validation
    if (!form.name.trim()) {
      alert('Nama produk harus diisi!');
      return;
    }
    if (!form.price || parseFloat(form.price) <= 0) {
      alert('Harga harus lebih dari 0!');
      return;
    }
    if (!form.image.trim()) {
      alert('URL gambar harus diisi!');
      return;
    }

    const breadData = {
      name: form.name.trim(),
      price: parseFloat(form.price),
      description: form.description.trim(),
      image: form.image.trim()
    };

    try {
      setSaving(true);
      if (isEditing) {
        await api.updateBread(id, breadData);
        alert("Produk berhasil diperbarui!");
      } else {
        await api.addBread(breadData);
        alert("Produk berhasil ditambahkan!");
      }
      navigate('/');
    } catch (err) {
      alert("Gagal menyimpan produk: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-creamy-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-warm-beige border-t-accent-dark rounded-full animate-spin"></div>
          <span className="text-secondary font-medium">Memuat data...</span>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-grow py-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-secondary hover:text-accent-dark transition-colors">
                Home
              </Link>
            </li>
            <li className="text-secondary">/</li>
            <li className="text-accent-dark font-medium">
              {isEditing ? 'Edit Produk' : 'Tambah Produk'}
            </li>
          </ol>
        </nav>

        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-accent-dark font-title mb-2">
            {isEditing ? 'Edit Produk' : 'Tambah Produk Baru'}
          </h1>
          <p className="text-secondary">
            {isEditing 
              ? 'Perbarui informasi produk roti Anda' 
              : 'Tambahkan produk roti baru ke katalog'}
          </p>
        </div>

        {/* Form */}
        <BreadForm
          bread={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isEditing={isEditing}
          isSaving={saving}
        />
      </div>
    </main>
  );
};

export default ManageBread;
