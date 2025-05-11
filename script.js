// Swiper Slider Konfigürasyonu
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// Giriş Formu İşlemleri
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Giriş başarılı! Hoş geldiniz.");
    this.reset();
});

// Animasyonlu Scroll Efekti
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Sayfa yüklendiğinde ilk kontrol
});

// Mobil Menü İşlemleri
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuButton.classList.toggle('active');
    });
}

// Form Validasyonu
const validateForm = (formId) => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (isValid) {
            // Form başarılı mesajı
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Form başarıyla gönderildi!';
            form.appendChild(successMessage);

            // 3 saniye sonra mesajı kaldır
            setTimeout(() => {
                successMessage.remove();
                form.reset();
            }, 3000);
        }
    });
};

// Tüm formları validate et
validateForm('loginForm');
validateForm('contactForm');
validateForm('registerForm');

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sayfa Yükleme Animasyonu
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '1';
    initDashboardCharts();
});

// Dinamik Tarih Güncelleme
const updateYear = () => {
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
};

updateYear();

// Dashboard Charts
function initDashboardCharts() {
    // Progress Chart
    const progressCtx = document.getElementById('progressChart');
    if (progressCtx) {
        new Chart(progressCtx, {
            type: 'line',
            data: {
                labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
                datasets: [{
                    label: 'Tamamlanan Dersler',
                    data: [3, 4, 2, 5, 3, 4, 3],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Topics Chart
    const topicsCtx = document.getElementById('topicsChart');
    if (topicsCtx) {
        new Chart(topicsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Matematik', 'Fen Bilgisi', 'Türkçe', 'Sosyal Bilgiler'],
                datasets: [{
                    data: [30, 25, 25, 20],
                    backgroundColor: [
                        '#3498db',
                        '#2ecc71',
                        '#f1c40f',
                        '#e74c3c'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
}

// Time Range Filter
const timeRangeSelect = document.getElementById('timeRange');
if (timeRangeSelect) {
    timeRangeSelect.addEventListener('change', function() {
        // Burada seçilen zaman aralığına göre verileri güncelleyebilirsiniz
        console.log('Selected time range:', this.value);
    });
}

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
    initDashboardCharts();
}); 