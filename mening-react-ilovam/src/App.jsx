import React, { useState } from 'react';
// Komponentlarni import qilamiz
import Header from './Companent/Header/Header'; 
import Hero from './Companent/Hero/Hero'; 

// Saytdagi barcha matnlarning tillardagi tarjimasi (Header + To'g'rilangan Hero)
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

    // Hero qismi (image_b2d3de.jpg rasmiga muvofiq to'liq holatda) 🚀
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
    statClientSub: "клиентов"
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
    statClientSub: "mijozlarimiz"
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
    statClientSub: "clients"
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
    </div>
  );
}