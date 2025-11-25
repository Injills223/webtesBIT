// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ManageBread from './pages/ManageBread';
import Pastries from './pages/Pastries';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-creamy-white font-display text-secondary flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breads" element={<Home />} />
          <Route path="/manage-bread" element={<ManageBread />} />
          <Route path="/manage-bread/:id" element={<ManageBread />} />
          <Route path="/pastries" element={<Pastries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
