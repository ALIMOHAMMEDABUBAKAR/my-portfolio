// DARK MODE TOGGLE
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

if (toggleBtn) {
    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.innerHTML = `<i class="fas fa-moon"></i>`;
        }
    });
} else {
    console.log("Dark mode button not found!");
}


// SCROLL ANIMATION
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));


// TYPING EFFECT
const typingText = document.getElementById("typing-text");

if (typingText) {
    const roles = [
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Software Developer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (!isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1200);
                return;
            }
        } else {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 60 : 120);
    }

    typeEffect();
}
