import React, { useState, useEffect } from 'react';
import { LayoutGrid, Menu, X, Globe, Sparkles, Send } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change header appearance after scrolling 20px
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Indicator */}
      <div className="scroll-indicator-line" style={{ width: `${scrollProgress}%` }} />

      <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          {/* Logo */}
          <div className="logo-section">
            <div className="logo-icon-wrapper">
              <Sparkles className="logo-icon animate-pulse" size={20} />
            </div>
            <span className="logo-text">SharePoint Hub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#carousel" className="nav-link">Gallery</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#footer" className="nav-link">Contact</a>
          </nav>

          {/* Action Button */}
          <div className="header-actions">
            <button className="cta-button">
              <span>Explore Portal</span>
              <Globe size={16} />
            </button>
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-links">
            <a href="#hero" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#carousel" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
            <a href="#features" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#footer" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <button className="mobile-cta-button" onClick={() => setMobileMenuOpen(false)}>
              <span>Explore Portal</span>
              <Globe size={16} />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
