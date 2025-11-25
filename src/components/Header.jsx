// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-2">
        {/* Ganti dengan ikon sebenarnya jika ada */}
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
        <span className="text-xl font-bold text-[#3E2522]">BIT Bakery</span>
      </div>

      <nav className="hidden md:flex space-x-8 text-sm font-medium text-[#8C6E63]">
        <Link to="/" className="hover:text-[#3E2522]">
          Home
        </Link>
        <Link
          to="/breads"
          className="font-semibold text-[#3E2522] border-b-2 border-[#3E2522]"
        >
          Breads
        </Link>
        <a href="#" className="hover:text-[#3E2522]">
          Pastries
        </a>
        <a href="#" className="hover:text-[#3E2522]">
          About
        </a>
        <a href="#" className="hover:text-[#3E2522]">
          Contact
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <Link to="/manage-bread">
          <button className="px-6 py-3 bg-accent-dark text-white rounded-full font-medium hover:bg-[#2C1815] transition-colors">
            Add Product
          </button>
        </Link>
        <button className="p-2 rounded-full bg-[#FFE0B2] text-[#3E2522] hover:bg-[#D3A376] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10v8a2 2 0 002 2H5a2 2 0 002-2v-8zm5-1a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2h6z"
            />
          </svg>
        </button>
        <button className="md:hidden flex items-center justify-center h-12 w-12">
          <span className="material-symbols-outlined text-3xl text-accent-dark">
            menu
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
