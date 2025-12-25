import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Marketing configuration - Update this file for easy marketing changes
const marketingConfig = {
  siteName: 'Programmingglore',
  siteUrl: 'https://www.programmingglore.com', // Update with your actual domain
  defaultTitle: 'Programmingglore - Digital Solutions & Development',
  defaultDescription: 'Professional web development, mobile apps, e-commerce solutions, and digital marketing services. Transform your business with cutting-edge technology.',
  defaultKeywords: 'web development, mobile app development, e-commerce solutions, digital marketing, SEO services, React development, Node.js, programming services',
  defaultImage: '/assets/images/logo.png', // Update with your social sharing image
  twitterHandle: '@programmingglore', // Update with your Twitter handle
  facebookPage: 'https://www.facebook.com/programmingglore', // Update with your Facebook page
  linkedinPage: 'https://www.linkedin.com/company/programmingglore', // Update with your LinkedIn
  instagramPage: 'https://www.instagram.com/programmingglore', // Update with your Instagram
  author: 'Programmingglore',
  language: 'en-US',
  
  // Analytics IDs - Add your tracking IDs here
  googleAnalyticsId: 'G-XXXXXXXXXX', // Replace with your Google Analytics ID
  googleTagManagerId: 'GTM-XXXXXXX', // Replace with your GTM ID
  facebookPixelId: 'XXXXXXXXXXXXXXX', // Replace with your Facebook Pixel ID
  
  // Page-specific SEO data
  pages: {
    '/': {
      title: 'Programmingglore - Digital Solutions & Development',
      description: 'Professional web development, mobile apps, e-commerce solutions, and digital marketing services. Transform your business with cutting-edge technology.',
      keywords: 'web development, mobile app development, e-commerce, digital solutions, programming services',
      image: '/assets/images/home/pexels-goumbik-574071.jpg'
    },
    '/about-us': {
      title: 'About Us - Programmingglore | Digital Solutions Company',
      description: 'Learn about Programmingglore, a leading digital solutions company providing web development, mobile apps, and digital marketing services.',
      keywords: 'about us, digital agency, web development company, programming company',
      image: '/assets/images/about-us/about-us.png'
    },
    '/services': {
      title: 'Our Services - Programmingglore | Web Development & Digital Marketing',
      description: 'Comprehensive digital services including web development, mobile app development, e-commerce solutions, SEO, and social media marketing.',
      keywords: 'web development services, mobile app development, e-commerce solutions, digital marketing services',
      image: '/assets/images/services/main.png'
    },
    '/portfolio': {
      title: 'Our Portfolio - Programmingglore | Success Stories & Projects',
      description: 'Explore our portfolio of successful projects including e-commerce platforms, web applications, and digital solutions for clients worldwide.',
      keywords: 'portfolio, projects, case studies, web development projects, successful websites',
      image: '/assets/images/portfolio/PhoneHub.png'
    },
    '/contact': {
      title: 'Contact Us - Programmingglore | Get in Touch',
      description: 'Contact Programmingglore for your digital solutions needs. Get a free quote for web development, mobile apps, or digital marketing services.',
      keywords: 'contact us, get quote, web development quote, digital solutions contact',
      image: '/assets/images/logo.png'
    },
    '/products': {
      title: 'Our Products - Programmingglore | Ready-to-Deploy Solutions',
      description: 'Explore our collection of pre-built apps and platforms ready for customization. Plug-and-play solutions for your business needs.',
      keywords: 'products, ready-to-deploy, pre-built solutions, business apps, software products',
      image: '/assets/images/app-development.png'
    }
  }
};

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  type = 'website',
  noindex = false,
  canonical 
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Get page-specific data or use defaults
  const pageData = marketingConfig.pages[currentPath] || {};
  const finalTitle = title || pageData.title || marketingConfig.defaultTitle;
  const finalDescription = description || pageData.description || marketingConfig.defaultDescription;
  const finalKeywords = keywords || pageData.keywords || marketingConfig.defaultKeywords;
  const finalImage = image || pageData.image || marketingConfig.defaultImage;
  const finalCanonical = canonical || `${marketingConfig.siteUrl}${currentPath}`;
  
  useEffect(() => {
    // Update document title
    document.title = finalTitle;
    
    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    // Basic SEO Meta Tags
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('author', marketingConfig.author);
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    
    // Open Graph Meta Tags (Facebook, LinkedIn, etc.)
    updateMetaTag('og:title', finalTitle, 'property');
    updateMetaTag('og:description', finalDescription, 'property');
    updateMetaTag('og:image', `${marketingConfig.siteUrl}${finalImage}`, 'property');
    updateMetaTag('og:url', finalCanonical, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', marketingConfig.siteName, 'property');
    updateMetaTag('og:locale', marketingConfig.language, 'property');
    
    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', `${marketingConfig.siteUrl}${finalImage}`);
    updateMetaTag('twitter:site', marketingConfig.twitterHandle);
    updateMetaTag('twitter:creator', marketingConfig.twitterHandle);
    
    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', finalCanonical);
    
    // Structured Data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebSite',
      name: marketingConfig.siteName,
      url: marketingConfig.siteUrl,
      description: finalDescription,
      image: `${marketingConfig.siteUrl}${finalImage}`,
      publisher: {
        '@type': 'Organization',
        name: marketingConfig.siteName,
        logo: {
          '@type': 'ImageObject',
          url: `${marketingConfig.siteUrl}/assets/images/logo.png`
        }
      }
    };
    
    // Add organization data
    if (type === 'website') {
      structuredData.potentialAction = {
        '@type': 'SearchAction',
        target: `${marketingConfig.siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      };
    }
    
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    // Add Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: marketingConfig.siteName,
      url: marketingConfig.siteUrl,
      logo: `${marketingConfig.siteUrl}/assets/images/logo.png`,
      sameAs: [
        marketingConfig.facebookPage,
        marketingConfig.linkedinPage,
        marketingConfig.instagramPage
      ].filter(Boolean),
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: ['English']
      }
    };
    
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.id = 'organization-schema';
    orgScript.text = JSON.stringify(organizationSchema);
    
    // Remove existing organization schema if present
    const existingOrgScript = document.getElementById('organization-schema');
    if (existingOrgScript) {
      existingOrgScript.remove();
    }
    
    document.head.appendChild(orgScript);
    
  }, [finalTitle, finalDescription, finalKeywords, finalImage, finalCanonical, type, noindex, currentPath]);
  
  return null; // This component doesn't render anything
};

export default SEO;
export { marketingConfig };

