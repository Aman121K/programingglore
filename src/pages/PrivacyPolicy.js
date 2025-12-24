import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, send you updates about our services, and comply with legal obligations.'
    },
    {
      title: 'Information Sharing',
      content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.'
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving marketing communications from us.'
    },
    {
      title: 'Cookies',
      content: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.'
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us at programmingglore@gmail.com or call us at +91 9877031481.'
    }
  ];

  return (
    <div className="site-content">
      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Privacy Policy<br />
              Your Data Protection
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
                At Programmingglore, we are committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
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
              Questions About Privacy?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              If you have any questions or concerns about our Privacy Policy, please don't hesitate to contact us.
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

export default PrivacyPolicy;
