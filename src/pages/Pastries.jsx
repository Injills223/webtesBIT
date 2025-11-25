// src/pages/Pastries.jsx
import React, { useState, useEffect } from "react";
import DeleteConfirmation from "../components/DeleteConfirmation";
import * as api from "../services/pastryApi";
import { useNavigate } from "react-router-dom";

const PastryCard = ({ pastry, onEdit, onDelete }) => {
  const [imageError, setImageError] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img
            src={pastry.image}
            alt={pastry.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-cream-pastel/50 flex items-center justify-center">
            <span className="text-6xl">🥐</span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <span className="text-accent-dark font-bold text-sm">
            {formatPrice(pastry.price)}
          </span>
        </div>
        {pastry.isNew && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Baru!
          </div>
        )}
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg text-accent-dark mb-2 group-hover:text-warm-beige transition-colors">
          {pastry.name}
        </h3>
        <p className="text-secondary text-sm line-clamp-2 flex-grow">
          {pastry.description || "Deskripsi tidak tersedia"}
        </p>
      </div>

      <div className="px-5 pb-5 pt-2 flex gap-3">
        <button
          onClick={() => onEdit(pastry)}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-cream-pastel/50 text-accent-dark rounded-xl font-medium hover:bg-cream-pastel transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit
        </button>
        <button
          onClick={() => onDelete(pastry)}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-red-50 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Hapus
        </button>
      </div>
    </div>
  );
};

const PastryForm = ({ pastry, onChange, onSubmit, onCancel, isEditing, isSaving }) => {
  const [previewError, setPreviewError] = useState(false);

  const handleImageChange = (e) => {
    setPreviewError(false);
    onChange(e);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-cream-pastel">
          <h2 className="text-xl font-bold text-accent-dark">
            {isEditing ? "Edit Pastry" : "Tambah Pastry Baru"}
          </h2>
        </div>

        <form onSubmit={onSubmit} className="p-6 space-y-4">
          {/* Image Preview */}
          <div className="aspect-video w-full bg-cream-pastel/30 rounded-xl overflow-hidden flex items-center justify-center">
            {pastry.image && !previewError ? (
              <img
                src={pastry.image}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={() => setPreviewError(true)}
              />
            ) : (
              <div className="text-center p-4">
                <span className="text-4xl mb-2 block">🥐</span>
                <p className="text-secondary text-sm">Preview gambar</p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-accent-dark font-medium mb-2">
              URL Gambar <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              name="image"
              value={pastry.image}
              onChange={handleImageChange}
              placeholder="https://example.com/gambar.jpg"
              className="w-full p-3 border-2 border-warm-beige/30 rounded-xl focus:border-warm-beige focus:outline-none transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-accent-dark font-medium mb-2">
                Nama <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={pastry.name}
                onChange={onChange}
                placeholder="Croissant"
                className="w-full p-3 border-2 border-warm-beige/30 rounded-xl focus:border-warm-beige focus:outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-accent-dark font-medium mb-2">
                Harga (Rp) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="price"
                value={pastry.price}
                onChange={onChange}
                placeholder="25000"
                className="w-full p-3 border-2 border-warm-beige/30 rounded-xl focus:border-warm-beige focus:outline-none transition-all"
                required
                min="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-accent-dark font-medium mb-2">Deskripsi</label>
            <textarea
              name="description"
              value={pastry.description}
              onChange={onChange}
              placeholder="Deskripsi produk..."
              rows="3"
              className="w-full p-3 border-2 border-warm-beige/30 rounded-xl focus:border-warm-beige focus:outline-none transition-all resize-none"
            ></textarea>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={isSaving}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent-dark text-white rounded-xl font-medium hover:bg-opacity-90 transition-all disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Menyimpan...</span>
                </>
              ) : (
                <span>{isEditing ? "Perbarui" : "Simpan"}</span>
              )}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-3 border-2 border-warm-beige/50 text-accent-dark rounded-xl font-medium hover:bg-warm-beige/10 transition-all"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Pastries = () => {
  const [pastries, setPastries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingPastry, setEditingPastry] = useState(null);
  const [deleteModal, setDeleteModal] = useState({ show: false, pastry: null });
  const [saving, setSaving] = useState(false);
  
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  const fetchPastries = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getPastries();
      setPastries(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPastries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    setEditingPastry(null);
    setForm({ name: "", price: "", description: "", image: "" });
    setShowForm(true);
  };

  const handleEdit = (pastry) => {
    setEditingPastry(pastry);
    setForm({
      name: pastry.name || "",
      price: pastry.price?.toString() || "",
      description: pastry.description || "",
      image: pastry.image || ""
    });
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;

    const pastryData = {
      name: form.name.trim(),
      price: parseFloat(form.price),
      description: form.description.trim(),
      image: form.image.trim()
    };

    try {
      setSaving(true);
      if (editingPastry) {
        await api.updatePastry(editingPastry.id, pastryData);
      } else {
        await api.addPastry(pastryData);
      }
      setShowForm(false);
      fetchPastries();
    } catch (err) {
      alert("Gagal menyimpan: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = (pastry) => {
    setDeleteModal({ show: true, pastry });
  };

  const confirmDelete = async () => {
    if (!deleteModal.pastry) return;
    try {
      await api.deletePastry(deleteModal.pastry.id);
      setDeleteModal({ show: false, pastry: null });
      fetchPastries();
    } catch (err) {
      setError(err.message);
    }
  };

  const filteredPastries = pastries.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-creamy-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-warm-beige border-t-accent-dark rounded-full animate-spin"></div>
          <span className="text-secondary font-medium">Memuat pastries...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-creamy-white">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-accent-dark mb-2">Terjadi Kesalahan</h2>
          <p className="text-secondary mb-4">{error}</p>
          <button
            onClick={fetchPastries}
            className="px-6 py-2 bg-accent-dark text-white rounded-full hover:bg-opacity-90 transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-grow py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-8 bg-gradient-to-b from-cream-pastel/30 to-transparent rounded-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-beige/20 rounded-full text-secondary text-sm mb-4">
            <span>🥐</span>
            <span>Freshly Baked Pastries</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-dark font-title mb-4">
            Koleksi Pastry
          </h1>
          <p className="text-secondary text-base md:text-lg max-w-xl mx-auto">
            Pastry lezat dengan berbagai varian rasa, dibuat dengan bahan premium
          </p>
        </div>

        {/* Search and Add */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full sm:max-w-md">
            <input
              type="text"
              placeholder="Cari pastry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 px-4 pl-12 rounded-full border-2 border-warm-beige/50 focus:border-warm-beige focus:outline-none bg-white transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-6 py-3 bg-accent-dark text-white rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-accent-dark/20 whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Tambah Pastry
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPastries.length > 0 ? (
            filteredPastries.map((pastry) => (
              <PastryCard
                key={pastry.id}
                pastry={pastry}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <div className="col-span-full">
              <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
                <div className="w-20 h-20 bg-cream-pastel/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🥐</span>
                </div>
                <h3 className="text-xl font-semibold text-accent-dark mb-2">
                  {searchTerm ? "Tidak ada hasil" : "Belum ada pastry"}
                </h3>
                <p className="text-secondary mb-6">
                  {searchTerm
                    ? `Tidak ada pastry yang cocok dengan "${searchTerm}"`
                    : "Mulai tambahkan pastry pertama Anda"}
                </p>
                {!searchTerm && (
                  <button
                    onClick={handleAdd}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-dark text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Tambah Pastry Pertama
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <PastryForm
          pastry={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={() => setShowForm(false)}
          isEditing={!!editingPastry}
          isSaving={saving}
        />
      )}

      {/* Delete Modal */}
      {deleteModal.show && (
        <DeleteConfirmation
          productName={deleteModal.pastry?.name}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteModal({ show: false, pastry: null })}
        />
      )}
    </main>
  );
};

export default Pastries;

