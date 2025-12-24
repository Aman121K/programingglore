import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on Programmingglore\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.'
    },
    {
      title: 'Services',
      content: 'We provide web development, mobile app development, SEO, and digital marketing services. All services are provided "as is" and we make no warranties regarding the results or outcomes.'
    },
    {
      title: 'Payment Terms',
      content: 'Payment terms will be agreed upon before the commencement of any project. We reserve the right to request a deposit before starting work. Final payment is due upon project completion.'
    },
    {
      title: 'Intellectual Property',
      content: 'All content, designs, code, and materials created by Programmingglore remain our property until full payment is received. Upon full payment, ownership transfers to the client as specified in the project agreement.'
    },
    {
      title: 'Limitation of Liability',
      content: 'Programmingglore shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.'
    },
    {
      title: 'Modifications',
      content: 'We reserve the right to modify these terms at any time. Your continued use of our services after any changes constitutes acceptance of the new terms.'
    },
    {
      title: 'Contact Information',
      content: 'For any questions regarding these Terms of Service, please contact us at programmingglore@gmail.com or call us at +91 9877031481.'
    }
  ];

  return (
    <div className="site-content">
      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Terms of Service<br />
              Legal Agreement
            </h1>
            <p className="products-hero-subtitle">
              Last Updated: March 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card" style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--bg-light)' }}>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-secondary)', margin: 0 }}>
                Please read these Terms of Service carefully before using our website and services. 
                These terms govern your use of Programmingglore\'s services and website.
              </p>
            </div>

            {sections.map((section, index) => (
              <div key={index} className="card" style={{ marginBottom: '1.5rem' }}>
                <h3 className="card-title" style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  {index + 1}. {section.title}
                </h3>
                <p className="card-description" style={{ lineHeight: '1.8', fontSize: '1rem' }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--primary-color)', color: 'var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
              Questions About Terms?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              If you have any questions regarding our Terms of Service, please feel free to reach out to us.
            </p>
            <Link to="/contact" className="btn" style={{ background: 'var(--secondary-color)', color: 'var(--primary-color)' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
