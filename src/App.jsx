import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Guidebook from './components/Guidebook';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="app-container">
      <div className="background-grid"></div>
      <Hero />
      <Guidebook />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
