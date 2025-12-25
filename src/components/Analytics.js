import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { marketingConfig } from './SEO';

// Analytics Component - Handles all tracking scripts
const Analytics = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Google Analytics 4 (GA4)
    if (marketingConfig.googleAnalyticsId && marketingConfig.googleAnalyticsId !== 'G-XXXXXXXXXX') {
      // Load GA4 script
      if (!window.gtag) {
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${marketingConfig.googleAnalyticsId}`;
        document.head.appendChild(script1);
        
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', marketingConfig.googleAnalyticsId, {
          page_path: location.pathname + location.search,
        });
      } else {
        // Track page view on route change
        window.gtag('config', marketingConfig.googleAnalyticsId, {
          page_path: location.pathname + location.search,
        });
      }
    }
    
    // Google Tag Manager
    if (marketingConfig.googleTagManagerId && marketingConfig.googleTagManagerId !== 'GTM-XXXXXXX') {
      if (!document.getElementById('gtm-script')) {
        // GTM Script
        const gtmScript = document.createElement('script');
        gtmScript.id = 'gtm-script';
        gtmScript.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${marketingConfig.googleTagManagerId}');
        `;
        document.head.appendChild(gtmScript);
        
        // GTM Noscript
        const gtmNoscript = document.createElement('noscript');
        gtmNoscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${marketingConfig.googleTagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
        document.body.insertBefore(gtmNoscript, document.body.firstChild);
      }
    }
    
    // Facebook Pixel
    if (marketingConfig.facebookPixelId && marketingConfig.facebookPixelId !== 'XXXXXXXXXXXXXXX') {
      if (!window.fbq) {
        (function(f,b,e,v,n,t,s) {
          if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)
        })(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        
        window.fbq('init', marketingConfig.facebookPixelId);
        window.fbq('track', 'PageView');
      } else {
        window.fbq('track', 'PageView');
      }
    }
    
    // LinkedIn Insight Tag (Optional - add if needed)
    // if (marketingConfig.linkedinPartnerId) {
    //   _linkedin_partner_id = marketingConfig.linkedinPartnerId;
    //   window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    //   window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    //   (function(l) {
    //     if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
    //     window.lintrk.q=[]}
    //     var s = document.getElementsByTagName("script")[0];
    //     var b = document.createElement("script");
    //     b.type = "text/javascript";b.async = true;
    //     b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    //     s.parentNode.insertBefore(b, s);
    //   })(window.lintrk);
    // }
    
  }, [location]);
  
  return null;
};

export default Analytics;

