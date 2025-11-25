// src/components/BreadCard.jsx
import React, { useState } from "react";

const BreadCard = ({ bread, onEdit, onDelete }) => {
  const { name, price, image, description } = bread;
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
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-cream-pastel/50 flex items-center justify-center">
            <span className="text-6xl">🥖</span>
          </div>
        )}
        
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <span className="text-accent-dark font-bold text-sm">
            {formatPrice(price)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg text-accent-dark mb-2 group-hover:text-warm-beige transition-colors">
          {name}
        </h3>
        <p className="text-secondary text-sm line-clamp-2 flex-grow">
          {description || "Deskripsi tidak tersedia"}
        </p>
      </div>

      {/* Actions */}
      <div className="px-5 pb-5 pt-2 flex gap-3">
        <button
          onClick={() => onEdit(bread)}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-cream-pastel/50 text-accent-dark rounded-xl font-medium hover:bg-cream-pastel transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit
        </button>
        <button
          onClick={() => onDelete(bread)}
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

export default BreadCard;
