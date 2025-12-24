import React from 'react';
import { Link } from 'react-router-dom';

const WebDesigning = () => {
  const features = [
    'Custom and responsive design',
    'User-friendly interface (UI/UX)',
    'Mobile and SEO optimization',
    'Brand identity integration',
    'Modern design trends',
    'Accessibility compliance'
  ];

  const process = [
    {
      step: '01',
      title: 'Research & Discovery',
      description: 'We research your industry, competitors, and target audience to inform our design decisions.'
    },
    {
      step: '02',
      title: 'Wireframing',
      description: 'We create wireframes to establish the structure and layout of your website.'
    },
    {
      step: '03',
      title: 'Design & Prototyping',
      description: 'We design beautiful interfaces and create interactive prototypes for your review.'
    },
    {
      step: '04',
      title: 'Refinement',
      description: 'We refine the design based on your feedback until it perfectly matches your vision.'
    }
  ];

  return (
    <div className="site-content">
      <section className="hero-section" style={{ minHeight: '50vh', paddingTop: '120px' }}>
        <div className="hero-content">
          <div className="section-subtitle">Our Services</div>
          <h1 className="hero-title">Web Design</h1>
          <p className="hero-subtitle">
            Creating visually stunning, user-friendly websites that convert visitors into customers
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2>Professional Web Design Services</h2>
              <p>
                Great web design is more than just aesthetics—it's about creating an experience 
                that engages users and drives conversions. Our design team combines creativity 
                with strategic thinking to create websites that look amazing and perform even better.
              </p>
              <p>
                We focus on user experience, ensuring your website is intuitive, accessible, and 
                optimized for all devices. Every design decision is made with your business goals in mind.
              </p>
            </div>
            <div>
              <img 
                src="/assets/images/web-designing.png" 
                alt="Web Design"
                style={{ width: '100%', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>What We Offer</h2>
          </div>
          <div className="grid grid-3">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <h4 className="card-title">{feature}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Our Process</div>
            <h2>How We Work</h2>
          </div>
          <div className="grid grid-4">
            {process.map((item, index) => (
              <div key={index} className="card">
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: '700', 
                  color: 'var(--accent-color)',
                  marginBottom: '1rem'
                }}>
                  {item.step}
                </div>
                <h4 className="card-title">{item.title}</h4>
                <p className="card-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Redesign Your Website?</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              Let's create a website design that truly represents your brand and drives results.
            </p>
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesigning;
