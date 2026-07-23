import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { ArrowUp, GraduationCap, Send, Mail, Globe, MapPin } from 'lucide-react';

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
          
          {/* Column 1: Brand & Contact */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <GraduationCap className="logo-icon text-indigo" size={22} style={{ color: 'var(--color-accent)' }} />
              <span>SharePoint Academy</span>
            </div>
            <p className="footer-bio">
              Empowering workforce productivity, intranet excellence, and automated governance under the IT Department.
            </p>
            <div className="contact-details-list">
              <div className="contact-item">
                <Mail size={14} className="contact-icon" />
                <span>academy@sharepoint-it.com</span>
              </div>
              <div className="contact-item">
                <Globe size={14} className="contact-icon" />
                <span>it-portal.sharepoint.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Training Tracks</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Academy Home</a></li>
              <li><a href="#staff">Instructors</a></li>
              <li><a href="#carousel">Course Curriculum</a></li>
              <li><a href="#features">Program Advantages</a></li>
            </ul>
          </div>

          {/* Column 3: Corporate Resources */}
          <div className="footer-col">
            <h4 className="footer-col-title">IT Resources</h4>
            <ul className="footer-links-list">
              <li><a href="#">SharePoint Sandbox Request</a></li>
              <li><a href="#">IT Governance Policies</a></li>
              <li><a href="#">Design Asset Library</a></li>
              <li><a href="#">Support Ticket Center</a></li>
            </ul>
          </div>

          {/* Column 4: Feedback Signup */}
          <div className="footer-col feedback-col">
            <h4 className="footer-col-title">Get Academy Updates</h4>
            <p className="feedback-desc">Receive notifications about new courses, sandboxes, and workshop schedules.</p>
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
            &copy; {new Date().getFullYear()} SharePoint Academy - IT Department. All rights reserved.
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
