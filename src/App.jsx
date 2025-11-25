// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ManageBread from './pages/ManageBread';

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
