import React from 'react';
import { Link } from 'react-router-dom';

const Ecommerce = () => {
  const features = [
    'Custom Online Store Development',
    'Secure Payment Integration',
    'Mobile-Optimized Shopping Experience',
    'Inventory Management System',
    'Order Tracking & Management',
    'Marketing Tools Integration'
  ];

  const benefits = [
    {
      title: 'Increased Sales',
      description: 'Optimized checkout process and user experience to maximize conversions'
    },
    {
      title: '24/7 Availability',
      description: 'Your store is always open, allowing customers to shop anytime'
    },
    {
      title: 'Scalability',
      description: 'Grow your business without worrying about technical limitations'
    },
    {
      title: 'Analytics & Insights',
      description: 'Track performance and make data-driven decisions'
    }
  ];

  return (
    <div className="site-content">
      <section className="hero-section" style={{ minHeight: '50vh', paddingTop: '120px' }}>
        <div className="hero-content">
          <div className="section-subtitle">Our Services</div>
          <h1 className="hero-title">Ecommerce Solutions</h1>
          <p className="hero-subtitle">
            Developing high-converting online stores that simplify shopping and drive sales
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2>Complete Ecommerce Solutions</h2>
              <p>
                We build powerful ecommerce platforms that make it easy for customers to find, 
                browse, and purchase your products. Our solutions are designed to maximize 
                conversions while providing an exceptional shopping experience.
              </p>
              <p>
                From product catalogs to secure payment processing, we handle every aspect of 
                your online store to ensure it runs smoothly and efficiently.
              </p>
            </div>
            <div>
              <img 
                src="/assets/images/ecommerce.png" 
                alt="Ecommerce"
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
            <div className="section-subtitle">Benefits</div>
            <h2>Why Choose Our Ecommerce Solutions</h2>
          </div>
          <div className="grid grid-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="card">
                <h4 className="card-title">{benefit.title}</h4>
                <p className="card-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Launch Your Online Store?</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              Let's build an ecommerce platform that drives sales and grows your business.
            </p>
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
