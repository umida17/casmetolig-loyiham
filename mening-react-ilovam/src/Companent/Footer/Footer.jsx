import React from 'react';
import './Footer.css';
import xarita from '../../assets/image 21.png';


export default function Footer({ t }) {
  // Figma dizayndagi havolalar (agar i18n tarjimalari bo'lsa t.bilan ishlating)
  const linksLeft = [
    { text: t?.courses || "Курсы обучения", url: "#courses" },
    { text: t?.webinars || "Вебинары", url: "#webinars" },
    { text: t?.videoLessons || "Видео-уроки", url: "#videos" },
    { text: t?.priceList || "Прайс", url: "#price" },
    { text: t?.schedule || "Расписание", url: "#schedule" },
  ];

  const linksRight = [
    { text: t?.promotions || "Акции", url: "#promotions" },
    { text: t?.aboutUs || "О нас", url: "#about" },
    { text: t?.blog || "Блог", url: "#blog" },
    { text: t?.shop || "Магазин", url: "#shop" },
  ];

  return (
    <footer className="footer-section-container">
      <div className="footer-split-layout">
        
        
    <div className="footer-map-wrapper">
  <img 
    src={xarita} 
    alt="ValMari Location Map" 
    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
  />
  </div>

        {/* RIGHT SIDE: Dark Content Card */}
        <div className="footer-content-card">
          <div className="footer-card-inner">
            
            {/* Logo Group */}
            <div className="footer-logo-zone">
              <div className="footer-logo-circle">ValMari</div>
            </div>

             <div className="footer-contacts-zone">
              <a href="tel:0800508622" className="footer-phone-link">
                0 (800) 508-622
              </a>
              <p className="footer-address-text">
                Харьков, Клочковская, д. 3
              </p>
            </div>

             <div className="footer-nav-grid">
              <ul className="footer-links-col">
                {linksLeft.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
              <ul className="footer-links-col">
                {linksRight.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>

             <div className="footer-socials-row">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                <i className="fab fa-facebook-f"></i>
                 <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                <i className="fab fa-instagram"></i>
                <span className="sr-only">Instagram</span>
              </a>
            </div>

             <div className="footer-policy-bottom">
              <a href="#privacy" className="footer-privacy-link">
                Политика конфиденциальности
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}