import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="site-content">
      <section className="hero-section" style={{ minHeight: '50vh', paddingTop: '120px' }}>
        <div className="hero-content">
          <div className="section-subtitle">Contact Us</div>
          <h1 className="hero-title">Get In Touch</h1>
          <p className="hero-subtitle">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            <div>
              <h2>Contact Information</h2>
              <div style={{ marginTop: '2rem' }}>
                <div className="card" style={{ marginBottom: '1.5rem' }}>
                  <h4 className="card-title">Address</h4>
                  <p className="card-description">
                    G-301 Imperial Height Sector 115<br />
                    Mohali Punjab 140307
                  </p>
                </div>
                <div className="card" style={{ marginBottom: '1.5rem' }}>
                  <h4 className="card-title">Email</h4>
                  <p className="card-description">
                    <a href="mailto:programmingglore@gmail.com">programmingglore@gmail.com</a>
                  </p>
                </div>
                <div className="card">
                  <h4 className="card-title">Phone</h4>
                  <p className="card-description">
                    <a href="tel:+919877031481">+91 9877031481</a>
                  </p>
                </div>
              </div>
              
              {/* Map Section */}
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Find Us</h3>
                <div className="card" style={{ padding: 0, overflow: 'hidden', borderRadius: '12px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5!2d76.7089!3d30.7045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f93b8b8b8b8b9%3A0x8b8b8b8b8b8b8b8b!2sImperial%20Height%2C%20Sector%20115%2C%20Mohali%2C%20Punjab%20140307!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0, display: 'block', borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Programmingglore Location - G-301 Imperial Height Sector 115, Mohali Punjab"
                  ></iframe>
                </div>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Imperial+Height+Sector+115+Mohali+Punjab+140307" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent-color)' }}
                  >
                    Open in Google Maps →
                  </a>
                </p>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: '2rem' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
