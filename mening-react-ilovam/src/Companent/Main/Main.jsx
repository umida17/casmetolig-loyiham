import React, { useState } from 'react';
import './Main.css';


import aboutImage from '../../assets/Rectangle 111.png';
import hom from '../../assets/image (27).png';

export default function Main({ t }) {


    const [activeDot, setActiveDot] = useState(0);

  // Rasm_b1f262.jpg dagi 3 xil kursning ma'lumotlar strukturasi
  const coursesData = [
    {
      id: 1,
      type: "purple", // Binafsha rangli mavzu
      badge: t.offline,
      title: t.currentLang === 'UZ' ? "Kanyulyar texnikalar" : "Канюльные техники",
      date: "1 - 4 мая",
      seats: 2,
      features: ["Краткое описание", "Что-то о курсе", "Пару фактов", "Краткое описание"],
      headImg: "https://via.placeholder.com/120" // Mankent boshi rasmi ulanadi
    },
    {
      id: 2,
      type: "green", // Yashil rangli mavzu
      badge: t.online,
      title: t.currentLang === 'UZ' ? "Mezoterapya va biorevitalizatsiya" : "Мезотерапия и биоревитализация",
      date: "15 - 20 мая",
      seats: 2,
      features: ["Краткое описание", "Что-то о курсе", "Пару фактов", "Краткое описание"],
      headImg: "https://via.placeholder.com/120"
    },
    {
      id: 3,
      type: "teal", // Firuza (teal) rangli mavzu
      badge: t.masterClass,
      title: t.currentLang === 'UZ' ? "Biogel - kosmetologiyada yangilik" : "Биогель - новое в косметологии",
      date: "2 - 5 августа",
      seats: 2,
      features: ["Краткое описание", "Что-то о курсе", "Пару фактов", "Краткое описание"],
      headImg: "https://via.placeholder.com/120"
    }
  ];

  return (
    <main className="main-content-wrapper">
      
      {/* ================= 1. KURSLAR SEKSIYASI ================= */}
      <section className="courses-section">
        <h2 className="section-main-title">{t.coursesTitle}</h2>
        
        <div className="slider-container">
          {/* Chapga strelka */}
          <button className="slider-arrow arrow-left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          {/* Kurslar kartalari paneli */}
          <div className="courses-grid">
            {coursesData.map((course) => (
              <div className={`course-card theme-${course.type}`} key={course.id}>
                {/* Yashil qushcha logotipi tepada */}
                <div className="card-top-logo">
                  <span className="course-tag-label">{t.forMedics}</span>
                  <svg className="green-bird-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9" stroke="#84cc16" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="#84cc16" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>

                <h3 className="course-card-title">{course.title}</h3>
                <span className="course-status-badge">{course.badge}</span>
                <p className="course-date">{course.date}</p>

                {/* Tavsiflar va maneken rasmi bloki */}
                <div className="course-details-row">
                  <ul className="course-features-list">
                    {course.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                  <div className="course-avatar-wrapper">
                    <img src={hom} alt="Course Avatar" className="maneken-img" />
                  </div>
                </div>

                
                <p className="seats-info">
                  {t.freeSeats ? t.freeSeats.replace("{seats}", course.seats) : `Свободно ${course.seats} из 15 мест`}
                </p>

                {/* Tugmalar guruhi */}
                <div className="card-actions">
                  <button className="btn-card-reg">{t.btnRegister}</button>
                  <button className="btn-card-more">{t.btnMore}</button>
                </div>
              </div>
            ))}
          </div>

          {/* O'ngga strelka */}
          <button className="slider-arrow arrow-right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        {/* Slayder ostidagi nuqtachalar (Pagination Dots) */}
        <div className="slider-dots">
          {[0, 1, 2, 3, 4].map((index) => (
            <span 
              key={index} 
              className={`dot ${activeDot === index ? 'active' : ''}`}
              onClick={() => setActiveDot(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* ================= 2. BIZ HAQIMIZDA (ABOUT) SEKSIYASI ================= */}
      <section className="about-section-container">
        <div className="about-flex-layout">
          
          {/* Chap tomon: Katta rasm */}
          <div className="about-media-block">
            <img 
              src={aboutImage}
              alt="ValMari Center Live Process" 
              className="about-main-photo"
            />
          </div>

          {/* O'ng tomon: Matnlar va chiziqli link */}
          <div className="about-info-block">
            <span className="about-mini-tag">{t.aboutTitle}</span>
            <h2 className="about-branding-title">
              <span className="brand-green">VALMARI</span> <br />
              {t.currentLang === 'UZ' ? "ESTETIK KOSMETOLOGIYA YETAKCHI O'QUV MARKAZI" : "ВЕДУЩИЙ УЧЕБНЫЙ ЦЕНТР ЭСТЕТИЧЕСКОЙ КОСМЕТОЛОГИИ"}
            </h2>
            
            <div className="about-paragraphs">
              <p className="p-highlight">{t.aboutDesc1}</p>
              <p className="p-bold">{t.aboutDesc2}</p>
              <p className="p-normal">{t.aboutDesc3}</p>
            </div>

            {/* "Podrobnee" o'ngga yo'naltirilgan uzun chiziqli strelka bilan */}
            <a href="#more-about" className="about-arrow-link">
              <span>{t.btnMore}</span>
              <span className="long-arrow-line"></span>
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}