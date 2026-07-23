import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Features from './components/Features';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="app-wrapper">
      {/* Sticky Header with Scroll Indicator */}
      <Header />

      {/* Main Page Layout Sections */}
      <main>
        {/* Hero Banner with Graphics & CTAs */}
        <Hero />

        {/* Dynamic Showcase Slider */}
        <Carousel />

        {/* Scroll-staggered Capabilities Grid */}
        <Features />
      </main>

      {/* Modern Information Footer */}
      <Footer />
    </div>
  );
}

export default App;
