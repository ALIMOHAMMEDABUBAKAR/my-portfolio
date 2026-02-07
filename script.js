const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
}

// Toggle dark mode
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.innerHTML = `<i class="fas fa-moon"></i>`;
    }

// Scroll Animation
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

});
