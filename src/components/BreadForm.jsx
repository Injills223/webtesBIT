// src/components/BreadForm.jsx
import React from "react";

const BreadForm = ({ bread, onChange, onSubmit, isEditing }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded-xl shadow-soft mb-8"
    >
      <h2 className="font-title text-xl font-semibold text-accent-dark mb-4">
        {isEditing ? "Edit" : "Add"} Product
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-secondary mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={bread.name}
            onChange={onChange}
            className="w-full p-2 border border-secondary rounded"
            required
          />
        </div>
        <div>
          <label className="block text-secondary mb-1">Price (Rp.)</label>
          <input
            type="number"
            name="price"
            value={bread.price}
            onChange={onChange}
            className="w-full p-2 border border-secondary rounded"
            required
            min="0"
            step="0.01"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-secondary mb-1">Image URL</label>
        <input
          type="text"
          name="image"
          value={bread.image}
          onChange={onChange}
          className="w-full p-2 border border-secondary rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-secondary mb-1">Description</label>
        <textarea
          name="description"
          value={bread.description}
          onChange={onChange}
          className="w-full p-2 border border-secondary rounded"
          rows="3"
        ></textarea>
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-accent-dark text-white rounded hover:bg-[#2C1815]"
        >
          {isEditing ? "Update" : "Add"} Product
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={() => onChange({ target: { name: "id", value: "" } })} // Reset ID untuk membatalkan edit
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default BreadForm;
