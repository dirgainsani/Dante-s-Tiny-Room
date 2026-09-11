const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

feather.replace();

hamburger.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
  hamburger.setAttribute(
    "aria-expanded",
    navbarNav.classList.contains("active"),
  );
});

document.querySelectorAll(".navbar-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navbarNav.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

const searchInput = document.querySelector("#collection-search");
const cards = document.querySelectorAll(".collection-card");
const emptyState = document.querySelector(".empty-state");

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase().trim();
  let visibleCards = 0;

  cards.forEach((card) => {
    const matches = card.dataset.name.includes(query);
    card.hidden = !matches;
    if (matches) visibleCards += 1;
  });

  emptyState.hidden = visibleCards > 0;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.innerHTML = 'Pesan terkirim <i data-feather="check"></i>';
  button.disabled = true;
  feather.replace();
});
