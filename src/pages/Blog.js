import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
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

      {/* Newsletter Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
              Stay Updated
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              Subscribe to our newsletter for the latest articles and updates
            </p>
            <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', gap: '0.75rem' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '0.875rem 1.25rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
              <button className="btn" style={{ background: 'var(--secondary-color)', color: 'var(--primary-color)', whiteSpace: 'nowrap' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
