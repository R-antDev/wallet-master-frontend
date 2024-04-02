document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileDropdownMenu = document.getElementById("mobileDropdownMenu");

    mobileMenuBtn.addEventListener("click", function () {
        mobileDropdownMenu.classList.toggle("hidden");
    });
});


function acceptAllCookies() {
    let cookieSection = document.getElementById("cookieSection");
    anime({
        targets: cookieSection,
        opacity: 0,
        duration: 500,
        easing: 'linear',
        complete: () => cookieSection.classList.add("hidden")
    });
}

window.onload = function() {
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
};

function closePopup() {
    let overlay = document.getElementById('overlay');
    anime({
        targets: overlay,
        translateY: ['-50%', '-100%'],
        opacity: 0,
        duration: 500,
        easing: 'easeInOutQuad',
        complete: () =>overlay.style.display = 'none'
    });
}

// Download stats

function allStats() {
    let downloadStats = document.getElementById('downloadStats')
    let ratingStats = document.getElementById('ratingStats')
    let languageStats = document.getElementById('languageStats')
    let banksStats = document.getElementById('banksStats')

    let counter = {
        download: '0 M',
        rating: 0,
        language: '0+',
        banks: '0 K'
    }
    anime({
        targets: counter,
        download: '6 M',
        rating: 4,
        language: '20+',
        banks: '15 K',
        easing: 'linear',
        round: 1,
        update: function () {
            downloadStats.innerHTML = counter.download
            ratingStats.innerHTML = counter.rating
            languageStats.innerHTML = counter.language
            banksStats.innerHTML = counter.banks
        }
    })
}

// Get the container element
const animationContainer = document.getElementById('animationContainer');

animationContainer.addEventListener('wheel', function() {
    anime({
        targets: '#budgeting',
        translateX: [
            { value: -100, duration: 500, easing: 'easeInOutQuad' },
            { value: 0, duration: 500, easing: 'easeInOutQuad' }
        ]
    });

    anime({
        targets: '#expense-control',
        translateX: [
            { value: -100, duration: 500, easing: 'easeInOutQuad' },
            { value: 0, duration: 500, easing: 'easeInOutQuad' }
        ],
        delay: 100
    });

    anime({
        targets: '#planning',
        translateX: [
            { value: -100, duration: 500, easing: 'easeInOutQuad' },
            { value: 0, duration: 500, easing: 'easeInOutQuad' }
        ],
        delay: 200
    });
});
