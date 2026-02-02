// TYPING EFFECT
let text = ["Frontend Developer", "Web Designer", "JavaScript Learner"];
let index = 0;
let count = 0;

function type() {
  if (index === text.length) {
    index = 0;
  }

  let current = text[index];
  let letter = current.slice(0, ++count);

  document.getElementById("typing").textContent = letter;

  if (letter.length === current.length) {
    index++;
    count = 0;
  }

  setTimeout(type, 200);
}
type();

// DARK / LIGHT MODE
function toggleTheme() {
  document.body.classList.toggle("light-theme");
  const btn = document.querySelector('.theme-btn');
  if (document.body.classList.contains('light-theme')) {
    // Switch to Moon Icon
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    // Switch to Sun Icon
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

// MOBILE MENU
function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("active");
}
// CLOSE MENU AFTER CLICK

document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("nav ul").classList.remove("active");
  });
});

// SCROLL REVEAL ANIMATION
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, observerOptions);

document.querySelectorAll('section, .home, .education-card, .skill-card, .project-card, .cert-card').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
// STARRY BACKGROUND EFFECT
// STARRY BACKGROUND EFFECT
function createStars() {
  const starsContainer = document.createElement("div");
  starsContainer.id = "stars-container";
  document.body.appendChild(starsContainer);

  const starCount = 400; // Increased density significantly
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random Position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    // Random Size
    const size = Math.random() * 2;

    // Random Twinkle Duration
    const duration = Math.random() * 3 + 2;

    // Random Float Delay (Critical for natural look)
    const delay = Math.random() * -50; // Negative delay to start mid-animation

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.setProperty('--duration', `${duration}s`);
    star.style.animationDelay = `${delay}s`; // Staggered movement starts

    starsContainer.appendChild(star);
  }
}

// ACTION: Mouse Tracking Spotlight
document.addEventListener('mousemove', (e) => {
  document.body.style.setProperty('--cursor-x', `${e.clientX}px`);
  document.body.style.setProperty('--cursor-y', `${e.clientY}px`);
});

// ACTION: Shooting Stars
function createShootingStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");

  // Random Start Position (Top/Left areas primarily)
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * (window.innerHeight * 0.5); // Top half only

  star.style.left = `${startX}px`;
  star.style.top = `${startY}px`;

  document.body.appendChild(star);

  // Remove after animation
  setTimeout(() => {
    star.remove();
  }, 2000);
}

// Spawn a shooting star every 4 seconds
setInterval(createShootingStar, 4000);

createStars();
