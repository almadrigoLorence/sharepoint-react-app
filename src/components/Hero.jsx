import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { ArrowRight, BookOpen, ChevronDown, CheckCircle2, Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Light Blur Background Blobs */}
      <div className="bg-blob blob-purple" />
      <div className="bg-blob blob-blue" />

      <div className="hero-container">
        <div className="hero-grid">
          {/* Hero Left Info */}
          <div className="hero-info">
            <AnimatedContainer animationType="fade-up" delay={100} className="badge-container">
              <div className="premium-badge">
                <BookOpen size={13} className="badge-icon" />
                <span>IT Training & Certifications</span>
              </div>
            </AnimatedContainer>

            <AnimatedContainer animationType="fade-up" delay={200}>
              <h1 className="hero-title">
                Master Your <span className="gradient-text">SharePoint</span> Workspace
              </h1>
            </AnimatedContainer>

            <AnimatedContainer animationType="fade-up" delay={300}>
              <p className="hero-description">
                Welcome to the SharePoint Academy, hosted by the IT Department. Elevate your collaboration, design stunning intranets, and manage files securely with certified training paths.
              </p>
            </AnimatedContainer>

            <AnimatedContainer animationType="fade-up" delay={400} className="hero-actions-wrapper">
              <a href="#carousel" className="primary-btn pulse-hover">
                <span>View Courses</span>
                <ArrowRight size={18} />
              </a>
              <a href="#staff" className="secondary-btn">
                <span>Meet Instructors</span>
              </a>
            </AnimatedContainer>

            <AnimatedContainer animationType="fade-up" delay={500} className="hero-features-list">
              <div className="hero-feat-item">
                <CheckCircle2 size={16} className="feat-check-icon" />
                <span>Self-paced Labs</span>
              </div>
              <div className="hero-feat-item">
                <CheckCircle2 size={16} className="feat-check-icon" />
                <span>IT Endorsed</span>
              </div>
              <div className="hero-feat-item">
                <CheckCircle2 size={16} className="feat-check-icon" />
                <span>Earn Badges</span>
              </div>
            </AnimatedContainer>
          </div>

          {/* Hero Right Visual Mockup (Redesigned for Academy stats) */}
          <AnimatedContainer animationType="zoom-in" delay={300} className="hero-visual-container">
            <div className="interactive-glass-card">
              <div className="card-header-bar">
                <div className="dot dot-red" />
                <div className="dot dot-yellow" />
                <div className="dot dot-green" />
                <span className="card-window-title">academy_metrics.json</span>
              </div>
              <div className="card-body-content">
                <div className="visual-chart-placeholder">
                  {/* Completion Rate Chart */}
                  <div className="chart-bar bar-1 animate-grow-height-1" />
                  <div className="chart-bar bar-2 animate-grow-height-2" />
                  <div className="chart-bar bar-3 animate-grow-height-3" />
                  <div className="chart-bar bar-4 animate-grow-height-4" />
                  <div className="chart-bar bar-5 animate-grow-height-5" />
                </div>
                <div className="visual-details">
                  <div className="detail-row">
                    <span className="detail-label">Active Learners</span>
                    <span className="detail-val text-indigo">1,240 enrolled</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Certificates Issued</span>
                    <span className="detail-val text-green">482 this month</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Course Rating</span>
                    <span className="detail-val" style={{ color: 'var(--color-orange)' }}>4.9 / 5.0 ★</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badge 1: Courses count */}
            <div className="visual-float-badge badge-1">
              <div className="float-badge-icon-wrapper purple">
                <BookOpen size={16} />
              </div>
              <div>
                <div className="float-badge-title">12 Core Labs</div>
                <div className="float-badge-desc">SharePoint & Power Automate</div>
              </div>
            </div>

            {/* Floating badge 2: Users support */}
            <div className="visual-float-badge badge-2">
              <div className="float-badge-icon-wrapper blue">
                <Users size={16} />
              </div>
              <div>
                <div className="float-badge-title">Dedicated Staff</div>
                <div className="float-badge-desc">1-on-1 Office Hours</div>
              </div>
            </div>
          </AnimatedContainer>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator-arrow">
          <a href="#staff" aria-label="Scroll to Staff">
            <ChevronDown size={28} className="scroll-arrow-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
