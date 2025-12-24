import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioItems = [
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
              <div key={index} className="product-card" style={{ padding: 0, overflow: 'hidden' }}>
                <div className="product-image-wrapper" style={{ height: '280px', marginBottom: 0, borderRadius: '12px 12px 0 0' }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="product-card-content" style={{ padding: '1.5rem' }}>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{ 
                      background: 'var(--bg-light)', 
                      color: 'var(--accent-color)', 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '4px', 
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="product-title" style={{ minHeight: 'auto', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p className="product-description" style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                    📍 {item.location}
                  </p>
                  <p className="product-description" style={{ marginBottom: '1rem' }}>
                    {item.description}
                  </p>
                  <div className="product-technologies" style={{ marginBottom: '1rem' }}>
                    {item.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%' }}
                  >
                    View Project →
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
