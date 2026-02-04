/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;
    if (top < visible) el.classList.add("active");
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* MOUSE TRACKING NOS CARDS (Efeito de Luz) */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});

/* DARK / LIGHT MODE COM PERSISTÊNCIA */
const toggle = document.querySelector(".theme-toggle");
const body = document.body;

// Carregar tema salvo
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  
  const isLight = body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  
  // Troca o ícone dinamicamente
  toggle.innerHTML = isLight 
    ? '<i class="fa-solid fa-sun"></i>' 
    : '<i class="fa-solid fa-moon"></i>';
});