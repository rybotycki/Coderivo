// Płynne przewijanie do sekcji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Obsługa formularza kontaktowego
document.querySelector('form').addEventListener('submit', function (e) {
  const name = this.querySelector('input[placeholder="Imię"]').value.trim();
  const email = this.querySelector('input[placeholder="Email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Wypełnij wszystkie pola.');
    return;
  }

  if (!emailPattern.test(email)) {
    e.preventDefault();
    alert('Podaj poprawny adres e-mail.');
  }
});

// Dynamiczny nagłówek w hero
const words = ["szybkie", "nowoczesne", "skuteczne", "profesjonalne", "efektywne"];
let current = 0;
const el = document.querySelector(".rotating-word");

setInterval(() => {
  current = (current + 1) % words.length;
  el.style.opacity = 0;
  setTimeout(() => {
    el.textContent = words[current];
    el.style.opacity = 1;
  }, 300);
}, 2500);


window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 20) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

const dots = document.querySelectorAll('.dot-animation');

dots.forEach(dot => {
  let count = 0;
  setInterval(() => {
    count = (count + 1) % 4;
    dot.textContent = '.'.repeat(count);
  }, 500);
});