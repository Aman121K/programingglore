import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  const teamMembers = [
    {
      name: 'Development Team',
      role: 'Web & Mobile Developers',
      description: 'Expert developers specializing in modern web and mobile technologies',
      image: '/assets/images/web-development.png',
      skills: ['React', 'Node.js', 'React Native', 'Flutter']
    },
    {
      name: 'Design Team',
      role: 'UI/UX Designers',
      description: 'Creative designers focused on creating beautiful and intuitive user experiences',
      image: '/assets/images/web-designing.png',
      skills: ['UI Design', 'UX Research', 'Prototyping', 'Branding']
    },
    {
      name: 'Marketing Team',
      role: 'Digital Marketing Experts',
      description: 'Marketing specialists helping businesses grow their online presence',
      image: '/assets/images/social-media-marketing.png',
      skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics']
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      description: 'Dedicated support team ensuring client satisfaction and project success',
      image: '/assets/images/web-development.png',
      skills: ['Support', 'Consulting', 'Training', 'Maintenance']
    }
  ];

  return (
    <div className="site-content">
      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Our Team<br />
              Meet the Experts
            </h1>
            <p className="products-hero-subtitle">
              A talented team of developers, designers, and marketers dedicated to your success
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Our Team</div>
            <h2>Expert Professionals</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Meet the talented individuals who make Programmingglore a trusted digital partner
            </p>
          </div>
          <div className="grid grid-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                <div className="product-image-wrapper" style={{ height: '200px', marginBottom: '1.5rem', borderRadius: '12px' }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>{member.name}</h3>
                <p style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                  {member.role}
                </p>
                <p className="card-description" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
                  {member.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="tech-tag" style={{ fontSize: '0.75rem' }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <div className="section-subtitle">Join Our Team</div>
              <h2>Why Work With Us</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                At Programmingglore, we value innovation, creativity, and collaboration. 
                We're always looking for talented individuals to join our growing team.
              </p>
              <ul className="service-features" style={{ marginTop: '1.5rem' }}>
                <li>Competitive salary and benefits</li>
                <li>Flexible working hours</li>
                <li>Opportunities for professional growth</li>
                <li>Collaborative and supportive environment</li>
                <li>Work on exciting projects</li>
                <li>Continuous learning and development</li>
              </ul>
              <Link to="/careers" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                View Open Positions
              </Link>
            </div>
            <div>
              <div className="card" style={{ padding: '2rem', background: 'var(--bg-white)' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>Our Culture</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Innovation First</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      We encourage creative thinking and embrace new technologies
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Work-Life Balance</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      We believe in maintaining a healthy balance between work and personal life
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Team Collaboration</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      We work together as a team to achieve common goals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
              Interested in Joining Our Team?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              Check out our open positions and apply today
            </p>
            <Link to="/careers" className="btn" style={{ background: 'var(--secondary-color)', color: 'var(--primary-color)' }}>
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
