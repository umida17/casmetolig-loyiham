import React from 'react';
import './Footer.css';

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
        
        {/* LEFT SIDE: Google Map */}
        <div className="footer-map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.8821034375427!2d36.21666497693529!3d50.01353111818296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a13beff8383f%3A0x633cf45d4a469fb5!2z0YPQuy4g0JrQu9C-0YfQutC-0LLRgdC60DRRjSwgMywg0KXQsNGA0YzQutC_0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRY9GCLC_Qo9C60YDQ0LjQvdCwLCA2MTAwMA!5e0!3m2!2sru!2s!4v1717160000000!5m2!2sru!2s"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="ValMari Location Map"
          ></iframe>
        </div>

        {/* RIGHT SIDE: Dark Content Card */}
        <div className="footer-content-card">
          <div className="footer-card-inner">
            
            {/* Logo Group */}
            <div className="footer-logo-zone">
              <div className="footer-logo-circle">ValMari</div>
            </div>

            {/* Phone & Address */}
            <div className="footer-contacts-zone">
              <a href="tel:0800508622" className="footer-phone-link">
                0 (800) 508-622
              </a>
              <p className="footer-address-text">
                Харьков, Клочковская, д. 3
              </p>
            </div>

            {/* Navigation Grid Links */}
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

            {/* Social Media Icons */}
            <div className="footer-socials-row">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                <i className="fab fa-facebook-f"></i>
                {/* Agar ikonka shrifti bo'lmasa, oddiy SVG ishlatsangiz ham bo'ladi */}
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                <i className="fab fa-instagram"></i>
                <span className="sr-only">Instagram</span>
              </a>
            </div>

            {/* Privacy Policy Bottom */}
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