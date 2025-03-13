let currentIndex = 0;

// 輪播圖功能
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// 自動輪播
let slideInterval = setInterval(nextSlide, 5000);

// 當滑鼠移到輪播圖上時暫停自動輪播
document.querySelector('.carousel').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// 當滑鼠離開輪播圖時恢復自動輪播
document.querySelector('.carousel').addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// 平滑滾動功能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 在滾動時添加導航欄的陰影效果
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    }
});
