import React from 'react';
import { Link } from 'react-router-dom';

const SocialMediaPostCreation = () => {
  const features = [
    'Scroll-stopping graphic and video creation',
    'Strategic caption writing and hashtag research',
    'Reliable scheduling and platform posting',
    'Brand-consistent design',
    'Multiple format support',
    'Content calendar management'
  ];

  const contentTypes = [
    {
      title: 'Graphics & Images',
      description: 'Eye-catching visuals that represent your brand'
    },
    {
      title: 'Video Content',
      description: 'Engaging videos that tell your story'
    },
    {
      title: 'Written Content',
      description: 'Compelling captions that drive engagement'
    },
    {
      title: 'Stories & Reels',
      description: 'Short-form content for maximum impact'
    }
  ];

  return (
    <div className="site-content">
      <section className="hero-section" style={{ minHeight: '50vh', paddingTop: '120px' }}>
        <div className="hero-content">
          <div className="section-subtitle">Our Services</div>
          <h1 className="hero-title">Social Media Management</h1>
          <p className="hero-subtitle">
            Consistent, on-brand content that engages your audience and builds your community
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2>Complete Social Media Management</h2>
              <p>
                Managing social media can be time-consuming. Our social media management services 
                take care of everything—from content creation to posting and engagement—so you 
                can focus on running your business.
              </p>
              <p>
                We create consistent, high-quality content that reflects your brand and engages 
                your audience, helping you build a strong online presence.
              </p>
            </div>
            <div>
              <img 
                src="/assets/images/social-media-post-creation-&-posting.png" 
                alt="Social Media Management"
                style={{ width: '100%', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Content Types We Create</h2>
          </div>
          <div className="grid grid-4">
            {contentTypes.map((type, index) => (
              <div key={index} className="card">
                <h4 className="card-title">{type.title}</h4>
                <p className="card-description">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>What We Include</h2>
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
            <h2 style={{ marginBottom: '1rem' }}>Ready to Streamline Your Social Media?</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              Let us handle your social media content creation and posting so you can focus on your business.
            </p>
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPostCreation;
