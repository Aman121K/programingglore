import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Team from './pages/Team';
import Products from './pages/Products';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AppDevelopment from './pages/AppDevelopment';
import WebDevelopment from './pages/WebDevelopment';
import WebDesigning from './pages/WebDesigning';
import Ecommerce from './pages/Ecommerce';
import SEO from './pages/SEO';
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import SocialMediaPostCreation from './pages/SocialMediaPostCreation';
import OnlineConsulting from './pages/OnlineConsulting';
import OnlineIndustrialTraining from './pages/OnlineIndustrialTraining';
import Models from './pages/Models';
import Integration from './pages/Integration';
import PlugNPlay from './pages/PlugNPlay';
import Resources from './pages/Resources';

function App() {
  useEffect(() => {
    // Load external scripts
    const loadScript = (src, id) => {
      if (document.getElementById(id)) return;
      const script = document.createElement('script');
      script.src = src;
      script.id = id;
      script.async = true;
      document.body.appendChild(script);
    };

    // Load jQuery and other dependencies
    loadScript('https://xcency.quintexbd.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1', 'jquery-core-js');
    loadScript('https://xcency.quintexbd.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1', 'jquery-migrate-js');
    
    // Load Swiper
    if (!window.Swiper) {
      loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', 'swiper-js');
    }

    // Load other scripts after DOM is ready
    const loadOtherScripts = () => {
      loadScript('/assets/js/frontend.min.js', 'elementor-frontend-js');
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadOtherScripts);
    } else {
      loadOtherScripts();
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/models" element={<Models />} />
          <Route path="/projects" element={<Integration />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/plug-n-play" element={<PlugNPlay />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/web-designing" element={<WebDesigning />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/seo" element={<SEO />} />
              <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
              <Route path="/social-media-post-creation-&-posting" element={<SocialMediaPostCreation />} />
              <Route path="/online-consulting" element={<OnlineConsulting />} />
              <Route path="/online-industrial-training" element={<OnlineIndustrialTraining />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

