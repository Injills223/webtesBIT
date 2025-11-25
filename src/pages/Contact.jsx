// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setSending(false);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Alamat",
      details: ["Jl. Roti Manis No. 123", "Kota Jakarta Selatan", "Indonesia 12345"]
    },
    {
      icon: "📞",
      title: "Telepon",
      details: ["+62 21 1234 5678", "+62 812 3456 7890"]
    },
    {
      icon: "📧",
      title: "Email",
      details: ["hello@bitbakery.com", "order@bitbakery.com"]
    },
    {
      icon: "🕐",
      title: "Jam Operasional",
      details: ["Selasa - Minggu: 07:00 - 16:00", "Senin: Tutup"]
    }
  ];

  const faqItems = [
    {
      question: "Apakah bisa pesan untuk acara khusus?",
      answer: "Ya, kami menerima pesanan untuk acara khusus seperti pernikahan, ulang tahun, dan corporate event. Silakan hubungi kami minimal 3 hari sebelumnya."
    },
    {
      question: "Apakah ada layanan delivery?",
      answer: "Ya, kami melayani delivery untuk area Jakarta dan sekitarnya. Minimal order Rp 100.000 untuk free delivery dalam radius 5km."
    },
    {
      question: "Bagaimana cara menyimpan roti agar tetap segar?",
      answer: "Simpan roti dalam wadah kedap udara pada suhu ruangan untuk 2-3 hari, atau bekukan untuk penyimpanan lebih lama hingga 1 bulan."
    },
    {
      question: "Apakah ada pilihan untuk diet khusus?",
      answer: "Kami menyediakan beberapa pilihan roti bebas gluten dan vegan. Silakan tanyakan ke staff kami untuk rekomendasi."
    }
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-pastel/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-warm-beige/20 rounded-full text-secondary text-sm mb-6">
              <span>💬</span>
              <span>Hubungi Kami</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-dark font-title mb-6">
              Kontak
            </h1>
            <p className="text-lg text-secondary leading-relaxed">
              Punya pertanyaan atau ingin memesan? Kami siap membantu Anda!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{info.icon}</div>
                <h3 className="font-semibold text-accent-dark mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm text-secondary">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-accent-dark mb-6">
                Kirim Pesan
              </h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Pesan Terkirim!</h3>
                  <p className="text-green-600 mb-4">
                    Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors"
                  >
                    Kirim Pesan Lagi
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-accent-dark font-medium mb-2">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full p-3 border-2 border-warm-beige/30 rounded-xl focus:border-warm-beige focus:outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-accent-dark font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full p-3 border-2 border-warm-beige/30 rounded-xl focus:border-warm-beige focus:outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-accent-dark font-medium mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+62 812 3456 7890"
                        className="w-full p-3 border-2 border-warm-beige/30 rounded-xl focus:border-warm-beige focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-accent-dark font-medium mb-2">
                        Subjek <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-warm-beige/30 rounded-xl focus:border-warm-beige focus:outline-none transition-all bg-white"
                        required
                      >
                        <option value="">Pilih subjek...</option>
                        <option value="order">Pemesanan</option>
                        <option value="inquiry">Pertanyaan Umum</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Kerjasama</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-accent-dark font-medium mb-2">
                      Pesan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tulis pesan Anda di sini..."
                      rows="5"
                      className="w-full p-3 border-2 border-warm-beige/30 rounded-xl focus:border-warm-beige focus:outline-none transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-accent-dark text-white rounded-xl font-medium hover:bg-opacity-90 transition-all disabled:opacity-50 shadow-lg shadow-accent-dark/20"
                  >
                    {sending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Mengirim...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Kirim Pesan</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-2xl font-bold text-accent-dark mb-6">
                Lokasi Kami
              </h2>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                {/* Map placeholder - bisa diganti dengan Google Maps embed */}
                <div className="aspect-video bg-gradient-to-br from-cream-pastel to-warm-beige/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-32 h-32 border-2 border-accent-dark/30 rounded-full"></div>
                    <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-accent-dark/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 border-2 border-accent-dark/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-accent-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <span className="text-3xl">📍</span>
                    </div>
                    <p className="text-accent-dark font-medium">BIT Bakery</p>
                    <p className="text-secondary text-sm">Jakarta Selatan</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-accent-dark mb-2">Cara Menuju Lokasi</h3>
                  <ul className="text-sm text-secondary space-y-2">
                    <li className="flex items-start gap-2">
                      <span>🚇</span>
                      <span>MRT: Stasiun Blok M, lalu jalan kaki 5 menit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>🚌</span>
                      <span>TransJakarta: Halte Blok M, lalu jalan kaki 3 menit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>🚗</span>
                      <span>Parkir tersedia di basement gedung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-dark mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-secondary">
              Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <details
                key={index}
                className="group bg-cream-pastel/30 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-medium text-accent-dark pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 w-8 h-8 bg-accent-dark/10 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <svg className="w-4 h-4 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-secondary">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-accent-dark to-secondary rounded-3xl p-8 md:p-12 text-center text-white">
            <span className="text-4xl mb-4 block">📬</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Dapatkan Update Terbaru
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Berlangganan newsletter kami untuk mendapatkan info promo, 
              produk baru, dan tips seputar roti langsung di inbox Anda.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-xl text-accent-dark focus:outline-none focus:ring-2 focus:ring-cream-pastel"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-cream-pastel text-accent-dark rounded-xl font-medium hover:bg-white transition-colors"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

