import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileMenu = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize mobile menu functionality
    const menuContainer = document.querySelector('.mobile-menu-container');
    const closeButton = document.querySelector('.mobile-menu-close');
    const menuTrigger = document.querySelector('.mobile-menu-trigger');

    const openMenu = () => {
      if (menuContainer) {
        menuContainer.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
      }
    };

    const closeMenu = () => {
      if (menuContainer) {
        menuContainer.classList.remove('menu-open');
        document.body.style.overflow = '';
      }
    };

    if (closeButton) {
      closeButton.addEventListener('click', closeMenu);
    }

    if (menuTrigger) {
      menuTrigger.addEventListener('click', openMenu);
    }

    // Close menu when route changes
    closeMenu();

    return () => {
      if (closeButton) {
        closeButton.removeEventListener('click', closeMenu);
      }
      if (menuTrigger) {
        menuTrigger.removeEventListener('click', openMenu);
      }
    };
  }, [location]);

  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu-header">
        <div className="mobile-menu-logo">
          <Link to="/" onClick={() => {
            const menuContainer = document.querySelector('.mobile-menu-container');
            if (menuContainer) menuContainer.classList.remove('menu-open');
          }}>
            <img src="/assets/images/header-logo.svg" alt="Programmingglore Logo" style={{ maxHeight: '40px' }} />
          </Link>
        </div>
        <div className="mobile-menu-close"></div>
      </div>
      <div id="mobile-menu-wrap">
        <ul className="menu">
          <li className={location.pathname === '/' ? 'current-menu-item' : ''}>
            <Link to="/" onClick={() => {
              const menuContainer = document.querySelector('.mobile-menu-container');
              if (menuContainer) menuContainer.classList.remove('menu-open');
            }}>Home</Link>
          </li>
          <li className={location.pathname === '/about-us' ? 'current-menu-item' : ''}>
            <Link to="/about-us" onClick={() => {
              const menuContainer = document.querySelector('.mobile-menu-container');
              if (menuContainer) menuContainer.classList.remove('menu-open');
            }}>About Us</Link>
          </li>
          <li className={location.pathname === '/services' ? 'current-menu-item' : ''}>
            <Link to="/services" onClick={() => {
              const menuContainer = document.querySelector('.mobile-menu-container');
              if (menuContainer) menuContainer.classList.remove('menu-open');
            }}>Services</Link>
          </li>
          <li className={location.pathname === '/portfolio' ? 'current-menu-item' : ''}>
            <Link to="/portfolio" onClick={() => {
              const menuContainer = document.querySelector('.mobile-menu-container');
              if (menuContainer) menuContainer.classList.remove('menu-open');
            }}>Portfolio</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'current-menu-item' : ''}>
            <Link to="/contact" onClick={() => {
              const menuContainer = document.querySelector('.mobile-menu-container');
              if (menuContainer) menuContainer.classList.remove('menu-open');
            }}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu-phone">
        <a href="tel:+919877031481">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-1.015-.063L9.982 10.356a.678.678 0 0 1-.063-1.015l1.794-2.307a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-1.015-.063L5.356 8.018a.678.678 0 0 1-.063-1.015l1.794-2.307a.678.678 0 0 0-.063-1.015L3.654 1.328z"/>
          </svg>
          +91 9877031481
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;

