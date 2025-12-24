import React from 'react';
import { Link } from 'react-router-dom';

const AppDevelopment = () => {
  const features = [
    'Native iOS and Android apps',
    'Cross-platform solutions',
    'User-friendly UI/UX design',
    'API integrations',
    'App store optimization',
    'Ongoing maintenance and updates'
  ];

  const process = [
    {
      step: '01',
      title: 'Planning',
      description: 'We analyze your requirements and create a detailed project plan.'
    },
    {
      step: '02',
      title: 'Design',
      description: 'We design intuitive interfaces that provide excellent user experience.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build your app using the latest technologies and best practices.'
    },
    {
      step: '04',
      title: 'Launch',
      description: 'We help you launch your app and provide ongoing support.'
    }
  ];

  return (
    <div className="site-content">
      <section className="hero-section" style={{ minHeight: '50vh', paddingTop: '120px' }}>
        <div className="hero-content">
          <div className="section-subtitle">Our Services</div>
          <h1 className="hero-title">Mobile App Development</h1>
          <p className="hero-subtitle">
            Creating powerful, user-centric mobile applications for iOS and Android
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2>Professional Mobile App Development</h2>
              <p>
                We develop mobile applications that solve real problems and drive engagement. 
                Whether you need a native iOS app, Android app, or a cross-platform solution, 
                we have the expertise to deliver.
              </p>
              <p>
                Our apps are built with user experience in mind, ensuring they are intuitive, 
                fast, and reliable. We handle everything from design to deployment and beyond.
              </p>
            </div>
            <div>
              <img 
                src="/assets/images/app-development.png" 
                alt="App Development"
                style={{ width: '100%', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>What We Offer</h2>
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

      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="section-subtitle">Our Process</div>
            <h2>How We Work</h2>
          </div>
          <div className="grid grid-4">
            {process.map((item, index) => (
              <div key={index} className="card">
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: '700', 
                  color: 'var(--accent-color)',
                  marginBottom: '1rem'
                }}>
                  {item.step}
                </div>
                <h4 className="card-title">{item.title}</h4>
                <p className="card-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Build Your App?</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              Let's discuss your app idea and bring it to life.
            </p>
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
