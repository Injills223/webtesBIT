// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import BreadList from "../components/BreadList";
import DeleteConfirmation from "../components/DeleteConfirmation";
import * as api from "../services/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [breads, setBreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteModal, setDeleteModal] = useState({ show: false, bread: null });
  const navigate = useNavigate();

  const fetchBreads = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getBreads();
      setBreads(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBreads();
  }, []);

  const handleDelete = (bread) => {
    setDeleteModal({ show: true, bread });
  };

  const confirmDelete = async () => {
    if (!deleteModal.bread) return;
    
    try {
      await api.deleteBread(deleteModal.bread.id);
      setDeleteModal({ show: false, bread: null });
      fetchBreads();
    } catch (err) {
      setError(err.message);
    }
  };

  const cancelDelete = () => {
    setDeleteModal({ show: false, bread: null });
  };

  const handleEdit = (bread) => {
    navigate(`/manage-bread/${bread.id}`);
  };

  const handleAdd = () => {
    navigate("/manage-bread");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-creamy-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-warm-beige border-t-accent-dark rounded-full animate-spin"></div>
          <span className="text-secondary font-medium">Memuat produk...</span>
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
            onClick={fetchBreads}
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
        <BreadList 
          breads={breads} 
          onEdit={handleEdit} 
          onDelete={handleDelete}
          onAdd={handleAdd}
        />
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModal.show && (
        <DeleteConfirmation
          productName={deleteModal.bread?.name}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </main>
  );
};

export default Home;
