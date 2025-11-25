// src/components/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path === "/breads" && (location.pathname === "/breads" || location.pathname.startsWith("/manage-bread"))) return true;
    if (path !== "/" && path !== "/breads") return location.pathname === path;
    return false;
  };

  const navLinks = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/breads", label: "Breads", icon: "🍞" },
    { path: "/pastries", label: "Pastries", icon: "🥐" },
    { path: "/about", label: "About", icon: "ℹ️" },
    { path: "/contact", label: "Contact", icon: "📞" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-warm-beige to-accent-dark rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white text-xl">🍞</span>
            </div>
            <div>
              <span className="text-xl font-bold text-accent-dark">BIT Bakery</span>
              <p className="text-xs text-secondary hidden sm:block">Fresh & Delicious</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-cream-pastel text-accent-dark"
                    : "text-secondary hover:text-accent-dark hover:bg-cream-pastel/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link to="/manage-bread" className="hidden sm:block">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-accent-dark text-white rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md shadow-accent-dark/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Tambah</span>
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-cream-pastel/50 transition-colors"
            >
              <svg className="w-6 h-6 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-cream-pastel pb-4 animate-in">
            <nav className="flex flex-col space-y-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? "bg-cream-pastel text-accent-dark"
                      : "text-secondary hover:text-accent-dark hover:bg-cream-pastel/50"
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              <Link
                to="/manage-bread"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 mx-4 mt-2 py-3 bg-accent-dark text-white rounded-xl font-medium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Tambah Produk
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
