import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Senior Web Developer',
      department: 'Development',
      location: 'Mohali, India',
      type: 'Full-time',
      description: 'We are looking for an experienced web developer to join our team. You will be responsible for developing and maintaining web applications using modern technologies.',
      requirements: ['5+ years of experience', 'React, Node.js expertise', 'Strong problem-solving skills'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Mohali, India',
      type: 'Full-time',
      description: 'Join our design team to create beautiful and intuitive user interfaces. You will work on various projects including websites and mobile applications.',
      requirements: ['3+ years of design experience', 'Proficiency in Figma/Adobe XD', 'Portfolio required'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9H15M9 15H15M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Mohali, India',
      type: 'Full-time',
      description: 'We need a digital marketing expert to help our clients grow their online presence through SEO, social media, and content marketing.',
      requirements: ['2+ years of marketing experience', 'SEO and social media expertise', 'Analytics knowledge'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Mobile App Developer',
      department: 'Development',
      location: 'Mohali, India',
      type: 'Full-time',
      description: 'Looking for a skilled mobile app developer to build native and cross-platform mobile applications for iOS and Android.',
      requirements: ['3+ years of mobile development', 'React Native or Flutter', 'App Store experience'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  const benefits = [
    'Competitive salary package',
    'Health insurance coverage',
    'Flexible working hours',
    'Remote work options',
    'Professional development opportunities',
    'Team building activities',
    'Performance bonuses',
    'Paid time off'
  ];

  return (
    <div className="site-content">
      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Careers<br />
              Join Our Team
            </h1>
            <p className="products-hero-subtitle">
              Build your career with us. We're looking for talented individuals to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Open Positions</div>
            <h2>Current Job Openings</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Explore our current job openings and find the perfect opportunity for you
            </p>
          </div>
          <div className="grid grid-2">
            {jobOpenings.map((job, index) => (
              <div key={index} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="service-icon" style={{ background: 'var(--bg-light)', color: 'var(--accent-color)', flexShrink: 0 }}>
                    {job.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>{job.title}</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        📍 {job.location}
                      </span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        ⏰ {job.type}
                      </span>
                      <span style={{ 
                        background: 'var(--bg-light)', 
                        color: 'var(--accent-color)', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '4px', 
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {job.department}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="card-description" style={{ marginBottom: '1rem' }}>
                  {job.description}
                </p>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', fontWeight: '600' }}>Requirements:</h4>
                  <ul className="service-features" style={{ marginTop: '0.5rem' }}>
                    {job.requirements.map((req, idx) => (
                      <li key={idx} style={{ fontSize: '0.9rem' }}>{req}</li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>Why Join Us?</h3>
                <ul className="service-features">
                  {benefits.map((benefit, index) => (
                    <li key={index} style={{ fontSize: '1rem', padding: '0.75rem 0' }}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="section-subtitle">Benefits & Perks</div>
              <h2>What We Offer</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                At Programmingglore, we believe in taking care of our team members. 
                We offer competitive benefits and a supportive work environment.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                We're committed to your professional growth and provide opportunities 
                for learning, development, and career advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
              Don't See a Position That Fits?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link to="/contact" className="btn" style={{ background: 'var(--secondary-color)', color: 'var(--primary-color)' }}>
              Send Your Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
