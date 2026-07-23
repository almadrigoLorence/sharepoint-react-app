import React, { useState, useEffect } from 'react';
import { Sparkles, GraduationCap, Award } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Is scrolled
      setIsScrolled(window.scrollY > 20);

      // Scroll progress percentage
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
      {/* Top Scroll Progress Line */}
      <div className="scroll-indicator-line" style={{ width: `${scrollProgress}%` }} />

      <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          {/* Logo & Department Branding */}
          <div className="logo-section">
            <div className="logo-icon-wrapper">
              <GraduationCap className="logo-icon animate-pulse" size={22} />
            </div>
            <div>
              <span className="logo-text">SharePoint Academy</span>
              <span className="department-badge" style={{ marginLeft: '10px' }}>IT Department</span>
            </div>
          </div>

          {/* Simple Department Stats / Status info instead of normal nav */}
          <div className="header-actions">
            <div className="hero-feat-item" style={{ marginRight: '15px' }}>
              <Award size={16} className="feat-check-icon" style={{ color: 'var(--color-primary)' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>IT Certification Program</span>
            </div>
            <button className="cta-button">
              <span>Student Portal</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
