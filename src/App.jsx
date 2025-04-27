import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PortfolioDetails from './pages/PortfolioDetails';
import ServiceDetails from './pages/ServiceDetails';
import StarterPage from './pages/StarterPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/starter-page" element={<StarterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
