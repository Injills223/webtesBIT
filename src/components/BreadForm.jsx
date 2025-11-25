// src/components/BreadForm.jsx
import React, { useState } from "react";

const BreadForm = ({ bread, onChange, onSubmit, onCancel, isEditing, isSaving }) => {
  const [previewError, setPreviewError] = useState(false);

  const handleImageChange = (e) => {
    setPreviewError(false);
    onChange(e);
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
      <div className="space-y-6">
        {/* Image Preview */}
        <div className="relative">
          <label className="block text-accent-dark font-medium mb-3">Preview Gambar</label>
          <div className="aspect-video w-full bg-cream-pastel/30 rounded-xl overflow-hidden flex items-center justify-center">
            {bread.image && !previewError ? (
              <img
                src={bread.image}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={() => setPreviewError(true)}
              />
            ) : (
              <div className="text-center p-8">
                <span className="text-6xl mb-2 block">📷</span>
                <p className="text-secondary text-sm">
                  {bread.image ? "URL gambar tidak valid" : "Masukkan URL gambar untuk melihat preview"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-accent-dark font-medium mb-2">
            URL Gambar <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            name="image"
            value={bread.image}
            onChange={handleImageChange}
            placeholder="https://example.com/gambar-roti.jpg"
            className="w-full p-3 border-2 border-warm-beige/30 rounded-xl focus:border-warm-beige focus:outline-none focus:ring-2 focus:ring-warm-beige/20 transition-all"
            required
          />
        </div>

        {/* Name and Price Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-accent-dark font-medium mb-2">
              Nama Produk <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={bread.name}
              onChange={onChange}
              placeholder="Croissant Classic"
              className="w-full p-3 border-2 border-warm-beige/30 rounded-xl focus:border-warm-beige focus:outline-none focus:ring-2 focus:ring-warm-beige/20 transition-all"
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
              value={bread.price}
              onChange={onChange}
              placeholder="25000"
              className="w-full p-3 border-2 border-warm-beige/30 rounded-xl focus:border-warm-beige focus:outline-none focus:ring-2 focus:ring-warm-beige/20 transition-all"
              required
              min="0"
              step="100"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-accent-dark font-medium mb-2">
            Deskripsi
          </label>
          <textarea
            name="description"
            value={bread.description}
            onChange={onChange}
            placeholder="Croissant renyah dengan lapisan butter yang lembut..."
            className="w-full p-3 border-2 border-warm-beige/30 rounded-xl focus:border-warm-beige focus:outline-none focus:ring-2 focus:ring-warm-beige/20 transition-all resize-none"
            rows="4"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="submit"
            disabled={isSaving}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-accent-dark text-white rounded-xl font-medium hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent-dark/20"
          >
            {isSaving ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Menyimpan...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{isEditing ? "Perbarui Produk" : "Simpan Produk"}</span>
              </>
            )}
          </button>
          <button
            type="button"
            onClick={onCancel}
            disabled={isSaving}
            className="flex-1 py-3 px-6 bg-transparent border-2 border-warm-beige/50 text-accent-dark rounded-xl font-medium hover:bg-warm-beige/10 transition-all disabled:opacity-50"
          >
            Batal
          </button>
        </div>
      </div>
    </form>
  );
};

export default BreadForm;
