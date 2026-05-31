import React, { useState } from 'react';
// Komponentlarni import qilamiz
import Header from './Companent/Header/Header'; 
import Hero from './Companent/Hero/Hero'; 
// Yangi Main komponentini loyihaga qo'shamiz 🚀
import Main from './Companent/Main/Main'; 

// Saytdagi barcha matnlarning tillardagi tarjimasi (Header + Hero + Main)
const translations = {
  RU: {
    // Header qismi
    courses: "Курсы обучения",
    webinars: "Вебинары",
    lessons: "Видео-уроки",
    blog: "Блог",
    about: "О нас",
    price: "Прайс",
    schedule: "Расписание",
    promo: "Акции",
    shop: "Магазин",
    title: "Учебный центр",
    subtitle: "эстетической косметологии",
    welcome: "Добро пожаловать в ValMari!",

    // Hero qismi
    heroBadge: "Бесплатный вебинар",
    heroTitle: "ПРОФЕССИЯ КОСМЕТОЛОГ",
    heroDesc: "Приглашаем на бесплатный вебинар для профессиональных косметологов и интересующихся этой профессией",
    btnRegister: "Зарегистрироваться",
    btnMore: "Узнать подробнее",
    
    // Panel qismidagi ikki qatorli matnlar
    statCertNum: "4000+",
    statCertTitle: "Сертификатов",
    statCertSub: "мы выдали",

    statModelNum: "3500+",
    statModelTitle: "Моделей",
    statModelSub: "в нашей базе",

    statSpecNum: "1500+",
    statSpecTitle: "Специалистов",
    statSpecSub: "мы обучили",

    statClientNum: "5500+",
    statClientTitle: "Довольных",
    statClientSub: "клиентов",

    // ================= NEW: Main (Курсы обучения) qismi =================
    coursesTitle: "Курсы обучения",
    forMedics: "Курс для медиков",
    offline: "Оффлайн",
    online: "Онлайн",
    masterClass: "Мастер-класс",
    freeSeats: "Свободно {seats} из 15 мест",

    // ================= NEW: Main (О нас) qismi =================
    aboutTitle: "О нас",
    aboutBrandTitle: "ВЕДУЩИЙ УЧЕБНЫЙ ЦЕНТР ЭСТЕТИЧЕСКОЙ КОСМЕТОЛОГИИ",
    aboutDesc1: "Описание может быть любое.",
    aboutDesc2: "Ведущий учебный центр эстетической косметологии.",
    aboutDesc3: "Более 5 лет мы проводим курсы сертифицированные курсы профессионального образования в области косметологии и индустрии красоты, здоровья и молодости."
  },
  UZ: {
    // Header qismi
    courses: "O'quv kurslari",
    webinars: "Vebinarlar",
    lessons: "Video-darslar",
    blog: "Blog",
    about: "Biz haqimizda",
    price: "Narxlar",
    schedule: "Jadval",
    promo: "Aksiyalar",
    shop: "Do'kon",
    title: "O'quv markazi",
    subtitle: "estetik kosmetologiya",
    welcome: "ValMari-ga xush kelibsiz!",

    // Hero qismi
    heroBadge: "Bepul vebinar",
    heroTitle: "KOSMETOLOG KASBI",
    heroDesc: "Professional kosmetologlar va ushbu kasbga qiziquvchilar uchun bepul vebinarga taklif etamiz",
    btnRegister: "Ro'yxatdan o'tish",
    btnMore: "Batafsil ma'lumot",
    
    // Panel qismidagi ikki qatorli matnlar
    statCertNum: "4000+",
    statCertTitle: "Sertifikatlar",
    statCertSub: "taqdim etdik",

    statModelNum: "3500+",
    statModelTitle: "Modellar",
    statModelSub: "bazamizda bor",

    statSpecNum: "1500+",
    statSpecTitle: "Mutaxassislar",
    statSpecSub: "o'qitib chiqardik",

    statClientNum: "5500+",
    statClientTitle: "Mamnun",
    statClientSub: "mijozlarimiz",

    // ================= NEW: Main (O'quv kurslari) qismi =================
    coursesTitle: "O'quv kurslari",
    forMedics: "Shifokorlar uchun kurs",
    offline: "Offlayn",
    online: "Onlayn",
    masterClass: "Master-klass",
    freeSeats: "15 ta joydan {seats} tasi bo'sh",

    // ================= NEW: Main (Biz haqimizda) qismi =================
    aboutTitle: "Biz haqimizda",
    aboutBrandTitle: "ESTETIK KOSMETOLOGIYA BO'YICHA YETAKCHI O'QUV MARKAZI",
    aboutDesc1: "Tavsif ixtiyoriy bo'lishi mumkin.",
    aboutDesc2: "Estetik kosmetologiya bo'yicha yetakchi o'quv markazi.",
    aboutDesc3: "5 yildan ortiq vaqt davomida biz kosmetologiya, go'zallik, salomatlik va yoshlik industriyasi sohasida sertifikatlangan professional ta'lim kurslarini o'tkazib kelmoqdamiz."
  },
  EN: {
    // Header qismi
    courses: "Training Courses",
    webinars: "Webinars",
    lessons: "Video Lessons",
    blog: "Blog",
    about: "About Us",
    price: "Price List",
    schedule: "Schedule",
    promo: "Promotions",
    shop: "Shop",
    title: "Training Center",
    subtitle: "of aesthetic cosmetology",
    welcome: "Welcome to ValMari!",

    // Hero qismi
    heroBadge: "Free Webinar",
    heroTitle: "COSMETOLOGIST PROFESSION",
    heroDesc: "We invite you to a free webinar for professional cosmetologists and those interested in this profession",
    btnRegister: "Register Now",
    btnMore: "Learn More",
    
    // Panel qismidagi ikki qatorli matnlar
    statCertNum: "4000+",
    statCertTitle: "Certificates",
    statCertSub: "we have issued",

    statModelNum: "3500+",
    statModelTitle: "Models",
    statModelSub: "in our database",

    statSpecNum: "1500+",
    statSpecTitle: "Specialists",
    statSpecSub: "we have trained",

    statClientNum: "5500+",
    statClientTitle: "Satisfied",
    statClientSub: "clients",

    // ================= NEW: Main (Training Courses) qismi =================
    coursesTitle: "Training Courses",
    forMedics: "Course for Medics",
    offline: "Offline",
    online: "Online",
    masterClass: "Master-class",
    freeSeats: "{seats} of 15 seats available",

    // ================= NEW: Main (About Us) qismi =================
    aboutTitle: "About Us",
    aboutBrandTitle: "LEADING TRAINING CENTER OF AESTHETIC COSMETOLOGY",
    aboutDesc1: "Description can be anything.",
    aboutDesc2: "Leading training center of aesthetic cosmetology.",
    aboutDesc3: "For more than 5 years we have been conducting certified professional education courses in the field of cosmetology and the industry of beauty, health and youth."
  }
};

export default function App() {
  // Standart holatda rus tili tanlangan bo'ladi
  const [currentLang, setCurrentLang] = useState('RU');

  // Tanlangan tilga mos tarjimalarni olamiz
  const t = translations[currentLang];

  return (
    <div>
      {/* Yuqori Header qismi */}
      <Header 
        currentLang={currentLang} 
        onChangeLang={setCurrentLang} 
        t={t} 
      />

      {/* Asosiy Banner (Hero) qismi */}
      <Hero t={t} />

      {/* 🌟 YANGI QISM: Saytning o'rta qismi (Kurslar va Biz haqimizda) */}
      {/* joriy til identifikatorini ham yuboramiz (Main ichida maxsus dinamik matnlar uchun kerak) */}
      <Main t={{ ...t, currentLang: currentLang }} />
    </div>
  );
}