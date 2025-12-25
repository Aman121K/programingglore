import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { apiService } from '../services/api';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await apiService.subscribeNewsletter(email);
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const blogPosts = [
    {
      title: '10 Essential Web Development Trends for 2024',
      excerpt: 'Discover the latest trends shaping the future of web development and how they can benefit your business.',
      date: 'March 15, 2024',
      category: 'Web Development',
      image: '/assets/images/web-development.png',
      readTime: '5 min read'
    },
    {
      title: 'The Complete Guide to Mobile App Development',
      excerpt: 'Everything you need to know about building successful mobile applications for iOS and Android.',
      date: 'March 10, 2024',
      category: 'Mobile Apps',
      image: '/assets/images/app-development.png',
      readTime: '8 min read'
    },
    {
      title: 'SEO Best Practices for Small Businesses',
      excerpt: 'Learn how to improve your search engine rankings and attract more organic traffic to your website.',
      date: 'March 5, 2024',
      category: 'SEO',
      image: '/assets/images/seo.png',
      readTime: '6 min read'
    },
    {
      title: 'Digital Marketing Strategies That Work',
      excerpt: 'Effective digital marketing strategies to help your business grow and reach more customers online.',
      date: 'February 28, 2024',
      category: 'Digital Marketing',
      image: '/assets/images/social-media-marketing.png',
      readTime: '7 min read'
    },
    {
      title: 'Building an E-commerce Store: A Step-by-Step Guide',
      excerpt: 'A comprehensive guide to creating a successful online store that drives sales and customer satisfaction.',
      date: 'February 20, 2024',
      category: 'Ecommerce',
      image: '/assets/images/ecommerce.png',
      readTime: '10 min read'
    },
    {
      title: 'Why Your Business Needs a Professional Website',
      excerpt: 'Discover the importance of having a professional website and how it can transform your business.',
      date: 'February 15, 2024',
      category: 'Web Design',
      image: '/assets/images/web-designing.png',
      readTime: '4 min read'
    }
  ];

  return (
    <div className="site-content">
      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Blog & Insights<br />
              Stay Updated
            </h1>
            <p className="products-hero-subtitle">
              Latest articles, guides, and insights on web development, digital marketing, and technology trends
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {blogPosts.map((post, index) => (
              <article key={index} className="product-card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}>
                <div className="product-image-wrapper" style={{ height: '200px', marginBottom: 0, borderRadius: '12px 12px 0 0' }}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="product-card-content" style={{ padding: '1.5rem' }}>
                  <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="product-title" style={{ minHeight: 'auto', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                    {post.title}
                  </h3>
                  <p className="product-description" style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>
                      {post.date}
                    </span>
                    <Link to="#" className="btn btn-outline btn-sm" style={{ padding: '0.5rem 1rem' }}>
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Enhanced Design */}
      <section className="section" style={{ background: 'var(--bg-light)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
            borderRadius: '24px',
            padding: '4rem 3rem',
            boxShadow: '0 20px 60px rgba(37, 99, 235, 0.25), 0 8px 24px rgba(37, 99, 235, 0.15)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center'
          }}>
            {/* Decorative background elements */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-10%',
              width: '300px',
              height: '300px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50%',
              filter: 'blur(60px)'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-30%',
              left: '-5%',
              width: '250px',
              height: '250px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '50%',
              filter: 'blur(50px)'
            }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{
                color: '#ffffff',
                marginBottom: '1rem',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: '800',
                letterSpacing: '-0.02em'
              }}>
                Stay Updated
              </h2>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2.5rem',
                fontSize: '1.125rem',
                lineHeight: '1.6',
                maxWidth: '600px',
                margin: '0 auto 2.5rem'
              }}>
                Subscribe to our newsletter for the latest articles and updates
              </p>

              <form onSubmit={handleNewsletterSubmit} style={{ maxWidth: '550px', margin: '0 auto' }}>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  background: '#ffffff',
                  borderRadius: '10px',
                  padding: '0.375rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    style={{
                      flex: 1,
                      padding: '0.75rem 1rem',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      outline: 'none',
                      color: 'var(--text-dark)',
                      background: 'transparent'
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: 'var(--text-gray)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '0.75rem 1.5rem',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      opacity: isSubmitting ? 0.7 : 1,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.target.style.background = 'var(--text-dark)';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.target.style.background = 'var(--text-gray)';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
                      }
                    }}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#10b981',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    ✓ Successfully subscribed! Check your email.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(239, 68, 68, 0.2)',
                    color: '#ef4444',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    ✗ Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
