import React, { useState } from 'react';
import './Header.css';

// Ikonkalar (Phone, Facebook, Instagram) joyida qoladi...
const PhoneIcon = () => (<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>);
const FacebookIcon = () => (<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/></svg>);
const InstagramIcon = () => (<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>);

export default function Header({ currentLang, onChangeLang, t }) {
  const [langOpen, setLangOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('courses');

  // Menular kalitlari va ularga mos tarjimalar
  const menuItems = [
    { id: 'courses', label: t.courses },
    { id: 'webinars', label: t.webinars },
    { id: 'lessons', label: t.lessons },
    { id: 'blog', label: t.blog },
    { id: 'about', label: t.about },
    { id: 'price', label: t.price },
    { id: 'schedule', label: t.schedule },
    { id: 'promo', label: t.promo },
    { id: 'shop', label: t.shop },
  ];

  const handleLangSelect = (langCode) => {
    onChangeLang(langCode); 
    setLangOpen(false);      // Menyuni yopadi
  };

  return (
    <header className="main-header">
      <div className="header-top-container">
        <div className="header-top-content">
          
          {/* Logo va Dinamik Sarlavhalar (image_b3579a.png rasmga mos) */}
          <div className="logo-section">
            <div className="logo-circle">
              <span className="logo-text-main">ValMari</span>
            </div>
            <div className="logo-titles">
              <h3>{t.title}</h3>
              <p>{t.subtitle}</p>
            </div>
          </div>

          <div className="right-controls">
            <a href="tel:0800508622" className="phone-link">
              <div className="phone-icon-wrapper"><PhoneIcon /></div>
              <span className="phone-number">0 (800) 508-622</span>
            </a>

            <div className="social-links">
              <a href="#" className="social-icon fb"><FacebookIcon /></a>
              <a href="#" className="social-icon ig"><InstagramIcon /></a>
            </div>

            {/* Dinamik Til Tanlagich */}
            <div className="lang-dropdown" onClick={() => setLangOpen(!langOpen)}>
              <div className="lang-selected">
                <span className={`flag-icon ${currentLang.toLowerCase()}-flag`}></span>
                <span className="lang-text-label">{currentLang}</span>
                <span className={`arrow-icon ${langOpen ? 'open' : ''}`}>▼</span>
              </div>
              
              {langOpen && (
                <ul className="lang-list">
                  <li onClick={() => handleLangSelect('RU')}>
                    <span className="flag-icon ru-flag"></span> RU
                  </li>
                  <li onClick={() => handleLangSelect('UZ')}>
                    <span className="flag-icon uz-flag"></span> UZ
                  </li>
                  <li onClick={() => handleLangSelect('EN')}>
                    <span className="flag-icon en-flag"></span> EN
                  </li>
                </ul>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Navigatsiya Menyusi (Tarjima qilinadigan) */}
      <nav className="header-navigation">
        <div className="nav-container">
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}