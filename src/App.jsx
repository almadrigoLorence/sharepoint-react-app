import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Staff from './components/Staff';
import Carousel from './components/Carousel';
import Features from './components/Features';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      {/* Background Scroll-Drawing Line */}
      <div className="scroll-drawing-line-container">
        <div 
          className="scroll-drawing-line-active" 
          style={{ height: `${scrollPercent}%` }} 
        />
      </div>

      {/* Sticky Header with Scroll Indicator */}
      <Header />

      <main>
        {/* SharePoint Academy Hero Section */}
        <Hero />

        {/* Academy Instructors / Staff Grid (Div appearing from right on scroll) */}
        <Staff />

        {/* Dynamic Course Curriculum Showcase Slider */}
        <Carousel />

        {/* Academy Program Advantages Grid */}
        <Features />
      </main>

      {/* Dark Slate Information Footer */}
      <Footer />
    </div>
  );
}

export default App;
