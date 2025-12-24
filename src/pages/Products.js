import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Trending Apps', 'Popular Apps', 'On Demand Apps', 'Business Apps'];

  // Icon component for products - Multi-layered system design
  const ProductIcon = ({ type }) => {
    const icons = {
      food: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="15" width="18" height="32" rx="2" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="11" y="18" width="12" height="8" rx="1" fill="#1a1a1a" opacity="0.2"/>
          <circle cx="17" cy="30" r="1.5" fill="#1a1a1a"/>
          <circle cx="40" cy="25" r="10" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="40" cy="22" r="3" fill="#1a1a1a"/>
          <path d="M32 30C32 32 35 35 40 35C45 35 48 32 48 30" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="40" cy="12" r="4" fill="#4ECDC4"/>
          <path d="M38 12L39.5 13.5L42 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="58" y="50" width="12" height="12" rx="1" stroke="#1a1a1a" strokeWidth="2"/>
          <path d="M61 53H67M61 56H67M61 59H67" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="64" cy="68" r="6" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="64" cy="68" r="2" fill="#1a1a1a"/>
          <path d="M64 62L64 66M64 70L64 74M70 68L66 68M62 68L58 68M68.5 63.5L65.5 66.5M68.5 72.5L65.5 69.5M59.5 72.5L62.5 69.5M59.5 63.5L62.5 66.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      taxi: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="15" width="18" height="32" rx="2" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="11" y="18" width="12" height="8" rx="1" fill="#1a1a1a" opacity="0.2"/>
          <circle cx="17" cy="30" r="1.5" fill="#1a1a1a"/>
          <circle cx="40" cy="25" r="10" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="40" cy="22" r="3" fill="#1a1a1a"/>
          <path d="M32 30C32 32 35 35 40 35C45 35 48 32 48 30" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="40" cy="12" r="4" fill="#4ECDC4"/>
          <path d="M38 12L39.5 13.5L42 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="55" y="48" width="18" height="10" rx="1" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="60" cy="60" r="3" fill="#1a1a1a"/>
          <circle cx="68" cy="60" r="3" fill="#1a1a1a"/>
          <path d="M58 52H70" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="64" cy="68" r="6" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="64" cy="68" r="2" fill="#1a1a1a"/>
          <path d="M64 62L64 66M64 70L64 74M70 68L66 68M62 68L58 68M68.5 63.5L65.5 66.5M68.5 72.5L65.5 69.5M59.5 72.5L62.5 69.5M59.5 63.5L62.5 66.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      grocery: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="15" width="18" height="32" rx="2" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="11" y="18" width="12" height="8" rx="1" fill="#1a1a1a" opacity="0.2"/>
          <circle cx="17" cy="30" r="1.5" fill="#1a1a1a"/>
          <circle cx="40" cy="25" r="10" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="40" cy="22" r="3" fill="#1a1a1a"/>
          <path d="M32 30C32 32 35 35 40 35C45 35 48 32 48 30" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="40" cy="12" r="4" fill="#4ECDC4"/>
          <path d="M38 12L39.5 13.5L42 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M54 52L58 52L60 58L66 58L64 52L68 52" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="60" cy="62" r="2" fill="#1a1a1a"/>
          <circle cx="66" cy="62" r="2" fill="#1a1a1a"/>
          <circle cx="64" cy="68" r="6" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="64" cy="68" r="2" fill="#1a1a1a"/>
          <path d="M64 62L64 66M64 70L64 74M70 68L66 68M62 68L58 68M68.5 63.5L65.5 66.5M68.5 72.5L65.5 69.5M59.5 72.5L62.5 69.5M59.5 63.5L62.5 66.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      default: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="15" width="18" height="32" rx="2" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="11" y="18" width="12" height="8" rx="1" fill="#1a1a1a" opacity="0.2"/>
          <circle cx="17" cy="30" r="1.5" fill="#1a1a1a"/>
          <circle cx="40" cy="25" r="10" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="40" cy="22" r="3" fill="#1a1a1a"/>
          <path d="M32 30C32 32 35 35 40 35C45 35 48 32 48 30" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="40" cy="12" r="4" fill="#4ECDC4"/>
          <path d="M38 12L39.5 13.5L42 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="56" y="50" width="16" height="12" rx="1" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="58" y="52" width="4" height="3" rx="0.5" fill="#1a1a1a"/>
          <rect x="64" y="52" width="4" height="3" rx="0.5" fill="#1a1a1a"/>
          <rect x="58" y="57" width="4" height="3" rx="0.5" fill="#1a1a1a"/>
          <rect x="64" y="57" width="4" height="3" rx="0.5" fill="#1a1a1a"/>
          <circle cx="64" cy="68" r="6" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="64" cy="68" r="2" fill="#1a1a1a"/>
          <path d="M64 62L64 66M64 70L64 74M70 68L66 68M62 68L58 68M68.5 63.5L65.5 66.5M68.5 72.5L65.5 69.5M59.5 72.5L62.5 69.5M59.5 63.5L62.5 66.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    };
    return icons[type] || icons.default;
  };

  const products = [
    {
      id: 1,
      title: 'Food Ordering & Delivery App Clone',
      description: 'Complete food delivery ecosystem with restaurant management, order tracking, and payment integration.',
      category: 'On Demand Apps',
      tag: 'FULLY CUSTOMIZABLE',
      tagColor: '#FF6B6B',
      technologies: ['React Native', 'Node.js', 'MongoDB', '+9'],
      image: 'https://backend.meander.software/uploads/food_1_94f673d25e.png',
      price: '$299',
      badge: 'Hot Deal'
    },
    {
      id: 2,
      title: 'Taxi Booking App',
      description: 'Real-time ride platform with driver tracking, route optimization, and secure payment processing.',
      category: 'On Demand Apps',
      tag: 'CLIENT-TESTED SYSTEM',
      tagColor: '#4ECDC4',
      technologies: ['Flutter', 'Firebase', 'Google Maps', '+9'],
      image: 'https://backend.meander.software/uploads/build_9_43f035f657.png',
      price: '$399',
      badge: 'Popular Apps'
    },
    {
      id: 3,
      title: 'Grocery Ordering & Delivery Solution',
      description: 'Fully customizable grocery app for stores, supermarkets, and startups with inventory management.',
      category: 'On Demand Apps',
      tag: '1-MONTH SUPPORT FREE',
      tagColor: '#FFD93D',
      technologies: ['React', 'Node.js', 'PostgreSQL', '+9'],
      image: 'https://backend.meander.software/uploads/build_17_734fe4f827.png',
      price: '$349',
      badge: 'Hot Deal'
    },
    {
      id: 4,
      title: 'Job Marketplace Platform',
      description: 'Talent-focused system for finding jobs, posting roles, and managing the hiring process.',
      category: 'Business Apps',
      tag: 'CLIENT-TESTED SYSTEM',
      tagColor: '#4ECDC4',
      technologies: ['React', 'Angular', 'Node.js', '+9'],
      image: 'https://backend.meander.software/uploads/build_20_6c1dba9820.png',
      price: '$449',
      badge: 'Trending Apps'
    },
    {
      id: 5,
      title: 'Social Media App Clone',
      description: 'Complete social networking platform with messaging, posts, stories, and real-time notifications.',
      category: 'Popular Apps',
      tag: 'MULTI-PLATFORM SUPPORT',
      tagColor: '#95E1D3',
      technologies: ['React Native', 'Socket.io', 'AWS', '+9'],
      image: 'https://backend.meander.software/uploads/Dating_App_5_3088a60134.png',
      price: '$499',
      badge: 'Popular Apps'
    },
    {
      id: 6,
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare platform for appointments, patient records, and telemedicine features.',
      category: 'Business Apps',
      tag: 'HIPAA COMPLIANT',
      tagColor: '#4ECDC4',
      technologies: ['React', 'Node.js', 'MySQL', '+9'],
      image: 'https://backend.meander.software/uploads/practo_clone_c7190df337.png',
      price: '$599',
      badge: 'Business Apps'
    },
    {
      id: 7,
      title: 'Fitness & Wellness App',
      description: 'Complete fitness solution with workout plans, progress tracking, and nutrition management.',
      category: 'Popular Apps',
      tag: '1-MONTH SUPPORT FREE',
      tagColor: '#FFD93D',
      technologies: ['Flutter', 'Firebase', 'Stripe', '+9'],
      image: 'https://backend.meander.software/uploads/FITNESS_MADE_SIMPLE_6_b482a3362e.png',
      price: '$349',
      badge: 'Popular Apps'
    },
    {
      id: 8,
      title: 'Real Estate Platform',
      description: 'Property listing and management system with virtual tours, mortgage calculator, and agent matching.',
      category: 'Business Apps',
      tag: 'CLIENT-TESTED SYSTEM',
      tagColor: '#4ECDC4',
      technologies: ['React', 'Django', 'PostgreSQL', '+9'],
      image: 'https://backend.meander.software/uploads/Dating_App_807e165eea.png',
      price: '$549',
      badge: 'Business Apps'
    }
  ];

  const getFilteredProducts = () => {
    let filtered = products;

    // Filter by category
    if (activeFilter !== 'All') {
      const filterMap = {
        'Trending Apps': 'Trending Apps',
        'Popular Apps': 'Popular Apps',
        'On Demand Apps': 'On Demand Apps',
        'Business Apps': 'Business Apps'
      };
      if (filterMap[activeFilter]) {
        filtered = filtered.filter(p => p.badge === activeFilter || p.category === activeFilter);
      }
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="site-content">
      {/* Hero Section with Search */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Discover Digital Assets<br />
              for Modern Business
            </h1>
            <p className="products-hero-subtitle">
              Build. Launch. Grow. AI-Powered Real-World Projects.
            </p>
            <div className="products-search-bar">
              <div className="search-input-wrapper">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Find what you need..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="search-btn" onClick={() => {}}>
                Search
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
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

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card-header">
                  <span className="product-tag" style={{ background: product.tagColor }}>
                    {product.tag}
                  </span>
                  {product.badge && (
                    <span className="product-badge">{product.badge}</span>
                  )}
                </div>
                <div className="product-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div className="product-card-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-technologies">
                    {product.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="product-footer">
                    <div className="product-price-wrapper">
                      <span className="product-price">{product.price}</span>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Need a Custom Solution?</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              We can customize any product to fit your specific business requirements.
            </p>
            <Link to="/contact" className="btn btn-primary">Get Custom Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

