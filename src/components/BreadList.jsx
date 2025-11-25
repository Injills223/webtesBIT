// src/components/BreadList.jsx
import React from "react";
import BreadCard from "./BreadCard";

const BreadList = ({ breads, onEdit, onDelete }) => {
  return (
    <>
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3E2522] font-['Dancing_Script',cursive] mb-2">
          Daftar Produk Roti
        </h1>
        <p className="text-[#8C6E63] text-sm md:text-base">
          Freshly baked with love, just for you.
        </p>
      </div>

      {/* Search Bar (opsional untuk sekarang) */}
      <div className="max-w-md mx-auto mb-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for your favorite loaf..."
            className="w-full py-3 px-4 pl-10 rounded-full border border-[#D3A376] focus:outline-none focus:ring-2 focus:ring-[#8C6E63] bg-white"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#8C6E63]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {breads && breads.length > 0 ? (
          breads.map((bread) => (
            <BreadCard
              key={bread.id}
              bread={bread}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-[#8C6E63]">
            Tidak ada produk roti ditemukan.
          </div>
        )}
      </div>

      {/* Pagination (opsional untuk sekarang) */}
      {/* ... (kode pagination dari sebelumnya) ... */}
    </>
  );
};

export default BreadList;
