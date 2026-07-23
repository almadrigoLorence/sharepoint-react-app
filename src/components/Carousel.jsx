import React, { useState, useEffect, useRef } from 'react';
import AnimatedContainer from './AnimatedContainer';
import { ChevronLeft, ChevronRight, Share2, Eye, Calendar, User } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    category: "COMMUNICATION",
    title: "Unified Hub & Announcements",
    description: "Broadcast enterprise news, share team events, and centralize important links with high visual impact. Elevate your corporate communication strategy today.",
    colorClass: "carousel-grad-purple",
    views: "2.4k",
    date: "July 22, 2026",
    author: "Global Comms"
  },
  {
    id: 2,
    category: "COLLABORATION",
    title: "High-Velocity Document Vault",
    description: "Access your cloud assets in milliseconds. Fully integrated search systems designed for massive enterprise libraries with modern metadata classification.",
    colorClass: "carousel-grad-blue",
    views: "1.8k",
    date: "July 20, 2026",
    author: "KM Team"
  },
  {
    id: 3,
    category: "ANALYTICS",
    title: "Deep Workspace Intelligence",
    description: "Gain real-time insights into user engagement, document usage patterns, and communication velocity within your SharePoint tenant.",
    colorClass: "carousel-grad-teal",
    views: "940",
    date: "July 18, 2026",
    author: "Analytics Lead"
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Autoplay logic
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  return (
    <section id="carousel" className="carousel-section">
      <div className="carousel-wrapper-container">
        <AnimatedContainer animationType="fade-up" className="section-header">
          <span className="section-subtitle">PROJECT SPOTLIGHT</span>
          <h2 className="section-title">Explore Featured Hubs</h2>
          <div className="section-divider" />
        </AnimatedContainer>

        <AnimatedContainer 
          animationType="zoom-in" 
          delay={200} 
          className="carousel-box"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Slides Area */}
          <div className="slides-container">
            {SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div 
                  key={slide.id} 
                  className={`slide-item ${slide.colorClass} ${isActive ? 'active' : ''}`}
                >
                  <div className="slide-content-grid">
                    {/* Left: Info */}
                    <div className="slide-info-panel">
                      <span className="slide-badge">{slide.category}</span>
                      <h3 className="slide-title">{slide.title}</h3>
                      <p className="slide-description">{slide.description}</p>
                      
                      {/* Meta information */}
                      <div className="slide-meta-row">
                        <div className="meta-item">
                          <Calendar size={14} />
                          <span>{slide.date}</span>
                        </div>
                        <div className="meta-item">
                          <User size={14} />
                          <span>{slide.author}</span>
                        </div>
                        <div className="meta-item">
                          <Eye size={14} />
                          <span>{slide.views} views</span>
                        </div>
                      </div>

                      <div className="slide-actions">
                        <button className="slide-primary-btn">
                          <span>Enter Hub</span>
                          <ChevronRight size={16} />
                        </button>
                        <button className="slide-icon-btn" aria-label="Share">
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Right: Mock UI Graphical Detail */}
                    <div className="slide-visual-panel">
                      <div className="mock-interface-frame">
                        <div className="mock-card">
                          <div className="mock-avatar-row">
                            <div className="mock-avatar animate-pulse" />
                            <div className="mock-lines">
                              <div className="mock-line w-24" />
                              <div className="mock-line w-16" />
                            </div>
                          </div>
                          <div className="mock-body-block">
                            <div className="mock-line w-full" />
                            <div className="mock-line w-full" />
                            <div className="mock-line w-3-4" />
                          </div>
                        </div>
                        <div className="mock-circle-indicator" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <button 
            className="carousel-arrow prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="carousel-arrow next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Bullet Indicators */}
          <div className="carousel-indicators">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
