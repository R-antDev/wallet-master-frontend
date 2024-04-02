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
// let downloadStats = document.getElementById('downloadStats')
// let downloads = {
//     count: '0 M'
// }
// anime({
//     targets: downloads,
//     count: '6 M',
//     easing: 'linear',
//     round: 1,
//     update: function () {
//         downloadStats.innerHTML = downloads.count
//     }
// })