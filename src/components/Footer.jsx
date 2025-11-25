// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#D3A376] py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* Ganti dengan ikon sebenarnya jika ada */}
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
            <span className="text-lg font-bold text-[#3E2522]">BIT Bakery</span>
          </div>
          <p className="text-sm text-[#8C6E63]">
            Crafted with love, baked fresh daily.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#3E2522] mb-4">Hours</h4>
          <p className="text-sm text-[#8C6E63]">
            Tuesday – Sunday
            <br />
            7:00 AM – 4:00 PM
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#3E2522] mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-sm text-[#8C6E63]">
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-[#D3A376] text-center text-xs text-[#8C6E63]">
        © 2025 Artisan Bakery. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
