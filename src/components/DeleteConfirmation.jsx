import React from 'react';

const DeleteConfirmation = ({ productName, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4">
      <div className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-creamy-white/90 shadow-2xl shadow-secondary/20 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-cream-pastel/50">
            <span className="material-symbols-outlined text-5xl text-warm-beige">
              delete_outline
            </span>
          </div>
          <h3 className="font-display text-4xl text-accent-dark pb-3">Konfirmasi Hapus</h3>
          <p className="text-secondary text-base font-normal leading-relaxed pb-8">
            Apakah Anda yakin ingin menghapus produk <b>'{productName}'</b>? Tindakan ini tidak dapat dibatalkan.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 pt-4 sm:flex-row">
            <button
              onClick={onCancel}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-transparent text-accent-dark text-base font-bold leading-normal tracking-wide w-full border-2 border-warm-beige/50 hover:bg-warm-beige/20 transition-colors"
            >
              <span className="truncate">Batal</span>
            </button>
            <button
              onClick={onConfirm}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-accent-dark text-white text-base font-bold leading-normal tracking-wide w-full hover:bg-opacity-90 transition-opacity shadow-lg shadow-accent-dark/30"
            >
              <span className="truncate">Ya, Hapus</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;