const ageGate = document.getElementById("ageGate");
const acceptAge = document.getElementById("acceptAge");
const exitAge = document.getElementById("exitAge");

const languageButton = document.getElementById("languageButton");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const siteHeader = document.getElementById("siteHeader");

let currentLanguage = "sr";

/* AGE VERIFICATION */

if (localStorage.getItem("rakiaAgeConfirmed") === "true") {
  ageGate.classList.add("hidden");
  document.body.classList.remove("age-locked");
}

acceptAge.addEventListener("click", function () {
  localStorage.setItem("rakiaAgeConfirmed", "true");
  ageGate.classList.add("hidden");
  document.body.classList.remove("age-locked");
});

exitAge.addEventListener("click", function () {
  window.location.href = "https://www.google.com";
});

/* LANGUAGE SWITCH */

languageButton.addEventListener("click", function () {
  currentLanguage = currentLanguage === "sr" ? "en" : "sr";

  const translatedElements = document.querySelectorAll(
    "[data-sr][data-en]"
  );

  translatedElements.forEach(function (element) {
    element.innerHTML = element.dataset[currentLanguage];
  });

  languageButton.textContent =
    currentLanguage === "sr" ? "EN" : "SR";

  document.documentElement.lang =
    currentLanguage === "sr" ? "sr" : "en";
});

/* MOBILE MENU */

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});

/* HEADER ON SCROLL */

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
});

/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(function (element) {
  revealObserver.observe(element);
});
