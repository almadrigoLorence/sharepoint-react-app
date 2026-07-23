import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { BookOpen, ShieldAlert, BadgeCheck, MessageSquare, Compass, Activity } from 'lucide-react';

const FEATURES = [
  {
    id: 1,
    icon: <BookOpen size={22} className="feat-icon-purple" />,
    title: "15-Minute Labs",
    description: "Self-paced, bite-sized learning models. Designed to fit easily into your daily workflow without disrupting your work calendar."
  },
  {
    id: 2,
    icon: <BadgeCheck size={22} className="feat-icon-blue" />,
    title: "IT Certified Badges",
    description: "Earn official SharePoint and Power Automate certification badges recognized across the organization to boost your career path."
  },
  {
    id: 3,
    icon: <Compass size={22} className="feat-icon-teal" />,
    title: "Sandbox Playgrounds",
    description: "Practice building sites, configuring permissions, and testing list automations inside isolated, safe sandbox environments."
  },
  {
    id: 4,
    icon: <MessageSquare size={22} className="feat-icon-indigo" />,
    title: "1-on-1 Office Hours",
    description: "Need help? Schedule a private 15-minute session directly with our Lead Architects to troubleshoot site layout or security structures."
  },
  {
    id: 5,
    icon: <ShieldAlert size={22} className="feat-icon-pink" />,
    title: "Security Foundations",
    description: "Learn best practices on data handling, external sharing scopes, and document permissions to keep corporate assets safe."
  },
  {
    id: 6,
    icon: <Activity size={22} className="feat-icon-orange" />,
    title: "Live Q&A Forums",
    description: "Join the IT learning community. Ask questions, troubleshoot design bottlenecks, and share custom code templates with peers."
  }
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        
        {/* Section Header */}
        <AnimatedContainer animationType="fade-up" className="section-header">
          <span className="section-subtitle">ACADEMY ADVANTAGE</span>
          <h2 className="section-title">Why Enroll in Our Program?</h2>
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
