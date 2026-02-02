const defaultTranslations = {
    bg: {
        'nav-home': 'Начало',
        'nav-services': 'Услуги',
        'nav-about': 'За нас',
        'nav-ins': 'Застраховки',
        'nav-gallery': 'Галерия',
        'nav-pricing': 'Цени',
        'nav-complexes': 'Сервизи',
        
        'hero-title-1': 'ВСИЧКО ЗА',
        'hero-title-2': 'ВАШИЯ АВТОМОБИЛ',
        'hero-title-3': 'НА ЕДНО МЯСТО',
        'hero-subtitle': 'Автокомплекси Маями предлага следните услуги: автосервиз, смяна на гуми, тенекеджийски и бояджийски услуги, автомивка и детайлинг, автотапицерски услуги и други',
        'hero-feature-1': 'Доверен сервиз',
        'hero-feature-2': 'Работим с водещи застрахователни компании',
        'hero-feature-3': 'Пълен спектър услуги',
        'hero-cta': 'Разгледайте предлаганите услугите',
        
        'our-services': 'Предлагани услуги',
        'svc-auto-title': 'Автосервиз',
        'svc-auto-desc': 'за всички видове ремонти',
        'svc-auto-f1': 'Компютърна диагностика',
        'svc-auto-f2': 'Ремонт на двигател и ходова част',
        'svc-auto-f3': 'Ремонт на спирачна система',
        'svc-auto-f4': 'Техническо обслужване на автомобил',
        'svc-auto-f5': 'Проверка и зареждане на климатици',
        'svc-auto-f6': 'Смяна на гуми и хотел',

        'svc-body-title': 'Авторепаратура',
        'svc-body-desc': 'Доверен сервиз на водещите застрахователни компании',
        'svc-body-f1': 'Ремонт и смяна на детайли',
        'svc-body-f2': 'Тенекеджийски и бояджийски услуги',
        'svc-body-f3': 'Доверен сервиз на застрахователни компании',

        'svc-cosmo-title': 'Автомивка и Автокозметика',
        'svc-cosmo-desc': 'Пълен автодетайлинг, външно и вътрешно почистване',
        'svc-cosmo-f1': 'Полиране и пастиране',
        'svc-cosmo-f2': 'Пране на салон',
        'svc-cosmo-f3': 'Нанасяне на защита с керамично покритие, полагане на защитно фолио и други',

        'svc-gtp-title': 'ГТП',
        'svc-gtp-desc': 'Годишен технически преглед с бързо обслужване',
        'svc-gtp-f1': 'Пълна предварителна проверка',
        'svc-gtp-f2': 'Консултация и съдействие на място',
        'svc-gtp-f3': 'Бързо обслужване',

        'svc-uph-title': 'Автотапицерия',
        'svc-uph-desc': 'Интериорни ремонти, претапициране на седалки, волан и панели',
        'svc-uph-f1': 'Претапициране на седалки, волан и таван',
        'svc-uph-f2': 'Изпълнение на индивидуални проекти',
        'svc-uph-f3': 'Възстановяване на интериор',

        'svc-pdr-title': 'PDR',
        'svc-pdr-desc': 'Ремонт на вдлъбнатини без боядисване',
        'svc-pdr-f1': 'Премахване на вдлъбнатини от градушка',
        'svc-pdr-f2': 'Без боядисване',
        'svc-pdr-f3': 'Бързо и ефективно',

        'svc-glass-title': 'Лепене на спукани стъкла',
        'svc-glass-desc': 'Професионално възстановяване на спукани автостъкла',
        'svc-glass-f1': 'Бърз и надежден ремонт',
        'svc-glass-f2': 'Предотвратяване на разпространение на пукнатини',
        'svc-glass-f3': 'Възстановяване на видимостта',

        'svc-sales-title': 'Продажба на автомобили',
        'svc-sales-desc': 'Продажба на употребявани автомобили с гаранция',
        'svc-sales-f1': 'Внос от Европа, Канада, Щатите и Дубай',
        'svc-sales-f2': 'Гаранция за реален пробег и състояние',
        'svc-sales-f3': 'Съдействие за регистрация',

        'svc-ins-title': 'Застраховки',
        'svc-ins-desc': 'Консултации и сключване на всички видове автомобилни и други застраховки, включително:',
        'svc-ins-f1': 'Гражданска отговорност',
        'svc-ins-f2': 'Автокаско',
        'svc-ins-f3': 'Асистанс',

        'svc-oil-title': 'Внос и продажба на моторни масла',
        'svc-oil-desc': 'Богат избор от моторни масла на водещи световни марки',
        'svc-oil-f1': 'Вносител на масла',
        'svc-oil-f2': 'Продажба на едро и дребно',
        'svc-oil-f3': 'Моторни масла',
        'svc-oil-f4': 'Трансмисионни масла',
        'svc-oil-f5': 'Хидравлични масла',
        'svc-oil-f6': 'Масла за скоростни кутии и др.',

        // 'svc-tyre-title': 'Гуми сервиз',
        // 'svc-tyre-desc': 'Оборудван с модерна техника и квалифицирани механици',
        // 'svc-tyre-f1': 'Монтаж, баланс, вулканизация',
        // 'svc-tyre-f2': 'Сезонна смяна',
        // 'svc-tyre-f3': 'Продажба на гуми и джанти по заявка',
        
        // About Us
        'about-title': 'За нас',
        'about-text-1': 'Автокомплекси Маями е утвърдена верига от премиум автосервизи в София от 2008 г. Към днешна дата сервизите предлагат пълна гама услуги за автомобили, включващи сервизна дейност, техническа поддръжка, годишни технически прегледи, автомивка, автокозметика, детейлинг, тунинг, застраховки и продажба на автомобили.',
        'about-text-2': 'Със своите над 15 години опит, опитни механици и специалисти в своята дейност, верига Авто Маями се е превърнала в предпочитан партньор за частни клиенти, корпоративни автопаркове и автомобилни фенове.',
        
        // Insurance
        'insurance-title': 'Доверен сервиз',
        'insurance-text': 'Сервизите на Auto Miami работят със следните застрахователи: ',
        
        // Gallery
        'gallery-title': 'Нашата Галерия',
        'gallery-subtitle': 'Разгледайте снимки от нашите автокомплекси и работата ни',
        'gallery-sub-subtitle': 'Натиснете някоя снимка за да я разгледате по-подробно',
        
        // Pricing
        'pricing-title': 'Цени',
        'pricing-text': 'Поради голямото разнообразие от услуги и специфики на автомобилите, крайната цена се определя след оглед и консултация. Нашите специалисти ще ви препоръчат най-доброто решение и ще изготвят индивидуална оферта.',
        'pricing-subtitle': 'Каним Ви в най-близкия автосервиз за консултация и оферта',
        'pricing-cta': 'Нашите обекти',
        
        // Complexes
        'complexes-title': 'НАШИТЕ СЕРВИЗИ',
        'complexes-subtitle': 'Четири локации с пълен набор от услуги',
        'complex-all': 'Всички обекти',
        'complex-explore': 'Разгледайте нашите локации и услугите, които предлагат',
        
        // Complex details
        'complex-1-name': 'Авто Маями 1',
        'complex-1-address': 'бул. „Цариградско шосе" 120, гр. София',
        'complex-1-service-1': 'Автосервиз',
        'complex-1-service-2': 'Автомивка и Автокозметика',
        'complex-1-service-3': 'Авторепаратура',
        'complex-1-service-4': 'Гуми сервиз',
        'complex-1-service-5': 'ГТП',
        'complex-1-service-6': 'Продажба на масла',
        'complex-1-service-7': 'Кафе и зона с Wi‑Fi',
        'complex-1-service-hours': 'Пон–Пет: 9:00–18:00, Съб/Нед: Почивни',
        'complex-1-carwash-hours': 'Пон–Нед: 9:00–18:00',
        'complex-1-gtp-hours': 'Пон–Пет: 9:00–18:00, Съб/Нед: Почивни',
        
        'complex-2-name': 'Авто Маями 2',
        'complex-2-address': 'кв. Кръстова вада, ул. „Манфред Вьорнер" 9, гр. София',
        'complex-2-service-1': 'Автосервиз',
        'complex-2-service-2': 'Гуми сервиз',
        'complex-2-service-3': 'Продажба на масла',
        'complex-2-service-4': 'Платен автопаркинг',
        'complex-2-hours': 'Пон–Пет: 8:30–17:30, Съб/Нед: Почивни',
        
        'complex-3-name': 'Авто Маями 3',
        'complex-3-address': 'Карпузица, бул. „Цар Борис III" 270, гр. София',
        'complex-3-service-1': 'Автосервиз',
        'complex-3-service-2': 'Авторепаратура',
        'complex-3-hours': 'Пон–Пет: 9:00–18:00, Съб/Нед: Почивни',
        
        'complex-4-name': 'Авто Маями 4',
        'complex-4-address': 'бул. „Рожен" 115, гр. София',
        'complex-4-service-1': 'Автосервиз',
        'complex-4-service-2': 'Автомивка и Автокозметика',
        'complex-4-service-3': 'Авторепаратура',
        'complex-4-service-4': 'Гуми сервиз и хотел',
        'complex-4-service-5': 'ГТП',
        'complex-4-service-6': 'Застраховки',
        'complex-4-service-7': 'Автотапицерия',
        'complex-4-service-8': 'PDR',
        'complex-4-service-9': 'Лепене на спукани стъкла',
        'complex-4-service-10': 'Тунинг',
        'complex-4-service-11': 'Продажба на автомобили',
        'complex-4-service-12': 'Продажба на масла',
        'complex-4-service-13': 'Кафе и зона с Wi‑Fi',
        'complex-4-service-hours': 'Пон–Пет: 9:00–18:00, Съб/Нед: Почивни',
        'complex-4-carwash-hours': 'Пон–Пет: 9:00–18:00, Съб/Нед: Почивни',
        'complex-4-gtp-hours': 'Пон–Пет: 9:00–18:00, Съб/Нед: Почивни',
        
        'service-phone-number': 'Телефон сервиз',
        'damage-phone-number': 'Телефон ремонти по щети ТБО',
        'service-working-hours': 'Работно време сервиз',
        'carwash-phone-number': 'Телефон автомивка',
        'carwash-working-hours': 'Работно време автомивка',
        'gtp-phone-number': 'Телефон ГТП',
        'gtp-working-hours': 'Работно време ГТП',
        'weekend-closed': 'Събота/Неделя: Почивни',
        
        // Documents Section    
        'documents-title': 'Документи',
        'documents-main-text': 'Автокомплекси Маями ООД сключи договор за предоставяне на безвъзмездна финансова помощ по процедура: BG16RFOP002-2.089 „Подкрепа за малки предприятия с оборот над 500 000 лв. за преодоляване на икономическите последствия от пандемията COVID-19".',
        'documents-download-link': 'Свалете пълното съобщение от тук',
        'documents-other-title': 'Други документи:',
        
        // Footer
        'footer-description': 'Вашият доверен партньор за всички автомобилни нужди в София.',
        'footer-navigation': 'Навигация',
        'footer-copyright': 'AutoComplex Miami. Всички права запазени.',
        
        // Language toggle
        'lang-bg': 'БГ',
        'lang-en': 'EN',

        'made-by': "Разработка от ",
        'nl': "Никола Лазаров"
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About Us',
        'nav-ins': 'Insurance',
        'nav-gallery': 'Gallery',
        'nav-pricing': 'Pricing',
        'nav-complexes': 'Locations',
        
        // Hero Section
        'hero-title-1': 'EVERYTHING FOR',
        'hero-title-2': 'YOUR VEHICLE',
        'hero-title-3': 'IN ONE PLACE',
        'hero-subtitle': 'Auto Complexes Miami offers the following services: car repair, tire change, bodywork and painting services, car wash and detailing, auto upholstery services and more',
        'hero-feature-1': 'Trusted service',
        'hero-feature-2': 'We work with leading insurance companies',
        'hero-feature-3': 'Full range of services',
        'hero-cta': 'Explore our services',
        
        // Services (updated)
        'our-services': 'Our services',
        'svc-auto-title': 'Auto Service',
        'svc-auto-desc': 'for all types of repairs',
        'svc-auto-f1': 'Computer diagnostics',
        'svc-auto-f2': 'Engine and suspension repair',
        'svc-auto-f3': 'Brake system repair',
        'svc-auto-f4': 'Vehicle maintenance service',
        'svc-auto-f5': 'AC inspection and recharge',
        'svc-auto-f6': 'Tire change and tire hotel',

        'svc-body-title': 'Body Repair',
        'svc-body-desc': 'Trusted service of the leading insurance companies',
        'svc-body-f1': 'Repair and replacement of parts',
        'svc-body-f2': 'Sheet metal and paint services',
        'svc-body-f3': 'Trusted service for insurance companies',

        'svc-cosmo-title': 'Carwash and Auto Detailing',
        'svc-cosmo-desc': 'Full detailing, exterior and interior wash',
        'svc-cosmo-f1': 'Polishing and waxing',
        'svc-cosmo-f2': 'Interior shampooing',
        'svc-cosmo-f3': 'Applying ceramic coating protection, applying protective film and more',

        'svc-gtp-title': 'Annual Tech Inspection',
        'svc-gtp-desc': 'Annual technical inspection with fast service',
        'svc-gtp-f1': 'Complete preliminary check',
        'svc-gtp-f2': 'Consultation and on-site assistance',
        'svc-gtp-f3': 'Fast service',

        'svc-uph-title': 'Auto Upholstery',
        'svc-uph-desc': 'Interior repairs, reupholstery of seats, steering wheel, panels',
        'svc-uph-f1': 'Reupholstering of seats, steering wheel and ceiling',
        'svc-uph-f2': 'Implementation of individual projects',
        'svc-uph-f3': 'Interior restoration',

        'svc-pdr-title': 'PDR',
        'svc-pdr-desc': 'Paintless dent repair',
        'svc-pdr-f1': 'Removal of hail dents',
        'svc-pdr-f2': 'Paintless technology',
        'svc-pdr-f3': 'Fast and effective',

        'svc-glass-title': 'Cracked Glass Repair',
        'svc-glass-desc': 'Professional restoration of cracked auto glass',
        'svc-glass-f1': 'Fast and reliable repair',
        'svc-glass-f2': 'Prevents crack spreading',
        'svc-glass-f3': 'Restores visibility',

        'svc-sales-title': 'Car Sales',
        'svc-sales-desc': 'Used cars with warranty',
        'svc-sales-f1': 'Imports from Europe, Canada, USA and Dubai',
        'svc-sales-f2': 'Guaranteed real mileage and condition',
        'svc-sales-f3': 'Registration assistance',

        'svc-ins-title': 'Insurance',
        'svc-ins-desc': 'Consultations and inclusion of all automobile and other types of insurance, including:',
        'svc-ins-f1': 'Liability insurance',
        'svc-ins-f2': 'Аuto insurance',
        'svc-ins-f3': 'Auto assistance',

        'svc-oil-title': 'Import and sale of motor oils',
        'svc-oil-desc': 'Wide selection of motor oils from leading global brands',
        'svc-oil-f1': 'Oil importer',
        'svc-oil-f2': 'Wholesale and retail sales',
        'svc-oil-f3': 'Motor oils',
        'svc-oil-f4': 'Transmission oils',
        'svc-oil-f5': 'Hydraulic oils',
        'svc-oil-f6': 'Gearbox oils and others',

        // 'svc-tyre-title': 'Tire Service',
        // 'svc-tyre-desc': 'Modern equipment and skilled mechanics',
        // 'svc-tyre-f1': 'Mounting, balancing, vulcanization',
        // 'svc-tyre-f2': 'Seasonal changeover',
        // 'svc-tyre-f3': 'Tire and rim sales on request',
        
        // About Us
        'about-title': 'About Us',
        'about-text-1': 'Auto complexes Miami is a premium car service chain in Sofia since 2008. Today, our centers offer a full range of automotive services including maintenance, technical support, annual technical inspections, car wash, auto detailing, tuning, insurance, and car sales.',
        'about-text-2': 'With over 15 years of experience and skilled mechanics and specialists, Auto Miami has become a preferred partner for private clients, corporate fleets, and automotive enthusiasts.',
        
        // Insurance
        'insurance-title': 'Trusted Service',
        'insurance-text': 'Auto Miami Services work with the following insurance providers: ',
        
        // Gallery
        'gallery-title': 'Our Gallery',
        'gallery-subtitle': 'Browse photos from our auto complexes and our work',
        'gallery-sub-subtitle': 'Click a photo to take a close look',
        
        // Pricing
        'pricing-title': 'Pricing',
        'pricing-text': 'Due to the great variety of services and vehicle specifics, the final price is determined after inspection. Our specialists will recommend the best solution and prepare a transparent offer.',
        'pricing-subtitle': 'We invite you to the nearest auto complex for consultation and individual offer',
        'pricing-cta': 'Our Locations',
        
        // Complexes
        'complexes-title': 'OUR LOCATIONS',
        'complexes-subtitle': 'Four locations with full range of services',
        'complex-all': 'All Locations',
        'complex-explore': 'Explore our locations and the services they offer',
        
        // Complex details
        'complex-1-name': 'Auto Miami 1',
        'complex-1-address': 'Tsarigradsko Shose Blvd 120, Sofia',
        'complex-1-service-1': 'Auto Service',
        'complex-1-service-2': 'Auto Detailing',
        'complex-1-service-3': 'Body Repair',
        'complex-1-service-4': 'Tire Service',
        'complex-1-service-5': 'Annual Technical Inspection',
        'complex-1-service-6': 'Accessories & Tuning Parts',
        'complex-1-service-7': 'Coffee & Wi‑Fi Area',
        'complex-1-service-hours': 'Mon-Fri: 9:00–18:00, Sat/Sun: Closed',
        'complex-1-carwash-hours': 'Mon-Sun: 9:00–18:00',
        'complex-1-gtp-hours': 'Mon-Sun: 9:00–18:00',
        
        'complex-2-name': 'Auto Miami 2',
        'complex-2-address': 'Krustova Vada, Manfred Worner St 9, Sofia',
        'complex-2-service-1': 'Auto Service',
        'complex-2-service-2': 'Tire Service',
        'complex-2-service-3': 'Accessories & Tuning Parts',
        'complex-2-service-4': 'Paid parking',
        'complex-2-hours': 'Mon-Fri: 8:30–17:30, Sat/Sun: Closed',
        
        'complex-3-name': 'Auto Miami 3',
        'complex-3-address': 'Karpuzitsa, Tsar Boris III Blvd 270, Sofia',
        'complex-3-service-1': 'Auto Service',
        'complex-3-service-2': 'Body Repair',
        'complex-3-hours': 'Mon-Fri: 9:00–18:00, Sat/Sun: Closed',
        
        'complex-4-name': 'Auto Miami 4',
        'complex-4-address': 'Rozhen Blvd 115, Sofia',
        'complex-4-service-1': 'Auto Service',
        'complex-4-service-2': 'Auto Detailing',
        'complex-4-service-3': 'Body Repair',
        'complex-4-service-4': 'Tire Service & hotel',
        'complex-4-service-5': 'Annual Technical Inspection',
        'complex-4-service-6': 'Insurance',
        'complex-4-service-7': 'Auto Upholstery',
        'complex-4-service-8': 'PDR',
        'complex-4-service-9': 'Cracked Glass Repair',
        'complex-4-service-10': 'Tuning',
        'complex-4-service-11': 'Car Sales',
        'complex-4-service-12': 'Accessories & Tuning Parts',
        'complex-4-service-13': 'Coffee & Wi‑Fi Area',
        'complex-4-gtp-hours': 'Mon–Fri: 9:00–18:00, Sat/Sun: Closed',
        'complex-4-service-hours': 'Mon–Fri: 9:00–18:00, Sat/Sun: Closed',
        'complex-4-carwash-hours': 'Mon–Fri: 9:00–18:00, Sat/Sun: Closed',
        
        'service-working-hours': 'Service working hours',
        'service-phone-number': 'Service phone number',
        'damage-phone-number': 'Collision repairs & painting phone number',
        'carwash-working-hours': 'Carwash working hours',
        'carwash-phone-number': 'Carwash phone number',
        'gtp-working-hours': 'Annual Technical Inspection working hours',
        'gtp-phone-number': 'Annual Technical Inspection phone number',
        'weekend-closed': 'Sat/Sun: Closed',
        
        // Documents Section
        'documents-title': 'Documents',
        'documents-main-text': 'AutoComplex Miami Ltd. signed a contract for providing non-refundable financial assistance under procedure: BG16RFOP002-2.089 "Support for small enterprises with turnover over 500,000 BGN to overcome the economic consequences of the COVID-19 pandemic".',
        'documents-download-link': 'Download the full announcement here',
        'documents-other-title': 'Other documents:',
        
        // Footer
        'footer-description': 'Your trusted partner for all automotive needs in Sofia.',
        'footer-navigation': 'Navigation',
        'footer-copyright': 'AutoComplex Miami. All rights reserved.',
        
        // Language toggle
        'lang-bg': 'BG',
        'lang-en': 'EN',

        'made-by': "Developed by ",
        'nl': "Nikola Lazarov"
    }
};


let translations = { ...defaultTranslations };
let currentLanguage = 'bg';

function changeLanguage(lang) {
    if (lang === 'bg' || lang === 'en') {
        setLanguage(lang);
    } else {
        const next = currentLanguage === 'bg' ? 'en' : 'bg';
        setLanguage(next);
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
    updatePageContent();
}

function updatePageContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if(translations[currentLanguage][key]){
            element.textContent = translations[currentLanguage][key];
        }
        if (key == 'footer-copyright') {
            element.textContent = '© ' + new Date().getFullYear() + ' ' + translations[currentLanguage][key];
        }
    });

    // Update single toggle button label: EN means click to show English (current bg), BG means click to show Bulgarian (current en)
    const toggleButtons = document.querySelectorAll('.lang-toggle-btn');
    toggleButtons.forEach(btn => {
        btn.textContent = currentLanguage === 'bg' ? 'EN' : 'BG';
    });
}

function initLanguageSystem() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    setLanguage(currentLanguage);

    const toggleButtons = document.querySelectorAll('.lang-toggle-btn');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const next = currentLanguage === 'bg' ? 'en' : 'bg';
            setLanguage(next);
        });
    });

    updatePageContent();
}

var isAnchorScrolling = false;
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();

    const header = document.getElementById('main-header');
    const mainLogo = document.getElementById('logo-img')
    const headerHeight = header.offsetHeight;

    // Desktop curved header state
    function onScrollDesktop() {
        if (window.scrollY > headerHeight) {
            header.classList.add('scrolled');
            mainLogo.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled');
            mainLogo.classList.remove('scrolled');

        }
    }

    // Mobile hide/show header on scroll direction
    let lastScrollY = window.scrollY;
    function onScrollMobile() {
        const currentY = window.scrollY;
        const isScrollingDown = currentY > lastScrollY;
        const passedHeader = currentY > 10;

        if (isScrollingDown && passedHeader && !isAnchorScrolling) {
            header.classList.add('hide');
            console.log(isAnchorScrolling)
        } else {
            header.classList.remove('hide');
        }
        lastScrollY = currentY;
    }

    function handleScroll() {
        if (window.innerWidth <= 800) {
            header.classList.remove('scrolled'); // keep rectangular on mobile
            onScrollMobile();
        } else {
            header.classList.remove('hide');
            onScrollDesktop();
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
        // Reset states appropriately on resize
        if (window.innerWidth <= 800) {
            header.classList.remove('scrolled');
        } else {
            header.classList.remove('hide');
        }
        handleScroll();
    });

    handleScroll();
});

async function initializeApp() {
    initSmoothScroll();
    initNavigation();
    initGSAPAnimations();
    initScrollAnimations();
    initMap();
    initLanguageSystem();
    initServiceCards();
    initPackageCards();
    initMobileDrawer();
    initMobileDrawerSecondary();
    // initPhotoSwipeGallery();
}

// function initPhotoSwipeGallery() {
//     const galleryElement = document.getElementById('pswp-gallery');
//     if (!galleryElement) return;

//     const items = [];
//     const galleryItems = galleryElement.querySelectorAll('a');

//     galleryItems.forEach((link, index) => {
//         const src = link.getAttribute('href');
//         const width = parseInt(link.getAttribute('data-pswp-width')) || 1200;
//         const height = parseInt(link.getAttribute('data-pswp-height')) || 900;

//         items.push({
//             src: src,
//             w: width,
//             h: height
//         });

//         link.dataset.pswpIndex = index;
//     });

//     const openPhotoSwipe = (index) => {
//         const pswpElement = document.querySelectorAll('.pswp')[0];
//         const options = {
//             index: parseInt(index),
//             bgOpacity: 0.8,
//             showHideOpacity: true,
//             getThumbBoundsFn: (index) => {
//                 const thumbnail = galleryItems[index];
//                 const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
//                 const rect = thumbnail.getBoundingClientRect();

//                 return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
//             }
//         };
//         const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
//         gallery.init();
//     };

//     galleryElement.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (e.target.tagName === 'IMG' && e.target.closest('a')) {
//             const link = e.target.closest('a');
//             openPhotoSwipe(link.dataset.pswpIndex);
//         }
//     });
// }

let lenis;

function initSmoothScroll() {
    lenis = new Lenis({
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);''
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        const header = document.getElementById('main-header');
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header ? header.offsetHeight : 0;
                lenis.scrollTo(target, {
                    offset: -(headerHeight + 10),
                    duration: 1.5
                });
                isAnchorScrolling = true;
            }
            setTimeout(() => {
                            
                isAnchorScrolling = false;
            }, 3000);
        });
    });
}

// function initCustomCursor() {
//     const cursor = document.querySelector('.cursor');
//     const cursorDot = document.querySelector('.cursor-dot');
//     const cursorOutline = document.querySelector('.cursor-outline');

//     if (!cursor) return;

//     let mouseX = 0;
//     let mouseY = 0;
//     let outlineX = 0;
//     let outlineY = 0;

//     document.addEventListener('mousemove', (e) => {
//         mouseX = e.clientX;
//         mouseY = e.clientY;

//         cursorDot.style.left = mouseX + 'px';
//         cursorDot.style.top = mouseY + 'px';
//     });

//     // Smooth cursor outline following
//     function animateCursorOutline() {
//         outlineX += (mouseX - outlineX) * 0.1;
//         outlineY += (mouseY - outlineY) * 0.1;

//         cursorOutline.style.left = outlineX + 'px';
//         cursorOutline.style.top = outlineY + 'px';

//         requestAnimationFrame(animateCursorOutline);
//     }
//     animateCursorOutline();

//     // Cursor hover effects
//     const hoverElements = document.querySelectorAll('a, button, .service-card, .detailing-package, .location-card');

//     hoverElements.forEach(el => {
//         el.addEventListener('mouseenter', () => {
//             cursor.classList.add('cursor-hover');
//         });

//         el.addEventListener('mouseleave', () => {
//             cursor.classList.remove('cursor-hover');
//         });
//     });
// }


function initNavigation() {
    const header = document.getElementById('main-header');
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

function closeDraweronX() {
    const header = document.getElementById('main-header')
    const drawer = document.getElementById('mobile-drawer');
    const close = document.getElementById('drawer-close');
    const arrowBack = document.getElementById('arrow-back');
    const insideContainer = document.getElementById('inside-container');


    drawer.classList.remove('animate__fadeInLeft');
    drawer.classList.add('animate__fadeOutLeft');
    close.classList.remove('animate__fadeInLeft');
    close.classList.add('animate__fadeOutLeft');
    arrowBack.classList.remove('animate__fadeInLeft');
    arrowBack.classList.add('animate__fadeOutLeft');
    
    setTimeout(() => {
        drawer.classList.remove('open');
        close.classList.remove('open');
        arrowBack.classList.remove('open');
        insideContainer.classList.remove('just-between');

        document.body.style.overflow = '';

        drawer.classList.remove('animate__fadeOutLeft');
        drawer.classList.add('animate__fadeInLeft')
        close.classList.remove('animate__fadeOutLeft');
        close.classList.add('animate__fadeInLeft')
        arrowBack.classList.remove('animate__fadeOutLeft');
        arrowBack.classList.add('animate__fadeInLeft')
    }, 200)
    header.classList.remove('hide');
    closeDraweronX2();
}

function closeDraweronX2() {
    const drawer = document.getElementById('mobile-drawer-options');
    const arrowBack = document.getElementById('arrow-back');
    const insideContainer = document.getElementById('inside-container');

    drawer.classList.remove('animate__fadeInLeft');
    drawer.classList.add('animate__fadeOutLeft');
    arrowBack.classList.remove('animate__fadeInLeft');
    arrowBack.classList.add('animate__fadeOutLeft');
    setTimeout(() => {
        drawer.classList.remove('open');
        arrowBack.classList.remove('open');
        insideContainer.classList.remove('just-between');

        document.body.style.overflow = '';
        drawer.classList.remove('animate__fadeOutLeft');
        drawer.classList.add('animate__fadeInLeft');
        arrowBack.classList.remove('animate__fadeOutLeft');
        arrowBack.classList.add('animate__fadeInLeft');
    }, 750)
}


// function openDrawerSecondary() {
//     const drawer = document.getElementById('mobile-drawer-options');
//     const links = drawer ? drawer.querySelectorAll('.mobile-link-options') : [];
//     drawer.classList.add('open');
//     document.body.style.overflow = 'hidden';
//     // Stagger reveal links
//     links.forEach((link, i) => {
//         link.style.transitionDelay = `${i + 1 * 500}ms`;
//         link.style.opacity = '1';
//         link.style.transform = 'translateX(0)';
//     });
// }

function initMobileDrawer() {
    const hamburger = document.getElementById('burger-icon');
    const drawer = document.getElementById('mobile-drawer');
    const close = document.getElementById('drawer-close');
    const links = drawer ? drawer.querySelectorAll('.mobile-link') : [];

    if (!hamburger || !drawer) return;

    function openDrawer() {
        drawer.classList.add('open');
        close.classList.add('open')
        document.body.style.overflow = 'hidden';
        links.forEach((link, i) => {
            link.style.transitionDelay = `${i + 1 * 200}ms`;
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        });
    }

    function closeDrawer() {
       closeDraweronX();
    }

    hamburger.addEventListener('click', () => {
        const isOpen = drawer.classList.contains('open');
        if (isOpen) closeDrawer(); else openDrawer();
    });

    drawer.addEventListener('click', (e) => {
        if (e.target === drawer) closeDrawer();
    });

    links.forEach(link => {
        if (link.id === 'drawer-options') {
            return;
        }
        link.addEventListener('click', () => closeDrawer());
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
    });
}

function initMobileDrawerSecondary() {
    const optionsAnchor = document.getElementById('drawer-options');
    const drawer = document.getElementById('mobile-drawer-options');
    const arrowBack = document.getElementById('arrow-back');
    const insideContainer = document.getElementById('inside-container');
    const links = drawer ? drawer.querySelectorAll('.mobile-link-options') : [];
    if (!optionsAnchor || !drawer) return;

    function openDrawer() {
        arrowBack.classList.add('open')
        drawer.classList.add('open');
        insideContainer.classList.add('just-between');

        document.body.style.overflow = 'hidden';
        links.forEach((link, i) => {
            link.style.transitionDelay = `${i + 1 * 500}ms`;
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        });
    }

    function closeDrawerSecondary() {
        console.log("here why")
        closeDraweronX();
    }

    optionsAnchor.addEventListener('click', () => {
        const isOpen = drawer.classList.contains('open');
        if (isOpen) closeDrawerSecondary(); else openDrawer();
    });

    // Close on background click
    // drawer.addEventListener('click', (e) => {
    //     if (e.target === drawer) closeDrawerSecondary();
    // });

    links.forEach(link => link.addEventListener('click', () => closeDrawerSecondary()));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawerSecondary();
    });
}


function initGSAPAnimations() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    const heroTitleLines = document.querySelectorAll('.hero-title-line');

    gsap.timeline()
        .from(heroTitleLines, {
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.2,
            ease: "power3.out"
        })
        .from('.hero-subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out"
        }, "-=0.5")
        .from('.hero-features', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power2.out"
        }, "-=0.5")
        .from('.hero-cta', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power2.out"
        }, "-=0.3")
        .from('.hero-scroll-indicator', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power2.out"
        }, "-=0.3");

    gsap.fromTo('.service-card', {
        y: 100,
        opacity: 0,
        scale: 0.8
    }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            end: 'bottom 20%',
        }
    });

    gsap.fromTo('.feature-item', {
        x: -100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.interior-features',
            start: 'top 80%',
        }
    });

    gsap.fromTo('.gallery-item', {
        scale: 0,
        opacity: 0,
        rotation: 10
    }, {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '.image-gallery',
            start: 'top 80%',
        }
    });

    gsap.fromTo('.detailing-package', {
        y: 80,
        opacity: 0,
        scale: 0.9
    }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.detailing-services',
            start: 'top 80%',
        }
    });

    gsap.fromTo('.location-card', {
        x: 100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.locations-list',
            start: 'top 80%',
        }
    });

    gsap.fromTo('.form-group', {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
        }
    });

    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: title,
                start: 'top 90%',
            }
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animationElements = document.querySelectorAll(
        '.fade-in-up, .scale-in, .slide-in-left, .slide-in-right'
    );

    animationElements.forEach(el => {
        observer.observe(el);
    });

    const counters = document.querySelectorAll('[data-counter]');

    counters.forEach(counter => {
        observer.observe(counter);

        counter.addEventListener('visible', () => {
            const target = parseInt(counter.getAttribute('data-counter'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                counter.textContent = Math.floor(current);

                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                }
            }, 16);
        });
    });
}

//     const form = document.getElementById('contact-form');
//     const submitBtn = document.querySelector('.btn-submit');

//     if (!form) return;

//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();

//         // Add loading state
//         const originalText = submitBtn.innerHTML;
//         submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Изпращане...';
//         submitBtn.disabled = true;

//         // Get form data
//         const formData = new FormData(form);
//         const data = Object.fromEntries(formData);

//         try {
//             // Simulate form submission (replace with actual endpoint)
//             await new Promise(resolve => setTimeout(resolve, 2000));

//             // Success message
//             showNotification('Съобщението е изпратено успешно!', 'success');
//             form.reset();

//             // Reset form labels
//             const labels = form.querySelectorAll('label');
//             labels.forEach(label => {
//                 label.style.top = '50%';
//                 label.style.fontSize = 'var(--font-size-base)';
//                 label.style.color = 'var(--color-gray)';
//             });

//         } catch (error) {
//             showNotification('Грешка при изпращане на съобщението. Моля опитайте отново.', 'error');
//         } finally {
//             submitBtn.innerHTML = originalText;
//             submitBtn.disabled = false;
//         }
//     });

//     // Form field animations
//     const formInputs = form.querySelectorAll('input, select, textarea');

//     formInputs.forEach(input => {
//         input.addEventListener('focus', () => {
//             input.parentElement.classList.add('focused');
//         });

//         input.addEventListener('blur', () => {
//             if (!input.value) {
//                 input.parentElement.classList.remove('focused');
//             }
//         });
//     });
// }

// ===== NOTIFICATION SYSTEM =====
// function showNotification(message, type = 'info') {
//     const notification = document.createElement('div');
//     notification.className = `notification notification-${type}`;
//     notification.innerHTML = `
//         <div class="notification-content">
//             <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
//             <span>${message}</span>
//         </div>
//         <button class="notification-close">&times;</button>
//     `;

//     notification.style.cssText = `
//         position: fixed;
//         top: 100px;
//         right: 20px;
//         background: ${type === 'success' ? 'var(--color-primary)' : '#ef4444'};
//         color: white;
//         padding: 1rem 1.5rem;
//         border-radius: var(--border-radius);
//         box-shadow: var(--shadow-lg);
//         z-index: 10000;
//         transform: translateX(400px);
//         transition: var(--transition-base);
//         max-width: 400px;
//     `;

//     document.body.appendChild(notification);

//     setTimeout(() => {
//         notification.style.transform = 'translateX(0)';
//     }, 100);

//     setTimeout(() => {
//         removeNotification(notification);
//     }, 5000);

//     const closeBtn = notification.querySelector('.notification-close');
//     closeBtn.addEventListener('click', () => {
//         removeNotification(notification);
//     });
// }

// function removeNotification(notification) {
//     notification.style.transform = 'translateX(400px)';
//     setTimeout(() => {
//         if (notification.parentElement) {
//             notification.parentElement.removeChild(notification);
//         }
//     }, 300);
// }

function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    mapContainer.innerHTML = `
        <div style="
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #dc2626, #0f0f0f);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
            text-align: center;
            position: relative;
        ">
            <div>
                <i class="fas fa-map-marker-alt" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                <p>Карта с локации<br>
                <small style="opacity: 0.8;">Google Maps интеграция</small></p>
            </div>
        </div>
    `;

}

// ===== VIDEO CONTROLS =====
// function initVideoControls() {
//     const video = document.querySelector('.hero-video');
//     if (!video) return;

//     // Video quality and performance optimization
//     video.addEventListener('loadeddata', () => {
//         video.play().catch(e => {
//             console.log('Video autoplay prevented:', e);
//         });
//     });

//     // Pause video when not in viewport (performance)
//     const videoObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 video.play().catch(e => console.log('Video play error:', e));
//             } else {
//                 video.pause();
//             }
//         });
//     }, { threshold: 0.1 });

//     videoObserver.observe(video);

//     // Add video controls on mobile
//     if (window.innerWidth <= 768) {
//         video.controls = false;
//         video.muted = true;
//     }
// }

// ===== SERVICE CARDS INTERACTION =====
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.2,
                scale: 1.02,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.2,
                scale: 1,
                ease: "power2.out"
            });
        });

        card.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            const rect = card.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                pointer-events: none;
                z-index: 1;
            `;

            card.style.position = 'relative';
            card.appendChild(ripple);

            gsap.to(ripple, {
                duration: 0.6,
                scale: 1,
                opacity: 0,
                ease: "power2.out",
                onComplete: () => {
                    if (ripple.parentElement) {
                        ripple.parentElement.removeChild(ripple);
                    }
                }
            });
        });
    });
}

function initPackageCards() {
    const packages = document.querySelectorAll('.detailing-package');

    packages.forEach(pkg => {
        pkg.addEventListener('mouseenter', () => {
            gsap.to(pkg, {
                duration: 0.3,
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                ease: "power2.out"
            });
        });

        pkg.addEventListener('mouseleave', () => {
            const isFeatured = pkg.classList.contains('featured');
            gsap.to(pkg, {
                duration: 0.3,
                y: 0,
                scale: isFeatured ? 1.05 : 1,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                ease: "power2.out"
            });
        });
    });
}

function logoImgClick() {
    location.href = '#home';
}

function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}


const optimizedScrollHandler = throttle(() => {
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

const optimizedResizeHandler = debounce(() => {
    ScrollTrigger.refresh();
}, 250);

window.addEventListener('resize', optimizedResizeHandler);


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

function initPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="preloader-logo">
                <span>AutoComplex Miami</span>
            </div>
            <div class="preloader-spinner">
                <div class="spinner"></div>
            </div>
        </div>
    `;

    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--color-primary), var(--color-black));
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        color: white;
        font-family: var(--font-heading);
    `;

    document.body.appendChild(preloader);

    window.addEventListener('load', () => {
        gsap.to(preloader, {
            duration: 0.8,
            opacity: 0,
            y: -100,
            ease: "power2.inOut",
            onComplete: () => {
                if (preloader.parentElement) {
                    preloader.parentElement.removeChild(preloader);
                }
            }
        });
    });
}


window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
});