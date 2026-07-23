import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { User, MessageSquare, Shield, GraduationCap, Cpu, Layers } from 'lucide-react';

const STAFF = [
  {
    id: 1,
    name: "Almadrigo Lorence",
    role: "Lead Architect",
    bio: "Specializes in modern intranet architecture, custom framework engineering, and cloud directory configurations.",
    icon: <Shield size={32} className="staff-icon-glow" />,
    color: "#4f46e5"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Training Director",
    bio: "Focuses on user adoption strategy, content management policies, and SharePoint compliance courses.",
    icon: <GraduationCap size={32} className="staff-icon-glow" />,
    color: "#0ea5e9"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Workflow Specialist",
    bio: "Power Automate trainer teaching how to automate business requests, approval loops, and database syncs.",
    icon: <Cpu size={32} className="staff-icon-glow" />,
    color: "#10b981"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "UX/UI Designer",
    bio: "Intranet designer teaching branding frameworks, layout responsiveness, and modern web aesthetics.",
    icon: <Layers size={32} className="staff-icon-glow" />,
    color: "#db2777"
  }
];

export default function Staff() {
  return (
    <section id="staff" className="staff-section">
      <div className="staff-container">
        
        {/* Section Header */}
        <AnimatedContainer animationType="fade-up" className="section-header">
          <span className="section-subtitle">ACADEMY FACULTY</span>
          <h2 className="section-title">Meet Your Instructors</h2>
          <div className="section-divider" />
        </AnimatedContainer>

        {/* Staff Grid with slide-in-from-right animation */}
        <AnimatedContainer 
          animationType="stagger" 
          threshold={0.1} 
          className="staff-grid"
        >
          {STAFF.map((member) => (
            <div 
              key={member.id} 
              className="animate-on-scroll slide-right staff-card"
            >
              <div 
                className="staff-avatar-container"
                style={{ borderColor: `rgba(${parseInt(member.color.slice(1,3), 16)}, ${parseInt(member.color.slice(3,5), 16)}, ${parseInt(member.color.slice(5,7), 16)}, 0.15)` }}
              >
                <div 
                  className="staff-avatar"
                  style={{ color: member.color }}
                >
                  {member.icon}
                </div>
              </div>

              <h3 className="staff-name">{member.name}</h3>
              <div 
                className="staff-role-badge"
                style={{ 
                  color: member.color, 
                  background: member.color + '0c'
                }}
              >
                {member.role}
              </div>

              <p className="staff-bio">{member.bio}</p>
              
              <a href="#" className="staff-contact-link" style={{ color: member.color }}>
                <MessageSquare size={14} />
                <span>Message on Teams</span>
              </a>
            </div>
          ))}
        </AnimatedContainer>

      </div>
    </section>
  );
}
