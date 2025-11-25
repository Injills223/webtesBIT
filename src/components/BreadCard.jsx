// src/components/BreadCard.jsx
import React from "react";

const BreadCard = ({ bread, onEdit, onDelete }) => {
  const { id, name, price, image, description } = bread;

  // Tambahkan log untuk debugging
  console.log("BreadCard menerima bread:", bread);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-[#3E2522]">{name}</h3>
        <p className="text-[#8C6E63] text-sm mt-1">Rp.{price.toFixed(2)}</p>
        <p className="text-[#8C6E63] text-xs mt-1 line-clamp-2">
          {description}
        </p>
      </div>
      <div className="p-4 border-t border-cream-pastel flex justify-between">
        <button
          // Pastikan onEdit dipanggil dengan objek bread
          onClick={() => onEdit(bread)}
          className="text-sm px-3 py-1 bg-secondary text-white rounded hover:bg-[#7A5D54]"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BreadCard;
