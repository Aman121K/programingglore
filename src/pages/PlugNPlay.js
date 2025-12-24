import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const PlugNPlay = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'Plug n Play';
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Plugins', 'Widgets', 'Modules', 'Extensions'];

  const plugins = [
    {
      id: 1,
      title: 'E-commerce Plugin',
      description: 'Complete e-commerce functionality plugin with cart, checkout, and payment processing.',
      category: 'Plugins',
      tag: 'READY TO USE',
      tagColor: '#FF6B6B',
      technologies: ['WordPress', 'WooCommerce', 'PHP', '+5'],
      image: 'https://backend.meander.software/uploads/food_1_94f673d25e.png',
      price: '$199',
      badge: 'Plugins'
    },
    {
      id: 2,
      title: 'Booking System Widget',
      description: 'Appointment booking widget for service-based businesses with calendar integration.',
      category: 'Widgets',
      tag: 'EASY INSTALL',
      tagColor: '#4ECDC4',
      technologies: ['React', 'JavaScript', 'Calendar API', '+3'],
      image: 'https://backend.meander.software/uploads/build_9_43f035f657.png',
      price: '$149',
      badge: 'Widgets'
    },
    {
      id: 3,
      title: 'Chat Widget Module',
      description: 'Live chat widget with real-time messaging and customer support features.',
      category: 'Widgets',
      tag: 'INSTANT SETUP',
      tagColor: '#FFD93D',
      technologies: ['React', 'Socket.io', 'Node.js', '+2'],
      image: 'https://backend.meander.software/uploads/build_17_734fe4f827.png',
      price: '$99',
      badge: 'Widgets'
    },
    {
      id: 4,
      title: 'Payment Gateway Module',
      description: 'Payment processing module supporting multiple payment methods and gateways.',
      category: 'Modules',
      tag: 'SECURE',
      tagColor: '#4ECDC4',
      technologies: ['PHP', 'Stripe', 'PayPal', '+4'],
      image: 'https://backend.meander.software/uploads/build_20_6c1dba9820.png',
      price: '$179',
      badge: 'Modules'
    },
    {
      id: 5,
      title: 'Social Media Extension',
      description: 'Social media sharing and feed integration extension for websites.',
      category: 'Extensions',
      tag: 'SOCIAL INTEGRATION',
      tagColor: '#95E1D3',
      technologies: ['JavaScript', 'Social APIs', 'React', '+2'],
      image: 'https://backend.meander.software/uploads/Dating_App_5_3088a60134.png',
      price: '$79',
      badge: 'Extensions'
    },
    {
      id: 6,
      title: 'Analytics Dashboard Widget',
      description: 'Real-time analytics dashboard widget with charts and data visualization.',
      category: 'Widgets',
      tag: 'DATA VISUALIZATION',
      tagColor: '#4ECDC4',
      technologies: ['React', 'Chart.js', 'API', '+3'],
      image: 'https://backend.meander.software/uploads/practo_clone_c7190df337.png',
      price: '$129',
      badge: 'Widgets'
    },
    {
      id: 7,
      title: 'Form Builder Plugin',
      description: 'Drag-and-drop form builder plugin with validation and submission handling.',
      category: 'Plugins',
      tag: 'USER-FRIENDLY',
      tagColor: '#FFD93D',
      technologies: ['JavaScript', 'React', 'Validation', '+3'],
      image: 'https://backend.meander.software/uploads/FITNESS_MADE_SIMPLE_6_b482a3362e.png',
      price: '$159',
      badge: 'Plugins'
    },
    {
      id: 8,
      title: 'SEO Optimization Extension',
      description: 'SEO tools extension with meta tags, sitemap generation, and optimization features.',
      category: 'Extensions',
      tag: 'SEO TOOLS',
      tagColor: '#4ECDC4',
      technologies: ['PHP', 'JavaScript', 'SEO APIs', '+2'],
      image: 'https://backend.meander.software/uploads/Dating_App_807e165eea.png',
      price: '$119',
      badge: 'Extensions'
    }
  ];

  const getFilteredPlugins = () => {
    let filtered = plugins;

    if (activeFilter !== 'All') {
      const filterMap = {
        'Plugins': 'Plugins',
        'Widgets': 'Widgets',
        'Modules': 'Modules',
        'Extensions': 'Extensions'
      };
      if (filterMap[activeFilter]) {
        filtered = filtered.filter(p => p.badge === activeFilter || p.category === activeFilter);
      }
    }

    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredPlugins = getFilteredPlugins();

  return (
    <div className="site-content">
      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Plug & Play Solutions<br />
              for Quick Deployment
            </h1>
            <p className="products-hero-subtitle">
              Install. Configure. Use. Ready-to-use plugins, widgets, and modules for instant functionality.
            </p>
            <div className="products-search-bar">
              <div className="search-input-wrapper">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Search plugins..." 
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

      {/* Plugins Grid Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Plug & Play Solutions</div>
            <h2>Ready-to-Install Components</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Browse our collection of plugins, widgets, modules, and extensions ready for instant deployment
            </p>
          </div>
          <div className="products-grid">
            {filteredPlugins.map((plugin) => (
              <div key={plugin.id} className="product-card">
                <div className="product-card-header">
                  <span className="product-tag" style={{ background: plugin.tagColor }}>
                    {plugin.tag}
                  </span>
                  {plugin.badge && (
                    <span className="product-badge">{plugin.badge}</span>
                  )}
                </div>
                <div className="product-image-wrapper">
                  <img 
                    src={plugin.image} 
                    alt={plugin.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div className="product-card-content">
                  <h3 className="product-title">{plugin.title}</h3>
                  <p className="product-description">{plugin.description}</p>
                  <div className="product-technologies">
                    {plugin.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="product-footer">
                    <div className="product-price-wrapper">
                      <span className="product-price">{plugin.price}</span>
                    </div>
                    <div className="product-actions">
                      <Link to="/contact" className="btn btn-primary btn-sm">Buy Now</Link>
                      <Link to="/contact" className="btn btn-outline btn-sm">View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredPlugins.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
              <p>No plugins found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
              Need a Custom Plugin?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              We can develop custom plugins and widgets tailored to your specific needs
            </p>
            <Link to="/contact" className="btn" style={{ background: 'var(--secondary-color)', color: 'var(--primary-color)' }}>
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlugNPlay;

