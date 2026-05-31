import React from 'react';
import './Hero.css';
// Xatolik to'g'rilandi: O'zgaruvchi nomi harf bilan boshlanishi shart! ✅
import heroImg from './assets/13131.png';

export default function Hero({ t }) {
  // Rasmga muvofiq, son, asosiy so'z va uning tagidagi so'zni alohida qilib massivga yozamiz
  const stats = [
    { id: 'cert', value: t.statCertNum, title: t.statCertTitle, sub: t.statCertSub },
    { id: 'model', value: t.statModelNum, title: t.statModelTitle, sub: t.statModelSub },
    { id: 'spec', value: t.statSpecNum, title: t.statSpecTitle, sub: t.statSpecSub },
    { id: 'client', value: t.statClientNum, title: t.statClientTitle, sub: t.statClientSub },
  ];

  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Chap tomon: Matnlar va Tugmalar */}
        <div className="hero-content">
          <span className="hero-badge">{t.heroBadge}</span>
          <h1 className="hero-title">{t.heroTitle}</h1>
          <p className="hero-description">{t.heroDesc}</p>
          
          <div className="hero-actions">
            <button className="btn-main btn-glow">{t.btnRegister}</button>
            <button className="btn-outline">{t.btnMore}</button>
          </div>
        </div>

        {/* O'ng tomon: Kosmetologlar rasmi qismi */}
        <div className="hero-image-wrapper">
          <img 
            src={heroImg} /* Yangi o'zgaruvchi nomi bu yerga qo'yildi */
            alt="ValMari Cosmetologists" 
            className="hero-main-img" 
          />
          <div className="hero-bg-circle-dec"></div>
        </div>

      </div>

      {/* Pastki oq statistika paneli - Rasmga mos ikki qatorli ko'rinishi */}
      <div className="stats-panel-container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <h2 className="stat-value">{stat.value}</h2>
              <div className="stat-label-group">
                <span className="stat-main-text">{stat.title}</span>
                <span className="stat-sub-text">{stat.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}