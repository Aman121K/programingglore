import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and documentation for all our products and services.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      link: '#'
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples and integration guides.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '#'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video tutorials to help you get started quickly.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 10L18.553 7.724C19.217 7.292 20 7.768 20 8.566V15.434C20 16.232 19.217 16.708 18.553 16.276L15 14V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      link: '#'
    },
    {
      title: 'Code Examples',
      description: 'Ready-to-use code snippets and examples for common use cases.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3L4 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21L20 17L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 3L22 3L22 21L14 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '#'
    },
    {
      title: 'FAQ',
      description: 'Frequently asked questions and answers to common queries.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      link: '/faq'
    },
    {
      title: 'Support Center',
      description: 'Get help from our support team and community forums.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '/contact'
    }
  ];

  const blogPosts = [
    {
      title: 'Getting Started with Web Development',
      excerpt: 'A comprehensive guide to starting your web development journey.',
      date: 'March 20, 2024',
      category: 'Tutorial',
      link: '#'
    },
    {
      title: 'Best Practices for Mobile App Development',
      excerpt: 'Learn the essential practices for building successful mobile applications.',
      date: 'March 15, 2024',
      category: 'Guide',
      link: '#'
    },
    {
      title: 'SEO Optimization Tips for 2024',
      excerpt: 'Latest SEO strategies and techniques to improve your website rankings.',
      date: 'March 10, 2024',
      category: 'Tips',
      link: '#'
    }
  ];

  return (
    <div className="site-content">
      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Resources & Documentation<br />
              for Developers
            </h1>
            <p className="products-hero-subtitle">
              Learn. Build. Succeed. Comprehensive resources to help you build amazing applications.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Resources</div>
            <h2>Learning Resources</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Access documentation, tutorials, code examples, and support resources
            </p>
          </div>
          <div className="grid grid-3">
            {resources.map((resource, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ background: 'var(--bg-light)', color: 'var(--accent-color)' }}>
                  {resource.icon}
                </div>
                <h3 className="service-title">{resource.title}</h3>
                <p className="service-description">{resource.description}</p>
                <Link to={resource.link} className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }}>
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Latest Articles</div>
            <h2>Helpful Guides & Tutorials</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Stay updated with the latest guides, tutorials, and best practices
            </p>
          </div>
          <div className="grid grid-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="card">
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ 
                    background: 'var(--bg-light)', 
                    color: 'var(--accent-color)', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '4px', 
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {post.category}
                  </span>
                </div>
                <h3 className="card-title">{post.title}</h3>
                <p className="card-description">{post.excerpt}</p>
                <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-light)' }}>
                  {post.date}
                </div>
                <Link to={post.link} className="btn btn-outline" style={{ marginTop: '1rem', width: '100%' }}>
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
              Need Additional Help?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              Contact our support team for personalized assistance
            </p>
            <Link to="/contact" className="btn" style={{ background: 'var(--secondary-color)', color: 'var(--primary-color)' }}>
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;

