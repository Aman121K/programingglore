import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEO';
import Analytics from './components/Analytics';

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
    // Load external scripts with error handling
    const loadScript = (src, id, options = {}) => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = options.async !== false;
        script.crossOrigin = options.crossOrigin || 'anonymous';
        
        script.onload = () => {
          resolve();
        };
        
        script.onerror = (error) => {
          console.warn(`Failed to load script: ${src}`, error);
          // Remove failed script
          const failedScript = document.getElementById(id);
          if (failedScript) {
            failedScript.remove();
          }
          // Resolve anyway to not block other scripts
          resolve();
        };
        
        document.body.appendChild(script);
      });
    };

    // Load scripts in sequence with error handling
    const loadScripts = async () => {
      try {
        // Load jQuery from CDN (more reliable)
        if (!window.jQuery) {
          await loadScript('https://code.jquery.com/jquery-3.7.1.min.js', 'jquery-core-js', {
            crossOrigin: 'anonymous'
          });
        }
        
        // Load jQuery migrate only if jQuery loaded successfully
        if (window.jQuery && !window.jQuery.migrateWarnings) {
          await loadScript('https://code.jquery.com/jquery-migrate-3.4.1.min.js', 'jquery-migrate-js', {
            crossOrigin: 'anonymous'
          });
        }
        
        // Load Swiper
        if (!window.Swiper) {
          await loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', 'swiper-js', {
            crossOrigin: 'anonymous'
          });
        }

        // Load other scripts after dependencies are ready
        // Only load if jQuery is available (for scripts that depend on it)
        // Use try-catch to prevent blocking if script fails
        try {
          if (window.jQuery) {
            await Promise.race([
              loadScript('/assets/js/frontend.min.js', 'elementor-frontend-js', {
                async: true
              }),
              // Timeout after 5 seconds
              new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))
            ]).catch((error) => {
              console.warn('frontend.min.js loading timeout or error:', error);
            });
          }
        } catch (error) {
          console.warn('Error loading frontend.min.js:', error);
        }
      } catch (error) {
        console.warn('Error loading scripts:', error);
        // Continue execution even if scripts fail
      }
    };

    // Wait a bit for React to render before loading scripts
    const timer = setTimeout(() => {
      loadScripts();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      <Analytics />
      <SEOHead />
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

