import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: '/assets/images/web-designing.png',
      title: 'Web Design',
      description: 'Creating visually stunning, user-friendly websites that convert visitors into customers.',
      features: ['Custom and responsive design', 'User-friendly interface (UI/UX)', 'Mobile and SEO optimization'],
      link: '/web-designing'
    },
    {
      icon: '/assets/images/web-development.png',
      title: 'Web Development',
      description: 'Building fast, secure, and scalable websites with robust functionality.',
      features: ['Scalable and secure architecture', 'Fast-loading, high-performance code', 'Custom features and API integrations'],
      link: '/web-development'
    },
    {
      icon: '/assets/images/ecommerce.png',
      title: 'Ecommerce',
      description: 'Developing high-converting online stores that simplify shopping and drive sales.',
      features: ['Custom Online Store Development', 'Secure Payment Integration', 'Mobile-Optimized Shopping Experience'],
      link: '/ecommerce'
    },
    {
      icon: '/assets/images/app-development.png',
      title: 'App Development',
      description: 'Powerful, user-centric mobile applications that solve problems and drive engagement.',
      features: ['Native and cross-platform app solutions', 'User-friendly UI/UX design', 'Integration with APIs'],
      link: '/app-development'
    },
    {
      icon: '/assets/images/seo.png',
      title: 'SEO',
      description: 'Increasing organic visibility and attracting qualified traffic.',
      features: ['Technical and on-page SEO optimization', 'Keyword strategy and content planning', 'Performance tracking and monthly reporting'],
      link: '/seo'
    },
    {
      icon: '/assets/images/social-media-marketing.png',
      title: 'Social Media Marketing',
      description: 'Building authentic brand presence and driving engagement.',
      features: ['Content strategy and creation', 'Community management and growth', 'Performance analytics and reporting'],
      link: '/social-media-marketing'
    },
    {
      icon: '/assets/images/social-media-post-creation-&-posting.png',
      title: 'Social Media Management',
      description: 'Consistent, on-brand content that engages your audience.',
      features: ['Scroll-stopping graphic and video creation', 'Strategic caption writing and hashtag research', 'Reliable scheduling and platform posting'],
      link: '/social-media-post-creation-&-posting'
    },
    {
      icon: '/assets/images/web-development.png',
      title: 'Online Consulting',
      description: 'Expert guidance and strategic advice to help your business grow and succeed.',
      features: ['Business strategy consulting', 'Technology consulting', 'Digital transformation guidance', 'Marketing strategy advice'],
      link: '/online-consulting'
    },
    {
      icon: '/assets/images/app-development.png',
      title: 'Online Industrial Training',
      description: 'Comprehensive training programs to enhance skills and advance careers.',
      features: ['Industry-relevant curriculum', 'Hands-on projects and case studies', 'Flexible learning schedule', 'Certification upon completion'],
      link: '/online-industrial-training'
    }
  ];

  return (
    <div className="site-content">
      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Our Services<br />
              Digital Solutions
            </h1>
            <p className="products-hero-subtitle">
              Comprehensive digital solutions to help your business thrive online
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">What We Offer</div>
            <h2>Complete Digital Services</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              From web design to digital marketing, we provide end-to-end solutions for your business
            </p>
          </div>
          <div className="grid grid-3">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to={service.link} className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }}>
                  Learn More →
                </Link>
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
              Need a Custom Solution?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              We can create a tailored solution for your specific business needs.
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

export default Services;
