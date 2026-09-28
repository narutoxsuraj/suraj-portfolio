const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("menu-open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => navbar.classList.remove("menu-open"));
});

document.getElementById("year").textContent = new Date().getFullYear();
