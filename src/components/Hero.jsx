import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { ArrowRight, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Decorative Blur Blobs */}
      <div className="bg-blob blob-purple" />
      <div className="bg-blob blob-blue" />

      <div className="hero-container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-info">
            <AnimatedContainer animationType="fade-up" delay={100} className="badge-container">
              <div className="premium-badge">
                <Sparkles size={12} className="badge-icon" />
                <span>Next-Gen Digital Workspace</span>
              </div>
            </AnimatedContainer>

            <AnimatedContainer animationType="fade-up" delay={200}>
              <h1 className="hero-title">
                Transform Your <span className="gradient-text">SharePoint</span> Experience
              </h1>
            </AnimatedContainer>

            <AnimatedContainer animationType="fade-up" delay={300}>
              <p className="hero-description">
                Experience high-performance visual design directly integrated into your SharePoint tenant. Clean, responsive, and animated for a modern intranet environment.
              </p>
            </AnimatedContainer>

            <AnimatedContainer animationType="fade-up" delay={400} className="hero-actions-wrapper">
              <a href="#features" className="primary-btn pulse-hover">
                <span>Discover Features</span>
                <ArrowRight size={18} />
              </a>
              <a href="#carousel" className="secondary-btn">
                <span>View Gallery</span>
              </a>
            </AnimatedContainer>

            <AnimatedContainer animationType="fade-up" delay={500} className="hero-features-list">
              <div className="hero-feat-item">
                <CheckCircle2 size={16} className="feat-check-icon" />
                <span>Vite + React Core</span>
              </div>
              <div className="hero-feat-item">
                <CheckCircle2 size={16} className="feat-check-icon" />
                <span>Fluid Animations</span>
              </div>
              <div className="hero-feat-item">
                <CheckCircle2 size={16} className="feat-check-icon" />
                <span>SharePoint Ready</span>
              </div>
            </AnimatedContainer>
          </div>

          {/* Hero Right Visuals */}
          <AnimatedContainer animationType="zoom-in" delay={300} className="hero-visual-container">
            <div className="interactive-glass-card">
              <div className="card-header-bar">
                <div className="dot dot-red" />
                <div className="dot dot-yellow" />
                <div className="dot dot-green" />
                <span className="card-window-title">workspace_analytics.tsx</span>
              </div>
              <div className="card-body-content">
                <div className="visual-chart-placeholder">
                  <div className="chart-bar bar-1 animate-grow-height-1" />
                  <div className="chart-bar bar-2 animate-grow-height-2" />
                  <div className="chart-bar bar-3 animate-grow-height-3" />
                  <div className="chart-bar bar-4 animate-grow-height-4" />
                  <div className="chart-bar bar-5 animate-grow-height-5" />
                </div>
                <div className="visual-details">
                  <div className="detail-row">
                    <span className="detail-label">Active Users</span>
                    <span className="detail-val text-green">14,280 (+12%)</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Load Velocity</span>
                    <span className="detail-val text-indigo">0.82s</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Integration State</span>
                    <span className="detail-val status-pill-active">Online</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="visual-float-badge badge-1">
              <div className="float-badge-icon-wrapper purple">
                <Sparkles size={16} />
              </div>
              <div>
                <div className="float-badge-title">Smooth UX</div>
                <div className="float-badge-desc">60 FPS Transitions</div>
              </div>
            </div>
            <div className="visual-float-badge badge-2">
              <div className="float-badge-icon-wrapper blue">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <div className="float-badge-title">SPFx Ready</div>
                <div className="float-badge-desc">Modern Web Part</div>
              </div>
            </div>
          </AnimatedContainer>
        </div>

        {/* Scroll Indicator Arrow */}
        <div className="scroll-indicator-arrow">
          <a href="#carousel" aria-label="Scroll down">
            <ChevronDown size={28} className="scroll-arrow-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
