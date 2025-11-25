// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Chef Antonio",
      role: "Head Baker",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300",
      description: "20 tahun pengalaman dalam seni membuat roti artisan"
    },
    {
      name: "Maria Santos",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300",
      description: "Spesialis pastry dan kue-kue manis"
    },
    {
      name: "Budi Hartono",
      role: "Master Baker",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      description: "Ahli dalam roti tradisional Indonesia"
    }
  ];

  const values = [
    {
      icon: "🌾",
      title: "Bahan Berkualitas",
      description: "Kami hanya menggunakan bahan-bahan premium dan segar untuk setiap produk"
    },
    {
      icon: "❤️",
      title: "Dibuat dengan Cinta",
      description: "Setiap roti dibuat dengan penuh dedikasi dan perhatian terhadap detail"
    },
    {
      icon: "🌅",
      title: "Segar Setiap Hari",
      description: "Semua produk dipanggang segar setiap pagi untuk menjamin kualitas terbaik"
    },
    {
      icon: "🌿",
      title: "Ramah Lingkungan",
      description: "Komitmen kami terhadap keberlanjutan dan penggunaan kemasan ramah lingkungan"
    }
  ];

  const milestones = [
    { year: "2010", event: "BIT Bakery didirikan di sebuah dapur kecil" },
    { year: "2013", event: "Membuka toko pertama di pusat kota" },
    { year: "2016", event: "Memenangkan penghargaan Best Artisan Bakery" },
    { year: "2019", event: "Ekspansi ke 3 cabang baru" },
    { year: "2023", event: "Meluncurkan layanan pemesanan online" },
    { year: "2025", event: "Merayakan 15 tahun melayani pelanggan setia" }
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-pastel/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-warm-beige/20 rounded-full text-secondary text-sm mb-6">
              <span>🏠</span>
              <span>Tentang Kami</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-dark font-title mb-6">
              Kisah Kami
            </h1>
            <p className="text-lg text-secondary leading-relaxed">
              Sejak 2010, BIT Bakery telah menjadi bagian dari komunitas dengan misi 
              sederhana: menciptakan roti dan pastry terbaik menggunakan bahan-bahan 
              berkualitas tinggi dan resep tradisional yang telah diwariskan turun-temurun.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-accent-dark mb-6">
                Dari Dapur Kecil Menuju Toko Impian
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  BIT Bakery dimulai dari sebuah dapur kecil di rumah nenek kami. 
                  Dengan resep rahasia yang telah diturunkan selama tiga generasi, 
                  kami memulai perjalanan untuk berbagi kelezatan roti artisan 
                  dengan komunitas kami.
                </p>
                <p>
                  Nama "BIT" berasal dari filosofi kami: <strong>Baked with Integrity and Tradition</strong>. 
                  Setiap gigitan roti kami mengandung integritas dalam pemilihan bahan 
                  dan tradisi dalam proses pembuatannya.
                </p>
                <p>
                  Hari ini, kami bangga telah menjadi destinasi favorit bagi pecinta 
                  roti di kota ini, dengan ratusan pelanggan setia yang datang 
                  setiap hari untuk menikmati kreasi terbaru kami.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600"
                  alt="Bakery Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent-dark text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm opacity-80">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-dark mb-4">Nilai-Nilai Kami</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi setiap produk yang kami buat
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-accent-dark mb-2">{value.title}</h3>
                <p className="text-sm text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-dark mb-4">Perjalanan Kami</h2>
            <p className="text-secondary">Milestone penting dalam sejarah BIT Bakery</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-warm-beige/50"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="inline-block bg-cream-pastel/50 px-6 py-4 rounded-2xl">
                      <div className="text-xl font-bold text-accent-dark">{milestone.year}</div>
                      <div className="text-secondary text-sm">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-accent-dark rounded-full border-4 border-cream-pastel z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-dark mb-4">Tim Kami</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Para ahli di balik setiap roti lezat yang kami buat
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg text-accent-dark">{member.name}</h3>
                  <p className="text-warm-beige font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-secondary text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ingin Mencoba Roti Kami?
          </h2>
          <p className="text-white/80 mb-8">
            Kunjungi toko kami atau pesan langsung melalui website
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/breads"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-accent-dark rounded-full font-medium hover:bg-cream-pastel transition-colors"
            >
              <span>🥖</span>
              Lihat Produk
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              <span>📍</span>
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

