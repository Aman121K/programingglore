import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const OnlineConsulting = () => {
  const consultingServices = [
    {
      title: 'Business Strategy Consulting',
      description: 'Strategic planning and business development guidance to help you achieve your goals.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Technology Consulting',
      description: 'Expert advice on technology stack selection, architecture, and implementation strategies.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Digital Transformation',
      description: 'Guidance on digitalizing your business processes and leveraging technology for growth.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Marketing Strategy',
      description: 'Strategic marketing advice to help you reach your target audience and grow your brand.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const benefits = [
    'Expert guidance from industry professionals',
    'Flexible scheduling to fit your needs',
    'Cost-effective solutions for small businesses',
    'Personalized advice tailored to your business',
    'Ongoing support and follow-up sessions',
    'Access to latest industry trends and best practices'
  ];

  return (
    <div className="site-content">
      <PageBanner 
        title="Online Consulting"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Online Consulting', path: '/online-consulting' }
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Our Services</div>
            <h2>Expert Consulting Services</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>
              Get professional guidance and strategic advice to help your business grow and succeed. 
              Our online consulting services provide flexible, cost-effective solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-3">
            {consultingServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ background: 'var(--bg-light)', color: 'var(--accent-color)' }}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <div className="section-subtitle">Why Choose Us</div>
              <h2>Benefits of Our Online Consulting</h2>
              <p>
                We understand that every business is unique. Our consulting services are designed to 
                provide personalized guidance that addresses your specific challenges and opportunities.
              </p>
              <ul className="service-features" style={{ marginTop: '1.5rem' }}>
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>How It Works</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>1. Schedule a Session</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Book a consultation session at your convenience
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>2. Discuss Your Needs</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Share your challenges and goals with our experts
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>3. Get Expert Advice</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Receive personalized recommendations and strategies
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>4. Implement & Grow</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Follow up with ongoing support as you implement solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
              Ready to Get Expert Advice?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              Schedule a consultation session and take your business to the next level
            </p>
            <Link to="/contact" className="btn" style={{ background: 'var(--secondary-color)', color: 'var(--primary-color)' }}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineConsulting;

