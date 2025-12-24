import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Integration = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'Integration';
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Payment Integration', 'API Integration', 'Third-Party Services', 'Cloud Integration'];

  const integrations = [
    {
      id: 1,
      title: 'Payment Gateway Integration',
      description: 'Seamless integration with Stripe, PayPal, Razorpay, and other payment gateways.',
      category: 'Payment Integration',
      tag: 'SECURE & RELIABLE',
      tagColor: '#FF6B6B',
      technologies: ['Stripe', 'PayPal', 'Razorpay', '+5'],
      image: 'https://backend.meander.software/uploads/food_1_94f673d25e.png',
      price: 'Custom',
      badge: 'Payment Integration'
    },
    {
      id: 2,
      title: 'Google Maps Integration',
      description: 'Location services, directions, and map features for your application.',
      category: 'Third-Party Services',
      tag: 'CLIENT-TESTED SYSTEM',
      tagColor: '#4ECDC4',
      technologies: ['Google Maps API', 'Geocoding', 'Places API', '+3'],
      image: 'https://backend.meander.software/uploads/build_9_43f035f657.png',
      price: 'Custom',
      badge: 'Third-Party Services'
    },
    {
      id: 3,
      title: 'Social Media Integration',
      description: 'Connect your app with Facebook, Instagram, Twitter, and LinkedIn APIs.',
      category: 'API Integration',
      tag: 'MULTI-PLATFORM',
      tagColor: '#95E1D3',
      technologies: ['Facebook API', 'Instagram API', 'Twitter API', '+4'],
      image: 'https://backend.meander.software/uploads/build_17_734fe4f827.png',
      price: 'Custom',
      badge: 'API Integration'
    },
    {
      id: 4,
      title: 'Email Service Integration',
      description: 'Email delivery integration with SendGrid, Mailgun, and AWS SES.',
      category: 'Cloud Integration',
      tag: 'HIGH DELIVERABILITY',
      tagColor: '#4ECDC4',
      technologies: ['SendGrid', 'Mailgun', 'AWS SES', '+2'],
      image: 'https://backend.meander.software/uploads/build_20_6c1dba9820.png',
      price: 'Custom',
      badge: 'Cloud Integration'
    },
    {
      id: 5,
      title: 'SMS & Notification Integration',
      description: 'SMS and push notification services integration for real-time alerts.',
      category: 'Third-Party Services',
      tag: 'REAL-TIME',
      tagColor: '#FFD93D',
      technologies: ['Twilio', 'Firebase', 'OneSignal', '+3'],
      image: 'https://backend.meander.software/uploads/Dating_App_5_3088a60134.png',
      price: 'Custom',
      badge: 'Third-Party Services'
    },
    {
      id: 6,
      title: 'Analytics Integration',
      description: 'Google Analytics, Mixpanel, and custom analytics integration.',
      category: 'API Integration',
      tag: 'DATA-DRIVEN',
      tagColor: '#4ECDC4',
      technologies: ['Google Analytics', 'Mixpanel', 'Custom Analytics', '+2'],
      image: 'https://backend.meander.software/uploads/practo_clone_c7190df337.png',
      price: 'Custom',
      badge: 'API Integration'
    }
  ];

  const getFilteredIntegrations = () => {
    let filtered = integrations;

    if (activeFilter !== 'All') {
      const filterMap = {
        'Payment Integration': 'Payment Integration',
        'API Integration': 'API Integration',
        'Third-Party Services': 'Third-Party Services',
        'Cloud Integration': 'Cloud Integration'
      };
      if (filterMap[activeFilter]) {
        filtered = filtered.filter(i => i.badge === activeFilter || i.category === activeFilter);
      }
    }

    if (searchQuery) {
      filtered = filtered.filter(i => 
        i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredIntegrations = getFilteredIntegrations();

  return (
    <div className="site-content">
      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Integration Services<br />
              for Seamless Connectivity
            </h1>
            <p className="products-hero-subtitle">
              Connect. Integrate. Automate. Seamless third-party integrations for your applications.
            </p>
            <div className="products-search-bar">
              <div className="search-input-wrapper">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Search integrations..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="search-btn" onClick={() => {}}>Search →</button>
            </div>
            <div className="products-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Grid Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Integration Services</div>
            <h2>Third-Party Integrations</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Connect your application with popular services and APIs for enhanced functionality
            </p>
          </div>
          <div className="products-grid">
            {filteredIntegrations.map((integration) => (
              <div key={integration.id} className="product-card">
                <div className="product-card-header">
                  <span className="product-tag" style={{ background: integration.tagColor }}>
                    {integration.tag}
                  </span>
                  {integration.badge && (
                    <span className="product-badge">{integration.badge}</span>
                  )}
                </div>
                <div className="product-image-wrapper">
                  <img 
                    src={integration.image} 
                    alt={integration.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div className="product-card-content">
                  <h3 className="product-title">{integration.title}</h3>
                  <p className="product-description">{integration.description}</p>
                  <div className="product-technologies">
                    {integration.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="product-footer">
                    <div className="product-price-wrapper">
                      <span className="product-price">{integration.price}</span>
                    </div>
                    <div className="product-actions">
                      <Link to="/contact" className="btn btn-primary btn-sm">Get Quote</Link>
                      <Link to="/contact" className="btn btn-outline btn-sm">Contact Us</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredIntegrations.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
              <p>No integrations found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
              Need Custom Integration?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              We can integrate any third-party service or API with your application
            </p>
            <Link to="/contact" className="btn" style={{ background: 'var(--secondary-color)', color: 'var(--primary-color)' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integration;

