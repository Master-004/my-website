/* ── Typing banner ────────────────────────────────────────────────────────── */
const roles = [
  "Full-Stack Developer",
  "Go Engineer",
  "Problem Solver",
  "MISM Student at BYU"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typing-text");

function type() {
  if (!typingEl) return;
  const current = roles[roleIndex];
  if (isDeleting) {
    typingEl.textContent = current.slice(0, charIndex--);
  } else {
    typingEl.textContent = current.slice(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length + 1) {
    setTimeout(() => { isDeleting = true; type(); }, 1500);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", type);

/* ── Sticky nav shadow ────────────────────────────────────────────────────── */
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > 10);
});

/* ── Mobile hamburger ────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      const isOpen = !menu.classList.contains("hidden");
      menu.classList.toggle("hidden");
      btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
  }
});

/* ── Dark / Light mode toggle ────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const html = document.documentElement;

  const saved = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", saved);
  updateThemeIcon(saved, icon);

  if (toggle) {
    toggle.addEventListener("click", function () {
      const current = html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeIcon(next, icon);
    });
  }
});

function updateThemeIcon(theme, icon) {
  if (!icon) return;
  icon.className = theme === "dark" ? "fas fa-moon" : "fas fa-sun";
}

/* ── Project card expand / collapse ─────────────────────────────────────── */
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".details-toggle");
  if (!btn) return;

  const panel = btn.nextElementSibling;
  if (!panel) return;

  const isExpanded = btn.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    panel.style.maxHeight = "0";
    btn.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
    btn.querySelector("span").textContent = "View Details";
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    btn.setAttribute("aria-expanded", "true");
    panel.setAttribute("aria-hidden", "false");
    btn.querySelector("span").textContent = "Hide Details";
  }
});

/* ── Why Me flip cards (click-triggered, not hover) ─────────────────────── */
document.addEventListener("click", function (e) {
  const card = e.target.closest(".flip-card");
  if (!card) return;
  const inner = card.querySelector(".flip-card-inner");
  if (!inner) return;

  const flipped = inner.classList.toggle("flipped");
  card.setAttribute("aria-label",
    card.getAttribute("aria-label").replace(
      flipped ? "click to flip" : "click to flip back",
      flipped ? "click to flip back" : "click to flip"
    )
  );
});

/* Allow keyboard activation of flip cards (Enter / Space) */
document.addEventListener("keydown", function (e) {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".flip-card");
  if (!card) return;
  e.preventDefault();
  card.click();
});

/* ── Lottie wave animation ───────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  const waveContainer = document.getElementById("wave-container");
  const wrapper = document.getElementById("profile-wrapper");
  if (!waveContainer || !wrapper || typeof lottie === "undefined") return;

  var waveAnim = lottie.loadAnimation({
    container: waveContainer,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "/animations/wave.json"
  });

  wrapper.addEventListener("mouseenter", function () {
    waveAnim.goToAndPlay(0, true);
  });

  wrapper.addEventListener("click", function () {
    waveAnim.goToAndPlay(0, true);
  });

  if ("ontouchstart" in window) {
    waveAnim.play();
  }
});
