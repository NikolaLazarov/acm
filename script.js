// ===== TRANSLATION SYSTEM =====
const translations = {
    bg: {
        // Navigation
        'nav-home': 'Начало',
        'nav-services': 'Услуги',
        'nav-about': 'За нас',
        'nav-gallery': 'Галерия',
        'nav-pricing': 'Цени',
        'nav-complexes': 'Нашите обекти',
        
        // Hero Section
        'hero-title-1': 'ВСИЧКО ЗА',
        'hero-title-2': 'ВАШИЯ АВТОМОБИЛ',
        'hero-title-3': 'НА ЕДНО МЯСТО',
        'hero-subtitle': 'Автокомплекси с почти всички услуги: сервиз, гуми, тенекеджийски и бояджийски работи, детайлинг, интериор и още',
        'hero-feature-1': 'Доверен сервиз',
        'hero-feature-2': 'Работим с водещи застрахователни компании',
        'hero-feature-3': 'Пълен спектър услуги',
        'hero-cta': 'Разгледай услугите',
        
        // Services
        'services-title': 'Нашите услуги',
        'services-subtitle': 'Всичко което ви трябва за вашия автомобил',
        'service-service': 'Сервиз',
        'service-service-desc': 'Пълно сервизно обслужване и ремонт на всички системи',
        'service-service-feature-1': 'Диагностика и електрика',
        'service-service-feature-2': 'Двигател, трансмисия, ходова част',
        'service-service-feature-3': 'Спирачки и консумативи',
        
        'service-bodywork': 'Авторепаратура',
        'service-bodywork-desc': 'Професионални тенекеджийски услуги и възстановяване след катастрофи',
        'service-bodywork-feature-1': 'Изправяне на помачквания',
        'service-bodywork-feature-2': 'Заваряване',
        'service-bodywork-feature-3': 'Смяна на части',
        
        'service-gtp': 'ГТП',
        'service-gtp-desc': 'Подготовка и преминаване на годишен технически преглед',
        'service-gtp-feature-1': 'Пълна предварителна проверка',
        'service-gtp-feature-2': 'Консултация и съдействие на място',
        'service-gtp-feature-3': 'Бързо обслужване',
        
        'service-upholstery': 'Автотапицерия',
        'service-upholstery-desc': 'Интериорни ремонти, претапициране на седалки, волан и панели',
        'service-upholstery-feature-1': 'Претапициране седалки и волан',
        'service-upholstery-feature-2': 'Персонализирани материали',
        'service-upholstery-feature-3': 'Възстановяване интериор',
        
        'service-pdr': 'PDR',
        'service-pdr-desc': 'Ремонт на вдлъбнатини без боядисване',
        'service-pdr-feature-1': 'Премахване на дребни вдлъбнатини',
        'service-pdr-feature-2': 'Без нарушаване на оригиналната боя',
        'service-pdr-feature-3': 'Бързо и ефективно',
        
        'service-glass': 'Лепене на спукани стъкла',
        'service-glass-desc': 'Професионално възстановяване на спукани и отчупени автостъкла',
        'service-glass-feature-1': 'Бърз и надежден ремонт',
        'service-glass-feature-2': 'Предотвратяване на разпространение на пукнатини',
        'service-glass-feature-3': 'Възстановяване на видимостта',
        
        'service-sales': 'Продажба на автомобили',
        'service-sales-desc': 'Съдействие при покупко-продажба на употребявани автомобили',
        'service-sales-feature-1': 'Оценка и консултация',
        'service-sales-feature-2': 'Подготовка за продажба',
        'service-sales-feature-3': 'Документално съдействие',
        
        'service-insurance': 'Застраховки',
        'service-insurance-desc': 'Сключване на всички видове застрахователни полици',
        'service-insurance-feature-1': 'Гражданска отговорност',
        'service-insurance-feature-2': 'Каско',
        'service-insurance-feature-3': 'Имуществени и др.',
        
        // About Us
        'about-title': 'За нас',
        'about-text-1': 'Автокомплекси Маями ООД е една от фирмите пионери в областта на пълната автоподдръжка и техническата поддръжка на автопаркове.',
        'about-text-2': 'Имаме удоволствието да предоставяме всички видове услуги, свързани с консултиране на клиента и реално извършване на техническа поддръжка, както и всички допълнителни услуги, от които Вашето превозно средство би могло да се нуждае: ГТП, автоСПА, Монтьорски авторемонти, Диагностика и всички видове ел. дейности, Пътна Помощ, Сервиз и продажба Гуми, поддръжка на екстериор и интериор на автомобила, тунинг, осигуряване и смяна на консумативи, сключване на застрахователни полици, документално и фактическо ликвидиране на щети и пълен автоасистанс, цялостен Тенекеджийски и Бояджийски ремонт на най-високо ниво.',
        
        // Insurance
        'insurance-title': 'Доверен сервиз',
        'insurance-text': 'Сервизите на Auto Miami работят с Allianz, Auto Insurance и ЛевИнс',
        
        // Gallery
        'gallery-title': 'Нашата Галерия',
        'gallery-subtitle': 'Разгледайте снимки от нашите автокомплекси и работата ни',
        
        // Pricing
        'pricing-title': 'Цени',
        'pricing-text': 'Поради голямото разнообразие от услуги и специфики на автомобилите, крайната цена се определя след оглед. Нашите специалисти ще ви препоръчат най-доброто решение и ще изготвят прозрачна оферта.',
        'pricing-subtitle': 'Каним ви в най-близкия автокомплекс за консултация и индивидуална оферта',
        'pricing-cta': 'Нашите обекти',
        
        // Complexes
        'complexes-title': 'НАШИТЕ ОБЕКТИ',
        'complexes-subtitle': 'Четири локации с пълен набор от услуги',
        'complex-all': 'Всички обекти',
        'complex-explore': 'Разгледайте нашите локации и услугите, които предлагат',
        
        // Complex details
        'complex-1-name': 'Маями 1',
        'complex-1-address': 'бул. „Цариградско шосе" 120, гр. София',
        'complex-1-service-1': 'Гуми и джанти',
        'complex-1-service-2': 'Тенекеджийски и бояджийски услуги',
        'complex-1-service-3': 'Детайлинг и интериор',
        'complex-1-service-4': 'Диагностика и обслужване',
        
        'complex-2-name': 'Маями 2',
        'complex-2-address': 'кв. Кръстова вада, ул. „Манфред Вьорнер" 9, гр. София',
        'complex-2-service-1': 'Пълно сервизно обслужване',
        'complex-2-service-2': 'Калибриране и геометрия',
        'complex-2-service-3': 'Бояджийски услуги',
        'complex-2-service-4': 'Детайлинг',
        
        'complex-3-name': 'Маями 3',
        'complex-3-address': 'Карпузица, бул. „Цар Борис III" 270, гр. София',
        'complex-3-service-1': 'Тенекеджийски и бояджийски услуги',
        'complex-3-service-2': 'Сервиз и диагностика',
        'complex-3-service-3': 'Интериорни ремонти',
        'complex-3-service-4': 'Гуми и баланс',
        
        'complex-4-name': 'Маями 4',
        'complex-4-address': 'бул. „Рожен" 115, гр. София',
        'complex-4-service-1': 'Пълен спектър услуги',
        'complex-4-service-2': 'Детайлинг и керамика',
        'complex-4-service-3': 'Сервиз ходова част',
        'complex-4-service-4': 'Гуми и съхранение',
        
        'complex-hours': 'Пон–Пет: 8:00–18:00, Съб: 8:00–16:00',
        
        // Footer
        'footer-description': 'Вашият доверен партньор за всички автомобилни нужди в София.',
        'footer-navigation': 'Навигация',
        'footer-copyright': '© 2025 AutoComplex Miami. Всички права запазени.',
        
        // Language toggle
        'lang-bg': 'БГ',
        'lang-en': 'EN'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About Us',
        'nav-gallery': 'Gallery',
        'nav-pricing': 'Pricing',
        'nav-complexes': 'Our Locations',
        
        // Hero Section
        'hero-title-1': 'EVERYTHING FOR',
        'hero-title-2': 'YOUR VEHICLE',
        'hero-title-3': 'IN ONE PLACE',
        'hero-subtitle': 'Auto complexes with almost all services: service, tires, bodywork and painting, detailing, interior and more',
        'hero-feature-1': 'Trusted service',
        'hero-feature-2': 'We work with leading insurance companies',
        'hero-feature-3': 'Full range of services',
        'hero-cta': 'Explore services',
        
        // Services
        'services-title': 'Our Services',
        'services-subtitle': 'Everything you need for your vehicle',
        'service-service': 'Service',
        'service-service-desc': 'Complete service maintenance and repair of all systems',
        'service-service-feature-1': 'Diagnostics and electrical',
        'service-service-feature-2': 'Engine, transmission, chassis',
        'service-service-feature-3': 'Brakes and consumables',
        
        'service-bodywork': 'Bodywork',
        'service-bodywork-desc': 'Professional bodywork services and restoration after accidents',
        'service-bodywork-feature-1': 'Dent repair',
        'service-bodywork-feature-2': 'Welding',
        'service-bodywork-feature-3': 'Parts replacement',
        
        'service-gtp': 'Annual Inspection',
        'service-gtp-desc': 'Preparation and passing of annual technical inspection',
        'service-gtp-feature-1': 'Complete preliminary check',
        'service-gtp-feature-2': 'Consultation and on-site assistance',
        'service-gtp-feature-3': 'Fast service',
        
        'service-upholstery': 'Auto Upholstery',
        'service-upholstery-desc': 'Interior repairs, seat reupholstering, steering wheel and panels',
        'service-upholstery-feature-1': 'Seat and steering wheel reupholstering',
        'service-upholstery-feature-2': 'Custom materials',
        'service-upholstery-feature-3': 'Interior restoration',
        
        'service-pdr': 'PDR',
        'service-pdr-desc': 'Paintless dent repair',
        'service-pdr-feature-1': 'Removal of small dents',
        'service-pdr-feature-2': 'Without damaging original paint',
        'service-pdr-feature-3': 'Fast and effective',
        
        'service-glass': 'Cracked Glass Repair',
        'service-glass-desc': 'Professional restoration of cracked and chipped auto glass',
        'service-glass-feature-1': 'Fast and reliable repair',
        'service-glass-feature-2': 'Preventing crack propagation',
        'service-glass-feature-3': 'Visibility restoration',
        
        'service-sales': 'Car Sales',
        'service-sales-desc': 'Assistance with buying and selling used vehicles',
        'service-sales-feature-1': 'Evaluation and consultation',
        'service-sales-feature-2': 'Sale preparation',
        'service-sales-feature-3': 'Documentation assistance',
        
        'service-insurance': 'Insurance',
        'service-insurance-desc': 'All types of insurance policies',
        'service-insurance-feature-1': 'Liability insurance',
        'service-insurance-feature-2': 'Comprehensive insurance',
        'service-insurance-feature-3': 'Property and others',
        
        // About Us
        'about-title': 'About Us',
        'about-text-1': 'AutoComplex Miami Ltd. is one of the pioneer companies in the field of complete auto maintenance and technical support of vehicle fleets.',
        'about-text-2': 'We have the pleasure to provide all types of services related to customer consultation and actual technical maintenance, as well as all additional services that your vehicle might need: Annual Inspection, Auto SPA, Mechanical auto repairs, Diagnostics and all types of electrical activities, Roadside Assistance, Service and tire sales, exterior and interior vehicle maintenance, tuning, supply and replacement of consumables, insurance policy conclusion, documentation and actual damage settlement and full auto assistance, complete Bodywork and Painting repairs at the highest level.',
        
        // Insurance
        'insurance-title': 'Trusted Service',
        'insurance-text': 'Auto Miami services work with Allianz, Auto Insurance and LevIns',
        
        // Gallery
        'gallery-title': 'Our Gallery',
        'gallery-subtitle': 'Browse photos from our auto complexes and our work',
        
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
        'complex-1-name': 'Miami 1',
        'complex-1-address': 'Tsarigradsko Shose Blvd 120, Sofia',
        'complex-1-service-1': 'Tires and wheels',
        'complex-1-service-2': 'Bodywork and painting services',
        'complex-1-service-3': 'Detailing and interior',
        'complex-1-service-4': 'Diagnostics and maintenance',
        
        'complex-2-name': 'Miami 2',
        'complex-2-address': 'Krustova Vada, Manfred Worner St 9, Sofia',
        'complex-2-service-1': 'Complete service maintenance',
        'complex-2-service-2': 'Alignment and geometry',
        'complex-2-service-3': 'Painting services',
        'complex-2-service-4': 'Detailing',
        
        'complex-3-name': 'Miami 3',
        'complex-3-address': 'Karpuzitsa, Tsar Boris III Blvd 270, Sofia',
        'complex-3-service-1': 'Bodywork and painting services',
        'complex-3-service-2': 'Service and diagnostics',
        'complex-3-service-3': 'Interior repairs',
        'complex-3-service-4': 'Tires and balancing',
        
        'complex-4-name': 'Miami 4',
        'complex-4-address': 'Rozhen Blvd 115, Sofia',
        'complex-4-service-1': 'Full range of services',
        'complex-4-service-2': 'Detailing and ceramic coating',
        'complex-4-service-3': 'Chassis service',
        'complex-4-service-4': 'Tires and storage',
        
        'complex-hours': 'Mon–Fri: 8:00–18:00, Sat: 8:00–16:00',
        
        // Footer
        'footer-description': 'Your trusted partner for all automotive needs in Sofia.',
        'footer-navigation': 'Navigation',
        'footer-copyright': '© 2025 AutoComplex Miami. All rights reserved.',
        
        // Language toggle
        'lang-bg': 'BG',
        'lang-en': 'EN'
    }
};

let currentLanguage = 'bg';

// Backward compatibility shim for older inline handlers
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
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    // Update single toggle button label: EN means click to show English (current bg), BG means click to show Bulgarian (current en)
    const toggleButtons = document.querySelectorAll('.lang-toggle-btn');
    toggleButtons.forEach(btn => {
        btn.textContent = currentLanguage === 'bg' ? 'EN' : 'BG';
    });
    
    // Update page title and meta description
    if (currentLanguage === 'en') {
        document.title = 'Auto Miami - Bulgarian Auto Service Chain';
        document.querySelector('meta[name="description"]').content = 'AutoComplex Miami - trusted auto service in Miami for all your vehicle needs. Tires, painting, upholstery, ceramic coating and full detailing.';
    } else {
        document.title = 'Auto Miami - Българска Верига Автосервизи';
        document.querySelector('meta[name="description"]').content = 'AutoComplex Miami - доверен автосервиз в Маями за всички нужди на вашия автомобил. Гуми, боядисване, тапицерия, керамично покритие и пълен детайлинг.';
    }
}

function initLanguageSystem() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Set initial language
    setLanguage(currentLanguage);

    // Wire up single toggle button(s)
    const toggleButtons = document.querySelectorAll('.lang-toggle-btn');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const next = currentLanguage === 'bg' ? 'en' : 'bg';
            setLanguage(next);
        });
    });
}

// ===== INITIALIZATION =====
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

function initializeApp() {
    initLanguageSystem();
    initSmoothScroll();
    initNavigation();
    initGSAPAnimations();
    initScrollAnimations();
    //initContactForm();
    initMap();
    //initVideoControls();
    initServiceCards();
    initPackageCards();
    initMobileDrawer();
    initMobileDrawerSecondary();
    initPhotoSwipeGallery();
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

// ===== SMOOTH SCROLLING WITH LENIS =====
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

// ===== CUSTOM CURSOR =====
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


// ===== NAVIGATION =====
function initNavigation() {
    const header = document.getElementById('main-header');
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');


    // Legacy mobile menu kept for desktop fallback only
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

// ===== MOBILE DRAWER =====
function initMobileDrawer() {
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementById('mobile-drawer');
    const close = document.getElementById('drawer-close');
    const links = drawer ? drawer.querySelectorAll('.mobile-link') : [];

    if (!hamburger || !drawer) return;

    function openDrawer() {
        drawer.classList.add('open');
        close.classList.add('open')
        document.body.style.overflow = 'hidden';
        // Stagger reveal links
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

    // Close on background click
    drawer.addEventListener('click', (e) => {
        if (e.target === drawer) closeDrawer();
    });

    // Close when clicking any drawer link
    links.forEach(link => {
        if (link.id === 'drawer-options') {
            return;
        }
        link.addEventListener('click', () => closeDrawer());
    });
    
    // Close with ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
    });
}

function initMobileDrawerSecondary() {
    const optionsAnchor = document.getElementById('drawer-options');
    const drawer = document.getElementById('mobile-drawer-options');
    const arrowBack = document.getElementById('arrow-back');
    const insideContainer = document.getElementById('inside-container');
    console.log(arrowBack);
    const links = drawer ? drawer.querySelectorAll('.mobile-link-options') : [];
    console.log(close)
    if (!optionsAnchor || !drawer) return;

    function openDrawer() {
        arrowBack.classList.add('open')
        drawer.classList.add('open');
        insideContainer.classList.add('just-between');

        document.body.style.overflow = 'hidden';
        // Stagger reveal links
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

    // Close when clicking any drawer link
    links.forEach(link => link.addEventListener('click', () => closeDrawerSecondary()));
    console.log(links)

    // Close with ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawerSecondary();
    });
}


// ===== GSAP ANIMATIONS =====
function initGSAPAnimations() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Hero title animation
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

    // Service cards animation
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

    // Interior features animation
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

    // Gallery animation
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

    // Detailing packages animation
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

    // Insurance companies animation removed per request

    // Location cards animation
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

    // Contact form animation
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

    // Section titles animation
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

    // Parallax disabled for static hero image
}

// ===== SCROLL ANIMATIONS =====
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

    // Observe elements for animations
    const animationElements = document.querySelectorAll(
        '.fade-in-up, .scale-in, .slide-in-left, .slide-in-right'
    );

    animationElements.forEach(el => {
        observer.observe(el);
    });

    // Counter animation for statistics
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

// ===== CONTACT FORM =====
// function initContactForm() {
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
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;

    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--color-primary)' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(400px);
        transition: var(--transition-base);
        max-width: 400px;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);

    // Manual close
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
        if (notification.parentElement) {
            notification.parentElement.removeChild(notification);
        }
    }, 300);
}

// ===== MAP INITIALIZATION =====
function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    // Simple map placeholder with styling
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

    // You can integrate Google Maps here
    // Example: initGoogleMaps() or initMapbox()
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

        // Add click ripple effect
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

// ===== PACKAGE CARDS INTERACTION =====
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

// ===== UTILITY FUNCTIONS =====

// Throttle function for performance
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

// Debounce function for performance
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

// ===== PERFORMANCE OPTIMIZATIONS =====

// Optimize scroll events
const optimizedScrollHandler = throttle(() => {
    // Handle scroll events here
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Optimize resize events
const optimizedResizeHandler = debounce(() => {
    // Handle resize events here
    ScrollTrigger.refresh();
}, 250);

window.addEventListener('resize', optimizedResizeHandler);

// ===== ACCESSIBILITY =====

// Keyboard navigation
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

// Focus management
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===== PRELOADER (Optional) =====
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

// Initialize preloader
// initPreloader();

// ===== CONSOLE STYLING =====
console.log('%c🚗 AutoComplex Miami - Modern Car Service Website',
    'color: #dc2626; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with vanilla JavaScript, GSAP, and modern web technologies',
    'color: #6b7280; font-size: 14px;');

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
});