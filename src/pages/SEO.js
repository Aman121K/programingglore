import React from 'react';
import { Link } from 'react-router-dom';

const SEO = () => {
  const features = [
    'Technical and on-page SEO optimization',
    'Keyword strategy and content planning',
    'Performance tracking and monthly reporting',
    'Link building and off-page SEO',
    'Local SEO optimization',
    'SEO audits and analysis'
  ];

  const services = [
    {
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your website\'s current SEO performance'
    },
    {
      title: 'Keyword Research',
      description: 'Identify the best keywords to target for your business'
    },
    {
      title: 'On-Page Optimization',
      description: 'Optimize your website content and structure for search engines'
    },
    {
      title: 'Content Strategy',
      description: 'Create SEO-friendly content that ranks and converts'
    },
    {
      title: 'Link Building',
      description: 'Build quality backlinks to improve your domain authority'
    },
    {
      title: 'Performance Tracking',
      description: 'Monitor rankings, traffic, and conversions with detailed reports'
    }
  ];

  return (
    <div className="site-content">
      <section className="hero-section" style={{ minHeight: '50vh', paddingTop: '120px' }}>
        <div className="hero-content">
          <div className="section-subtitle">Our Services</div>
          <h1 className="hero-title">SEO Optimization</h1>
          <p className="hero-subtitle">
            Increasing organic visibility and attracting qualified traffic through strategic SEO
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2>Comprehensive SEO Services</h2>
              <p>
                Search Engine Optimization is essential for getting your website found by potential 
                customers. Our SEO services help improve your search engine rankings, drive organic 
                traffic, and increase your online visibility.
              </p>
              <p>
                We use proven strategies and techniques to optimize your website for search engines, 
                ensuring you rank higher for relevant keywords and attract more qualified visitors.
              </p>
            </div>
            <div>
              <img 
                src="/assets/images/seo.png" 
                alt="SEO"
                style={{ width: '100%', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Our SEO Services</h2>
          </div>
          <div className="grid grid-3">
            {services.map((service, index) => (
              <div key={index} className="card">
                <h4 className="card-title">{service.title}</h4>
                <p className="card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>What We Include</h2>
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

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Improve Your Rankings?</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              Let's develop an SEO strategy that drives organic traffic and grows your business.
            </p>
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO;
