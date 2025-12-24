import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Models = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Web Models', 'Mobile Models', 'Ecommerce Models', 'Business Models'];

  const models = [
    {
      id: 1,
      title: 'E-commerce Website Model',
      description: 'Complete e-commerce solution with shopping cart, payment integration, and admin dashboard.',
      category: 'Ecommerce Models',
      tag: 'FULLY CUSTOMIZABLE',
      tagColor: '#FF6B6B',
      technologies: ['React', 'Node.js', 'MongoDB', '+9'],
      image: 'https://backend.meander.software/uploads/food_1_94f673d25e.png',
      price: '$299',
      badge: 'Hot Deal'
    },
    {
      id: 2,
      title: 'Restaurant Website Model',
      description: 'Beautiful restaurant website with menu display, online reservations, and order tracking.',
      category: 'Web Models',
      tag: 'CLIENT-TESTED SYSTEM',
      tagColor: '#4ECDC4',
      technologies: ['React', 'Firebase', 'Stripe', '+9'],
      image: 'https://backend.meander.software/uploads/build_9_43f035f657.png',
      price: '$249',
      badge: 'Popular Models'
    },
    {
      id: 3,
      title: 'Portfolio Website Model',
      description: 'Professional portfolio website for designers, developers, and creative professionals.',
      category: 'Web Models',
      tag: '1-MONTH SUPPORT FREE',
      tagColor: '#FFD93D',
      technologies: ['React', 'Next.js', 'Tailwind', '+9'],
      image: 'https://backend.meander.software/uploads/build_17_734fe4f827.png',
      price: '$199',
      badge: 'Hot Deal'
    },
    {
      id: 4,
      title: 'Corporate Website Model',
      description: 'Professional corporate website with services, team, and contact sections.',
      category: 'Business Models',
      tag: 'CLIENT-TESTED SYSTEM',
      tagColor: '#4ECDC4',
      technologies: ['React', 'Node.js', 'MySQL', '+9'],
      image: 'https://backend.meander.software/uploads/build_20_6c1dba9820.png',
      price: '$349',
      badge: 'Business Models'
    },
    {
      id: 5,
      title: 'Blog Platform Model',
      description: 'Modern blog platform with content management, categories, and SEO optimization.',
      category: 'Web Models',
      tag: 'MULTI-PLATFORM SUPPORT',
      tagColor: '#95E1D3',
      technologies: ['React', 'Node.js', 'MongoDB', '+9'],
      image: 'https://backend.meander.software/uploads/Dating_App_5_3088a60134.png',
      price: '$279',
      badge: 'Popular Models'
    },
    {
      id: 6,
      title: 'Fitness App Model',
      description: 'Complete fitness tracking app with workout plans, progress tracking, and nutrition.',
      category: 'Mobile Models',
      tag: 'HIPAA COMPLIANT',
      tagColor: '#4ECDC4',
      technologies: ['React Native', 'Firebase', 'Stripe', '+9'],
      image: 'https://backend.meander.software/uploads/FITNESS_MADE_SIMPLE_6_b482a3362e.png',
      price: '$399',
      badge: 'Mobile Models'
    },
    {
      id: 7,
      title: 'Education Platform Model',
      description: 'Online learning platform with courses, quizzes, and student management.',
      category: 'Business Models',
      tag: '1-MONTH SUPPORT FREE',
      tagColor: '#FFD93D',
      technologies: ['React', 'Django', 'PostgreSQL', '+9'],
      image: 'https://backend.meander.software/uploads/practo_clone_c7190df337.png',
      price: '$449',
      badge: 'Business Models'
    },
    {
      id: 8,
      title: 'Real Estate Website Model',
      description: 'Property listing website with search filters, virtual tours, and agent profiles.',
      category: 'Ecommerce Models',
      tag: 'CLIENT-TESTED SYSTEM',
      tagColor: '#4ECDC4',
      technologies: ['React', 'Node.js', 'MongoDB', '+9'],
      image: 'https://backend.meander.software/uploads/Dating_App_807e165eea.png',
      price: '$379',
      badge: 'Ecommerce Models'
    }
  ];

  const getFilteredModels = () => {
    let filtered = models;

    if (activeFilter !== 'All') {
      const filterMap = {
        'Web Models': 'Web Models',
        'Mobile Models': 'Mobile Models',
        'Ecommerce Models': 'Ecommerce Models',
        'Business Models': 'Business Models'
      };
      if (filterMap[activeFilter]) {
        filtered = filtered.filter(m => m.badge === activeFilter || m.category === activeFilter);
      }
    }

    if (searchQuery) {
      filtered = filtered.filter(m => 
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredModels = getFilteredModels();

  return (
    <div className="site-content">
      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Discover Website & App Models<br />
              for Your Business
            </h1>
            <p className="products-hero-subtitle">
              Build. Launch. Grow. Ready-to-use models and templates for rapid development.
            </p>
            <div className="products-search-bar">
              <div className="search-input-wrapper">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Search models..." 
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

      {/* Models Grid Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Our Models</div>
            <h2>Ready-to-Use Templates</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Explore our collection of pre-built website and app models ready for customization
            </p>
          </div>
          <div className="products-grid">
            {filteredModels.map((model) => (
              <div key={model.id} className="product-card">
                <div className="product-card-header">
                  <span className="product-tag" style={{ background: model.tagColor }}>
                    {model.tag}
                  </span>
                  {model.badge && (
                    <span className="product-badge">{model.badge}</span>
                  )}
                </div>
                <div className="product-image-wrapper">
                  <img 
                    src={model.image} 
                    alt={model.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div className="product-card-content">
                  <h3 className="product-title">{model.title}</h3>
                  <p className="product-description">{model.description}</p>
                  <div className="product-technologies">
                    {model.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="product-footer">
                    <div className="product-price-wrapper">
                      <span className="product-price">{model.price}</span>
                    </div>
                    <div className="product-actions">
                      <Link to="/contact" className="btn btn-primary btn-sm">Book Demo</Link>
                      <Link to="/contact" className="btn btn-outline btn-sm">Contact Us</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredModels.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
              <p>No models found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
              Need a Custom Model?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              We can customize any model to fit your specific business requirements
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

export default Models;

