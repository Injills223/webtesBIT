// src/components/BreadList.jsx
import React, { useState } from "react";
import BreadCard from "./BreadCard";

const BreadList = ({ breads, onEdit, onDelete, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter breads based on search term
  const filteredBreads = breads.filter(bread =>
    bread.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bread.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-8 bg-gradient-to-b from-cream-pastel/30 to-transparent rounded-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-beige/20 rounded-full text-secondary text-sm mb-4">
          <span>🥐</span>
          <span>Freshly Baked Daily</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-dark font-title mb-4">
          Koleksi Roti Kami
        </h1>
        <p className="text-secondary text-base md:text-lg max-w-xl mx-auto mb-6">
          Dibuat dengan cinta dan bahan-bahan berkualitas tinggi, 
          dipanggang segar setiap hari untuk Anda.
        </p>
        
        {/* Quick Stats */}
        <div className="flex justify-center gap-8 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-dark">{breads.length}</div>
            <div className="text-sm text-secondary">Produk</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-dark">100%</div>
            <div className="text-sm text-secondary">Fresh</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-dark">⭐ 4.9</div>
            <div className="text-sm text-secondary">Rating</div>
          </div>
        </div>
      </div>

      {/* Search and Add Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            placeholder="Cari roti favorit Anda..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 px-4 pl-12 rounded-full border-2 border-warm-beige/50 focus:border-warm-beige focus:outline-none focus:ring-2 focus:ring-warm-beige/20 bg-white transition-all"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary hover:text-accent-dark"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Add Button */}
        <button
          onClick={onAdd}
          className="flex items-center gap-2 px-6 py-3 bg-accent-dark text-white rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-accent-dark/20 whitespace-nowrap"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Tambah Produk
        </button>
      </div>

      {/* Results Count */}
      {searchTerm && (
        <div className="text-sm text-secondary">
          Menampilkan {filteredBreads.length} dari {breads.length} produk
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBreads.length > 0 ? (
          filteredBreads.map((bread) => (
            <BreadCard
              key={bread.id}
              bread={bread}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className="col-span-full">
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
              <div className="w-20 h-20 bg-cream-pastel/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🍞</span>
              </div>
              <h3 className="text-xl font-semibold text-accent-dark mb-2">
                {searchTerm ? "Tidak ada hasil" : "Belum ada produk"}
              </h3>
              <p className="text-secondary mb-6">
                {searchTerm 
                  ? `Tidak ada produk yang cocok dengan "${searchTerm}"`
                  : "Mulai tambahkan produk roti pertama Anda"}
              </p>
              {!searchTerm && (
                <button
                  onClick={onAdd}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-dark text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Tambah Produk Pertama
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreadList;
