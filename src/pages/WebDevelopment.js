import React from 'react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const features = [
    'Scalable and secure architecture',
    'Fast-loading, high-performance code',
    'Custom features and API integrations',
    'Mobile-responsive design',
    'SEO-friendly structure',
    'Content management system integration'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We get to know your business, goals, and audience to create a tailored digital strategy.'
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'We map out the site structure and design an interface that reflects your brand and engages users.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build a fast, responsive, and SEO-friendly website using modern technologies and best practices.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We launch your site smoothly and offer ongoing support and maintenance as needed.'
    }
  ];

  return (
    <div className="site-content">
      <section className="hero-section" style={{ minHeight: '50vh', paddingTop: '120px' }}>
        <div className="hero-content">
          <div className="section-subtitle">Our Services</div>
          <h1 className="hero-title">Web Development</h1>
          <p className="hero-subtitle">
            Building fast, secure, and scalable websites with robust functionality
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2>Professional Web Development Services</h2>
              <p>
                We create custom websites that are not only visually appealing but also 
                perform exceptionally well. Our development process focuses on speed, 
                security, and scalability to ensure your website can grow with your business.
              </p>
              <p>
                Whether you need a simple business website or a complex web application, 
                we have the expertise to deliver solutions that meet your specific requirements.
              </p>
            </div>
            <div>
              <img 
                src="/assets/images/web-development.png" 
                alt="Web Development"
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
            <h2 style={{ marginBottom: '1rem' }}>Ready to Build Your Website?</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              Let's discuss your project and create a website that drives results.
            </p>
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
