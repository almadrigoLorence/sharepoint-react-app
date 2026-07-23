import React, { useState, useEffect, useRef } from 'react';
import AnimatedContainer from './AnimatedContainer';
import { ChevronLeft, ChevronRight, Share2, BookOpen, Clock, Award } from 'lucide-react';

const COURSES = [
  {
    id: 1,
    category: "FOUNDATIONS",
    title: "Modern Site Architecture & UX",
    description: "Learn to design responsive intranet pages, structure navigation hierarchies, and build custom web parts. Establish a professional organizational layout.",
    colorClass: "carousel-grad-purple",
    duration: "4 hours",
    lectures: "12 labs",
    badge: "Beginner"
  },
  {
    id: 2,
    category: "AUTOMATION",
    title: "Intelligent Workflows & Lists",
    description: "Connect lists to automated approval pipelines. Construct Power Automate flows that trigger notifications and sync data across libraries.",
    colorClass: "carousel-grad-blue",
    duration: "6 hours",
    lectures: "18 labs",
    badge: "Intermediate"
  },
  {
    id: 3,
    category: "SECURITY",
    title: "Enterprise Governance & Security",
    description: "Manage group inheritances, secure documents from unauthorized sharing, and configure tenant data protection rules. Keep corporate libraries compliant.",
    colorClass: "carousel-grad-teal",
    duration: "3 hours",
    lectures: "8 labs",
    badge: "Advanced"
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % COURSES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + COURSES.length) % COURSES.length);
  };

  // Autoplay logic
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(nextSlide, 6000); // Change slide every 6 seconds
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  return (
    <section id="carousel" className="carousel-section">
      <div className="carousel-wrapper-container">
        <AnimatedContainer animationType="fade-up" className="section-header">
          <span className="section-subtitle">FEATURED CURRICULUM</span>
          <h2 className="section-title">Core Training Tracks</h2>
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
            {COURSES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div 
                  key={slide.id} 
                  className={`slide-item ${slide.colorClass} ${isActive ? 'active' : ''}`}
                >
                  <div className="slide-content-grid">
                    {/* Left Info Panel */}
                    <div className="slide-info-panel">
                      <span className="slide-badge">{slide.category}</span>
                      <h3 className="slide-title">{slide.title}</h3>
                      <p className="slide-description">{slide.description}</p>
                      
                      {/* Meta information */}
                      <div className="slide-meta-row">
                        <div className="meta-item">
                          <Clock size={14} />
                          <span>{slide.duration}</span>
                        </div>
                        <div className="meta-item">
                          <BookOpen size={14} />
                          <span>{slide.lectures}</span>
                        </div>
                        <div className="meta-item">
                          <Award size={14} />
                          <span>{slide.badge}</span>
                        </div>
                      </div>

                      <div className="slide-actions">
                        <button className="slide-primary-btn">
                          <span>Start Course</span>
                          <ChevronRight size={16} />
                        </button>
                        <button className="slide-icon-btn" aria-label="Share">
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Right Visual Panel */}
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
            <ChevronLeft size={22} />
          </button>
          
          <button 
            className="carousel-arrow next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>

          {/* Bullet Indicators */}
          <div className="carousel-indicators">
            {COURSES.map((_, index) => (
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
