// Initialize Lucide icons
        lucide.createIcons();

        // Mobile menu toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Contact widget toggle
        function toggleContactWidget() {
            const widget = document.getElementById('contact-widget');
            widget.classList.toggle('hidden');
        }

        // Close contact widget when clicking outside
        document.addEventListener('click', function(event) {
            const widget = document.getElementById('contact-widget');
            const button = event.target.closest('button');
            if (!widget.classList.contains('hidden') && !button?.onclick?.toString().includes('toggleContactWidget')) {
                if (!widget.contains(event.target)) {
                    widget.classList.add('hidden');
                }
            }
        });

        // Scroll to top
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Slides content
const slidesContent = [
    {
        top: "Имате идея? Споделете я, за да намерим заедно най-доброто решение.",
        title: "Изразете<br>индивидуалност!",
        sub: "Широк спектър от качествени автомобилни кожи, Алкантара, винил и дамаски!"
    },
    {
        top: "Професионална изработка с внимание към детайла.",
        title: "Перфектен<br>интериор!",
        sub: "Превърнете автомобила си в нещо уникално с нашите услуги."
    },
    {
        top: "Качество, което се усеща при всяко докосване.",
        title: "Лукс и<br>комфорт!",
        sub: "Работим само с премиум материали за максимален резултат."
    }
];

let currentSlide = 0;
const totalSlides = 3;

const indicators = document.querySelectorAll('.slide-indicator');

function updateSlide() {
    indicators.forEach((ind, index) => {
        ind.classList.toggle('active', index === currentSlide);
    });

    document.getElementById("hero-top-text").innerText = slidesContent[currentSlide].top;
    document.getElementById("hero-title").innerHTML = slidesContent[currentSlide].title;
    document.getElementById("hero-subtext").innerText = slidesContent[currentSlide].sub;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
    animateHeroContent();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
    animateHeroContent();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlide();
    animateHeroContent();
}

function animateHeroContent() {
    const content = document.querySelector('.relative.z-10');

    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';

    setTimeout(() => {
        content.style.transition = 'all 0.5s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 50);
}

// Auto slide
setInterval(() => {
    nextSlide();
}, 10000);

// Init
updateSlide();
        // Navbar scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
            
            lastScroll = currentScroll;
        });
    