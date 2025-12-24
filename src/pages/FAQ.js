import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const faqs = [
    {
      question: 'What is the difference between web design and web development?',
      answer: 'Web design focuses on the visual appearance and user experience of a website, while web development involves the technical side — building and coding the website to make it functional. Our agency offers both, ensuring your site looks great and works perfectly.',
      category: 'General'
    },
    {
      question: 'What technologies do you use for web development?',
      answer: 'We use modern technologies including React, Node.js, Laravel, PHP, JavaScript, and various CMS platforms like WordPress. We choose the best technology stack based on your project requirements.',
      category: 'Technical'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'The timeline depends on the complexity of your project. A simple business website typically takes 2-4 weeks, while a complex e-commerce platform may take 6-12 weeks. We provide detailed timelines during our initial consultation.',
      category: 'Timeline'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer ongoing support and maintenance packages to ensure your website continues to perform optimally. This includes security updates, content updates, and technical support.',
      category: 'Support'
    },
    {
      question: 'Can you help with SEO?',
      answer: 'Absolutely! We offer comprehensive SEO services including technical SEO, on-page optimization, keyword strategy, and performance tracking to help improve your search engine rankings.',
      category: 'SEO'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Yes! We specialize in working with small businesses and provide affordable, reliable solutions tailored to their needs and budget.',
      category: 'General'
    },
    {
      question: 'What is included in your online consulting services?',
      answer: 'Our online consulting services include business strategy guidance, technology consulting, digital transformation advice, and marketing strategy. We offer flexible scheduling and personalized advice tailored to your business needs.',
      category: 'Consulting'
    },
    {
      question: 'Do you offer training programs?',
      answer: 'Yes, we provide comprehensive online industrial training programs in web development, mobile app development, digital marketing, data science, cloud computing, and UI/UX design. All programs include hands-on projects and certification.',
      category: 'Training'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="site-content">
      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Frequently Asked<br />
              Questions
            </h1>
            <p className="products-hero-subtitle">
              Find answers to common questions about our services and processes
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="card" 
                style={{ 
                  marginBottom: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: openAccordion === index ? '2px solid var(--accent-color)' : '1px solid var(--border-color)',
                  boxShadow: openAccordion === index ? '0 4px 12px rgba(0, 102, 255, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
                onClick={() => toggleAccordion(index)}
                onMouseEnter={(e) => {
                  if (openAccordion !== index) {
                    e.currentTarget.style.borderColor = 'var(--accent-color)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 102, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openAccordion !== index) {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                  }
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  padding: '1.5rem',
                  gap: '1rem'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span style={{ 
                        background: 'var(--bg-light)', 
                        color: 'var(--accent-color)', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '4px', 
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="card-title" style={{ margin: 0, fontSize: '1.125rem', fontWeight: '600' }}>
                      {faq.question}
                    </h3>
                  </div>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold',
                    color: 'var(--accent-color)',
                    transform: openAccordion === index ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    +
                  </div>
                </div>
                {openAccordion === index && (
                  <div style={{ 
                    padding: '0 1.5rem 1.5rem 1.5rem',
                    borderTop: '1px solid var(--border-color)',
                    marginTop: '0',
                    paddingTop: '1.5rem',
                    animation: 'fadeInUp 0.3s ease-out'
                  }}>
                    <p className="card-description" style={{ margin: 0, fontSize: '1rem', lineHeight: '1.7' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
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
              Still Have Questions?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              We're here to help! Get in touch with us and we'll answer any questions you have.
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

export default FAQ;
