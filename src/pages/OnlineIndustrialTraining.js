import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const OnlineIndustrialTraining = () => {
  const trainingPrograms = [
    {
      title: 'Web Development Training',
      description: 'Comprehensive training in modern web technologies including React, Node.js, and full-stack development.',
      duration: '3-6 Months',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Mobile App Development',
      description: 'Learn to build native and cross-platform mobile applications for iOS and Android.',
      duration: '3-6 Months',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Digital Marketing',
      description: 'Master SEO, social media marketing, content creation, and digital advertising strategies.',
      duration: '2-4 Months',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Data Science & Analytics',
      description: 'Learn data analysis, machine learning, and data visualization techniques.',
      duration: '4-6 Months',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Cloud Computing',
      description: 'Training in AWS, Azure, and Google Cloud platforms for modern infrastructure.',
      duration: '3-5 Months',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 10H20C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M2 15.5C2 16.8807 3.11929 18 4.5 18H18C19.3807 18 20.5 16.8807 20.5 15.5C20.5 14.1193 19.3807 13 18 13H4.5C3.11929 13 2 14.1193 2 15.5Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'UI/UX Design',
      description: 'Learn user interface and user experience design principles and tools.',
      duration: '2-4 Months',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9H15M9 15H15M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  const features = [
    'Industry-relevant curriculum designed by experts',
    'Hands-on projects and real-world case studies',
    'Flexible learning schedule to fit your lifestyle',
    'Certification upon course completion',
    'Placement assistance and career guidance',
    'Lifetime access to course materials and updates'
  ];

  return (
    <div className="site-content">
      <PageBanner 
        title="Online Industrial Training"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Online Industrial Training', path: '/online-industrial-training' }
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Training Programs</div>
            <h2>Comprehensive Industrial Training</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>
              Enhance your skills and advance your career with our comprehensive online industrial training programs. 
              Learn from industry experts and gain hands-on experience with real-world projects.
            </p>
          </div>

          <div className="grid grid-3">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ background: 'var(--bg-light)', color: 'var(--accent-color)' }}>
                  {program.icon}
                </div>
                <h3 className="service-title">{program.title}</h3>
                <p className="service-description">{program.description}</p>
                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  <span style={{ color: 'var(--accent-color)', fontWeight: '600', fontSize: '0.9rem' }}>
                    Duration: {program.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Training Methodology</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Live Sessions</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Interactive live classes with expert instructors
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Practical Projects</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Work on real-world projects to build your portfolio
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Mentorship</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      One-on-one mentorship and guidance throughout the course
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Certification</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Receive industry-recognized certificates upon completion
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="section-subtitle">Why Choose Our Training</div>
              <h2>Benefits of Our Training Programs</h2>
              <p>
                Our training programs are designed to provide you with the skills and knowledge needed 
                to succeed in today's competitive job market. We focus on practical, hands-on learning 
                that prepares you for real-world challenges.
              </p>
              <ul className="service-features" style={{ marginTop: '1.5rem' }}>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
              Ready to Start Your Learning Journey?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              Enroll in our training programs and take the first step towards a successful career
            </p>
            <Link to="/contact" className="btn" style={{ background: 'var(--secondary-color)', color: 'var(--primary-color)' }}>
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineIndustrialTraining;

