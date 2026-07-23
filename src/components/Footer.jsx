import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { ArrowUp, Sparkles, Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="footer-section">
      <div className="footer-container">
        
        {/* Main Footer Content */}
        <AnimatedContainer animationType="fade-up" className="footer-main-grid">
          
          {/* Column 1: Brand & Bio */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <Sparkles className="logo-icon text-indigo" size={18} />
              <span>SharePoint Hub</span>
            </div>
            <p className="footer-bio">
              Empowering organization-wide communication and document discovery through cutting-edge front-end engineering.
            </p>
            <div className="contact-details-list">
              <div className="contact-item">
                <Mail size={14} className="contact-icon" />
                <span>support@sharepointhub.com</span>
              </div>
              <div className="contact-item">
                <Phone size={14} className="contact-icon" />
                <span>+1 (555) 019-2834</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Workspace Home</a></li>
              <li><a href="#carousel">Featured Galleries</a></li>
              <li><a href="#features">Platform Features</a></li>
              <li><a href="https://admin.microsoft.com" target="_blank" rel="noopener noreferrer">M365 Admin Portal</a></li>
            </ul>
          </div>

          {/* Column 3: Corporate Resources */}
          <div className="footer-col">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links-list">
              <li><a href="#">Security Guidelines</a></li>
              <li><a href="#">Brand Identity Kit</a></li>
              <li><a href="#">Compliance Center</a></li>
              <li><a href="#">System Diagnostics</a></li>
            </ul>
          </div>

          {/* Column 4: Feedback Signup */}
          <div className="footer-col feedback-col">
            <h4 className="footer-col-title">Get Workspace Updates</h4>
            <p className="feedback-desc">Subscribe to get notifications on server maintenance, updates, and templates.</p>
            <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter work email..." 
                className="footer-input"
                required 
              />
              <button type="submit" className="footer-form-submit-btn" aria-label="Subscribe">
                <Send size={14} />
              </button>
            </form>
          </div>

        </AnimatedContainer>

        {/* Footer Sub-Bar */}
        <div className="footer-sub-bar-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} SharePoint Hub. All rights reserved.
          </p>
          <div className="footer-sub-links">
            <a href="#">Privacy Policy</a>
            <span className="dot-divider">&middot;</span>
            <a href="#">Terms of Use</a>
          </div>
          
          {/* Back to Top */}
          <button 
            className="back-to-top-btn pulse-hover" 
            onClick={scrollToTop}
            aria-label="Back to Top"
          >
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
