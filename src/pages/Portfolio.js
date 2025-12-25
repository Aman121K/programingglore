import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Component to load DriverSuvidha website image with fallback
const DriverSuvidhaImage = () => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('https://driversuvidha.com/assets/images/logo.png');
  
  // Try multiple image sources from the website
  const imageSources = [
    'https://driversuvidha.com/assets/images/logo.png',
    'https://driversuvidha.com/logo.png',
    'https://driversuvidha.com/images/logo.png',
    'https://driversuvidha.com/favicon.ico',
    'https://driversuvidha.com/wp-content/uploads/logo.png'
  ];
  
  const handleImageError = () => {
    const currentIndex = imageSources.indexOf(imageSrc);
    if (currentIndex < imageSources.length - 1) {
      // Try next image source
      setImageSrc(imageSources[currentIndex + 1]);
    } else {
      // All sources failed, show fallback
      setImageError(true);
    }
  };
  
  if (imageError) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        color: '#ffffff',
        fontSize: '2rem',
        fontWeight: '700',
        textAlign: 'center',
        padding: '2rem',
        flexDirection: 'column'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚗</div>
        <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>DriverSuvidha</div>
        <div style={{ fontSize: '0.875rem', opacity: 0.9, marginTop: '0.5rem' }}>Driver Service Platform</div>
      </div>
    );
  }
  
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: '#ffffff',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <img 
        src={imageSrc} 
        alt="DriverSuvidha Logo"
        onError={handleImageError}
        style={{ 
          maxWidth: '90%', 
          maxHeight: '90%', 
          objectFit: 'contain',
          filter: 'brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
        }}
      />
    </div>
  );
};

const Portfolio = () => {
  const portfolioItems = [
    {
      image: '/assets/images/portfolio/PhoneHub.png',
      title: 'Kitabcloud',
      location: 'Sweden',
      link: 'https://mini.kitabcloud.se/home',
      description: 'Cloud-based platform for digital solutions and services',
      category: 'Cloud Platform',
      technologies: ['React', 'Cloud Services', 'Modern Web'],
      featured: true,
      isNew: true
    },
    {
      image: 'https://driversuvidha.com/assets/images/logo.png',
      title: 'DriverSuvidha',
      location: 'Mumbai, India',
      link: 'https://driversuvidha.com/',
      description: 'Driver service platform for hiring chauffeurs and drivers for private car owners. On-call and contractual driver services across multiple cities. Division of Eion Travelcare Private Limited.',
      category: 'Service Platform',
      technologies: ['React', 'Node.js', 'Booking System', 'Payment Gateway'],
      featured: true
    },
    {
      image: '/assets/images/portfolio/gorealtors.png',
      title: 'Go Realtors',
      location: 'Gurgaon, India',
      link: 'https://gorealtors.in/',
      description: 'Premium property consultant in Gurgaon offering personalized guidance, market insights, and exclusive access to luxury residential and commercial properties. Specializing in real estate investment consultancy with end-to-end legal and financial support.',
      category: 'Real Estate',
      technologies: ['WordPress', 'Elementor', 'Property Management', 'Real Estate'],
      featured: true
    },
    {
      image: '/assets/images/portfolio/PhoneHub.png',
      title: 'PhoneHub',
      location: 'Dubai, UAE',
      link: 'https://phonehub.ae/',
      description: 'E-commerce platform for mobile phones and accessories',
      category: 'E-commerce',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      image: '/assets/images/portfolio/churros.png',
      title: 'The Churro Kingdom',
      location: 'Liverpool, UK',
      link: 'https://thechurrokingdom.com/',
      description: 'Restaurant website and online ordering system',
      category: 'Restaurant',
      technologies: ['WordPress', 'WooCommerce', 'PHP']
    },
    {
      image: '/assets/images/portfolio/ghazi-fashion.png',
      title: 'Ghazi Online',
      location: 'United Kingdom',
      link: 'https://ghazionline.co.uk/',
      description: 'Premium activewear and loungewear e-commerce platform',
      category: 'Fashion E-commerce',
      technologies: ['React', 'Shopify', 'Node.js']
    },
    {
      image: '/assets/images/portfolio/rozdeal.png',
      title: 'Rozdeal.com',
      location: 'Madhya Pradesh, India',
      link: 'https://rozdeal.com/',
      description: 'Instant delivery marketplace bringing groceries, essentials, and household items within minutes at unbeatable prices',
      category: 'E-commerce',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      image: '/assets/images/portfolio/weather-app.png',
      title: 'Weather App',
      location: 'Global',
      link: 'https://waether-app-new.vercel.app/',
      description: 'Modern weather application with real-time forecasts and location-based updates',
      category: 'Web Application',
      technologies: ['React', 'Vercel', 'API Integration']
    },
    {
      image: '/assets/images/portfolio/gamese.png',
      title: 'Gamese.gg',
      location: 'Brazil',
      link: 'https://gamese.gg/',
      description: 'Gaming platform and community hub for organizing tournaments and connecting gamers',
      category: 'Gaming Platform',
      technologies: ['React', 'Node.js', 'Gaming APIs']
    },
    {
      image: '/assets/images/portfolio/happynature.png',
      title: 'Happy Nature',
      location: 'India',
      link: 'https://www.happynature.in/',
      description: 'Fresh farm-fresh organic milk, ghee, paneer, curd and other organic dairy products delivered to your doorstep',
      category: 'E-commerce',
      technologies: ['React', 'Node.js', 'E-commerce']
    }
  ];

  return (
    <div className="site-content">
      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Our Portfolio<br />
              Success Stories
            </h1>
            <p className="products-hero-subtitle">
              Explore some of our recent projects and see how we've helped businesses succeed online
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Our Work</div>
            <h2>Featured Projects</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              A showcase of our best work across different industries and platforms
            </p>
          </div>
          <div className="grid grid-3">
            {portfolioItems.map((item, index) => (
              <div 
                key={index} 
                className="product-card" 
                style={{ 
                  padding: 0, 
                  overflow: 'hidden',
                  border: item.featured ? '2px solid var(--primary-color)' : '1px solid var(--border-color)',
                  boxShadow: item.featured ? '0 8px 24px rgba(37, 99, 235, 0.2)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
                  transform: item.featured ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                {item.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    zIndex: 10,
                    display: 'flex',
                    gap: '0.5rem'
                  }}>
                    {item.isNew && (
                      <span style={{
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        color: '#ffffff',
                        padding: '0.375rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
                      }}>
                        ⭐ New
                      </span>
                    )}
                    <span style={{
                      background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
                      color: '#ffffff',
                      padding: '0.375rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)'
                    }}>
                      Featured
                    </span>
                  </div>
                )}
                <div className="product-image-wrapper" style={{ 
                  height: '280px', 
                  marginBottom: 0, 
                  borderRadius: '12px 12px 0 0',
                  background: item.featured ? 'linear-gradient(135deg, var(--primary-light) 0%, var(--bg-light) 100%)' : 'var(--bg-light)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {item.title === 'Kitabcloud' ? (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                      color: '#ffffff',
                      fontSize: '2rem',
                      fontWeight: '700',
                      textAlign: 'center',
                      padding: '2rem'
                    }}>
                      <div>
                        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>☁️</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>Kitabcloud</div>
                        <div style={{ fontSize: '0.875rem', opacity: 0.9, marginTop: '0.5rem' }}>Cloud Platform</div>
                      </div>
                    </div>
                  ) : item.title === 'DriverSuvidha' ? (
                    <DriverSuvidhaImage />
                  ) : (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )}
                </div>
                <div className="product-card-content" style={{ 
                  padding: '1.5rem',
                  background: item.featured ? 'linear-gradient(to bottom, #ffffff 0%, var(--bg-light) 100%)' : '#ffffff'
                }}>
                  <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ 
                      background: item.featured ? 'var(--primary-gradient)' : 'var(--bg-light)', 
                      color: item.featured ? '#ffffff' : 'var(--accent-color)', 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '4px', 
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="product-title" style={{ 
                    minHeight: 'auto', 
                    marginBottom: '0.5rem',
                    color: item.featured ? 'var(--primary-color)' : 'var(--text-dark)',
                    fontSize: item.featured ? '1.5rem' : '1.25rem',
                    fontWeight: item.featured ? '700' : '600'
                  }}>
                    {item.title}
                  </h3>
                  <p className="product-description" style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                    📍 {item.location}
                  </p>
                  <p className="product-description" style={{ marginBottom: '1rem' }}>
                    {item.description}
                  </p>
                  <div className="product-technologies" style={{ marginBottom: '1rem' }}>
                    {item.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="tech-tag"
                        style={{
                          background: item.featured ? 'var(--primary-light)' : 'var(--bg-light)',
                          color: item.featured ? 'var(--primary-color)' : 'var(--text-secondary)',
                          fontWeight: item.featured ? '600' : '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ 
                      width: '100%',
                      background: item.featured ? 'var(--primary-gradient)' : 'var(--primary-color)',
                      fontWeight: item.featured ? '700' : '600',
                      boxShadow: item.featured ? '0 4px 12px rgba(37, 99, 235, 0.4)' : 'none'
                    }}
                  >
                    {item.featured ? '🚀 View Project →' : 'View Project →'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
              Have a Project in Mind?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              Let's discuss how we can bring your vision to life.
            </p>
            <Link to="/contact" className="btn" style={{ background: 'var(--secondary-color)', color: 'var(--primary-color)' }}>
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
