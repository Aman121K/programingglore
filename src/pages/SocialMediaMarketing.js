import React from 'react';
import { Link } from 'react-router-dom';

const SocialMediaMarketing = () => {
  const features = [
    'Content strategy and creation',
    'Community management and growth',
    'Performance analytics and reporting',
    'Social media advertising',
    'Influencer partnerships',
    'Brand awareness campaigns'
  ];

  const platforms = [
    {
      name: 'Facebook',
      description: 'Build your community and engage with customers'
    },
    {
      name: 'Instagram',
      description: 'Showcase your brand visually and connect with followers'
    },
    {
      name: 'Twitter/X',
      description: 'Share updates and join conversations'
    },
    {
      name: 'LinkedIn',
      description: 'Connect with professionals and B2B audiences'
    }
  ];

  return (
    <div className="site-content">
      <section className="hero-section" style={{ minHeight: '50vh', paddingTop: '120px' }}>
        <div className="hero-content">
          <div className="section-subtitle">Our Services</div>
          <h1 className="hero-title">Social Media Marketing</h1>
          <p className="hero-subtitle">
            Building authentic brand presence and driving engagement through digital channels
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2>Strategic Social Media Marketing</h2>
              <p>
                Social media is where your customers are. Our social media marketing services help 
                you build a strong online presence, engage with your audience, and drive meaningful 
                results for your business.
              </p>
              <p>
                We create content that resonates with your audience, manage your social media 
                accounts, and run targeted campaigns that deliver real results.
              </p>
            </div>
            <div>
              <img 
                src="/assets/images/social-media-marketing.png" 
                alt="Social Media Marketing"
                style={{ width: '100%', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Platforms We Manage</h2>
          </div>
          <div className="grid grid-4">
            {platforms.map((platform, index) => (
              <div key={index} className="card">
                <h4 className="card-title">{platform.name}</h4>
                <p className="card-description">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services Include</h2>
          </div>
          <div className="grid grid-3">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <h4 className="card-title">{feature}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Grow Your Social Presence?</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              Let's create a social media strategy that engages your audience and drives results.
            </p>
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
