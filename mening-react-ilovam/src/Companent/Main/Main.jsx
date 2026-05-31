import React, { useState } from 'react';
import './Main.css';

// Loyihadagi rasmlar importi
import aboutImage from '../../assets/Rectangle 111.png';
import hom from '../../assets/image (27).png';
import casmetika from '../../assets/casmetika.png';
import cas from '../../assets/Rectangle 108.png';

export default function Main({ t }) {
  const [activeDot, setActiveDot] = useState(0);

  // Siz tashlagan 3 xil kurs ma'lumotlari strukturasi
  const coursesData = [
    {
      id: 1,
      type: "purple",
      badge: t.offline,
      title: t.currentLang === 'UZ' ? "Kanyulyar texnikalar" : "Канюльные техники",
      date: "1 - 4 мая",
      seats: 2,
      features: ["Краткое описание", "Что-то о курсе", "Пару фактов", "Краткое описание"]
    },
    {
      id: 2,
      type: "green",
      badge: t.online,
      title: t.currentLang === 'UZ' ? "Mezoterapya va biorevitalizatsiya" : "Мезотерапия и биоревитализация",
      date: "15 - 20 мая",
      seats: 2,
      features: ["Краткое описание", "Что-то о курсе", "Пару фактов", "Краткое описание"]
    },
    {
      id: 3,
      type: "teal",
      badge: t.masterClass,
      title: t.currentLang === 'UZ' ? "Biogel - kosmetologiyada yangilik" : "Биогель - новое в косметологии",
      date: "2 - 5 августа",
      seats: 2,
      features: ["Краткое описание", "Что-то о курсе", "Пару фактов", "Краткое описание"]
    }
  ];

  // image_b17e80.jpg rasmdagi master-klasslar ro'yxati
  const masterClassesData = [
    {
      id: 1,
      date: "3 ноября, 10:00-12:00",
      title: t.currentLang === 'UZ' 
        ? "Neodimiy lazerining 10 ta imkoniyati. Lazerli piling, tatuirovkani o'chirish" 
        : "10 возможностей неодимового лазера. Лазерный пилинг, удаление тату/татуажа",
      instructor: (t.trainer || "Тренер") + ": Юлия Щукина",
      price: "2000 грн",
      img: "https://via.placeholder.com/350x180"
    },
    {
      id: 2,
      date: "20 ноября, 12:00-17:00",
      title: t.currentLang === 'UZ'
        ? "Kosmetolog kasbi. Yangi boshlovchilar va professionallar uchun seminar"
        : "Профессия косметолог. Семинар для новичков и профессионалов",
      instructor: (t.speakers || "Спикеры") + ": Марина Спивак, Алина Ядчишина, Елена Белогурова, Юлия Щукина",
      price: t.free || "Бесплатно",
      img: "https://via.placeholder.com/350x180"
    }
  ];

  return (
    <main className="main-content-wrapper">
      
      {/* ================= 1. KURSLAR SEKSIYASI (Siz tashlagan shaklda birinchi) ================= */}
      <section className="courses-section">
        <h2 className="section-main-title">{t.coursesTitle}</h2>
        
        <div className="slider-container">
          <button className="slider-arrow arrow-left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div className="courses-grid">
            {coursesData.map((course) => (
              <div className={`course-card theme-${course.type}`} key={course.id}>
                <div className="card-top-logo">
                  <span className="course-tag-label">{t.forMedics}</span>
                  <svg className="green-bird-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9" stroke="#84cc16" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="#84cc16" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>

                <h3 className="course-card-title">{course.title}</h3>
                <span className="course-status-badge">{course.badge}</span>
                <p className="course-date">{course.date}</p>

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

                <div className="card-actions">
                  <button className="btn-card-reg">{t.btnRegister}</button>
                  <button className="btn-card-more">{t.btnMore}</button>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-arrow arrow-right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

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

      {/* ================= 2. BIZ HAQIMIZDA SEKSIYASI (Siz tashlagan shaklda ikkinchi) ================= */}
      <section className="about-section-container">
        <div className="about-flex-layout">
          
          <div className="about-media-block">
            <img 
              src={aboutImage}
              alt="ValMari Center Live Process" 
              className="about-main-photo"
            />
          </div>

          <div className="about-info-block">
            <span className="about-mini-tag">{t.aboutTitle}</span>
            <h2 className="about-branding-title">
              <span className="brand-green">VALMARI</span> <br />
              {t.currentLang === 'UZ' ? "ESTETIK KOSMETOLOGIYA YETAKCHI O'QUV MARKAZI" : "ВЕДУЩИЙ УЧЕБНЫЙ СЕНТР ЭСТЕТИЧЕСКОЙ КОСМЕТОЛОГИИ"}
            </h2>
            
            <div className="about-paragraphs">
              <p className="p-highlight">{t.aboutDesc1}</p>
              <p className="p-bold">{t.aboutDesc2}</p>
              <p className="p-normal">{t.aboutDesc3}</p>
            </div>

            <a href="#more-about" className="about-arrow-link">
              <span>{t.btnMore}</span>
              <span className="long-arrow-line"></span>
            </a>
          </div>

        </div>
      </section>

      {/* ================= 3. YANGI BO'LIM: OBUCHENIE KOSMETOLOGOV (image_b17e80.jpg dan 1-blok) ================= */}
      <section className="edu-categories-section">
        <h2 className="section-main-title">{t.sectionEducation || "Обучение косметологов"}</h2>
        <div className="cats-grid-layout">
          
          <div className="cat-card grid-large" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.35)), url('https://via.placeholder.com/600x250')` }}>
            <div className="cat-card-inner">
              <h3>{t.catCourses || "КУРСЫ КОСМЕТОЛОГИИ"}</h3>
              <p className="pre-line-text">{t.catCoursesSub || "- эстетическая косметология\n- инъекционная косметология\n- лазерная косметология"}</p>
              <span className="arrow-indicator">➔</span>
            </div>
          </div>

          <div className="cat-card flex-center-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://via.placeholder.com/400x250')` }}>
            <div className="cat-card-inner center-content">
              <h3>{t.catOnline || "ОНЛАЙН ОБУЧЕНИЕ"}</h3>
            </div>
          </div>

          <div className="cat-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('{casmetika}')` }}>
            <div className="cat-card-inner bottom-align">
              <h3>{t.catMaster || "МАСТЕР-КЛАССЫ"}</h3>
            </div>
          </div>

          <div className="cat-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://via.placeholder.com/400x250')` }}>
            <div className="cat-card-inner top-align">
              <h3>{t.catSchedule || "РАСПИСАНИЕ"}</h3>
            </div>
          </div>

          <div className="cat-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://via.placeholder.com/400x250')` }}>
            <div className="cat-card-inner bottom-align">
              <h3>{t.catPromo || "АКЦИИ"}</h3>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. YANGI BO'LIM: VEDEM NABOR MODELEY (image_b17e80.jpg dan 2-blok) ================= */}
      <section className="model-recruitment-section">
        <div className="model-flex-container">
          
          <div className="model-text-side">
            <h2 className="model-main-title">{t.modelTitle || "ВЕДЕМ НАБОР МОДЕЛЕЙ"}</h2>
            <p className="model-p-lead">{t.modelDesc1 || "Мы предлагаем свои услуги для моделей."}</p>
            <p className="model-p-sub">
              {t.modelDesc2 || "Выберите процедуру или несколько процедур и наш менеджер проконсультирует вас и назовет ближайшую дату, когда вы сможете получить эту процедуру."}
            </p>
            <button className="btn-green-action">{t.btnBecomeModel || "Стать моделью"}</button>
          </div>

          <div className="model-image-side">
            <img src={} alt="Model Recruitment" className="model-side-img" />
          </div>

        </div>
      </section>

      {/* ================= 5. YANGI BO'LIM: MASTER-KLASSLAR NARX KARTALARI (image_b17e80.jpg dan 3-blok) ================= */}
      <section className="masterclasses-prices-section">
        <h2 className="section-main-title" style={{ marginBottom: '10px' }}>{t.masterClassesTitle || "Мастер-классы"}</h2>
        <p className="master-section-subtitle">{t.masterClassesSub || "Мероприятия для повышения квалификации косметологов"}</p>

        <div className="slider-container" style={{ marginTop: '40px' }}>
          <button className="slider-arrow arrow-left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div className="master-cards-flex-row">
            {masterClassesData.map((item) => (
              <div className="master-horizontal-card" key={item.id}>
                
                <div className="master-card-img-box">
                  <img src={item.img} alt={item.title} />
                </div>
                
                <div className="master-card-content-box">
                  <div className="master-info-left-pane">
                    <span className="master-card-date-str">{item.date}</span>
                    <h4 className="master-card-inner-title">{item.title}</h4>
                    <p className="master-card-author-text">{item.instructor}</p>
                    <span className="mini-arrow-click">➔</span>
                  </div>
                  
                  <div className="master-info-right-pane">
                    <div className="master-price-badge-zone">{item.price}</div>
                    <button className="master-green-square-btn">→</button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <button className="slider-arrow arrow-right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

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

    </main>
  );
}