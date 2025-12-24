import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Trending Apps', 'Popular Apps', 'On Demand Apps', 'Business Apps'];

  // Icon component for products - Multi-layered system design
  const ProductIcon = ({ type }) => {
    const icons = {
      food: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Phone on left */}
          <rect x="8" y="15" width="18" height="32" rx="2" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="11" y="18" width="12" height="8" rx="1" fill="#1a1a1a" opacity="0.2"/>
          <circle cx="17" cy="30" r="1.5" fill="#1a1a1a"/>
          {/* User icon in center circle */}
          <circle cx="40" cy="25" r="10" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="40" cy="22" r="3" fill="#1a1a1a"/>
          <path d="M32 30C32 32 35 35 40 35C45 35 48 32 48 30" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          {/* Checkmark above user */}
          <circle cx="40" cy="12" r="4" fill="#4ECDC4"/>
          <path d="M38 12L39.5 13.5L42 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Restaurant icon above gear */}
          <rect x="58" y="50" width="12" height="12" rx="1" stroke="#1a1a1a" strokeWidth="2"/>
          <path d="M61 53H67M61 56H67M61 59H67" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Gear icon at bottom */}
          <circle cx="64" cy="68" r="6" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="64" cy="68" r="2" fill="#1a1a1a"/>
          <path d="M64 62L64 66M64 70L64 74M70 68L66 68M62 68L58 68M68.5 63.5L65.5 66.5M68.5 72.5L65.5 69.5M59.5 72.5L62.5 69.5M59.5 63.5L62.5 66.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      taxi: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Phone on left */}
          <rect x="8" y="15" width="18" height="32" rx="2" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="11" y="18" width="12" height="8" rx="1" fill="#1a1a1a" opacity="0.2"/>
          <circle cx="17" cy="30" r="1.5" fill="#1a1a1a"/>
          {/* User icon in center circle */}
          <circle cx="40" cy="25" r="10" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="40" cy="22" r="3" fill="#1a1a1a"/>
          <path d="M32 30C32 32 35 35 40 35C45 35 48 32 48 30" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          {/* Checkmark above user */}
          <circle cx="40" cy="12" r="4" fill="#4ECDC4"/>
          <path d="M38 12L39.5 13.5L42 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Car icon above gear */}
          <rect x="55" y="48" width="18" height="10" rx="1" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="60" cy="60" r="3" fill="#1a1a1a"/>
          <circle cx="68" cy="60" r="3" fill="#1a1a1a"/>
          <path d="M58 52H70" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          {/* Gear icon at bottom */}
          <circle cx="64" cy="68" r="6" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="64" cy="68" r="2" fill="#1a1a1a"/>
          <path d="M64 62L64 66M64 70L64 74M70 68L66 68M62 68L58 68M68.5 63.5L65.5 66.5M68.5 72.5L65.5 69.5M59.5 72.5L62.5 69.5M59.5 63.5L62.5 66.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      grocery: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Phone on left */}
          <rect x="8" y="15" width="18" height="32" rx="2" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="11" y="18" width="12" height="8" rx="1" fill="#1a1a1a" opacity="0.2"/>
          <circle cx="17" cy="30" r="1.5" fill="#1a1a1a"/>
          {/* User icon in center circle */}
          <circle cx="40" cy="25" r="10" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="40" cy="22" r="3" fill="#1a1a1a"/>
          <path d="M32 30C32 32 35 35 40 35C45 35 48 32 48 30" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          {/* Checkmark above user */}
          <circle cx="40" cy="12" r="4" fill="#4ECDC4"/>
          <path d="M38 12L39.5 13.5L42 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Shopping cart icon above gear */}
          <path d="M54 52L58 52L60 58L66 58L64 52L68 52" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="60" cy="62" r="2" fill="#1a1a1a"/>
          <circle cx="66" cy="62" r="2" fill="#1a1a1a"/>
          {/* Gear icon at bottom */}
          <circle cx="64" cy="68" r="6" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="64" cy="68" r="2" fill="#1a1a1a"/>
          <path d="M64 62L64 66M64 70L64 74M70 68L66 68M62 68L58 68M68.5 63.5L65.5 66.5M68.5 72.5L65.5 69.5M59.5 72.5L62.5 69.5M59.5 63.5L62.5 66.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      default: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Phone on left */}
          <rect x="8" y="15" width="18" height="32" rx="2" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="11" y="18" width="12" height="8" rx="1" fill="#1a1a1a" opacity="0.2"/>
          <circle cx="17" cy="30" r="1.5" fill="#1a1a1a"/>
          {/* User icon in center circle */}
          <circle cx="40" cy="25" r="10" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="40" cy="22" r="3" fill="#1a1a1a"/>
          <path d="M32 30C32 32 35 35 40 35C45 35 48 32 48 30" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          {/* Checkmark above user */}
          <circle cx="40" cy="12" r="4" fill="#4ECDC4"/>
          <path d="M38 12L39.5 13.5L42 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Building/App icon above gear */}
          <rect x="56" y="50" width="16" height="12" rx="1" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="58" y="52" width="4" height="3" rx="0.5" fill="#1a1a1a"/>
          <rect x="64" y="52" width="4" height="3" rx="0.5" fill="#1a1a1a"/>
          <rect x="58" y="57" width="4" height="3" rx="0.5" fill="#1a1a1a"/>
          <rect x="64" y="57" width="4" height="3" rx="0.5" fill="#1a1a1a"/>
          {/* Gear icon at bottom */}
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

  const services = [
    {
      icon: '/assets/images/web-development.png',
      title: 'Web Development',
      description: 'Building fast, secure, and scalable websites with modern technologies.',
      link: '/web-development',
      svgIcon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      icon: '/assets/images/app-development.png',
      title: 'Mobile App Development',
      description: 'Creating powerful, user-centric mobile applications for iOS and Android.',
      link: '/app-development',
      svgIcon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      icon: '/assets/images/seo.png',
      title: 'SEO Optimization',
      description: 'Increasing organic visibility and attracting qualified traffic.',
      link: '/seo',
      svgIcon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      icon: '/assets/images/social-media-marketing.png',
      title: 'Digital Marketing',
      description: 'Building authentic brand presence and driving engagement.',
      link: '/social-media-marketing',
      svgIcon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      icon: '/assets/images/web-development.png',
      title: 'Online Consulting',
      description: 'Expert guidance and strategic advice to help your business grow and succeed.',
      link: '/online-consulting',
      svgIcon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10H16M8 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      icon: '/assets/images/app-development.png',
      title: 'Online Industrial Training',
      description: 'Comprehensive training programs to enhance skills and advance careers.',
      link: '/online-industrial-training',
      svgIcon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      )
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
      {/* Hero Section with Search - Meander Style */}
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

      {/* Products Grid Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Our Products</div>
            <h2>Ready-to-Deploy Solutions</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Explore our collection of pre-built apps and platforms ready for customization
            </p>
          </div>
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
          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
              <p>No products found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">What We Do</div>
            <h2>Our Services</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Comprehensive digital solutions to help your business thrive in the online world
            </p>
          </div>
          <div className="grid grid-4">
            {services.map((service, index) => (
              <div key={index} className="service-card fade-in-up">
                <div className="service-icon" style={{ background: 'var(--bg-white)', color: 'var(--accent-color)' }}>
                  {service.svgIcon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to={service.link} className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }}>
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <div className="section-subtitle">About Us</div>
              <h2>Programmingglore</h2>
              <p>
                We are a digital agency specializing in providing comprehensive solutions 
                for small businesses. Our services include web development, mobile app 
                development, SEO optimization, and digital marketing.
              </p>
              <p>
                Located in Mohali, we understand the unique challenges small businesses 
                face and provide reliable, affordable solutions to help them succeed online.
              </p>
              <Link to="/about-us" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Learn More About Us
              </Link>
            </div>
            <div>
              <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                <div className="card">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="card-title">Expert Team</h4>
                  <p className="card-description">Experienced developers dedicated to your success</p>
                </div>
                <div className="card">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="card-title">Modern Technology</h4>
                  <p className="card-description">Latest tools and frameworks for optimal performance</p>
                </div>
                <div className="card">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="card-title">Reliable Support</h4>
                  <p className="card-description">Ongoing maintenance and support services</p>
                </div>
                <div className="card">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="card-title">Affordable Solutions</h4>
                  <p className="card-description">Competitive pricing for small businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="grid grid-4">
            <div className="card" style={{ textAlign: 'center', padding: '2rem', border: 'none', boxShadow: 'none' }}>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                100+
              </div>
              <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                Projects Completed
              </div>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2rem', border: 'none', boxShadow: 'none' }}>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                50+
              </div>
              <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                Happy Clients
              </div>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2rem', border: 'none', boxShadow: 'none' }}>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                5+
              </div>
              <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                Years Experience
              </div>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2rem', border: 'none', boxShadow: 'none' }}>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                24/7
              </div>
              <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Why Choose Us</div>
            <h2>Key Features & Benefits</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Everything you need to build, launch, and grow your digital presence
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card" style={{ padding: '2rem' }}>
              <div className="service-icon" style={{ background: 'var(--bg-light)', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">Ready-to-Use Templates</h3>
              <p className="card-description">
                Pre-built solutions that you can customize and deploy quickly. Save time and resources with our proven templates.
              </p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div className="service-icon" style={{ background: 'var(--bg-light)', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">Client-Tested Systems</h3>
              <p className="card-description">
                All our solutions have been tested and proven in real-world scenarios. Deploy with confidence knowing it works.
              </p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div className="service-icon" style={{ background: 'var(--bg-light)', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">24/7 Support</h3>
              <p className="card-description">
                Get help whenever you need it. Our dedicated support team is available around the clock to assist you.
              </p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div className="service-icon" style={{ background: 'var(--bg-light)', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">Fully Customizable</h3>
              <p className="card-description">
                Every solution can be tailored to your specific needs. Modify, extend, and scale as your business grows.
              </p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div className="service-icon" style={{ background: 'var(--bg-light)', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">Documentation Included</h3>
              <p className="card-description">
                Comprehensive documentation and guides to help you understand and implement every feature.
              </p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div className="service-icon" style={{ background: 'var(--bg-light)', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">Affordable Pricing</h3>
              <p className="card-description">
                Competitive pricing designed for small businesses. Get enterprise-level solutions at startup-friendly prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Process</div>
            <h2>How It Works</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Simple steps to get your digital solution up and running
            </p>
          </div>
          <div className="grid grid-4">
            <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                1
              </div>
              <h3 className="card-title">Choose Your Solution</h3>
              <p className="card-description">
                Browse our collection and select the template or solution that fits your needs.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                2
              </div>
              <h3 className="card-title">Customize & Configure</h3>
              <p className="card-description">
                Work with our team to customize the solution according to your specific requirements.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                3
              </div>
              <h3 className="card-title">Deploy & Launch</h3>
              <p className="card-description">
                We handle the deployment process and ensure everything is set up correctly.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                4
              </div>
              <h3 className="card-title">Grow & Scale</h3>
              <p className="card-description">
                Continue to grow with ongoing support, updates, and scaling options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Testimonials</div>
            <h2>What Our Clients Say</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Real feedback from businesses we've helped succeed
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                  ))}
                </div>
                <p className="card-description" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                  "Programmingglore helped us launch our food delivery app in record time. The template was exactly what we needed, and their support team was incredibly helpful throughout the process."
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  👤
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>John Smith</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Restaurant Owner</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                  ))}
                </div>
                <p className="card-description" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                  "The taxi booking app we got from Programmingglore was perfect for our startup. Fully customizable and client-tested, it saved us months of development time."
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  👤
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>Sarah Johnson</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Startup Founder</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                  ))}
                </div>
                <p className="card-description" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                  "Excellent service and support! The grocery app solution was exactly what we needed, and the 1-month free support was a great bonus. Highly recommended!"
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  👤
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>Michael Chen</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
              Ready to Grow Your Business?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              Let's discuss how we can help you achieve your digital goals
            </p>
            <Link to="/contact" className="btn" style={{ background: 'var(--secondary-color)', color: 'var(--primary-color)' }}>
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
