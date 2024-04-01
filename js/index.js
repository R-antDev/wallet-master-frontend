tailwind.config = {
    theme: {
        extend: {
            colors: {
                clifford: "#da373d",
            },
        },
    },
};

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileDropdownMenu = document.getElementById("mobileDropdownMenu");

    mobileMenuBtn.addEventListener("click", function () {
        mobileDropdownMenu.classList.toggle("hidden");
    });
});


function acceptAllCookies() {
    let cookieSection = document.getElementById("cookieSection");
    // cookieSection.classList.add("hidden");
    cookieSection.style.display = 'none';
}

window.onload = function() {
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
};

function closePopup() {
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}