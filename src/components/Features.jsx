import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { Zap, ShieldCheck, Palette, Monitor, Cpu, Activity } from 'lucide-react';

const FEATURES = [
  {
    id: 1,
    icon: <Zap size={22} className="feat-icon-purple" />,
    title: "Instant Performance",
    description: "Built on Vite + React. Standard page loads take less than 1 second, avoiding the heavy bootstrap overhead of typical legacy intranet pages."
  },
  {
    id: 2,
    icon: <ShieldCheck size={22} className="feat-icon-blue" />,
    title: "Enterprise Grade",
    description: "Runs fully client-side. Inherits native SharePoint document permissions, data security rules, and user-tenant authentication scopes."
  },
  {
    id: 3,
    icon: <Palette size={22} className="feat-icon-teal" />,
    title: "Custom Brand Kit",
    description: "Designed using CSS variable tokens. Easily configure colors, fonts, margins, and borders to align exactly with your organization's style guide."
  },
  {
    id: 4,
    icon: <Monitor size={22} className="feat-icon-indigo" />,
    title: "Responsive Grid",
    description: "Adaptive layouts render beautifully across corporate laptops, iPads, and mobile screens. Perfect for on-the-go communications."
  },
  {
    id: 5,
    icon: <Cpu size={22} className="feat-icon-pink" />,
    title: "Interactive Widgets",
    description: "Includes modules for real-time document search, announcement tracking, and system state monitors. Engaging tools to boost portal interactions."
  },
  {
    id: 6,
    icon: <Activity size={22} className="feat-icon-orange" />,
    title: "Fluid Animations",
    description: "Built-in scroll-driven transition parameters. Elements dynamically scale, slide, and fade depending on their visibility viewport."
  }
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        
        {/* Section Header */}
        <AnimatedContainer animationType="fade-up" className="section-header">
          <span className="section-subtitle">CAPABILITIES</span>
          <h2 className="section-title">Why Modern Teams Prefer This</h2>
          <div className="section-divider" />
        </AnimatedContainer>

        {/* Features Staggered Grid */}
        <AnimatedContainer 
          animationType="stagger" 
          threshold={0.05} 
          className="features-grid"
        >
          {FEATURES.map((feat) => (
            <div key={feat.id} className="animate-on-scroll fade-up feat-card glow-card">
              <div className="feat-card-inner">
                <div className="feat-icon-container">
                  {feat.icon}
                </div>
                <h3 className="feat-card-title">{feat.title}</h3>
                <p className="feat-card-desc">{feat.description}</p>
                <div className="feat-card-border-line" />
              </div>
            </div>
          ))}
        </AnimatedContainer>

      </div>
    </section>
  );
}
